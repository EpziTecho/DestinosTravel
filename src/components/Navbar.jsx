import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoHorizontal from '../assets/logo-horizontal.webp';
import { goToSection } from '../lib/nav';

const LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reservar', href: '#reservar' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Empresas', href: '#empresas' },
  { label: 'Preguntas', href: '#preguntas' },
  { label: 'Contacto', href: '#contacto' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 backdrop-blur-md sm:px-6 md:px-12 md:py-6">
        <a
          href="/"
          className="animate-blur-fade-up flex shrink-0 items-center gap-3"
          style={{ animationDelay: '0ms' }}
        >
          {/* Slightly smaller from 1024 to 1279 px, where the row of links is tightest. */}
          <img
            src={logoHorizontal}
            alt="Destinos Travel"
            width="542"
            height="168"
            className="h-11 w-auto sm:h-12 lg:h-11 xl:h-14"
          />
        </a>

        <div className="hidden items-center gap-4 whitespace-nowrap lg:flex xl:gap-8">
          {LINKS.map((link, i) => (
            <button
              key={link.label}
              onClick={() => goToSection(link.href)}
              className="font-label animate-blur-fade-up text-sm tracking-[0.08em] text-[#E5E7EB]/70 transition-colors hover:text-[#FFD64B]"
              style={{ animationDelay: `${100 + i * 50}ms` }}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => goToSection('#reservar')}
          className="font-label liquid-glass animate-blur-fade-up hidden shrink-0 items-center gap-2 rounded-full px-5 py-2 text-sm tracking-[0.04em] whitespace-nowrap text-[#FFD64B] lg:flex"
          style={{ animationDelay: '300ms' }}
        >
          Reservar traslado
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          className="liquid-glass animate-blur-fade-up flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
          style={{ animationDelay: '300ms' }}
          aria-label="Abrir menú"
        >
          <Menu
            size={18}
            className={`absolute text-[#E5E7EB] transition-all duration-500 ${open ? 'rotate-180 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
          />
          <X
            size={18}
            className={`absolute text-[#E5E7EB] transition-all duration-500 ${open ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-50 opacity-0'}`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-x-0 top-0 z-40 flex flex-col items-center justify-center-safe gap-6 bg-[#0B0D0E]/95 pt-20 backdrop-blur transition-all duration-500 lg:hidden ${
          // Capped at the screen height (phones held sideways) and scrollable inside.
          open ? 'h-[26rem] max-h-svh overflow-y-auto pb-6 opacity-100' : 'pointer-events-none h-0 overflow-hidden opacity-0'
        }`}
      >
        {LINKS.map((link) => (
          <button
            key={link.label}
            onClick={() => {
              setOpen(false);
              goToSection(link.href);
            }}
            className="font-label text-sm tracking-[0.2em] text-[#E5E7EB]/80 uppercase hover:text-[#FFD64B]"
          >
            {link.label}
          </button>
        ))}
      </div>
    </>
  );
}
