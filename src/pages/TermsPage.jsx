import { PageShell } from '../components/PageShell';
import { TERMS_SECTIONS, TERMS_UPDATED } from '../content/terms';
import { COMPANY } from '../config/company';
import { ROUTES, usePageMeta } from '../lib/nav';
import { t, rich, formatDay } from '../i18n';

function Item({ item }) {
  if (typeof item === 'string') return <p>{item}</p>;
  return (
    <div>
      <p>{item.text}</p>
      <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#FFD64B]/60">
        {item.list.map((li) => (
          <li key={li}>{li}</li>
        ))}
      </ul>
    </div>
  );
}

export function TermsPage() {
  usePageMeta({
    title: t('termsPage.metaTitle'),
    description: t('termsPage.metaDescription'),
    path: ROUTES.terms,
  });

  return (
    <PageShell
      kicker={t('termsPage.kicker')}
      title={t('termsPage.title')}
      intro={t('termsPage.updated', { date: formatDay(TERMS_UPDATED, { day: 'numeric', month: 'long', year: 'numeric' }) })}
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
        <nav aria-label={t('termsPage.toc')} className="hidden lg:block">
          <ol className="sticky top-32 flex flex-col gap-3">
            {TERMS_SECTIONS.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="font-label text-xs tracking-[0.12em] text-[#E5E7EB]/50 uppercase transition-colors hover:text-[#FFD64B]"
                >
                  {i + 1}. {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="max-w-3xl">
          <div className="mb-12 rounded-2xl border border-[#1F2428] p-6 text-[15px] leading-relaxed text-[#E5E7EB]/70">
            <p>
              {rich('termsPage.preamble', {
                company: <strong className="text-[#E5E7EB]">{COMPANY.legalName}</strong>,
                ruc: COMPANY.ruc,
                address: COMPANY.address,
              })}
            </p>
            {t('termsPage.translationNote') && (
              <p className="mt-3 text-sm text-[#E5E7EB]/50">{t('termsPage.translationNote')}</p>
            )}
          </div>

          <div className="flex flex-col gap-12">
            {TERMS_SECTIONS.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="font-display mb-4 text-xl text-[#FFD64B] sm:text-2xl">
                  {i + 1}. {s.title}
                </h2>
                <div className="flex flex-col gap-3 text-[15px] leading-relaxed text-[#E5E7EB]/70">
                  {s.items.map((item, j) => (
                    <Item key={j} item={item} />
                  ))}
                </div>
              </section>
            ))}

            <section id="contacto-terminos" className="scroll-mt-28 border-t border-[#1F2428] pt-10">
              <h2 className="font-display mb-4 text-xl text-[#FFD64B] sm:text-2xl">{t('termsPage.contactTitle')}</h2>
              <p className="text-[15px] leading-relaxed text-[#E5E7EB]/70">
                {rich('termsPage.contactText', {
                  email: (
                    <a href={`mailto:${COMPANY.email}`} className="text-[#E5E7EB] underline-offset-4 hover:underline">
                      {COMPANY.email}
                    </a>
                  ),
                  phones: COMPANY.phones.join(' / '),
                })}
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
