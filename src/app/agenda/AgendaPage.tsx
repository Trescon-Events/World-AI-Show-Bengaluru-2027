"use client";

import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { useState } from "react";

import { FooterSection } from "../components/sections/FooterSection";
import { Header } from "../components/sections/Header";

import styles from "./AgendaPage.module.css";
import "./agenda.css";
import { AgendaSection } from "../components/sections/AgendaSection";
import { SpeakersSection } from "../components/sections/SpeakersSection";
import { SpeakerCallToStage } from "../speakers/SpeakerCallToStage";

const subNav = ["Overview", "The 2030 Vision", "Agenda", "Themes", "Call for Speakers"];

const formats = [
  {
    title: "Plenary Keynotes & Panels",
    text: "CISOs, CIOs, CTOs, CROs and security leaders dissecting what changes between AI pilot and production, securing models and agents, and autonomous cyber defence.",
    image: "/bengaluru/cybersecurity/images/agenda/keynotes.webp"
  },
  {
    title: "30-Minute Partner Thought Leadership",
    text: "Dedicated 30-minute standalone main-stage sessions examining enterprise architectures, AI security frameworks, and verified practitioner outcomes.",
    image: "/bengaluru/cybersecurity/images/agenda/panel-discussion.webp"
  },
  {
    title: "Closed-Door CISO Boardrooms",
    text: "Curated 15-CXO closed-door boardroom discussions operating under the Chatham House Rule alongside live production threat case studies.",
    image: "/bengaluru/cybersecurity/images/agenda/Fireside.webp"
  }
];

const seriesRoadmap = [
  ["01 · World AI Show: Enterprise Edition", "The premier enterprise AI roadmap event establishing baseline operational models.", "/bengaluru/cybersecurity/images/agenda/Enterprise.webp"],
  ["02 · World AI Show: The Cybersecurity Edition, Bengaluru", "20–21 July 2027 · 2 Days. Securing the AI-Powered Enterprise: where AI security becomes enterprise strategy.", "/bengaluru/cybersecurity/images/agenda/Growing-dig.webp"],
  ["03 · Series Finale (late 2027)", "Culminating the 2027 World AI Show Series, uniting enterprise leaders across technology, security and governance.", "/bengaluru/cybersecurity/images/agenda/Investment-innovation.webp"]
];

function GradientText({ children }: { children: ReactNode }) {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00CEFF] to-[#C0F43C]">
      {children}
    </span>
  );
}

function ArrowSVG() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 object-contain transition-transform duration-200 group-hover:translate-x-1"
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
  );
}

function setPointerGlow(event: PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
}

