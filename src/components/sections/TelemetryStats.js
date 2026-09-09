"use client";

import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import TelemetryMeter from "../ui/TelemetryMeter";
import { profileData } from "@/data/profile";

export default function TelemetryStats({ activeMode }) {
  const currentStats = activeMode === "racing" ? profileData.stats.f1 : profileData.stats.gaming;

  return (
    <section id="telemetry" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sector="02"
          tag="REAL-TIME TELEMETRY"
          title={activeMode === "racing" ? "Formula 1 Grand Prix Metrics" : "Quadrant Gaming & Sim Performance"}
          subtitle="Precision data extracted from real-world telemetry feeds, simulator sensor arrays, and digital entertainment analytics."
          badgeVariant={activeMode === "racing" ? "papaya" : "volt"}
        />

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentStats.map((stat, idx) => (
            <Card
              key={idx}
              glow={activeMode === "racing" ? "papaya" : "volt"}
              className="p-6 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#a1a1aa] uppercase tracking-wider">
                  {stat.unit}
                </span>
                <span className="font-mono text-xs px-2 py-0.5 rounded-[6.4px] bg-[#14161b] text-[#d2ff00] border border-[#22252c]">
                  {stat.change}
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-black text-[#f4f4ed] font-mono tracking-tight">
                {stat.value}
              </div>

              <div className="text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Live Gauges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-5">
            <h3 className="font-mono text-xs uppercase font-bold text-[#d2ff00] tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d2ff00]" />
              // MOTORSPORT PRECISION GAUGES
            </h3>
            <TelemetryMeter label="Qualifying Single-Lap Attack" value={98} max={100} color="#d2ff00" secondaryLabel="Sector 1-3 Delta" />
            <TelemetryMeter label="Race Craft & Tire Management" value={96} max={100} color="#ff8000" secondaryLabel="Degradation Index" />
            <TelemetryMeter label="Wet Weather Mastery (Slick to Intermediate)" value={95} max={100} color="#00f0ff" secondaryLabel="Grip Vector" />
          </Card>

          <Card className="p-6 space-y-5">
            <h3 className="font-mono text-xs uppercase font-bold text-[#d2ff00] tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d2ff00]" />
              // SIMULATION & CONTENT ENGINE
            </h3>
            <TelemetryMeter label="iRacing Pro License Index" value={99} max={100} color="#d2ff00" secondaryLabel="iRating: 8.2K+" />
            <TelemetryMeter label="Hardware Optimization & Telemetry Rig" value={97} max={100} color="#a855f7" secondaryLabel="Direct Drive Latency" />
            <TelemetryMeter label="Creator Community Engagement" value={98} max={100} color="#ff8000" secondaryLabel="Quadrant Global" />
          </Card>
        </div>
      </div>
    </section>
  );
}
