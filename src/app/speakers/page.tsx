import type { Metadata } from "next";
import { Header } from "../components/sections/Header";
import { SpeakersHero } from "./SpeakersHero";
import { BrandBookV1SpeakersList as SpeakersList } from "../test/_design-system/BrandBookV1SpeakersComponents";
import { SpeakersCTASection } from "./SpeakersCTASection";
import { FooterSection } from "../components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Speakers Hub | World AI Show: The Cybersecurity Edition | Bengaluru 2027",
  description:
    "The Faculty: 45+ CISOs, CIOs, CTOs, CROs and security leaders are being curated for Bengaluru 2027, selected for implementation experience: the decisions made, the trade-offs weighed and the lessons learned.",
};

export default function SpeakersPage() {
  return (
    <main className="page-speakers relative min-h-screen bg-[#F7F9FC] text-[#08121E] font-space-grotesk overflow-x-hidden">
      <Header activeItem="Speakers" />
      <SpeakersHero />
      <SpeakersList />
      <SpeakersCTASection />
      <FooterSection />
    </main>
  );
}
