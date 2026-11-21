import { ArrowLeft } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Grain } from './Overlays';
import { WhatsAppButton } from './WhatsAppButton';

/** Layout for pages other than the home: navbar, title block, content, footer. */
export function PageShell({ kicker, title, intro, children }) {
  return (
    <div className="min-h-screen bg-[#0B0D0E]">
      <Grain />
      <Navbar />
      <main id="top" className="px-4 pt-32 pb-24 sm:px-6 md:px-12 md:pt-40">
        <a
          href="/"
          className="font-label mb-10 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#E5E7EB]/50 uppercase transition-colors hover:text-[#FFD64B]"
        >
          <ArrowLeft size={14} /> Volver al inicio
        </a>
        <div className="mb-14 max-w-3xl">
          <p className="font-label animate-blur-fade-up mb-3 text-[11px] tracking-[0.28em] text-[#FFD64B] uppercase">{kicker}</p>
          <div className="rule animate-draw-line mb-5 w-24" style={{ animationDelay: '120ms' }} />
          <h1
            className="font-display animate-blur-fade-up text-4xl leading-[1.08] tracking-[-0.01em] text-[#E5E7EB] sm:text-5xl md:text-6xl"
            style={{ animationDelay: '200ms' }}
          >
            {title}
          </h1>
          {intro && (
            <p className="animate-blur-fade-up mt-5 max-w-xl text-base text-[#E5E7EB]/60" style={{ animationDelay: '320ms' }}>
              {intro}
            </p>
          )}
        </div>
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
