"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import SectionHeader from "../ui/SectionHeader";
import TechIcon from "../ui/TechIcon";
import { skillsData } from "@/data/skills";

export default function Skills() {
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
    const stage = stageRef.current;
    if (!stage) return;

    // Honor reduced-motion accessibility preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const radius = 220;
    const baseScale = 0.65;
    const maxScale = 1.35;
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

        // High-fidelity scale: scales from native downscale (0.65) up to maxScale (1.35)
        // Never exceeds rasterization boundary, guaranteeing 100% crisp sharpness
        gsap.to(item, {
          scale: baseScale + (maxScale - baseScale) * p,
          duration: dur,
          overwrite: "auto",
          ease: "power2.out",
          zIndex: p > 0.05 ? 50 : 1,
        });

        // GPU-composited ambient glow halo (zero filter thrashing, zero blurriness)
        const glow = item.querySelector(".icon-glow");
        if (glow) {
          gsap.to(glow, {
            opacity: p > 0.05 ? p * 0.9 : 0,
            scale: 0.8 + p * 0.45,
            duration: dur,
            overwrite: "auto",
          });
        }

        // Clean text brightness enhancement
        const textLabel = item.querySelector(".text-label");
        if (textLabel) {
          gsap.to(textLabel, {
            color: p > 0.1 ? "#ffffff" : "#fffce1",
            duration: dur,
            overwrite: "auto",
          });
        }
      });
    };

    const handleMouseLeave = () => {
      const items = stage.querySelectorAll(".proximity-item");
      items.forEach((item) => {
        gsap.to(item, {
          scale: baseScale,
          duration: 0.5,
          overwrite: "auto",
          ease: "power2.out",
          zIndex: 1,
        });
        const glow = item.querySelector(".icon-glow");
        if (glow) {
          gsap.to(glow, {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            overwrite: "auto",
          });
        }
        const textLabel = item.querySelector(".text-label");
        if (textLabel) {
          gsap.to(textLabel, {
            color: "#fffce1",
            duration: 0.5,
            overwrite: "auto",
          });
        }
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
        item.style.transform = `translate3d(-50%, -50%, 0) scale(${baseScale})`;
        item.style.zIndex = "1";
      });
    };
  }, [isMobile]);

  // Continuous Harmonic Zero-G Cosmic Drift Animation Loop
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const floatInners = stage.querySelectorAll(".floating-inner");
    if (!floatInners.length) return;

    const tweens = [];

    floatInners.forEach((inner, idx) => {
      // Deterministic pseudo-random parameters for organic multi-axis drift
      const durX = 3.6 + ((idx * 0.73) % 2.8);
      const durY = 4.2 + ((idx * 0.91) % 3.2);
      const durRot = 5.5 + ((idx * 1.1) % 3.0);

      const deltaX = (idx % 2 === 0 ? 1 : -1) * (12 + ((idx * 4) % 14));
      const deltaY = (idx % 3 === 0 ? 1 : -1) * (14 + ((idx * 5) % 16));
      const deltaRot = (idx % 2 === 0 ? 1 : -1) * (3.5 + ((idx * 1.3) % 3.5));

      const delay = (idx * 0.28) % 1.6;

      // X-axis gentle harmonic wave
      const twX = gsap.to(inner, {
        x: deltaX,
        duration: durX,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay,
      });

      // Y-axis gentle harmonic wave (different frequency for Lissajous organic curve)
      const twY = gsap.to(inner, {
        y: deltaY,
        duration: durY,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: delay * 0.8,
      });

      // Subtle aerodynamic micro-tilt
      const twRot = gsap.to(inner, {
        rotation: deltaRot,
        duration: durRot,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: delay * 1.2,
      });

      tweens.push(twX, twY, twRot);
    });

    return () => {
      tweens.forEach((t) => t.kill());
      floatInners.forEach((inner) => {
        gsap.killTweensOf(inner);
        inner.style.transform = "none";
      });
    };
  }, [isMobile]);

  // Asymmetric spatial distribution for 16 skills
  const DESKTOP_COORDS = [
    { x: "10%", y: "16%" },  // 1. React.js (top left)
    { x: "32%", y: "11%" },  // 2. Node.js (top mid-left)
    { x: "55%", y: "14%" },  // 3. Express.js (top mid)
    { x: "75%", y: "11%" },  // 4. JavaScript (top mid-right)
    { x: "92%", y: "17%" },  // 5. TypeScript (top right)
    { x: "12%", y: "41%" },  // 6. Redux (mid left)
    { x: "35%", y: "37%" },  // 7. C++ (mid center-left)
    { x: "62%", y: "41%" },  // 8. Python (mid center-right)
    { x: "87%", y: "39%" },  // 9. MongoDB (mid right)
    { x: "26%", y: "65%" },  // 10. Redis (lower mid-left)
    { x: "50%", y: "63%" },  // 11. Firebase (center lower)
    { x: "74%", y: "65%" },  // 12. Supabase (lower mid-right)
    { x: "8%", y: "70%" },   // 13. Docker (lower left)
    { x: "33%", y: "89%" },  // 14. Linux (bottom mid-left)
    { x: "65%", y: "89%" },  // 15. AWS (bottom mid-right)
    { x: "92%", y: "69%" },  // 16. Tailwind CSS (lower right)
  ];

  const MOBILE_COORDS = [
    { x: "24%", y: "4%" },   // 1. React.js
    { x: "76%", y: "10%" },  // 2. Node.js
    { x: "26%", y: "16%" },  // 3. Express.js
    { x: "74%", y: "22%" },  // 4. JavaScript
    { x: "22%", y: "28%" },  // 5. TypeScript
    { x: "78%", y: "34%" },  // 6. Redux
    { x: "25%", y: "40%" },  // 7. C++
    { x: "75%", y: "46%" },  // 8. Python
    { x: "24%", y: "52%" },  // 9. MongoDB
    { x: "76%", y: "58%" },  // 10. Redis
    { x: "24%", y: "64%" },  // 11. Firebase
    { x: "76%", y: "70%" },  // 12. Supabase
    { x: "24%", y: "76%" },  // 13. Docker
    { x: "76%", y: "82%" },  // 14. Linux
    { x: "26%", y: "88%" },  // 15. AWS
    { x: "74%", y: "94%" },  // 16. Tailwind CSS
  ];

  const coords = isMobile ? MOBILE_COORDS : DESKTOP_COORDS;

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sector="03"
          tag="EXPERTISE & STACK"
          title="Skills & Technologies"
          subtitle="Modern languages, frameworks, databases, and architectural tools I use to engineer clean, high-performance web products."
          className="mb-12"
        />

        {/* Boundary-Free Asymmetric Kinetic Scatter Canvas */}
        <div
          id="stage"
          ref={stageRef}
          style={{
            position: "relative",
            width: "100%",
            height: isMobile ? "920px" : "640px",
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
                  transform: "translate3d(-50%, -50%, 0) scale(0.65)",
                  transformOrigin: "center center",
                  background: "transparent",
                  border: "none",
                  boxShadow: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  WebkitFontSmoothing: "antialiased",
                  zIndex: 1,
                }}
              >
                {/* Floating Cosmic Drift Inner Container */}
                <div className="floating-inner flex flex-col items-center justify-center gap-2 pointer-events-none">
                  {/* Floating Icon Container with Ambient Halo */}
                  <div
                    className="relative flex items-center justify-center pointer-events-none"
                    style={{
                      width: "68px",
                      height: "68px",
                    }}
                  >
                    {/* Dedicated GPU Ambient Glow Aura (zero filter thrashing, pure clarity) */}
                    <div
                      className="icon-glow absolute -inset-4 rounded-full bg-gradient-to-tr from-[#ff7a00]/55 via-[#ff9e2c]/40 to-transparent blur-xl pointer-events-none"
                      style={{ opacity: 0, transform: "scale(0.8)" }}
                    />

                    {/* Razor-Sharp Vector Icon */}
                    <div
                      className="relative z-10 flex items-center justify-center w-full h-full pointer-events-none"
                      style={{
                        filter: "drop-shadow(0 6px 14px rgba(0,0,0,0.7))",
                      }}
                    >
                      <TechIcon name={skill.icon} className="w-14 h-14" />
                    </div>
                  </div>

                  {/* Clean Crisp Text Label */}
                  <span
                    className="text-label"
                    style={{
                      fontFamily: "Mori, sans-serif",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: "#fffce1",
                      textAlign: "center",
                      display: "inline-block",
                      whiteSpace: "nowrap",
                      pointerEvents: "none",
                      letterSpacing: "-0.01em",
                      textShadow: "0 2px 10px rgba(0,0,0,0.9)",
                    }}
                  >
                    {skill.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
