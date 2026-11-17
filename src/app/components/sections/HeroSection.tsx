import { Button, GradientText } from "../Shared";

export function HeroSection() {
  return (
    <section
      className="hero-bg relative min-h-[820px] -mt-[102px] grid place-items-center overflow-hidden text-center max-[980px]:min-h-[760px] max-sm:-mt-[71px] max-sm:min-h-[720px]"
      id="home"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-55 z-0"
        src="/mumbai/enterprise/videos/wais-mumbai-hero-banner.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Dark Video Tint & Cyber Grid overlays */}
      <div
        className="absolute inset-0 z-1 bg-[#020917]/35 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="hero-overlay absolute inset-0 z-1 opacity-75 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="hero-grid-pattern absolute bottom-0 left-[-6%] right-[-6%] h-[245px] z-1 opacity-70 blur-[1px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-6 pt-[220px] lg:pt-[240px] pb-16 max-sm:pt-[175px] max-sm:pb-12 max-sm:px-4 flex flex-col items-center">
        {/* Event Lockup Logo */}
        <div className="mb-6 flex justify-center w-full">
          <img
            src="/mumbai/enterprise/logos/wais-27-enterprise.svg"
            alt="World AI Show: The Enterprise Edition | Mumbai"
            width={450}
            height={180}
            className="w-full max-w-[320px] sm:max-w-[450px] sm:w-[450px] h-auto object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
          />
        </div>

        {/* Hero Title */}
        <h1 className="max-w-[1020px] mx-auto text-white font-[850] leading-[1.08] xl:leading-[72px] tracking-[-1.8px] text-[clamp(34px,4.8vw,68px)] xl:text-[68px] text-center mb-6">
          <span className="block">Where AI becomes the</span>
          <span className="block"><GradientText>operating model.</GradientText></span>
        </h1>

        {/* Standfirst (20px, 33px line-height, 0 tracking, 400 weight, #CBD5E1) */}
        <p className="max-w-[860px] mx-auto text-[#CBD5E1] text-[clamp(15px,1.6vw,20px)] xl:text-[20px] font-normal leading-relaxed xl:leading-[33px] tracking-normal text-center mb-8">
          The premier cross-functional executive conference addressing the architecture, systems integration, agentic governance, and verifiable ROI of enterprise AI.
        </p>

        {/* Hero CTA Actions */}
        <div className="flex justify-center flex-wrap gap-3.5 mt-2 max-sm:flex-col max-sm:items-center max-sm:gap-3.5 max-sm:w-full max-sm:max-w-[320px]">
          <Button href="/mumbai/enterprise/sponsorship-enquiry/" showArrow={true}>
            Enquire Now (Sponsorship &amp; Passes)
          </Button>
          <Button href="/mumbai/enterprise/attend/sponsor/" variant="outline" showArrow={true}>
            Download Prospectus
          </Button>
        </div>
      </div>
    </section>
  );
}
