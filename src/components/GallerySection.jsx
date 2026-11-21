import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { GALLERY_PHOTOS } from '../content/photos';
import { SectionHeading } from './SectionHeading';

function Thumb({ photo, index, onOpen }) {
  const [ref, revealed] = useReveal(0.15);
  return (
    <button
      ref={ref}
      onClick={onOpen}
      className={`${revealed ? 'animate-blur-fade-up' : 'opacity-0'} group overflow-hidden rounded-2xl border border-[#1F2428] focus-visible:outline-2 focus-visible:outline-[#FFD64B]`}
      style={{ animationDelay: `${(index % 3) * 90}ms` }}
      aria-label={`Ver foto: ${photo.alt}`}
    >
      <img
        src={photo.src}
        alt=""
        loading="lazy"
        decoding="async"
        className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </button>
  );
}

/** Full-screen viewer: native <dialog> handles focus and Esc; arrows move between photos. */
function Viewer({ index, onClose, onMove }) {
  const ref = useRef(null);
  const photo = GALLERY_PHOTOS[index];
  const many = GALLERY_PHOTOS.length > 1;

  useEffect(() => {
    ref.current?.showModal();
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') onMove(1);
      if (e.key === 'ArrowLeft') onMove(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onMove]);

  const navBtn = 'liquid-glass flex h-11 w-11 items-center justify-center rounded-full text-[#E5E7EB] hover:text-[#FFD64B]';

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current.close()}
      className="m-0 h-full max-h-none w-full max-w-none overflow-hidden bg-[#0B0D0E]/95 p-0 backdrop:bg-black/80"
      aria-label="Galería de fotos"
    >
      <div className="flex h-full flex-col items-center justify-center gap-4 px-4 py-16" onClick={(e) => e.target === e.currentTarget && ref.current.close()}>
        <img src={photo.src} alt={photo.alt} className="max-h-[75vh] max-w-full rounded-xl object-contain" />
        <p className="text-center text-sm text-[#E5E7EB]/70">
          {photo.alt}
          {many && (
            <span className="font-label ml-3 text-[11px] tracking-[0.2em] text-[#E5E7EB]/40">
              {index + 1} / {GALLERY_PHOTOS.length}
            </span>
          )}
        </p>
      </div>

      {/* Wrappers carry the position: .liquid-glass sets position: relative on the button itself. */}
      <div className="absolute top-4 right-4">
        <button onClick={() => ref.current.close()} className={navBtn} aria-label="Cerrar">
          <X size={18} />
        </button>
      </div>
      {many && (
        <>
          <div className="absolute top-1/2 left-3 -translate-y-1/2">
            <button onClick={() => onMove(-1)} className={navBtn} aria-label="Foto anterior">
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute top-1/2 right-3 -translate-y-1/2">
            <button onClick={() => onMove(1)} className={navBtn} aria-label="Foto siguiente">
              <ChevronRight size={20} />
            </button>
          </div>
        </>
      )}
    </dialog>
  );
}

export function GallerySection() {
  const [open, setOpen] = useState(null);

  // Hidden until there are photos in src/assets/galeria/.
  if (!GALLERY_PHOTOS.length) return null;

  const move = (step) => setOpen((i) => (i + step + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);

  return (
    <section id="galeria" className="bg-[#0B0D0E] px-4 py-24 sm:px-6 md:px-12 md:py-32">
      <SectionHeading kicker="Galería" title="Nuestra flota, de cerca." />

      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
        {GALLERY_PHOTOS.map((p, i) => (
          <Thumb key={p.key} photo={p} index={i} onOpen={() => setOpen(i)} />
        ))}
      </div>

      {open !== null && <Viewer index={open} onClose={() => setOpen(null)} onMove={move} />}
    </section>
  );
}
