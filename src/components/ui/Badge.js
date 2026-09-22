import { cn } from "@/lib/utils";

export default function Badge({
  children,
  variant = "volt",
  size = "md",
  className = "",
  dot = false,
}) {
  const variantStyles = {
    // Solar Amber
    orange: "bg-[#ff7a00]/15 text-[#ff9e2c] border border-[#ff7a00]/40",
    // Electric Indigo
    indigo: "bg-[#6366f1]/15 text-[#818cf8] border border-[#6366f1]/40",
    // Signature Neon Volt (mapped to luminous amber/cyan or original)
    volt: "bg-[#ff7a00]/15 text-[#ff9e2c] border border-[#ff7a00]/40",
    // McLaren Papaya
    papaya: "bg-[#ff7a00]/15 text-[#ff9e2c] border border-[#ff7a00]/40",
    // Cyan
    cyan: "bg-[#38bdf8]/15 text-[#38bdf8] border border-[#38bdf8]/40",
    // Violet
    violet: "bg-[#a855f7]/15 text-[#c084fc] border border-[#a855f7]/40",
    // Slate/Dark
    dark: "bg-[#0c1222] text-slate-300 border border-white/10",
    // High contrast solid
    solidVolt: "bg-[#ff7a00] text-black font-black border border-[#ff7a00]",
  };

  const sizeStyles = {
    xs: "text-[10.67px] py-0.5 px-2 rounded-[6.4px]",
    sm: "text-[11.85px] py-1 px-2.5 rounded-[8.77px]",
    md: "text-[11.85px] py-1 px-3 rounded-[39.3px]",
    lg: "text-[14px] py-1.5 px-4 rounded-[39.3px]",
  };

  const dotColors = {
    orange: "bg-[#ff7a00] shadow-[0_0_8px_#ff7a00]",
    indigo: "bg-[#6366f1] shadow-[0_0_8px_#6366f1]",
    volt: "bg-[#ff7a00] shadow-[0_0_8px_#ff7a00]",
    papaya: "bg-[#ff7a00] shadow-[0_0_8px_#ff7a00]",
    cyan: "bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]",
    violet: "bg-[#a855f7] shadow-[0_0_8px_#a855f7]",
    dark: "bg-slate-400",
    solidVolt: "bg-black",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono uppercase tracking-wider font-semibold select-none",
        variantStyles[variant] || variantStyles.volt,
        sizeStyles[size] || sizeStyles.md,
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full animate-pulse",
            dotColors[variant] || dotColors.volt
          )}
        />
      )}
      <span>{children}</span>
    </span>
  );
}
