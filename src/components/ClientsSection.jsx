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

/** Client logos grid; shown inside the diplomatic-experience section. */
export function ClientsGrid() {
  const [gridRef, gridRevealed] = useReveal(0.2);

  return (
    <div id="clientes" className="scroll-mt-24">
      <h3 className="font-display mb-2 text-2xl tracking-[-0.01em] text-[#E5E7EB] sm:text-3xl">
        Nos eligen quienes exigen más.
      </h3>
      <p className="mb-8 max-w-md text-base text-[#E5E7EB]/60">
        Instituciones, aerolíneas y organizaciones que ya confiaron en nosotros.
      </p>

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
    </div>
  );
}
