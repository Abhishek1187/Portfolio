"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../ui/SectionHeader";
import { projectsData } from "@/data/projects";
import { sound } from "@/lib/sound";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsGrid({ onSelectProject }) {
  const [filter, setFilter] = useState("All");
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  // Dynamically extract categories from projectsData so all pills are functional
  const categories = ["All", ...Array.from(new Set(projectsData.map((p) => p.category)))];

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  // GSAP ScrollTrigger: Scrub-synchronized garage roll-in (scroll down) & roll-out (scroll back)
  useEffect(() => {
    const sectionEl = sectionRef.current;
    const gridEl = gridRef.current;
    if (!sectionEl || !gridEl) return;

    // Refresh ScrollTrigger once parent layout and window.scrollTo(0,0) settle
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const cardWrappers = gridEl.querySelectorAll(".project-card-wrapper");
      const rails = gridEl.querySelectorAll(".garage-rail");
      if (!cardWrappers || cardWrappers.length === 0) return;

      // Both cards start docked off to the right (Bay 1 at +260px, Bay 2 at +440px)
      gsap.set(cardWrappers, {
        x: (index) => (isMobile ? (index === 0 ? 110 : 190) : (index === 0 ? 260 : 440)),
        y: (index) => (index === 0 ? 8 : 16),
        opacity: 0,
        scale: 0.93,
        filter: "blur(6px)",
      });

      gsap.set(rails, {
        scaleX: 0,
        transformOrigin: "right center",
        opacity: 0.2,
      });

      // Master ScrollTrigger directly tied to gridEl (the cards):
      // Scroll Down -> Cards slide in from right and show up
      // Scroll Back (Upwards) -> Cards slide out to right and vanish (vice versa)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: gridEl,
          start: "top 95%",
          end: "center 52%",
          scrub: 0.9, // Responsive, silky smooth scroll scrub
          invalidateOnRefresh: true,
        },
      });

      // 1. Both cards glide from the right side into their bays
      tl.to(
        cardWrappers,
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          ease: "power2.out",
          stagger: isMobile ? 0.12 : 0.2,
        },
        0
      );

      // 2. Overhead bay laser guideline streaks expand from right to left
      tl.to(
        rails,
        {
          scaleX: 1,
          opacity: 1,
          ease: "power2.out",
          stagger: isMobile ? 0.12 : 0.2,
        },
        0.05
      );
    }, sectionRef);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [filter]);

  // Replay roll-in manually via HUD button
  const handleManualReplay = () => {
    sound.playBeep(1120, 0.05);
    const gridEl = gridRef.current;
    if (!gridEl) return;

    const cardWrappers = gridEl.querySelectorAll(".project-card-wrapper");
    const rails = gridEl.querySelectorAll(".garage-rail");
    if (!cardWrappers || cardWrappers.length === 0) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    gsap.killTweensOf(cardWrappers);
    gsap.killTweensOf(rails);

    const tl = gsap.timeline();

    tl.fromTo(
      cardWrappers,
      {
        x: (index) => (isMobile ? (index === 0 ? 100 : 180) : (index === 0 ? 240 : 420)),
        y: (index) => (index === 0 ? 8 : 16),
        opacity: 0,
        scale: 0.94,
        filter: "blur(6px)",
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.05,
        ease: "power4.out",
        stagger: 0.18,
      },
      0
    );

    tl.fromTo(
      rails,
      { scaleX: 0, transformOrigin: "right center", opacity: 0.2 },
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.8,
        ease: "expo.out",
        stagger: 0.18,
      },
      0.1
    );
  };

  const handleFilterClick = (cat) => {
    if (cat === filter) return;
    sound.playBeep(920, 0.04);
    setFilter(cat);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sector="02"
          tag="SELECTED WORKS"
          title="Featured Projects"
          subtitle="Production-grade full-stack applications, interactive design systems, and creative digital experiments."
        />

        {/* Minimal Category Filter Pills & Garage Bay Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-12">
          <div className="flex flex-wrap items-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterClick(cat)}
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

          {/* Interactive Garage Roll-In Trigger */}
          <button
            onClick={handleManualReplay}
            title="Replay horizontal garage roll-in from the right"
            className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#ff7a00]/30 bg-[#ff7a00]/10 text-[#ff9e2c] hover:bg-[#ff7a00] hover:text-black transition-all duration-200 cursor-pointer shadow-[0_0_12px_rgba(255,122,0,0.15)] group"
          >
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] group-hover:bg-black animate-pulse" />
            <span>Garage Roll-In ↺</span>
          </button>
        </div>

        {/* Dual-Bay Garage Grid (Both Featured Projects) */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, idx) => (
            /* Outer Wrapper: Receives Scroll-Scrub Garage Translation (Right to Left & Left to Right) */
            <div
              key={project.id}
              className="project-card-wrapper relative will-change-transform"
            >
              {/* Inner Card: Preserves Interactive CSS Hover Lifts & Ambient Glows */}
              <div
                onClick={() => onSelectProject(project)}
                className="project-card group relative rounded-3xl p-8 flex flex-col justify-between bg-[#0c1222]/80 border border-white/10 hover:border-[#ff7a00]/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_48px_-15px_rgba(255,122,0,0.25)] cursor-pointer overflow-hidden h-full"
              >
                {/* Ambient Hover Glow */}
                <div className="absolute top-0 right-0 w-52 h-52 bg-[#ff7a00]/10 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Garage Bay Overhead Laser Guideline (Expands right to left) */}
                <div className="garage-rail absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-l from-[#38bdf8] via-[#ff7a00] to-transparent opacity-80 pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-medium px-3.5 py-1 rounded-full bg-[#ff7a00]/15 text-[#ff9e2c] border border-[#ff7a00]/30">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#64748b]">BAY 0{idx + 1}</span>
                      {project.featured && (
                        <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#38bdf8]/15 text-[#38bdf8] border border-[#38bdf8]/30">
                          FEATURED
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#ff9e2c] transition-colors tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm text-[#38bdf8] mt-2 line-clamp-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-[#94a3b8] line-clamp-3 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {project.stats && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono">
                      {Object.entries(project.stats).map(([k, v]) => (
                        <div key={k} className="flex flex-col">
                          <span className="text-[#64748b] text-[10px] uppercase">{k}</span>
                          <span className="text-white font-medium truncate">{v}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Tags & View Link */}
                <div className="pt-6 mt-6 border-t border-white/[0.08] relative z-10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5 max-w-[75%]">
                    {project.tags.slice(0, 4).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-[#94a3b8] border border-white/5"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
