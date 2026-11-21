import { useEffect, useRef, useState } from 'react';
import { serviceIcon } from './serviceIcons';
import {
  Lock,
  Minus,
  Plus,
  Clock,
  MessageCircle,
  CalendarCheck,
  Send,
  CircleCheck,
  Loader2,
} from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { WHATSAPP_NUMBER } from '../config/socialLinks';
import { ROUTES, BOOK_SERVICE_EVENT } from '../lib/nav';
import {
  BOOKING_SERVICES,
  LIMITS,
  EMAIL_RE,
  isValidPhone,
  minPickupDate,
  isTooSoon,
  isPastTime,
  MIN_NOTICE_MINUTES,
  SHORT_NOTICE_NOTE,
  serviceName,
  formatDate,
  hides,
  vehicleOptions,
  travelSummary,
} from '../config/bookingServices';

const SERVICES = BOOKING_SERVICES.map((s) => ({ ...s, icon: serviceIcon(s.id) }));

const EMPTY_FORM = {
  service: null,
  date: '',
  hour: '',
  minute: '',
  passengers: 1,
  bags: 1,
  handBags: 0,
  vehicle: '',
  from: '',
  to: '',
  flight: '',
  name: '',
  email: '',
  phone: '',
  notes: '',
  website: '', // honeypot, hidden from people
};

const pad2 = (n) => String(n).padStart(2, '0');
const HOURS = Array.from({ length: 24 }, (_, i) => pad2(i));
const MINUTES = Array.from({ length: 12 }, (_, i) => pad2(i * 5));

/** Keeps only digits, at most `maxLen` of them. */
const digits = (v, maxLen) => v.replace(/\D/g, '').slice(0, maxLen);

/** On blur: clamp a typed 1–2 digit value into range and zero-pad it ('' stays ''). */
function normalizeTimePart(v, max) {
  if (v === '') return '';
  return pad2(Math.min(Number(v), max));
}



const TIME_PARTS = {
  hour: { max: 23, options: HOURS, label: 'Hora (00 a 23)', placeholder: 'HH', listLabel: 'Horas' },
  minute: { max: 59, options: MINUTES, label: 'Minutos (00 a 59)', placeholder: 'MM', listLabel: 'Minutos' },
};

/**
 * Pickup time: two boxes (HH : MM) that can be typed, plus a panel with every hour or
 * every 5 minutes while one is focused. The panel always lists all the options (a native
 * datalist would filter them by what is already typed). Picking an hour jumps to minutes.
 */
