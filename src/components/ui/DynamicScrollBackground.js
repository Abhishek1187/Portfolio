"use client";

import { useEffect, useState } from "react";

export default function DynamicScrollBackground() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = Math.min(1, Math.max(0, window.scrollY / totalHeight));
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Base Gradient Layer (Top pitch black, bottom olive-volt blend) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#0a1206] via-60% to-[#253612]" />

      {/* 2. Dynamic Scroll-Driven Glow Shift */}
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-out"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% ${10 + scrollProgress * 80}%, rgba(210, 255, 0, ${0.04 + scrollProgress * 0.12}) 0%, rgba(37, 54, 18, ${scrollProgress * 0.4}) 60%, transparent 100%)`,
        }}
      />

      {/* 3. Topographic Contour Line Overlay (from the screenshot) */}
      <div
        className="absolute inset-0 opacity-[0.14] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23d2ff00' stroke-width='1.2' stroke-opacity='0.6'%3E%3Cpath d='M100,200 C250,100 450,300 650,150 C750,75 800,250 800,400 C800,600 600,700 400,650 C200,600 50,750 0,600 C-50,450 0,300 100,200 Z'/%3E%3Cpath d='M150,250 C280,160 440,320 600,220 C700,160 750,300 750,420 C750,560 580,640 420,600 C240,560 120,680 70,550 C20,420 50,320 150,250 Z'/%3E%3Cpath d='M200,300 C300,220 430,350 560,280 C640,240 690,340 690,440 C690,530 550,590 430,560 C290,520 180,610 140,500 C100,400 120,340 200,300 Z'/%3E%3Cpath d='M250,350 C330,290 420,380 510,340 C570,310 620,380 620,450 C620,510 520,550 440,530 C330,500 240,560 210,480 C180,400 190,370 250,350 Z'/%3E%3Cpath d='M300,400 C360,350 430,410 480,390 C520,370 560,420 560,460 C560,490 490,520 440,510 C360,490 300,520 280,470 C260,420 260,410 300,400 Z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "600px 600px",
        }}
      />
    </div>
  );
}
