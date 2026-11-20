// Server-side validation and formatting for booking requests.
// Files under api/_lib are helpers, not endpoints (Vercel skips "_" paths).
import {
  BOOKING_SERVICES,
  LIMITS,
  EMAIL_RE,
  isValidPhone,
  serviceName,
  formatDate,
  plural,
  peruDateISO,
  minPickupDate,
  isTooSoon,
  MIN_NOTICE_MINUTES,
} from '../../src/config/bookingServices.js';

const MAX_LEN = { from: 200, to: 200, flight: 20, name: 100, email: 150, phone: 30, notes: 1000 };

const str = (v) => (typeof v === 'string' ? v.trim() : '');

/**
 * Returns { booking } when valid, or { errors: string[] } describing what is wrong.
 * Airport ends are forced server-side, so a tampered request can't change them.
 */
export function validateBooking(body) {
  const errors = [];
  const b = body && typeof body === 'object' ? body : {};

  const service = BOOKING_SERVICES.find((s) => s.id === b.service);
  if (!service) errors.push('Tipo de traslado no válido.');

  const date = str(b.date);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date))) errors.push('Fecha no válida.');
  else if (date < minPickupDate()) errors.push('Esa fecha ya pasó (hora de Perú).');

  const time = str(b.time);
  const [hh, mm] = time.split(':').map(Number);
  if (!/^\d{2}:\d{2}$/.test(time) || hh > 23 || mm > 59) errors.push('Hora no válida.');
  else if (!errors.length && isTooSoon(date, time)) {
    errors.push(`Reserva con al menos ${MIN_NOTICE_MINUTES / 60} horas de anticipación.`);
  }

  const int = (v, { min, max }, label) => {
    const n = Number(v);
    if (!Number.isInteger(n) || n < min || n > max) errors.push(`${label}: entre ${min} y ${max}.`);
    return n;
  };
  const passengers = int(b.passengers, LIMITS.passengers, 'Pasajeros');
  const bags = int(b.bags, LIMITS.bags, 'Maletas');

  const fields = {};
  for (const key of Object.keys(MAX_LEN)) {
    fields[key] = str(b[key]);
    if (fields[key].length > MAX_LEN[key]) errors.push(`El campo ${key} es demasiado largo.`);
  }
  if (service?.from) fields.from = service.from;
  if (service?.to) fields.to = service.to;
  if (!fields.from || !fields.to) errors.push('Falta el origen o el destino.');

  if (!fields.email && !fields.phone) errors.push('Déjanos un correo o un teléfono.');
  if (fields.email && !EMAIL_RE.test(fields.email)) errors.push('Correo no válido.');
  if (fields.phone && !isValidPhone(fields.phone)) errors.push('Teléfono no válido.');

  if (errors.length) return { errors };
  return {
    booking: { service: serviceName(service), date, time, passengers, bags, ...fields },
  };
}

/** Short, human-friendly reference like DT-261116-4K7Q. */
export function bookingId() {
  const d = peruDateISO().slice(2).replaceAll('-', '');
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase().padEnd(4, '0');
  return `DT-${d}-${rand}`;
}

/** Label/value pairs in display order; optional fields are skipped when empty. */
export function bookingRows(b) {
  return [
    ['Servicio', b.service],
    ['Fecha', `${formatDate(b.date)}, ${b.time}`],
    ['Viajan', `${plural(b.passengers, 'pasajero', 'pasajeros')} · ${plural(b.bags, 'maleta', 'maletas')}`],
    ['Recojo en', b.from],
    ['Destino', b.to],
    ['Vuelo', b.flight],
    ['Nombre', b.name],
    ['Correo', b.email],
    ['Teléfono', b.phone],
    ['Notas', b.notes],
  ].filter(([, v]) => v);
}

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

/** Simple, email-client-safe HTML (inline styles, tables). */
export function bookingEmailHtml({ title, intro, id, booking, footer }) {
  const rows = bookingRows(booking)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;color:#6b7280;font-size:13px;white-space:nowrap;vertical-align:top">${escapeHtml(k)}</td>` +
        `<td style="padding:8px 12px;color:#111827;font-size:15px">${escapeHtml(v).replace(/\n/g, '<br>')}</td></tr>`
    )
    .join('');
  return `<!doctype html><html><body style="margin:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 12px"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden">
<tr><td style="background:#0B0D0E;padding:20px 24px;color:#FFD64B;font-size:18px;letter-spacing:2px">DESTINOS TRAVEL</td></tr>
<tr><td style="padding:24px">
<h1 style="margin:0 0 8px;font-size:20px;color:#111827">${escapeHtml(title)}</h1>
<p style="margin:0 0 16px;color:#374151;font-size:15px">${escapeHtml(intro)}</p>
<p style="margin:0 0 16px;color:#6b7280;font-size:13px">Código de reserva: <strong style="color:#111827">${escapeHtml(id)}</strong></p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px">${rows}</table>
${footer ? `<p style="margin:16px 0 0;color:#6b7280;font-size:13px">${escapeHtml(footer)}</p>` : ''}
</td></tr></table></td></tr></table></body></html>`;
}

export function bookingEmailText({ intro, id, booking }) {
  return [intro, '', `Código de reserva: ${id}`, '', ...bookingRows(booking).map(([k, v]) => `${k}: ${v}`)].join('\n');
}
