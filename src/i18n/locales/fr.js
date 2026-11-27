// Français. Mêmes clés que src/i18n/es.js (ui) et le contenu de src/content/.
// Ce qui manque ici s'affiche en espagnol.

export default {
  ui: {
    meta: {
      title: "Destinos Travel — Transport exécutif à Lima, Pérou",
      description:
        "Transport exécutif et diplomatique à Lima, Pérou. Transferts aéroport, déplacements professionnels et trajets VIP, 24h/24 et 7j/7. Sûr, fiable et discret.",
    },

    nav: {
      nosotros: "Qui sommes-nous",
      servicios: "Services",
      reservar: "Réserver",
      empresas: "Entreprises",
      preguntas: "FAQ",
      contacto: "Contact",
      cta: "Réserver un trajet",
      openMenu: "Ouvrir le menu",
      language: "Langue",
    },

    hero: {
      support: "Service 24h/24",
      location: "Lima, Pérou",
      safe: "Sûr et discret",
      kicker: "DESTINOS TRAVEL / TRANSPORT EXÉCUTIF",
      title: "Vous choisissez la destination.",
      titleHighlight: "Notre protocole fait le reste.",
      sub: "Transport exécutif et diplomatique à Lima : transferts aéroport, déplacements professionnels et excursions hors de Lima. Des chauffeurs professionnels, jour et nuit.",
      book: "Réserver un trajet",
      services: "Nos services",
      scroll: "Faites défiler pour en savoir plus",
    },

    beats: {
      mission: {
        kicker: "Mission",
        heading: "Ponctuels, sûrs et discrets.",
        sub: "Offrir un transport exécutif sûr, ponctuel et confortable, avec une attention personnalisée et une véritable exigence d'excellence, pour que chaque trajet repose sur la confiance et la discrétion.",
        specs: [
          ["Service", "24h/24"],
          ["Suivi des vols", "inclus"],
          ["Attente", "60 min offertes"],
        ],
      },
      vision: {
        kicker: "Vision",
        heading: "Le premier choix de ceux qui arrivent au Pérou.",
        sub: "Devenir la référence du transport exécutif au Pérou et le premier choix des visiteurs étrangers qui arrivent dans notre pays.",
        specs: [
          ["Paiement", "à la fin du trajet"],
          ["Devise", "soles ou dollars"],
          ["Factures", "disponibles"],
        ],
      },
      about: {
        kicker: "Qui sommes-nous",
        heading: "Une expérience qui se ressent à chaque trajet.",
        sub: "Nous disposons d'une solide expérience du transport exécutif et diplomatique, avec une équipe de chauffeurs professionnels et une flotte moderne pensée pour le confort, la sécurité et l'efficacité.",
        specs: [
          ["Expérience", "diplomatique"],
          ["Chauffeurs", "en costume"],
          ["Flotte", "moderne"],
        ],
      },
      services: {
        kicker: "Services",
        heading: "Où pouvons-nous",
        headingHighlight: "vous emmener ?",
        sub: "Dix services, une même exigence : ponctualité, sécurité et attention personnalisée, 24h/24.",
        specs: [
          ["Services", "10"],
          ["Disponibilité", "24h/24"],
          ["Couverture", "Lima et les régions"],
        ],
      },
    },

    rail: ["Accueil", "01 · Mission", "02 · Vision", "03 · Qui sommes-nous", "04 · Services"],

    services: {
      kicker: "Services",
      title: "Un service pour chaque voyage.",
      book: "Réserver",
      bookAria: "Réserver : {name}",
    },

    vehicles: {
      "Auto / SUV": "Voiture / SUV",
      Van: "Van",
      Bus: "Bus",
      Auto: "Voiture",
      SUV: "SUV",
    },

    diplomatic: {
      kicker: "Expérience diplomatique",
      title: "Au service du",
      titleHighlight: "corps diplomatique.",
      intro:
        "Nous avons transporté le personnel d'ambassades et d'institutions internationales à Lima. Ce niveau d'exigence, nous l'appliquons à chacun de nos clients.",
      points: [
        { title: "Protocole", text: "Un accueil protocolaire et des chauffeurs en costume à chaque prise en charge." },
        { title: "Discrétion", text: "Confidentialité totale sur les passagers, les itinéraires et les horaires." },
        { title: "Ponctualité", text: "Nous nous adaptons aux agendas officiels, de jour comme de nuit, tous les jours de l'année." },
      ],
    },

    clients: {
      title: "Choisis par les plus exigeants.",
      intro: "Quelques-uns des secteurs qui nous font déjà confiance.",
    },

    booking: {
      kicker: "Réservation en ligne",
      title: "Réservez votre trajet",
      titleHighlight: "en une minute.",
      intro:
        "Indiquez-nous le trajet souhaité et envoyez votre réservation d'ici ou par WhatsApp. Nous confirmons la réservation et le tarif avant le départ, à toute heure.",

      legendService: "Type de trajet",
      stepService: "De quel trajet avez-vous besoin ?",

      legendWhen: "Date, heure et passagers",
      whenVehicle: "Quand, et avec quel véhicule ?",
      whenOnly: "Pour quand ?",
      whenPeople: "Quand, et combien de voyageurs ?",
      date: "Date de prise en charge",
      datePast: "Cette date est déjà passée. Choisissez aujourd'hui ou une date ultérieure (heure du Pérou).",
      time: "Heure de prise en charge",
      timePast: "Cette heure est déjà passée (heure du Pérou).",
      timeHint: "Réservez au moins {hours} heures à l'avance. Au-delà, sous réserve de disponibilité.",
      shortNotice: "À moins de {hours} heures du départ, la réservation est sous réserve de disponibilité.",
      hourLabel: "Heure (00 à 23)",
      minuteLabel: "Minutes (00 à 59)",
      hourList: "Heures",
      minuteList: "Minutes",
      hourPlaceholder: "HH",
      minutePlaceholder: "MM",
      passengers: "Passagers",
      bags: "Valises",
      bagsNote: "Jusqu'à 23 kg",
      handBags: "Bagages à main",
      handBagsNote: "Jusqu'à 10 kg",
      decrease: "Retirer : {label}",
      increase: "Ajouter : {label}",
      vehicleType: "Type de véhicule",

      legendRoute: "Itinéraire et coordonnées",
      stepRoute: "D'où partez-vous, et où allez-vous ?",
      routeFrom: "Lieu de prise en charge",
      routeTo: "Destination",
      addressPlaceholder: "Adresse, hôtel ou bureau",
      flight: "N° de vol (facultatif)",
      flightPlaceholder: "Ex. LA2047",
      name: "Votre nom (facultatif)",
      namePlaceholder: "Pour la pancarte d'accueil",
      email: "Votre e-mail",
      emailPlaceholder: "nom@email.com",
      phone: "Votre téléphone ou WhatsApp",
      contactHint: "Pour réserver ici, indiquez au moins l'un des deux : c'est ainsi que nous vous confirmons le trajet.",
      notes: "Remarques (facultatif)",
      notesPlaceholder: "Siège bébé, arrêts, bagages volumineux…",

      summary: "Votre trajet",
      sumService: "Service",
      sumWhen: "Date et heure",
      sumTravel: "Voyageurs",
      sumVehicle: "Véhicule",
      sumRoute: "Itinéraire",
      notChosen: "non sélectionné",

      passengersCount: { one: "{n} passager", other: "{n} passagers" },
      bagsCount: { one: "{n} valise de 23 kg", other: "{n} valises de 23 kg" },
      handBagsCount: { one: "{n} bagage à main", other: "{n} bagages à main" },

      sentTitle: "Réservation reçue !",
      sentText:
        "Votre référence est {ref}. Nous vous contacterons {via} pour confirmer la réservation et le tarif. Vous recevrez les coordonnées de votre chauffeur jusqu'à 30 minutes avant le départ.",
      viaBoth: "par WhatsApp ou par e-mail",
      viaPhone: "par WhatsApp",
      viaEmail: "par e-mail",
      again: "Faire une autre réservation",

      send: "Envoyer la réservation",
      sending: "Envoi en cours…",
      whatsapp: "Réserver par WhatsApp",
      acceptTerms: "En réservant, vous acceptez nos {terms}.",
      termsLink: "Conditions générales",
      operatorPrompt: "Vous préférez nous parler directement ?",
      operator: "Parler à un conseiller",
      allDay: "Nous sommes joignables 24h/24, 7j/7",
      confirmFlow: "Nous confirmons d'abord votre réservation, puis vous envoyons les coordonnées du chauffeur",

      hintError: "{error} Réessayez ou réservez par WhatsApp.",
      hintMissing: "Il manque : {list}.",
      hintReady: "Nous confirmons la réservation et le tarif avant le départ.",
      hintIdle: "Sans engagement : nous confirmons le tarif avant le départ.",
      sendFailed: "Nous n'avons pas pu envoyer votre réservation.",
      offline: "Vérifiez votre connexion internet.",

      missingService: "le type de trajet",
      missingWhen: "la date et l'heure",
      missingPastDay: "une date de prise en charge à venir",
      missingPastTime: "une heure à venir",
      missingRoute: "l'itinéraire",
      missingContact: "un e-mail ou un téléphone",
      missingEmail: "un e-mail valide",
      missingPhone: "un téléphone valide",
    },

    empresas: {
      kicker: "Entreprises et hôtels",
      title: "Les déplacements de votre entreprise,",
      titleHighlight: "en toute simplicité.",
      intro:
        "Pour les entreprises qui font voyager cadres et clients, et pour les hôtels qui accueillent des voyageurs. Un seul interlocuteur ; nous nous occupons du reste.",
      benefits: [
        { title: "Un seul interlocuteur", text: "Nous organisons les trajets de votre équipe, de vos clients ou de vos hôtes via un canal unique." },
        { title: "Crédit et facturation mensuelle", text: "Factures électroniques au nom de votre entreprise, avec paiement à crédit et facturation mensuelle." },
        { title: "Plusieurs véhicules à la fois", text: "Voitures, SUV, vans et minibus pour les groupes, événements et délégations." },
        { title: "Mise à disposition à l'heure", text: "Un chauffeur à votre disposition dès 3 heures, pour des trajets entre districts voisins." },
        { title: "Clients d'hôtel", text: "Nous prenons en charge vos clients à l'hôtel ou à l'aéroport, de jour comme de nuit." },
        { title: "Chauffeurs en costume", text: "Ponctuels, discrets et soignés : à l'image de votre entreprise." },
      ],
      proposalSubject: "Proposition entreprise — Destinos Travel",
      proposalBody: [
        "Bonjour, je souhaiterais une proposition de transport pour mon entreprise.",
        "",
        "Entreprise :",
        "Numéro fiscal (RUC) :",
        "Personne de contact et téléphone :",
        "Type de trajets (aéroport, exécutif, mise à disposition, événements…) :",
        "Fréquence approximative (par semaine ou par mois) :",
        "",
        "Merci.",
      ],
      whatsappText: "Bonjour, je vous contacte depuis le site de Destinos Travel. Je souhaiterais une proposition de transport pour mon entreprise.",
      byEmail: "Demander une proposition par e-mail",
      byWhatsapp: "Écrire sur WhatsApp",
      note: "Pour les services aux entreprises, privilégiez l'e-mail : {email}. Les conditions de crédit figurent dans nos {terms}.",
      termsLink: "Conditions générales",
    },

    gallery: {
      kicker: "Galerie",
      title: "Notre flotte, de près.",
    },

    faq: {
      kicker: "Questions fréquentes",
      title: "Avant de réserver.",
      intro: "Les questions qu'on nous pose le plus souvent. Une autre question ? Consultez la liste complète ou écrivez-nous.",
      seeAll: "Voir les {n} questions",
      termsLink: "Lire les Conditions générales",
    },

    contact: {
      kicker: "Contact",
      title: "Écrivez-nous.",
      titleHighlight: "Nous répondons à toute heure.",
      email: "E-mail",
      emailNote: "Écrivez-nous pour demander un service",
      phones: "Téléphones",
      phonesNote: "Disponibles 24h/24, 7j/7",
      location: "Adresse",
      locationNote: "Couverture nationale",
      whatsappAria: "Écrire sur WhatsApp au {phone}",
      whatsappTitle: "Écrire sur WhatsApp",
      cta: "Demander un service",
    },

    footer: {
      tagline: "Destinos Travel — Transport exécutif · Lima, Pérou",
      aria: "Liens du pied de page",
      book: "Réserver",
      empresas: "Entreprises",
      faq: "Questions fréquentes",
      terms: "Conditions générales",
      contact: "Contact",
    },

    whatsapp: {
      aria: "Écrivez-nous sur WhatsApp",
      message: "Bonjour, je vous contacte depuis le site de Destinos Travel. Je souhaiterais un devis pour un transport exécutif.",
      operatorMessage: "Bonjour, je vous contacte depuis le site de Destinos Travel et je souhaiterais parler à un conseiller.",
    },

    photos: {
      view: "Voir la photo : {alt}",
      dialog: "Photos",
      close: "Fermer",
      prev: "Photo précédente",
      next: "Photo suivante",
    },

    page: {
      back: "Retour à l'accueil",
    },

    faqPage: {
      metaTitle: "Questions fréquentes — Destinos Travel",
      metaDescription:
        "Réservations, prise en charge à l'aéroport, bagages, paiements, horaires et services aux entreprises de Destinos Travel, transport exécutif à Lima.",
      kicker: "Questions fréquentes",
      title: "Tout ce qu'il faut savoir.",
      intro: "Réservations, aéroport, bagages, paiement et plus encore. Vous ne trouvez pas votre réponse ? Écrivez-nous : nous répondons à toute heure.",
      topics: "Thèmes",
      readyTitle: "Prêt à réserver ?",
      readyText: "Réservez votre trajet en une minute, ou écrivez-nous.",
      book: "Réserver un trajet",
    },

    termsPage: {
      metaTitle: "Conditions générales — Destinos Travel",
      metaDescription:
        "Conditions de réservation, d'annulation, de non-présentation, de prise en charge à l'aéroport, de suppléments, de paiement et de bagages de Destinos Travel.",
      kicker: "Conditions générales",
      title: "Conditions du service.",
      updated: "Dernière mise à jour : {date}.",
      toc: "Sommaire",
      preamble:
        "Les présentes conditions régissent les services de transport fournis par {company} (RUC {ruc}), dont le siège est situé au {address}. En réservant un service, le client accepte ces conditions.",
      contactTitle: "Contact",
      contactText: "Pour toute question sur ces conditions, écrivez-nous à {email} ou appelez-nous au {phones}.",
      translationNote: "Cette traduction est fournie à titre indicatif. En cas de divergence, la version espagnole prévaut.",
    },
  },

  services: {
    "transfer-in": {
      label: "Accueil à l'aéroport",
      blurb: "Nous vous attendons à la sortie, avec suivi de votre vol et 60 minutes d'attente comprises.",
    },
    "transfer-out": {
      label: "Transfert vers l'aéroport",
      blurb: "Nous venons vous chercher où que vous soyez et vous déposons à l'aéroport bien avant votre vol.",
    },
    ejecutivo: {
      label: "Transport exécutif",
      blurb: "Trajets exécutifs et diplomatiques avec protocole, ponctualité et discrétion totale.",
    },
    tour: {
      label: "Excursions hors de Lima",
      blurb: "Plages, Paracas, Caral, Chancay, Huaral, Trujillo ou la destination de votre choix.",
    },
    corporativo: {
      label: "Mise à disposition à l'heure",
      blurb: "Un chauffeur à la disposition de votre entreprise dès 3 heures, dans les districts voisins.",
    },
    conductor: {
      label: "Chauffeur pour votre organisme",
      blurb:
        "Un chauffeur professionnel pour le véhicule de votre entreprise ou organisme, lorsque votre chauffeur habituel est en congé ou absent.",
      fieldLabels: { from: "Le chauffeur se présente à", to: "Zone ou destination du service" },
      notesHint: "Jours et horaires du service, modèle du véhicule…",
    },
    reemplazo: {
      label: "Chauffeur de remplacement",
      blurb:
        "Nous conduisons votre propre voiture lors de mariages, de fêtes et d'événements, ou quand vous ne pouvez pas prendre le volant. Vous arrivez et repartez avec votre voiture, l'esprit tranquille.",
      fieldLabels: { from: "Le chauffeur vous rejoint à", to: "Destination" },
      notesHint: "Modèle du véhicule, aller simple ou aller-retour, heure approximative du retour…",
    },
    courier: {
      label: "Coursier confidentiel",
      blurb:
        "Collecte et remise en main propre de documents confidentiels et d'objets sensibles, en toute confidentialité et avec preuve de remise.",
      fieldLabels: { from: "Adresse de collecte", to: "Adresse de remise" },
      notesHint: "Nature de l'envoi, nom et numéro de pièce d'identité du destinataire…",
    },
    bodas: {
      label: "Mariages",
      blurb: "Des trajets élégants et exclusifs pour les mariés et leurs invités, le jour J.",
    },
    otro: {
      label: "Autres trajets",
      blurb: "Tout autre trajet, organisé sur mesure.",
    },
  },

  faq: [
    {
      title: "Réservations",
      items: [
        {
          q: "Comment réserver un trajet ?",
          a: "Directement sur ce site, en une minute : remplissez le formulaire et envoyez votre réservation, ou passez par WhatsApp. Vous pouvez aussi nous écrire sur WhatsApp ou nous appeler.",
        },
        {
          q: "Combien de temps à l'avance dois-je réserver ?",
          a: "Nous vous recommandons de réserver au moins 2 heures à l'avance. Si le délai est plus court, vous pouvez tout de même envoyer votre réservation, sous réserve de disponibilité.",
        },
        {
          q: "Comment ma réservation est-elle confirmée ?",
          a: "Nous confirmons d'abord votre réservation. Nous vous envoyons ensuite les coordonnées de votre chauffeur, parfois jusqu'à 30 minutes avant le départ.",
        },
        {
          q: "Puis-je modifier ou annuler ma réservation ?",
          a: "Oui, sans frais jusqu'à 2 heures avant le départ. Passé ce délai, des frais d'annulation tardive pouvant aller jusqu'à 50 % du tarif s'appliquent. Si le passager ne se présente pas (no-show), la totalité du trajet est facturée.",
        },
      ],
    },
    {
      title: "À l'aéroport",
      items: [
        {
          q: "Que se passe-t-il si mon vol est retardé ?",
          a: "Votre réservation est maintenue : nous suivons votre vol et un chauffeur vous attendra. Selon la situation, des suppléments peuvent s'appliquer.",
        },
        {
          q: "Suivez-vous mon vol ?",
          a: "Toujours. Nous suivons votre vol sur le site de l'aéroport et sur des applications de suivi de vols. Comme ces sources n'affichent pas toujours à temps un retard ou une annulation, prévenez-nous si votre vol change, est retardé ou annulé. Vous éviterez ainsi des suppléments d'attente ou les frais de no-show.",
        },
        {
          q: "Où le chauffeur m'attendra-t-il ?",
          a: "Près de la sortie 1 pour les vols nationaux, ou de la sortie 3 pour les vols internationaux. Avant de sortir avec vos bagages, restez en contact avec notre équipe ou votre chauffeur par WhatsApp ou Telegram.",
        },
        {
          q: "Quel temps d'attente est inclus ?",
          a: "À l'aéroport, jusqu'à 60 minutes après l'atterrissage. Pour les autres prises en charge, 15 minutes de tolérance à partir de l'heure convenue. Au-delà, l'attente est facturée S/ 30.00 de l'heure (plus le stationnement à l'aéroport).",
        },
      ],
    },
    {
      title: "Véhicules et bagages",
      items: [
        {
          q: "Combien de personnes et de valises peut-on transporter ?",
          a: "Cela dépend du véhicule :",
          list: [
            "Véhicule standard : 4 passagers et 2 valises de 23 kg.",
            "SUV : 4 passagers et 3 valises de 23 kg, ou 6 passagers et 2 bagages à main de 10 kg.",
          ],
        },
        {
          q: "Et si nous sommes plus nombreux ou avons plus de bagages ?",
          a: "Nous pouvons prévoir plusieurs véhicules, ou des vans et minibus, selon vos besoins.",
        },
        {
          q: "Proposez-vous des sièges enfant ?",
          a: "Pas encore, mais ce sera bientôt le cas.",
        },
      ],
    },
    {
      title: "Paiements et justificatifs",
      items: [
        {
          q: "Comment puis-je payer ?",
          a: "En espèces, Yape, Plin, virement ou par carte via un lien de paiement, en soles ou en dollars. Le paiement par carte entraîne un supplément de 5,5 % (cartes péruviennes) ou 6,5 % (cartes internationales). Nous émettons des factures électroniques.",
        },
        {
          q: "Quand dois-je payer ?",
          a: "À la fin du trajet. Vous recevez votre reçu au plus tard le lendemain.",
        },
        {
          q: "Émettez-vous des factures ?",
          a: "Oui, des factures électroniques. Pour les entreprises, nous proposons aussi le paiement à crédit et la facturation mensuelle.",
        },
      ],
    },
    {
      title: "Horaires et destinations",
      items: [
        {
          q: "Travaillez-vous la nuit et les jours fériés ?",
          a: "Oui, nous travaillons 24h/24, tous les jours, jours fériés compris. La nuit, un supplément de S/ 10 s'applique, et à Noël et au Nouvel An, une majoration de 50 % du tarif.",
        },
        {
          q: "Faites-vous des voyages hors de Lima ?",
          a: "Oui : plages du sud de Lima, Paracas, Caral, Chancay, Huaral, Trujillo et toute autre destination.",
        },
        {
          q: "Comment fonctionne la mise à disposition à l'heure ?",
          a: "Elle se réserve pour 3 heures minimum, pour des trajets entre districts proches. Elle ne s'applique pas aux trajets vers l'aéroport.",
        },
      ],
    },
    {
      title: "Entreprises et hôtels",
      items: [
        {
          q: "Avez-vous des comptes entreprise ?",
          a: "Oui : un seul interlocuteur pour tout organiser, factures électroniques, paiement à crédit et facturation mensuelle, et plusieurs véhicules à la fois pour les groupes et événements. Pour les services aux entreprises, nous vous recommandons de nous écrire par e-mail.",
        },
        {
          q: "Prenez-vous en charge les clients d'hôtel ?",
          a: "Oui, nous prenons en charge les clients à leur hôtel et à l'aéroport.",
        },
      ],
    },
  ],

  terms: [
    {
      title: "Réservations et confirmation",
      items: [
        "Les réservations se font sur le site (envoi direct ou WhatsApp), par WhatsApp, par téléphone ou par e-mail, au moins 2 heures avant le départ.",
        "Les réservations faites moins de 2 heures à l'avance sont également acceptées, mais elles sont soumises à la disponibilité des chauffeurs et des véhicules. Si nous ne pouvons pas les honorer, nous en informons le client dès que possible.",
        "Toute réservation est soumise à la confirmation de Destinos Travel. Nous confirmons d'abord la réservation au client, puis lui envoyons les coordonnées de son chauffeur, parfois jusqu'à 30 minutes avant le départ.",
        "Le client est responsable de l'exactitude des données de la réservation (date, heure, adresses, numéro de vol, nombre de passagers et bagages).",
      ],
    },
    {
      title: "Modifications et annulations",
      items: [
        "Les modifications et annulations sont gratuites si elles sont communiquées au moins 2 heures avant l'heure de départ.",
        "En cas d'annulation moins de 2 heures à l'avance, des frais d'annulation tardive pouvant aller jusqu'à 50 % du tarif s'appliquent.",
      ],
    },
    {
      title: "No-show (passager absent)",
      items: [
        "Si le passager ne se présente pas au lieu et à l'heure convenus, et ne nous contacte pas pour reprogrammer, il s'agit d'un no-show et 100 % du tarif est facturé.",
      ],
    },
    {
      title: "Prises en charge à l'aéroport",
      items: [
        "Nous suivons tous les vols. Si le vol arrive en avance ou en retard, la réservation est maintenue et un chauffeur attendra le passager.",
        "Le chauffeur attend près de la sortie 1 pour les vols nationaux, ou de la sortie 3 pour les vols internationaux. Nous recommandons au passager de rester en contact avec notre équipe ou le chauffeur par WhatsApp ou Telegram avant de sortir avec ses bagages.",
        "Le tarif inclut jusqu'à 60 minutes d'attente après l'atterrissage. Au-delà, les suppléments de temps d'attente et de stationnement indiqués dans la section des suppléments s'appliquent.",
        "Remarque : le suivi s'appuie sur des informations publiques, à savoir le site de l'aéroport et des applications de suivi de vols. Ces sources peuvent contenir des erreurs et ne pas afficher à temps un retard, une annulation ou un changement de vol. C'est pourquoi nous demandons au passager de nous informer de tout retard, annulation ou changement de vol. À défaut, le supplément de temps d'attente ou les frais de no-show peuvent s'appliquer.",
      ],
    },
    {
      title: "Suppléments",
      items: [
        {
          text: "Les suppléments suivants peuvent s'ajouter au tarif convenu :",
          list: [
            "Temps d'attente avant le début du trajet : 15 minutes de tolérance à partir de l'heure de prise en charge convenue. Au-delà, S/ 30.00 sont facturés par heure d'attente.",
            "Temps d'attente à l'aéroport : 60 minutes après l'atterrissage sont incluses. Au-delà, S/ 30.00 sont facturés par heure d'attente.",
            "Stationnement à l'aéroport : S/ 8.40 (prix indicatif fixé par l'aéroport ; il peut changer à tout moment).",
            "Horaire de nuit : S/ 10.00.",
            "Noël et Nouvel An : majoration de 50 % du tarif.",
            "Arrêts en chemin : sans frais jusqu'à 10 minutes.",
            "Détours ou prises en charge hors itinéraire : selon la distance, avec un supplément minimum de S/ 15.00.",
            "Péages et stationnements pendant le service : ajoutés au tarif à la fin.",
            "Paiement par carte : 5,5 % avec les cartes péruviennes et 6,5 % avec les cartes internationales.",
          ],
        },
        "Le supplément de temps d'attente se calcule par heure complète, même si l'attente est plus courte. L'entreprise peut, à sa discrétion, ne facturer qu'une partie de l'heure.",
        "Selon la situation, le retard d'un vol peut entraîner des suppléments de temps d'attente et de stationnement.",
      ],
    },
    {
      title: "Paiements et justificatifs",
      items: [
        "Nous acceptons les espèces, Yape, Plin, le virement bancaire et la carte de crédit ou de débit via un lien de paiement (avec le supplément indiqué dans la section des suppléments).",
        "Le paiement peut se faire en soles ou en dollars.",
        "Le paiement s'effectue à la fin du trajet. Le justificatif électronique est envoyé au plus tard le lendemain.",
        "Nous émettons des factures électroniques. Pour les entreprises, nous proposons le paiement à crédit et la facturation mensuelle, selon des conditions convenues au préalable.",
      ],
    },
    {
      title: "Véhicules et bagages",
      items: [
        {
          text: "Capacité indicative par véhicule :",
          list: [
            "Véhicule standard : 4 passagers et 2 valises de 23 kg.",
            "SUV : 4 passagers et 3 valises de 23 kg, ou 6 passagers et 2 bagages à main de 10 kg.",
          ],
        },
        "Si les bagages dépassent la capacité du véhicule, nous essaierons de les placer dans l'habitacle, au détriment du confort des passagers. Dans ces cas, nous suggérons de réserver un véhicule supplémentaire.",
        "Pour les groupes, nous pouvons réserver plus d'un véhicule, ou des vans et minibus, selon les besoins du client.",
        "Nous ne proposons pas encore de sièges enfant.",
      ],
    },
    {
      title: "Zone d'opération",
      items: [
        {
          text: "Notre zone d'opération comprend :",
          list: [
            "Miraflores, San Isidro, Barranco, Jesús María, Lince, Magdalena del Mar et San Miguel.",
            "L'aéroport international Jorge Chávez.",
            "Callao, La Molina et Santiago de Surco, dans certains secteurs (renseignez-vous lors de la réservation).",
          ],
        },
        "Nous intervenons aussi hors de cette zone ; le supplément éventuel lié à la distance est indiqué lors de la confirmation de la réservation.",
      ],
    },
    {
      title: "Objets oubliés",
      items: [
        "Pour tous nos services, tout objet oublié par le client dans le véhicule est entièrement garanti : le chauffeur le conserve en lieu sûr et nous organisons sa restitution avec le client.",
      ],
    },
    {
      title: "Mise à disposition à l'heure",
      items: [
        "Elle se réserve pour 3 heures minimum.",
        "Elle couvre les trajets entre districts limitrophes. Elle ne s'applique pas aux trajets vers ou depuis l'aéroport.",
      ],
    },
    {
      title: "Chauffeur pour votre organisme",
      items: [
        "Destinos Travel met à la disposition des entreprises et organismes un chauffeur professionnel pour conduire leurs propres véhicules, par exemple pendant les congés, absences ou indisponibilités de son chauffeur habituel.",
        "Le service est facturé à l'heure, avec un minimum de 5 heures. Les jours, les horaires et les conditions sont convenus par écrit avant de commencer.",
        "Le véhicule doit avoir un SOAT (assurance obligatoire) en cours de validité, un contrôle technique à jour et sa carte grise, et être en bon état mécanique. L'entretien et l'état du véhicule sont de la responsabilité du client.",
        "Le carburant, les péages et les stationnements pendant le service sont à la charge du client.",
        "Si le service commence ou se termine hors de la zone d'opération, les frais de déplacement du chauffeur à l'aller ou au retour sont à la charge du client.",
        "Le chauffeur est salarié de Destinos Travel. Il n'existe aucun lien de subordination entre le chauffeur et le client.",
        "Le chauffeur respecte le code de la route et peut refuser des instructions qui l'enfreignent ou qui mettent en danger les passagers ou le véhicule.",
        "Les amendes de circulation causées par le chauffeur sont à la charge de Destinos Travel. Celles dues à l'état, aux documents ou aux permis du véhicule sont à la charge du client.",
      ],
    },
    {
      title: "Chauffeur de remplacement",
      items: [
        "Le chauffeur de remplacement conduit le véhicule du client, par exemple lors de mariages, fêtes et événements, ou lorsque le client ne peut pas ou ne doit pas conduire.",
        "Le véhicule doit avoir un SOAT (assurance obligatoire) en cours de validité et un contrôle technique à jour, et être en état de circuler en toute sécurité. Le chauffeur peut refuser de commencer le service si le véhicule ne remplit pas ces conditions.",
        "Avant de commencer, le chauffeur et le client inspectent ensemble le véhicule et en consignent l'état avec des photos. Destinos Travel n'est pas responsable des dommages ou pannes antérieurs au service.",
        "Le véhicule ne transporte pas plus de personnes qu'il n'a de places équipées de ceinture de sécurité.",
        "Un tarif horaire forfaitaire est facturé pour toute la durée du service, y compris le temps d'attente du chauffeur pendant l'événement.",
        "Si le service commence ou se termine hors de la zone d'opération, les frais de déplacement du chauffeur à l'aller ou au retour sont à la charge du client.",
      ],
    },
    {
      title: "Coursier confidentiel",
      items: [
        "Le service de coursier comprend la collecte et la remise en main propre de documents confidentiels et d'objets sensibles.",
        "Le client remet l'envoi fermé ou scellé. Destinos Travel n'ouvre ni n'examine son contenu, et le transporte directement, sans intermédiaires, de l'expéditeur au destinataire.",
        "Lors de la réservation, le client indique le nom et le numéro de pièce d'identité du destinataire. L'envoi n'est remis qu'à cette personne, ou à la personne autorisée par écrit par le client, après vérification de son identité.",
        "Le destinataire signe la remise numériquement, et le client la confirme. Il reste ainsi une trace de qui a reçu l'envoi, de la date et de l'heure.",
        "Les objets illégaux ou dont le transport est interdit par la loi ne sont pas transportés.",
        "Si le destinataire n'est pas disponible, le chauffeur patiente 15 minutes. Ensuite, la remise est reprogrammée moyennant un coût supplémentaire.",
        "Le tarif minimum du service de coursier est de S/ 30.00.",
      ],
    },
    {
      title: "Modifications de ces conditions",
      items: [
        "Destinos Travel peut mettre à jour ces conditions générales. La version en vigueur est celle publiée sur cette page, avec sa date de mise à jour.",
      ],
    },
  ],

  clientTypes: [
    { title: "Ambassades et missions diplomatiques", text: "Transport du personnel diplomatique et des délégations." },
    { title: "Organisations et sommets internationaux", text: "Chauffeurs pour les délégations lors d'événements internationaux à Lima." },
    { title: "Compagnies aériennes", text: "Transport des équipages et du personnel entre l'aéroport et la ville." },
    { title: "Entreprises et médias", text: "Déplacements des cadres, des équipes et des clients." },
    { title: "Institutions culturelles et éducatives", text: "Transport des invités, des enseignants et pour les événements." },
    { title: "Voyageurs et familles", text: "Touristes et particuliers : aéroport, excursions et voyages hors de Lima." },
  ],

  photoCaptions: {
    "diplomatico/20261121-01.jpeg": "Chauffeur de Destinos Travel en service diplomatique à l'APEC 2024",
    "diplomatico/20261121-02.jpeg": "Chauffeur de Destinos Travel en service diplomatique à l'APEC 2024",
    "diplomatico/20261121-10.jpeg": "Chauffeur de Destinos Travel au service d'une mission diplomatique",
    "diplomatico/20261121-11.jpeg": "Chauffeur de Destinos Travel au service d'une mission diplomatique",
    "galeria/20261121-01.jpeg": "Destinos Travel en service",
    "galeria/20261121-02.jpeg": "Destinos Travel en service",
  },

  photoDefaults: {
    diplomatico: "Chauffeur de Destinos Travel lors d'un service diplomatique",
    galeria: "Destinos Travel en service",
  },
};
