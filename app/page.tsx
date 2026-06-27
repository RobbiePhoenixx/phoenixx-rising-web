import FadeUp from "@/components/motion/FadeUp";
import ScaleIn from "@/components/motion/ScaleIn";
import SlideIn from "@/components/motion/SlideIn";
import HoverCard from "@/components/motion/HoverCard";
import AnimatedButton from "@/components/motion/AnimatedButton";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerChildren";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060D1A] text-white font-sans">

      {/* ── Hero ── */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 gap-6">
        <FadeUp>
          <span className="text-xs tracking-[0.3em] uppercase text-amber-400 border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 rounded-full">
            Phoenixx Rising Ventures · Housing for Heroes
          </span>
        </FadeUp>
        <FadeUp delay={0.12}>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Music That Moves<br />
            <span className="text-amber-400">Veterans Home</span>
          </h1>
        </FadeUp>
        <FadeUp delay={0.24}>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            A national rock music tour raising funds to give America&apos;s veterans the homes they earned.
            10 shows. 10,000 miles. One mission.
          </p>
        </FadeUp>
        <FadeUp delay={0.36}>
          <div className="flex gap-4 flex-wrap justify-center">
            <AnimatedButton
              href="#sponsor"
              className="bg-amber-400 text-[#060D1A] font-bold px-8 py-3 rounded-md text-sm uppercase tracking-wide"
            >
              Become a Sponsor
            </AnimatedButton>
            <AnimatedButton
              href="#mission"
              className="border border-white/30 text-white font-semibold px-8 py-3 rounded-md text-sm uppercase tracking-wide"
            >
              Learn Our Story
            </AnimatedButton>
          </div>
        </FadeUp>
      </section>

      {/* ── Stats ── */}
      <section className="bg-[#0A1628] border-y border-amber-400/20 py-14 px-6">
        <StaggerContainer className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "285M+", label: "Household Reach" },
            { num: "10",    label: "Tour Shows" },
            { num: "10K",   label: "Miles Driven" },
            { num: "200M+", label: "Radio Listeners" },
          ].map(({ num, label }) => (
            <StaggerItem key={label}>
              <div className="text-4xl font-bold text-amber-400">{num}</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">{label}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── Mission ── */}
      <section id="mission" className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <SlideIn from="left">
          <div className="aspect-[4/3] bg-[#12213B] rounded-xl border border-amber-400/20 flex items-center justify-center text-amber-400/40 text-sm tracking-widest uppercase">
            Add Mission Photo
          </div>
        </SlideIn>
        <SlideIn from="right" delay={0.1}>
          <div className="space-y-5">
            <span className="text-amber-400 text-xs tracking-[0.3em] uppercase">Our Purpose</span>
            <h2 className="text-4xl font-bold">
              From the Stage to the <span className="text-amber-400">Front Door</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              America&apos;s veterans sacrificed everything. Too many come home without a safe place to sleep.
              Phoenixx Rising Ventures uses the raw power of live rock music to change that.
            </p>
          </div>
        </SlideIn>
      </section>

      {/* ── Sponsorship Cards ── */}
      <section id="sponsor" className="bg-[#060D1A] px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-14">
            <span className="text-amber-400 text-xs tracking-[0.3em] uppercase">Investment Opportunities</span>
            <h2 className="text-4xl font-bold mt-3">
              Become a <span className="text-amber-400">Sponsor</span>
            </h2>
          </FadeUp>
          <StaggerContainer className="grid md:grid-cols-4 gap-5">
            {[
              { tier: "Presenting", amount: "$100K+", color: "border-amber-400" },
              { tier: "Title",      amount: "$50K",   color: "border-red-700" },
              { tier: "Tour",       amount: "$25K",   color: "border-amber-400/30" },
              { tier: "Private",    amount: "$10K",   color: "border-white/10" },
            ].map(({ tier, amount, color }) => (
              <StaggerItem key={tier}>
                <HoverCard className={`bg-[#0A1628] border ${color} rounded-xl p-6 text-center h-full`}>
                  <div className="text-xs tracking-widest uppercase text-amber-400 mb-3">{tier}</div>
                  <div className="text-3xl font-bold text-white">{amount}</div>
                  <div className="text-xs text-gray-500 mt-1">Investment</div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-amber-400/15 py-8 px-6 text-center">
        <ScaleIn>
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-amber-400">Phoenixx Rising Ventures LLC</span>. All rights reserved.
          </p>
        </ScaleIn>
      </footer>

    </main>
  );
}
