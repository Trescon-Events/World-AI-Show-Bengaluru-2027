"use client";

export function SpeakerCallToStage() {
  return (
    <section className="relative py-[104px] bg-gradient-to-b from-[#020b1c] to-[#041226] overflow-hidden" id="call-for-speakers">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[radial-gradient(circle,rgba(154,108,255,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        {/* Centered section heading */}
        <h2 className="text-center font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(34px,4.5vw,50px)] mb-[56px]">
          Take the Stage at <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ceff] to-[#C0F43C]">
            World AI Show: The Cybersecurity Edition
          </span>
        </h2>

        {/* Two-column content */}
        <div className="grid grid-cols-[1.12fr_0.88fr] gap-[66px] items-center max-[980px]:grid-cols-1 max-[980px]:gap-[48px] mb-12">
          <div>
            <h3 className="m-0 text-white font-[850] text-[28px] leading-tight mb-4 max-sm:text-[23px]">
              Call for Practitioner Speakers
            </h3>
            <p className="m-0 text-white/68 text-[16px] leading-[1.65] mb-5">
              The faculty for Bengaluru 2027 is curated for implementation experience: the decisions made, the trade-offs weighed and the lessons learned. We welcome proposals from CISOs, CIOs, CTOs, CROs, heads of security architecture, SOC leaders, detection engineers and threat intelligence practitioners.
            </p>

            <div className="mb-6 p-6 border border-[#18d4ff]/20 rounded-[16px] bg-[#040d1d]/80">
              <strong className="block text-[#18d4ff] text-[12px] uppercase tracking-[2px] mb-4 font-bold">
                We particularly welcome:
              </strong>
              <ul className="m-0 pl-0 list-none flex flex-col gap-3 text-white/80 text-[15px]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C0F43C] font-bold">―</span>
                  <span>First-hand accounts of securing AI models, agents or data flows in production</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C0F43C] font-bold">―</span>
                  <span>Incident response and detection engineering case studies</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C0F43C] font-bold">―</span>
                  <span>Architecture decisions in cloud, identity, OT or critical infrastructure</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C0F43C] font-bold">―</span>
                  <span>CISO-board communication and risk governance frameworks</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C0F43C] font-bold">―</span>
                  <span>Practitioner perspectives from India&apos;s cybersecurity ecosystem and cyber GCCs</span>
                </li>
              </ul>
            </div>

            {/* Value Highlights */}
            <div className="p-7 border border-[#7eacd9]/14 rounded-[16px] bg-[#04080f]/80 shadow-[inset_0_0_24px_rgba(33,173,255,0.04)]">
              <strong className="block text-[#C0F43C] text-[12px] uppercase tracking-[2px] mb-5 font-bold">
                Why join the faculty in Bengaluru:
              </strong>
              <ul className="m-0 pl-0 list-none flex flex-col gap-5">
                <li className="flex items-start gap-3.5 text-white/80 text-[15px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/bengaluru/cybersecurity/images/agenda/icon-speaker.webp"
                    alt=""
                    className="w-5 h-5 object-contain mt-[3px] select-none flex-shrink-0"
                  />
                  <span>
                    <strong className="text-white">Peer-level audience:</strong> 300+ senior leaders; no junior pass-holders; serious discussion.
                  </span>
                </li>
                <li className="flex items-start gap-3.5 text-white/80 text-[15px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/bengaluru/cybersecurity/images/agenda/icon-global.webp"
                    alt=""
                    className="w-5 h-5 object-contain mt-[3px] select-none flex-shrink-0"
                  />
                  <span>
                    <strong className="text-white">Curated programme:</strong> No pay-to-play editorial slots.
                  </span>
                </li>
                <li className="flex items-start gap-3.5 text-white/80 text-[15px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/bengaluru/cybersecurity/images/agenda/icon-lightning.webp"
                    alt=""
                    className="w-5 h-5 object-contain mt-[3px] select-none flex-shrink-0"
                  />
                  <span>
                    <strong className="text-white">High-impact formats:</strong> 30-minute focused keynotes, panels and closed-door CISO roundtables.
                  </span>
                </li>
                <li className="flex items-start gap-3.5 text-white/80 text-[15px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/bengaluru/cybersecurity/images/agenda/icon-global.webp"
                    alt=""
                    className="w-5 h-5 object-contain mt-[3px] select-none flex-shrink-0"
                  />
                  <span>
                    <strong className="text-white">India&apos;s cyber hub:</strong> Bengaluru brings together enterprise CISOs, product innovators and cyber GCC leadership.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Visual container */}
          <div className="relative overflow-hidden border border-[#20d5ff]/20 rounded-[22px] shadow-[0_0_32px_rgba(0,206,255,0.08)]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#020b1c]/40 via-transparent to-transparent pointer-events-none z-1" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/bengaluru/cybersecurity/images/agenda/take-the-stage.webp"
              alt="Speaker presenting on stage at World AI Show"
              className="w-full h-[360px] md:h-[480px] filter saturate-[0.96] brightness-[0.96]"
              style={{ objectFit: "cover", objectPosition: "top" }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Centered bottom CTAs */}
        <div className="flex justify-center gap-4 mt-8 max-sm:flex-col max-sm:items-center">
          <a
            href="/bengaluru/cybersecurity/speaker-enquiry"
            className="inline-flex items-center justify-center gap-2 px-[32px] py-[16px] rounded-full text-[15px] font-extrabold text-[#06111f] [color:#06111f!important] bg-[#C0F43C] shadow-[0_0_24px_rgba(192,244,60,0.18)] hover:shadow-[0_0_32px_rgba(192,244,60,0.36)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Apply to Speak
            <img
              src="/bengaluru/cybersecurity/images/agenda/arrow-top.webp"
              alt="Arrow top icon"
              className="w-4 h-4 object-contain select-none flex-shrink-0"
            />
          </a>
          <a
            href="/bengaluru/cybersecurity/speakers"
            className="inline-flex items-center justify-center gap-2 px-[32px] py-[16px] rounded-full text-[15px] font-extrabold text-white border border-[#18d4ff]/40 bg-[#18d4ff]/10 hover:bg-[#18d4ff]/20 transition-all duration-200"
          >
            Explore Speakers Hub →
          </a>
        </div>
      </div>
    </section>
  );
}
