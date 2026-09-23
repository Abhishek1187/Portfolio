"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { profileData } from "@/data/profile";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Organic sweeping S-curve trajectory separating left dark territory from right orange sector
const TRACER_PATH =
  "M 1480 -80 C 1220 90, 1020 160, 840 260 C 640 370, 480 440, 520 590 C 560 740, 380 830, -50 960";

// Closed polygon filling the complete right-hand side of the car's trajectory with smooth bleed
const RIGHT_SECTOR_POLYGON =
  "M 1480 -80 C 1220 90, 1020 160, 840 260 C 640 370, 480 440, 520 590 C 560 740, 380 830, -50 960 L 1520 960 L 1520 -80 Z";

export default function About() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const rightSectorRef = useRef(null);
  const trailGlowRef = useRef(null);
  const trailCoreRef = useRef(null);
  const trailSpecularRef = useRef(null);
  const tracerRef = useRef(null);
  const auraRef = useRef(null);

  // Content reveal refs for velocity-locked synchronization
  const headlineRef = useRef(null);
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const focusContainerRef = useRef(null);
  const ctaBtnRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const pathEl = pathRef.current;
    const rightSector = rightSectorRef.current;
    const trailGlow = trailGlowRef.current;
    const trailCore = trailCoreRef.current;
    const trailSpecular = trailSpecularRef.current;
    const tracer = tracerRef.current;
    const aura = auraRef.current;

    const headline = headlineRef.current;
    const p1 = p1Ref.current;
    const p2 = p2Ref.current;
    const focusContainer = focusContainerRef.current;
    const ctaBtn = ctaBtnRef.current;

    if (!sectionEl || !pathEl || !tracer) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const totalLength = pathEl.getTotalLength();

    // Set initial dasharray & dashoffset to hide trails initially
    [trailGlow, trailCore, trailSpecular].forEach((el) => {
      if (el) {
        el.style.strokeDasharray = `${totalLength} ${totalLength}`;
        el.style.strokeDashoffset = `${totalLength}`;
      }
    });

    if (prefersReducedMotion) {
      [trailGlow, trailCore, trailSpecular].forEach((el) => {
        if (el) el.style.strokeDashoffset = "0";
      });
      if (rightSector) rightSector.style.opacity = "0.9";
      const endPt = pathEl.getPointAtLength(totalLength * 0.6);
      tracer.setAttribute("transform", `translate(${endPt.x}, ${endPt.y})`);
      return;
    }

    const ctx = gsap.context(() => {
      const scrollObj = { progress: 0 };

      // Initialize tracer position at start
      const startPt = pathEl.getPointAtLength(0);
      const nextPt = pathEl.getPointAtLength(2);
      const initialAngle =
        Math.atan2(nextPt.y - startPt.y, nextPt.x - startPt.x) * (180 / Math.PI);
      tracer.setAttribute(
        "transform",
        `translate(${startPt.x}, ${startPt.y}) rotate(${initialAngle})`
      );

      // Unified Master Timeline: Velocity-Locked Synchronization between car and text
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 85%",
          end: "bottom 20%",
          scrub: 1.2,
        },
      });

      // 1. Car navigation, trail drawing, and sector glow mapped across 10s virtual duration
      tl.to(
        scrollObj,
        {
          progress: 1,
          ease: "none",
          duration: 10,
          onUpdate: () => {
            const currentLen = totalLength * scrollObj.progress;
            const offset = Math.max(0, totalLength - currentLen);

            // Update trail reveal offsets
            if (trailGlow) trailGlow.style.strokeDashoffset = `${offset}`;
            if (trailCore) trailCore.style.strokeDashoffset = `${offset}`;
            if (trailSpecular) trailSpecular.style.strokeDashoffset = `${offset}`;

            // Calculate exact position & tangent angle along the curved track
            const pt = pathEl.getPointAtLength(Math.min(currentLen, totalLength));
            const lookAhead = Math.min(totalLength, currentLen + 3);
            const ptAhead = pathEl.getPointAtLength(lookAhead);
            const angle =
              Math.atan2(ptAhead.y - pt.y, ptAhead.x - pt.x) * (180 / Math.PI);

            tracer.setAttribute(
              "transform",
              `translate(${pt.x}, ${pt.y}) rotate(${angle})`
            );

            // Update ambient aura position to subtly follow the vehicle
            if (aura) {
              aura.style.transform = `translate(${pt.x * 0.8}px, ${pt.y * 0.8}px)`;
            }

            // Dynamic reveal of the right orange sector
            if (rightSector) {
              const sectorOpacity = Math.min(0.92, 0.35 + scrollObj.progress * 0.6);
              rightSector.style.opacity = `${sectorOpacity}`;
            }
          },
        },
        0
      );

      // Phase 1 (0% - 30% track): Headline unlocks as car sweeps into upper section
      if (headline) {
        tl.fromTo(
          headline,
          { y: 35, opacity: 0, filter: "blur(6px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", ease: "power2.out", duration: 2.2 },
          1.2
        );
      }

      // Phase 2 (30% - 60% track): Narrative paragraphs unlock
      if (p1 && p2) {
        tl.fromTo(
          [p1, p2],
          { y: 30, opacity: 0, filter: "blur(4px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", stagger: 0.8, ease: "power2.out", duration: 2.4 },
          2.6
        );
      }

      // Phase 3 (60% - 85% track): Focus Area pills unlock with energetic spring
      if (focusContainer) {
        const pills = focusContainer.querySelectorAll(".focus-pill");
        if (pills.length) {
          tl.fromTo(
            pills,
            { y: 24, opacity: 0, scale: 0.94 },
            { y: 0, opacity: 1, scale: 1, stagger: 0.3, ease: "back.out(1.4)", duration: 2.0 },
            4.8
          );
        }
      }

      // Phase 4 (85% - 100% track): Final CTA button punch when car reaches the finish line
      if (ctaBtn) {
        tl.fromTo(
          ctaBtn,
          { scale: 0.88, opacity: 0 },
          { scale: 1, opacity: 1, ease: "elastic.out(1.1, 0.7)", duration: 2.2 },
          7.6
        );
      }

      // Subtle ambient hover shimmer on tracer
      gsap.to(tracer, {
        scale: 1.08,
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const focusAreas = [
    { title: "Frontend Architecture", desc: "Component-driven, accessible UI with Next.js, React, and Tailwind CSS." },
    { title: "Scalable Backend APIs", desc: "High-throughput RESTful services, real-time WebSockets, and JWT authentication." },
    { title: "Database Engineering", desc: "Schema design, relational indexing, and document stores with MongoDB & Supabase." },
    { title: "Algorithmic Core", desc: "Data structures, problem solving, and optimization with 200+ solved DSA challenges." },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden"
    >
      {/* Background Kinetic Cyber Ribbon & Seamless Feathered Orange Sector */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, transparent 100%)",
        }}
      >
        {/* Dynamic Vehicle Ambient Flare Glow */}
        <div
          ref={auraRef}
          className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.3)_0%,rgba(249,115,22,0.15)_45%,transparent_70%)] blur-[90px] pointer-events-none will-change-transform"
        />

        {/* Master SVG Coordinate Space */}
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full absolute inset-0"
        >
          <defs>
            {/* Tech Blueprint Dot Grid (Seamless - Zero Hard Border Lines) */}
            <pattern
              id="orangeTechGrid"
              width="44"
              height="44"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="22" cy="22" r="1.2" fill="#ffffff" fillOpacity="0.14" />
              <path
                d="M 22 18 L 22 26 M 18 22 L 26 22"
                stroke="#ffffff"
                strokeWidth="0.6"
                strokeOpacity="0.08"
              />
            </pattern>

            {/* Base Reference Path Filter Blur */}
            <filter id="trailBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="14" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Complete Right-Side Vibrant Orange Sector Gradient */}
            <linearGradient
              id="vibrantRightSectorGrad"
              x1="30%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ff5722" stopOpacity="0.88" />
              <stop offset="35%" stopColor="#ff6b00" stopOpacity="0.82" />
              <stop offset="70%" stopColor="#ea580c" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#9a3412" stopOpacity="0.68" />
            </linearGradient>

            {/* Neon Orange Trail Gradient */}
            <linearGradient id="neonTrailGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff4500" stopOpacity="0.9" />
              <stop offset="35%" stopColor="#ff7a00" stopOpacity="1" />
              <stop offset="70%" stopColor="#ff9a3c" stopOpacity="1" />
              <stop offset="100%" stopColor="#ffb703" stopOpacity="0.95" />
            </linearGradient>

            {/* Specular White Core Gradient */}
            <linearGradient id="specularCoreGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffedd5" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#fffbeb" stopOpacity="0.9" />
            </linearGradient>

            {/* Soft Ambient Halo Gradient */}
            <linearGradient id="ambientGlowGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ea580c" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#c2410c" stopOpacity="0.15" />
            </linearGradient>

            {/* Forward Headlight Cone Gradient */}
            <linearGradient id="headlightCone" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#ffb703" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ff6b00" stopOpacity="0.0" />
            </linearGradient>

            {/* Tracer Body Gradient */}
            <linearGradient id="tracerBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff4500" />
              <stop offset="50%" stopColor="#ff9a3c" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>

          {/* Layer 0: Complete Right-Side Filled Vibrant Orange Sector */}
          <path
            ref={rightSectorRef}
            d={RIGHT_SECTOR_POLYGON}
            fill="url(#vibrantRightSectorGrad)"
            className="transition-opacity duration-300"
            style={{ opacity: 0.6 }}
          />

          {/* Layer 0.5: Blueprint Grid Texture on the Orange Sector */}
          <path
            d={RIGHT_SECTOR_POLYGON}
            fill="url(#orangeTechGrid)"
            opacity="0.75"
          />

          {/* Invisible Reference Path for Mathematical Navigation */}
          <path
            ref={pathRef}
            d={TRACER_PATH}
            fill="none"
            stroke="transparent"
          />

          {/* Layer 1: Wide Ambient Glow Trail */}
          <path
            ref={trailGlowRef}
            d={TRACER_PATH}
            fill="none"
            stroke="url(#ambientGlowGrad)"
            strokeWidth="42"
            strokeLinecap="round"
            filter="url(#trailBlur)"
            opacity="0.65"
          />

          {/* Layer 2: Molten Neon Laser Trail */}
          <path
            ref={trailCoreRef}
            d={TRACER_PATH}
            fill="none"
            stroke="url(#neonTrailGrad)"
            strokeWidth="5.5"
            strokeLinecap="round"
            filter="drop-shadow(0 0 14px rgba(255, 107, 0, 0.95))"
          />

          {/* Layer 3: High-Intensity Specular Core Beam */}
          <path
            ref={trailSpecularRef}
            d={TRACER_PATH}
            fill="none"
            stroke="url(#specularCoreGrad)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Layer 4: Kinetic Vehicle / Energy Tracer Head */}
          <g ref={tracerRef} className="will-change-transform">
            {/* Forward Luminous Headlight Cone */}
            <polygon
              points="0,-6 95,-28 95,28 0,6"
              fill="url(#headlightCone)"
              opacity="0.65"
            />

            {/* Aerodynamic Wake Flares */}
            <line
              x1="-24"
              y1="-6"
              x2="-2"
              y2="-2"
              stroke="#ff7a00"
              strokeWidth="2"
              opacity="0.7"
            />
            <line
              x1="-24"
              y1="6"
              x2="-2"
              y2="2"
              stroke="#ff7a00"
              strokeWidth="2"
              opacity="0.7"
            />

            {/* Dual Orange Jet Thruster Flames */}
            <ellipse cx="-16" cy="-4" rx="6" ry="2.5" fill="#ff4500" />
            <ellipse cx="-16" cy="4" rx="6" ry="2.5" fill="#ff4500" />
            <ellipse cx="-14" cy="-4" rx="3" ry="1.5" fill="#fef08a" />
            <ellipse cx="-14" cy="4" rx="3" ry="1.5" fill="#fef08a" />

            {/* Outer Radiant Flare Ring */}
            <circle
              cx="0"
              cy="0"
              r="16"
              fill="none"
              stroke="#ff9a3c"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              opacity="0.65"
              className="animate-spin"
              style={{ animationDuration: "8s" }}
            />

            {/* Aerodynamic Chassis Core */}
            <ellipse
              cx="0"
              cy="0"
              rx="16"
              ry="8"
              fill="url(#tracerBodyGrad)"
              filter="drop-shadow(0 0 10px rgba(255, 122, 0, 1))"
            />

            {/* Specular Cockpit Beacon */}
            <circle cx="3" cy="0" r="4.5" fill="#ffffff" />
            <circle cx="3" cy="0" r="2" fill="#fffbeb" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          sector="01"
          tag="ABOUT & CRAFT"
          title="Engineering & Craft"
          subtitle="A passionate full-stack developer dedicated to building responsive, accessible, and aesthetically refined digital experiences."
        />

        <div className="max-w-4xl space-y-8">
          {/* Narrative Headline & Paragraphs */}
          <div className="space-y-6">
            <h3
              ref={headlineRef}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug will-change-transform"
            >
              Building with Purpose, Speed & Precision
            </h3>

            <p
              ref={p1Ref}
              className="text-base sm:text-lg text-[#94a3b8] leading-relaxed font-normal will-change-transform"
            >
              {profileData.bio.about}
            </p>

            <p
              ref={p2Ref}
              className="text-base sm:text-lg text-[#94a3b8] leading-relaxed font-normal will-change-transform"
            >
              I specialize in modern JavaScript and TypeScript ecosystems, component-driven UI architectures, and building products that not only work seamlessly but also delight users with high-end visuals and micro-interactions.
            </p>
          </div>

          {/* Core Focus Areas List - Velocity-Locked Staggered Reveal */}
          <div
            ref={focusContainerRef}
            className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {focusAreas.map((item, idx) => (
              <div
                key={idx}
                className="focus-pill p-5 rounded-2xl bg-black/40 border border-white/[0.08] hover:border-white/20 transition-all hover:bg-black/60 backdrop-blur-md will-change-transform"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#06b6d4]" />
                  <h4 className="text-sm font-semibold text-white font-mono tracking-tight">{item.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Action Button */}
          <div ref={ctaBtnRef} className="pt-4 will-change-transform">
            <Button
              variant="primary"
              size="lg"
              href="#contact"
              className="shadow-xl shadow-orange-500/10"
            >
              Let's Work Together ↗
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


