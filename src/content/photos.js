// Photos are picked up automatically from these folders (sorted by file name):
//   src/assets/diplomatico/  → "Experiencia diplomática" section
//   src/assets/galeria/      → "Galería" section
// A section with no photos shows nothing (galería) or just its text (diplomático).
// Name files 01-…, 02-… to set the order. Add a description per file below
// (it's read aloud by screen readers and shown in the gallery viewer).

const CAPTIONS = {
  // 'diplomatico/01-embajada.webp': 'Vehículo diplomático listo para un recojo',
  // 'galeria/01-flota.webp': 'Nuestra flota en Lima',
};

function toPhotos(modules, folder, fallbackAlt) {
  return Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, src]) => {
      const key = `${folder}/${path.split('/').pop()}`;
      return { src, key, alt: CAPTIONS[key] ?? fallbackAlt };
    });
}

export const DIPLOMATIC_PHOTOS = toPhotos(
  import.meta.glob('../assets/diplomatico/*.{jpg,jpeg,png,webp,avif}', { eager: true, import: 'default' }),
  'diplomatico',
  'Vehículo de Destinos Travel en un servicio diplomático'
);

export const GALLERY_PHOTOS = toPhotos(
  import.meta.glob('../assets/galeria/*.{jpg,jpeg,png,webp,avif}', { eager: true, import: 'default' }),
  'galeria',
  'Destinos Travel — flota y servicio'
);
