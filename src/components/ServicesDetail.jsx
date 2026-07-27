import { Plane, Landmark, Briefcase, Heart, Headset } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const SERVICES = [
  {
    icon: Plane,
    label: '01',
    title: 'Transfer al aeropuerto',
    sub: 'Puntualidad y comodidad garantizadas en cada llegada y salida.',
  },
  {
    icon: Landmark,
    label: '02',
    title: 'Ejecutivos y diplomáticos',
    sub: 'Transporte especializado con protocolos de alto nivel.',
  },
  {
    icon: Briefcase,
    label: '03',
    title: 'Corporativos',
    sub: 'Movilidad confiable para empresas, reuniones y eventos.',
  },
  {
    icon: Heart,
    label: '04',
    title: 'Bodas',
    sub: 'Traslados elegantes y exclusivos para un día inolvidable.',
  },
  {
    icon: Headset,
    label: '05',
    title: 'Atención personalizada 24/7',
    sub: 'Soporte constante para cada necesidad de transporte.',
  },
];

function ServiceCard({ service, index }) {
  const [ref, revealed] = useReveal(0.3);
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`${revealed ? 'animate-blur-fade-up' : 'opacity-0'} liquid-glass flex flex-col gap-4 rounded-2xl p-6`}
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="flex items-center justify-between">
        <Icon size={22} className="text-[#FFD64B]" />
        <span className="font-label text-[11px] tracking-[0.25em] text-[#E5E7EB]/30">{service.label}</span>
      </div>
      <h3 className="font-display text-xl tracking-[-0.01em] text-[#E5E7EB]">{service.title}</h3>
      <p className="text-sm text-[#E5E7EB]/55">{service.sub}</p>
    </div>
  );
}

export function ServicesDetail() {
  const [headRef, headRevealed] = useReveal(0.3);

  return (
    <section id="servicios-detalle" className="bg-[#0B0D0E] px-4 py-24 sm:px-6 md:px-12 md:py-32">
      <div ref={headRef} className="mb-14 max-w-2xl">
        <p className={`${headRevealed ? 'animate-blur-fade-up' : 'opacity-0'} font-label mb-3 text-[11px] tracking-[0.28em] text-[#FFD64B] uppercase`}>
          Servicios
        </p>
        <div className={`rule mb-5 w-24 ${headRevealed ? 'animate-draw-line' : ''}`} style={{ animationDelay: '120ms' }} />
        <h2
          className={`${headRevealed ? 'animate-blur-fade-up' : 'opacity-0'} font-display text-3xl leading-[1.1] tracking-[-0.01em] text-[#E5E7EB] sm:text-4xl md:text-5xl`}
          style={{ animationDelay: '200ms' }}
        >
          Cada trayecto, planeado.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
