import { useReveal } from '../hooks/useReveal';

// logo: null shows the gold initials placeholder below. Once real PNGs are
// available, import them and set logo to the imported asset.
const CLIENTS = [
  { name: 'Embajada de Francia', initials: 'EF', logo: null },
  { name: 'Embajada de Estados Unidos', initials: 'EU', logo: null },
  { name: 'Alianza Francesa de Lima', initials: 'AF', logo: null },
  { name: 'Avianca', initials: 'AV', logo: null },
  { name: 'Interjet', initials: 'IJ', logo: null },
  { name: 'Grupo La República', initials: 'LR', logo: null },
];

function ClientLogo({ client }) {
  if (client.logo) {
    return <img src={client.logo} alt={client.name} className="h-10 w-auto object-contain" />;
  }
  return (
    <div className="font-display flex h-10 w-10 items-center justify-center rounded-full border border-[#FFD64B]/40 text-sm text-[#FFD64B]">
      {client.initials}
    </div>
  );
}

export function ClientsSection() {
  const [headRef, headRevealed] = useReveal(0.3);
  const [gridRef, gridRevealed] = useReveal(0.2);

  return (
    <section id="clientes" className="bg-[#0B0D0E] px-4 py-24 sm:px-6 md:px-12 md:py-32">
      <div ref={headRef} className="mb-14 max-w-2xl">
        <p className={`${headRevealed ? 'animate-blur-fade-up' : 'opacity-0'} font-label mb-3 text-[11px] tracking-[0.28em] text-[#FFD64B] uppercase`}>
          Clientes
        </p>
        <div className={`rule mb-5 w-24 ${headRevealed ? 'animate-draw-line' : ''}`} style={{ animationDelay: '120ms' }} />
        <h2
          className={`${headRevealed ? 'animate-blur-fade-up' : 'opacity-0'} font-display text-3xl leading-[1.1] tracking-[-0.01em] text-[#E5E7EB] sm:text-4xl md:text-5xl`}
          style={{ animationDelay: '200ms' }}
        >
          Confían en el trazado.
        </h2>
        <p
          className={`${headRevealed ? 'animate-blur-fade-up' : 'opacity-0'} mt-4 max-w-md text-base text-[#E5E7EB]/60`}
          style={{ animationDelay: '320ms' }}
        >
          Nos enorgullece haber brindado servicio a instituciones, aerolíneas y organizaciones que exigen excelencia.
        </p>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-[#1F2428] sm:grid-cols-2 lg:grid-cols-3">
        {CLIENTS.map((client, i) => (
          <div
            key={client.name}
            className={`${gridRevealed ? 'animate-blur-fade-up' : 'opacity-0'} flex items-center gap-4 bg-[#0B0D0E] px-6 py-8`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <ClientLogo client={client} />
            <span className="font-label text-sm tracking-[0.06em] text-[#E5E7EB]/70 uppercase">{client.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
