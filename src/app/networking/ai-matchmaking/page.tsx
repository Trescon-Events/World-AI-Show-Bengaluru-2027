import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AIMatchmakingContent } from "./AIMatchmakingContent";

export const metadata: Metadata = {
  title: "AI Matchmaking | Networking | World AI Show: The Cybersecurity Edition | Bengaluru 2027",
  description: "Meet the right people. Every time. Algorithmic pre-scheduled 20-min 1-to-1 meetings connecting CISOs and enterprise security leaders with solution providers.",
};

const subNav = ["Overview", "AI Matchmaking", "Photo Gallery"];

export default function AIMatchmakingPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Networking" subNavItems={subNav} activeSubNavItem="AI Matchmaking" />
      <AIMatchmakingContent />
      <FooterSection />
    </main>
  );
}
