"use client";

import Button from "../ui/Button";
import TextReveal from "../ui/TextReveal";
import KineticName from "../ui/KineticName";
import { profileData } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-14 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      {/* 1. Pure Radiant Shiny Orange Ambient Mesh Backlight */}
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-center select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Soft Radiant Orange Backlight */}
        <div className="absolute w-[750px] h-[480px] bg-gradient-to-tr from-[#ff7a00]/20 via-[#ff9e2c]/12 to-transparent rounded-full blur-[140px] -top-16" />
        <div className="absolute w-[450px] h-[350px] bg-[#ff7a00]/10 rounded-full blur-[120px] -bottom-8" />
      </div>

      <div className="relative max-w-4xl mx-auto w-full z-10 space-y-7">

        {/* 2. Hero Content: Clean Scaled-Down Typography & Concise Editorial Lead */}
        <div className="space-y-4">
          <div className="space-y-2">
            <span className="inline-block font-mono text-[11px] sm:text-xs font-bold text-[#ff9e2c] drop-shadow-[0_0_12px_rgba(255,122,0,0.5)] tracking-[0.22em] uppercase">
              <TextReveal preset="fade-up" delay={40}>
                {profileData.title} • FULL-STACK CRAFT
              </TextReveal>
            </span>

            {/* Scaled-Down Kinetic Character Scatter & Assembly Headline */}
            <div className="pt-0.5">
              <KineticName
                firstName={profileData.name.split(" ")[0]}
                lastName={profileData.name.split(" ")[1] || "DEV"}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]"
              />
            </div>
          </div>

          <TextReveal
            as="p"
            preset="words"
            delay={180}
            className="text-sm sm:text-base text-slate-300/85 font-normal leading-relaxed max-w-2xl"
          >
            {profileData.bio.lead}
          </TextReveal>
        </div>

        {/* 3. Scaled-Down Hairline Metrics Bar with Sleek Vertical Separators */}
        <TextReveal preset="fade-up" delay={240}>
          <div className="p-4 sm:p-5 rounded-xl bg-[#0c1222]/70 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-white/10">
              {profileData.stats.map((stat, idx) => (
                <div key={idx} className={`space-y-0.5 ${idx !== 0 ? "sm:pl-5" : ""} ${idx !== profileData.stats.length - 1 ? "sm:pr-5" : ""}`}>
                  <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-mono tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10.5px] font-mono text-[#ff9e2c]/90">
                    {stat.unit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TextReveal>

        {/* 4. Compact Ergonomic Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Button
            variant="primary"
            size="md"
            href="#projects"
            className="bg-gradient-to-r from-[#ffb338] via-[#ff7a00] to-[#ea580c] hover:from-[#ffc252] hover:to-[#ff7a00] text-black font-black shadow-[0_0_28px_rgba(255,122,0,0.6),inset_0_1px_1.5px_rgba(255,255,255,0.8)] border-none"
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            }
          >
            Explore Projects
          </Button>
          <Button
            variant="outline"
            size="md"
            href="#skills"
            className="hover:border-[#ff7a00]/50 hover:text-[#ff9e2c] hover:bg-[#ff7a00]/10"
          >
            Tech Stack
          </Button>
          <Button
            variant="ghost"
            size="md"
            href="#contact"
            className="hover:border-[#ff7a00]/40 hover:text-white"
          >
            Get In Touch
          </Button>
        </div>

        {/* Picture Card preserved commented out for later as requested */}
        {/*
        <div className="hidden">
          <Image src="/toji.png" alt="Abhishek Kumar" width={400} height={400} />
        </div>
        */}
      </div>
    </section>
  );
}
