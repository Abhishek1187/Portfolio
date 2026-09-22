"use client";

import SectionHeader from "../ui/SectionHeader";

export default function BeyondCode() {
  const pillars = [
    {
      badge: "STRATEGY & COGNITION",
      badgeColor: "#6366f1",
      title: "Tactical Thinking & Gaming",
      description:
        "Competitive gaming and high-tempo FPS sharpen spatial reflexes, rapid team coordination, and structured decision-making under high-pressure scenarios.",
      highlights: ["Strategic Adaptability", "Split-Second Decision Making", "Effective Team Comms"],
      stat: "Diamond Peak",
      statLabel: "Valorant Competitive",
    },
    {
      badge: "WORKSPACE & ERGONOMICS",
      badgeColor: "#06b6d4",
      title: "Deep-Work Battlestation",
      description:
        "Engineered for sustained focus and ergonomics: high-refresh color-accurate display, rapid-trigger mechanical hardware, and clutter-free desktop minimalism.",
      highlights: ["High-Refresh Fast-IPS", "Custom Mechanical Typing", "Acoustic Insulation"],
      stat: "Clean Minimalist",
      statLabel: "Hardware Philosophy",
    },
    {
      badge: "GROWTH & EXPERIMENTATION",
      badgeColor: "#8b5cf6",
      title: "Continuous Craft & Architecture",
      description:
        "Beyond commercial deliverables, I explore software architecture patterns, open-source tools, algorithmic puzzles, and emerging frontend animation physics.",
      highlights: ["DSA Problem Solving", "Creative WebGL & Canvas", "System Design Patterns"],
      stat: "200+ Solved",
      statLabel: "LeetCode & Algorithms",
    },
  ];

  return (
    <section id="beyond" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sector="04"
          tag="BEYOND CODE"
          title="Perspective & Mindset"
          subtitle="What keeps my thinking sharp outside of pure code: strategic gaming, hardware ergonomics, and relentless curiosity."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl p-8 flex flex-col justify-between bg-[#0d111c]/60 border border-white/10 hover:border-[#6366f1]/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.2)] overflow-hidden"
            >
              {/* Soft Ambient Radial Sheen */}
              <div
                className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: `${pillar.badgeColor}25` }}
              />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span
                    className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full border"
                    style={{
                      color: pillar.badgeColor,
                      borderColor: `${pillar.badgeColor}40`,
                      backgroundColor: `${pillar.badgeColor}15`,
                    }}
                  >
                    {pillar.badge}
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#94a3b8] leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-2 pt-2">
                  {pillar.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2.5 text-xs text-[#cbd5e1] font-mono">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: pillar.badgeColor }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Stat Card */}
              <div className="pt-6 mt-6 border-t border-white/[0.08] relative z-10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#64748b] block uppercase">{pillar.statLabel}</span>
                  <span className="text-base font-bold text-white font-mono">{pillar.stat}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white transition-colors">
                  ↗
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
