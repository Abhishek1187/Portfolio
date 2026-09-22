"use client";

export default function DynamicScrollBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#05070f]"
      aria-hidden="true"
    >
      {/* 1. Deep Obsidian Midnight Canvas */}
      <div className="absolute inset-0 bg-[#05070f]" />

      {/* 2. Architectural Micro-Grid (Vercel / Stripe Developer Console Style) */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.9) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 15%, #000 30%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 15%, #000 30%, transparent 85%)",
        }}
      />

      {/* 3. Radiant Pure Orange Ambient Crown Lighting */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(255, 122, 0, 0.12), rgba(255, 158, 44, 0.05), transparent 70%)",
        }}
      />
    </div>
  );
}
