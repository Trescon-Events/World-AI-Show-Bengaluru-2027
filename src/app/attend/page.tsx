import type { Metadata } from "next";
import { FooterSection } from "../components/sections/FooterSection";
import { Header } from "../components/sections/Header";
import { AttendStats } from "./AttendStats";
import { GradientText } from "../components/Shared";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Attend | World AI Show: The Cybersecurity Edition | Bengaluru 2027",
  description:
    "Where AI security becomes enterprise strategy. A two-day, CISO-led summit bringing together 300+ CISOs, CIOs, CTOs, CROs and senior risk and technology leaders to secure AI adoption, modernise cyber defence and build resilience across the enterprise.",
};

const subNav = ["Overview", "Delegate", "Sponsor", "Media Partner", "Association Partner"];

type CardItem = {
  title: string;
  text: string;
  icon?: string;
};

const valueCards: CardItem[] = [
  {
    title: "Securing the AI-powered enterprise",
    text: "AI is both a new source of cyber risk and a capability that strengthens defence. We keep the two connected, from model and agent security to AI-assisted SOC operations.",
    icon: "/bengaluru/cybersecurity/images/Attend/enterprise-ai-in-action.svg",
  },
  {
    title: "The complete security and risk circle",
    text: "CISOs sit at the centre, with CIOs, CTOs, CROs, data, infrastructure and business-continuity leaders in the same conversation. Cyber risk is an enterprise decision, not an IT control function.",
    icon: "/bengaluru/cybersecurity/images/Attend/region-ai-decision-makers.svg",
  },
  {
    title: "Practitioners over products",
    text: "Implementation choices, risk trade-offs and lessons learned from enterprise operators. Partner sessions address a defined security challenge and are backed by implementation evidence.",
    icon: "/bengaluru/cybersecurity/images/Attend/insights-drive-transformation.svg",
  },
];

const gatewayCards: CardItem[] = [
  {
    title: "2-Day Plenary Access",
    text: "Full access across 20–21 July 2027 to keynotes, cross-functional panels, practitioner case studies and fireside conversations.",
    icon: "/bengaluru/cybersecurity/images/Attend/gateway/access-to-all-sessions.svg",
  },
  {
    title: "Practitioner Case Studies",
    text: "Hear how enterprise security teams made implementation decisions: what they chose, what they traded off and what they would do differently.",
    icon: "/bengaluru/cybersecurity/images/Attend/gateway/high-value-networking.svg",
  },
  {
    title: "Securing AI, Defending with AI",
    text: "Understand how AI changes both the threat landscape and the security operating model.",
    icon: "/bengaluru/cybersecurity/images/Attend/gateway/enterprise-ai-showcases.svg",
  },
  {
    title: "Peer Perspectives on Resilience",
    text: "Exchange practical views on threat response, cloud and identity protection, third-party risk and continuity with CISOs from comparable organisations.",
    icon: "/bengaluru/cybersecurity/images/Attend/gateway/speaker-materials-and-insights.svg",
  },
  {
    title: "Executive Networking",
    text: "Structured networking reserved for invited delegates across security, technology and risk.",
    icon: "/bengaluru/cybersecurity/images/Attend/gateway/curated-roundtable-discussions.svg",
  },
  {
    title: "Curated Executive Roundtables",
    text: "Closed-door, peer-only discussions on a defined security challenge.",
    icon: "/bengaluru/cybersecurity/images/Attend/gateway/networking-lunch-and-business-meetings.svg",
  },
  {
    title: "Pre-Scheduled 1-on-1 Meetings",
    text: "Matchmaking-assisted meetings with fellow delegates and vetted solution providers.",
    icon: "/bengaluru/cybersecurity/images/Attend/gateway/exclusive-vip-networking-experiences.svg",
  },
  {
    title: "India's Cyber Ecosystem Access",
    text: "Explore Indian cyber GCCs, product innovation and specialist talent.",
    icon: "/bengaluru/cybersecurity/images/Attend/gateway/event-platform-access.svg",
  },
];

