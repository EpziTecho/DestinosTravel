// Shared by the booking form (src/components/BookingSection.jsx) and the
// booking API (api/reservas.js), so both agree on services and limits.

export const AIRPORT = 'Aeropuerto Jorge Chávez';

// `from` / `to` fix that end of the route to the airport (the form locks the field).
// `blurb` is the description on the service cards (src/components/ServicesDetail.jsx).
// `hide` drops the passengers/bags steppers for services where they don't apply (sent as 0;
// 'bags' covers both the 23 kg and the hand luggage).
// `vehicles` shows a vehicle-type choice instead (the first option is preselected).
// `defaults` sets starting values when the service is picked, unless the visitor already changed them.
// `fieldLabels` renames the route fields in the form for that service; `notesHint` is the
// placeholder of the notes field.
// Vehicle types the driver services can handle (the client's own vehicle).
const VEHICLES_OWN = ['Auto / SUV', 'Van', 'Bus'];

export const BOOKING_SERVICES = [
  {
    id: 'transfer-in',
    label: 'Recojo en el aeropuerto',
    tag: 'Transfer IN',
    from: AIRPORT,
    blurb: 'Te esperamos a la salida, con seguimiento de tu vuelo y 60 minutos de espera incluidos.',
  },
  {
    id: 'transfer-out',
    label: 'Llevada al aeropuerto',
    tag: 'Transfer OUT',
    to: AIRPORT,
    blurb: 'Te recogemos donde estés y te dejamos en el aeropuerto a tiempo para tu vuelo.',
  },
  {
    id: 'ejecutivo',
    label: 'Ejecutivo',
    defaults: { bags: 0 },
    blurb: 'Traslados ejecutivos y diplomáticos con protocolo, puntualidad y total discreción.',
  },
  {
    id: 'tour',
    label: 'Tour o viaje fuera de Lima',
    blurb: 'Playas, Paracas, Caral, Chancay, Huaral, Trujillo o el destino que elijas.',
  },
  {
    id: 'corporativo',
    label: 'Corporativo por horas',
    blurb: 'Un conductor a disposición de tu empresa, desde 3 horas, en distritos colindantes.',
  },
  {
    id: 'conductor',
    label: 'Conductor para tu institución',
    blurb:
      'Un conductor profesional para el vehículo de tu empresa o institución, cuando tu conductor está de vacaciones o no puede asistir.',
    hide: ['passengers', 'bags'],
    vehicles: VEHICLES_OWN,
    fieldLabels: { from: 'El conductor se presenta en', to: 'Zona o destino del servicio' },
    notesHint: 'Días y horario del servicio, modelo del vehículo…',
  },
  {
    id: 'reemplazo',
    label: 'Conductor de reemplazo',
    blurb:
      'Manejamos tu propio vehículo en bodas, fiestas y eventos, o cuando tú no puedes manejar. Llegas y vuelves en tu auto, sin preocuparte.',
    hide: ['passengers', 'bags'],
    vehicles: VEHICLES_OWN,
    fieldLabels: { from: 'El conductor llega a', to: 'Te llevamos a' },
    notesHint: 'Modelo del vehículo, si es ida y vuelta, hora aproximada de regreso…',
  },
  {
    id: 'courier',
    label: 'Courier confidencial',
    blurb:
      'Recojo y entrega en mano de documentos confidenciales y encargos de alta confianza, con total reserva y constancia de entrega.',
    hide: ['passengers', 'bags'],
    fieldLabels: { from: 'Recogemos el envío en', to: 'Lo entregamos en' },
    notesHint: 'Qué se envía y nombre y DNI de quien lo recibe…',
  },
  {
    id: 'bodas',
    label: 'Bodas',
    blurb: 'Traslados elegantes y exclusivos para los novios y sus invitados, en un día inolvidable.',
    hide: ['passengers', 'bags'],
    vehicles: ['Auto', 'SUV'],
  },
  {
    id: 'otro',
    label: 'Otros traslados',
    blurb: 'Cualquier otro traslado que necesites, coordinado a tu medida.',
  },
];

/** True when the service's form doesn't ask for this field ('passengers' | 'bags' | 'handBags'). */
export const hides = (service, field) =>
  Boolean(service?.hide?.includes(field === 'handBags' ? 'bags' : field));

/** Vehicle types to choose from, or null when the service doesn't ask. */
export const vehicleOptions = (service) => service?.vehicles ?? null;

export const LIMITS = {
  passengers: { min: 1, max: 30 },
  bags: { min: 0, max: 30 },
  handBags: { min: 0, max: 30 },
};

// Earliest pickup day, in days from today in Peru time (UTC-5, no daylight saving).
// 0 = today is allowed, past days are not. Raise it to require more notice.
export const MIN_DAYS_AHEAD = 0;
const PERU_OFFSET_MS = -5 * 3600 * 1000;

/** Peru's calendar date (YYYY-MM-DD) `days` from today, regardless of the visitor's time zone. */
export function peruDateISO(days = 0) {
  return new Date(Date.now() + PERU_OFFSET_MS + days * 86400000).toISOString().slice(0, 10);
}

export const minPickupDate = () => peruDateISO(MIN_DAYS_AHEAD);

// Recommended notice between booking and pickup. Shorter notice is still accepted,
// but the booking is subject to availability (the form and the email say so).
export const MIN_NOTICE_MINUTES = 120;
export const SHORT_NOTICE_NOTE = `Con menos de ${MIN_NOTICE_MINUTES / 60} horas de anticipación, la reserva queda sujeta a disponibilidad.`;

const pickupTime = (date, time) => Date.parse(`${date}T${time}:00-05:00`);

/** True when a Peru-time date (YYYY-MM-DD) + time (HH:MM) is sooner than the recommended notice. */
export function isTooSoon(date, time) {
  const pickup = pickupTime(date, time);
  return Number.isFinite(pickup) && pickup < Date.now() + MIN_NOTICE_MINUTES * 60000;
}

/** True when that Peru-time date + time has already passed. */
export function isPastTime(date, time) {
  const pickup = pickupTime(date, time);
  return Number.isFinite(pickup) && pickup < Date.now();
}

// Languages of the website, named in Spanish for the messages the company receives.
export const CLIENT_LANGUAGES = { es: 'Español', en: 'Inglés', fr: 'Francés', ru: 'Ruso', zh: 'Chino' };

export const serviceName = (s) => (s.tag ? `${s.label} (${s.tag})` : s.label);

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** A phone is valid when it has 7–15 digits once spaces, dashes, + and parentheses are removed. */
export const isValidPhone = (v) => /^\+?[\d\s()-]+$/.test(v) && /^\d{7,15}$/.test(v.replace(/\D/g, ''));

export function formatDate(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('es-PE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  });
}

export const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;

/**
 * "2 pasajeros · 1 maleta de 23 kg · 1 maleta de mano", leaving out what the service
 * doesn't ask for ('' for courier and the driver services). Hand luggage only when > 0.
 */
export function travelSummary(service, { passengers, bags, handBags }) {
  const parts = [];
  if (!hides(service, 'passengers')) parts.push(plural(passengers, 'pasajero', 'pasajeros'));
  if (!hides(service, 'bags')) parts.push(`${plural(bags, 'maleta', 'maletas')} de 23 kg`);
  if (!hides(service, 'handBags') && handBags > 0) parts.push(plural(handBags, 'maleta de mano', 'maletas de mano'));
  return parts.join(' · ');
}
