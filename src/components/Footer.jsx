import { SocialIcons } from './SocialIcons';

export function Footer() {
  return (
    <footer className="bg-[#0B0D0E] px-6 md:px-12">
      <div className="rule" />
      <div className="flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-4 text-xs text-[#E5E7EB]/40 sm:flex-row sm:items-center sm:gap-8">
          <span className="font-label tracking-[0.1em] uppercase">
            Destinos Travel — Transporte Ejecutivo · Lima, Perú
          </span>
          <span className="font-label tracking-[0.1em] uppercase">
            Servicios · Nosotros · Clientes · Contacto
          </span>
        </div>
        <SocialIcons />
      </div>
    </footer>
  );
}
