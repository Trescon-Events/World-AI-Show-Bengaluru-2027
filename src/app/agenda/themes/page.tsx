import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AgendaThemes } from "../AgendaPage";

export const metadata: Metadata = {
  title: "Four Content Pillars | Agenda | World AI Show: The Cybersecurity Edition | Bengaluru 2027",
  description: "Four Pillars. Two Days. AI-enabled risk, resilience and enterprise accountability run across all four.",
};

const subNav = ["Overview", "The 2030 Vision", "Agenda", "Themes", "Call for Speakers"];

export default function ThemesPage() {
  return (
    <main className="page-agenda relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="Themes" />
      <AgendaThemes />
      <FooterSection />
    </main>
  );
}
