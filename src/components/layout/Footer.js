"use client";

import Badge from "../ui/Badge";
import { sound } from "@/lib/sound";
import { profileData } from "@/data/profile";
import { scrollToSection } from "@/lib/utils";

export default function Footer() {
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
    <footer className="relative bg-transparent pt-6 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Option 3: Floating Architectural Orange Island Card */}
        <div className="relative rounded-3xl sm:rounded-[36px] bg-gradient-to-r from-[#ff8c00] via-[#ff7300] to-[#ea580c] shadow-[0_20px_60px_rgba(255,115,0,0.38),0_1px_0_rgba(255,255,255,0.4)] border border-[#ffa842]/60 overflow-hidden">
          
          {/* Subtle Live Marquee Ribbon Inside Top of Island */}
          <div className="w-full bg-black/15 border-b border-black/15 py-2.5 overflow-hidden select-none">
            <div className="animate-ticker flex items-center gap-8">
              {[...tickerItems, ...tickerItems].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#05070f] font-bold shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-black shadow-[0_0_6px_rgba(0,0,0,0.5)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interior Island Content Grid */}
          <div className="p-8 sm:p-12 lg:p-14">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
              {/* Brand Col */}
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[10px] bg-[#05070f] text-[#ff9e2c] font-black flex items-center justify-center text-base tracking-tighter shadow-[0_4px_16px_rgba(0,0,0,0.4)] border border-black/20">
                    AK
                  </div>
                  <span className="font-extrabold text-lg tracking-wider uppercase text-[#05070f]">
                    {profileData.name}
                  </span>
                </div>
                <p className="text-sm text-[#05070f]/85 max-w-md leading-relaxed font-medium">
                  Software developer building real-time full-stack web applications, scalable APIs, and clean modern interfaces.
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#05070f] text-[#ff9e2c] text-xs font-mono font-bold shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a00] animate-ping" />
                    SYSTEM ACTIVE
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#05070f]/20 text-[#05070f] text-xs font-mono font-bold border border-black/20">
                    WCAG 2.2 AA
                  </span>
                </div>
              </div>

              {/* Quick Nav */}
              <div>
                <h4 className="font-mono text-xs uppercase font-extrabold text-[#05070f] mb-4 tracking-wider">
                  NAVIGATION
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm font-mono text-[#05070f]/85 font-bold">
                  <li>
                    <a
                      href="#about"
                      onClick={(e) => handleLinkClick(e, "#about")}
                      className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span className="text-black">▶</span> About Me
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      onClick={(e) => handleLinkClick(e, "#projects")}
                      className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span className="text-black">▶</span> Featured Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      onClick={(e) => handleLinkClick(e, "#skills")}
                      className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span className="text-black">▶</span> Tech Stack
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      onClick={(e) => handleLinkClick(e, "#experience")}
                      className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span className="text-black">▶</span> Experience
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      onClick={(e) => handleLinkClick(e, "#contact")}
                      className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span className="text-black">▶</span> Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Channels */}
              <div>
                <h4 className="font-mono text-xs uppercase font-extrabold text-[#05070f] mb-4 tracking-wider">
                  CONNECT
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm font-mono text-[#05070f]/85 font-bold">
                  {profileData.socials.map((s, idx) => (
                    <li key={idx}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors flex items-center gap-2"
                      >
                        <span>{s.name}</span>
                        <span className="text-black/60 text-xs">({s.handle})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom copyright & back to top */}
            <div className="pt-6 border-t border-black/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#05070f]/80 font-mono font-bold">
              <div>
                © {new Date().getFullYear()} {profileData.name}. All rights reserved.
              </div>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-[#ff9e2c] hover:text-white px-4 py-2 rounded-full bg-[#05070f] hover:bg-black transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
              >
                <span>BACK TO TOP</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