const sponsorBenefits: CardItem[] = [
  {
    title: "Brand Visibility at Scale",
    text: "Presence across the venue, website, event app, digital screens, campaigns and attendee communications.",
    icon: "/bengaluru/cybersecurity/images/Attend/sponsor/brand-visibility-at-scale.webp",
  },
  {
    title: "Qualified Lead Generation",
    text: "Connect with pre-qualified CISOs, security leaders and technology and risk decision-makers.",
    icon: "/bengaluru/cybersecurity/images/Attend/sponsor/speaking-opportunities.webp",
  },
  {
    title: "Thought Leadership on Stage",
    text: "Present a defined enterprise security challenge, with an enterprise use case, deployment model and measurable outcome.",
    icon: "/bengaluru/cybersecurity/images/Attend/sponsor/product-showcase-floor.webp",
  },
  {
    title: "Partner Showcase",
    text: "Explain your capability through the problem it addresses, integration requirements and outcomes.",
    icon: "/bengaluru/cybersecurity/images/Attend/sponsor/qualified-lead-generation.webp",
  },
  {
    title: "1:1 Hosted Meetings",
    text: "Curated meetings aligned to your ideal customer profile and target accounts.",
    icon: "/bengaluru/cybersecurity/images/Attend/sponsor/exclusive-sponsorship-branding.webp",
  },
  {
    title: "Closed-Door CISO Boardrooms",
    text: "Host a focused, invitation-only conversation with security leaders from your target accounts.",
    icon: "/bengaluru/cybersecurity/images/Attend/sponsor/hosted-meetings.webp",
  },
  {
    title: "Exclusive Sponsorship Branding",
    text: "Tailored visibility aligned to one of the four content pillars.",
    icon: "/bengaluru/cybersecurity/images/Attend/sponsor/networking-lunch-branding.webp",
  },
  {
    title: "Post-Event Lead Report",
    text: "Engagement, interaction and performance insights after the event.",
    icon: "/bengaluru/cybersecurity/images/Attend/sponsor/post-event-lead-report.webp",
  },
];

const mediaBenefits: CardItem[] = [
  {
    title: "Press Credentials & Plenary Access",
    text: "Full media accreditation across both days of keynotes, panels, case studies and fireside conversations.",
    icon: "/bengaluru/cybersecurity/images/Attend/media/full-event-access.webp",
  },
  {
    title: "Executive Interview Access",
    text: "Dedicated press workspace and 1-on-1 briefings with CISOs, CIOs, CROs and speakers.",
    icon: "/bengaluru/cybersecurity/images/Attend/media/dedicated-media-facilities.webp",
  },
  {
    title: "Editorial Distribution & Amplification",
    text: "Syndicate official research citations and event insights to your readership.",
    icon: "/bengaluru/cybersecurity/images/Attend/media/speaker-interview-access.webp",
  },
  {
    title: "Official Press & Research Kit",
    text: "Embargoed releases, speaker biographies and research briefs ahead of the event.",
    icon: "/bengaluru/cybersecurity/images/Attend/media/official-media-kit.webp",
  },
  {
    title: "Brand & Media Recognition",
    text: "Featured placement in the Supporting Media showcase across the website and venue.",
    icon: "/bengaluru/cybersecurity/images/Attend/media/amplified-media-visibility.webp",
  },
  {
    title: "India Series Coverage",
    text: "Editorial access to the Cybersecurity Edition within the World AI Show Series in India.",
    icon: "/bengaluru/cybersecurity/images/Attend/media/brand-and-media-recognition.webp",
  },
  {
    title: "Exclusive Story Opportunities",
    text: "Capture implementation stories, resilience lessons and operating-model change from enterprise leaders.",
    icon: "/bengaluru/cybersecurity/images/Attend/media/exclusive-story-opportunities.webp",
  },
  {
    title: "Executive Networking Access",
    text: "Connect with senior delegates and speakers in Bengaluru.",
    icon: "/bengaluru/cybersecurity/images/Attend/media/networking-access.webp",
  },
];

