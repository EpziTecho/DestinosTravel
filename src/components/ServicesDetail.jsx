import { ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { BOOKING_SERVICES } from '../config/bookingServices';
import { bookService } from '../lib/nav';
import { serviceIcon } from './serviceIcons';
import { SectionHeading } from './SectionHeading';

// Same services as the booking form, so each card can open it with that service chosen.
function ServiceCard({ service, index }) {
  const [ref, revealed] = useReveal(0.3);
  const Icon = serviceIcon(service.id);

  return (
    <div
      ref={ref}
      className={`${revealed ? 'animate-blur-fade-up' : 'opacity-0'} liquid-glass flex flex-col gap-4 rounded-2xl p-6`}
      style={{ animationDelay: `${(index % 3) * 90}ms` }}
    >
      <div className="flex items-center justify-between">
        <Icon size={22} className="text-[#FFD64B]" />
        <span className="font-label text-[11px] tracking-[0.25em] text-[#E5E7EB]/30">
          {service.tag ?? String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="font-display text-xl tracking-[-0.01em] text-[#E5E7EB]">{service.label}</h3>
      <p className="flex-1 text-sm text-[#E5E7EB]/55">{service.blurb}</p>
      <button
        onClick={() => bookService(service.id)}
        className="font-label group flex items-center gap-2 self-start text-sm tracking-[0.06em] text-[#FFD64B] transition-colors hover:text-[#FFE27A]"
        aria-label={`Reservar: ${service.label}`}
      >
        Reservar
        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
}

export function ServicesDetail() {
  return (
    <section id="servicios-detalle" className="bg-[#0B0D0E] px-4 py-24 sm:px-6 md:px-12 md:py-32">
      <SectionHeading kicker="Servicios" title="Un servicio para cada viaje." />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {BOOKING_SERVICES.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
