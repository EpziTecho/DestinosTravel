import { Landmark, Globe, Plane, Building2, GraduationCap, Users, Briefcase } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { CLIENT_TYPES, CLIENTS } from '../content/clients';
import { t } from '../i18n';

const ICONS = { Landmark, Globe, Plane, Building2, GraduationCap, Users, Briefcase };

// Logos of authorized clients, by name. To add one:
//   import logoAvianca from '../assets/clientes/avianca.png';
//   const LOGOS = { Avianca: logoAvianca };
const LOGOS = {};

const SHOWN_CLIENTS = CLIENTS.filter((c) => c.authorized);

function ClientLogo({ client }) {
  const logo = LOGOS[client.name];
  if (logo) return <img src={logo} alt={client.name} className="h-10 w-auto object-contain" />;
  return (
    <div className="font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#FFD64B]/40 text-sm text-[#FFD64B]">
      {client.initials}
    </div>
  );
}

/**
 * "Who trusts us": client categories (no names or logos), plus named clients only
 * when they authorized it (src/content/clients.js). Shown inside DiplomaticSection.
 */
export function ClientsGrid() {
  const [typesRef, typesRevealed] = useReveal(0.2);
  const [namesRef, namesRevealed] = useReveal(0.2);

  return (
    <div id="clientes" className="scroll-mt-24">
      <h3 className="font-display mb-2 text-2xl tracking-[-0.01em] text-[#E5E7EB] sm:text-3xl">
        {t('clients.title')}
      </h3>
      <p className="mb-8 max-w-md text-base text-[#E5E7EB]/60">
        {t('clients.intro')}
      </p>

      <ul
        ref={typesRef}
        className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-[#1F2428] sm:grid-cols-2 lg:grid-cols-3"
      >
        {CLIENT_TYPES.map((type, i) => {
          const Icon = ICONS[type.icon] ?? Briefcase;
          return (
            <li
              key={type.title}
              className={`${typesRevealed ? 'animate-blur-fade-up' : 'opacity-0'} flex gap-4 bg-[#0B0D0E] px-6 py-7`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Icon size={22} className="mt-0.5 shrink-0 text-[#FFD64B]" />
              <div>
                <p className="font-label mb-1 text-sm tracking-[0.06em] text-[#E5E7EB] uppercase">{type.title}</p>
                <p className="text-sm text-[#E5E7EB]/55">{type.text}</p>
              </div>
            </li>
          );
        })}
      </ul>

      {SHOWN_CLIENTS.length > 0 && (
        <div
          ref={namesRef}
          className="mt-px grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-[#1F2428] sm:grid-cols-2 lg:grid-cols-3"
        >
          {SHOWN_CLIENTS.map((client, i) => (
            <div
              key={client.name}
              className={`${namesRevealed ? 'animate-blur-fade-up' : 'opacity-0'} flex items-center gap-4 bg-[#0B0D0E] px-6 py-6`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <ClientLogo client={client} />
              <span className="font-label text-sm tracking-[0.06em] text-[#E5E7EB]/70 uppercase">{client.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
