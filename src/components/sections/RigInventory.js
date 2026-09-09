"use client";

import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import TelemetryMeter from "../ui/TelemetryMeter";
import { gearData } from "@/data/gear";

export default function RigInventory() {
  return (
    <section id="rig" className="py-20 px-4 sm:px-6 lg:px-8 bg-carbon relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sector="05"
          tag="HARDWARE & TECH INVENTORY"
          title="Sim Rig & Creator Battle Station"
          subtitle="Engineering-grade simulator hardware calibrated to match real-world McLaren F1 hydraulic brake pressure curves and low-latency studio broadcast systems."
          badgeVariant="volt"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Sim Rig Column */}
          <div className="lg:col-span-6 space-y-6">
            <Card glow="volt" className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-[#22252c] pb-3">
                <div className="flex items-center gap-2">
                  <Badge variant="volt" size="sm" dot>
                    PRIMARY SIM RIG
                  </Badge>
                  <span className="font-mono text-xs text-[#a1a1aa]">32NM DIRECT DRIVE</span>
                </div>
                <span className="font-mono text-xs text-[#d2ff00] font-bold">READY</span>
              </div>

              <div className="space-y-4">
                {gearData.simRig.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-[6.4px] bg-[#14161b]/80 border border-[#22252c] space-y-1 hover:border-[#d2ff00]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#d2ff00] font-bold">{item.category}</span>
                      <span className="text-[#a1a1aa] bg-black/50 px-2 py-0.5 rounded border border-[#22252c]">
                        {item.status}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-[#f4f4ed]">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#a1a1aa] font-mono leading-relaxed">
                      {item.spec}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Creator & Studio Column */}
          <div className="lg:col-span-6 space-y-6">
            <Card glow="papaya" className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-[#22252c] pb-3">
                <div className="flex items-center gap-2">
                  <Badge variant="papaya" size="sm" dot>
                    STUDIO BATTLESTATION
                  </Badge>
                  <span className="font-mono text-xs text-[#a1a1aa]">DUAL RTX 4090</span>
                </div>
                <span className="font-mono text-xs text-[#ff8000] font-bold">ONLINE</span>
              </div>

              <div className="space-y-4">
                {gearData.creatorStation.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-[6.4px] bg-[#14161b]/80 border border-[#22252c] space-y-1 hover:border-[#ff8000]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#ff8000] font-bold">{item.category}</span>
                      <span className="text-[#a1a1aa] bg-black/50 px-2 py-0.5 rounded border border-[#22252c]">
                        {item.status}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-[#f4f4ed]">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#a1a1aa] font-mono leading-relaxed">
                      {item.spec}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Telemetry Engineering Capabilities */}
        <Card className="p-6 sm:p-8">
          <div className="mb-6">
            <h3 className="font-mono text-xs uppercase font-bold text-[#d2ff00] tracking-wider mb-2">
              // TELEMETRY & STRATEGY PROFICIENCY
            </h3>
            <p className="text-xs sm:text-sm text-[#a1a1aa]">
              Engineering capabilities spanning real-world ATLAS telemetry analysis, dynamic sim racing setups, and digital media architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gearData.telemetrySkills.map((skill, idx) => (
              <TelemetryMeter
                key={idx}
                label={skill.name}
                value={skill.level}
                max={100}
                color={idx % 2 === 0 ? "#d2ff00" : "#ff8000"}
                secondaryLabel={`SPEC // ${skill.category}`}
              />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
