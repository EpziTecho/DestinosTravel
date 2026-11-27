import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { t } from '../i18n';

/**
 * Clickable photo thumbnail. `frame` sets its shape:
 * - a Tailwind aspect class (e.g. 'aspect-[4/5]') crops every photo to that shape;
 * - null keeps each photo's own proportions (for masonry columns).
 */
export function PhotoThumb({ photo, index, onOpen, frame = null, className = '' }) {
  const [ref, revealed] = useReveal(0.15);
  return (
    <button
      ref={ref}
      onClick={onOpen}
      className={`${revealed ? 'animate-blur-fade-up' : 'opacity-0'} group block w-full overflow-hidden rounded-2xl border border-[#1F2428] focus-visible:outline-2 focus-visible:outline-[#FFD64B] ${className}`}
      style={{ animationDelay: `${(index % 4) * 90}ms` }}
      aria-label={t('photos.view', { alt: photo.alt })}
    >
      <img
        src={photo.src}
        alt=""
        loading="lazy"
        decoding="async"
        className={`w-full transition-transform duration-500 group-hover:scale-105 ${frame ? `${frame} h-full object-cover` : 'h-auto'}`}
      />
    </button>
  );
}

/**
 * The photo grid shared by the diplomatic section and the gallery: vertical 4:5 frames,
 * always the same size (2 per row on phones, 3 on tablets, 4 on desktop), however many
 * photos there are. Tap a photo to see it whole.
 */
export function PhotoGrid({ photos, onOpen, className = '' }) {
  return (
    <div className={`grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 ${className}`}>
      {photos.map((p, i) => (
        <PhotoThumb key={p.key} photo={p} index={i} frame="aspect-[4/5]" onOpen={() => onOpen(i)} />
      ))}
    </div>
  );
}

/** Full-screen viewer: native <dialog> handles focus and Esc; arrows move between photos. */
export function PhotoViewer({ photos, index, onClose, onMove }) {
  const ref = useRef(null);
  const photo = photos[index];
  const many = photos.length > 1;

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
      className="m-0 h-full max-h-none w-full max-w-none overflow-hidden bg-[#0B0D0E]/95 p-0 backdrop:bg-black/80"
      aria-label={t('photos.dialog')}
    >
      <div
        className="flex h-full flex-col items-center justify-center gap-4 px-4 py-16"
        onClick={(e) => e.target === e.currentTarget && ref.current.close()}
      >
        <img src={photo.src} alt={photo.alt} className="max-h-[75vh] max-w-full rounded-xl object-contain" />
        <p className="text-center text-sm text-[#E5E7EB]/70">
          {photo.alt}
          {many && (
            <span className="font-label ml-3 text-[11px] tracking-[0.2em] text-[#E5E7EB]/40">
              {index + 1} / {photos.length}
            </span>
          )}
        </p>
      </div>

      {/* Wrappers carry the position: .liquid-glass sets position: relative on the button itself. */}
      <div className="absolute top-4 right-4">
        <button onClick={() => ref.current.close()} className={navBtn} aria-label={t('photos.close')}>
          <X size={18} />
        </button>
      </div>
      {many && (
        <>
          <div className="absolute top-1/2 left-3 -translate-y-1/2">
            <button onClick={() => onMove(-1)} className={navBtn} aria-label={t('photos.prev')}>
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute top-1/2 right-3 -translate-y-1/2">
            <button onClick={() => onMove(1)} className={navBtn} aria-label={t('photos.next')}>
              <ChevronRight size={20} />
            </button>
          </div>
        </>
      )}
    </dialog>
  );
}
