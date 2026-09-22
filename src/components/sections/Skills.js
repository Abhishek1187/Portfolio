"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import TelemetryMeter from "../ui/TelemetryMeter";
import TechIcon from "../ui/TechIcon";
import { skillsData } from "@/data/skills";
import { sound } from "@/lib/sound";

export default function Skills() {
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "breakdown"
  const [isMobile, setIsMobile] = useState(false);

  const stageRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP Proximity Scale effect listener
  useEffect(() => {
    if (viewMode !== "grid") return;
    const stage = stageRef.current;
    if (!stage) return;

    // Honor reduced-motion accessibility preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const radius = 200;
    const maxScale = 2.5;
    const dur = 0.35;

    const handleMouseMove = (e) => {
      const items = stage.querySelectorAll(".proximity-item");
      if (!items.length) return;

      const mx = e.clientX;
      const my = e.clientY;

      items.forEach((item) => {
        const r = item.getBoundingClientRect();
        const d = Math.hypot(
          mx - (r.left + r.width / 2),
          my - (r.top + r.height / 2)
        );
        const p = gsap.utils.clamp(0, 1, gsap.utils.mapRange(0, radius, 1, 0, d));

        gsap.to(item, {
          scale: 1 + (maxScale - 1) * p,
          duration: dur,
          overwrite: "auto",
          ease: "power2.out",
        });

        if (p > 0.05) {
          item.style.zIndex = Math.round(50 * p) + 10;
        } else {
          item.style.zIndex = "1";
        }
      });
    };

    const handleMouseLeave = () => {
      const items = stage.querySelectorAll(".proximity-item");
      items.forEach((item) => {
        gsap.to(item, {
          scale: 1,
          duration: dur * 2,
          overwrite: "auto",
          ease: "power2.out",
          onComplete: () => {
            item.style.zIndex = "1";
          },
        });
      });
    };

    stage.addEventListener("mousemove", handleMouseMove);
    stage.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      stage.removeEventListener("mousemove", handleMouseMove);
      stage.removeEventListener("mouseleave", handleMouseLeave);
      const items = stage.querySelectorAll(".proximity-item");
      items.forEach((item) => {
        gsap.killTweensOf(item);
        item.style.transform = "scale(1)";
        item.style.zIndex = "1";
      });
    };
  }, [viewMode, isMobile]);

  // Asymmetric spatial distribution matching reference screenshot
  const DESKTOP_COORDS = [
    { x: "10%", y: "18%" },  // React.js (top left)
    { x: "34%", y: "10%" },  // Node.js (top mid-left)
    { x: "64%", y: "14%" },  // Express.js (top mid-right)
    { x: "88%", y: "12%" },  // JavaScript (top right)
    { x: "14%", y: "50%" },  // TypeScript (mid left)
    { x: "45%", y: "44%" },  // C++ (center)
    { x: "77%", y: "47%" },  // Python (mid right)
    { x: "7%", y: "84%" },   // Java (bottom left)
    { x: "33%", y: "82%" },  // MongoDB (bottom mid-left)
    { x: "52%", y: "67%" },  // Firebase (center lower)
    { x: "66%", y: "86%" },  // Supabase (bottom mid-right)
    { x: "90%", y: "80%" },  // Tailwind CSS (bottom right)
  ];

  const MOBILE_COORDS = [
    { x: "24%", y: "8%" },
    { x: "76%", y: "13%" },
    { x: "28%", y: "24%" },
    { x: "74%", y: "29%" },
    { x: "22%", y: "41%" },
    { x: "78%", y: "46%" },
    { x: "26%", y: "58%" },
    { x: "72%", y: "63%" },
    { x: "24%", y: "75%" },
    { x: "78%", y: "79%" },
    { x: "28%", y: "91%" },
    { x: "74%", y: "94%" },
  ];

  const coords = isMobile ? MOBILE_COORDS : DESKTOP_COORDS;

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionHeader
            sector="03"
            tag="EXPERTISE & STACK"
            title="Skills & Technologies"
            subtitle="Modern languages, frameworks, databases, and architectural tools I use to engineer clean, high-performance web products."
            className="mb-0"
          />

          {/* View Toggle */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/10 self-start sm:self-auto shrink-0 mb-6 sm:mb-0 backdrop-blur-md">
            <button
              onClick={() => {
                sound.playBeep(880, 0.02);
                setViewMode("grid");
              }}
              className={`font-mono text-xs uppercase px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                viewMode === "grid"
                  ? "bg-[#ff7a00] text-black font-extrabold shadow-[0_0_15px_rgba(255,122,0,0.4)]"
                  : "text-[#94a3b8] hover:text-white"
              }`}
            >
              Asymmetric Scatter
            </button>
            <button
              onClick={() => {
                sound.playBeep(980, 0.02);
                setViewMode("breakdown");
              }}
              className={`font-mono text-xs uppercase px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                viewMode === "breakdown"
                  ? "bg-[#ff7a00] text-black font-extrabold shadow-[0_0_15px_rgba(255,122,0,0.4)]"
                  : "text-[#94a3b8] hover:text-white"
              }`}
            >
              Proficiency Breakdown
            </button>
          </div>
        </div>

        {/* 1. Boundary-Free Asymmetric Kinetic Scatter Canvas */}
        {viewMode === "grid" ? (
          <div
            id="stage"
            ref={stageRef}
            style={{
              position: "relative",
              width: "100%",
              height: isMobile ? "680px" : "560px",
              cursor: "crosshair",
              background: "transparent",
              border: "none",
              boxShadow: "none",
              userSelect: "none",
              overflow: "visible",
            }}
          >
            {skillsData.featured.map((skill, idx) => {
              const pos = coords[idx] || { x: "50%", y: "50%" };
              return (
                <div
                  key={idx}
                  className="proximity-item"
                  style={{
                    position: "absolute",
                    left: pos.x,
                    top: pos.y,
                    transform: "translate(-50%, -50%)",
                    transformOrigin: "center center",
                    background: "transparent",
                    border: "none",
                    boxShadow: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    pointerEvents: "none",
                    willChange: "transform",
                    WebkitFontSmoothing: "subpixel-antialiased",
                    zIndex: 1,
                  }}
                >
                  {/* Floating Icon - Zero Boundary */}
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      pointerEvents: "none",
                      filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.6))",
                    }}
                  >
                    <TechIcon name={skill.icon} className="w-10 h-10" />
                  </div>

                  {/* Clean Text Label */}
                  <span
                    style={{
                      fontFamily: "Mori, sans-serif",
                      fontWeight: 600,
                      fontSize: "0.86rem",
                      color: "#fffce1",
                      textAlign: "center",
                      display: "inline-block",
                      whiteSpace: "nowrap",
                      pointerEvents: "none",
                      letterSpacing: "-0.01em",
                      textShadow: "0 2px 8px rgba(0,0,0,0.85)",
                    }}
                  >
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        ) : (


          /* 2. Detailed Category Breakdown View with Logos */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {skillsData.categories.map((category, idx) => (
              <Card
                key={idx}
                glow={idx === 0 ? "orange" : idx === 1 ? "cyan" : "indigo"}
                className="p-6 sm:p-8 space-y-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
                    <h3 className="font-mono text-xs uppercase font-bold text-[#f4f4ed] tracking-wider">
                      {category.name}
                    </h3>
                    <Badge variant={idx === 0 ? "orange" : idx === 1 ? "cyan" : "indigo"} size="xs">
                      STACK
                    </Badge>
                  </div>

                  <div className="space-y-5">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-2">
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <div className="flex items-center gap-2.5">
                            <div className="w-6 h-6 rounded-[6.4px] bg-[#14161b] border border-white/10 flex items-center justify-center p-1 shrink-0">
                              <TechIcon name={skill.icon} className="w-4 h-4" />
                            </div>
                            <span className="font-mono font-medium text-[#f4f4ed]">
                              {skill.name}
                            </span>
                          </div>
                          <span
                            className="font-mono font-bold"
                            style={{ color: category.accent }}
                          >
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
