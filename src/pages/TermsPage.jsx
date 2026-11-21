import { PageShell } from '../components/PageShell';
import { TERMS_SECTIONS, TERMS_UPDATED } from '../content/terms';
import { COMPANY } from '../config/company';
import { ROUTES, usePageMeta } from '../lib/nav';

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
    title: 'Términos y condiciones — Destinos Travel',
    description:
      'Condiciones de reserva, cancelación, no show, recojo en el aeropuerto, recargos, pagos y equipaje de Destinos Travel.',
    path: ROUTES.terms,
  });

  return (
    <PageShell
      kicker="Términos y condiciones"
      title="Condiciones del servicio."
      intro={`Última actualización: ${TERMS_UPDATED}.`}
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
        <nav aria-label="Contenido" className="hidden lg:block">
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
              Estos términos rigen los servicios de transporte prestados por <strong className="text-[#E5E7EB]">{COMPANY.legalName}</strong>{' '}
              (RUC {COMPANY.ruc}), con domicilio en {COMPANY.address}. Al reservar un servicio, el cliente acepta estas
              condiciones.
            </p>
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
              <h2 className="font-display mb-4 text-xl text-[#FFD64B] sm:text-2xl">Contacto</h2>
              <p className="text-[15px] leading-relaxed text-[#E5E7EB]/70">
                Para consultas sobre estos términos escríbenos a{' '}
                <a href={`mailto:${COMPANY.email}`} className="text-[#E5E7EB] underline-offset-4 hover:underline">
                  {COMPANY.email}
                </a>{' '}
                o llámanos al {COMPANY.phones.join(' / ')}.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
