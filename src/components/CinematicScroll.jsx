import { useCallback, useRef } from 'react';
import { ChevronsDown, Clock, MapPinned, ShieldCheck, ArrowRight, CalendarCheck } from 'lucide-react';
import { useScrollScrub } from '../hooks/useScrollScrub';
import { GridOverlay, Scrim } from './Overlays';
import { Beat } from './Beat';
import { ProgressRail } from './ProgressRail';
import { t, TITLE_GAP } from '../i18n';

// Served from our own domain with a hashed file name, so browsers cache it for good.
import VIDEO_SRC from '../assets/hero.mp4';
// First frame of the video: shown instantly while the video loads.
import POSTER_SRC from '../assets/hero-poster.webp';

function scrollToId(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}

// Fraction of the hero's scroll over which the intro text fades out.
const HERO_FADE_START = 0.03;
const HERO_FADE_END = 0.17;

// Phones loop the video instead of scrubbing it: seeking on every scroll frame is
// what makes mobile browsers stutter.
const LOOP_VIDEO = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
// On phones, rest this long on the last frame before playing again (null = play once and stay).
const LOOP_PAUSE_MS = null;

/** Kicker, heading, text and specs of a beat (texts in src/i18n). */
function beat(key) {
  const b = t(`beats.${key}`);
  return { kicker: b.kicker, heading: b.heading, sub: b.sub, specs: b.specs.map(([label, value]) => ({ label, value })) };
}

export function CinematicScroll() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const railRef = useRef(null);
  const heroRef = useRef(null);

  const handleProgress = useCallback((progress) => {
    const rect = containerRef.current?.getBoundingClientRect();
    const containerVisible = rect ? rect.bottom > 0 && rect.top < window.innerHeight : true;
    railRef.current?.setProgress(progress, containerVisible);

    const hero = heroRef.current;
    if (hero) {
      const t = Math.min(Math.max((progress - HERO_FADE_START) / (HERO_FADE_END - HERO_FADE_START), 0), 1);
      const opacity = 1 - t;
      hero.style.opacity = String(opacity);
      hero.style.transform = `translateY(${-t * 60}px)`;
      hero.style.pointerEvents = opacity < 0.05 ? 'none' : 'auto';
    }
  }, []);

  useScrollScrub(containerRef, videoRef, handleProgress, { scrub: !LOOP_VIDEO, loopPauseMs: LOOP_PAUSE_MS });

  // Height comes from the content: one screen for the hero + the four shorter beats.
  return (
    <section ref={containerRef} id="top" className="relative">
      {/* svh: the height actually visible on phones, without the browser's address bar. */}
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          muted
          playsInline
          preload="auto"
        />

        <GridOverlay />
        <Scrim />

        <div
          ref={heroRef}
          // pt reserves the navbar's height; justify-end-safe falls back to top alignment if the
          // text is ever taller than the space, so it can't slide under the navbar.
          // On phones pb leaves room for the floating WhatsApp button (bottom right).
          className="absolute inset-0 z-10 flex flex-col items-start justify-end-safe px-4 pt-24 pb-24 sm:px-6 md:px-12 md:pt-32 md:pb-28 short:pb-20 md:short:pb-12"
        >
          <div className="flex max-w-4xl flex-col items-start text-left">
            <div
              className="font-label text-video-shadow animate-blur-fade-up mb-6 flex flex-wrap short:hidden items-center gap-x-6 gap-y-2 text-[11px] tracking-[0.18em] text-[#E5E7EB]/80 uppercase"
              style={{ animationDelay: '300ms' }}
            >
              <span className="flex items-center gap-2">
                <Clock size={14} /> {t('hero.support')}
              </span>
              <span className="flex items-center gap-2">
                <MapPinned size={14} /> {t('hero.location')}
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={14} /> {t('hero.safe')}
              </span>
            </div>

            <div className="rule animate-draw-line mb-6 w-[120px] short:hidden" />

            <p
              className="font-label text-video-shadow animate-blur-fade-up mb-4 text-[11px] tracking-[0.28em] text-[#FFD64B] uppercase tiny:hidden"
              style={{ animationDelay: '380ms' }}
            >
              {t('hero.kicker')}
            </p>

            <h1
              // Sized by width and height, so short screens get a smaller title (32–72px).
              className="font-display text-video-shadow animate-blur-fade-up text-[clamp(2rem,min(8vw,7.5vh),4.5rem)] leading-[1.05] tracking-[-0.01em] text-[#E5E7EB]"
              style={{ animationDelay: '450ms' }}
            >
              {t('hero.title')}{TITLE_GAP}<span className="text-[#FFD64B]">{t('hero.titleHighlight')}</span>
            </h1>

            <p
              className="text-video-shadow animate-blur-fade-up mt-5 max-w-xl text-base text-[#E5E7EB]/80 sm:text-lg tiny:hidden"
              style={{ animationDelay: '560ms' }}
            >
              {t('hero.sub')}
            </p>

            <div
              className="animate-blur-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 tiny:mt-5"
              style={{ animationDelay: '620ms' }}
            >
              <button
                onClick={() => scrollToId('#reservar')}
                className="font-label flex items-center justify-center gap-2 rounded-full bg-[#FFD64B] px-7 py-3 tracking-[0.04em] text-[#0B0D0E]"
              >
                {t('hero.book')}
                <CalendarCheck size={16} />
              </button>
              <button
                onClick={() => scrollToId('#servicios-detalle')}
                className="font-label liquid-glass flex items-center justify-center gap-2 rounded-full px-7 py-3 tracking-[0.04em] text-[#E5E7EB]"
              >
                {t('hero.services')}
                <ArrowRight size={16} />
              </button>
            </div>

            <div
              className="font-label text-video-shadow animate-blur-fade-up mt-8 flex items-center gap-3 text-[11px] tracking-[0.24em] text-[#E5E7EB]/60 uppercase short:hidden"
              style={{ animationDelay: '680ms' }}
            >
              {t('hero.scroll')}
              <ChevronsDown size={16} className="animate-gentle-bounce" />
            </div>
          </div>
        </div>
      </div>

      <Beat id="mision" side="left" {...beat('mission')} />
      <Beat id="vision" side="right" {...beat('vision')} />
      <Beat id="nosotros" side="left" {...beat('about')} />

      <Beat
        id="servicios"
        side="center"
        {...beat('services')}
        heading={
          <>
            {t('beats.services.heading')}{TITLE_GAP}<span className="text-[#FFD64B]">{t('beats.services.headingHighlight')}</span>
          </>
        }
        cta={
          <>
            <button
              onClick={() => scrollToId('#servicios-detalle')}
              className="font-label flex items-center justify-center gap-2 rounded-full bg-[#FFD64B] px-7 py-3 tracking-[0.04em] text-[#0B0D0E]"
            >
              {t('hero.services')}
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollToId('#reservar')}
              className="font-label liquid-glass flex items-center justify-center gap-2 rounded-full px-7 py-3 tracking-[0.04em] text-[#E5E7EB]"
            >
              {t('hero.book')}
              <CalendarCheck size={16} />
            </button>
          </>
        }
      />

      <ProgressRail ref={railRef} />
    </section>
  );
}