function TimePicker({ hour, minute, onHour, onMinute, highlight, describedBy }) {
  const [open, setOpen] = useState(null); // 'hour' | 'minute' | null
  const [draft, setDraft] = useState({ hour: null, minute: null });
  const minuteRef = useRef(null);
  const values = { hour, minute };
  const setters = { hour: onHour, minute: onMinute };

  const commit = (part) => {
    const d = draft[part];
    if (d) setters[part](normalizeTimePart(d, TIME_PARTS[part].max));
    setDraft((x) => ({ ...x, [part]: null }));
  };

  const pick = (part, option) => {
    setters[part](option);
    setDraft((x) => ({ ...x, [part]: null }));
    if (part === 'hour') minuteRef.current?.focus();
    else setOpen(null);
  };

  const box = (part) => (
    <input
      ref={part === 'minute' ? minuteRef : undefined}
      type="text"
      inputMode="numeric"
      autoComplete="off"
      role="combobox"
      aria-expanded={open === part}
      aria-controls={`booking-${part}-list`}
      aria-label={TIME_PARTS[part].label}
      aria-describedby={describedBy}
      placeholder={TIME_PARTS[part].placeholder}
      value={draft[part] ?? values[part]}
      onFocus={() => setOpen(part)}
      onClick={() => setOpen(part)}
      onChange={(e) => {
        const d = digits(e.target.value, 2);
        setDraft((x) => ({ ...x, [part]: d }));
        if (d.length === 2) setters[part](normalizeTimePart(d, TIME_PARTS[part].max));
      }}
      onBlur={() => {
        commit(part);
        setOpen((o) => (o === part ? null : o));
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') setOpen(null);
        if (e.key === 'Enter') {
          e.preventDefault();
          commit(part);
          setOpen(null);
        }
      }}
      className={`${inputClass} text-center tabular-nums ${highlight ? 'border-[#FFD64B]/70' : ''} ${
        open === part ? 'border-[#FFD64B]/60' : ''
      }`}
    />
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {box('hour')}
        <span className="text-lg text-[#E5E7EB]/50">:</span>
        {box('minute')}
      </div>
      {open && (
        <div
          id={`booking-${open}-list`}
          role="listbox"
          aria-label={TIME_PARTS[open].listLabel}
          className="grid grid-cols-6 gap-1.5 rounded-xl border border-[#1F2428] bg-[#0B0D0E]/90 p-2"
        >
          {TIME_PARTS[open].options.map((o) => {
            const selected = values[open] === o;
            return (
              <button
                key={o}
                type="button"
                role="option"
                aria-selected={selected}
                tabIndex={-1}
                // Keep the focus in the box, so it doesn't blur and close the panel first.
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => pick(open, o)}
                className={`rounded-lg py-2 text-sm tabular-nums transition-colors ${
                  selected
                    ? 'bg-[#FFD64B] text-[#0B0D0E]'
                    : 'text-[#E5E7EB]/80 hover:bg-[#FFD64B]/15 hover:text-[#FFD64B]'
                }`}
              >
                {o}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function buildMessage(f, service) {
  const travel = travelSummary(service, f);
  const labels = routeLabels(service);
  const lines = [
    'Hola, vengo de la página web de Destinos Travel y quiero reservar un servicio:',
    '',
    `• Servicio: ${serviceName(service)}`,
    `• Fecha: ${formatDate(f.date)}, ${f.time}`,
    ...(travel ? [`• Viajan: ${travel}`] : []),
    ...(f.vehicle ? [`• Vehículo: ${f.vehicle}`] : []),
    `• ${labels.from}: ${f.from.trim()}`,
    `• ${labels.to}: ${f.to.trim()}`,
  ];
  if (f.flight.trim()) lines.push(`• Vuelo: ${f.flight.trim()}`);
  if (f.name.trim()) lines.push(`• Nombre: ${f.name.trim()}`);
  if (f.email.trim()) lines.push(`• Correo: ${f.email.trim()}`);
  if (f.phone.trim()) lines.push(`• Teléfono: ${f.phone.trim()}`);
  if (f.notes.trim()) lines.push(`• Notas: ${f.notes.trim()}`);
  if (isTooSoon(f.date, f.time)) lines.push('', SHORT_NOTICE_NOTE);
  lines.push('', 'Quedo atento a la confirmación y la tarifa. ¡Gracias!');
  return lines.join('\n');
}

const DEFAULT_ROUTE_LABELS = { from: 'Te recogemos en', to: 'Te llevamos a' };
const routeLabels = (service) => service?.fieldLabels ?? DEFAULT_ROUTE_LABELS;

const inputClass =
  'w-full rounded-xl border border-[#1F2428] bg-[#0B0D0E]/70 px-4 py-3 text-[15px] text-[#E5E7EB] placeholder:text-[#E5E7EB]/30 outline-none transition-colors focus:border-[#FFD64B]/60';

function StepHeader({ n, title }) {
  return (
    <div className="mb-4 flex items-baseline justify-between">
      <h3 className="font-display text-lg text-[#E5E7EB] sm:text-xl">{title}</h3>
      <span className="font-label text-[11px] tracking-[0.25em] text-[#E5E7EB]/30">{n}/3</span>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-label text-[11px] tracking-[0.2em] text-[#E5E7EB]/50 uppercase">{label}</span>
      {children}
    </label>
  );
}

function Stepper({ label, note, value, min, max, onChange }) {
  // `draft` lets the field be briefly empty while typing; it is clamped on blur.
  const [draft, setDraft] = useState(null);
  const commit = () => {
    if (draft === null) return;
    onChange(draft === '' ? min : Math.min(max, Math.max(min, Number(draft))));
    setDraft(null);
  };

  return (
    <div className="flex items-center justify-between rounded-xl border border-[#1F2428] bg-[#0B0D0E]/70 px-4 py-2.5">
      <span className="flex flex-col text-[15px] leading-tight text-[#E5E7EB]/80">
        {label}
        {note && <span className="text-xs text-[#E5E7EB]/40">{note}</span>}
      </span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          aria-label={`Quitar ${label.toLowerCase()}`}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#FFD64B]/30 text-[#FFD64B] transition-opacity disabled:opacity-25"
        >
          <Minus size={14} />
        </button>
        <input
          type="text"
          inputMode="numeric"
          aria-label={label}
          value={draft ?? String(value)}
          onChange={(e) => setDraft(digits(e.target.value, 2))}
          onFocus={(e) => e.target.select()}
          onBlur={commit}
          onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), commit())}
          className="w-9 rounded-md border border-transparent bg-transparent text-center text-lg text-[#E5E7EB] tabular-nums outline-none focus:border-[#FFD64B]/50"
        />
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          aria-label={`Agregar ${label.toLowerCase()}`}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#FFD64B]/30 text-[#FFD64B] transition-opacity disabled:opacity-25"
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
}

function VehiclePicker({ options, value, onChange }) {
  return (
    <div role="radiogroup" aria-label="Tipo de vehículo" className="flex flex-wrap gap-2.5">
      {options.map((v) => {
        const active = value === v;
        return (
          <button
            key={v}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(v)}
            className={`flex-1 rounded-xl border px-4 py-3 text-[15px] whitespace-nowrap transition-colors ${
              active
                ? 'border-[#FFD64B] bg-[#FFD64B]/10 text-[#FFD64B]'
                : 'border-[#1F2428] bg-[#0B0D0E]/70 text-[#E5E7EB]/80 hover:border-[#FFD64B]/40'
            }`}
          >
            {v}
          </button>
        );
      })}
    </div>
  );
}

/** Step 2 title, matching what the service asks for. */
function whenTitle(service) {
  if (vehicleOptions(service)) return '¿Cuándo y en qué vehículo?';
  if (hides(service, 'passengers')) return '¿Para cuándo?';
  return '¿Cuándo y cuántos viajan?';
}

function RouteInput({ value, locked, onChange }) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        readOnly={locked}
        aria-readonly={locked}
        placeholder="Dirección, hotel u oficina"
        className={`${inputClass} ${locked ? 'cursor-not-allowed border-[#FFD64B]/25 pr-10 text-[#FFD64B]/90' : ''}`}
      />
      {locked && (
        <Lock
          size={15}
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[#FFD64B]/60"
        />
      )}
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex flex-col gap-1 border-b border-[#1F2428] py-3 last:border-b-0">
      <span className="font-label text-[10px] tracking-[0.25em] text-[#E5E7EB]/40 uppercase">{label}</span>
      <span className={`text-[15px] ${value ? 'text-[#E5E7EB]' : 'text-[#E5E7EB]/30 italic'}`}>{value || 'sin elegir'}</span>
    </div>
  );
}

export function BookingSection() {
  const [headRef, headRevealed] = useReveal(0.3);
  const [form, setForm] = useState(EMPTY_FORM);
  // Which button was last pressed with something missing: 'direct' | 'whatsapp' | null.
  const [attempted, setAttempted] = useState(null);
  // idle | sending | sent | error
  const [status, setStatus] = useState('idle');
  const [serverError, setServerError] = useState('');
  const [bookingRef, setBookingRef] = useState('');
  // Steppers the visitor changed by hand: a service's `defaults` don't override them.
  const touched = useRef({});

  const set = (key) => (value) => setForm((f) => ({ ...f, [key]: value }));
  const setFromEvent = (key) => (e) => set(key)(e.target.value);
  const setByHand = (key) => (value) => {
    touched.current[key] = true;
    set(key)(value);
  };

  const service = SERVICES.find((s) => s.id === form.service);
  const isAirport = Boolean(service?.from || service?.to);
  const time = form.hour.length === 2 && form.minute.length === 2 ? `${form.hour}:${form.minute}` : '';

  function chooseService(s) {
    setForm((f) => {
      const prev = SERVICES.find((p) => p.id === f.service);
      // A locked airport end is set by the new service, or cleared when leaving one that locked it.
      const end = (current, prevLocked, nextLocked) => nextLocked ?? (prevLocked ? '' : current);
      // Untouched values take the new service's default, or go back to the form's default.
      const defaults = {};
      for (const key of new Set([...Object.keys(prev?.defaults ?? {}), ...Object.keys(s.defaults ?? {})])) {
        if (!touched.current[key]) defaults[key] = s.defaults?.[key] ?? EMPTY_FORM[key];
      }
      const vehicles = vehicleOptions(s);
      return {
        ...f,
        ...defaults,
        service: s.id,
        vehicle: vehicles ? (vehicles.includes(f.vehicle) ? f.vehicle : vehicles[0]) : '',
        from: end(f.from, prev?.from, s.from),
        to: end(f.to, prev?.to, s.to),
      };
    });
  }

  // A "Reservar" button elsewhere on the page (service cards) picks the service for us.
  useEffect(() => {
    const onBook = (e) => {
      const s = SERVICES.find((x) => x.id === e.detail);
      if (!s) return;
      if (status === 'sent') resetForm(); // start a new booking instead of editing the one just sent
      setAttempted(null);
      chooseService(s);
    };
    window.addEventListener(BOOK_SERVICE_EVENT, onBook);
    return () => window.removeEventListener(BOOK_SERVICE_EVENT, onBook);
  }, [status]);

  const missing = [];
  if (!service) missing.push('elegir el tipo de traslado');
  // Peru-time minimum, recomputed each render so it rolls over at midnight in Lima.
  const minDate = minPickupDate();
  const tooSoon = Boolean(form.date) && form.date < minDate;
  if (!form.date || !time) missing.push('el día y la hora');
  else if (tooSoon) missing.push('un día de recojo que no haya pasado');
  // A time that already passed is blocked; less than MIN_NOTICE_MINUTES ahead is accepted,
  // subject to availability (Peru time).
  const hasDateTime = !tooSoon && Boolean(form.date) && Boolean(time);
  const timePast = hasDateTime && isPastTime(form.date, time);
  const shortNotice = hasDateTime && !timePast && isTooSoon(form.date, time);
  if (timePast) missing.push('una hora que no haya pasado');
  if (!form.from.trim() || !form.to.trim()) missing.push('la ruta');
  const ready = missing.length === 0;

  // The direct booking also needs a way to reach the customer.
  const email = form.email.trim();
  const phone = form.phone.trim();
  const contactMissing = [];
  if (!email && !phone) contactMissing.push('un correo o un teléfono');
  if (email && !EMAIL_RE.test(email)) contactMissing.push('un correo válido');
  if (phone && !isValidPhone(phone)) contactMissing.push('un teléfono válido');
  const directMissing = [...missing, ...contactMissing];
  const directReady = directMissing.length === 0;

  function sendWhatsApp() {
    if (!ready) return setAttempted('whatsapp');
    setAttempted(null);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage({ ...form, time }, service))}`;
    window.open(url, '_blank', 'noopener');
  }

  async function submitDirect(e) {
    e.preventDefault();
    if (status === 'sending') return;
    if (!directReady) return setAttempted('direct');
    setAttempted(null);
    setStatus('sending');
    setServerError('');
    try {
      const res = await fetch('/api/reservas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          time,
          // Fields the service doesn't ask for are sent as 0.
          passengers: hides(service, 'passengers') ? 0 : form.passengers,
          bags: hides(service, 'bags') ? 0 : form.bags,
          handBags: hides(service, 'handBags') ? 0 : form.handBags,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || 'No pudimos enviar tu reserva.');
      setBookingRef(data.id);
      setStatus('sent');
    } catch (err) {
      setServerError(err.message === 'Failed to fetch' ? 'Revisa tu conexión a internet.' : err.message);
      setStatus('error');
    }
  }

  function resetForm() {
    setForm(EMPTY_FORM);
    setStatus('idle');
    setBookingRef('');
    setAttempted(null);
    touched.current = {};
  }

  let hint;
  let hintAlert = false;
  if (status === 'error') {
    hint = `${serverError} Puedes intentarlo de nuevo o reservar por WhatsApp.`;
    hintAlert = true;
  } else if (attempted === 'direct' && !directReady) {
    hint = `Falta ${directMissing.join(', ')}.`;
    hintAlert = true;
  } else if (attempted === 'whatsapp' && !ready) {
    hint = `Falta ${missing.join(', ')}.`;
    hintAlert = true;
  } else if (shortNotice) {
    hint = SHORT_NOTICE_NOTE;
    hintAlert = true;
  } else if (directReady) {
    hint = 'Te confirmamos la reserva y la tarifa antes del viaje.';
  } else {
    hint = 'Sin compromiso: te confirmamos la tarifa antes del viaje.';
  }

  const route = form.from.trim() || form.to.trim() ? `${form.from.trim() || '…'} → ${form.to.trim() || '…'}` : '';
  const when = form.date ? `${formatDate(form.date)}${time ? `, ${time}` : ''}` : '';

  return (
    <section id="reservar" className="bg-[#0B0D0E] px-4 py-24 sm:px-6 md:px-12 md:py-32">
      <div ref={headRef} className="mb-14 max-w-2xl">
        <p className={`${headRevealed ? 'animate-blur-fade-up' : 'opacity-0'} font-label mb-3 text-[11px] tracking-[0.28em] text-[#FFD64B] uppercase`}>
          Reserva en línea
        </p>
        <div className={`rule mb-5 w-24 ${headRevealed ? 'animate-draw-line' : ''}`} style={{ animationDelay: '120ms' }} />
        <h2
          className={`${headRevealed ? 'animate-blur-fade-up' : 'opacity-0'} font-display text-3xl leading-[1.1] tracking-[-0.01em] text-[#E5E7EB] sm:text-4xl md:text-5xl`}
          style={{ animationDelay: '200ms' }}
        >
          Reserva tu traslado <span className="text-[#FFD64B]">en un minuto.</span>
        </h2>
        <p
          className={`${headRevealed ? 'animate-blur-fade-up' : 'opacity-0'} mt-4 max-w-lg text-base text-[#E5E7EB]/60`}
          style={{ animationDelay: '320ms' }}
        >
          Cuéntanos qué traslado necesitas y envíanos la reserva desde aquí o por WhatsApp. Te confirmamos la reserva
          y la tarifa antes del viaje, a cualquier hora.
        </p>
      </div>

      <form onSubmit={submitDirect} noValidate className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
        <div className="flex flex-col gap-6">
          {/* 1 — Service */}
          <fieldset className="liquid-glass rounded-2xl p-5 sm:p-6">
            <legend className="sr-only">Tipo de traslado</legend>
            <StepHeader n={1} title="¿Qué traslado necesitas?" />
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 xl:grid-cols-3">
              {SERVICES.map((s) => {
                const Icon = s.icon;
                const active = form.service === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => chooseService(s)}
                    aria-pressed={active}
                    className={`flex items-center gap-2.5 rounded-xl border px-3 py-3 text-left text-sm leading-snug transition-colors sm:gap-3 sm:px-4 sm:py-3.5 sm:text-[15px] ${
                      active
                        ? 'border-[#FFD64B] bg-[#FFD64B]/10 text-[#FFD64B]'
                        : 'border-[#1F2428] bg-[#0B0D0E]/70 text-[#E5E7EB]/80 hover:border-[#FFD64B]/40'
                    }`}
                  >
                    <Icon size={18} className={`shrink-0 ${active ? 'text-[#FFD64B]' : 'text-[#FFD64B]/70'}`} />
                    <span className="flex flex-col">
                      {s.label}
                      {s.tag && (
                        <span className="font-label text-[10px] tracking-[0.18em] uppercase opacity-60">{s.tag}</span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* 2 — When & how many */}
          <fieldset className="liquid-glass rounded-2xl p-5 sm:p-6">
            <legend className="sr-only">Día, hora y pasajeros</legend>
            <StepHeader n={2} title={whenTitle(service)} />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Día del recojo">
                <input
                  type="date"
                  min={minDate}
                  value={form.date}
                  onChange={setFromEvent('date')}
                  aria-invalid={tooSoon}
                  aria-describedby={tooSoon ? 'booking-date-help' : undefined}
                  className={`${inputClass} ${tooSoon ? 'border-[#FFD64B]/70' : ''}`}
                />
                {tooSoon && <span id="booking-date-help" className="text-xs text-[#FFD64B]">
                  Esa fecha ya pasó. Elige hoy o un día posterior (hora de Perú).
                </span>}
              </Field>
              <Field label="Hora del recojo">
                <TimePicker
                  hour={form.hour}
                  minute={form.minute}
                  onHour={set('hour')}
                  onMinute={set('minute')}
                  highlight={timePast || shortNotice}
                  describedBy="booking-time-help"
                />
                <span
                  id="booking-time-help"
                  className={`text-xs ${timePast || shortNotice ? 'text-[#FFD64B]' : 'text-[#E5E7EB]/40'}`}
                >
                  {timePast
                    ? 'Esa hora ya pasó (hora de Perú).'
                    : shortNotice
                      ? SHORT_NOTICE_NOTE
                      : `Reserva con ${MIN_NOTICE_MINUTES / 60} horas de anticipación. Con menos, queda sujeta a disponibilidad.`}
                </span>
              </Field>
              {!hides(service, 'passengers') && (
                <Stepper label="Pasajeros" value={form.passengers} {...LIMITS.passengers} onChange={setByHand('passengers')} />
              )}
              {!hides(service, 'bags') && (
                <Stepper label="Maletas" note="De hasta 23 kg" value={form.bags} {...LIMITS.bags} onChange={setByHand('bags')} />
              )}
              {!hides(service, 'handBags') && (
                <Stepper
                  label="Maletas de mano"
                  note="De hasta 10 kg"
                  value={form.handBags}
                  {...LIMITS.handBags}
                  onChange={setByHand('handBags')}
                />
              )}
              {vehicleOptions(service) && (
                <div className="sm:col-span-2">
                  <Field label="Tipo de vehículo">
                    <VehiclePicker options={vehicleOptions(service)} value={form.vehicle} onChange={set('vehicle')} />
                  </Field>
                </div>
              )}
            </div>
          </fieldset>

          {/* 3 — Route */}
          <fieldset className="liquid-glass rounded-2xl p-5 sm:p-6">
            <legend className="sr-only">Ruta y datos</legend>
            <StepHeader n={3} title="¿Desde dónde y hasta dónde?" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label={routeLabels(service).from}>
                <RouteInput value={form.from} locked={Boolean(service?.from)} onChange={setFromEvent('from')} />
              </Field>
              <Field label={routeLabels(service).to}>
                <RouteInput value={form.to} locked={Boolean(service?.to)} onChange={setFromEvent('to')} />
              </Field>
              {isAirport && (
                <Field label="N.° de vuelo (opcional)">
                  <input
                    type="text"
                    value={form.flight}
                    onChange={setFromEvent('flight')}
                    placeholder="Ej. LA2047"
                    className={inputClass}
                  />
                </Field>
              )}
              <div className={isAirport ? '' : 'sm:col-span-2'}>
                <Field label="Tu nombre (opcional)">
                  <input
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={setFromEvent('name')}
                    placeholder="Para el cartel de recepción"
                    className={inputClass}
                  />
                </Field>
              </div>
              <Field label="Tu correo">
                <input
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  value={form.email}
                  onChange={setFromEvent('email')}
                  placeholder="nombre@correo.com"
                  className={inputClass}
                />
              </Field>
              <Field label="Tu teléfono o WhatsApp">
                <input
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={setFromEvent('phone')}
                  placeholder="+51 999 999 999"
                  className={inputClass}
                />
              </Field>
              <p className="-mt-2 text-xs text-[#E5E7EB]/40 sm:col-span-2">
                Para reservar desde aquí necesitamos al menos uno de los dos, para confirmarte el traslado.
              </p>
              {/* Honeypot: hidden from people and screen readers; bots tend to fill it. */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label>
                  Sitio web
                  <input type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={setFromEvent('website')} />
                </label>
              </div>
              <div className="sm:col-span-2">
                <Field label="Notas (opcional)">
                  <textarea
                    rows={2}
                    value={form.notes}
                    onChange={setFromEvent('notes')}
                    placeholder={service?.notesHint ?? "Silla para bebé, paradas, equipaje especial…"}
                    className={`${inputClass} resize-none`}
                  />
                </Field>
              </div>
            </div>
          </fieldset>
        </div>

        {/* Summary */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="liquid-glass rounded-2xl p-5 sm:p-6">
            <p className="font-label mb-2 text-[11px] tracking-[0.28em] text-[#FFD64B] uppercase">Tu traslado</p>
            <SummaryRow label="Servicio" value={service && serviceName(service)} />
            <SummaryRow label="Día y hora" value={when} />
            {travelSummary(service, form) && <SummaryRow label="Viajan" value={travelSummary(service, form)} />}
            {vehicleOptions(service) && <SummaryRow label="Vehículo" value={form.vehicle} />}
            <SummaryRow label="Ruta" value={route} />

            {status === 'sent' ? (
              <div className="mt-5 flex flex-col items-center gap-2 rounded-xl border border-[#FFD64B]/30 bg-[#FFD64B]/5 p-5 text-center" role="status">
                <CircleCheck size={28} className="text-[#FFD64B]" />
                <p className="font-display text-lg text-[#E5E7EB]">¡Reserva recibida!</p>
                <p className="text-sm text-[#E5E7EB]/65">
                  Tu código es <strong className="text-[#FFD64B]">{bookingRef}</strong>. Te escribiremos
                  {phone && email ? ' por WhatsApp o correo' : phone ? ' por WhatsApp' : ' por correo'} para confirmar
                  la reserva y la tarifa. Los datos de tu conductor te llegan hasta 30 minutos antes del traslado.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="font-label mt-2 text-sm tracking-[0.04em] text-[#FFD64B] underline-offset-4 hover:underline"
                >
                  Hacer otra reserva
                </button>
              </div>
            ) : (
              <>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`font-label mt-5 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 tracking-[0.04em] transition-opacity ${
                    directReady ? 'bg-[#FFD64B] text-[#0B0D0E]' : 'bg-[#FFD64B]/40 text-[#0B0D0E]/70'
                  } disabled:cursor-wait`}
                >
                  {status === 'sending' ? <Loader2 size={17} className="animate-spin" /> : <Send size={16} />}
                  {status === 'sending' ? 'Enviando…' : 'Enviar reserva'}
                </button>
                <button
                  type="button"
                  onClick={sendWhatsApp}
                  className="font-label liquid-glass mt-3 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 tracking-[0.04em] text-[#E5E7EB]"
                >
                  <MessageCircle size={17} className="text-[#FFD64B]" />
                  Reservar por WhatsApp
                </button>

                <p className={`mt-3 text-center text-sm ${hintAlert ? 'text-[#FFD64B]' : 'text-[#E5E7EB]/45'}`} aria-live="polite">
                  {hint}
                </p>
                <p className="mt-2 text-center text-xs text-[#E5E7EB]/35">
                  Al reservar aceptas los{' '}
                  <a href={ROUTES.terms} className="text-[#E5E7EB]/60 underline underline-offset-2 hover:text-[#FFD64B]">
                    Términos y condiciones
                  </a>
                  .
                </p>
              </>
            )}

            <div className="mt-5 flex flex-col gap-2 border-t border-[#1F2428] pt-4 text-sm text-[#E5E7EB]/55">
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-[#FFD64B]" /> Atendemos las 24 horas, todos los días
              </span>
              <span className="flex items-start gap-2">
                <CalendarCheck size={14} className="mt-0.5 shrink-0 text-[#FFD64B]" /> Primero te confirmamos la reserva; luego, los datos de tu conductor
              </span>
            </div>
          </div>
        </aside>
      </form>
    </section>
  );
}
