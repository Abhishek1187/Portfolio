"use client";

import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { timelineData } from "@/data/timeline";

export default function CareerTimeline() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sector="06"
          tag="CAREER & EDUCATION"
          title="Experience & Milestones"
          subtitle="A timeline of my professional journey, companies worked with, and educational background."
          badgeVariant="volt"
        />

        <div className="relative border-l-2 border-[#22252c] ml-4 sm:ml-32 space-y-12 pl-6 sm:pl-10">
          {timelineData.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Year label on left for desktop */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right font-mono text-xs font-bold text-[#d2ff00] w-24">
                {item.year}
              </div>

              {/* Timeline Marker Dot */}
              <div
                className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-black border-2 transition-all duration-300 group-hover:scale-125"
                style={{ borderColor: item.accent || "#d2ff00", boxShadow: `0 0 10px ${item.accent || "#d2ff00"}` }}
              />

              {/* Mobile year badge */}
              <div className="sm:hidden font-mono text-xs text-[#d2ff00] font-bold mb-2">
                {item.year}
              </div>

              {/* Milestone Card */}
              <Card
                glow="volt"
                className="p-6 space-y-3 transition-transform hover:translate-x-1"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Badge variant="volt" size="xs">
                    {item.badge}
                  </Badge>
                  <span className="font-mono text-xs text-[#a1a1aa]">
                    ORGANIZATION: {item.team}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-[#f4f4ed] uppercase">
                  {item.title}
                </h3>

                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
