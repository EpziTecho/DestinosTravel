import { SocialIcons } from './SocialIcons';
import { COMPANY } from '../config/company';
import { ROUTES } from '../lib/nav';
import { t } from '../i18n';
import logoHorizontal from '../assets/logo-horizontal.webp';

const LINKS = [
  { label: t('footer.book'), href: '/#reservar' },
  { label: t('footer.empresas'), href: '/#empresas' },
  { label: t('footer.faq'), href: ROUTES.faq },
  { label: t('footer.terms'), href: ROUTES.terms },
  { label: t('footer.contact'), href: '/#contacto' },
];

export function Footer() {
  return (
    <footer className="bg-[#0B0D0E] px-4 sm:px-6 md:px-12">
      <div className="rule" />
      <div className="flex flex-col gap-8 py-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-2 text-xs text-[#E5E7EB]/45">
          <img
            src={logoHorizontal}
            alt="Destinos Travel"
            width="542"
            height="168"
            loading="lazy"
            className="mb-3 h-14 w-auto self-start"
          />
          <span className="font-label tracking-[0.1em] text-[#E5E7EB]/60 uppercase">
            {t('footer.tagline')}
          </span>
          <span>
            {COMPANY.legalName} · RUC {COMPANY.ruc}
          </span>
          <span>{COMPANY.address}</span>
        </div>

        <nav aria-label={t('footer.aria')}>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="font-label text-xs tracking-[0.1em] text-[#E5E7EB]/55 uppercase transition-colors hover:text-[#FFD64B]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <SocialIcons />
      </div>
    </footer>
  );
}
