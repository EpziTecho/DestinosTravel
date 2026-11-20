// Términos y condiciones (first draft — the company will keep editing it).
// Each section: { id, title, items: [string | { text, list: [string] }] }.
// Rendered by src/pages/TermsPage.jsx at /terminos.

export const TERMS_UPDATED = '17 de noviembre de 2026';

export const TERMS_SECTIONS = [
  {
    id: 'reservas',
    title: 'Reservas y confirmación',
    items: [
      'Las reservas se realizan desde la web (envío directo o WhatsApp), por WhatsApp, por teléfono o por correo, con al menos 2 horas de anticipación al traslado.',
      'Toda reserva queda sujeta a confirmación por parte de Destinos Travel. Unas horas antes del traslado enviamos al cliente los datos de su conductor.',
      'El cliente es responsable de que los datos de la reserva (fecha, hora, direcciones, número de vuelo, cantidad de pasajeros y equipaje) sean correctos.',
    ],
  },
  {
    id: 'cambios-cancelaciones',
    title: 'Cambios y cancelaciones',
    items: [
      'Los cambios y cancelaciones son sin costo si se comunican hasta 2 horas antes de la hora del traslado.',
      'Si se cancela con menos de 2 horas de anticipación, se aplica una penalidad por movilización de hasta el 50% de la tarifa del servicio.',
    ],
  },
  {
    id: 'no-show',
    title: 'No show (pasajero no presentado)',
    items: [
      'Si el pasajero no se presenta en el lugar y la hora acordados, ni se comunica para reprogramar, se considera no show y se cobra el 100% de la tarifa del servicio.',
    ],
  },
  {
    id: 'aeropuerto',
    title: 'Recojos en el aeropuerto',
    items: [
      'Hacemos seguimiento de todos los vuelos. Si el vuelo se adelanta o se atrasa, la reserva sigue asegurada y habrá un conductor esperando al pasajero.',
      'El conductor espera cerca de la puerta 1 de salida en vuelos nacionales, o de la puerta 3 de salida en vuelos internacionales. Recomendamos mantener contacto con el operador o el conductor por WhatsApp o Telegram antes de salir con el equipaje.',
      'La tarifa incluye hasta 60 minutos de espera desde el aterrizaje. Pasado ese tiempo se aplican los recargos por tiempo de espera y estacionamiento indicados en la sección de recargos.',
    ],
  },
  {
    id: 'recargos',
    title: 'Recargos',
    items: [
      {
        text: 'Sobre la tarifa acordada pueden aplicarse los siguientes recargos:',
        list: [
          'Tiempo de espera adicional: S/ 30.00 por cada hora extra.',
          'Estacionamiento del aeropuerto: S/ 8.40 (precio referencial fijado por el aeropuerto; puede variar en cualquier momento).',
          'Horario nocturno: S/ 10.00.',
          'Navidad y Año Nuevo: 50% sobre la tarifa del servicio.',
          'Paradas en el camino: sin costo hasta 10 minutos.',
          'Desvíos o recojos fuera de la ruta: según la distancia, con un recargo mínimo de S/ 15.00.',
          'Peajes y estacionamientos durante el servicio: se suman al final de la tarifa.',
          'Pago con tarjeta: 5.5% con tarjetas nacionales y 6.5% con tarjetas internacionales.',
        ],
      },
      'Según la situación, la demora de un vuelo puede generar recargos por tiempo de espera y estacionamiento.',
    ],
  },
  {
    id: 'pagos',
    title: 'Pagos y comprobantes',
    items: [
      'Aceptamos efectivo, Yape, Plin, transferencia bancaria y tarjeta de crédito o débito mediante link de pago (con el recargo indicado en la sección de recargos).',
      'Se puede pagar en soles o en dólares.',
      'El pago se realiza al finalizar el traslado. El comprobante electrónico se envía a más tardar al día siguiente.',
      'Emitimos factura electrónica. Para empresas ofrecemos crédito y facturación mensual, previa coordinación de las condiciones.',
    ],
  },
  {
    id: 'vehiculos-equipaje',
    title: 'Vehículos y equipaje',
    items: [
      {
        text: 'Capacidad de referencia por vehículo:',
        list: [
          'Vehículo estándar: 4 pasajeros y 2 maletas de 23 kg.',
          'Camioneta: 4 pasajeros y 3 maletas de 23 kg, o 6 pasajeros y 2 maletas de mano de 10 kg.',
        ],
      },
      'Si el equipaje supera la capacidad del vehículo, se intentará acomodar en la cabina, a costa de la comodidad de los pasajeros. En esos casos sugerimos reservar un vehículo adicional.',
      'Para grupos podemos reservar más de un vehículo, o vans y minibuses, según la necesidad del cliente.',
      'Por el momento no contamos con silla para bebé.',
    ],
  },
  {
    id: 'corporativo-por-horas',
    title: 'Servicio corporativo por horas',
    items: [
      'Se contrata por un mínimo de 3 horas.',
      'Cubre recorridos entre distritos adyacentes. No aplica a traslados hacia o desde el aeropuerto.',
    ],
  },
  {
    id: 'cambios-terminos',
    title: 'Cambios en estos términos',
    items: [
      'Destinos Travel puede actualizar estos términos y condiciones. La versión vigente es la publicada en esta página, con su fecha de actualización.',
    ],
  },
];
