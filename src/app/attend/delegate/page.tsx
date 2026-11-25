import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AttendDelegateSection } from "../page";

export const metadata: Metadata = {
  title: "Delegate Pass | Attend | World AI Show: The Cybersecurity Edition | Bengaluru 2027",
  description: "Built for the leaders who own the risk. Join an exclusive cohort of 300+ pre-qualified security, technology and risk leaders at World AI Show: The Cybersecurity Edition | Bengaluru 2027.",
};

const subNav = ["Overview", "Delegate", "Sponsor", "Media Partner", "Association Partner"];

export default function DelegatePage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Attend" subNavItems={subNav} activeSubNavItem="Delegate" />
      <AttendDelegateSection />
      <FooterSection />
    </main>
  );
}
