"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { sound } from "@/lib/sound";
import { scrollToSection } from "@/lib/utils";

export default function MagneticContactButton({
  href = "#contact",
  onClick,
  className = "",
  variant = "dark",
}) {
  const zoneRef = useRef(null);
  const btnRef = useRef(null);
  const labelRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const zone = zoneRef.current;
    const btn = btnRef.current;
    const label = labelRef.current;
    if (!zone || !btn || !label) return;

    let floatLoop = null;

    // Check reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion) {
      // Continuous harmonic float & micro-tilt loop (ambient idle motion)
      floatLoop = gsap.to(btn, {
        y: -3.5,
        rotation: 1.8,
        duration: 2.2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }

    const strength = 0.4;
    const labelStrength = 0.22;

    // Magnetic pull on mousemove inside zone (overwrite: "auto" preserves rotation loop)
    const handleMouseMove = (e) => {
      const rect = zone.getBoundingClientRect();
      const mapX = gsap.utils.mapRange(
        rect.left,
        rect.right,
        -rect.width / 2,
        rect.width / 2,
        e.clientX
      );
      const mapY = gsap.utils.mapRange(
        rect.top,
        rect.bottom,
        -rect.height / 2,
        rect.height / 2,
        e.clientY
      );

      gsap.to(btn, {
        x: mapX * strength,
        y: mapY * strength,
        scale: 1.04,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });

      gsap.to(label, {
        x: mapX * labelStrength,
        y: mapY * labelStrength,
        duration: 0.4,
        ease: "power2.out",
        overwrite: true,
      });
    };

    // Elastic snap-back on mouseleave (resumes idle float position smoothly)
    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto",
      });

      gsap.to(label, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
        overwrite: true,
      });
    };

    zone.addEventListener("mousemove", handleMouseMove);
    zone.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      zone.removeEventListener("mousemove", handleMouseMove);
      zone.removeEventListener("mouseleave", handleMouseLeave);
      if (floatLoop) floatLoop.kill();
      gsap.killTweensOf(btn);
      gsap.killTweensOf(label);
    };
  }, []);

  const handleClick = (e) => {
    sound.playShiftBlip();
    if (href && href.startsWith("#")) {
      e.preventDefault();
      scrollToSection(href);
    }
    if (onClick) onClick(e);
  };

  const isDark = variant === "dark";
  const isGhost = variant === "ghost";

  return (
    <div
      ref={zoneRef}
      className={`mag-zone ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "4px",
      }}
    >
      <a
        ref={btnRef}
        href={href}
        onClick={handleClick}
        className="mag-btn group cursor-pointer"
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: isGhost ? "9px 20px" : "10px 22px",
          borderRadius: "99px",
          border: isGhost
            ? "1px solid rgba(255, 255, 255, 0.15)"
            : isDark
            ? "1px solid rgba(0, 0, 0, 0.4)"
            : "none",
          fontFamily:
            "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif",
          fontWeight: 700,
          fontSize: isGhost ? "0.85rem" : "0.82rem",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: isGhost ? "#f8fafc" : isDark ? "#ffa726" : "#05070f",
          overflow: "hidden",
          textDecoration: "none",
          willChange: "transform",
          boxShadow: isGhost
            ? "none"
            : isDark
            ? "0 4px 18px rgba(0, 0, 0, 0.45), inset 0 1px 1.5px rgba(255, 255, 255, 0.25), 0 0 10px rgba(255, 122, 0, 0.3)"
            : "0 0 28px rgba(255, 122, 0, 0.65), 0 0 12px rgba(255, 184, 51, 0.5), inset 0 1.5px 2px rgba(255, 255, 255, 0.85)",
          outline: "none",
          transition: "border-color 0.2s ease, background 0.2s ease",
        }}
        aria-label="Get In Touch"
      >
        {/* Dynamic Background */}
        <span
          ref={bgRef}
          className="bg"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "99px",
            background: isGhost
              ? "rgba(255, 255, 255, 0.03)"
              : isDark
              ? "linear-gradient(135deg, #05070f 0%, #151b2e 100%)"
              : "linear-gradient(114.41deg, #fff39e 0%, #ffa51f 25%, #ff6a00 65%, #ea580c 100%)",
            zIndex: 0,
            transition: "all 0.2s ease",
          }}
        />

        {/* Ambient Subtle Pulse Ring - Disabled on ghost */}
        {!isGhost && (
          <span
            style={{
              position: "absolute",
              inset: "-2px",
              borderRadius: "99px",
              background: isDark
                ? "linear-gradient(114.41deg, #ff7a00, #ff9e2c, #ff5500)"
                : "linear-gradient(114.41deg, #ffe066, #ff9e2c, #ff6a00, #ff4000)",
              zIndex: -1,
              opacity: 0.7,
              filter: "blur(7px)",
              pointerEvents: "none",
            }}
          />
        )}

        {/* Floating Label with Micro 3D Parallax */}
        <span
          ref={labelRef}
          className="label"
          style={{
            position: "relative",
            zIndex: 1,
            pointerEvents: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            willChange: "transform",
            color: isGhost ? "#f8fafc" : isDark ? "#ffa726" : "#05070f",
          }}
        >
          <span>Get In Touch</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: "translateY(-0.5px)",
            }}
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </a>
    </div>
  );
}
