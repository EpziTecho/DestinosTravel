import { useReveal } from '../hooks/useReveal';

const SIDE_STYLES = {
  left: 'items-start text-left',
  right: 'items-start text-left sm:items-end sm:text-right sm:ml-auto',
  center: 'items-center text-center mx-auto',
};

export function Beat({ id, kicker, heading, sub, specs, side = 'left', cta }) {
  const [ref, revealed] = useReveal(0.35);
  const cls = (base) => `${revealed ? 'animate-blur-fade-up' : 'opacity-0'} ${base}`;

  return (
    <section
      id={id}
      className="relative z-10 flex h-screen items-center px-4 sm:px-6 md:px-12"
    >
      <div ref={ref} className={`flex w-full max-w-xl flex-col ${SIDE_STYLES[side]} ${side === 'center' ? 'max-w-2xl' : ''}`}>
        <p className={cls('font-label text-video-shadow mb-3 text-[11px] tracking-[0.28em] text-[#FFD64B] uppercase')}>
          {kicker}
        </p>

        <div
          className={`rule mb-5 w-24 ${revealed ? 'animate-draw-line' : ''} ${side === 'right' ? 'sm:ml-auto' : side === 'center' ? 'mx-auto' : ''}`}
          style={{ animationDelay: '120ms' }}
        />

        <h2
          className={cls('font-display text-video-shadow mb-4 text-3xl leading-[1.1] tracking-[-0.01em] text-[#E5E7EB] sm:text-4xl md:text-5xl')}
          style={{ animationDelay: '200ms' }}
        >
          {heading}
        </h2>

        <p className={cls('text-video-shadow max-w-md text-base text-[#E5E7EB]/80 sm:text-lg')} style={{ animationDelay: '320ms' }}>
          {sub}
        </p>

        <div
          className={cls(`mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-0 ${side === 'right' ? 'sm:justify-end' : side === 'center' ? 'sm:justify-center' : ''}`)}
          style={{ animationDelay: '440ms' }}
        >
          {specs.map((spec, i) => (
            <div key={spec.label} className="flex flex-col sm:flex-row sm:items-center">
              {i > 0 && <div className="rule my-3 w-full sm:hidden" />}
              {i > 0 && <div className="rule-v mx-6 hidden h-8 self-center sm:block" />}
              <div className="font-label text-video-shadow text-[11px] tracking-[0.2em] text-[#E5E7EB]/80 uppercase">
                <span className="text-[#FFD64B]">{spec.label}</span> · {spec.value}
              </div>
            </div>
          ))}
        </div>

        {cta && (
          <div
            className={cls(`mt-10 flex flex-col gap-4 sm:flex-row ${side === 'right' ? 'sm:justify-end' : side === 'center' ? 'sm:justify-center' : ''}`)}
            style={{ animationDelay: '560ms' }}
          >
            {cta}
          </div>
        )}
      </div>
    </section>
  );
}
