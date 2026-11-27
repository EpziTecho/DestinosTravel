// ─────────────────────────────────────────────────────────────────────────────
// FOTOS DE LA WEB
//
// Las fotos se cargan solas desde estas carpetas (en orden por nombre de archivo):
//   src/assets/diplomatico/  → sección "Experiencia diplomática"
//   src/assets/galeria/      → sección "Galería" (se oculta si no hay fotos)
//
// DESCRIPCIONES: escribe aquí el texto de cada foto. Se muestra debajo de la foto
// al abrirla en grande, y lo leen los lectores de pantalla y Google.
// La clave es "carpeta/nombre-del-archivo". Si una foto no tiene descripción,
// usa el texto por defecto de su sección (abajo, en DEFAULTS).
// Traducciones: src/i18n/locales/<idioma>.js → photoCaptions y photoDefaults.
// ─────────────────────────────────────────────────────────────────────────────
import { content } from '../i18n/index.js';

const CAPTIONS = content('photoCaptions', {
  // Experiencia diplomática
  'diplomatico/20261121-01.jpeg': 'Conductor de Destinos Travel en servicio diplomático en APEC 2024',
  'diplomatico/20261121-02.jpeg': 'Conductor de Destinos Travel en servicio diplomático en APEC 2024',
  'diplomatico/20261121-10.jpeg': 'Conductor de Destinos Travel en servicio de misión diplomática',
  'diplomatico/20261121-11.jpeg': 'Conductor de Destinos Travel en servicio de misión diplomática',

  // Galería
  'galeria/20261121-01.jpeg': 'Destinos Travel en servicio',
  'galeria/20261121-02.jpeg': 'Destinos Travel en servicio',
});

// Texto que se usa cuando una foto no tiene descripción propia.
const DEFAULTS = content('photoDefaults', {
  diplomatico: 'Conductor de Destinos Travel en un servicio diplomático',
  galeria: 'Destinos Travel en servicio',
});

function toPhotos(modules, folder) {
  return Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, src]) => {
      const key = `${folder}/${path.split('/').pop()}`;
      return { src, key, alt: CAPTIONS[key] ?? DEFAULTS[folder] };
    });
}

export const DIPLOMATIC_PHOTOS = toPhotos(
  import.meta.glob('../assets/diplomatico/*.{jpg,jpeg,png,webp,avif}', { eager: true, import: 'default' }),
  'diplomatico'
);

export const GALLERY_PHOTOS = toPhotos(
  import.meta.glob('../assets/galeria/*.{jpg,jpeg,png,webp,avif}', { eager: true, import: 'default' }),
  'galeria'
);
