"use client";

import { useState } from "react";
import { GradientText } from "../Shared";

const buyingUnitConstituencies = [
  {
    title: "Security Leadership",
    category: "Executive Defense",
    desc: "CISOs, CSOs, heads of information security",
    roles: ["CISOs", "CSOs", "Heads of InfoSec"],
    index: "01",
    accent: "from-[#0069B8] to-[#009EAD]",
    badgeBg: "bg-[#0069B8]/10 text-[#0069B8] border-[#0069B8]/25",
    icon: (
      <svg className="w-5 h-5 text-[#0069B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l7 3.5v6.5c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5.5L12 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 12h5m-2.5-2.5v5" />
      </svg>
    ),
  },
  {
    title: "Technology Leadership",
    category: "Enterprise Systems",
    desc: "CIOs, CTOs, CDOs, CROs, enterprise architects",
    roles: ["CIOs", "CTOs", "CDOs & CROs", "Enterprise Architects"],
    index: "02",
    accent: "from-[#009EAD] to-[#00CEFF]",
    badgeBg: "bg-[#009EAD]/10 text-[#009EAD] border-[#009EAD]/25",
    icon: (
      <svg className="w-5 h-5 text-[#009EAD]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 5.25v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
  },
  {
    title: "Security Functions",
    category: "SOC & Operations",
    desc: "Heads of SOC, incident response, threat intelligence, cloud, AppSec, IAM, OT",
    roles: ["Heads of SOC", "Incident Response", "Threat Intel", "Cloud & AppSec", "IAM & OT"],
    index: "03",
    accent: "from-[#0069B8] to-[#6366F1]",
    badgeBg: "bg-[#6366F1]/10 text-[#6366F1] border-[#6366F1]/25",
    icon: (
      <svg className="w-5 h-5 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v3m0 6v3m6-6h-3m-6 0H6" />
      </svg>
    ),
  },
  {
    title: "Risk & Governance",
    category: "Compliance & GRC",
    desc: "GRC, privacy, data protection, audit, business continuity",
    roles: ["GRC Leaders", "Data Protection", "Internal Audit", "Business Continuity"],
    index: "04",
    accent: "from-[#F15928] to-[#F59E0B]",
    badgeBg: "bg-[#F15928]/10 text-[#F15928] border-[#F15928]/25",
    icon: (
      <svg className="w-5 h-5 text-[#F15928]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Ecosystem",
    category: "GCCs & Innovation",
    desc: "Cyber GCC leaders, product founders, researchers, regulators",
    roles: ["Cyber GCC Leaders", "Product Founders", "Researchers", "Regulators"],
    index: "05",
    accent: "from-[#009EAD] to-[#10B981]",
    badgeBg: "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/25",
    icon: (
      <svg className="w-5 h-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.5 3a17 17 0 000 18m1-18a17 17 0 010 18" />
      </svg>
    ),
  },
];

const industries = [
  ["Banking & Financial Services", "banking.webp"],
  ["Insurance & Fintech", "banking.webp"],
  ["Technology & IT Services", "retail.webp"],
  ["Global Capability Centres", "manufacturing.webp"],
  ["Manufacturing & Automotive", "manufacturing.webp"],
  ["Energy & Utilities", "energy.webp"],
  ["Telecommunications", "telecomunication.webp"],
  ["Healthcare & Life Sciences", "health.webp"],
  ["Retail & E-commerce", "retail.webp"],
  ["Logistics & Transportation", "logistic.webp"],
  ["Government & Public Sector", "Government.webp"],
  ["Critical Infrastructure", "energy.webp"],
] as const;

const cLevelRoles = [
  "Chief Information Officer (CIO)",
  "Chief AI Officer (CAIO)",
  "Chief Technology Officer (CTO)",
  "Chief Data Officer (CDO)",
  "Chief Information Security Officer (CISO)",
  "Chief Operating Officer (COO)",
];

const seniorRoles = [
  "Chief Enterprise Architect",
  "Head of Enterprise Transformation",
  "VP | Director | Head of AI & Data",
  "Head of Governance, Risk & Compliance (GRC)",
  "General Counsel & Legal Head",
];

export function NetworkingSection() {
  const [, setIsHovered] = useState(false);

  return (
    <section className="relative py-[104px] bg-[#020C21] overflow-hidden max-sm:py-[72px]" id="networking">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        {/* S7 · Who is in the room */}
        <div className="flex flex-col items-center text-center">
          <div className="max-w-[780px] mb-12">
            <h2 className="font-[850] text-white leading-[1.06] tracking-[-1.8px] text-[clamp(34px,4.4vw,52px)] m-0">
              Who&apos;s in the <GradientText>Room</GradientText>
            </h2>
            <p className="mt-5 mb-0 text-muted text-[18px] leading-[1.55] max-sm:text-[16px]">
              The complete security and risk leadership circle.
            </p>
          </div>

          {/* 5 Buying Unit Constituencies Grid with Modern Architecture & Interactive Elevation */}
          <div className="w-full grid grid-cols-5 gap-4 max-[1100px]:grid-cols-3 max-[768px]:grid-cols-2 max-sm:grid-cols-1 text-left">
            {buyingUnitConstituencies.map((item, idx) => (
              <article
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="constituency-card group relative flex flex-col justify-between min-h-[300px] p-5 rounded-[20px] bg-white border border-[#0069B8]/20 shadow-[0_8px_26px_rgba(8,18,30,0.06)] hover:-translate-y-2 hover:border-[#0069B8] hover:shadow-[0_20px_42px_rgba(0,105,184,0.14)] transition-all duration-300 overflow-hidden"
              >
                {/* Top Ambient Accent Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r ${item.accent} transition-all duration-300 group-hover:h-[5px]`}
                />

                <div>
                  {/* Top Header: Custom Domain Icon + Constituency Number */}
                  <div className="flex items-center justify-between mb-4 mt-1">
                    <div
                      className={`w-10 h-10 rounded-[12px] flex items-center justify-center border ${item.badgeBg} shadow-[0_2px_8px_rgba(0,0,0,0.03)] group-hover:scale-108 transition-transform duration-300`}
                    >
                      {item.icon}
                    </div>
                    <span className="font-mono text-[11px] font-extrabold tracking-[1px] px-2.5 py-0.5 rounded-full bg-[#08121E]/[0.04] text-[#0069B8] border border-[#0069B8]/20 group-hover:border-[#0069B8]/50 group-hover:bg-[#0069B8]/[0.08] transition-all">
                      {item.index}
                    </span>
                  </div>

                  {/* Category Eyebrow */}
                  <span className="block text-[10.5px] font-mono font-bold uppercase tracking-[1.6px] text-[#009EAD] mb-1">
                    {item.category}
                  </span>

                  {/* Constituency Title */}
                  <h3 className="text-[#08121E] !text-[#08121E] [color:#08121E!important] text-[18px] font-[850] font-space-grotesk leading-[1.22] mb-3 group-hover:text-[#0069B8] transition-colors">
                    {item.title}
                  </h3>

                  {/* Executive Role Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {item.roles.map((role) => (
                      <span
                        key={role}
                        className="role-chip inline-flex items-center px-2 py-0.5 rounded-[6px] text-[11.5px] font-semibold bg-[#F5F8FC] text-[#334155] border border-[#0069B8]/12 group-hover:border-[#0069B8]/30 group-hover:text-[#08121E] transition-all leading-tight"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Verified Stakeholder Status */}
                <div className="mt-4 pt-3 border-t border-[#0069B8]/10 flex items-center justify-between text-[11px] font-bold text-[#64748B]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#009EAD] group-hover:scale-125 transition-transform" />
                    Buying Unit
                  </span>
                  <span className="text-[#0069B8] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Verified
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Industry Sectors Grid */}
        <div className="mt-14">
          <p className="text-center font-semibold text-xs uppercase tracking-[2px] text-white/60 mb-5">
            Priority Enterprise Sectors Represented
          </p>
          <div className="grid grid-cols-4 gap-3.5 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
            {industries.map(([item, icon]) => (
              <article
                key={item}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group flex items-center gap-3.5 p-[13px_14px] rounded-[8px] border border-line bg-gradient-to-br from-[#00ceff]/6 to-[#c0f43c]/3 shadow-[inset_0_0_28px_rgba(65,220,255,0.06),0_20px_60px_rgba(0,0,0,0.22)] select-none hover:-translate-y-0.5 hover:border-green/60 transition-all duration-300"
              >
                <span className="grid place-items-center w-10 h-10 shrink-0 border border-white/10 rounded-[8px] text-cyan bg-black/26 group-hover:border-green/30 transition-all duration-300">
                  <img
                    src={`/bengaluru/cybersecurity/icons/networking/${icon}`}
                    alt=""
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px] object-contain group-hover:hue-rotate-[255deg] group-hover:brightness-125 transition-all duration-300"
                    aria-hidden="true"
                  />
                </span>
                <strong className="block text-white text-[13.5px] font-bold leading-[1.28]">
                  {item}
                </strong>
              </article>
            ))}
          </div>
        </div>

        {/* Roles slider marquees hidden for now per feedback */}
        {false && (
          <>
            <section className="mt-[58px] text-center" aria-labelledby="c-level-title">
              <h3 id="c-level-title" className="m-0 mb-4 text-white text-[24px] font-extrabold leading-none">
                C-level Executives
              </h3>
              <div className="w-[100vw] ml-[calc((100vw-100%)/-2)] overflow-hidden" aria-label="C-level Executives carousel">
                <div className="move-left flex w-max gap-7 px-7 pb-1.5 will-change-transform">
                  {[...cLevelRoles, ...cLevelRoles, ...cLevelRoles].map((role, index) => (
                    <span
                      key={`${role}-${index}`}
                      className="flex-none min-w-[250px] p-[15px_24px] rounded-[9px] text-[#06111f] [color:#06111f!important] bg-[#C0F43C] text-center font-extrabold text-[14px]"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-8 text-center" aria-labelledby="senior-title">
              <h3 id="senior-title" className="m-0 mb-4 text-white text-[24px] font-extrabold leading-none">
                Enterprise Transformation &amp; Risk Leaders
              </h3>
              <div className="w-[100vw] ml-[calc((100vw-100%)/-2)] overflow-hidden" aria-label="Senior Executives carousel">
                <div className="move-right flex w-max gap-7 px-7 pb-1.5 will-change-transform">
                  {[...seniorRoles, ...seniorRoles, ...seniorRoles].map((role, index) => (
                    <span
                      key={`${role}-${index}`}
                      className="flex-none min-w-[250px] p-[15px_24px] rounded-[9px] text-[#06111f] [color:#06111f!important] bg-cyan text-center font-extrabold text-[14px]"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* S8 · How to attend — Delegate Pass */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="max-w-[760px] mx-auto text-center flex flex-wrap gap-4 justify-center">
            <a
              href="/bengaluru/cybersecurity/#enquire-sponsorship"
              className="inline-flex items-center justify-center gap-2 h-[50px] px-8 rounded-full font-extrabold text-[15px] text-white bg-[#F15928] hover:bg-[#ff6938] shadow-[0_4px_18px_rgba(241,89,40,0.35)] transition-all hover:scale-[1.02]"
            >
              Enquire About Sponsorship →
            </a>
            <a
              href="/bengaluru/cybersecurity/#delegate-access"
              className="inline-flex items-center justify-center gap-2 h-[50px] px-8 rounded-full font-extrabold text-[15px] text-[#06111F] [color:#06111F!important] bg-[#C0F43C] transition-all duration-300 hover:scale-[1.02]"
            >
              Request Delegate Access →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
