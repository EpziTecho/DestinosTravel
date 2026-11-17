// POST /api/reservas — receives a booking from the website form.
//
// It does up to three things, each one enabled by its environment variables
// (see docs/reservas-backend.md):
//   1. Emails the booking to the company            RESEND_API_KEY, BOOKING_EMAIL_TO
//   2. Appends a row to a Google Sheet               SHEETS_WEBHOOK_URL, SHEETS_WEBHOOK_SECRET
//   3. Emails a confirmation to the customer         SEND_CUSTOMER_EMAIL=true (needs a verified domain)
// The booking succeeds when at least one of 1 or 2 worked, so nothing is lost.
import { validateBooking, bookingId, bookingEmailHtml, bookingEmailText } from './_lib/booking.js';

const env = (k) => process.env[k]?.trim() || '';

// Best-effort spam brake: per-IP, per warm instance. Not a hard guarantee on serverless.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_MAX;
}

async function sendEmail({ to, subject, html, text, replyTo }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env('RESEND_API_KEY')}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env('BOOKING_EMAIL_FROM') || 'Destinos Travel <onboarding@resend.dev>',
      to: to.split(',').map((s) => s.trim()).filter(Boolean),
      subject,
      html,
      text,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

async function appendToSheet(id, b) {
  const res = await fetch(env('SHEETS_WEBHOOK_URL'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret: env('SHEETS_WEBHOOK_SECRET'), id, ...b }),
    redirect: 'follow',
  });
  const data = await res.json().catch(() => null);
  if (!res.ok || !data?.ok) throw new Error(`Sheets ${res.status}: ${JSON.stringify(data)}`);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Método no permitido.' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ ok: false, error: 'Solicitud no válida.' });
    }
  }

  // Honeypot: real users never see or fill this field. Pretend success so bots move on.
  if (body?.website) return res.status(200).json({ ok: true, id: bookingId() });

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) {
    return res.status(429).json({ ok: false, error: 'Demasiados intentos. Escríbenos por WhatsApp, por favor.' });
  }

  const { booking, errors } = validateBooking(body);
  if (errors) return res.status(400).json({ ok: false, error: errors.join(' ') });

  const id = bookingId();
  const canEmail = Boolean(env('RESEND_API_KEY') && env('BOOKING_EMAIL_TO'));
  const canSheet = Boolean(env('SHEETS_WEBHOOK_URL'));

  if (!canEmail && !canSheet) {
    if (env('BOOKING_DRY_RUN') === '1') {
      console.log(`[reservas] DRY RUN ${id}`, booking);
      return res.status(200).json({ ok: true, id, dryRun: true });
    }
    console.error('[reservas] No delivery configured (RESEND_API_KEY / SHEETS_WEBHOOK_URL).');
    return res.status(503).json({ ok: false, error: 'Las reservas en línea no están disponibles ahora.' });
  }

  const tasks = [];
  if (canEmail) {
    const who = booking.name || booking.email || booking.phone;
    tasks.push(
      sendEmail({
        to: env('BOOKING_EMAIL_TO'),
        subject: `Nueva reserva ${id} · ${booking.service} · ${booking.date} ${booking.time}`,
        html: bookingEmailHtml({ title: 'Nueva reserva desde la web', intro: `Reserva de ${who}.`, id, booking }),
        text: bookingEmailText({ intro: `Nueva reserva de ${who}.`, id, booking }),
        replyTo: booking.email || undefined,
      })
    );
  }
  if (canSheet) tasks.push(appendToSheet(id, booking));

  const results = await Promise.allSettled(tasks);
  results.filter((r) => r.status === 'rejected').forEach((r) => console.error('[reservas]', id, r.reason));
  if (!results.some((r) => r.status === 'fulfilled')) {
    return res.status(502).json({ ok: false, error: 'No pudimos registrar tu reserva.' });
  }

  // Customer confirmation is a courtesy: its failure never fails the booking.
  if (canEmail && booking.email && env('SEND_CUSTOMER_EMAIL') === 'true') {
    const intro = 'Recibimos tu solicitud. Te confirmaremos la reserva y la tarifa muy pronto.';
    await sendEmail({
      to: booking.email,
      subject: `Recibimos tu reserva ${id} · Destinos Travel`,
      html: bookingEmailHtml({
        title: '¡Gracias por reservar con nosotros!',
        intro,
        id,
        booking,
        footer: 'Si necesitas cambiar algo, responde a este correo o escríbenos por WhatsApp.',
      }),
      text: bookingEmailText({ intro, id, booking }),
      replyTo: env('BOOKING_EMAIL_TO').split(',')[0].trim(),
    }).catch((e) => console.error('[reservas] customer email', id, e));
  }

  return res.status(200).json({ ok: true, id });
}
