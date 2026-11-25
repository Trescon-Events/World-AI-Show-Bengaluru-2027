"use client";

import { GradientText } from "../../components/Shared";

export function PhotoGalleryContent() {
  const steps = [
    {
      num: "Step 1",
      title: "Scan Your Face",
      desc: "Simply capture a quick selfie or upload a photo directly to the secure gallery portal.",
      color: "text-[#C0F43C]",
      bgColor: "bg-[#C0F43C]/10",
      borderColor: "border-[#C0F43C]/20",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#C0F43C]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      )
    },
    {
      num: "Step 2",
      title: "Get Your Photos",
      desc: "Our AI immediately scans the entire event repository to find every photo featuring you.",
      color: "text-[#18d4ff]",
      bgColor: "bg-[#18d4ff]/10",
      borderColor: "border-[#18d4ff]/20",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#18d4ff]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 1.75 0Z" />
        </svg>
      )
    },
    {
      num: "Step 3",
      title: "Share Your Photos",
      desc: "Instantly view, download in high resolution, or share directly to your social media channels.",
      color: "text-[#C0F43C]",
      bgColor: "bg-[#C0F43C]/10",
      borderColor: "border-[#C0F43C]/20",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#C0F43C]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186l.09.034m-.09-.034a2.25 2.25 0 0 0 2.247 1.107m0 0l.09-.034m-.09.034L18 8.25m0 0a2.25 2.25 0 1 0 0-3.3m0 3.3a2.25 2.25 0 1 0 0 3.3m0-3.3l-.09.034m.09-.034a2.25 2.25 0 0 0-2.247-1.107m0 0L7.25 10.5" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative w-full text-white font-space-grotesk bg-[#020814]">
      {/* ── Section 1: Immersive Blurred Event Hero Section ── */}
      <section 
        className="relative net-inner-hero pt-[250px] pb-20 overflow-hidden flex items-center bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#020814]/92 before:via-[#031022]/88 before:to-[#020814] before:z-0"
        style={{ backgroundImage: 'url("/bengaluru/cybersecurity/images/agenda/Agenda-bg.webp")' }}
      >
        {/* Soft Ambient Spotlights */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-[#18d4ff]/8 blur-[110px] pointer-events-none z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#C0F43C]/4 blur-[130px] pointer-events-none z-0"></div>

        <div className="w-[min(1114px,calc(100%-48px))] mx-auto relative z-10 grid grid-cols-[1.15fr_0.85fr] gap-[74px] items-center max-lg:grid-cols-1 max-lg:gap-14">
          
          {/* Left Column: Heading & Vertical Steps */}
          <div>
            <h1 className="font-[850] text-white leading-none tracking-[-2.5px] text-[clamp(42px,5.2vw,66px)] m-0">
              Moments from <br />
              <GradientText>the series</GradientText>
            </h1>
            <p className="m-0 mt-5 text-white/60 text-[18px] leading-relaxed max-w-[560px] max-sm:text-[15px]">
              High-resolution executive photography from World AI Show editions across the globe. Use face-match search to find your photos, or browse highlights from plenary sessions, closed-door CISO roundtables and the exhibition floor.
            </p>

            {/* Vertical Step Pills (Glassmorphic Styles) */}
            <div className="mt-8 flex flex-col gap-3 max-w-[500px]">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="flex items-center gap-4.5 p-4.5 border border-white/6 rounded-[16px] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-250 shadow-[inset_0_0_16px_rgba(255,255,255,0.01)]"
                >
                  <span className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${step.bgColor} border ${step.borderColor}`}>
                    {step.icon}
                  </span>
                  <div>
                    <span className={`text-[10px] font-space-grotesk font-bold tracking-[2px] block uppercase ${step.color} mb-0.5`}>
                      {step.num}
                    </span>
                    <h3 className="m-0 text-white font-extrabold text-[15px] tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Phone Mockup */}
          <div className="relative flex justify-center items-center w-full max-lg:max-w-[340px] max-lg:mx-auto">
            <div className="absolute inset-0 bg-[#18d4ff]/6 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="net-phone large net-phone-standalone">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="phone-app-header">
                  <div className="phone-avatar-cluster">
                    <img src="/bengaluru/cybersecurity/images/networking/avatar-1.webp" alt="" className="phone-avatar" />
                    <img src="/bengaluru/cybersecurity/images/networking/avatar-2.webp" alt="" className="phone-avatar" />
                    <img src="/bengaluru/cybersecurity/images/networking/avatar-3.webp" alt="" className="phone-avatar" />
                  </div>
                  <div className="phone-match-badge">AI Face Match</div>
                </div>
                <div className="phone-content-body">
                  <p className="phone-gallery-subtitle">High-resolution executive photography from World AI Show editions.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
