"use client";

import { GradientText } from "../Shared";

// Sponsor Row 1 Logos (Past World AI Show India Sponsors)
const sponsorRow1 = [
  { path: "/bengaluru/cybersecurity/images/sponsors/india-past/google-cloud.webp", alt: "Google Cloud" },
  { path: "/bengaluru/cybersecurity/images/sponsors/india-past/Dell-Technologies-Intel.webp", alt: "Dell Technologies & Intel" },
  { path: "/bengaluru/cybersecurity/images/sponsors/india-past/hewlett-packard.webp", alt: "Hewlett Packard Enterprise" },
  { path: "/bengaluru/cybersecurity/images/sponsors/india-past/hcl.webp", alt: "HCLTech" },
  { path: "/bengaluru/cybersecurity/images/sponsors/india-past/happiest-minds.webp", alt: "Happiest Minds" },
  { path: "/bengaluru/cybersecurity/images/sponsors/india-past/kpmg.webp", alt: "KPMG" },
  { path: "/bengaluru/cybersecurity/images/sponsors/india-past/sap.webp", alt: "SAP" },
  { path: "/bengaluru/cybersecurity/images/sponsors/india-past/oracle.webp", alt: "Oracle" },
];

// Sponsor Row 2 Logos (Past World AI Show India Sponsors)
const sponsorRow2 = [
  { path: "/bengaluru/cybersecurity/images/sponsors/india-past/cisco.webp", alt: "Cisco" },
  { path: "/bengaluru/cybersecurity/images/sponsors/india-past/Snowflake.webp", alt: "Snowflake" },
  { path: "/bengaluru/cybersecurity/images/sponsors/india-past/ui-path.webp", alt: "UiPath" },
  { path: "/bengaluru/cybersecurity/images/sponsors/india-past/automation-anywhere.webp", alt: "Automation Anywhere" },
  { path: "/bengaluru/cybersecurity/images/sponsors/india-past/eclerx.webp", alt: "eClerx" },
  { path: "/bengaluru/cybersecurity/images/sponsors/india-past/Searce.webp", alt: "Searce" },
  { path: "/bengaluru/cybersecurity/images/sponsors/india-past/vernacular-ai.webp", alt: "Vernacular.ai" },
  { path: "/bengaluru/cybersecurity/images/sponsors/india-past/Denodo.webp", alt: "Denodo" },
];

// Strategic & Association Partners Logos (Path: association subfolder)
const partnerLogos = [
  "/bengaluru/cybersecurity/images/sponsors/association/starfindo.webp",
  "/bengaluru/cybersecurity/images/sponsors/association/kumpul.webp",
  "/bengaluru/cybersecurity/images/sponsors/association/forums.webp",
  "/bengaluru/cybersecurity/images/sponsors/association/ddas.webp",
  "/bengaluru/cybersecurity/images/sponsors/association/belux.webp",
  "/bengaluru/cybersecurity/images/sponsors/association/lafrench.webp",
];

// Governments & Associations Who Have Worked With Us In The Past (matching worldaishow.com)
const governmentLogos = [
  { path: "/bengaluru/cybersecurity/images/sponsors/governments/meit.webp", alt: "Ministry of Electronics and Information Technology, Government of India" },
  { path: "/bengaluru/cybersecurity/images/sponsors/governments/mrt-govt-of-india.webp", alt: "Ministry of Road Transport & Highways, Government of India" },
  { path: "/bengaluru/cybersecurity/images/sponsors/governments/niti-aayog.webp", alt: "NITI Aayog" },
  { path: "/bengaluru/cybersecurity/images/sponsors/governments/NeGD.webp", alt: "National e-Governance Division (NeGD)" },
  { path: "/bengaluru/cybersecurity/images/sponsors/governments/digital-india.webp", alt: "Digital India" },
  { path: "/bengaluru/cybersecurity/images/sponsors/governments/govt-maharashtra.webp", alt: "Government of Maharashtra" },
  { path: "/bengaluru/cybersecurity/images/sponsors/governments/govt-andhra-pradesh.webp", alt: "Government of Andhra Pradesh" },
  { path: "/bengaluru/cybersecurity/images/sponsors/governments/dubai-police.webp", alt: "Dubai Police" },
  { path: "/bengaluru/cybersecurity/images/sponsors/governments/difc.webp", alt: "DIFC" },
  { path: "/bengaluru/cybersecurity/images/sponsors/governments/dubai-economy.webp", alt: "Dubai Economy" },
  { path: "/bengaluru/cybersecurity/images/sponsors/governments/supreme-council.webp", alt: "Supreme Council of Energy" },
  { path: "/bengaluru/cybersecurity/images/sponsors/governments/ministry-of-finance.webp", alt: "Ministry of Finance" },
  { path: "/bengaluru/cybersecurity/images/sponsors/governments/petroleum-development-oman.webp", alt: "Petroleum Development Oman" },
  { path: "/bengaluru/cybersecurity/images/sponsors/governments/oman-chmaber-of-commerce.webp", alt: "Oman Chamber of Commerce and Industry" },
  { path: "/bengaluru/cybersecurity/images/sponsors/governments/oman-banks-association.webp", alt: "Oman Banks Association" },
  { path: "/bengaluru/cybersecurity/images/sponsors/governments/qfc.webp", alt: "Qatar Financial Centre" },
];

