import { useEffect, useState } from 'react';
import { SOCIAL_LINKS } from '../config/socialLinks';
import { WhatsAppGlyph } from './WhatsAppGlyph';
import { t } from '../i18n';

// Sections that already offer their own WhatsApp button; the floating one would
// only cover their controls (e.g. the + / − steppers on phones), so it steps aside.
const HIDE_OVER = ['#reservar'];

export function WhatsAppButton() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = HIDE_OVER.map((s) => document.querySelector(s)).filter(Boolean);
    if (!targets.length) return undefined;
    const visible = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
        setHidden(visible.size > 0);
      },
      // Counts as "over" once the section fills the lower part of the screen, where the button sits.
      // (-1px on top so a section that ends exactly at the top edge doesn't count.)
      { rootMargin: '-1px 0px -15% 0px' }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label={t('whatsapp.aria')}
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : undefined}
      className={`fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFD64B] text-[#0B0D0E] shadow-[0_8px_24px_rgba(255,214,75,0.35)] transition-all duration-300 hover:scale-105 sm:right-6 sm:bottom-6 ${
        hidden ? 'pointer-events-none translate-y-4 scale-75 opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <WhatsAppGlyph size={26} />
    </a>
  );
}
