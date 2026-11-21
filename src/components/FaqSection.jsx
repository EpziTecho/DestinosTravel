import { ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { FaqList } from './FaqList';
import { FEATURED_FAQ, FAQ_COUNT } from '../content/faq';
import { ROUTES } from '../lib/nav';

/** Short FAQ for the home page; the full list lives on its own page. */
export function FaqSection() {
  return (
    <section id="preguntas" className="bg-[#0B0D0E] px-4 py-24 sm:px-6 md:px-12 md:py-32">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
        <div>
          <SectionHeading kicker="Preguntas frecuentes" title="Antes de reservar." className="mb-6" />
          <p className="max-w-sm text-base text-[#E5E7EB]/60">
            Lo que más nos preguntan. ¿Tienes otra duda? Revisa todas las preguntas o escríbenos.
          </p>
          <a
            href={ROUTES.faq}
            className="font-label liquid-glass mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm tracking-[0.04em] text-[#E5E7EB]"
          >
            Ver las {FAQ_COUNT} preguntas
            <ArrowRight size={16} className="text-[#FFD64B]" />
          </a>
        </div>
        <FaqList items={FEATURED_FAQ} />
      </div>
    </section>
  );
}
