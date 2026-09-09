import { cn } from "@/lib/utils";

export default function Badge({
  children,
  variant = "volt",
  size = "md",
  className = "",
  dot = false,
}) {
  const variantStyles = {
    // Signature Neon Volt
    volt: "bg-[#d2ff00]/15 text-[#d2ff00] border border-[#d2ff00]/40",
    // McLaren Papaya
    papaya: "bg-[#ff8000]/15 text-[#ff8000] border border-[#ff8000]/40",
    // Cyan
    cyan: "bg-[#00f0ff]/15 text-[#00f0ff] border border-[#00f0ff]/40",
    // Violet
    violet: "bg-[#a855f7]/15 text-[#c084fc] border border-[#a855f7]/40",
    // Slate/Dark
    dark: "bg-[#14161b] text-[#a1a1aa] border border-[#22252c]",
    // High contrast solid
    solidVolt: "bg-[#d2ff00] text-[#111112] font-black border border-[#d2ff00]",
  };

  const sizeStyles = {
    xs: "text-[10.67px] py-0.5 px-2 rounded-[6.4px]",
    sm: "text-[11.85px] py-1 px-2.5 rounded-[8.77px]",
    md: "text-[11.85px] py-1 px-3 rounded-[39.3px]",
    lg: "text-[14px] py-1.5 px-4 rounded-[39.3px]",
  };

  const dotColors = {
    volt: "bg-[#d2ff00] shadow-[0_0_8px_#d2ff00]",
    papaya: "bg-[#ff8000] shadow-[0_0_8px_#ff8000]",
    cyan: "bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]",
    violet: "bg-[#a855f7] shadow-[0_0_8px_#a855f7]",
    dark: "bg-[#a1a1aa]",
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
