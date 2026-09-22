"use client";

import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import TextReveal from "../ui/TextReveal";
import { profileData } from "@/data/profile";

export default function About() {
  const focusAreas = [
    { title: "Frontend Architecture", desc: "Component-driven, accessible UI with Next.js, React, and Tailwind CSS." },
    { title: "Scalable Backend APIs", desc: "High-throughput RESTful services, real-time WebSockets, and JWT authentication." },
    { title: "Database Engineering", desc: "Schema design, relational indexing, and document stores with MongoDB & Supabase." },
    { title: "Algorithmic Core", desc: "Data structures, problem solving, and optimization with 200+ solved DSA challenges." },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sector="01"
          tag="ABOUT & CRAFT"
          title="Engineering & Craft"
          subtitle="A passionate full-stack developer dedicated to building responsive, accessible, and aesthetically refined digital experiences."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <TextReveal
              as="h3"
              preset="mask-up"
              delay={100}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug"
            >
              Building with Purpose, Speed & Precision
            </TextReveal>

            <TextReveal
              as="p"
              preset="words"
              delay={180}
              className="text-base sm:text-lg text-[#94a3b8] leading-relaxed font-normal"
            >
              {profileData.bio.about}
            </TextReveal>

            <TextReveal
              as="p"
              preset="words"
              delay={260}
              className="text-base sm:text-lg text-[#94a3b8] leading-relaxed font-normal"
            >
              I specialize in modern JavaScript and TypeScript ecosystems, component-driven UI architectures, and building products that not only work seamlessly but also delight users with high-end visuals and micro-interactions.
            </TextReveal>

            {/* Core Focus Areas List - De-cardified */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusAreas.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all hover:bg-white/[0.04]"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
                    <h4 className="text-sm font-semibold text-white font-mono tracking-tight">{item.title}</h4>
                  </div>
                  <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Specifications Column - Sleek Open-Air List */}
          <div className="lg:col-span-5">
            <div className="p-7 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs uppercase font-semibold text-[#06b6d4] tracking-wider">
                  PROFILE SPECIFICATIONS
                </span>
                <span className="text-xs font-mono text-[#64748b]">VERIFIED</span>
              </div>

              <div className="space-y-4 font-mono text-xs sm:text-sm">
                <div className="flex items-center justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-[#64748b]">Role:</span>
                  <span className="text-white font-medium">{profileData.title}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-[#64748b]">Location:</span>
                  <span className="text-white font-medium">{profileData.location}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-[#64748b]">Education:</span>
                  <span className="text-[#a5b4fc] font-medium">B.Tech CSE (2022-2026)</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-[#64748b]">Problem Solving:</span>
                  <span className="text-[#06b6d4] font-medium">200+ LeetCode DSA</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-[#64748b]">Status:</span>
                  <span className="text-[#34d399] font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
                    Open to Full-Time Roles
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  href="#contact"
                  className="w-full text-center"
                >
                  Let's Work Together ↗
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
