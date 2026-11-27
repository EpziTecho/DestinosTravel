// Centralized so every social URL can be swapped from one place.
// Replace the '#' placeholders with the real profile URLs when ready.
import { t } from '../i18n';

// Main number: floating button, "Reservar por WhatsApp", "Comunícate con un operador" and Empresas.
export const WHATSAPP_NUMBER = '51993523742';

// Pre-filled WhatsApp texts, in the visitor's language. Edit them in src/i18n/es.js (whatsapp).
export const WHATSAPP_MESSAGE = t('whatsapp.message');
// "Comunícate con un operador" (booking form): talk to someone without filling the form.
export const OPERATOR_MESSAGE = t('whatsapp.operatorMessage');

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/destinostravel5eirl',
  instagram: '#',
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  tiktok: 'https://www.tiktok.com/@destinostravel5eirl',
};
