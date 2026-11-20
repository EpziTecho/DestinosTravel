# Destinos Travel — Landing Page

Landing page de una sola página para **Destinos Travel**, empresa de transporte
ejecutivo y diplomático en Lima, Perú. Construida como una experiencia
cinemática de scroll: un video de fondo queda fijo en pantalla mientras el
scroll "scrubbea" su reproducción y va revelando secciones narrativas
(Misión, Visión, Nosotros, Servicios) encima.

Live: **https://destinos-travel5.vercel.app**

## Stack

- [Vite](https://vite.dev) + React 19
- Tailwind CSS v4 (`@tailwindcss/vite`, sin `tailwind.config.js` — todo vía `@import "tailwindcss"` en `src/index.css`)
- [lucide-react](https://lucide.dev) para iconos
- Fuentes: Cinzel (títulos), Montserrat (labels/kickers), Inter (cuerpo de texto)
- Deploy: Vercel, conectado a este repo — cada push a `main` redespliega automáticamente

## Estructura

```
index.html                     meta tags, SEO, JSON-LD, fuentes
src/
  App.jsx                      ensambla todas las secciones
  index.css                    tokens de color, clases utilitarias (.liquid-glass, .rule, .font-label, .font-display...)
  components/
    Navbar.jsx                 logo + nav + CTA + menú mobile
    CinematicScroll.jsx        contenedor 500vh: video pinned + hero + 4 beats (Misión/Visión/Nosotros/Servicios)
    Beat.jsx                   sección reutilizable para cada "beat" narrativo
    Overlays.jsx                grid, scrim (oscurecido sobre el video) y grano
    ProgressRail.jsx           barra de progreso lateral (solo desktop)
    ServicesDetail.jsx         6 tarjetas de servicio (las mismas del formulario); "Reservar" abre el formulario con ese servicio
    DiplomaticSection.jsx      experiencia diplomática: texto, fotos de src/assets/diplomatico/ y logos de clientes
    GallerySection.jsx         galería con visor; fotos de src/assets/galeria/ (oculta si no hay fotos)
    serviceIcons.js            icono de cada tipo de traslado
    BookingSection.jsx         reserva en línea en 3 pasos: envío directo (/api/reservas) o por WhatsApp
    EmpresasSection.jsx        beneficios para empresas y hoteles + "Pedir propuesta" (correo / WhatsApp)
    FaqSection.jsx             FAQ corta de la home (preguntas con featured: true)
    FaqList.jsx                acordeón de preguntas (reutilizado en la home y en /preguntas-frecuentes)
    PageShell.jsx              layout de las páginas internas (navbar, título, footer)
  pages/
    FaqPage.jsx                /preguntas-frecuentes — todas las preguntas por tema (+ JSON-LD FAQPage)
    TermsPage.jsx              /terminos — términos y condiciones
  content/
    faq.js                     textos de las preguntas frecuentes
    terms.js                   textos de los términos y condiciones (y fecha de actualización)
    photos.js                  carga las fotos de diplomático y galería, y sus descripciones
  lib/
    nav.js                     rutas, navegación entre páginas y meta tags por página
    ClientsSection.jsx         grid de clientes (placeholders con iniciales), usado dentro de DiplomaticSection
    ContactSection.jsx         email / teléfonos / ubicación
    Footer.jsx
    SocialIcons.jsx            iconos FB/IG/WSP/TikTok (usa src/config/socialLinks.js)
    WhatsAppButton.jsx         botón flotante de WhatsApp
  hooks/
    useScrollScrub.js          scrubbing del video en base al scroll (con damping)
    useReveal.js                IntersectionObserver para animar cada sección al entrar en viewport
  config/
    socialLinks.js             número y mensaje de WhatsApp, URLs de redes sociales
    bookingServices.js         tipos de traslado, límites y anticipación mínima (compartido por el formulario y la API)
    company.js                 razón social, RUC, dirección, correo y teléfonos
api/
  reservas.js                  función de Vercel: valida la reserva, la envía por correo (Resend) y a Google Sheets
  _lib/booking.js              validación y plantilla del correo
docs/
  reservas-backend.md          cómo configurar Resend, la Google Sheet y las variables de entorno
  assets/
    logo-mark.png               escudo del logo (fondo transparente real — el PNG original traía un cuadriculado falso "horneado" en los píxeles, se limpió con chroma-key)
    logo-stars.png               las 5 estrellas del logo original
public/
  og-image.jpg                imagen de vista previa para redes sociales (1200×630)
  favicon.png                 favicon de marca (el escudo)
  robots.txt / sitemap.xml    SEO
```

## Contenido y configuración editable

| Qué | Dónde |
|---|---|
| Mensaje predeterminado de WhatsApp | `src/config/socialLinks.js` → `WHATSAPP_MESSAGE` |
| Número de WhatsApp | `src/config/socialLinks.js` → `WHATSAPP_NUMBER` |
| URLs de Facebook / Instagram / TikTok | `src/config/socialLinks.js` → `SOCIAL_LINKS` (hoy son `'#'` placeholders) |
| Logos de clientes | `src/components/ClientsSection.jsx` → array `CLIENTS`, campo `logo` (hoy `null` = insignia con iniciales; poner el `import` del PNG real cuando se tenga) |
| Textos de Misión / Visión / Nosotros / Servicios | `src/components/CinematicScroll.jsx`, componentes `<Beat />` |
| Video de fondo | `src/components/CinematicScroll.jsx` → `VIDEO_SRC` |
| Preguntas frecuentes (y cuáles salen en la home) | `src/content/faq.js` |
| Términos y condiciones | `src/content/terms.js` (actualizar `TERMS_UPDATED` al cambiarlos) |
| Razón social, RUC, dirección, teléfonos | `src/config/company.js` |
| Anticipación mínima de reserva (hoy: 2 horas) | `src/config/bookingServices.js` → `MIN_NOTICE_MINUTES` |
| Tipos de traslado (formulario y tarjetas de servicios) | `src/config/bookingServices.js` → `BOOKING_SERVICES` (`blurb` = texto de la tarjeta) |
| Fotos de experiencia diplomática | copiar a `src/assets/diplomatico/` (se ordenan por nombre: `01-…`, `02-…`) |
| Fotos de la galería | copiar a `src/assets/galeria/`; la sección aparece sola cuando hay fotos |
| Descripción de cada foto | `src/content/photos.js` → `CAPTIONS` |
| A dónde llegan las reservas (correo, Google Sheet) | Variables de entorno en Vercel — ver `docs/reservas-backend.md` |
| Paleta de color | `src/index.css` → variables `--gold` `#FFD64B`, `--ink` `#0B0D0E`, `--graphite` `#1F2428`, `--silver` `#E5E7EB` |

## SEO

- Meta tags completos (description, keywords, canonical), Open Graph y Twitter Card
- JSON-LD `TaxiService` (schema.org) con teléfonos, ubicación y horario 24/7 — en `index.html`
- `public/robots.txt` y `public/sitemap.xml`, apuntando a `https://destinos-travel5.vercel.app`
- Verificación de Google Search Console: `public/googledb475b97488698c6.html` (no borrar aunque no se use directamente en el sitio — Google la sigue consultando para mantener la propiedad verificada)
- Sitemap enviado y homepage con indexación solicitada en Search Console

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:5173 (también sirve /api; sin .env.local las reservas solo se imprimen en la terminal)
npm run build    # genera dist/
npm run preview  # sirve el build de producción localmente
```

## Pendientes conocidos

- Reemplazar los placeholders `'#'` de Facebook/Instagram/TikTok en `socialLinks.js` cuando existan esas cuentas
- Reemplazar las insignias de iniciales en `ClientsSection.jsx` por los logos PNG reales de cada cliente
- Las páginas internas (`/preguntas-frecuentes`, `/terminos`) funcionan gracias a `vercel.json` (rewrite a `index.html`)
- Si se compra un dominio propio (en vez de `destinos-travel5.vercel.app`), actualizar la URL en: `index.html` (canonical, Open Graph, Twitter, JSON-LD), `src/lib/nav.js` (`SITE`), `public/robots.txt`, `public/sitemap.xml`, y conectar el dominio en Vercel → Settings → Domains
