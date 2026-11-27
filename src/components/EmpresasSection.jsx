import { Building2, Receipt, CarFront, Clock3, Hotel, UserCheck, Mail, MessageCircle } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { useReveal } from '../hooks/useReveal';
import { COMPANY } from '../config/company';
import { WHATSAPP_NUMBER } from '../config/socialLinks';
import { ROUTES } from '../lib/nav';
import { t, rich, TITLE_GAP } from '../i18n';

const ICONS = [Building2, Receipt, CarFront, Clock3, Hotel, UserCheck];
const BENEFITS = t('empresas.benefits').map((b, i) => ({ ...b, icon: ICONS[i] }));

const mailHref = `mailto:${COMPANY.email}?subject=${encodeURIComponent(t('empresas.proposalSubject'))}&body=${encodeURIComponent(
  t('empresas.proposalBody').join('\n')
)}`;
const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t('empresas.whatsappText'))}`;

function Benefit({ benefit, index }) {
  const [ref, revealed] = useReveal(0.3);
  const Icon = benefit.icon;
  return (
    <div
      ref={ref}
      className={`${revealed ? 'animate-blur-fade-up' : 'opacity-0'} flex gap-4 bg-[#0B0D0E] p-6`}
      style={{ animationDelay: `${(index % 3) * 90}ms` }}
    >
      <Icon size={22} className="mt-0.5 shrink-0 text-[#FFD64B]" />
      <div>
        <h3 className="text-[16px] font-medium text-[#E5E7EB]">{benefit.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-[#E5E7EB]/55">{benefit.text}</p>
      </div>
    </div>
  );
}

export function EmpresasSection() {
  return (
    <section id="empresas" className="bg-[#0B0D0E] px-4 py-24 sm:px-6 md:px-12 md:py-32">
      <SectionHeading
        kicker={t('empresas.kicker')}
        title={
          <>
            {t('empresas.title')}{TITLE_GAP}<span className="text-[#FFD64B]">{t('empresas.titleHighlight')}</span>
          </>
        }
        intro={t('empresas.intro')}
      />

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-[#1F2428] sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((b, i) => (
          <Benefit key={b.title} benefit={b} index={i} />
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <a
          href={mailHref}
          className="font-label inline-flex items-center justify-center gap-2 rounded-full bg-[#FFD64B] px-7 py-3 tracking-[0.04em] text-[#0B0D0E]"
        >
          <Mail size={16} />
          {t('empresas.byEmail')}
        </a>
        <a
          href={waHref}
          target="_blank"
          rel="noreferrer"
          className="font-label liquid-glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 tracking-[0.04em] text-[#E5E7EB]"
        >
          <MessageCircle size={16} className="text-[#FFD64B]" />
          {t('empresas.byWhatsapp')}
        </a>
      </div>
      <p className="mt-4 text-sm text-[#E5E7EB]/45">
        {rich('empresas.note', {
          email: COMPANY.email,
          terms: (
            <a href={ROUTES.terms} className="text-[#FFD64B]/90 underline-offset-4 hover:underline">
              {t('empresas.termsLink')}
            </a>
          ),
        })}
      </p>
    </section>
  );
}
