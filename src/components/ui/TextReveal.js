"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const CYBER_GLYPHS = "01#X%*/>_[]!&@~";

/**
 * TextReveal component: Provides cinematic, hardware-accelerated text reveal animations
 * when elements scroll into the viewport.
 * 
 * Presets:
 * - "words": Splits text by words with a staggered blur/fade reveal.
 * - "mask-up": Slides text up from behind an overflow-hidden mask.
 * - "fade-up": Classic sleek vertical translation with fade-in.
 * - "cyber": Scrambles matrix glyphs before settling into the original text.
 */
export default function TextReveal({
  children,
  as = "div",
  preset = "fade-up",
  delay = 0,
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
  triggerOnce = true,
  className = "",
  ...props
}) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState(
    typeof children === "string" ? children : ""
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check for user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(el);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  // Cyber matrix scramble effect
  useEffect(() => {
    if (preset !== "cyber" || !isVisible || typeof children !== "string") return;

    const original = children;
    const length = original.length;
    let iteration = 0;
    const maxIterations = 8;
    const intervalTime = 30;

    const interval = setInterval(() => {
      setDisplayText(
        original
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < (iteration / maxIterations) * length) {
              return original[index];
            }
            return CYBER_GLYPHS[Math.floor(Math.random() * CYBER_GLYPHS.length)];
          })
          .join("")
      );

      iteration += 1;
      if (iteration > maxIterations) {
        clearInterval(interval);
        setDisplayText(original);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [preset, isVisible, children]);

  const Component = as;

  // Preset: "words" (Word-by-word staggered reveal)
  if (preset === "words" && typeof children === "string") {
    const words = children.split(" ");
    return (
      <Component
        ref={containerRef}
        className={cn("inline-block", className)}
        {...props}
      >
        <span className="sr-only">{children}</span>
        <span aria-hidden="true" className="inline">
          {words.map((word, idx) => (
            <span
              key={idx}
              className={cn(
                "inline-block mr-[0.28em] transition-none",
                isVisible ? "animate-text-word" : "opacity-0"
              )}
              style={{
                animationDelay: isVisible ? `${delay + idx * 32}ms` : "0ms",
              }}
            >
              {word}
            </span>
          ))}
        </span>
      </Component>
    );
  }

  // Preset: "mask-up" (Overflow mask reveal)
  if (preset === "mask-up") {
    return (
      <Component
        ref={containerRef}
        className={cn("overflow-hidden block", className)}
        {...props}
      >
        <div
          className={cn(
            "transition-none",
            isVisible ? "animate-text-mask" : "translate-y-[110%] opacity-0"
          )}
          style={{
            animationDelay: isVisible ? `${delay}ms` : "0ms",
          }}
        >
          {children}
        </div>
      </Component>
    );
  }

  // Preset: "cyber" (Scramble glyph decode)
  if (preset === "cyber" && typeof children === "string") {
    return (
      <Component
        ref={containerRef}
        className={cn("font-mono tracking-wider", className)}
        {...props}
      >
        <span
          className={cn(
            "transition-opacity duration-300",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {displayText}
        </span>
      </Component>
    );
  }

  // Preset: "fade-up" (Standard smooth vertical reveal)
  return (
    <Component
      ref={containerRef}
      className={cn(
        "transition-none",
        isVisible ? "animate-text-fade" : "opacity-0 translate-y-4",
        className
      )}
      style={{
        animationDelay: isVisible ? `${delay}ms` : "0ms",
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
