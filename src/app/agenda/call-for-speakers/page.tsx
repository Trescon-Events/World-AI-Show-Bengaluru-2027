import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AgendaCallForSpeakers } from "../AgendaPage";

export const metadata: Metadata = {
  title: "Call for Practitioner Speakers | Agenda | World AI Show: The Cybersecurity Edition | Bengaluru 2027",
  description: "If you've led security through the AI shift, take the stage. Seeking CISOs, CIOs, CTOs, CROs, and security practitioners for Bengaluru 2027.",
};

const subNav = ["Overview", "The 2030 Vision", "Agenda", "Themes", "Call for Speakers"];

export default function CallForSpeakersPage() {
  return (
    <main className="page-agenda relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="Call for Speakers" />
      <AgendaCallForSpeakers />
      <FooterSection />
    </main>
  );
}
