import { useEffect, useState } from 'react';
import { SOCIAL_LINKS } from '../config/socialLinks';

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
      aria-label="Escríbenos por WhatsApp"
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : undefined}
      className={`fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFD64B] text-[#0B0D0E] shadow-[0_8px_24px_rgba(255,214,75,0.35)] transition-all duration-300 hover:scale-105 sm:right-6 sm:bottom-6 ${
        hidden ? 'pointer-events-none translate-y-4 scale-75 opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 0 1 6.9 12.6l-.2.4.9 3.3-3.4-.9-.4.2A8.2 8.2 0 1 1 12 3.8Zm-3.1 4.4c-.2 0-.5 0-.7.3-.2.2-.9.9-.9 2.2s.9 2.6 1 2.8c.1.2 1.8 2.9 4.5 4 .6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3l-2-1c-.3-.1-.5-.2-.7.1l-.5.6c-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.5-1.8-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.4-.6-.4h-.5Z" />
      </svg>
    </a>
  );
}
