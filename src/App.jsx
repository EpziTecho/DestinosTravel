import { Navbar } from './components/Navbar';
import { CinematicScroll } from './components/CinematicScroll';
import { ServicesDetail } from './components/ServicesDetail';
import { ClientsSection } from './components/ClientsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Grain } from './components/Overlays';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="bg-[#0B0D0E]">
      <Grain />
      <Navbar />
      <CinematicScroll />
      <ServicesDetail />
      <ClientsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
