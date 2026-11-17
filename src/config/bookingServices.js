// Shared by the booking form (src/components/BookingSection.jsx) and the
// booking API (api/reservas.js), so both agree on services and limits.

export const AIRPORT = 'Aeropuerto Jorge Chávez';

// `from` / `to` fix that end of the route to the airport (the form locks the field).
export const BOOKING_SERVICES = [
  { id: 'transfer-in', label: 'Recojo en el aeropuerto', tag: 'Transfer IN', from: AIRPORT },
  { id: 'transfer-out', label: 'Llevada al aeropuerto', tag: 'Transfer OUT', to: AIRPORT },
  { id: 'ejecutivo', label: 'Ejecutivo' },
  { id: 'tour', label: 'Tour o viaje fuera de Lima' },
  { id: 'corporativo', label: 'Corporativo por horas' },
  { id: 'otro', label: 'Otros traslados' },
];

export const LIMITS = {
  passengers: { min: 1, max: 30 },
  bags: { min: 0, max: 30 },
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

export const serviceName =(s) => (s.tag ? `${s.label} (${s.tag})` : s.label);

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
