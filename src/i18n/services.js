// Booking services in the visitor's language. src/config/bookingServices.js keeps the
// Spanish originals (also used by the booking API and the messages sent to the company);
// translations override label, blurb, fieldLabels and notesHint by service id.
import { BOOKING_SERVICES } from '../config/bookingServices.js';
import { content, overlay, t } from './index.js';

const TRANSLATED = content('services', {});

export const localService = (s) => (s ? overlay(s, TRANSLATED[s.id]) : s);
export const LOCAL_SERVICES = BOOKING_SERVICES.map(localService);

/** "Recojo en el aeropuerto (Transfer IN)", in the visitor's language. */
export const localServiceName = (s) => (s.tag ? `${s.label} (${s.tag})` : s.label);

/** Vehicle type as shown; the Spanish value is what the form sends. */
export const vehicleLabel = (v) => t('vehicles')[v] ?? v;
