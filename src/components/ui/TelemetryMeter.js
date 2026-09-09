"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function TelemetryMeter({
  label,
  value,
  max = 100,
  unit = "%",
  color = "#d2ff00",
  secondaryLabel = "",
  className = "",
}) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(value);
    }, 150);
    return () => clearTimeout(timer);
  }, [value]);

  const percentage = Math.min(100, Math.max(0, (animatedValue / max) * 100));

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between text-xs sm:text-sm">
        <span className="font-mono uppercase text-[#a1a1aa] font-medium tracking-wide">
          {label}
        </span>
        <div className="flex items-center gap-2">
          {secondaryLabel && (
            <span className="text-[10.67px] text-[#71717a] font-mono">
              {secondaryLabel}
            </span>
          )}
          <span className="font-mono font-bold text-[#f4f4ed]">
            {value} {unit}
          </span>
        </div>
      </div>
      <div className="h-2 w-full bg-[#14161b] rounded-full overflow-hidden border border-[#22252c] p-0.5">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}80`,
          }}
        />
      </div>
    </div>
  );
}
