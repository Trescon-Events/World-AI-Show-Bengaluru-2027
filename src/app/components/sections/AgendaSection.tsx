"use client";

import { type ReactNode } from "react";
import { GradientText } from "../Shared";

const themeItems = [
  {
    label: "Securing AI & Defending with AI",
    heading: "Securing AI & Defending with AI",
    description:
      "Protect AI models, agents and data flows. Counter AI-enabled malware, deepfakes, prompt injection and model theft. Use AI in SOC triage and automation.",
    image: "/bengaluru/cybersecurity/images/agenda/keynotes.webp",
  },
  {
    label: "Modern Cyber Defence",
    heading: "Modern Cyber Defence",
    description:
      "Threat intelligence, detection engineering, SOC modernisation, ransomware defence, incident response and recovery.",
    image: "/bengaluru/cybersecurity/images/agenda/panel-discussion.webp",
  },
  {
    label: "Securing the Expanding Attack Surface",
    heading: "Securing the Expanding Attack Surface",
    description:
      "Cloud and hybrid, identity and Zero Trust, data and application security, supply chain, third-party risk, OT/IoT, critical infrastructure.",
    image: "/bengaluru/cybersecurity/images/agenda/driving-malaysia-stage.webp",
  },
  {
    label: "CISO Leadership & India's Cyber Ecosystem",
    heading: "CISO Leadership & India's Cyber Ecosystem",
    description:
      "Board-level cyber risk, regulation, resilience, talent, cyber GCCs, Indian product innovation and R&D.",
    image: "/bengaluru/cybersecurity/images/agenda/driving-malaysia-speakers.webp",
  },
];

function ThemeIcon({ index }: { index: number }) {
  const normalized = ((index % 5) + 5) % 5;
  if (normalized === 0) {
    return (
      <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4 4 8l8 4 8-4-8-4Z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 16 8 4 8-4" />
      </svg>
    );
  }
  if (normalized === 1) {
    return (
      <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 17h10a4 4 0 0 0 0-8 6 6 0 0 0-11.5 2A3.5 3.5 0 0 0 7 17Z" />
      </svg>
    );
  }
  if (normalized === 2) {
    return (
      <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20h16" />
        <path d="M6 20V9h5v11" />
        <path d="M13 20V4h5v16" />
        <path d="M8 12h1M8 15h1M15 8h1M15 11h1M15 14h1" />
      </svg>
    );
  }
  if (normalized === 3) {
    return (
      <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4v5" />
        <path d="M6 14h12" />
        <path d="M8 20h8" />
        <path d="M12 9 6 14l6 5 6-5-6-5Z" />
      </svg>
    );
  }
  return (
    <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 4 7v6c0 5 3.4 8.8 8 10 4.6-1.2 8-5 8-10V7l-8-4Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function AgendaSection({
  title = (
    <>
      Four Pillars. <GradientText>Two Days.</GradientText>
    </>
  ),
  subtitle = "Curated Agenda",
  description = "Protect AI models, defend expanding attack surfaces, and lead board-level cyber resilience across four critical tracks.",
}: {
  title?: ReactNode;
  subtitle?: ReactNode | null;
  description?: ReactNode;
}) {
  // Double the items for seamless continuous marquee scrolling
  const marqueeItems = [...themeItems, ...themeItems];

  return (
    <section
      className="relative py-[104px] bg-gradient-to-b from-[#020a18]/96 to-[#051224]/70 max-sm:py-[72px]"
      id="agenda"
    >
      <style>{`
        @keyframes pillarContinuousSlide {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .pillar-marquee-track {
          display: flex;
          width: max-content;
          animation: pillarContinuousSlide 28s linear infinite;
          will-change: transform;
        }
        .pillar-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        {/* Headings */}
        <h2 className="text-center font-[850] text-white leading-[1.04] tracking-[-2px] text-[clamp(42px,5.2vw,60px)]">
          {title}
        </h2>
        {description && (
          <p className="max-w-[920px] mx-auto mt-6 text-center text-muted text-[20px] leading-[1.45] mb-[44px]">
            {description}
          </p>
        )}

        {/* 3-Cards-Per-Row Continuous Looping Slider */}
        <div className="relative overflow-hidden py-3">
          <div className="pillar-marquee-track">
            {marqueeItems.map((theme, idx) => {
              const originalIndex = idx % themeItems.length;
              return (
                <div
                  key={`${theme.label}-${idx}`}
                  className="shrink-0 px-2.5 w-[371px] max-lg:w-[330px] max-sm:w-[300px]"
                >
                  <article className="group relative flex flex-col justify-between h-full min-h-[275px] p-7 rounded-[18px] border border-white/15 bg-gradient-to-br from-[#00ceff]/10 via-[#040c1e]/95 to-[#996cff]/10 shadow-[inset_0_0_28px_rgba(65,220,255,0.05),0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C0F43C]/60 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4),0_0_28px_rgba(192,244,60,0.12)] text-left">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <span className="grid place-items-center w-[48px] h-[48px] border border-cyan/30 rounded-[14px] bg-cyan/10 text-cyan transition-all duration-300 group-hover:border-[#C0F43C]/50 group-hover:bg-[#C0F43C]/18 group-hover:text-[#C0F43C]">
                          <ThemeIcon index={originalIndex} />
                        </span>
                        <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-cyan text-[11px] font-bold uppercase tracking-[1.8px] transition-colors duration-300 group-hover:border-[#C0F43C]/40 group-hover:bg-[#C0F43C]/15 group-hover:text-[#C0F43C]">
                          Pillar / {String(originalIndex + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="m-0 mb-3 text-white font-extrabold text-[20px] leading-[1.26] transition-colors duration-200 group-hover:text-[#C0F43C]">
                        {theme.label}
                      </h3>
                      <p className="m-0 text-white/70 text-[15px] leading-[1.6]">
                        {theme.description}
                      </p>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* Agenda Section CTA Buttons */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-4">
          <a
            href="/bengaluru/cybersecurity/#call-for-speakers"
            className="inline-flex items-center justify-center gap-2.5 h-[50px] px-8 rounded-full font-bold text-[15px] text-white bg-[#F15928] hover:bg-[#ff6938] shadow-[0_4px_18px_rgba(241,89,40,0.35)] transition-all cursor-pointer"
          >
            Apply to Speak →
          </a>
          <a
            href="/bengaluru/cybersecurity/#agenda"
            className="inline-flex items-center justify-center gap-2.5 h-[50px] px-8 rounded-full font-bold text-[15px] text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
          >
            Explore the Agenda →
          </a>
        </div>
      </div>
    </section>
  );
}
