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

  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer select-none active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d2ff00] focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  // Radii from DESIGN.md: radius.md = 39.3px (pill shape)
  const sizeStyles = {
    sm: "text-[11.85px] py-2 px-4 rounded-[39.3px] gap-1.5",
    md: "text-[14px] py-2.5 px-6 rounded-[39.3px] gap-2",
    lg: "text-[14.81px] py-3.5 px-8 rounded-[39.3px] gap-2.5",
  };

  const variantStyles = {
    primary: "bg-[#d2ff00] text-[#111112] hover:bg-[#e4ff4d] hover:shadow-[0_0_20px_rgba(210,255,0,0.6)] font-extrabold border border-[#d2ff00]",
    papaya: "bg-[#ff8000] text-black hover:bg-[#ff9424] hover:shadow-[0_0_20px_rgba(255,128,0,0.6)] font-extrabold border border-[#ff8000]",
    outline: "bg-transparent text-[#f4f4ed] border-2 border-[#d2ff00]/40 hover:border-[#d2ff00] hover:text-[#d2ff00] hover:bg-[#d2ff00]/10 hover:shadow-[0_0_15px_rgba(210,255,0,0.25)]",
    ghost: "bg-[#14161b] text-[#f4f4ed] border border-[#22252c] hover:border-[#d2ff00]/50 hover:text-[#d2ff00] hover:bg-[#1a1d24]",
    violet: "bg-[#a855f7] text-white hover:bg-[#b870f8] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] font-extrabold border border-[#a855f7]",
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
