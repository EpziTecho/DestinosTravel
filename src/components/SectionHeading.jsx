import { useReveal } from '../hooks/useReveal';

/** Kicker + drawn rule + title (+ optional intro), revealed on scroll — same look as the other sections. */
export function SectionHeading({ kicker, title, intro, as: Tag = 'h2', className = 'mb-14' }) {
  const [ref, revealed] = useReveal(0.3);
  const anim = revealed ? 'animate-blur-fade-up' : 'opacity-0';

  return (
    <div ref={ref} className={`max-w-2xl ${className}`}>
      <p className={`${anim} font-label mb-3 text-[11px] tracking-[0.28em] text-[#FFD64B] uppercase`}>{kicker}</p>
      <div className={`rule mb-5 w-24 ${revealed ? 'animate-draw-line' : ''}`} style={{ animationDelay: '120ms' }} />
      <Tag
        className={`${anim} font-display text-3xl leading-[1.1] tracking-[-0.01em] text-[#E5E7EB] sm:text-4xl md:text-5xl`}
        style={{ animationDelay: '200ms' }}
      >
        {title}
      </Tag>
      {intro && (
        <p className={`${anim} mt-4 max-w-lg text-base text-[#E5E7EB]/60`} style={{ animationDelay: '320ms' }}>
          {intro}
        </p>
      )}
    </div>
  );
}
