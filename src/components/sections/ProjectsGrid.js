"use client";

import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import { projectsData } from "@/data/projects";

export default function ProjectsGrid({ onSelectProject }) {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full-Stack SaaS", "Design Systems", "Web Application", "Creative Dev", "Developer Tools"];

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sector="02"
          tag="SELECTED WORKS"
          title="Featured Projects"
          subtitle="Production-grade full-stack applications, interactive design systems, and creative digital experiments."
        />

        {/* Minimal Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-mono text-xs uppercase px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? "bg-[#ff7a00] text-black font-extrabold shadow-[0_0_20px_rgba(255,122,0,0.4)]"
                  : "bg-white/[0.03] text-[#94a3b8] border border-white/10 hover:text-white hover:border-[#ff7a00]/30 hover:bg-white/[0.06]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Modern Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative rounded-3xl p-7 flex flex-col justify-between bg-[#0c1222]/70 border border-white/10 hover:border-[#ff7a00]/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(255,122,0,0.22)] cursor-pointer overflow-hidden"
            >
              {/* Subtle Ambient Hover Sheen */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#ff7a00]/10 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="space-y-5 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-[#ff7a00]/15 text-[#ff9e2c] border border-[#ff7a00]/30">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#38bdf8]/15 text-[#38bdf8] border border-[#38bdf8]/30">
                      FEATURED
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#ff9e2c] transition-colors tracking-tight leading-snug">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-[#38bdf8] mt-1.5 line-clamp-1">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-sm text-[#94a3b8] line-clamp-3 leading-relaxed font-normal">
                  {project.description}
                </p>

                {project.stats && (
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#64748b]">Highlight:</span>
                    <span className="text-white font-medium">{Object.values(project.stats)[0]}</span>
                  </div>
                )}
              </div>

              {/* Bottom Tags & View Link */}
              <div className="pt-6 mt-6 border-t border-white/[0.08] relative z-10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-[#94a3b8] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-mono font-semibold text-[#ff9e2c] group-hover:text-white transition-colors flex items-center gap-1">
                  Inspect ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
