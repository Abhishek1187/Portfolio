"use client";

import { useState, useEffect } from "react";
import Button from "../ui/Button";
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
          ? "bg-black/85 backdrop-blur-md border-b border-[#22252c] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={handleLogoClick}
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d2ff00] rounded-md p-1 cursor-pointer"
          aria-label="Home"
        >
          <div className="w-10 h-10 rounded-[8.77px] bg-[#d2ff00] text-black font-black flex items-center justify-center text-base tracking-tighter group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(210,255,0,0.5)]">
            AK
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm tracking-wider uppercase text-[#f4f4ed] group-hover:text-[#d2ff00] transition-colors">
              {profileData.name}
            </span>
            <span className="font-mono text-[10.67px] text-[#a1a1aa] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d2ff00] animate-ping" />
              SOFTWARE DEVELOPER
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0a0b0e]/80 border border-[#22252c] rounded-[39.3px] px-3 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-mono text-xs uppercase px-3 py-1.5 rounded-[39.3px] text-[#a1a1aa] hover:text-[#f4f4ed] hover:bg-[#14161b] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d2ff00] cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Tools: Sound FX Toggle, Contact CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Sound FX Toggle */}
          <button
            onClick={onToggleMute}
            className="p-2 rounded-[39.3px] bg-[#14161b] border border-[#22252c] hover:border-[#d2ff00]/60 text-[#a1a1aa] hover:text-[#d2ff00] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d2ff00] cursor-pointer"
            aria-label={isMuted ? "Unmute sound effects" : "Mute sound effects"}
            title={isMuted ? "Sound Off" : "Audio FX Active"}
          >
            {isMuted ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-[#d2ff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>

          {/* Quick CTA */}
          <Button variant="primary" size="sm" href="#contact">
            Get In Touch
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => {
            sound.playBeep(700, 0.02);
            setMobileMenuOpen(!mobileMenuOpen);
          }}
          className="lg:hidden p-2 rounded-[8.77px] bg-[#14161b] border border-[#22252c] text-[#f4f4ed] hover:text-[#d2ff00]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 border-b border-[#22252c] px-4 pt-4 pb-6 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-mono text-sm uppercase py-2 px-3 rounded-[8.77px] text-[#a1a1aa] hover:text-[#d2ff00] hover:bg-[#14161b] transition-all cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-[#22252c]">
            <Button
              variant="primary"
              size="md"
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
