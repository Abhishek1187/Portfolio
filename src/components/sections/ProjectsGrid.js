"use client";

import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { projectsData } from "@/data/projects";
import { sound } from "@/lib/sound";

export default function ProjectsGrid({ onSelectProject }) {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full-Stack SaaS", "Design Systems", "Web Application", "Creative Dev", "Developer Tools"];

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sector="03"
          tag="FEATURED WORK"
          title="Projects & Applications"
          subtitle="A selection of full-stack applications, accessible design systems, and creative digital experiments."
          badgeVariant="volt"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.playBeep(880, 0.02);
                setFilter(cat);
              }}
              className={`font-mono text-xs uppercase px-4 py-2 rounded-[39.3px] transition-all ${
                filter === cat
                  ? "bg-[#d2ff00] text-black font-extrabold shadow-[0_0_15px_rgba(210,255,0,0.4)]"
                  : "bg-[#14161b] text-[#a1a1aa] border border-[#22252c] hover:text-[#f4f4ed] hover:border-[#d2ff00]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              interactive
              glow="volt"
              className="flex flex-col justify-between p-6 space-y-6 group"
              onClick={() => {
                sound.playShiftBlip();
                onSelectProject(project);
              }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="volt" size="xs">
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <span className="font-mono text-[10.67px] px-2 py-0.5 rounded-[6.4px] bg-[#d2ff00] text-black font-black">
                      FEATURED
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-[#f4f4ed] group-hover:text-[#d2ff00] transition-colors uppercase leading-snug">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-[#a1a1aa] mt-1.5 line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#71717a] line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Stat pill if exists */}
                {project.stats && (
                  <div className="p-2.5 rounded-[6.4px] bg-[#14161b] border border-[#22252c] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#a1a1aa]">METRIC:</span>
                    <span className="text-[#d2ff00] font-bold">{Object.values(project.stats)[0]}</span>
                  </div>
                )}
              </div>

              {/* Bottom tag & action preview */}
              <div className="space-y-4 pt-4 border-t border-[#22252c]">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="dark" size="xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="dark" size="xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="font-mono text-xs text-[#d2ff00] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                    <span>View Project Details</span>
                    <span>→</span>
                  </span>
                  <span className="text-xs text-[#a1a1aa] font-mono">
                    [INSPECT]
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
