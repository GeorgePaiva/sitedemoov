import { EmergencyBanner } from './components/EmergencyBanner';
import { Header } from './components/Header';
import { FloatingWhatsApp, StickyMobileCTA } from './components/FloatingActions';

import { Hero } from './sections/Hero';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { Differentials } from './sections/Differentials';
import { HowItWorks } from './sections/HowItWorks';
import { Specialties } from './sections/Specialties';
import { Team } from './sections/Team';
import { About } from './sections/About';
import { Stats } from './sections/Stats';
import { Contact } from './sections/Contact';
import { Gallery } from './sections/Gallery';
import { Pricing } from './sections/Pricing';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-brand-paper text-brand-ink antialiased">
      <EmergencyBanner />
      <Header />

      <main className="pb-20 md:pb-0">
        <Hero />
        <Testimonials />
        <FAQ />
        <Differentials />
        <HowItWorks />
        <Specialties />
        <Team />
        <About />
        <Stats />
        <Contact />
        <Gallery />
        <Pricing />
      </main>

      <Footer />

      <FloatingWhatsApp />
      <StickyMobileCTA />
    </div>
  );
}
