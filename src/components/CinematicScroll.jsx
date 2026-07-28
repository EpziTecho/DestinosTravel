import { useCallback, useRef } from 'react';
import { ChevronsDown, Clock, MapPinned, ShieldCheck, ArrowRight, PhoneCall } from 'lucide-react';
import { useScrollScrub } from '../hooks/useScrollScrub';
import { GridOverlay, Scrim } from './Overlays';
import { Beat } from './Beat';
import { ProgressRail } from './ProgressRail';

const VIDEO_SRC = 'https://zxdefgavgwfxastwmmjm.supabase.co/storage/v1/object/public/assets/graven.mp4';

function scrollToId(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}

const HERO_FADE_START = 0.02;
const HERO_FADE_END = 0.14;

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
      hero.style.filter = `blur(${t * 8}px)`;
      hero.style.pointerEvents = opacity < 0.05 ? 'none' : 'auto';
    }
  }, []);

  useScrollScrub(containerRef, videoRef, handleProgress);

  return (
    <section ref={containerRef} id="top" className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src={VIDEO_SRC}
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
        />

        <GridOverlay />
        <Scrim />

        <div
          ref={heroRef}
          className="absolute inset-0 z-10 flex flex-col items-start justify-end px-4 pb-20 sm:px-6 md:px-12 md:pb-28"
        >
          <div className="flex max-w-3xl flex-col items-start text-left">
            <div
              className="font-label text-video-shadow animate-blur-fade-up mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] tracking-[0.18em] text-[#E5E7EB]/80 uppercase"
              style={{ animationDelay: '300ms' }}
            >
              <span className="flex items-center gap-2">
                <Clock size={14} /> Atención 24/7
              </span>
              <span className="flex items-center gap-2">
                <MapPinned size={14} /> Lima, Perú
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={14} /> Seguro y discreto
              </span>
            </div>

            <div className="rule animate-draw-line mb-6 w-[120px]" />

            <p
              className="font-label text-video-shadow animate-blur-fade-up mb-4 text-[11px] tracking-[0.28em] text-[#FFD64B] uppercase"
              style={{ animationDelay: '380ms' }}
            >
              DESTINOS TRAVEL / TRANSPORTE EJECUTIVO
            </p>

            <h1
              className="font-display text-video-shadow animate-blur-fade-up text-5xl leading-[1.02] tracking-[-0.01em] text-[#E5E7EB] sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ animationDelay: '450ms' }}
            >
              <span className="text-[#FFD64B]">Trazado</span> antes de partir.
            </h1>

            <p
              className="text-video-shadow animate-blur-fade-up mt-5 max-w-lg text-base text-[#E5E7EB]/80 sm:text-lg"
              style={{ animationDelay: '560ms' }}
            >
              Todo viaje comienza con una ruta. Desplázate para ver el trazado tomar forma.
            </p>

            <div
              className="font-label text-video-shadow animate-blur-fade-up mt-8 flex items-center gap-3 text-[11px] tracking-[0.24em] text-[#E5E7EB]/60 uppercase"
              style={{ animationDelay: '680ms' }}
            >
              Desplázate para trazar
              <ChevronsDown size={16} className="animate-gentle-bounce" />
            </div>
          </div>
        </div>
      </div>

      <Beat
        id="mision"
        side="left"
        kicker="Misión"
        heading="Un punto de partida."
        sub="Brindar un servicio de transporte ejecutivo seguro, puntual y confortable, destacándonos por la atención personalizada y el compromiso con la excelencia, garantizando confianza y discreción en cada trayecto."
        specs={[
          { label: 'Servicio', value: '24/7' },
          { label: 'Cobertura', value: 'Lima' },
          { label: 'Estilo', value: 'ejecutivo' },
        ]}
      />

      <Beat
        id="vision"
        side="right"
        kicker="Visión"
        heading="El rumbo trazado."
        sub="Ser reconocidos como la empresa de transporte ejecutivo ideal en el Perú y la opción preferida para visitantes extranjeros que llegan a nuestro país."
        specs={[
          { label: 'Meta', value: 'N.° 1 Perú' },
          { label: 'Público', value: 'internacional' },
          { label: 'Alcance', value: 'nacional' },
        ]}
      />

      <Beat
        id="nosotros"
        side="left"
        kicker="Nosotros"
        heading="La ruta con experiencia."
        sub="Contamos con una sólida trayectoria en el transporte ejecutivo y diplomático. Un equipo de conductores profesionales y una flota moderna diseñada para brindar comodidad, seguridad y eficiencia."
        specs={[
          { label: 'Flota', value: 'moderna' },
          { label: 'Conductores', value: 'profesionales' },
          { label: 'Valores', value: 'confianza' },
        ]}
      />

      <Beat
        id="servicios"
        side="center"
        kicker="Servicios"
        heading={
          <>
            Listo para <span className="text-[#FFD64B]">partir.</span>
          </>
        }
        sub="Cinco servicios, un mismo estándar: puntualidad, seguridad y atención personalizada las 24 horas."
        specs={[
          { label: 'Servicios', value: '5' },
          { label: 'Atención', value: '24/7' },
          { label: 'Cobertura', value: 'Lima' },
        ]}
        cta={
          <>
            <button
              onClick={() => scrollToId('#servicios-detalle')}
              className="font-label flex items-center justify-center gap-2 rounded-full bg-[#FFD64B] px-7 py-3 tracking-[0.04em] text-[#0B0D0E]"
            >
              Ver servicios
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollToId('#contacto')}
              className="font-label liquid-glass flex items-center justify-center gap-2 rounded-full px-7 py-3 tracking-[0.04em] text-[#E5E7EB]"
            >
              Escribir ahora
              <PhoneCall size={16} />
            </button>
          </>
        }
      />

      <ProgressRail ref={railRef} />
    </section>
  );
}
