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
    <footer className="relative bg-black border-t border-[#22252c] pt-12 pb-8 overflow-hidden">
      {/* Telemetry live marquee ticker */}
      <div className="w-full bg-[#0a0b0e] border-y border-[#22252c] py-2.5 mb-12 overflow-hidden select-none">
        <div className="animate-ticker flex items-center gap-8">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#a1a1aa] shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d2ff00] shadow-[0_0_6px_#d2ff00]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-[8.77px] bg-[#d2ff00] text-black font-black flex items-center justify-center text-base tracking-tighter">
                AK
              </div>
              <span className="font-extrabold text-base tracking-wider uppercase text-[#f4f4ed]">
                {profileData.name}
              </span>
            </div>
            <p className="text-sm text-[#a1a1aa] max-w-md leading-relaxed">
              Software developer building real-time full-stack web applications, scalable APIs, and clean modern interfaces.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <Badge variant="volt" size="sm" dot>
                SYSTEM ONLINE
              </Badge>
              <Badge variant="dark" size="sm">
                WCAG 2.2 AA
              </Badge>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="font-mono text-xs uppercase font-bold text-[#d2ff00] mb-4 tracking-wider">
              // NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-mono text-[#a1a1aa]">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, "#about")}
                  className="hover:text-[#d2ff00] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span className="text-[#d2ff00]">▶</span> About Me
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleLinkClick(e, "#projects")}
                  className="hover:text-[#d2ff00] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span className="text-[#d2ff00]">▶</span> Featured Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => handleLinkClick(e, "#skills")}
                  className="hover:text-[#d2ff00] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span className="text-[#d2ff00]">▶</span> Tech Stack
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(e) => handleLinkClick(e, "#experience")}
                  className="hover:text-[#d2ff00] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span className="text-[#d2ff00]">▶</span> Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="hover:text-[#d2ff00] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span className="text-[#d2ff00]">▶</span> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Channels */}
          <div>
            <h4 className="font-mono text-xs uppercase font-bold text-[#d2ff00] mb-4 tracking-wider">
              // CONNECT
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-mono text-[#a1a1aa]">
              {profileData.socials.map((s, idx) => (
                <li key={idx}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#f4f4ed] transition-colors flex items-center gap-2"
                  >
                    <span>{s.name}</span>
                    <span className="text-[#71717a] text-xs">({s.handle})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 border-t border-[#22252c] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717a] font-mono">
          <div>
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#a1a1aa] hover:text-[#d2ff00] px-3 py-1.5 rounded-[39.3px] bg-[#14161b] border border-[#22252c] hover:border-[#d2ff00]/40 transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
