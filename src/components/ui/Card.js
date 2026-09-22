import { cn } from "@/lib/utils";

export default function Card({
  children,
  className = "",
  glow = "none",
  interactive = false,
  bracket = true,
  onClick,
  ...props
}) {
  const glowStyles = {
    none: "",
    orange: "hover:border-[#ff7a00]/60 hover:shadow-[0_0_25px_rgba(255,122,0,0.25)]",
    volt: "hover:border-[#ff7a00]/60 hover:shadow-[0_0_25px_rgba(255,122,0,0.25)]",
    papaya: "hover:border-[#ff7a00]/60 hover:shadow-[0_0_25px_rgba(255,122,0,0.25)]",
    cyan: "hover:border-[#38bdf8]/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)]",
    indigo: "hover:border-indigo-500/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)]",
  };

  return (
    <div
      className={cn(
        "relative bg-[#0c1222]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 ease-out",
        interactive && "cursor-pointer hover:-translate-y-1 hover:shadow-lg",
        glowStyles[glow] || glowStyles.none,
        className
      )}
      onClick={onClick}
      {...props}
    >
      {/* Corner Bracket subtle accent */}
      {bracket && (
        <>
          <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#ff7a00]/30 pointer-events-none rounded-tl-xl" />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#ff7a00]/30 pointer-events-none rounded-br-xl" />
        </>
      )}
      {children}
    </div>
  );
}
