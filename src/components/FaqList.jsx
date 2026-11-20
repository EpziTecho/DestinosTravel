import { ChevronDown } from 'lucide-react';
import { ROUTES } from '../lib/nav';

/** Accordion of questions using native <details>, so it works with keyboard and without JS. */
export function FaqList({ items }) {
  return (
    <div className="divide-y divide-[#1F2428] border-y border-[#1F2428]">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-[17px] text-[#E5E7EB] transition-colors hover:text-[#FFD64B] [&::-webkit-details-marker]:hidden">
            {item.q}
            <ChevronDown
              size={18}
              aria-hidden="true"
              className="shrink-0 text-[#FFD64B]/70 transition-transform duration-300 group-open:rotate-180"
            />
          </summary>
          <div className="max-w-3xl pb-6 text-[15px] leading-relaxed text-[#E5E7EB]/65">
            <p>{item.a}</p>
            {item.list && (
              <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-[#FFD64B]/60">
                {item.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            )}
            {item.terms && (
              <a
                href={ROUTES.terms}
                className="mt-3 inline-block text-sm text-[#FFD64B]/90 underline-offset-4 hover:underline"
              >
                Ver Términos y condiciones
              </a>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
