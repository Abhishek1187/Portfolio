import TextReveal from "./TextReveal";
import { cn } from "@/lib/utils";

export default function SectionHeader({
  sector = "01",
  tag = "OVERVIEW",
  title = "Section Title",
  subtitle = "",
  className = "",
}) {
  return (
    <div className={cn("mb-12 sm:mb-16", className)}>
      <div className="flex items-center gap-3 mb-3">
        <TextReveal preset="fade-up" delay={0}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c1222] border border-white/10 text-xs font-mono font-medium text-[#38bdf8]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a00] shadow-[0_0_8px_#ff7a00] animate-pulse" />
            <span className="tracking-widest uppercase">{tag}</span>
          </div>
        </TextReveal>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
      </div>

      <TextReveal
        as="h2"
        preset="mask-up"
        delay={100}
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f8fafc]"
      >
        {title}
      </TextReveal>

      {subtitle && (
        <TextReveal
          as="p"
          preset="words"
          delay={220}
          className="mt-3 text-sm sm:text-base text-[#94a3b8] max-w-2xl leading-relaxed font-normal"
        >
          {subtitle}
        </TextReveal>
      )}
    </div>
  );
}

