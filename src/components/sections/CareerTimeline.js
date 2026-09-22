"use client";

import SectionHeader from "../ui/SectionHeader";
import Badge from "../ui/Badge";
import TextReveal from "../ui/TextReveal";
import { timelineData } from "@/data/timeline";

export default function CareerTimeline() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          sector="05"
          tag="05 // JOURNEY & FOUNDATION"
          title="Experience & Milestones"
          subtitle="A progression of technical education, algorithmic rigor, and software craftsmanship."
          badgeVariant="indigo"
        />

        {/* Fluid Asymmetrical Continuous Timeline */}
        <div className="relative border-l border-white/10 ml-3 sm:ml-36 space-y-12 pl-6 sm:pl-10">
          {timelineData.map((item, idx) => {
            const accentColor = item.accent || "#6366f1";
            return (
              <div key={idx} className="relative group">
                {/* Year label on left for desktop */}
                <div className="hidden sm:block absolute -left-44 top-1.5 text-right font-mono text-xs font-semibold text-slate-400 group-hover:text-indigo-400 transition-colors w-32 tracking-wider">
                  {item.year}
                </div>

                {/* Timeline Marker Pulse Dot */}
                <div
                  className="absolute -left-[31px] sm:-left-[47px] top-2 w-3.5 h-3.5 rounded-full bg-[#090a0f] border-2 transition-all duration-300 group-hover:scale-125"
                  style={{
                    borderColor: accentColor,
                    boxShadow: `0 0 12px ${accentColor}`,
                  }}
                />

                {/* Mobile year badge */}
                <div className="sm:hidden font-mono text-xs text-indigo-400 font-semibold mb-2">
                  {item.year}
                </div>

                {/* De-cardified Milestone Content Block */}
                <div className="relative p-6 sm:p-7 rounded-2xl bg-[#0d111c]/40 hover:bg-[#0d111c]/90 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-sm group-hover:shadow-[0_4px_30px_rgba(99,102,241,0.08)]">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <Badge variant={idx === 1 ? "cyan" : "indigo"} size="xs">
                      {item.badge}
                    </Badge>
                    <span className="font-mono text-[11px] text-slate-400 tracking-wider">
                      {item.team}
                    </span>
                  </div>

                  <TextReveal
                    as="h3"
                    preset="mask-up"
                    delay={100}
                    className="text-lg sm:text-xl font-bold text-white tracking-tight"
                  >
                    {item.title}
                  </TextReveal>

                  <TextReveal
                    as="p"
                    preset="words"
                    delay={180}
                    className="text-sm text-slate-300/80 leading-relaxed mt-2"
                  >
                    {item.description}
                  </TextReveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
