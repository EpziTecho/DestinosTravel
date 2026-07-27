import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const CONTACT = [
  {
    icon: Mail,
    label: 'Email',
    lines: ['destinostravel5eirl@gmail.com'],
    note: 'Escríbenos para solicitar tu servicio',
    href: 'mailto:destinostravel5eirl@gmail.com',
  },
  {
    icon: Phone,
    label: 'Teléfonos',
    lines: ['+51 942 665 919', '+51 993 523 742'],
    note: 'Atención 24/7 todos los días',
    href: 'tel:+51942665919',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    lines: ['Lima, Perú'],
    note: 'Cobertura nacional',
    href: null,
  },
];

export function ContactSection() {
  const [headRef, headRevealed] = useReveal(0.3);
  const [gridRef, gridRevealed] = useReveal(0.2);

  return (
    <section id="contacto" className="bg-[#0B0D0E] px-4 py-24 sm:px-6 md:px-12 md:py-32">
      <div ref={headRef} className="mb-14 max-w-2xl">
        <p className={`${headRevealed ? 'animate-blur-fade-up' : 'opacity-0'} font-label mb-3 text-[11px] tracking-[0.28em] text-[#FFD64B] uppercase`}>
          Contacto
        </p>
        <div className={`rule mb-5 w-24 ${headRevealed ? 'animate-draw-line' : ''}`} style={{ animationDelay: '120ms' }} />
        <h2
          className={`${headRevealed ? 'animate-blur-fade-up' : 'opacity-0'} font-display text-3xl leading-[1.1] tracking-[-0.01em] text-[#E5E7EB] sm:text-4xl md:text-5xl`}
          style={{ animationDelay: '200ms' }}
        >
          Empecemos a <span className="text-[#FFD64B]">trazar</span> tu viaje.
        </h2>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 divide-y divide-[#1F2428] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {CONTACT.map((item, i) => {
          const Icon = item.icon;
          const Wrapper = item.href ? 'a' : 'div';
          return (
            <Wrapper
              key={item.label}
              href={item.href ?? undefined}
              className={`${gridRevealed ? 'animate-blur-fade-up' : 'opacity-0'} flex flex-col gap-3 px-0 py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <Icon size={20} className="text-[#FFD64B]" />
              <span className="font-label text-[11px] tracking-[0.28em] text-[#E5E7EB]/40 uppercase">{item.label}</span>
              <div className="flex flex-col gap-1">
                {item.lines.map((line) => (
                  <span key={line} className="text-lg text-[#E5E7EB]">
                    {line}
                  </span>
                ))}
              </div>
              <span className="text-sm text-[#E5E7EB]/50">{item.note}</span>
            </Wrapper>
          );
        })}
      </div>

      <a
        href="mailto:destinostravel5eirl@gmail.com"
        className="font-label mt-12 inline-flex items-center gap-2 rounded-full bg-[#FFD64B] px-7 py-3 tracking-[0.04em] text-[#0B0D0E]"
      >
        Solicitar tu servicio
        <ArrowRight size={16} />
      </a>
    </section>
  );
}
