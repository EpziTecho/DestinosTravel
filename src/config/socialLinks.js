// Centralized so every social URL can be swapped from one place.
// Replace the '#' placeholders with the real profile URLs when ready.
export const WHATSAPP_NUMBER = '51993523742';

// Edit this to change the pre-filled text on every WhatsApp button/link.
export const WHATSAPP_MESSAGE =
  'Hola, vengo de la página web de Destinos Travel. Quisiera cotizar un servicio de transporte ejecutivo.';

export const SOCIAL_LINKS = {
  facebook: '#',
  instagram: '#',
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  tiktok: '#',
};
