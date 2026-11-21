import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { COMPANY, telHref, waHref } from '../config/company';
import { WHATSAPP_MESSAGE } from '../config/socialLinks';
import { WhatsAppGlyph } from './WhatsAppGlyph';

const CONTACT = [
  {
    icon: Mail,
    label: 'Email',
    lines: [COMPANY.email],
    note: 'Escríbenos para solicitar tu servicio',
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: Phone,
    label: 'Teléfonos',
    lines: COMPANY.phones,
    // Each number is its own call link, with a WhatsApp button beside it.
    phones: true,
    note: 'Atención 24/7 todos los días',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    lines: ['Jr. Puerto Esperanza 419', 'San Martín de Porres, Lima'],
    note: 'Cobertura nacional',
    // Map link hidden for now; to bring it back: note 'Cobertura nacional · Ver en el mapa',
    // href: COMPANY.mapsUrl, external: true.
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
          Escríbenos. <span className="text-[#FFD64B]">Respondemos a cualquier hora.</span>
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
              {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className={`${gridRevealed ? 'animate-blur-fade-up' : 'opacity-0'} flex flex-col gap-3 px-0 py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <Icon size={20} className="text-[#FFD64B]" />
              <span className="font-label text-[11px] tracking-[0.28em] text-[#E5E7EB]/40 uppercase">{item.label}</span>
              <div className="flex flex-col gap-1">
                {item.phones
                  ? item.lines.map((phone) => (
                      <span key={phone} className="flex items-center gap-3">
                        <a href={telHref(phone)} className="text-lg whitespace-nowrap text-[#E5E7EB] hover:text-[#FFD64B]">
                          {phone}
                        </a>
                        <a
                          href={waHref(phone, WHATSAPP_MESSAGE)}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Escribir por WhatsApp al ${phone}`}
                          title="Escribir por WhatsApp"
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#FFD64B]/30 text-[#FFD64B] transition-colors hover:bg-[#FFD64B] hover:text-[#0B0D0E]"
                        >
                          <WhatsAppGlyph size={16} />
                        </a>
                      </span>
                    ))
                  : item.lines.map((line) => (
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
        href={`mailto:${COMPANY.email}`}
        className="font-label mt-12 inline-flex items-center gap-2 rounded-full bg-[#FFD64B] px-7 py-3 tracking-[0.04em] text-[#0B0D0E]"
      >
        Solicitar tu servicio
        <ArrowRight size={16} />
      </a>
    </section>
  );
}
