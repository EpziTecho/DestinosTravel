import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo-mark.png';
import stars from '../assets/logo-stars.png';

const LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contacto', href: '#contacto' },
];

function scrollToId(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 backdrop-blur-md sm:px-6 md:px-12 md:py-6">
        <a
          href="#top"
          className="animate-blur-fade-up flex items-center gap-3"
          style={{ animationDelay: '0ms' }}
        >
          <img src={logo} alt="Destinos Travel" className="h-9 w-auto md:h-11" />
          <span className="hidden flex-col sm:flex">
            <span className="font-display text-lg tracking-[0.04em] text-[#FFD64B] md:text-xl">
              DESTINOS TRAVEL
            </span>
            <img src={stars} alt="" className="mt-0.5 h-2 w-auto self-center md:h-2.5" />
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link, i) => (
            <button
              key={link.label}
              onClick={() => scrollToId(link.href)}
              className="font-label animate-blur-fade-up text-sm tracking-[0.08em] text-[#E5E7EB]/70 transition-colors hover:text-[#FFD64B]"
              style={{ animationDelay: `${100 + i * 50}ms` }}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollToId('#contacto')}
          className="font-label liquid-glass animate-blur-fade-up hidden items-center gap-2 rounded-full px-5 py-2 text-sm tracking-[0.04em] text-[#FFD64B] lg:flex"
          style={{ animationDelay: '300ms' }}
        >
          Trazar tu ruta
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
        className={`fixed inset-x-0 top-0 z-40 flex flex-col items-center justify-center gap-6 overflow-hidden bg-[#0B0D0E]/95 pt-20 backdrop-blur transition-all duration-500 lg:hidden ${
          open ? 'h-72 opacity-100' : 'pointer-events-none h-0 opacity-0'
        }`}
      >
        {LINKS.map((link) => (
          <button
            key={link.label}
            onClick={() => {
              setOpen(false);
              scrollToId(link.href);
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
