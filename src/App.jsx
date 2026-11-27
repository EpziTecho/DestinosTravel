import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { CinematicScroll } from './components/CinematicScroll';
import { ServicesDetail } from './components/ServicesDetail';
import { BookingSection } from './components/BookingSection';
import { EmpresasSection } from './components/EmpresasSection';
import { DiplomaticSection } from './components/DiplomaticSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Grain } from './components/Overlays';
import { WhatsAppButton } from './components/WhatsAppButton';
import { FaqPage } from './pages/FaqPage';
import { TermsPage } from './pages/TermsPage';
import { ROUTES } from './lib/nav';
import { LANG, t } from './i18n';

function HomePage() {
  // index.html carries the Spanish title and description (what Google reads); other languages swap them.
  useEffect(() => {
    if (LANG === 'es') return;
    document.title = t('meta.title');
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description'));
  }, []);

  // Arriving from another page at /#section: jump there once the sections exist.
  useEffect(() => {
    const { hash } = window.location;
    if (hash.length > 1) requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView());
  }, []);

  return (
    <div className="bg-[#0B0D0E]">
      <Grain />
      <Navbar />
      <CinematicScroll />
      <ServicesDetail />
      <DiplomaticSection />
      <BookingSection />
      <EmpresasSection />
      <GallerySection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

const PAGES = {
  [ROUTES.faq]: FaqPage,
  [ROUTES.terms]: TermsPage,
};

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const Page = PAGES[path] ?? HomePage;
  return <Page />;
}
