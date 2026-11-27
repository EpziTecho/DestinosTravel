import { useEffect, useRef, useState } from 'react';
import { Globe, Check } from 'lucide-react';
import { LANGS, LANG, CURRENT_LANG, setLanguage, t } from '../i18n';

/** Language badge in the navbar ("ES ▾"); picking a language reloads the page in it. */
export function LanguageSwitcher({ className = '' }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const close = (e) => !ref.current?.contains(e.target) && setOpen(false);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('pointerdown', close);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', close);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t('nav.language')}: ${CURRENT_LANG.name}`}
        className="font-label liquid-glass flex h-10 items-center gap-1.5 rounded-full px-3.5 text-xs tracking-[0.08em] text-[#E5E7EB] transition-colors hover:text-[#FFD64B]"
      >
        <Globe size={15} className="text-[#FFD64B]" />
        {CURRENT_LANG.short}
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t('nav.language')}
          className="absolute top-full right-0 mt-2 min-w-[10rem] overflow-hidden rounded-xl border border-[#1F2428] bg-[#0B0D0E]/95 py-1 shadow-xl backdrop-blur"
        >
          {LANGS.map((l) => {
            const active = l.code === LANG;
            return (
              <li key={l.code} role="option" aria-selected={active}>
                <button
                  type="button"
                  lang={l.code}
                  onClick={() => (active ? setOpen(false) : setLanguage(l.code))}
                  className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                    active ? 'text-[#FFD64B]' : 'text-[#E5E7EB]/80 hover:bg-[#FFD64B]/10 hover:text-[#FFD64B]'
                  }`}
                >
                  {l.name}
                  {active && <Check size={14} />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