const associationBenefits: CardItem[] = [
  {
    title: "Industry & Association Recognition",
    text: "Official supporting alliance status across the event and website.",
    icon: "/bengaluru/cybersecurity/images/Attend/partner/co-branding-opportunities.webp",
  },
  {
    title: "Member Qualification Pathway",
    text: "Priority nomination route for senior CISO, CIO, CTO and CRO members to apply for Delegate Passes.",
    icon: "/bengaluru/cybersecurity/images/Attend/partner/complimentary-delegate-passes.webp",
  },
  {
    title: "Co-Branded Ecosystem Outreach",
    text: "Joint executive communications and thought-leadership briefings.",
    icon: "/bengaluru/cybersecurity/images/Attend/partner/joint-marketing-campaigns.webp",
  },
  {
    title: "Digital & Social Amplification",
    text: "Collaborative promotion across Trescon's executive network and World AI Show channels.",
    icon: "/bengaluru/cybersecurity/images/Attend/partner/social-media-amplification.webp",
  },
  {
    title: "Faculty Nominations",
    text: "Nominate practitioners with direct responsibility for security strategy, risk or incident response.",
    icon: "/bengaluru/cybersecurity/images/Attend/partner/speaking-opportunities.webp",
  },
  {
    title: "VIP Networking Access",
    text: "Connect association leadership with senior security and technology delegates.",
    icon: "/bengaluru/cybersecurity/images/Attend/partner/networking-access.webp",
  },
  {
    title: "Post-Conference Synthesis",
    text: "Share the event's executive takeaways across the four pillars with your members.",
    icon: "/bengaluru/cybersecurity/images/Attend/partner/access-to-post-event-insights.webp",
  },
  {
    title: "Series Alliance",
    text: "Extend collaboration across the World AI Show Series in India.",
    icon: "/bengaluru/cybersecurity/images/Attend/partner/long-term-partnership-opportunities.webp",
  },
];

export function ArrowButton({
  children,
  href = "/bengaluru/cybersecurity/sponsorship-enquiry",
  variant = "solid",
}: {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "outline";
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-3.5 min-w-[178px] h-[49px] px-[25px] rounded-full text-[15px] font-extrabold transition-all duration-180 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(185,248,45,0.24)] cursor-pointer";
  const styles = {
    solid: "!text-white [color:#FFFFFF!important] bg-[#F15928] shadow-[0_6px_22px_rgba(241,89,40,0.34)] hover:bg-[#D9481A] hover:shadow-[0_10px_28px_rgba(241,89,40,0.5)]",
    outline: "!text-white [color:#FFFFFF!important] border-2 border-[#009EAD] bg-[#08121E]/85 shadow-[0_4px_18px_rgba(0,158,173,0.18)] hover:!border-[#00E5FF] hover:!bg-[#0069B8] hover:shadow-[0_8px_24px_rgba(0,105,184,0.4)]",
  };

  return (
    <a className={`${baseClasses} ${styles[variant]}`} href={href}>
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[15px] h-[15px] object-contain"
        aria-hidden="true"
      >
        <path
          d="M3.33334 8H12.6667"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.66666 4L12.6667 8L8.66666 12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export function NumberedCard({ item, index }: { item: CardItem; index: number }) {
  return (
    <article className="group relative min-h-[235px] p-7 border border-white/[0.17] rounded-[13px] bg-gradient-to-br from-[#00ceff]/12 to-[#996cff]/14 bg-[#050c1c]/80 shadow-[inset_0_0_28px_rgba(65,220,255,0.05),0_20px_60px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#18d4ff]/50 hover:shadow-[0_12px_36px_rgba(0,206,255,0.12),inset_0_0_24px_rgba(24,212,255,0.04)]">
      <span className="grid place-items-center w-11 h-11 mb-7 border border-white/8 rounded-[14px] text-cyan bg-[#030914]/72 text-[11px] font-extrabold select-none group-hover:text-[#06111f] group-hover:bg-[#C0F43C] group-hover:border-[#C0F43C] group-hover:shadow-[0_0_15px_rgba(192,244,60,0.35)] transition-all duration-300">
        {item.icon ? (
          <img src={item.icon} alt="" className="w-5 h-5 object-contain group-hover:brightness-0 transition-all duration-300" loading="lazy" />
        ) : index + 1 < 10 ? (
          `0${index + 1}`
        ) : (
          index + 1
        )}
      </span>
      <span className="absolute right-[25px] top-[30px] px-[9px] py-1 rounded-full text-cyan bg-[#12d7ff]/9 text-[11px] font-extrabold tracking-[1px] select-none group-hover:text-black group-hover:bg-[#C0F43C] transition-all duration-300">
        {index + 1 < 10 ? `0${index + 1}` : index + 1}
      </span>
      <h3 className="m-0 mb-2.5 text-white font-[850] text-[18px] leading-tight transition-colors duration-200 group-hover:text-[#C0F43C]">{item.title}</h3>
      <p className="m-0 text-white/62 text-[15px] leading-relaxed transition-colors duration-200 group-hover:text-white/80">{item.text}</p>
    </article>
  );
}

export function BenefitGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid grid-cols-4 gap-4 overflow-x-auto pb-1.5 max-[980px]:grid-cols-[repeat(4,280px)] max-sm:grid-cols-1">
      {items.map((item, index) => (
        <NumberedCard item={item} index={index} key={item.title} />
      ))}
    </div>
  );
}

