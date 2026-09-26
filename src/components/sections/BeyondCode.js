"use client";

import { useState, useEffect } from "react";
import SectionHeader from "../ui/SectionHeader";
import { sound } from "@/lib/sound";

export default function BeyondCode() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && lightboxOpen) {
        setLightboxOpen(false);
      }
    };
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen]);

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
      badge: "HARDWARE & SILICON",
      badgeColor: "#10b981",
      title: "Hardware Lab & Embedded IoT",
      image: "/arduino.jpg",
      imageCaption: "Arduino Uno + W5100 Ethernet Shield",
      imageDescription:
        "Physical computing & IoT telemetry: interfacing sensors, microcontrollers, and custom C++ firmware with web backends.",
      specs: ["ATmega328P Core", "W5100 LAN Shield", "C++ Firmware"],
      description:
        "Bridging code to physical silicon: exploring low-level device communication, network telemetry, and microcontroller prototyping beyond web browsers.",
      highlights: ["Hardware-Software Bridging", "Embedded C++ Logic", "Socket / LAN Telemetry"],
      stat: "Active Lab",
      statLabel: "Physical Computing",
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
          subtitle="What keeps my thinking sharp outside of pure code: tactical gaming, embedded hardware prototyping, and ergonomic craftsmanship."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between bg-[#0d111c]/60 border border-white/10 hover:border-white/20 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 overflow-hidden"
              style={{
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
              }}
            >
              {/* Soft Ambient Radial Sheen tailored to badge color */}
              <div
                className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: `${pillar.badgeColor}25` }}
              />

              <div className="space-y-5 relative z-10">
                {/* Badge Header */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border tracking-wider uppercase"
                    style={{
                      color: pillar.badgeColor,
                      borderColor: `${pillar.badgeColor}40`,
                      backgroundColor: `${pillar.badgeColor}15`,
                    }}
                  >
                    {pillar.badge}
                  </span>
                </div>

                {/* Optional Interactive Glass Reveal Photo Card for Hardware */}
                {pillar.image && (
                  <div
                    onClick={() => {
                      sound.playBlip();
                      setLightboxOpen(true);
                    }}
                    className="relative w-full h-48 rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#10b981]/40 transition-all duration-500 cursor-pointer shadow-lg bg-[#070a12]"
                    title="Click to view full photo"
                  >
                    {/* Background Hardware Photograph */}
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Depth Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090d18] via-black/20 to-black/35 pointer-events-none" />

                    {/* Top Micro Hardware Tags */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10 pointer-events-none">
                      <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-[#10b981]/50 text-[#a7f3d0] flex items-center gap-1.5 shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                        UNO + SHIELD
                      </span>
                      <span className="text-[9px] font-mono text-white/80 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">
                        PHYSICAL I/O
                      </span>
                    </div>

                    {/* Sliding Frosted Glass Reveal Lens Drawer */}
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-[#090d18]/90 backdrop-blur-xl border-t border-white/15 translate-y-[calc(100%-38px)] group-hover:translate-y-0 transition-transform duration-500 ease-out z-20 flex flex-col justify-end">
                      {/* Drawer Handle / Title */}
                      <div className="flex items-center justify-between pb-1">
                        <span className="text-[11px] font-mono font-bold text-white flex items-center gap-1.5">
                          <span className="text-[#10b981]">⚡</span> Circuit Specs
                        </span>
                        <span className="text-[10px] font-mono text-[#10b981] flex items-center gap-1 group-hover:opacity-0 transition-opacity">
                          Hover to inspect ↗
                        </span>
                      </div>

                      {/* Small Description Rendered on Image */}
                      <p className="text-[11px] text-[#cbd5e1] leading-relaxed font-sans pt-1">
                        {pillar.imageDescription}
                      </p>

                      {/* Hardware Chips */}
                      <div className="flex flex-wrap gap-1 mt-2 pt-2 border-t border-white/10">
                        {pillar.specs?.map((spec, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[#a7f3d0]"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Main Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-1.5 pt-1">
                  {pillar.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-[#cbd5e1] font-mono">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: pillar.badgeColor }} />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Stat Card */}
              <div className="pt-5 mt-5 border-t border-white/[0.08] relative z-10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#64748b] block uppercase">{pillar.statLabel}</span>
                  <span className="text-sm sm:text-base font-bold text-white font-mono">{pillar.stat}</span>
                </div>
                <div
                  className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white transition-colors text-xs"
                  style={{ borderColor: `${pillar.badgeColor}30` }}
                >
                  ↗
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Photo Preview Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#0d111c] border border-white/15 rounded-3xl p-6 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{ borderTopColor: "#10b981", borderTopWidth: 3 }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30">
                  HARDWARE SPECIMEN
                </span>
                <span className="text-xs font-mono text-slate-400">Arduino Uno + Ethernet W5100</span>
              </div>
              <button
                onClick={() => setLightboxOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors text-sm font-mono cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* High-Res Photo Container */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 aspect-video flex items-center justify-center">
              <img
                src="/arduino.jpg"
                alt="Arduino Uno and Ethernet Shield"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Detailed Spec breakdown */}
            <div className="mt-5 space-y-3">
              <h4 className="text-base font-bold text-white font-sans">
                Physical Computing, Microcontrollers & IoT
              </h4>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                Featured setup: An Arduino Uno microcontroller mounted with an Ethernet W5100 & MicroSD shield. Demonstrates hands-on low-level firmware engineering in C++, handling real-time sensor loops, packet serialisation, and streaming hardware telemetry directly to full-stack cloud servers.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 text-[11px] font-mono">
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-emerald-400">
                  MCU: ATmega328P @ 16 MHz
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-emerald-400">
                  Network: W5100 TCP/IP Hardware Stack
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-emerald-400">
                  Storage: SPI MicroSD Card Bus
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-emerald-400">
                  Lang: Embedded C++
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
