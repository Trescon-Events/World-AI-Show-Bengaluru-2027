import { Header } from "./components/sections/Header";
import { BrandBookV1HeroSection as HeroSection } from "./test/_design-system/BrandBookV1HeroSection";
import { EcosystemSectionDemo as EcosystemSection } from "./components/sections/EcosystemSectionDemo";
import { AgendaSection } from "./components/sections/AgendaSection";
import { BrandBookV1SpeakersSection as SpeakersSection } from "./test/_design-system/BrandBookV1SpeakersComponents";
import { NetworkingSection } from "./components/sections/NetworkingSection";
import { BrandBookV1TestimonialsSection as TestimonialsSection } from "./test/_design-system/BrandBookV1TestimonialsSection";
import { SponsorsSection } from "./components/sections/SponsorsSection";
import { FAQSection } from "./components/sections/FAQSection";
import { FooterSection } from "./components/sections/FooterSection";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen overflow-x-hidden bg-[#F7F9FC]">
      {/* 1. Navigation Bar */}
      <Header activeItem="Home" />
      {/* 2. Hero */}
      <HeroSection />
      {/* 3. The Executive Mandate */}
      <EcosystemSection />
      {/* 4. Four Pillars. Two Days. */}
      <AgendaSection />
      {/* 5. Faculty (Speakers) */}
      <SpeakersSection />
      {/* 6. Who's in the Room */}
      <NetworkingSection />
      {/* 7. Testimonials */}
      <TestimonialsSection />
      {/* 8. Past Series Partners */}
      <SponsorsSection />
      {/* 9. Frequently Asked Questions */}
      <FAQSection />
      {/* Footer */}
      <FooterSection />
    </main>
  );
}
