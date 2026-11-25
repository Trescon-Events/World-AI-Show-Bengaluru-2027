"use client";

import { useState } from "react";
import { GradientText } from "../Shared";

const faqs = [
  {
    q: "What is World AI Show: The Cybersecurity Edition?",
    a: "A two-day, CISO-led conference on securing AI adoption, modernising cyber defence and building resilience. It runs 20–21 July 2027 in Bengaluru.",
  },
  {
    q: "How does it relate to the Enterprise Edition?",
    a: "The Enterprise Edition looks at how AI enters enterprise strategy and operations. This edition looks at how organisations secure that transition.",
  },
  {
    q: "Who should attend?",
    a: "CISOs and senior security leaders, plus CIOs, CTOs, CROs and technology, risk, data and digital leaders.",
  },
  {
    q: "Who qualifies for a Delegate Pass?",
    a: "Senior leaders with active security or risk responsibility, by invitation and qualification.",
  },
  {
    q: "What does the programme cover?",
    a: "Four pillars: Securing AI and Defending with AI; Modern Cyber Defence; the Expanding Attack Surface; CISO Leadership and India's Cyber Ecosystem.",
  },
  {
    q: "What can partners expect?",
    a: "Partner sessions address a defined enterprise security challenge and are backed by implementation evidence or practitioner insight.",
  },
  {
    q: "Where and when?",
    a: "20–21 July 2027, Bengaluru, India.",
  },
  {
    q: "Who organises it?",
    a: "Trescon, organiser of the World AI Show series.",
  },
  {
    q: "What is the cancellation or transfer policy for delegate passes?",
    a: "Delegate passes are non-transferable without prior written approval from the organisers. If you are unable to attend, you may nominate a senior colleague of equivalent seniority and responsibility, subject to qualification review.",
  },
  {
    q: "How are 1-to-1 meetings scheduled through the AI Matchmaking platform?",
    a: "Qualified delegates and sponsor representatives receive login credentials to the event platform ahead of the event. The platform suggests relevant matches based on declared security priorities and project roadmaps; meetings are confirmed by mutual consent.",
  },
  {
    q: "Are the closed-door CISO boardrooms open to all attendees?",
    a: "No. Closed-door boardrooms have strictly capped attendance (typically 15 CXOs) and operate under the Chatham House Rule. Access is by prior invitation or as part of qualifying sponsorship packages.",
  },
  {
    q: "Will presentation slides or session recordings be shared after the event?",
    a: "Approved plenary session recordings and speaker-authorised slide decks will be made available to registered attendees via the event portal post-event. Closed-door boardroom discussions are strictly off the record and will not be recorded.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-[104px] pt-[104px] bg-gradient-to-b from-[#051224]/70 to-[#020a18]/96 max-sm:py-[72px]" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        {/* Title */}
        <h2 className="text-center font-[850] text-white leading-[1.04] tracking-[-2px] text-[clamp(42px,5.2vw,60px)]">
          Frequently asked <GradientText>questions.</GradientText>
        </h2>

        {/* Semantic Accordion List */}
        <div className="max-w-[976px] mx-auto mt-12 p-[26px_16px] border border-white/8 rounded-[24px] bg-[#040a19]/50 shadow-[0_20px_60px_rgba(0,0,0,0.1)] max-sm:p-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <details
                key={faq.q}
                open={isOpen}
                className="border-b border-white/36 last:border-b-0 group"
              >
                <summary
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenIndex(isOpen ? null : index);
                  }}
                  className="grid grid-cols-[1fr_32px] items-center gap-5 min-h-[68px] px-6 cursor-pointer list-none select-none max-sm:gap-3 max-sm:px-3.5 [&::-webkit-details-marker]:hidden"
                >
                  <strong className="text-white font-extrabold text-[18px] group-open:text-cyan transition-colors max-sm:text-[16px] leading-snug">
                    {faq.q}
                  </strong>
                  <i className="text-white/70 font-normal not-italic text-right text-xl transition-transform group-open:rotate-45 block">
                    +
                  </i>
                </summary>
                <p className="px-6 pb-6 pt-0 text-muted text-[15px] leading-relaxed max-sm:px-3.5">
                  {faq.a}
                </p>
              </details>
            );
          })}
        </div>

        {/* Still have questions CTA strip */}
        <div className="max-w-[976px] mx-auto mt-8 p-6 rounded-[18px] border border-cyan/30 bg-[#041226] text-center flex items-center justify-between gap-4 max-sm:flex-col shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
          <span className="!text-white [color:#FFFFFF!important] font-bold text-[16px] tracking-tight">
            Have a question that isn&apos;t answered here?
          </span>
          <a
            href="/bengaluru/cybersecurity/general-enquiry"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider text-white [color:#FFFFFF!important] bg-[#F15928] hover:bg-[#ff6c3b] hover:shadow-[0_0_24px_rgba(241,89,40,0.4)] hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            Contact the Team →
          </a>
        </div>
      </div>
    </section>
  );
}
