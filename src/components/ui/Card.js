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
    volt: "hover:border-[#d2ff00]/60 hover:shadow-[0_0_25px_rgba(210,255,0,0.15)]",
    papaya: "hover:border-[#ff8000]/60 hover:shadow-[0_0_25px_rgba(255,128,0,0.15)]",
    cyan: "hover:border-[#00f0ff]/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)]",
  };

  return (
    <div
      className={cn(
        "relative bg-[#0a0b0e]/90 backdrop-blur-md border border-[#22252c] rounded-[8.77px] p-5 sm:p-6 transition-all duration-[750ms] ease-out",
        interactive && "cursor-pointer hover:-translate-y-1",
        glowStyles[glow] || glowStyles.none,
        className
      )}
      onClick={onClick}
      {...props}
    >
      {/* Corner Bracket telemetry accent */}
      {bracket && (
        <>
          <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#d2ff00]/40 pointer-events-none rounded-tl-[6.4px]" />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#d2ff00]/40 pointer-events-none rounded-br-[6.4px]" />
        </>
      )}
      {children}
    </div>
  );
}
