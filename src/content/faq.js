// Frequently asked questions.
//  - `featured: true` → also shown in the short FAQ on the home page (keep ~6).
//  - `list`           → optional bullet points shown after the answer.
//  - `terms: true`    → adds a "Ver Términos y condiciones" link.
// The full list lives at /preguntas-frecuentes.
// `id` is the group's link anchor (/preguntas-frecuentes#reservas); keep it when renaming the title.
// Translations: src/i18n/locales/<idioma>.js → faq (same order).

import { content } from '../i18n/index.js';

export const FAQ_GROUPS = content('faq', [
  {
    id: 'reservas',
    title: 'Reservas',
    items: [
      {
        q: '¿Cómo reservo un traslado?',
        a: 'Desde esta web en un minuto: completa el formulario y envíanos la reserva directamente o por WhatsApp. También puedes escribirnos por WhatsApp o llamarnos.',
        featured: true,
      },
      {
        q: '¿Con cuánta anticipación debo reservar?',
        a: 'Te recomendamos reservar con al menos 2 horas de anticipación. Si te falta menos tiempo, igual puedes enviar tu reserva, pero queda sujeta a disponibilidad.',
        featured: true,
      },
      {
        q: '¿Cómo me confirman la reserva?',
        a: 'Primero te confirmamos la reserva. Luego te enviamos los datos de tu conductor, que pueden llegar hasta 30 minutos antes del traslado.',
      },
      {
        q: '¿Puedo cambiar o cancelar mi reserva?',
        a: 'Sí, sin costo hasta 2 horas antes del traslado. Después se aplica una penalidad por movilización de hasta el 50% del servicio. Si el pasajero no se presenta (no show), se cobra el servicio completo.',
        terms: true,
        featured: true,
      },
    ],
  },
  {
    id: 'en-el-aeropuerto',
    title: 'En el aeropuerto',
    items: [
      {
        q: '¿Qué pasa si mi vuelo se atrasa?',
        a: 'Tu reserva sigue asegurada: seguimos tu vuelo y habrá un conductor esperándote. Según la situación, puede haber recargos.',
        terms: true,
        featured: true,
      },
      {
        q: '¿Hacen seguimiento del vuelo?',
        a: 'Siempre. Seguimos tu vuelo por la web del aeropuerto y aplicaciones externas. Como estas fuentes a veces no muestran a tiempo un retraso o una cancelación, avísanos si tu vuelo cambia, se demora o se cancela. Así evitas recargos por espera o la penalidad por no show.',
        terms: true,
      },
      {
        q: '¿Dónde me espera el conductor?',
        a: 'Cerca de la puerta 1 de salida en vuelos nacionales, o de la puerta 3 de salida en vuelos internacionales. Te recomendamos mantener contacto con tu operador o tu conductor por WhatsApp o Telegram antes de salir con tu equipaje.',
      },
      {
        q: '¿Cuánto tiempo de espera está incluido?',
        a: 'En el aeropuerto, hasta 60 minutos desde el aterrizaje. En los demás recojos, 15 minutos de cortesía desde la hora acordada. Pasado ese tiempo, la espera cuesta S/ 30.00 por hora (más el estacionamiento, si es en el aeropuerto).',
        terms: true,
      },
    ],
  },
  {
    id: 'vehiculos-y-equipaje',
    title: 'Vehículos y equipaje',
    items: [
      {
        q: '¿Cuántas personas y maletas entran?',
        a: 'Depende del vehículo:',
        list: [
          'Vehículo estándar: 4 pasajeros y 2 maletas de 23 kg.',
          'Camioneta: 4 pasajeros y 3 maletas de 23 kg, o 6 pasajeros y 2 maletas de mano de 10 kg.',
        ],
        featured: true,
      },
      {
        q: '¿Y si somos más personas o llevamos más equipaje?',
        a: 'Podemos reservarte más de un vehículo, o vans y minibuses, según lo que necesites.',
      },
      {
        q: '¿Tienen silla para bebé?',
        a: 'Por el momento no, pero muy pronto la tendremos disponible.',
      },
    ],
  },
  {
    id: 'pagos-y-comprobantes',
    title: 'Pagos y comprobantes',
    items: [
      {
        q: '¿Cómo puedo pagar?',
        a: 'En efectivo, Yape, Plin, transferencia o con tarjeta mediante link de pago, en soles o dólares. El pago con tarjeta tiene un recargo de 5.5% (tarjetas nacionales) o 6.5% (internacionales). Emitimos factura electrónica.',
        terms: true,
        featured: true,
      },
      {
        q: '¿Cuándo se paga?',
        a: 'Al finalizar el traslado. Tu comprobante te llega a más tardar al día siguiente.',
      },
      {
        q: '¿Emiten factura?',
        a: 'Sí, factura electrónica. Para empresas también ofrecemos crédito y facturación mensual.',
        terms: true,
      },
    ],
  },
  {
    id: 'horarios-y-destinos',
    title: 'Horarios y destinos',
    items: [
      {
        q: '¿Trabajan de madrugada y en feriados?',
        a: 'Sí, trabajamos las 24 horas, todos los días, feriados incluidos. En horario nocturno hay un recargo de S/ 10, y en Navidad y Año Nuevo, de 50% sobre la tarifa.',
        terms: true,
      },
      {
        q: '¿Hacen viajes fuera de Lima?',
        a: 'Sí: playas del sur, Paracas, Caral, Chancay, Huaral, Trujillo y cualquier otro destino que necesites.',
      },
      {
        q: '¿Cómo funciona el servicio corporativo por horas?',
        a: 'Se contrata por un mínimo de 3 horas, para recorridos entre distritos cercanos. No aplica a traslados al aeropuerto.',
        terms: true,
      },
    ],
  },
  {
    id: 'empresas-y-hoteles',
    title: 'Empresas y hoteles',
    items: [
      {
        q: '¿Tienen cuentas para empresas?',
        a: 'Sí: un solo contacto para coordinar todo, factura electrónica, crédito y facturación mensual, y varias unidades a la vez para grupos y eventos. Para servicios corporativos te recomendamos escribirnos por correo.',
        terms: true,
      },
      {
        q: '¿Recogen huéspedes de hoteles?',
        a: 'Sí, recogemos huéspedes en su hotel y en el aeropuerto.',
      },
    ],
  },
]);

export const FEATURED_FAQ = FAQ_GROUPS.flatMap((g) => g.items.filter((i) => i.featured));
export const FAQ_COUNT = FAQ_GROUPS.reduce((n, g) => n + g.items.length, 0);

/** schema.org FAQPage for the given questions (plain-text answers). */
export function faqJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: [i.a, ...(i.list || [])].join(' ') },
    })),
  };
}
