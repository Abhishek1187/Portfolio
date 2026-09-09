"use client";

import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import TelemetryMeter from "../ui/TelemetryMeter";
import TechIcon from "../ui/TechIcon";
import { skillsData } from "@/data/skills";
import { sound } from "@/lib/sound";

export default function Skills() {
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "breakdown"

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
          <SectionHeader
            sector="04"
            tag="TECH INVENTORY & STACK"
            title="Skills & Technologies"
            subtitle="Modern languages, frameworks, databases, and design software I use to engineer clean, high-performance web products."
            badgeVariant="volt"
            className="mb-0"
          />

          {/* View Toggle */}
          <div className="flex items-center gap-2 p-1 rounded-[39.3px] bg-[#14161b] border border-[#22252c] self-start sm:self-auto shrink-0 mb-6 sm:mb-0">
            <button
              onClick={() => {
                sound.playBeep(880, 0.02);
                setViewMode("grid");
              }}
              className={`font-mono text-xs uppercase px-4 py-1.5 rounded-[39.3px] transition-all ${
                viewMode === "grid"
                  ? "bg-[#d2ff00] text-black font-extrabold shadow-[0_0_15px_rgba(210,255,0,0.4)]"
                  : "text-[#a1a1aa] hover:text-[#f4f4ed]"
              }`}
            >
              Logo Grid
            </button>
            <button
              onClick={() => {
                sound.playBeep(980, 0.02);
                setViewMode("breakdown");
              }}
              className={`font-mono text-xs uppercase px-4 py-1.5 rounded-[39.3px] transition-all ${
                viewMode === "breakdown"
                  ? "bg-[#d2ff00] text-black font-extrabold shadow-[0_0_15px_rgba(210,255,0,0.4)]"
                  : "text-[#a1a1aa] hover:text-[#f4f4ed]"
              }`}
            >
              Proficiency Breakdown
            </button>
          </div>
        </div>

        {/* 1. Clean Logo Grid View */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 mt-10">
            {skillsData.featured.map((skill, idx) => (
              <Card
                key={idx}
                interactive
                glow="volt"
                className="p-5 flex flex-col items-center justify-center text-center space-y-3 group hover:border-[#d2ff00]/60 hover:shadow-[0_0_20px_rgba(210,255,0,0.2)] transition-all"
              >
                {/* Tech Logo Avatar */}
                <div className="w-14 h-14 rounded-[8.77px] bg-[#14161b] border border-[#22252c] flex items-center justify-center group-hover:scale-110 group-hover:border-[#d2ff00]/40 transition-transform shadow-inner">
                  <TechIcon name={skill.icon} className="w-8 h-8 transition-transform group-hover:rotate-3" />
                </div>

                {/* Skill Name & Tag */}
                <div className="space-y-1">
                  <h4 className="font-extrabold text-sm sm:text-base text-[#f4f4ed] group-hover:text-[#d2ff00] transition-colors uppercase tracking-tight">
                    {skill.name}
                  </h4>
                  <span className="font-mono text-[10.67px] text-[#71717a] block">
                    {skill.tag}
                  </span>
                </div>

                {/* Level badge */}
                <div className="pt-1">
                  <span className="font-mono text-[10.67px] px-2 py-0.5 rounded-[6.4px] bg-black/60 border border-[#22252c] text-[#a1a1aa] group-hover:text-[#d2ff00] group-hover:border-[#d2ff00]/30 transition-colors">
                    {skill.level}% Mastery
                  </span>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          /* 2. Detailed Category Breakdown View with Logos */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {skillsData.categories.map((category, idx) => (
              <Card
                key={idx}
                glow={idx === 0 ? "volt" : idx === 1 ? "cyan" : "violet"}
                className="p-6 sm:p-8 space-y-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#22252c] pb-3 mb-6">
                    <h3 className="font-mono text-xs uppercase font-bold text-[#f4f4ed] tracking-wider">
                      // {category.name}
                    </h3>
                    <Badge variant={idx === 0 ? "volt" : idx === 1 ? "cyan" : "violet"} size="xs">
                      STACK
                    </Badge>
                  </div>

                  <div className="space-y-5">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-2">
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <div className="flex items-center gap-2.5">
                            <div className="w-6 h-6 rounded-[6.4px] bg-[#14161b] border border-[#22252c] flex items-center justify-center p-1 shrink-0">
                              <TechIcon name={skill.icon} className="w-4 h-4" />
                            </div>
                            <span className="font-mono font-medium text-[#f4f4ed]">
                              {skill.name}
                            </span>
                          </div>
                          <span className="font-mono font-bold text-[#d2ff00]">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress meter */}
                        <div className="h-1.5 w-full bg-[#14161b] rounded-full overflow-hidden border border-[#22252c]">
                          <div
                            className="h-full rounded-full transition-all duration-1000"
                            style={{
                              width: `${skill.level}%`,
                              backgroundColor: category.accent,
                              boxShadow: `0 0 8px ${category.accent}80`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#22252c] flex flex-wrap gap-1.5">
                  {category.skills.map((skill, sIdx) => (
                    <Badge key={sIdx} variant="dark" size="xs">
                      {skill.name.split(" ")[0]}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