export function SponsorsSection() {
  return (
    <section className="relative py-[100px] pb-0 bg-[#030b19] overflow-hidden max-sm:py-[72px] max-sm:pb-0" id="partners">
      <div className="w-[min(1200px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1200px)]">
        {/* Top Sponsor CTA Banner */}
        <div
          className="sponsor-cta-banner group/banner relative p-12 max-sm:p-8 mb-20 rounded-[28px] text-center overflow-hidden transition-all duration-300"
          style={{
            backgroundColor: "#030814",
            backgroundImage: "linear-gradient(135deg, rgba(192, 244, 60, 0.05) 0%, #030814 45%, rgba(0, 206, 255, 0.03) 100%)",
            border: "1px solid rgba(192, 244, 60, 0.42)",
            boxShadow: "0 24px 60px rgba(2, 8, 20, 0.6), 0 0 28px rgba(192, 244, 60, 0.12)",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c0f43c]/35 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <h3
              className="m-0 font-space-grotesk font-[850] text-[clamp(28px,3.5vw,42px)] leading-tight tracking-tight"
              style={{ color: "#FFFFFF" }}
            >
              Put your solutions in front of <br />
              <span
                className="sponsor-cta-cyan"
                style={{
                  color: "#00CEFF",
                  WebkitTextFillColor: "#00CEFF",
                }}
              >
                the cross-functional buying unit.
              </span>
            </h3>

            <p
              className="m-0 text-[16px] leading-relaxed max-w-[640px] font-sans"
              style={{ color: "#CBD5E1" }}
            >
              Secure your enterprise presence for Mumbai 2027 (20–21 April 2027 · 2 Days) across Presenting, Powered by, Signature, Gold, Silver, Bronze, VIP Experiences, or Turnkey Exhibitor packages.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-4 w-full max-sm:flex-col max-sm:items-center">
              <a
                href="/bengaluru/cybersecurity/sponsorship-enquiry"
                className="sponsor-cta-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-extrabold hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                style={{
                  backgroundColor: "#F15928",
                  color: "#FFFFFF",
                  WebkitTextFillColor: "#FFFFFF",
                  boxShadow: "0 0 24px rgba(241, 89, 40, 0.45)",
                }}
              >
                Enquire about sponsorship <span>→</span>
              </a>
              <a
                href="/bengaluru/cybersecurity/attend/sponsor"
                className="sponsor-cta-secondary inline-flex items-center justify-center px-7 py-3.5 rounded-full text-[14px] font-extrabold hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.22)",
                  color: "#FFFFFF",
                  WebkitTextFillColor: "#FFFFFF",
                }}
              >
                View Commercial Standards
              </a>
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center font-[850] text-white leading-[1.06] tracking-[-2px] text-[clamp(36px,4.6vw,56px)] max-w-[920px] mx-auto">
          Your buyers are redesigning workflows now, <GradientText>not after the pilot</GradientText>
        </h2>

        <div className="mt-8 flex justify-center">
          <a
            href="/bengaluru/cybersecurity/attend/sponsor"
            className="inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-full font-extrabold text-[15px] text-[#06111F] [color:#06111F!important] bg-[#C0F43C] hover:shadow-[0_0_24px_rgba(192,244,60,0.35)] transition-all duration-200"
          >
            Explore sponsorship <span>→</span>
          </a>
        </div>

        <p className="mt-14 mb-0 text-center font-semibold text-xs uppercase tracking-[2px] text-white/55">
          Past Series Partners &amp; Sponsors
        </p>
      </div>

      {/* Two offset scrolling sponsor rows */}
      <div className="flex flex-col gap-5 mt-6 w-full overflow-hidden">
        {/* Row 1: MDEC, MIDA, Datadog, Quantexa, Denodo (slides right-to-left) */}
        <div className="relative w-full overflow-hidden">
          <div className="logo-marquee-rail flex gap-5 will-change-transform">
            {[...sponsorRow1, ...sponsorRow1, ...sponsorRow1].map((logo, index) => (
              <span
                key={`${logo.alt}-${index}`}
                className="flex-none grid place-items-center w-[190px] h-[82px] rounded-[12px] bg-white shadow-[0_0_28px_rgba(20,212,255,0.16)] select-none px-4"
              >
                <img
                  src={logo.path}
                  alt={logo.alt}
                  className="max-w-[140px] max-h-[50px] object-contain transition-all duration-300"
                  loading="lazy"
                  width={140}
                  height={50}
                />
              </span>
            ))}
          </div>
        </div>

        {/* Row 2: Magure, Alibaba-cloud, ey, avatai, darwin (slides left-to-right) */}
        <div className="relative w-full overflow-hidden">
          <div className="marquee-partners-reverse flex gap-5 will-change-transform">
            {[...sponsorRow2, ...sponsorRow2, ...sponsorRow2].map((logo, index) => (
              <span
                key={`${logo.alt}-${index}`}
                className="flex-none grid place-items-center w-[190px] h-[82px] rounded-[12px] bg-white shadow-[0_0_28px_rgba(20,212,255,0.16)] select-none px-4"
              >
                <img
                  src={logo.path}
                  alt={logo.alt}
                  className="max-w-[140px] max-h-[50px] object-contain transition-all duration-300"
                  loading="lazy"
                  width={140}
                  height={50}
                />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Governments and Associations Who Have Worked With Us In The Past (4x4 Grid from worldaishow.com) */}
      <div className="mt-20 py-16 bg-white text-center">
        <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
          <h3 data-aos="fade-up" className="m-0 mb-10 text-[#151923] font-[850] text-[clamp(22px,2.8vw,32px)] leading-[1.2] tracking-[-0.5px] uppercase max-w-[820px] mx-auto">
            Governments and Associations Who Have Worked With Us In The Past
          </h3>

          <div className="grid grid-cols-4 border border-slate-200 rounded-[16px] overflow-hidden max-md:grid-cols-2">
            {governmentLogos.map((logo, idx) => (
              <div
                key={logo.alt}
                data-aos="fade-up"
                data-aos-delay={String((idx % 4) * 90)}
                className="flex items-center justify-center h-[126px] p-5 border-r border-b border-slate-200 bg-white hover:bg-slate-50 transition-colors duration-200"
              >
                <img
                  src={logo.path}
                  alt={logo.alt}
                  className="max-w-[165px] max-h-[82px] object-contain"
                  loading="lazy"
                  width={165}
                  height={82}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners single row horizontal infinite marquee slider with hover pause */}
      <div className="p-[28px_0_34px] bg-slate-50 border-t border-slate-200 text-center overflow-hidden">
        <p className="m-0 mb-[26px] text-[18px] font-bold text-[#151923] uppercase tracking-[1.5px] select-none">
          Strategic &amp; Media Partners
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="marquee-partners flex items-center gap-[64px]">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex-none w-[140px] h-[52px] flex items-center justify-center select-none"
              >
                <img
                  src={logo}
                  alt="Partner Logo"
                  className="max-w-full max-h-full object-contain filter hover:brightness-105 transition-all duration-300"
                  loading="lazy"
                  width={140}
                  height={52}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
