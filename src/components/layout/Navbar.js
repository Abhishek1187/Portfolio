"use client";

import { useState, useEffect } from "react";
import Button from "../ui/Button";
import MagneticContactButton from "../ui/MagneticContactButton";
import { sound } from "@/lib/sound";
import { profileData } from "@/data/profile";
import { scrollToSection } from "@/lib/utils";

export default function Navbar({ isMuted, onToggleMute }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    sound.playBeep(980, 0.03);
    setMobileMenuOpen(false);
    scrollToSection(href);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    sound.playShiftBlip();
    scrollToSection("top");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-[#ff8c00] via-[#ff7300] to-[#ea580c] py-3 shadow-[0_12px_40px_rgba(255,115,0,0.5),0_1px_0_rgba(255,255,255,0.4)] border-b border-[#ffa842]/60 backdrop-blur-xl"
          : "bg-gradient-to-r from-[#ff8c00] via-[#ff7300] to-[#ea580c] py-4 shadow-[0_10px_35px_rgba(255,115,0,0.4),0_1px_0_rgba(255,255,255,0.35)] border-b border-[#ffa842]/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={handleLogoClick}
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-md p-1 cursor-pointer"
          aria-label="Home"
        >
          <div className="w-10 h-10 rounded-[10px] bg-[#05070f] text-[#ff9e2c] font-black flex items-center justify-center text-base tracking-tighter group-hover:scale-105 transition-transform shadow-[0_4px_16px_rgba(0,0,0,0.4)] border border-black/20">
            AK
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm tracking-wider uppercase text-[#05070f] group-hover:text-white transition-colors">
              {profileData.name}
            </span>
            <span className="font-mono text-[10.67px] text-[#05070f]/80 font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#05070f] shadow-[0_0_6px_rgba(0,0,0,0.6)] animate-ping" />
              SOFTWARE DEVELOPER
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#05070f]/15 border border-black/20 rounded-[39.3px] px-3 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-mono text-xs uppercase px-3 py-1.5 rounded-[39.3px] text-[#05070f] font-bold hover:text-white hover:bg-black/35 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Tools: Sound FX Toggle, Dynamic Magnetic Contact CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Sound FX Toggle */}
          <button
            onClick={onToggleMute}
            className="p-2 rounded-[39.3px] bg-[#05070f]/15 border border-black/20 hover:border-black/40 text-[#05070f] hover:text-white hover:bg-black/35 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black cursor-pointer"
            aria-label={isMuted ? "Unmute sound effects" : "Mute sound effects"}
            title={isMuted ? "Sound Off" : "Audio FX Active"}
          >
            {isMuted ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-[#05070f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>

          {/* Dynamic Magnetic Get In Touch Button with High-Contrast Jet Black Variant */}
          <MagneticContactButton href="#contact" variant="dark" />
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => {
            sound.playBeep(700, 0.02);
            setMobileMenuOpen(!mobileMenuOpen);
          }}
          className="lg:hidden p-2 rounded-[8.77px] bg-[#05070f]/15 border border-black/20 text-[#05070f] hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gradient-to-b from-[#ff7300] to-[#ea580c] border-b border-black/20 px-4 pt-4 pb-6 space-y-4 animate-fadeIn shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-mono text-sm uppercase py-2 px-3 rounded-[8.77px] text-[#05070f] font-bold hover:text-white hover:bg-black/30 transition-all cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-black/20">
            <Button
              variant="primary"
              size="md"
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full bg-[#05070f] text-[#ff9e2c] font-black shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-none"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