function IconCard({ title, text, icon, index }: { title: string; text: string; icon: string; index: number }) {
  return (
    <article className={styles.iconCard}>
      <span className={styles.iconBadge}><img src={icon} alt="" loading="lazy" /></span>
      <span className={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function AgendaTabs() {
  return (
    <section className={styles.timelineSection} id="agenda-timeline">
      <div className={styles.container}>
        <div className={styles.timelineIntro}>
          <h2>Two Days. <GradientText>Four Critical Pillars.</GradientText></h2>
          <p className="text-white/70 text-[17px] max-w-[720px] mx-auto mt-3">
            Day 1: Tuesday, 20 July 2027 &nbsp;|&nbsp; Day 2: Wednesday, 21 July 2027 &nbsp;|&nbsp; Bengaluru, India · IST (UTC+5:30)
          </p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineHead}>
            <span>DAY 1: TUESDAY, 20 JULY 2027 | BENGALURU, INDIA · IST (UTC+5:30)</span>
            <span>20–21 July 2027 · 2 Days</span>
          </div>

          <div className="p-12 text-center rounded-[18px] border border-[#18d4ff]/25 bg-[#050d20]/85 my-8">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[2px] bg-[#C0F43C]/15 text-[#C0F43C] border border-[#C0F43C]/30 mb-4">
              Programme Schedule in Curation
            </span>
            <h3 className="text-white text-2xl font-bold mb-3">Agenda yet to be shared</h3>
            <p className="text-white/70 max-w-xl mx-auto mb-6">
              The full 2-day session architecture, 30-minute keynote sessions, and closed-door CISO boardrooms are being finalized. Apply for delegate passes or enquire about speaking.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="/bengaluru/cybersecurity/attend/delegate"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-extrabold text-[#06111f] bg-[#C0F43C] hover:opacity-90 transition-opacity"
              >
                Apply for Delegate Pass <ArrowSVG />
              </a>
              <a
                href="/bengaluru/cybersecurity/speaker-enquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-extrabold text-white border border-[#18d4ff]/40 bg-[#18d4ff]/10 hover:bg-[#18d4ff]/20 transition-colors"
              >
                Apply to Speak <ArrowSVG />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AgendaOverview() {
  return (
    <>
      <section className={`${styles.hero} pt-[200px]`} id="overview">
        <div className={styles.container}>
          <h1>Enterprise security in the age of AI:<br /><GradientText>the decisions ahead.</GradientText></h1>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.split}>
          <div>
            <h2>Securing AI &amp; <GradientText>Defending with AI.</GradientText></h2>
            <p>
              Moving beyond awareness to practical enterprise questions: which AI systems and workflows can be trusted, how models, agents and data flows are protected, and how AI strengthens detection and response.
            </p>
            <p>
              As Edition 53 of the World AI Show series, Bengaluru convenes 300+ qualified CXOs, CISOs, CIOs, CTOs, CROs and security leaders across two days to address the operational realities of securing AI in production.
            </p>
          </div>
          <img src="/bengaluru/cybersecurity/images/agenda/About.webp" alt="Security executives at World AI Show" loading="lazy" />
        </div>
      </section>

      <section className={styles.formatsSection}>
        <div className={styles.container}>
          <h2>The formats <GradientText>driving execution.</GradientText></h2>
          <p>A working executive programme across 2 Days — every session structured for enterprise security decision-makers.</p>

          <div className={styles.formatGrid}>
            {formats.map((item) => (
              <article className={styles.formatCard} key={item.title}>
                <img src={item.image} alt="" loading="lazy" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta} id="cta">
        <div className={styles.ctaBox}>
          <h2>Be in the room where <GradientText>enterprise cyber risk gets decided.</GradientText></h2>
          <p>Apply for a Delegate Pass (by invitation and qualification), enquire about commercial sponsorship, or apply to join the enterprise faculty.</p>
          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.solid} group`} href="/bengaluru/cybersecurity/attend/delegate">Apply for a Delegate Pass <ArrowSVG /></a>
            <a className={`${styles.button} ${styles.outline} group`} href="/bengaluru/cybersecurity/sponsorship-enquiry">Enquire about sponsorship <ArrowSVG /></a>
          </div>
          <dl>
            <div><dt>Dates</dt><dd>20–21 July 2027 · 2 Days</dd></div>
            <div><dt>Venue</dt><dd>Bengaluru, India</dd></div>
            <div><dt>Series</dt><dd>Edition 53 · The Cybersecurity Edition</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}

const visionCards = [
  {
    title: "Securing AI & Defending with AI",
    text: "Moving beyond awareness to practical enterprise questions: which AI systems and workflows can be trusted, how models, agents and data flows are protected, and how AI strengthens detection and response.",
  },
  {
    title: "India's Cyber Ecosystem",
    text: "India is not only a large enterprise technology market. DSCI's Indian Cybersecurity Product Landscape Report 3.0 identifies more than 400 Indian cybersecurity companies with over US$4.7 billion in revenue, a reported 34% CAGR between 2020 and 2025, and 55% operating in international markets. Alongside the growth of cyber GCCs and specialist talent, this creates an opportunity to examine India's contribution to global cyber resilience and innovation.",
  },
];

export function AgendaVision() {
  const [hoveredCard, setHoveredCard] = useState<number>(0);

  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="the-2030-vision-hero"
        style={{
          background: "linear-gradient(90deg, rgba(2, 7, 19, 0.88) 0%, rgba(2, 7, 19, 0.52) 42%, rgba(2, 7, 19, 0.08) 100%), url(/bengaluru/cybersecurity/images/agenda/Vision-2030-bg.webp) right center / cover no-repeat"
        }}
      >
        <div className={styles.container}>
          <h1>Enterprise security in the age of AI:<br /><GradientText>the decisions ahead.</GradientText></h1>
        </div>
      </section>

      <section className={styles.visionSection} id="the-2030-vision">
        <div className={styles.container}>
          <div className="grid grid-cols-[0.95fr_1.05fr] gap-12 items-stretch max-[980px]:grid-cols-1 mb-10">
            <div className="relative rounded-[22px] overflow-hidden border border-[#20d5ff]/30 bg-[#040d1d] shadow-[0_0_42px_rgba(0,206,255,0.14)] min-h-[420px]">
              <img
                src="/bengaluru/cybersecurity/images/agenda/India-enterprise-2030Vision.jpg"
                alt="Security executive panel discussion at World AI Show"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col gap-4 justify-between">
              {visionCards.map((card, idx) => {
                const isActive = idx === hoveredCard;
                return (
                  <div
                    key={card.title}
                    onMouseEnter={() => setHoveredCard(idx)}
                    className={`text-left p-7 rounded-[18px] border transition-all duration-300 flex-1 flex flex-col justify-center ${
                      isActive
                        ? "border-[#C0F43C]/65 bg-gradient-to-br from-[#C0F43C]/10 via-[#06152d] to-[#040d1d] shadow-[0_12px_32px_rgba(192,244,60,0.12)]"
                        : "border-white/12 bg-[#040d1d]/75 hover:border-[#C0F43C]/65"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <h3 className={`m-0 font-extrabold text-[19px] leading-snug transition-colors duration-300 ${isActive ? "text-[#C0F43C]" : "text-white"}`}>
                        {card.title}
                      </h3>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-bold transition-colors duration-300 ${isActive ? "bg-[#C0F43C] text-[#06111F]" : "bg-white/10 text-white/60"}`}>
                        0{idx + 1}
                      </span>
                    </div>
                    <p className="m-0 text-white/75 text-[15.5px] leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <blockquote className="w-full m-0 p-9 md:px-12 rounded-[22px] border-[1.5px] border-[#18d4ff]/45 bg-gradient-to-br from-[#040b1b]/95 to-[#0a1834]/98 shadow-[0_0_35px_rgba(24,212,255,0.18),inset_0_0_25px_rgba(24,212,255,0.05)] text-[#f7f9ff] text-[clamp(20px,2.4vw,25px)] font-[750] leading-[1.45] text-center">
            &ldquo;The scale of observed activity is one signal of the challenge: 369.01 million malware detections across 8.44 million endpoints.&rdquo;
            <cite className="block mt-4 text-[11px] font-bold tracking-[2px] uppercase text-white/50 not-italic">
              &mdash; DSCI–Seqrite, India Cyber Threat Report 2025 (Seqrite Labs telemetry, Oct 2023–Sep 2024)
            </cite>
          </blockquote>
        </div>
      </section>

      <section className={styles.gatewaySection}>
        <div className={styles.container}>
          <h2>The Series <GradientText>Roadmap.</GradientText></h2>
          <p>Where AI security becomes enterprise strategy across the World AI Show Series.</p>
          <div className={styles.cardGrid}>
            {seriesRoadmap.map(([title, text, icon], index) => <IconCard icon={icon} index={index} key={title} text={text} title={title} />)}
          </div>
        </div>
      </section>

      <AgendaSection
        title={<>Four Pillars. <GradientText>Two Days.</GradientText></>}
        subtitle="Curated Agenda"
        description="AI-enabled risk, resilience and enterprise accountability run across all four."
      />
    </>
  );
}

export function AgendaLiveTimeline() {
  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="agenda-timeline-hero"
        style={{
          background:
            "linear-gradient(90deg, rgba(2, 7, 19, 0.88) 0%, rgba(2, 7, 19, 0.52) 42%, rgba(2, 7, 19, 0.08) 100%), url(/bengaluru/cybersecurity/images/agenda/mumbai-agenda-hero.jpg) right center / cover no-repeat",
        }}
      >
        <div className={styles.container}>
          <h1><GradientText>Event Agenda</GradientText></h1>
        </div>
      </section>
      <AgendaTabs />
      <section className={styles.finalCta} id="cta">
        <div className={styles.ctaBox}>
          <h2>Be in the room where <GradientText>enterprise cyber risk gets decided.</GradientText></h2>
          <p>Apply for a Delegate Pass (by invitation and qualification), enquire about commercial sponsorship, or apply to join the enterprise faculty.</p>
          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.solid} group`} href="/bengaluru/cybersecurity/sponsorship-enquiry">Enquire about sponsorship <ArrowSVG /></a>
            <a className={`${styles.button} ${styles.outline} group`} href="/bengaluru/cybersecurity/speaker-enquiry">Apply to speak <ArrowSVG /></a>
          </div>
          <dl>
            <div><dt>Dates</dt><dd>20–21 July 2027 · 2 Days</dd></div>
            <div><dt>Venue</dt><dd>Bengaluru, India</dd></div>
            <div><dt>Series</dt><dd>Edition 53 · The Cybersecurity Edition</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}

export function AgendaThemes() {
  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="agenda-themes-hero"
        style={{
          background: "linear-gradient(90deg, rgba(2, 7, 19, 0.88) 0%, rgba(2, 7, 19, 0.48) 42%, rgba(2, 7, 19, 0.05) 100%), url(/bengaluru/cybersecurity/images/agenda/mumbai-agenda-themes.jpg) right center / cover no-repeat"
        }}
      >
        <div className={styles.container}>
          <h1>Four Pillars. <br /><GradientText>Two Days.</GradientText></h1>
          <p className={styles.heroPara}>
            AI-enabled risk, resilience and enterprise accountability run across all four.
          </p>
        </div>
      </section>
      <AgendaSection
        title={<>Four Pillars. <GradientText>Two Days.</GradientText></>}
        subtitle="Curated Agenda"
        description="AI-enabled risk, resilience and enterprise accountability run across all four."
      />
      <section className="relative pb-[104px] bg-[#051224]/70 max-sm:pb-[72px]">
        <div className={styles.container}>
          <div className={styles.brochureCta}>
            <div>
              <h3>Get the commercial partnership prospectus.</h3>
              <p>Full 2-day programme architecture, 30-minute stage sessions, partnership specifications and closed-door CISO boardrooms.</p>
            </div>
            <a
              className={`${styles.button} ${styles.solid} group`}
              href="/bengaluru/cybersecurity/sponsorship-enquiry"
              style={{ minWidth: "220px" }}
            >
              Enquire about sponsorship
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 object-contain transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" style={{ marginLeft: "8px" }}>
                <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.66666 4L12.6667 8L8.66666 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className={styles.finalCta} id="cta">
        <div className={styles.ctaBox}>
          <h2>Be in the room where <GradientText>enterprise cyber risk gets decided.</GradientText></h2>
          <p>Apply for a Delegate Pass (by invitation and qualification), enquire about commercial sponsorship, or apply to join the enterprise faculty.</p>
          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.solid} group`} href="/bengaluru/cybersecurity/sponsorship-enquiry">Enquire about sponsorship <ArrowSVG /></a>
            <a className={`${styles.button} ${styles.outline} group`} href="/bengaluru/cybersecurity/speaker-enquiry">Apply to speak <ArrowSVG /></a>
          </div>
          <dl>
            <div><dt>Dates</dt><dd>20–21 July 2027 · 2 Days</dd></div>
            <div><dt>Venue</dt><dd>Bengaluru, India</dd></div>
            <div><dt>Series</dt><dd>Edition 53 · The Cybersecurity Edition</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}

export function AgendaCallForSpeakers() {
  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="agenda-speakers-hero"
        style={{
          background: "linear-gradient(90deg, rgba(2, 7, 19, 0.88) 0%, rgba(2, 7, 19, 0.52) 42%, rgba(2, 7, 19, 0.08) 100%), url(/bengaluru/cybersecurity/images/agenda/Call-speakers-bg.webp) right center / cover no-repeat",
          alignItems: "center",
          minHeight: "750px",
          marginTop: "0",
          display: "flex"
        }}
      >
        <div className={styles.container}>
          <h1 className="text-white font-[850] tracking-[-2px] leading-[1.06] text-[clamp(44px,6vw,72px)] max-w-[860px]">
            If you&apos;ve led security through the AI shift,{" "}
            <GradientText>take the stage.</GradientText>
          </h1>
        </div>
      </section>
      <SpeakerCallToStage />
      <SpeakersSection
        heading={
          <>
            The Faculty: <GradientText>Curated for Bengaluru 2027</GradientText>
          </>
        }
      />
    </>
  );
}

export function AgendaPage() {
  return (
    <>
      <main className={`${styles.page} page-agenda`}>
        <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="Overview" />
        <AgendaOverview />
      </main>
      <FooterSection />
    </>
  );
}
