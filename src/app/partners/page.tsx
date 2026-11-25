import type { Metadata } from "next";
import { Header } from "../components/sections/Header";
import { PartnersHero } from "./PartnersHero";
import { SponsorsGrid } from "./SponsorsGrid";
import { PartnerShowcase } from "./PartnerShowcase";
import { FooterSection } from "../components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Partners & Sponsors | World AI Show: The Cybersecurity Edition | Bengaluru 2027",
  description:
    "Partner at World AI Show: The Cybersecurity Edition | Bengaluru 2027. Partnerships are structured around stage thought leadership, curated closed-door CISO boardrooms and structured meetings.",
};

export default function PartnersPage() {
  return (
    <main className="page-partners relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Sponsor" />
      <PartnersHero />
      <SponsorsGrid />
      <PartnerShowcase />
      <FooterSection />
    </main>
  );
}
