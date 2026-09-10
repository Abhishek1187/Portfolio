import Badge from "./Badge";
import { cn } from "@/lib/utils";

export default function SectionHeader({
  sector = "01",
  tag = "TELEMETRY",
  title = "Section Title",
  subtitle = "",
  badgeVariant = "volt",
  className = "",
}) {
  return (
    <div className={cn("mb-10 sm:mb-14", className)}>
      <div className="flex items-center gap-3 mb-3">
        <Badge variant={badgeVariant} size="sm" dot>
          SECTOR {sector} • {tag}
        </Badge>
        <div className="h-px flex-1 bg-gradient-to-r from-[#22252c] to-transparent" />
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#f4f4ed] uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-[#a1a1aa] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
