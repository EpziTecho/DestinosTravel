// English. Same keys as src/i18n/es.js (ui) and the content in src/content/.
// Anything missing here is shown in Spanish.
// Written as natural US English, not a word-for-word translation: when the
// Spanish changes, carry over the meaning, not the sentence structure.

export default {
  ui: {
    meta: {
      title: "Destinos Travel — Executive Chauffeur Service in Lima, Peru",
      description:
        "Executive and diplomatic chauffeur service in Lima, Peru. Airport transfers, corporate travel and VIP rides, 24/7. Safe, reliable and discreet.",
    },

    nav: {
      nosotros: "About us",
      servicios: "Services",
      reservar: "Book",
      empresas: "Business",
      preguntas: "FAQ",
      contacto: "Contact",
      cta: "Book a ride",
      openMenu: "Open menu",
      language: "Language",
    },

    hero: {
      support: "Available 24/7",
      location: "Lima, Peru",
      safe: "Safe and discreet",
      kicker: "DESTINOS TRAVEL / EXECUTIVE CHAUFFEURS",
      title: "You set the destination.",
      titleHighlight: "Our protocol handles the rest.",
      sub: "Executive and diplomatic transport in Lima: airport transfers, corporate travel and trips beyond the city. Professional chauffeurs, around the clock.",
      book: "Book a ride",
      services: "Our services",
      scroll: "Scroll to learn more",
    },

    beats: {
      mission: {
        kicker: "Mission",
        heading: "On time, safe and discreet.",
        sub: "To provide safe, reliable and comfortable executive transport, with personal attention and a real commitment to excellence, so every journey is built on trust and discretion.",
        specs: [
          ["Service", "24/7"],
          ["Flight tracking", "included"],
          ["Wait time", "60 min free"],
        ],
      },
      vision: {
        kicker: "Vision",
        heading: "The first choice for anyone arriving in Peru.",
        sub: "To be recognized as Peru's leading executive transport company and the go-to choice for international visitors arriving in our country.",
        specs: [
          ["Payment", "after the ride"],
          ["Currency", "soles or dollars"],
          ["Invoices", "available"],
        ],
      },
      about: {
        kicker: "About us",
        heading: "Experience you can feel on every ride.",
        sub: "We have a proven track record in executive and diplomatic transport, with a team of professional chauffeurs and a modern fleet built for comfort, safety and efficiency.",
        specs: [
          ["Background", "diplomatic"],
          ["Chauffeurs", "suit and tie"],
          ["Fleet", "modern"],
        ],
      },
      services: {
        kicker: "Services",
        heading: "Where can we",
        headingHighlight: "take you?",
        sub: "Ten services, one standard: on time, safe and personal, around the clock.",
        specs: [
          ["Services", "10"],
          ["Hours", "24/7"],
          ["Coverage", "Lima and beyond"],
        ],
      },
    },

    rail: ["Home", "01 · Mission", "02 · Vision", "03 · About us", "04 · Services"],

    services: {
      kicker: "Services",
      title: "A service for every journey.",
      book: "Book",
      bookAria: "Book: {name}",
    },

    vehicles: {
      "Auto / SUV": "Car / SUV",
      Van: "Van",
      Bus: "Bus",
      Auto: "Car",
      SUV: "SUV",
    },

    diplomatic: {
      kicker: "Diplomatic experience",
      title: "Trusted by the",
      titleHighlight: "diplomatic corps.",
      intro:
        "We have driven staff from embassies and international organizations in Lima. That level of demand is the standard we hold ourselves to with every client.",
      points: [
        { title: "Protocol", text: "Formal etiquette and chauffeurs in suits at every pickup." },
        { title: "Discretion", text: "Complete confidentiality about passengers, routes and schedules." },
        { title: "Punctuality", text: "We work around official schedules, day or night, all year round." },
      ],
    },

    clients: {
      title: "Chosen by the most demanding clients.",
      intro: "Some of the sectors that already trust us.",
    },

    booking: {
      kicker: "Online booking",
      title: "Book your ride",
      titleHighlight: "in a minute.",
      intro:
        "Tell us what you need and send your booking from here or on WhatsApp. We confirm the booking and the fare before your trip, day or night.",

      legendService: "Service",
      stepService: "What kind of ride do you need?",

      legendWhen: "Date, time and passengers",
      whenVehicle: "When, and in which vehicle?",
      whenOnly: "When?",
      whenPeople: "When, and for how many people?",
      date: "Pickup date",
      datePast: "That date has already passed. Choose today or a later date (Peru time).",
      time: "Pickup time",
      timePast: "That time has already passed (Peru time).",
      timeHint: "Please book at least {hours} hours ahead. With less notice, it depends on availability.",
      shortNotice: "With less than {hours} hours' notice, your booking depends on availability.",
      hourLabel: "Hour (00 to 23)",
      minuteLabel: "Minutes (00 to 59)",
      hourList: "Hours",
      minuteList: "Minutes",
      hourPlaceholder: "HH",
      minutePlaceholder: "MM",
      passengers: "Passengers",
      bags: "Checked bags",
      bagsNote: "Up to 23 kg",
      handBags: "Carry-ons",
      handBagsNote: "Up to 10 kg",
      decrease: "Remove {label}",
      increase: "Add {label}",
      vehicleType: "Vehicle type",

      legendRoute: "Route and details",
      stepRoute: "Where from, and where to?",
      routeFrom: "Pickup location",
      routeTo: "Drop-off location",
      addressPlaceholder: "Address, hotel or office",
      flight: "Flight number (optional)",
      flightPlaceholder: "e.g. LA2047",
      name: "Your name (optional)",
      namePlaceholder: "For the arrival sign",
      email: "Your email",
      emailPlaceholder: "name@email.com",
      phone: "Your phone or WhatsApp",
      contactHint: "To book from here, we need at least one of these so we can confirm your ride.",
      notes: "Notes (optional)",
      notesPlaceholder: "Child seat, extra stops, oversized luggage…",

      summary: "Your ride",
      sumService: "Service",
      sumWhen: "Date and time",
      sumTravel: "Passengers",
      sumVehicle: "Vehicle",
      sumRoute: "Route",
      notChosen: "not selected",

      passengersCount: { one: "{n} passenger", other: "{n} passengers" },
      bagsCount: { one: "{n} checked bag (23 kg)", other: "{n} checked bags (23 kg)" },
      handBagsCount: { one: "{n} carry-on", other: "{n} carry-ons" },

      sentTitle: "Booking received!",
      sentText:
        "Your reference is {ref}. We'll contact you {via} to confirm the booking and the fare. You'll get your driver's details up to 30 minutes before pickup.",
      viaBoth: "on WhatsApp or by email",
      viaPhone: "on WhatsApp",
      viaEmail: "by email",
      again: "Make another booking",

      send: "Send booking",
      sending: "Sending…",
      whatsapp: "Book on WhatsApp",
      acceptTerms: "By booking, you accept our {terms}.",
      termsLink: "Terms and Conditions",
      operatorPrompt: "Prefer to talk to someone?",
      operator: "Chat with our team",
      allDay: "We're available 24/7, every day of the year",
      confirmFlow: "We confirm your booking first, then send your driver's details",

      hintError: "{error} Please try again or book on WhatsApp.",
      hintMissing: "Still needed: {list}.",
      hintReady: "We'll confirm the booking and the fare before your trip.",
      hintIdle: "No obligation: we confirm the fare before your trip.",
      sendFailed: "We couldn't send your booking.",
      offline: "Please check your internet connection.",

      missingService: "the type of service",
      missingWhen: "the date and time",
      missingPastDay: "a pickup date that hasn't passed",
      missingPastTime: "a time that hasn't passed",
      missingRoute: "the route",
      missingContact: "an email or phone number",
      missingEmail: "a valid email",
      missingPhone: "a valid phone number",
    },

    empresas: {
      kicker: "Businesses and hotels",
      title: "Your company's travel,",
      titleHighlight: "sorted.",
      intro:
        "For companies that move executives and clients, and hotels that welcome guests. You deal with one contact; we handle the rest.",
      benefits: [
        { title: "One point of contact", text: "We arrange rides for your team, clients or guests through a single channel." },
        { title: "Credit and monthly billing", text: "Electronic invoices issued to your company, with credit terms and monthly billing." },
        { title: "Multiple vehicles at once", text: "Cars, SUVs, vans and minibuses for groups, events and delegations." },
        { title: "Hourly corporate service", text: "A chauffeur at your disposal from 3 hours, for trips between nearby districts." },
        { title: "Hotel guests", text: "We pick up your guests at the hotel or the airport, day or night." },
        { title: "Chauffeurs in suits", text: "Punctual, discreet and well presented — a credit to your brand." },
      ],
      proposalSubject: "Corporate proposal — Destinos Travel",
      proposalBody: [
        "Hello, I'd like a transport proposal for my company.",
        "",
        "Company:",
        "Tax ID (RUC):",
        "Contact name and phone:",
        "Type of rides (airport, executive, hourly, events…):",
        "Approximate frequency (per week or per month):",
        "",
        "Thank you.",
      ],
      whatsappText: "Hello, I found you on the Destinos Travel website. I'd like a transport proposal for my company.",
      byEmail: "Request a proposal by email",
      byWhatsapp: "Message us on WhatsApp",
      note: "For corporate services, email works best: {email}. Credit terms are in our {terms}.",
      termsLink: "Terms and Conditions",
    },

    gallery: {
      kicker: "Gallery",
      title: "Our fleet, up close.",
    },

    faq: {
      kicker: "FAQ",
      title: "Before you book.",
      intro: "The questions we hear most. Anything else? See all the questions or get in touch.",
      seeAll: "See all {n} questions",
      termsLink: "Read the Terms and Conditions",
    },

    contact: {
      kicker: "Contact",
      title: "Get in touch.",
      titleHighlight: "We reply day or night.",
      email: "Email",
      emailNote: "Email us to request a service",
      phones: "Phone",
      phonesNote: "Available 24/7, every day",
      location: "Location",
      locationNote: "Nationwide coverage",
      whatsappAria: "Message {phone} on WhatsApp",
      whatsappTitle: "Message us on WhatsApp",
      cta: "Request a service",
    },

    footer: {
      tagline: "Destinos Travel — Executive chauffeur service · Lima, Peru",
      aria: "Footer links",
      book: "Book",
      empresas: "Business",
      faq: "FAQ",
      terms: "Terms and Conditions",
      contact: "Contact",
    },

    whatsapp: {
      aria: "Message us on WhatsApp",
      message: "Hi, I found you on the Destinos Travel website and I'd like a quote for an executive transport service.",
      operatorMessage: "Hi, I found you on the Destinos Travel website and I'd like to speak with someone from your team.",
    },

    photos: {
      view: "View photo: {alt}",
      dialog: "Photos",
      close: "Close",
      prev: "Previous photo",
      next: "Next photo",
    },

    page: {
      back: "Back to home",
    },

    faqPage: {
      metaTitle: "FAQ — Destinos Travel",
      metaDescription:
        "Bookings, airport pickups, luggage, payment, hours and corporate services at Destinos Travel, executive chauffeur service in Lima.",
      kicker: "FAQ",
      title: "Everything you need to know.",
      intro: "Bookings, airport pickups, luggage, payment and more. Can't find what you're looking for? Get in touch — we reply day or night.",
      topics: "Topics",
      readyTitle: "Ready to book?",
      readyText: "Set up your ride in a minute, or message us.",
      book: "Book a ride",
    },

    termsPage: {
      metaTitle: "Terms and Conditions — Destinos Travel",
      metaDescription:
        "Booking, cancellation, no-show, airport pickup, surcharge, payment and luggage terms at Destinos Travel.",
      kicker: "Terms and Conditions",
      title: "Terms of service.",
      updated: "Last updated: {date}.",
      toc: "Contents",
      preamble:
        "These terms apply to the transport services provided by {company} (RUC {ruc}), with registered address at {address}. By booking a service, the client agrees to these terms.",
      contactTitle: "Contact",
      contactText: "If you have any questions about these terms, email us at {email} or call {phones}.",
      translationNote: "This translation is for reference only. If there is any discrepancy, the Spanish version prevails.",
    },
  },

  services: {
    "transfer-in": {
      label: "Airport pickup",
      blurb: "We meet you at arrivals, with flight tracking and 60 minutes of waiting time included.",
    },
    "transfer-out": {
      label: "Airport drop-off",
      blurb: "We pick you up wherever you are and get you to the airport in good time for your flight.",
    },
    ejecutivo: {
      label: "Executive",
      blurb: "Executive and diplomatic transport with protocol, punctuality and complete discretion.",
    },
    tour: {
      label: "Tours and trips outside Lima",
      blurb: "Beaches, Paracas, Caral, Chancay, Huaral, Trujillo or wherever you'd like to go.",
    },
    corporativo: {
      label: "Hourly corporate service",
      blurb: "A chauffeur at your company's disposal from 3 hours, within nearby districts.",
    },
    conductor: {
      label: "Driver for your organization",
      blurb:
        "A professional driver for your company's or organization's own vehicle, when your regular driver is on vacation or unavailable.",
      fieldLabels: { from: "Driver reports to", to: "Service area or destination" },
      notesHint: "Days and hours needed, vehicle model…",
    },
    reemplazo: {
      label: "Designated driver",
      blurb:
        "We drive your own car to weddings, parties and events, or whenever you can't drive. You get there and back in your own car, worry-free.",
      fieldLabels: { from: "Driver meets you at", to: "Destination" },
      notesHint: "Car model, one way or round trip, approximate return time…",
    },
    courier: {
      label: "Confidential courier",
      blurb:
        "Hand pickup and delivery of confidential documents and sensitive items, with full confidentiality and proof of delivery.",
      fieldLabels: { from: "Pickup address", to: "Delivery address" },
      notesHint: "What you're sending, plus the recipient's name and ID number…",
    },
    bodas: {
      label: "Weddings",
      blurb: "Elegant, exclusive transport for the couple and their guests on their big day.",
    },
    otro: {
      label: "Other rides",
      blurb: "Anything else you need, tailored to you.",
    },
  },

  faq: [
    {
      title: "Bookings",
      items: [
        {
          q: "How do I book a ride?",
          a: "Right here on the website, in about a minute: fill in the form and send your booking directly or on WhatsApp. You can also message us on WhatsApp or give us a call.",
        },
        {
          q: "How far in advance should I book?",
          a: "We recommend booking at least 2 hours ahead. If you're short on time, you can still send your booking, but it will depend on availability.",
        },
        {
          q: "How is my booking confirmed?",
          a: "We confirm your booking first. Then we send your driver's details, which can arrive up to 30 minutes before pickup.",
        },
        {
          q: "Can I change or cancel my booking?",
          a: "Yes, free of charge up to 2 hours before pickup. After that, a late cancellation fee of up to 50% of the fare applies. If the passenger doesn't show up (no-show), the full fare is charged.",
        },
      ],
    },
    {
      title: "At the airport",
      items: [
        {
          q: "What if my flight is delayed?",
          a: "Your booking is still guaranteed: we track your flight and a driver will be there waiting for you. Depending on the situation, surcharges may apply.",
        },
        {
          q: "Do you track my flight?",
          a: "Always. We follow your flight on the airport website and flight-tracking apps. Since these sources don't always show delays or cancellations in time, please let us know if your flight changes, is delayed or is cancelled. That way you avoid waiting-time surcharges or the no-show fee.",
        },
        {
          q: "Where will the driver meet me?",
          a: "Near Exit 1 for domestic flights, or Exit 3 for international flights. We recommend staying in touch with our team or your driver on WhatsApp or Telegram before you head out with your luggage.",
        },
        {
          q: "How much waiting time is included?",
          a: "At the airport, up to 60 minutes after landing. For other pickups, a 15-minute grace period from the agreed time. After that, waiting time costs S/ 30.00 per hour (plus parking at the airport).",
        },
      ],
    },
    {
      title: "Vehicles and luggage",
      items: [
        {
          q: "How many people and bags fit?",
          a: "It depends on the vehicle:",
          list: [
            "Standard car: 4 passengers and 2 checked bags (23 kg).",
            "SUV: 4 passengers and 3 checked bags (23 kg), or 6 passengers and 2 carry-ons (10 kg).",
          ],
        },
        {
          q: "What if there are more of us, or we have more luggage?",
          a: "We can book more than one vehicle, or vans and minibuses, depending on what you need.",
        },
        {
          q: "Do you have child seats?",
          a: "Not yet, but we'll have them available very soon.",
        },
      ],
    },
    {
      title: "Payment and receipts",
      items: [
        {
          q: "How can I pay?",
          a: "Cash, Yape, Plin, bank transfer, or card through a payment link, in soles or dollars. Card payments carry a 5.5% surcharge (Peruvian cards) or 6.5% (international cards). We issue electronic invoices.",
        },
        {
          q: "When do I pay?",
          a: "At the end of the ride. You'll receive your receipt by the next day at the latest.",
        },
        {
          q: "Do you issue invoices?",
          a: "Yes, electronic invoices. For companies, we also offer credit and monthly billing.",
        },
      ],
    },
    {
      title: "Hours and destinations",
      items: [
        {
          q: "Do you work nights and holidays?",
          a: "Yes, we work 24 hours a day, every day, holidays included. There's a S/ 10 night surcharge, and a 50% surcharge on Christmas and New Year's.",
        },
        {
          q: "Do you do trips outside Lima?",
          a: "Yes: beaches south of Lima, Paracas, Caral, Chancay, Huaral, Trujillo and anywhere else you need to go.",
        },
        {
          q: "How does the hourly corporate service work?",
          a: "It's booked for a minimum of 3 hours, for trips between nearby districts. It doesn't apply to airport rides.",
        },
      ],
    },
    {
      title: "Businesses and hotels",
      items: [
        {
          q: "Do you offer corporate accounts?",
          a: "Yes: one point of contact for everything, electronic invoices, credit and monthly billing, and multiple vehicles at once for groups and events. For corporate services, we recommend contacting us by email.",
        },
        {
          q: "Do you pick up hotel guests?",
          a: "Yes, we pick up guests at their hotel and at the airport.",
        },
      ],
    },
  ],

  terms: [
    {
      title: "Bookings and confirmation",
      items: [
        "Bookings can be made on the website (sent directly or via WhatsApp), on WhatsApp, by phone or by email, at least 2 hours before pickup.",
        "Bookings with less than 2 hours' notice are also accepted, subject to driver and vehicle availability. If we can't take a booking, we will let the client know as soon as possible.",
        "All bookings are subject to confirmation by Destinos Travel. We first confirm the booking with the client, then send the driver's details, which may arrive up to 30 minutes before pickup.",
        "The client is responsible for making sure the booking details (date, time, addresses, flight number, number of passengers and luggage) are correct.",
      ],
    },
    {
      title: "Changes and cancellations",
      items: [
        "Changes and cancellations are free of charge if made at least 2 hours before the pickup time.",
        "If a booking is cancelled less than 2 hours before pickup, a late cancellation fee of up to 50% of the fare applies.",
      ],
    },
    {
      title: "No-shows",
      items: [
        "If the passenger does not show up at the agreed place and time, and does not contact us to reschedule, it is treated as a no-show and 100% of the fare is charged.",
      ],
    },
    {
      title: "Airport pickups",
      items: [
        "We track every flight. If the flight arrives early or late, the booking is still guaranteed and a driver will be waiting for the passenger.",
        "The driver waits near Exit 1 for domestic flights, or Exit 3 for international flights. We recommend that the passenger stay in touch with our team or the driver on WhatsApp or Telegram before heading out with their luggage.",
        "The fare includes up to 60 minutes of waiting time after landing. After that, the waiting-time and parking surcharges listed under Surcharges apply.",
        "Please note: flights are tracked using public information from the airport website and flight-tracking apps. These sources may contain errors and may not show delays, cancellations or flight changes in time. For this reason, we ask passengers to let us know about any delay, cancellation or change to their flight. Otherwise, the waiting-time surcharge or the no-show fee may apply.",
      ],
    },
    {
      title: "Surcharges",
      items: [
        {
          text: "The following surcharges may be added to the agreed fare:",
          list: [
            "Waiting time before the ride starts: a 15-minute grace period from the agreed pickup time. After that, S/ 30.00 per hour of waiting.",
            "Waiting time at the airport: 60 minutes after landing are included. After that, S/ 30.00 per hour of waiting.",
            "Airport parking: S/ 8.40 (reference rate set by the airport; subject to change at any time).",
            "Night hours: S/ 10.00.",
            "Christmas and New Year's: 50% of the fare.",
            "Stops along the way: free for up to 10 minutes.",
            "Detours or pickups off the route: based on distance, with a minimum surcharge of S/ 15.00.",
            "Tolls and parking during the service: added to the fare at the end.",
            "Card payments: 5.5% for Peruvian cards and 6.5% for international cards.",
          ],
        },
        "The waiting-time surcharge is charged per full hour, even if the wait is shorter. The company may, at its discretion, charge only part of the hour.",
        "Depending on the situation, a flight delay may lead to waiting-time and parking surcharges.",
      ],
    },
    {
      title: "Payment and receipts",
      items: [
        "We accept cash, Yape, Plin, bank transfer, and credit or debit cards through a payment link (with the surcharge shown under Surcharges).",
        "Payment can be made in soles or US dollars.",
        "Payment is made at the end of the ride. The electronic receipt is sent by the next day at the latest.",
        "We issue electronic invoices. For companies, we offer credit and monthly billing, subject to terms agreed in advance.",
      ],
    },
    {
      title: "Vehicles and luggage",
      items: [
        {
          text: "Approximate capacity per vehicle:",
          list: [
            "Standard car: 4 passengers and 2 checked bags (23 kg).",
            "SUV: 4 passengers and 3 checked bags (23 kg), or 6 passengers and 2 carry-ons (10 kg).",
          ],
        },
        "If the luggage exceeds the vehicle's capacity, we will try to fit it inside the cabin, at the expense of passenger comfort. In such cases, we recommend booking an additional vehicle.",
        "For groups, we can book more than one vehicle, or vans and minibuses, depending on the client's needs.",
        "We do not currently provide child seats.",
      ],
    },
    {
      title: "Service area",
      items: [
        {
          text: "Our service area covers:",
          list: [
            "Miraflores, San Isidro, Barranco, Jesús María, Lince, Magdalena del Mar and San Miguel.",
            "Jorge Chávez International Airport.",
            "Parts of Callao, La Molina and Santiago de Surco (please ask when booking).",
          ],
        },
        "We also operate outside this area; any extra cost for the additional distance is quoted when the booking is confirmed.",
      ],
    },
    {
      title: "Lost items",
      items: [
        "On all our services, anything the client leaves in the vehicle is fully guaranteed: the driver keeps it safe and we arrange to return it to the client.",
      ],
    },
    {
      title: "Hourly corporate service",
      items: [
        "It is booked for a minimum of 3 hours.",
        "It covers trips between neighboring districts. It does not apply to rides to or from the airport.",
      ],
    },
    {
      title: "Driver for your organization",
      items: [
        "Destinos Travel provides companies and organizations with a professional driver for their own vehicles, for example while their regular driver is on vacation, on leave or absent.",
        "The service is charged by the hour, with a minimum of 5 hours. Days, hours and conditions are agreed in writing beforehand.",
        "The vehicle must have valid SOAT insurance, an up-to-date vehicle inspection and its registration card, and be in good mechanical condition. Maintenance and the condition of the vehicle are the client's responsibility.",
        "Fuel, tolls and parking during the service are paid by the client.",
        "If the service starts or ends outside the service area, the client covers the driver's travel to or from that location.",
        "The driver is employed by Destinos Travel. There is no employment relationship between the driver and the client.",
        "The driver follows traffic laws and may refuse any instruction that breaks them or puts the passengers or the vehicle at risk.",
        "Traffic fines caused by the driver are the responsibility of Destinos Travel. Fines related to the vehicle's condition, documents or permits are the client's responsibility.",
      ],
    },
    {
      title: "Designated driver",
      items: [
        "The designated driver drives the client's own vehicle, for example at weddings, parties and events, or whenever the client cannot or should not drive.",
        "The vehicle must have valid SOAT insurance and an up-to-date vehicle inspection, and be safe to drive. The driver may decline to start the service if the vehicle does not meet these conditions.",
        "Before starting, the driver and the client inspect the vehicle together and record its condition with photos. Destinos Travel is not responsible for damage or faults that existed before the service.",
        "The vehicle may carry no more people than it has seats with seat belts.",
        "A flat hourly rate applies for the full duration of the service, including the time the driver waits during the event.",
        "If the service starts or ends outside the service area, the client covers the driver's travel to or from that location.",
      ],
    },
    {
      title: "Confidential courier",
      items: [
        "The courier service covers hand pickup and delivery of confidential documents and sensitive items.",
        "The client hands over the item closed or sealed. Destinos Travel does not open or inspect its contents, and takes it directly from the sender to the recipient, with no intermediaries.",
        "When booking, the client provides the recipient's name and ID number. The item is delivered only to that person, or to someone the client authorizes in writing, after verifying their identity.",
        "The recipient signs for the delivery digitally, and the client confirms it. This records who received it, and when.",
        "We do not carry illegal items or anything whose transport is prohibited by law.",
        "If the recipient is not available, the driver waits for a 15-minute grace period. After that, the delivery is rescheduled at an additional cost.",
        "The minimum fare for the courier service is S/ 30.00.",
      ],
    },
    {
      title: "Changes to these terms",
      items: [
        "Destinos Travel may update these terms and conditions. The version in effect is the one published on this page, along with its last updated date.",
      ],
    },
  ],

  clientTypes: [
    { title: "Embassies and diplomatic missions", text: "Transport for diplomatic staff and their delegations." },
    { title: "International organizations and summits", text: "Chauffeurs for delegations at international events in Lima." },
    { title: "Airlines", text: "Crew and staff transport between the airport and the city." },
    { title: "Companies and media", text: "Transport for executives, teams and corporate clients." },
    { title: "Cultural and educational institutions", text: "Transport for guests, faculty and events." },
    { title: "Travelers and families", text: "Tourists and individuals: airport, tours and trips outside Lima." },
  ],

  photoCaptions: {
    "diplomatico/20261121-01.jpeg": "Destinos Travel chauffeur on diplomatic duty at APEC 2024",
    "diplomatico/20261121-02.jpeg": "Destinos Travel chauffeur on diplomatic duty at APEC 2024",
    "diplomatico/20261121-10.jpeg": "Destinos Travel chauffeur serving a diplomatic mission",
    "diplomatico/20261121-11.jpeg": "Destinos Travel chauffeur serving a diplomatic mission",
    "galeria/20261121-01.jpeg": "Destinos Travel on the job",
    "galeria/20261121-02.jpeg": "Destinos Travel on the job",
  },

  photoDefaults: {
    diplomatico: "Destinos Travel chauffeur on diplomatic duty",
    galeria: "Destinos Travel on the job",
  },
};
