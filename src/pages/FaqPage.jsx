import { CalendarCheck, MessageCircle } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { FaqList } from '../components/FaqList';
import { FAQ_GROUPS, faqJsonLd } from '../content/faq';
import { ROUTES, usePageMeta, useJsonLd } from '../lib/nav';
import { SOCIAL_LINKS } from '../config/socialLinks';

const JSON_LD = faqJsonLd(FAQ_GROUPS.flatMap((g) => g.items));
const slug = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export function FaqPage() {
  usePageMeta({
    title: 'Preguntas frecuentes — Destinos Travel',
    description:
      'Reservas, recojo en el aeropuerto, equipaje, pagos, horarios y servicios para empresas de Destinos Travel, transporte ejecutivo en Lima.',
    path: ROUTES.faq,
  });
  useJsonLd(JSON_LD);

  return (
    <PageShell
      kicker="Preguntas frecuentes"
      title="Todo lo que necesitas saber."
      intro="Reservas, aeropuerto, equipaje, pagos y más. Si no encuentras tu respuesta, escríbenos: te respondemos a cualquier hora."
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
        <nav aria-label="Temas" className="hidden lg:block">
          <ul className="sticky top-32 flex flex-col gap-3">
            {FAQ_GROUPS.map((g) => (
              <li key={g.title}>
                <a
                  href={`#${slug(g.title)}`}
                  className="font-label text-xs tracking-[0.14em] text-[#E5E7EB]/50 uppercase transition-colors hover:text-[#FFD64B]"
                >
                  {g.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-14">
          {FAQ_GROUPS.map((g) => (
            <section key={g.title} id={slug(g.title)} className="scroll-mt-28">
              <h2 className="font-display mb-4 text-2xl text-[#FFD64B] sm:text-3xl">{g.title}</h2>
              <FaqList items={g.items} />
            </section>
          ))}

          <div className="liquid-glass flex flex-col gap-5 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="font-display text-xl text-[#E5E7EB]">¿Listo para reservar?</p>
              <p className="mt-1 text-sm text-[#E5E7EB]/55">Arma tu traslado en un minuto o escríbenos.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/#reservar"
                className="font-label inline-flex items-center justify-center gap-2 rounded-full bg-[#FFD64B] px-6 py-3 text-sm tracking-[0.04em] text-[#0B0D0E]"
              >
                <CalendarCheck size={16} /> Reservar traslado
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="font-label liquid-glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm tracking-[0.04em] text-[#E5E7EB]"
              >
                <MessageCircle size={16} className="text-[#FFD64B]" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
