import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AgendaVision } from "../AgendaPage";

export const metadata: Metadata = {
  title: "Securing AI & Defending with AI | Agenda | World AI Show: The Cybersecurity Edition | Bengaluru 2027",
  description: "Enterprise security in the age of AI: the decisions ahead. Moving beyond awareness to practical enterprise questions across India's cyber ecosystem.",
};

const subNav = ["Overview", "The 2030 Vision", "Agenda", "Themes", "Call for Speakers"];

export default function VisionPage() {
  return (
    <main className="page-agenda relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="The 2030 Vision" />
      <AgendaVision />
      <FooterSection />
    </main>
  );
}