export function SplitSection({
  id,
  eyebrow,
  title,
  text,
  button,
  buttonHref,
  imageAlt,
  imageSrc,
  reverse = false,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  text: ReactNode;
  button: string;
  buttonHref?: string;
  imageAlt: string;
  imageSrc: string;
  reverse?: boolean;
}) {
  return (
    <section className="py-[92px] bg-[#020b1c] max-sm:py-[66px]" id={id}>
      <div
        className={`grid grid-cols-[1fr_minmax(360px,47%)] items-center gap-[74px] w-[min(1120px,calc(100%-48px))] mx-auto max-[980px]:grid-cols-1 max-sm:gap-[34px]`}
      >
        <div className={`flex flex-col ${reverse ? "max-[980px]:order-none order-2" : "order-none"}`}>
          {eyebrow && (
            <p className="m-0 mb-[19px] text-white/78 text-[13px] font-[650] tracking-[3px] uppercase select-none">
              {eyebrow}
            </p>
          )}
          <h2 className="m-0 text-white font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(42px,5vw,62px)] max-sm:text-[38px] max-sm:tracking-[-1px]">
            {title}
          </h2>
          <div className="mt-6 mb-9 text-white/66 text-[19px] leading-relaxed max-sm:text-base">
            {text}
          </div>
          <div className="flex">
            <ArrowButton href={buttonHref || `#${id}`}>{button}</ArrowButton>
          </div>
        </div>
        <div className="relative overflow-hidden border border-[#55cfff]/22 rounded-[24px] bg-[#071426]/72 shadow-[0_0_44px_rgba(0,206,255,0.12)]">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#020b2c]/18 pointer-events-none" />
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto object-cover filter saturate-[0.96] brightness-[0.95]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

/* ================= BOTTOM CTA SECTION ================= */
export function AttendCTASection() {
  return (
    <section id="cta" className="py-[86px] pt-[86px] bg-[#020814] max-sm:py-[62px]">
      <div className="w-[min(980px,calc(100%-48px))] mx-auto p-[66px_48px] border border-[#18d4ff]/35 rounded-[36px] text-center bg-gradient-to-br from-[#061426] via-[#040e1d] to-[#020814] shadow-[0_24px_64px_rgba(0,0,0,0.6),0_0_32px_rgba(24,212,255,0.08),inset_0_1px_0_rgba(255,255,255,0.12)] max-sm:p-[42px_22px] max-sm:w-[min(100%-28px,1120px)] relative overflow-hidden">
        <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#18d4ff] to-transparent opacity-85" />
        <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-[#18d4ff]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-52 h-52 rounded-full bg-[#C0F43C]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <h2 className="max-w-[760px] mx-auto mb-8 text-white !text-white [color:#FFFFFF!important] font-[850] leading-[1.08] tracking-[-1.8px] text-[clamp(36px,5vw,56px)] max-sm:text-[32px] max-sm:tracking-[-1px]">
            <span className="text-white !text-white [color:#FFFFFF!important]">Be in the room where </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00CEFF] to-[#C0F43C]">enterprise cyber risk</span>
            <span className="text-white !text-white [color:#FFFFFF!important]"> gets decided.</span>
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-8 mb-12 max-sm:flex-col max-sm:w-full">
            <a
              href="/bengaluru/cybersecurity/attend/delegate"
              className="inline-flex items-center justify-center gap-2 min-w-[178px] h-[52px] px-[34px] py-[15px] rounded-full text-[15px] font-extrabold text-white !text-white [color:#FFFFFF!important] bg-[#F15928] shadow-[0_8px_24px_rgba(241,89,40,0.35)] hover:shadow-[0_12px_32px_rgba(241,89,40,0.5)] hover:scale-[1.03] transition-all duration-200 cursor-pointer max-sm:w-full"
            >
              Apply for a Delegate Pass
              <span className="text-[16px] font-bold">→</span>
            </a>
            <a
              href="/bengaluru/cybersecurity/sponsorship-enquiry"
              className="inline-flex items-center justify-center min-w-[178px] h-[52px] px-[34px] py-[15px] rounded-full text-[15px] font-extrabold text-white !text-white [color:#FFFFFF!important] bg-white/5 border border-white/25 hover:border-[#18d4ff] hover:bg-[#18d4ff]/10 hover:scale-[1.03] transition-all duration-200 cursor-pointer max-sm:w-full"
            >
              Enquire about sponsorship
            </a>
          </div>

          <div className="w-full h-[1px] bg-white/10 my-8" />

          <div className="grid grid-cols-3 w-full gap-8 max-sm:grid-cols-1 max-sm:gap-4 text-center">
            <div className="flex flex-col items-center">
              <span className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#00E5FF] !text-[#00E5FF] [color:#00E5FF!important] mb-2 font-mono">
                Date
              </span>
              <strong className="text-[17px] font-extrabold text-white !text-white [color:#FFFFFF!important] tracking-wide">
                20–21 July 2027 · 2 Days
              </strong>
            </div>

            <div className="flex flex-col items-center border-l border-white/10 max-sm:border-l-0 max-sm:border-t max-sm:pt-4 max-sm:mt-1">
              <span className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#00E5FF] !text-[#00E5FF] [color:#00E5FF!important] mb-2 font-mono">
                Location
              </span>
              <strong className="text-[17px] font-extrabold text-white !text-white [color:#FFFFFF!important] tracking-wide text-center">
                Bengaluru, India
              </strong>
            </div>

            <div className="flex flex-col items-center border-l border-white/10 max-sm:border-l-0 max-sm:border-t max-sm:pt-4 max-sm:mt-1">
              <span className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#00E5FF] !text-[#00E5FF] [color:#00E5FF!important] mb-2 font-mono">
                Organiser
              </span>
              <strong className="text-[17px] font-extrabold text-white !text-white [color:#FFFFFF!important] tracking-wide">
                Organised by Trescon
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AttendOverviewSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[760px] -mt-[102px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[280px] overflow-hidden max-sm:min-h-[690px] max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[240px]"
        id="overview"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat -scale-x-100 pointer-events-none z-0"
          style={{
            backgroundImage: 'url("/bengaluru/cybersecurity/images/Attend/Mumbai-attend-overview.jpg")',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(2, 7, 19, 0.88) 0%, rgba(2, 7, 19, 0.48) 42%, rgba(2, 7, 19, 0.05) 100%)",
          }}
        />
        <div className="heroBackdrop absolute bottom-0 right-[-3%] w-[58%] h-[84%] opacity-0 pointer-events-none" />
        <div className="relative z-10 max-w-[820px]">
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(48px,6vw,76px)] max-sm:text-[42px]">
            Where AI security becomes <GradientText>enterprise strategy.</GradientText>
          </h1>
          <p className="max-w-[730px] mt-[26px] mb-0 text-white/88 text-[20px] leading-normal max-sm:text-[17px]">
            A two-day, CISO-led summit bringing together 300+ CISOs, CIOs, CTOs, CROs and senior risk and technology leaders to secure AI adoption, modernise cyber defence and build resilience across the enterprise.
          </p>
          <div className="flex flex-wrap gap-3.5 mt-10 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/bengaluru/cybersecurity/attend/delegate" variant="solid">
              Apply for a Delegate Pass
            </ArrowButton>
            <ArrowButton href="/bengaluru/cybersecurity/sponsorship-enquiry" variant="outline">
              Enquire about sponsorship
            </ArrowButton>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-[86px] pt-[74px] bg-gradient-to-b from-[#020c21] to-[#031127] text-center max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto">
          <h2 className="max-w-[820px] mx-auto text-white font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(40px,5vw,60px)] max-sm:text-[38px] max-sm:tracking-[-1px]">
            The <GradientText>Scale</GradientText>
          </h2>
          <AttendStats />
        </div>
      </section>

      {/* Access Pathway Section */}
      <section className="py-[86px] bg-[#020c21] max-sm:py-[62px]" id="pass-matrix">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto">
          <div className="text-center mb-12">
            <h2 className="max-w-[820px] mx-auto text-white font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(36px,4.6vw,54px)]">
              Your <GradientText>access pathway</GradientText>
            </h2>
          </div>

          <div className="max-w-[760px] mx-auto">
            <div className="flex flex-col justify-between p-9 rounded-[24px] border border-[#C0F43C]/45 bg-gradient-to-br from-[#C0F43C]/10 via-[#041022] to-[#041022] shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <div>
                <h3 className="text-white font-extrabold text-[26px] leading-[1.2] mb-3">
                  Delegate Pass: Only by Invitation and Qualification
                </h3>
                <p className="text-white/80 text-[16px] leading-[1.6] mb-5">
                  For senior security, technology and risk leaders. Passes are issued by invitation, subject to qualification based on active security or risk responsibility.
                </p>
                <ul className="space-y-2.5 mb-8 text-white/75 text-[15px] list-none p-0">
                  <li className="flex items-start gap-2.5"><span className="text-[#C0F43C] font-bold">✓</span> <strong>Target audience:</strong> CISOs, CSOs, CIOs, CTOs, CROs, CDOs, heads of SOC, GRC and resilience</li>
                  <li className="flex items-start gap-2.5"><span className="text-[#C0F43C] font-bold">✓</span> <strong>Inclusions:</strong> 2-day plenary access, practitioner case studies, executive networking</li>
                  <li className="flex items-start gap-2.5"><span className="text-[#C0F43C] font-bold">✓</span> <strong>Privacy:</strong> Separate, unbundled consent for name/title and contact details</li>
                </ul>
              </div>
              <div>
                <ArrowButton href="/bengaluru/cybersecurity/attend/delegate" variant="solid">
                  Apply for a Delegate Pass
                </ArrowButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video & Focus Areas Section */}
      <section className="py-[86px] bg-gradient-to-b from-[#031127] to-[#020b1c] text-center max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <h2 className="max-w-[820px] mx-auto text-white font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(40px,5vw,60px)] max-sm:text-[38px] max-sm:tracking-[-1px]">
            Look back at the previous edition of <GradientText>World AI Show</GradientText>
          </h2>
          <div className="relative w-[min(700px,100%)] aspect-video mx-auto my-[58px] border-[3px] border-[#8559ff]/58 rounded-[13px] overflow-hidden shadow-[0_0_24px_rgba(151,108,255,0.35)]">
            <iframe
              src="https://www.youtube.com/embed/rIHUrmsdY2U?rel=0&modestbranding=1"
              title="World AI Show Aftermovie"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            />
          </div>
          <h3 className="max-w-[820px] mx-auto mt-16 mb-10 text-white font-[850] leading-[1.08] tracking-[-1.5px] text-[clamp(32px,4vw,46px)] max-sm:text-[30px]">
            The key focus areas of <GradientText>this event</GradientText>
          </h3>
          <div className="grid grid-cols-3 gap-4 mb-9 max-[980px]:grid-cols-[repeat(3,310px)] max-sm:grid-cols-1">
            {valueCards.map((card, index) => (
              <NumberedCard item={card} index={index} key={card.title} />
            ))}
          </div>
        </div>
      </section>

      <AttendCTASection />
    </>
  );
}

export function AttendDelegateSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[760px] -mt-[102px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[280px] overflow-hidden bg-cover bg-[position:right_center] bg-no-repeat max-sm:min-h-[690px] max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[240px]"
        style={{ backgroundImage: 'url("/bengaluru/cybersecurity/images/Attend/Delegates-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020713]/88 via-[#020713]/48 to-transparent z-0 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#18d4ff]/4 blur-[110px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#C0F43C]/2 blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-[820px]">
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(44px,5.5vw,68px)] max-sm:text-[38px]">
            Built for the leaders <GradientText>who own the risk.</GradientText>
          </h1>
          <p className="max-w-[710px] mt-[24px] mb-0 text-white/88 text-[19px] leading-normal">
            Join an exclusive cohort of 300+ pre-qualified security, technology and risk leaders. Access is by invitation and qualification, validated so every seat represents active security or risk responsibility.
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="#delegate-qualification">Apply for a Delegate Pass</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Submit Qualification Enquiry"
        buttonHref="/bengaluru/cybersecurity/general-enquiry"
        id="delegate-qualification"
        eyebrow="Qualification & Consent Governance"
        imageAlt="Invited Security Leaders at World AI Show"
        imageSrc="/bengaluru/cybersecurity/images/Attend/AI-decision-maker.webp"
        title={<>Qualification &amp; <GradientText>Consent Governance</GradientText></>}
        text={
          <>
            <p><strong>Target audience:</strong> CISOs, CSOs, CIOs, CTOs, CROs, CDOs, enterprise architects, heads of SOC, incident response, threat intelligence, cloud security, AppSec, IAM, OT security, GRC and privacy.</p>
            <p className="mt-3"><strong>Inclusions:</strong> 2-day plenary access, practitioner case studies and executive networking.</p>
            <p className="mt-3"><strong>Privacy &amp; consent:</strong> Separate, unbundled consent checkboxes for name/title and contact details. Delegate contact details are shared only where consented.</p>
          </>
        }
      />

      <section className="py-[86px] bg-gradient-to-b from-[#020b1c] to-[#031127] max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <h2 className="m-0 mb-[42px] text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-center text-[clamp(40px,5vw,60px)] max-sm:text-[38px] max-sm:tracking-[-1px]">
            Delegate Pass <GradientText>Inclusions &amp; Standards</GradientText>
          </h2>
          <BenefitGrid items={gatewayCards} />
        </div>
      </section>

      <AttendCTASection />
    </>
  );
}

export function AttendSponsorSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[760px] -mt-[102px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[280px] overflow-hidden bg-cover bg-[position:right_center] bg-no-repeat max-sm:min-h-[690px] max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[240px]"
        style={{ backgroundImage: 'url("/bengaluru/cybersecurity/images/Attend/Sponsor-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020713]/88 via-[#020713]/48 to-transparent z-0 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#18d4ff]/4 blur-[110px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#C0F43C]/2 blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-[960px]">
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.08] tracking-[-1.8px] text-[clamp(44px,5.5vw,68px)] max-sm:text-[38px]">
            Your buyers are rethinking security now, <br className="hidden sm:inline" />
            <GradientText>not after the incident.</GradientText>
          </h1>
          <p className="max-w-[710px] mt-[24px] mb-0 text-white/88 text-[19px] leading-normal">
            Enterprise security decisions involve CISOs and the wider technology, risk and data leadership around them. Reach them directly through stage thought leadership, curated boardrooms and structured meetings, all anchored in a practitioner-first programme.
          </p>
          <div className="flex flex-wrap gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/bengaluru/cybersecurity/sponsorship-enquiry">Enquire About Sponsorship</ArrowButton>
            <ArrowButton href="/bengaluru/cybersecurity/sponsorship-enquiry" variant="outline">Download Prospectus</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Enquire About Sponsorship"
        buttonHref="/bengaluru/cybersecurity/sponsorship-enquiry"
        id="sponsor"
        eyebrow="Standardised Speaking & Partnership Framework"
        imageAlt="Standardised Speaking and Partnership Framework"
        imageSrc="/bengaluru/cybersecurity/images/Attend/brand-center-innovation.webp"
        reverse={false}
        title={<>Put your solutions in front of the <GradientText>security buying circle</GradientText></>}
        text={
          <>
            <p>
              World AI Show: The Cybersecurity Edition puts your leadership directly in front of CISOs and the senior technology, risk and data leaders who influence security decisions. Sponsored sessions are standardised at 30 minutes, vetted for implementation proof and strictly capped, so your message earns attention through evidence rather than volume.
            </p>
            <p className="mt-4 text-[15px] font-semibold text-[#c0f43c]">
              Packages: Presenting · Powered by · Signature · Gold · Silver · Bronze · VIP Experiences · Turnkey Partner
            </p>
          </>
        }
      />

      <section className="py-[86px] bg-gradient-to-b from-[#020b1c] to-[#031127] max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <h2 className="m-0 mb-[42px] text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-center text-[clamp(40px,5vw,60px)] max-sm:text-[38px] max-sm:tracking-[-1px]">
            Commercial <GradientText>Partnership Benefits</GradientText>
          </h2>
          <BenefitGrid items={sponsorBenefits} />
        </div>
      </section>

      <AttendCTASection />
    </>
  );
}

export function AttendMediaSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[760px] -mt-[102px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[280px] overflow-hidden bg-cover bg-[position:right_center] bg-no-repeat max-sm:min-h-[690px] max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[240px]"
        style={{ backgroundImage: 'url("/bengaluru/cybersecurity/images/Attend/Media-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020713]/88 via-[#020713]/48 to-transparent z-0 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#18d4ff]/4 blur-[110px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#C0F43C]/2 blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-[820px]">
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(44px,5.5vw,68px)] max-sm:text-[38px]">
            Cover the CISO-led conversation on <GradientText>securing AI.</GradientText>
          </h1>
          <p className="max-w-[710px] mt-[24px] mb-0 text-white/88 text-[19px] leading-normal">
            Accredited press credentials, interview access and 1-on-1 briefings with security and technology leaders, covering how India&apos;s enterprises secure AI adoption and build resilience.
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/bengaluru/cybersecurity/media-enquiry">Apply for Media Accreditation</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Apply for Media Accreditation"
        buttonHref="/bengaluru/cybersecurity/media-enquiry"
        id="media-partner"
        imageAlt="Media interview coverage"
        imageSrc="/bengaluru/cybersecurity/images/Attend/cover-southeast.webp"
        title={<>Press Credentials &amp; <GradientText>Executive Interview Access</GradientText></>}
        text={
          <p>
            World AI Show: The Cybersecurity Edition convenes 300+ senior security, technology and risk leaders and 45+ speakers and panellists across 2 days. Accredited journalists, editors and research analysts receive press credentials, interview access and distribution opportunities across the World AI Show Series in India.
          </p>
        }
      />

      <section className="py-[86px] bg-gradient-to-b from-[#020b1c] to-[#031127] max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <BenefitGrid items={mediaBenefits} />
        </div>
      </section>

      <AttendCTASection />
    </>
  );
}

export function AttendAssociationSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[760px] -mt-[102px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[280px] overflow-hidden bg-cover bg-[position:right_center] bg-no-repeat max-sm:min-h-[690px] max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[240px]"
        style={{ backgroundImage: 'url("/bengaluru/cybersecurity/images/Attend/Mumbai-associationpartner-header.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020713]/88 via-[#020713]/48 to-transparent z-0 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#18d4ff]/4 blur-[110px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#C0F43C]/2 blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-[820px]">
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(44px,5.5vw,68px)] max-sm:text-[38px]">
            Partner with the <GradientText>World AI Show Series</GradientText>
          </h1>
          <p className="max-w-[710px] mt-[24px] mb-0 text-white/88 text-[19px] leading-normal">
            Collaborate with industry councils, trade chambers, standards bodies and professional security communities to bring the cyber resilience conversation to their members.
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/bengaluru/cybersecurity/association-enquiry">Partner with the Series</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Partner with the Series"
        buttonHref="/bengaluru/cybersecurity/association-enquiry"
        id="association-partner"
        imageAlt="Industry Councils, Trade Chambers & Professional Security Bodies"
        imageSrc="/bengaluru/cybersecurity/images/Attend/strengthening-ai-ecosystem.webp"
        reverse={false}
        title={<>Industry Councils, Trade Chambers &amp; <GradientText>Professional Security Bodies</GradientText></>}
        text={
          <p>
            World AI Show: The Cybersecurity Edition welcomes industry councils, chambers, standards bodies and professional security associations as official supporting alliances. Connect your members with senior security and technology leaders, nominate practitioners with real implementation experience, and collaborate across the India Series.
          </p>
        }
      />

      <section className="py-[86px] bg-gradient-to-b from-[#020b1c] to-[#031127] max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <BenefitGrid items={associationBenefits} />
        </div>
      </section>

      <AttendCTASection />
    </>
  );
}

export default function AttendPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Attend" subNavItems={subNav} activeSubNavItem="Overview" />
      <AttendOverviewSection />
      <FooterSection />
    </main>
  );
}
