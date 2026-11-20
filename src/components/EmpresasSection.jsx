import { Building2, Receipt, CarFront, Clock3, Hotel, UserCheck, Mail, MessageCircle } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { useReveal } from '../hooks/useReveal';
import { COMPANY } from '../config/company';
import { WHATSAPP_NUMBER } from '../config/socialLinks';
import { ROUTES } from '../lib/nav';

const BENEFITS = [
  { icon: Building2, title: 'Un solo contacto', text: 'Coordinamos los traslados de tu equipo, tus clientes o tus huéspedes desde un mismo canal.' },
  { icon: Receipt, title: 'Crédito y facturación mensual', text: 'Factura electrónica a nombre de tu empresa, con crédito y facturación mensual.' },
  { icon: CarFront, title: 'Varias unidades a la vez', text: 'Autos, camionetas, vans y minibuses para grupos, eventos y delegaciones.' },
  { icon: Clock3, title: 'Corporativo por horas', text: 'Un conductor a tu disposición desde 3 horas, para recorridos entre distritos cercanos.' },
  { icon: Hotel, title: 'Huéspedes de hoteles', text: 'Recogemos a tus huéspedes en el hotel o en el aeropuerto, a cualquier hora.' },
  { icon: UserCheck, title: 'Conductores de traje', text: 'Puntuales, discretos y bien presentados: representan bien a tu marca.' },
];

const PROPOSAL_SUBJECT = 'Propuesta corporativa — Destinos Travel';
const PROPOSAL_BODY = [
  'Hola, quisiera una propuesta de traslados para mi empresa.',
  '',
  'Empresa:',
  'RUC:',
  'Persona de contacto y teléfono:',
  'Tipo de traslados (aeropuerto, ejecutivos, por horas, eventos…):',
  'Frecuencia aproximada (por semana o por mes):',
  '',
  'Gracias.',
].join('\n');

const mailHref = `mailto:${COMPANY.email}?subject=${encodeURIComponent(PROPOSAL_SUBJECT)}&body=${encodeURIComponent(PROPOSAL_BODY)}`;
const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola, vengo de la web de Destinos Travel. Quisiera una propuesta de traslados para mi empresa.'
)}`;

function Benefit({ benefit, index }) {
  const [ref, revealed] = useReveal(0.3);
  const Icon = benefit.icon;
  return (
    <div
      ref={ref}
      className={`${revealed ? 'animate-blur-fade-up' : 'opacity-0'} flex gap-4 bg-[#0B0D0E] p-6`}
      style={{ animationDelay: `${(index % 3) * 90}ms` }}
    >
      <Icon size={22} className="mt-0.5 shrink-0 text-[#FFD64B]" />
      <div>
        <h3 className="text-[16px] font-medium text-[#E5E7EB]">{benefit.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-[#E5E7EB]/55">{benefit.text}</p>
      </div>
    </div>
  );
}

export function EmpresasSection() {
  return (
    <section id="empresas" className="bg-[#0B0D0E] px-4 py-24 sm:px-6 md:px-12 md:py-32">
      <SectionHeading
        kicker="Empresas y hoteles"
        title={
          <>
            Movilidad para tu empresa, <span className="text-[#FFD64B]">en orden.</span>
          </>
        }
        intro="Para empresas que mueven ejecutivos y clientes, y para hoteles que reciben huéspedes. Tú coordinas con una sola persona; nosotros nos encargamos del resto."
      />

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-[#1F2428] sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((b, i) => (
          <Benefit key={b.title} benefit={b} index={i} />
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <a
          href={mailHref}
          className="font-label inline-flex items-center justify-center gap-2 rounded-full bg-[#FFD64B] px-7 py-3 tracking-[0.04em] text-[#0B0D0E]"
        >
          <Mail size={16} />
          Pedir propuesta por correo
        </a>
        <a
          href={waHref}
          target="_blank"
          rel="noreferrer"
          className="font-label liquid-glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 tracking-[0.04em] text-[#E5E7EB]"
        >
          <MessageCircle size={16} className="text-[#FFD64B]" />
          Escribir por WhatsApp
        </a>
      </div>
      <p className="mt-4 text-sm text-[#E5E7EB]/45">
        Para servicios corporativos te recomendamos el correo: {COMPANY.email}. Condiciones de crédito en los{' '}
        <a href={ROUTES.terms} className="text-[#FFD64B]/90 underline-offset-4 hover:underline">
          Términos y condiciones
        </a>
        .
      </p>
    </section>
  );
}
