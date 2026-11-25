import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AttendSponsorSection } from "../page";

export const metadata: Metadata = {
  title: "Sponsor & Commercial Framework | Attend | World AI Show: The Cybersecurity Edition | Bengaluru 2027",
  description: "Your buyers are rethinking security now, not after the incident. Put your solutions in front of the security buying circle at World AI Show: The Cybersecurity Edition | Bengaluru 2027.",
};

const subNav = ["Overview", "Delegate", "Sponsor", "Media Partner", "Association Partner"];

export default function SponsorPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Attend" subNavItems={subNav} activeSubNavItem="Sponsor" />
      <AttendSponsorSection />
      <FooterSection />
    </main>
  );
}
