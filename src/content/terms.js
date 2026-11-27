// Términos y condiciones (first draft — the company will keep editing it).
// Each section: { id, title, items: [string | { text, list: [string] }] }.
// Rendered by src/pages/TermsPage.jsx at /terminos.
// Translations: src/i18n/locales/<idioma>.js → terms (same sections and items, same order).
import { content } from '../i18n/index.js';

// Last update, as YEAR-MONTH-DAY (shown as "21 de noviembre de 2026").
export const TERMS_UPDATED = '2026-11-21';

export const TERMS_SECTIONS = content('terms', [
  {
    id: 'reservas',
    title: 'Reservas y confirmación',
    items: [
      'Las reservas se realizan desde la web (envío directo o WhatsApp), por WhatsApp, por teléfono o por correo, con al menos 2 horas de anticipación al traslado.',
      'También se reciben reservas con menos de 2 horas de anticipación, pero quedan sujetas a la disponibilidad de conductores y vehículos. Si no podemos atenderlas, se lo informamos al cliente lo antes posible.',
      'Toda reserva queda sujeta a confirmación por parte de Destinos Travel. Primero confirmamos la reserva al cliente; luego le enviamos los datos de su conductor, que pueden llegar hasta 30 minutos antes del traslado.',
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
      'Nota: el seguimiento se hace con información pública: la web del aeropuerto y aplicaciones externas. Estas fuentes pueden tener errores y no mostrar a tiempo un retraso, una cancelación o un cambio de vuelo. Por eso pedimos al pasajero que nos avise de cualquier demora, cancelación o cambio de vuelo. Si no nos avisa, pueden aplicarse el recargo por tiempo de espera o la penalidad por no show.',
    ],
  },
  {
    id: 'recargos',
    title: 'Recargos',
    items: [
      {
        text: 'Sobre la tarifa acordada pueden aplicarse los siguientes recargos:',
        list: [
          'Tiempo de espera antes de iniciar el traslado: 15 minutos de cortesía desde la hora de recojo acordada. Pasado ese tiempo se cobra S/ 30.00 por hora de espera.',
          'Tiempo de espera en el aeropuerto: incluye 60 minutos desde el aterrizaje. Pasado ese tiempo se cobra S/ 30.00 por hora de espera.',
          'Estacionamiento del aeropuerto: S/ 8.40 (precio referencial fijado por el aeropuerto; puede variar en cualquier momento).',
          'Horario nocturno: S/ 10.00.',
          'Navidad y Año Nuevo: 50% sobre la tarifa del servicio.',
          'Paradas en el camino: sin costo hasta 10 minutos.',
          'Desvíos o recojos fuera de la ruta: según la distancia, con un recargo mínimo de S/ 15.00.',
          'Peajes y estacionamientos durante el servicio: se suman al final de la tarifa.',
          'Pago con tarjeta: 5.5% con tarjetas nacionales y 6.5% con tarjetas internacionales.',
        ],
      },
      'El recargo por tiempo de espera se calcula por hora completa, aunque la espera dure menos. La empresa puede, a su criterio, cobrar solo una parte de la hora.',
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
    id: 'zona-operativa',
    title: 'Zona operativa',
    items: [
      {
        text: 'Nuestra zona operativa comprende:',
        list: [
          'Miraflores, San Isidro, Barranco, Jesús María, Lince, Magdalena del Mar y San Miguel.',
          'El Aeropuerto Internacional Jorge Chávez.',
          'Callao, La Molina y Santiago de Surco, en algunos sectores (consúltanos al reservar).',
        ],
      },
      'Fuera de esta zona también atendemos, y lo que corresponda al desplazamiento se informa al confirmar la reserva.',
    ],
  },
  {
    id: 'objetos-olvidados',
    title: 'Objetos olvidados',
    items: [
      'En todos nuestros servicios, si el cliente deja un objeto en el vehículo, tiene total garantía de que seguirá ahí: el conductor lo guarda y coordinamos con el cliente su devolución.',
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
    id: 'conductor-institucion',
    title: 'Conductor para tu institución',
    items: [
      'Destinos Travel pone a disposición de empresas e instituciones un conductor profesional para manejar los vehículos del propio cliente, por ejemplo durante las vacaciones, licencias o ausencias de su conductor habitual.',
      'El servicio se calcula por horas, con un mínimo de 5 horas. Los días, el horario y las condiciones se acuerdan por escrito antes de empezar.',
      'El vehículo debe tener SOAT vigente, revisión técnica al día y tarjeta de propiedad, y estar en buen estado mecánico. El mantenimiento y el estado del vehículo son responsabilidad del cliente.',
      'El combustible, los peajes y los estacionamientos durante el servicio corren por cuenta del cliente.',
      'Si el servicio empieza o termina fuera de la zona operativa, el traslado del conductor hasta allí o de regreso lo asume el cliente.',
      'El conductor es personal de Destinos Travel. No existe relación laboral entre el conductor y el cliente.',
      'El conductor respeta las normas de tránsito y puede negarse a seguir instrucciones que las incumplan o que pongan en riesgo a los pasajeros o al vehículo.',
      'Las multas de tránsito causadas por el conductor son responsabilidad de Destinos Travel. Las que se deban al estado, los documentos o los permisos del vehículo son responsabilidad del cliente.',
    ],
  },
  {
    id: 'conductor-reemplazo',
    title: 'Conductor de reemplazo',
    items: [
      'El conductor de reemplazo maneja el vehículo del propio cliente, por ejemplo en bodas, fiestas y eventos, o cuando el cliente no puede o no debe manejar.',
      'El vehículo debe tener SOAT vigente y revisión técnica al día, y estar en condiciones seguras para circular. El conductor puede no iniciar el servicio si el vehículo no cumple estas condiciones.',
      'Antes de empezar, el conductor y el cliente revisan juntos el vehículo y dejan constancia, con fotos, de su estado. Destinos Travel no responde por daños o fallas previos al servicio.',
      'El vehículo lleva como máximo tantas personas como asientos con cinturón de seguridad tenga.',
      'Se cobra una tarifa plana por hora, por toda la duración del servicio, incluido el tiempo que el conductor espera durante el evento.',
      'Si el servicio empieza o termina fuera de la zona operativa, el traslado del conductor hasta allí o de regreso lo asume el cliente.',
    ],
  },
  {
    id: 'courier',
    title: 'Courier confidencial',
    items: [
      'El servicio de courier comprende el recojo y la entrega en mano de documentos confidenciales y encargos de alta confianza.',
      'El cliente entrega el envío cerrado o sellado. Destinos Travel no abre ni revisa su contenido, y lo lleva directamente, sin intermediarios, de quien lo entrega a quien lo recibe.',
      'Al reservar, el cliente indica el nombre y el documento de identidad de quien recibe. El envío solo se entrega a esa persona, o a quien el cliente autorice por escrito, después de verificar su identidad.',
      'Quien recibe firma digitalmente la entrega, y el cliente la corrobora. Así queda constancia de quién recibió, la fecha y la hora.',
      'No se transportan objetos ilegales ni objetos cuyo traslado esté prohibido por la ley.',
      'Si el destinatario no está disponible, el conductor espera 15 minutos de cortesía. Después, la entrega se reprograma con un costo adicional.',
      'La tarifa mínima del servicio de courier es de S/ 30.00.',
    ],
  },
  {
    id: 'cambios-terminos',
    title: 'Cambios en estos términos',
    items: [
      'Destinos Travel puede actualizar estos términos y condiciones. La versión vigente es la publicada en esta página, con su fecha de actualización.',
    ],
  },
]);
