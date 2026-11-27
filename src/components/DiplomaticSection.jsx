import { ShieldCheck, UserCheck, CalendarClock } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { DIPLOMATIC_PHOTOS } from '../content/photos';
import { SectionHeading } from './SectionHeading';
import { ClientsGrid } from './ClientsSection';
import { PhotoGrid } from './PhotoViewer';
import { usePhotoViewer } from '../hooks/usePhotoViewer';
import { t, TITLE_GAP } from '../i18n';

const ICONS = [UserCheck, ShieldCheck, CalendarClock];
const POINTS = t('diplomatic.points').map((p, i) => ({ ...p, icon: ICONS[i] }));

export function DiplomaticSection() {
  const [pointsRef, pointsRevealed] = useReveal(0.2);
  const [openPhoto, viewer] = usePhotoViewer(DIPLOMATIC_PHOTOS);

  return (
    <section id="diplomatico" className="bg-[#0B0D0E] px-4 py-24 sm:px-6 md:px-12 md:py-32">
      <SectionHeading
        kicker={t('diplomatic.kicker')}
        title={
          <>
            {t('diplomatic.title')}{TITLE_GAP}<span className="text-[#FFD64B]">{t('diplomatic.titleHighlight')}</span>
          </>
        }
        intro={t('diplomatic.intro')}
      />

      {DIPLOMATIC_PHOTOS.length > 0 && (
        <PhotoGrid photos={DIPLOMATIC_PHOTOS} onOpen={openPhoto} className="mb-12" />
      )}
      {viewer}

      <ul ref={pointsRef} className="mb-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {POINTS.map(({ icon: Icon, title, text }, i) => (
          <li
            key={title}
            className={`${pointsRevealed ? 'animate-blur-fade-up' : 'opacity-0'} flex gap-4`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <Icon size={22} className="mt-0.5 shrink-0 text-[#FFD64B]" />
            <div>
              <h3 className="font-display mb-1 text-lg text-[#E5E7EB]">{title}</h3>
              <p className="text-sm text-[#E5E7EB]/55">{text}</p>
            </div>
          </li>
        ))}
      </ul>

      <ClientsGrid />
    </section>
  );
}
