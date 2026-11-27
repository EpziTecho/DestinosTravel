// ─────────────────────────────────────────────────────────────────────────────
// CLIENTES ("Nos eligen quienes exigen más", dentro de Experiencia diplomática)
//
// CLIENT_TYPES: categorías de clientes. Se muestran siempre, sin nombres ni logos,
// así que no necesitan autorización de nadie.
//
// CLIENTS: clientes con nombre (y logo, si se tiene). Solo se muestran los que
// tengan `authorized: true`, es decir, cuando el cliente aceptó por escrito
// aparecer en la web. Para mostrar un logo: copia el archivo a src/assets/clientes/
// e impórtalo arriba de src/components/ClientsSection.jsx (ver el comentario ahí).
// ─────────────────────────────────────────────────────────────────────────────

import { content } from '../i18n/index.js';

// icon: nombre del ícono de lucide-react (ver src/components/ClientsSection.jsx).
// Traducciones: src/i18n/locales/<idioma>.js → clientTypes (mismo orden).
export const CLIENT_TYPES = content('clientTypes', [
  {
    icon: 'Landmark',
    title: 'Embajadas y misiones diplomáticas',
    text: 'Traslados de personal diplomático y sus delegaciones.',
  },
  {
    icon: 'Globe',
    title: 'Organismos y cumbres internacionales',
    text: 'Conductores para delegaciones en eventos internacionales en Lima.',
  },
  {
    icon: 'Plane',
    title: 'Aerolíneas',
    text: 'Traslados de tripulaciones y personal entre el aeropuerto y la ciudad.',
  },
  {
    icon: 'Building2',
    title: 'Empresas y medios de comunicación',
    text: 'Movilidad para ejecutivos, equipos y clientes corporativos.',
  },
  {
    icon: 'GraduationCap',
    title: 'Instituciones culturales y educativas',
    text: 'Traslados para invitados, docentes y eventos.',
  },
  {
    icon: 'Users',
    title: 'Viajeros y familias',
    text: 'Turistas y particulares: aeropuerto, tours y viajes fuera de Lima.',
  },
]);

// initials: se muestran en un círculo dorado mientras no haya logo.
export const CLIENTS = [
  { name: 'Embajada de Francia', initials: 'EF', authorized: false },
  { name: 'Embajada de Estados Unidos', initials: 'EU', authorized: false },
  { name: 'Alianza Francesa de Lima', initials: 'AF', authorized: false },
  { name: 'Avianca', initials: 'AV', authorized: false },
  { name: 'Interjet', initials: 'IJ', authorized: false },
  { name: 'Grupo La República', initials: 'LR', authorized: false },
];
