"use client";

import { sound } from "@/lib/sound";
import { cn, scrollToSection } from "@/lib/utils";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  target,
  rel,
  disabled = false,
  icon = null,
  type = "button",
  ...props
}) {
  const handleMouseEnter = () => {
    sound.playBeep(980, 0.03);
  };

  const handleClick = (e) => {
    sound.playShiftBlip();
    if (href && href.startsWith("#")) {
      e.preventDefault();
      scrollToSection(href);
    }
    if (onClick) onClick(e);
  };

  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer select-none active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  // Radii: pill shape
  const sizeStyles = {
    sm: "text-[11.85px] py-2 px-4 rounded-[39.3px] gap-1.5",
    md: "text-[14px] py-2.5 px-6 rounded-[39.3px] gap-2",
    lg: "text-[14.81px] py-3.5 px-8 rounded-[39.3px] gap-2.5",
  };

  const variantStyles = {
    primary: "bg-[#ff7a00] text-black hover:bg-[#ff9e2c] hover:shadow-[0_0_22px_rgba(255,122,0,0.55)] font-extrabold border border-[#ff7a00]",
    orange: "bg-[#ff7a00] text-black hover:bg-[#ff9e2c] hover:shadow-[0_0_22px_rgba(255,122,0,0.55)] font-extrabold border border-[#ff7a00]",
    cyan: "bg-[#38bdf8] text-[#05070f] hover:bg-[#0284c7] hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] font-bold border border-[#38bdf8]",
    indigo: "bg-[#6366f1] text-white hover:bg-[#4f46e5] hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] font-bold border border-[#6366f1]",
    outline: "bg-transparent text-[#f8fafc] border border-white/20 hover:border-[#ff7a00]/60 hover:text-[#ff9e2c] hover:bg-[#ff7a00]/10 hover:shadow-[0_0_15px_rgba(255,122,0,0.2)]",
    ghost: "bg-[#0c1222] text-slate-300 border border-white/10 hover:border-[#ff7a00]/40 hover:text-white hover:bg-[#131b2e]",
    violet: "bg-[#a855f7] text-white hover:bg-[#b870f8] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] font-bold border border-[#a855f7]",
    papaya: "bg-[#ff7a00] text-black hover:bg-[#ff9e2c] hover:shadow-[0_0_20px_rgba(255,122,0,0.6)] font-extrabold border border-[#ff7a00]",
    volt: "bg-[#ff7a00] text-black hover:bg-[#ff9e2c] hover:shadow-[0_0_20px_rgba(255,122,0,0.5)] font-extrabold border border-[#ff7a00]",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size] || sizeStyles.md,
    variantStyles[variant] || variantStyles.primary,
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={combinedClasses}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
