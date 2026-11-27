// Textos de la interfaz en español (el idioma base). Las traducciones están en
// src/i18n/locales/ con las mismas claves. {nombre} se reemplaza por un valor
// (no lo traduzcas ni lo borres). El contenido largo vive en src/content/.

export default {
  meta: {
    title: 'Destinos Travel — Transporte Ejecutivo en Lima, Perú',
    description:
      'Transporte ejecutivo y diplomático en Lima, Perú. Transfer al aeropuerto, movilidad corporativa y traslados VIP con atención 24/7. Seguro, puntual y discreto.',
  },

  nav: {
    nosotros: 'Nosotros',
    servicios: 'Servicios',
    reservar: 'Reservar',
    empresas: 'Empresas',
    preguntas: 'Preguntas',
    contacto: 'Contacto',
    cta: 'Reservar traslado',
    openMenu: 'Abrir menú',
    language: 'Idioma',
  },

  hero: {
    support: 'Atención 24/7',
    location: 'Lima, Perú',
    safe: 'Seguro y discreto',
    kicker: 'DESTINOS TRAVEL / TRANSPORTE EJECUTIVO',
    title: 'Su visión dicta el destino,',
    titleHighlight: 'nuestro protocolo asegura el trayecto.',
    sub: 'Transporte ejecutivo y diplomático en Lima: aeropuerto, empresas y viajes fuera de la ciudad. Conductores profesionales, las 24 horas.',
    book: 'Reservar traslado',
    services: 'Ver servicios',
    scroll: 'Desliza para conocernos',
  },

  beats: {
    mission: {
      kicker: 'Misión',
      heading: 'Puntuales, seguros y discretos.',
      sub: 'Brindar un servicio de transporte ejecutivo seguro, puntual y confortable, destacándonos por la atención personalizada y el compromiso con la excelencia, garantizando confianza y discreción en cada trayecto.',
      specs: [
        ['Atención', '24/7'],
        ['Vuelos', 'con seguimiento'],
        ['Espera', '60 min incluidos'],
      ],
    },
    vision: {
      kicker: 'Visión',
      heading: 'La primera opción de quien llega al Perú.',
      sub: 'Ser reconocidos como la empresa de transporte ejecutivo ideal en el Perú y la opción preferida para visitantes extranjeros que llegan a nuestro país.',
      specs: [
        ['Pago', 'al final del traslado'],
        ['Moneda', 'soles o dólares'],
        ['Comprobante', 'factura'],
      ],
    },
    about: {
      kicker: 'Nosotros',
      heading: 'Experiencia que se nota en cada trayecto.',
      sub: 'Contamos con una sólida trayectoria en el transporte ejecutivo y diplomático. Un equipo de conductores profesionales y una flota moderna diseñada para brindar comodidad, seguridad y eficiencia.',
      specs: [
        ['Experiencia', 'diplomática'],
        ['Conductores', 'de traje'],
        ['Flota', 'moderna'],
      ],
    },
    services: {
      kicker: 'Servicios',
      heading: '¿A dónde te',
      headingHighlight: 'llevamos?',
      sub: 'Diez servicios, un mismo estándar: puntualidad, seguridad y atención personalizada las 24 horas.',
      specs: [
        ['Servicios', '10'],
        ['Atención', '24/7'],
        ['Cobertura', 'Lima y provincias'],
      ],
    },
  },

  // Etiqueta del riel de progreso (pantallas grandes), en orden.
  rail: ['Inicio', '01 · Misión', '02 · Visión', '03 · Nosotros', '04 · Servicios'],

  services: {
    kicker: 'Servicios',
    title: 'Un servicio para cada viaje.',
    book: 'Reservar',
    bookAria: 'Reservar: {name}',
  },

  // Tipos de vehículo (el valor en español es el que se envía a la empresa).
  vehicles: {},

  diplomatic: {
    kicker: 'Experiencia diplomática',
    title: 'Al servicio del',
    titleHighlight: 'cuerpo diplomático.',
    intro:
      'Hemos trasladado a personal de embajadas e instituciones internacionales en Lima. Ese nivel de exigencia es el estándar con el que atendemos a cada cliente.',
    points: [
      { title: 'Protocolo', text: 'Trato formal y conductores de traje en cada recojo.' },
      { title: 'Discreción', text: 'Reserva total sobre pasajeros, rutas y horarios.' },
      { title: 'Puntualidad', text: 'Nos ajustamos a agendas oficiales, de día o de noche, todos los días del año.' },
    ],
  },

  clients: {
    title: 'Nos eligen quienes exigen más.',
    intro: 'Estos son algunos de los sectores que ya confiaron en nosotros.',
  },

  booking: {
    kicker: 'Reserva en línea',
    title: 'Reserva tu traslado',
    titleHighlight: 'en un minuto.',
    intro:
      'Cuéntanos qué traslado necesitas y envíanos la reserva desde aquí o por WhatsApp. Te confirmamos la reserva y la tarifa antes del viaje, a cualquier hora.',

    legendService: 'Tipo de traslado',
    stepService: '¿Qué traslado necesitas?',

    legendWhen: 'Día, hora y pasajeros',
    whenVehicle: '¿Cuándo y en qué vehículo?',
    whenOnly: '¿Para cuándo?',
    whenPeople: '¿Cuándo y cuántos viajan?',
    date: 'Día del recojo',
    datePast: 'Esa fecha ya pasó. Elige hoy o un día posterior (hora de Perú).',
    time: 'Hora del recojo',
    timePast: 'Esa hora ya pasó (hora de Perú).',
    timeHint: 'Reserva con {hours} horas de anticipación. Con menos, queda sujeta a disponibilidad.',
    shortNotice: 'Con menos de {hours} horas de anticipación, la reserva queda sujeta a disponibilidad.',
    hourLabel: 'Hora (00 a 23)',
    minuteLabel: 'Minutos (00 a 59)',
    hourList: 'Horas',
    minuteList: 'Minutos',
    hourPlaceholder: 'HH',
    minutePlaceholder: 'MM',
    passengers: 'Pasajeros',
    bags: 'Maletas',
    bagsNote: 'De hasta 23 kg',
    handBags: 'Maletas de mano',
    handBagsNote: 'De hasta 10 kg',
    decrease: 'Quitar {label}',
    increase: 'Agregar {label}',
    vehicleType: 'Tipo de vehículo',

    legendRoute: 'Ruta y datos',
    stepRoute: '¿Desde dónde y hasta dónde?',
    routeFrom: 'Te recogemos en',
    routeTo: 'Te llevamos a',
    addressPlaceholder: 'Dirección, hotel u oficina',
    flight: 'N.° de vuelo (opcional)',
    flightPlaceholder: 'Ej. LA2047',
    name: 'Tu nombre (opcional)',
    namePlaceholder: 'Para el cartel de recepción',
    email: 'Tu correo',
    emailPlaceholder: 'nombre@correo.com',
    phone: 'Tu teléfono o WhatsApp',
    contactHint: 'Para reservar desde aquí necesitamos al menos uno de los dos, para confirmarte el traslado.',
    notes: 'Notas (opcional)',
    notesPlaceholder: 'Silla para bebé, paradas, equipaje especial…',

    summary: 'Tu traslado',
    sumService: 'Servicio',
    sumWhen: 'Día y hora',
    sumTravel: 'Viajan',
    sumVehicle: 'Vehículo',
    sumRoute: 'Ruta',
    notChosen: 'sin elegir',

    passengersCount: { one: '{n} pasajero', other: '{n} pasajeros' },
    bagsCount: { one: '{n} maleta de 23 kg', other: '{n} maletas de 23 kg' },
    handBagsCount: { one: '{n} maleta de mano', other: '{n} maletas de mano' },

    sentTitle: '¡Reserva recibida!',
    sentText:
      'Tu código es {ref}. Te escribiremos {via} para confirmar la reserva y la tarifa. Los datos de tu conductor te llegan hasta 30 minutos antes del traslado.',
    viaBoth: 'por WhatsApp o correo',
    viaPhone: 'por WhatsApp',
    viaEmail: 'por correo',
    again: 'Hacer otra reserva',

    send: 'Enviar reserva',
    sending: 'Enviando…',
    whatsapp: 'Reservar por WhatsApp',
    acceptTerms: 'Al reservar aceptas los {terms}.',
    termsLink: 'Términos y condiciones',
    operatorPrompt: '¿Prefieres hablar directamente con nosotros?',
    operator: 'Comunícate con un operador',
    allDay: 'Atendemos las 24 horas, todos los días',
    confirmFlow: 'Primero te confirmamos la reserva; luego, los datos de tu conductor',

    hintError: '{error} Puedes intentarlo de nuevo o reservar por WhatsApp.',
    hintMissing: 'Falta {list}.',
    hintReady: 'Te confirmamos la reserva y la tarifa antes del viaje.',
    hintIdle: 'Sin compromiso: te confirmamos la tarifa antes del viaje.',
    sendFailed: 'No pudimos enviar tu reserva.',
    offline: 'Revisa tu conexión a internet.',

    missingService: 'elegir el tipo de traslado',
    missingWhen: 'el día y la hora',
    missingPastDay: 'un día de recojo que no haya pasado',
    missingPastTime: 'una hora que no haya pasado',
    missingRoute: 'la ruta',
    missingContact: 'un correo o un teléfono',
    missingEmail: 'un correo válido',
    missingPhone: 'un teléfono válido',
  },

  empresas: {
    kicker: 'Empresas y hoteles',
    title: 'Movilidad para tu empresa,',
    titleHighlight: 'en orden.',
    intro:
      'Para empresas que mueven ejecutivos y clientes, y para hoteles que reciben huéspedes. Tú coordinas con una sola persona; nosotros nos encargamos del resto.',
    benefits: [
      { title: 'Un solo contacto', text: 'Coordinamos los traslados de tu equipo, tus clientes o tus huéspedes desde un mismo canal.' },
      { title: 'Crédito y facturación mensual', text: 'Factura electrónica a nombre de tu empresa, con crédito y facturación mensual.' },
      { title: 'Varias unidades a la vez', text: 'Autos, camionetas, vans y minibuses para grupos, eventos y delegaciones.' },
      { title: 'Corporativo por horas', text: 'Un conductor a tu disposición desde 3 horas, para recorridos entre distritos cercanos.' },
      { title: 'Huéspedes de hoteles', text: 'Recogemos a tus huéspedes en el hotel o en el aeropuerto, a cualquier hora.' },
      { title: 'Conductores de traje', text: 'Puntuales, discretos y bien presentados: representan bien a tu marca.' },
    ],
    proposalSubject: 'Propuesta corporativa — Destinos Travel',
    proposalBody: [
      'Hola, quisiera una propuesta de traslados para mi empresa.',
      '',
      'Empresa:',
      'RUC:',
      'Persona de contacto y teléfono:',
      'Tipo de traslados (aeropuerto, ejecutivos, por horas, eventos…):',
      'Frecuencia aproximada (por semana o por mes):',
      '',
      'Gracias.',
    ],
    whatsappText: 'Hola, vengo de la web de Destinos Travel. Quisiera una propuesta de traslados para mi empresa.',
    byEmail: 'Pedir propuesta por correo',
    byWhatsapp: 'Escribir por WhatsApp',
    note: 'Para servicios corporativos te recomendamos el correo: {email}. Condiciones de crédito en los {terms}.',
    termsLink: 'Términos y condiciones',
  },

  gallery: {
    kicker: 'Galería',
    title: 'Nuestra flota, de cerca.',
  },

  faq: {
    kicker: 'Preguntas frecuentes',
    title: 'Antes de reservar.',
    intro: 'Lo que más nos preguntan. ¿Tienes otra duda? Revisa todas las preguntas o escríbenos.',
    seeAll: 'Ver las {n} preguntas',
    termsLink: 'Ver Términos y condiciones',
  },

  contact: {
    kicker: 'Contacto',
    title: 'Escríbenos.',
    titleHighlight: 'Respondemos a cualquier hora.',
    email: 'Email',
    emailNote: 'Escríbenos para solicitar tu servicio',
    phones: 'Teléfonos',
    phonesNote: 'Atención 24/7 todos los días',
    location: 'Ubicación',
    locationNote: 'Cobertura nacional',
    whatsappAria: 'Escribir por WhatsApp al {phone}',
    whatsappTitle: 'Escribir por WhatsApp',
    cta: 'Solicitar tu servicio',
  },

  footer: {
    tagline: 'Destinos Travel — Transporte ejecutivo · Lima, Perú',
    aria: 'Enlaces del pie de página',
    book: 'Reservar',
    empresas: 'Empresas',
    faq: 'Preguntas frecuentes',
    terms: 'Términos y condiciones',
    contact: 'Contacto',
  },

  whatsapp: {
    aria: 'Escríbenos por WhatsApp',
    // Texto que aparece escrito al abrir WhatsApp desde la web.
    message: 'Hola, vengo de la página web de Destinos Travel. Quisiera cotizar un servicio de transporte ejecutivo.',
    operatorMessage: 'Hola, vengo de la página web de Destinos Travel y quisiera hablar con un operador.',
  },

  photos: {
    view: 'Ver foto: {alt}',
    dialog: 'Fotos',
    close: 'Cerrar',
    prev: 'Foto anterior',
    next: 'Foto siguiente',
  },

  page: {
    back: 'Volver al inicio',
  },

  faqPage: {
    metaTitle: 'Preguntas frecuentes — Destinos Travel',
    metaDescription:
      'Reservas, recojo en el aeropuerto, equipaje, pagos, horarios y servicios para empresas de Destinos Travel, transporte ejecutivo en Lima.',
    kicker: 'Preguntas frecuentes',
    title: 'Todo lo que necesitas saber.',
    intro: 'Reservas, aeropuerto, equipaje, pagos y más. Si no encuentras tu respuesta, escríbenos: te respondemos a cualquier hora.',
    topics: 'Temas',
    readyTitle: '¿Listo para reservar?',
    readyText: 'Arma tu traslado en un minuto o escríbenos.',
    book: 'Reservar traslado',
  },

  termsPage: {
    metaTitle: 'Términos y condiciones — Destinos Travel',
    metaDescription:
      'Condiciones de reserva, cancelación, no show, recojo en el aeropuerto, recargos, pagos y equipaje de Destinos Travel.',
    kicker: 'Términos y condiciones',
    title: 'Condiciones del servicio.',
    updated: 'Última actualización: {date}.',
    toc: 'Contenido',
    preamble:
      'Estos términos rigen los servicios de transporte prestados por {company} (RUC {ruc}), con domicilio en {address}. Al reservar un servicio, el cliente acepta estas condiciones.',
    contactTitle: 'Contacto',
    contactText: 'Para consultas sobre estos términos escríbenos a {email} o llámanos al {phones}.',
    // Solo en otros idiomas: aviso de que rige la versión en español.
    translationNote: '',
  },
};
