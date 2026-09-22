"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sound } from "@/lib/sound";

gsap.registerPlugin(ScrollTrigger);

export default function KineticName({
  firstName = "Abhishek",
  lastName = "Kumar",
  className = "",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const chars = container.querySelectorAll(".kinetic-char");
    if (!chars.length) return;

    const ctx = gsap.context(() => {
      // Assemble characters from random 3D-like offsets on entrance
      chars.forEach((char, index) => {
        const randomY = gsap.utils.random(-130, 130);
        const randomRot = gsap.utils.random(-20, 20);
        const randomScale = gsap.utils.random(0.7, 1.25);

        gsap.fromTo(
          char,
          {
            yPercent: randomY,
            rotation: randomRot,
            scale: randomScale,
            opacity: 0,
            filter: "blur(6px)",
          },
          {
            yPercent: 0,
            rotation: 0,
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.95,
            delay: index * 0.035,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: container,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, [firstName, lastName]);

  // Interactive micro-scatter on cursor hover
  const handleMouseEnter = () => {
    const container = containerRef.current;
    if (!container) return;

    sound.playBeep(980, 0.02);

    const chars = container.querySelectorAll(".kinetic-char");
    chars.forEach((char) => {
      const scatterY = gsap.utils.random(-35, 35);
      const scatterRot = gsap.utils.random(-12, 12);

      gsap.to(char, {
        yPercent: scatterY,
        rotation: scatterRot,
        duration: 0.22,
        ease: "power2.out",
        overwrite: "auto",
        onComplete: () => {
          gsap.to(char, {
            yPercent: 0,
            rotation: 0,
            duration: 0.65,
            ease: "elastic.out(1, 0.4)",
            overwrite: "auto",
          });
        },
      });
    });
  };

  const firstChars = firstName.split("");
  const lastChars = lastName.split("");

  return (
    <h1
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      aria-label={`${firstName} ${lastName}`}
      className={`group select-none cursor-default font-black tracking-[-0.035em] leading-[0.98] ${className}`}
      style={{
        display: "inline-block",
        willChange: "transform",
      }}
    >
      {/* First Name (Crisp White) */}
      <span
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          marginRight: "0.26em",
          color: "#ffffff",
        }}
      >
        {firstChars.map((ch, idx) => (
          <span
            key={`first-${idx}`}
            className="kinetic-char"
            aria-hidden="true"
            style={{
              display: "inline-block",
              willChange: "transform, opacity, filter",
              transformOrigin: "center center",
            }}
          >
            {ch}
          </span>
        ))}
      </span>

      {/* Last Name (Ultra-Shiny Pure Molten Orange Gradient) */}
      <span
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
        }}
      >
        {lastChars.map((ch, idx) => (
          <span
            key={`last-${idx}`}
            className="kinetic-char"
            aria-hidden="true"
            style={{
              display: "inline-block",
              background:
                "linear-gradient(135deg, #fff48c 0%, #ffb833 22%, #ff7a00 52%, #ff4d00 85%, #ff7a00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 24px rgba(255, 122, 0, 0.7)) drop-shadow(0 2px 6px rgba(255, 80, 0, 0.4))",
              willChange: "transform, opacity, filter",
              transformOrigin: "center center",
            }}
          >
            {ch}
          </span>
        ))}
      </span>
    </h1>
  );
}
