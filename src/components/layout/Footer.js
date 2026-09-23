"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sound } from "@/lib/sound";
import { profileData } from "@/data/profile";
import { scrollToSection } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Multi-peak mountain silhouette (Alpine Ridge ups & downs)
const mountainDown = "M0 180 C 140 180, 240 120, 420 120 C 600 120, 720 220, 920 220 C 1120 220, 1220 100, 1420 100 C 1620 100, 1740 210, 1940 210 C 2100 210, 2180 140, 2278 140 V 683 H 0 Z";
const mountainCenter = "M0 130 C 140 130, 240 35, 420 35 C 600 35, 720 160, 920 160 C 1120 160, 1220 15, 1420 15 C 1620 15, 1740 145, 1940 145 C 2100 145, 2180 50, 2278 50 V 683 H 0 Z";

export default function Footer() {
  const footerRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const footerEl = footerRef.current;
    const pathEl = pathRef.current;
    if (!footerEl || !pathEl) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(pathEl, { attr: { d: mountainCenter } });
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: footerEl,
        start: "top bottom",
        toggleActions: "play pause resume reverse",
        onEnter: (self) => {
          const velocity = self.getVelocity();
          const variation = Math.min(Math.max(velocity / 10000, -0.6), 1.5);

          gsap.fromTo(
            pathEl,
            { attr: { d: mountainDown } },
            {
              duration: 2.2,
              attr: { d: mountainCenter },
              ease: `elastic.out(${1.1 + variation}, ${0.9 - variation})`,
              overwrite: "auto",
            }
          );
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    sound.playShiftBlip();
    scrollToSection("top");
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    sound.playBeep(880, 0.02);
    scrollToSection(targetId);
  };

  const tickerItems = [
    "FULL-STACK WEB DEVELOPMENT",
    "REACT.JS & NODE.JS",
    "REST APIS & SOCKET.IO",
    "MONGODB & SUPABASE",
    "200+ DSA LEETCODE SOLVED",
    "DATA STRUCTURES & ALGORITHMS",
    "FIREBASE & FIRESTORE",
    "OPEN TO OPPORTUNITIES",
  ];

  return (
    <footer
      ref={footerRef}
      className="footer relative w-full pt-16 sm:pt-20 pb-8 overflow-hidden text-[#05070f] select-text mt-16"
      style={{
        backgroundColor: "transparent",
      }}
    >
      {/* Dynamic GSAP Mountain Ridge Silhouette with Luminous Snowcaps & Slopes */}
      <svg
        id="footer-img"
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 2278 683"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Vertical white-capped mountain slope gradient */}
          <linearGradient id="mountain-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="4%" stopColor="#fff3db" />
            <stop offset="18%" stopColor="#ff9e2c" />
            <stop offset="55%" stopColor="#ff7300" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>

          {/* Luminous crest highlight stroke */}
          <linearGradient id="mountain-crest-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="25%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="75%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.7" />
          </linearGradient>

          {/* Background mountain silhouette for atmospheric depth */}
          <linearGradient id="back-mountain-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="25%" stopColor="#ff7a00" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Secondary distant mountain peak backdrop */}
        <path
          d="M0 180 C 220 180, 360 80, 600 80 C 840 80, 980 190, 1200 190 C 1420 190, 1560 60, 1800 60 C 2040 60, 2160 170, 2278 170 V 683 H 0 Z"
          fill="url(#back-mountain-grad)"
        />

        {/* Primary Foreground Mountain Ridge */}
        <path
          id="bouncy-path"
          ref={pathRef}
          d={mountainCenter}
          fill="url(#mountain-grad)"
          stroke="url(#mountain-crest-grad)"
          strokeWidth="2"
        />
      </svg>

      {/* Crossing Marquee Ribbon Overriding & Cutting Across the Mountain Peaks */}
      <div className="relative z-20 w-[104%] -left-[2%] -mt-10 sm:-mt-14 mb-8 -rotate-1 sm:-rotate-[1.5deg] shadow-[0_12px_35px_rgba(0,0,0,0.65)] select-none overflow-hidden transition-transform">
        <div className="w-full bg-[#0a0d18]/92 backdrop-blur-md border-y border-[#ff9e2c]/40 py-2.5">
          <div className="animate-ticker flex items-center gap-8">
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#f8fafc] font-black shrink-0"
              >
                <span className="w-2 h-2 rounded-full bg-[#ff7a00] shadow-[0_0_8px_rgba(255,122,0,0.9)] animate-pulse" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Grid Under the Mountain Terrain */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#05070f] text-[#ff9e2c] font-black flex items-center justify-center text-base tracking-tighter shadow-[0_4px_16px_rgba(0,0,0,0.4)] border border-black/20">
                AK
              </div>
              <span className="font-extrabold text-lg sm:text-xl tracking-wider uppercase text-[#05070f]">
                {profileData.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#05070f]/90 max-w-md leading-relaxed font-semibold">
              Software developer building real-time full-stack web applications, scalable APIs, and clean modern interfaces.
            </p>
            <div className="flex items-center gap-2 pt-1 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#05070f] text-[#ff9e2c] text-[11px] font-mono font-bold shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a00] animate-ping" />
                SYSTEM ACTIVE
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-mono text-xs uppercase font-black text-[#05070f] mb-3 tracking-widest border-b border-black/15 pb-1">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#05070f]/90 font-bold">
              {[
                { label: "About Me", target: "#about" },
                { label: "Featured Projects", target: "#projects" },
                { label: "Tech Stack", target: "#skills" },
                { label: "Experience", target: "#experience" },
                { label: "Contact", target: "#contact" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.target}
                    onClick={(e) => handleLinkClick(e, item.target)}
                    className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer group"
                  >
                    <span className="text-black group-hover:text-white transition-colors text-[10px]">▶</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels */}
          <div>
            <h4 className="font-mono text-xs uppercase font-black text-[#05070f] mb-3 tracking-widest border-b border-black/15 pb-1">
              CONNECT
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#05070f]/90 font-bold">
              {profileData.socials.map((s, idx) => (
                <li key={idx}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="group-hover:underline">{s.name}</span>
                    <span className="text-black/70 text-[11px] font-normal">({s.handle})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-6 border-t border-black/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#05070f]/90 font-mono font-bold">
          <div>
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#ff9e2c] hover:text-white px-4 py-2 rounded-full bg-[#05070f] hover:bg-black transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black shadow-[0_4px_16px_rgba(0,0,0,0.35)] active:scale-95 font-mono text-xs font-bold"
          >
            <span>BACK TO TOP</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
