"use client";

import { useState } from "react";
import { GradientText } from "../Shared";

const buyingUnitConstituencies = [
  {
    title: "Security Leadership",
    desc: "CISOs, CSOs, heads of information security",
    index: "01",
  },
  {
    title: "Technology Leadership",
    desc: "CIOs, CTOs, CDOs, CROs, enterprise architects",
    index: "02",
  },
  {
    title: "Security Functions",
    desc: "Heads of SOC, incident response, threat intelligence, cloud, AppSec, IAM, OT",
    index: "03",
  },
  {
    title: "Risk & Governance",
    desc: "GRC, privacy, data protection, audit, business continuity",
    index: "04",
  },
  {
    title: "Ecosystem",
    desc: "Cyber GCC leaders, product founders, researchers, regulators",
    index: "05",
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

          {/* 5 Buying Unit Constituencies Grid with Subtle Float/Glow Animation */}
          <div className="w-full grid grid-cols-5 gap-4 max-[1100px]:grid-cols-3 max-[768px]:grid-cols-2 max-sm:grid-cols-1 text-left">
            {buyingUnitConstituencies.map((item, idx) => (
              <article
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative flex flex-col justify-between min-h-[210px] p-6 rounded-[16px] border border-[#0069B8]/25 bg-white shadow-[0_12px_30px_rgba(8,18,30,0.05)] hover:-translate-y-2 hover:border-[#0069B8] hover:shadow-[0_18px_38px_rgba(0,105,184,0.13)] transition-all duration-300 overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block text-[11px] font-mono font-bold tracking-[2px] text-[#009EAD] !text-[#009EAD] [color:#009EAD!important] uppercase">
                      {item.index} · {item.title}
                    </span>
                  </div>
                  <h3 className="text-[#08121E] !text-[#08121E] [color:#08121E!important] text-[19px] font-extrabold leading-[1.22] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-[#334155] !text-[#334155] [color:#334155!important] text-[13.5px] leading-[1.55] m-0">
                    {item.desc}
                  </p>
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
