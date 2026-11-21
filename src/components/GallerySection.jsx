import { GALLERY_PHOTOS } from '../content/photos';
import { SectionHeading } from './SectionHeading';
import { PhotoGrid } from './PhotoViewer';
import { usePhotoViewer } from '../hooks/usePhotoViewer';

export function GallerySection() {
  const [openPhoto, viewer] = usePhotoViewer(GALLERY_PHOTOS);

  // Hidden until there are photos in src/assets/galeria/.
  if (!GALLERY_PHOTOS.length) return null;

  return (
    <section id="galeria" className="bg-[#0B0D0E] px-4 py-24 sm:px-6 md:px-12 md:py-32">
      <SectionHeading kicker="Galería" title="Nuestra flota, de cerca." />
      <PhotoGrid photos={GALLERY_PHOTOS} onOpen={openPhoto} />
      {viewer}
    </section>
  );
}
