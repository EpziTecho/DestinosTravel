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
    ServicesDetail.jsx         grid de 5 tarjetas de servicio
    ClientsSection.jsx         grid de clientes (placeholders con iniciales)
    ContactSection.jsx         email / teléfonos / ubicación
    Footer.jsx
    SocialIcons.jsx            iconos FB/IG/WSP/TikTok (usa src/config/socialLinks.js)
    WhatsAppButton.jsx         botón flotante de WhatsApp
  hooks/
    useScrollScrub.js          scrubbing del video en base al scroll (con damping)
    useReveal.js                IntersectionObserver para animar cada sección al entrar en viewport
  config/
    socialLinks.js             número y mensaje de WhatsApp, URLs de redes sociales
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
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview  # sirve el build de producción localmente
```

## Pendientes conocidos

- Reemplazar los placeholders `'#'` de Facebook/Instagram/TikTok en `socialLinks.js` cuando existan esas cuentas
- Reemplazar las insignias de iniciales en `ClientsSection.jsx` por los logos PNG reales de cada cliente
- Si se compra un dominio propio (en vez de `destinos-travel5.vercel.app`), actualizar la URL en: `index.html` (canonical, Open Graph, Twitter, JSON-LD), `public/robots.txt`, `public/sitemap.xml`, y conectar el dominio en Vercel → Settings → Domains
