"use client";

import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { gamingData } from "@/data/gaming";
import { sound } from "@/lib/sound";

export default function GamerCorner() {
  const [copiedId, setCopiedId] = useState(false);

  const handleCopyRiotId = () => {
    sound.playBeep(980, 0.03);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(gamingData.riotId);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  return (
    <section id="gaming" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sector="05"
          tag="GAMER CORNER & STATS"
          title="Gaming Passion & Stats"
          subtitle="When I'm away from the keyboard writing code, I love competitive gaming and tactical FPS. Here's what I'm playing and my current rank telemetry."
          badgeVariant="volt"
        />

        {/* Top Valorant & Gamer Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Main Valorant Rank & Combat Stats */}
          <div className="lg:col-span-7">
            <Card glow="volt" className="p-6 sm:p-8 space-y-6 h-full flex flex-col justify-between">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#22252c] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[8.77px] bg-[#ff4655] text-white font-black flex items-center justify-center text-lg shadow-[0_0_15px_rgba(255,70,85,0.4)]">
                      V
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-extrabold text-lg sm:text-xl text-[#f4f4ed] uppercase">
                          VALORANT Competitive
                        </h3>
                        <Badge variant="solidVolt" size="xs">
                          ACT ACTIVE
                        </Badge>
                      </div>
                      <span className="font-mono text-xs text-[#a1a1aa]">
                        RIOT ID: {gamingData.riotId}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyRiotId}
                    className="font-mono text-xs px-3 py-1.5 rounded-[39.3px] bg-[#14161b] border border-[#22252c] hover:border-[#d2ff00] text-[#f4f4ed] transition-colors"
                  >
                    {copiedId ? "✓ Copied ID!" : "Copy Riot ID"}
                  </button>
                </div>

                {/* Rank Display & Peak */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-[8.77px] bg-[#14161b] border border-[#22252c] space-y-1">
                    <span className="text-[10.67px] font-mono text-[#a1a1aa] uppercase block">
                      CURRENT RANK
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl sm:text-3xl font-black text-[#d2ff00] font-mono">
                        {gamingData.valorant.currentRank}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#a1a1aa] block">
                      {gamingData.valorant.currentRR}
                    </span>
                  </div>

                  <div className="p-4 rounded-[8.77px] bg-[#14161b] border border-[#22252c] space-y-1">
                    <span className="text-[10.67px] font-mono text-[#a1a1aa] uppercase block">
                      CAREER PEAK
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl sm:text-3xl font-black text-[#a855f7] font-mono">
                        {gamingData.valorant.peakRank}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#a1a1aa] block">
                      Role: {gamingData.valorant.mainRole}
                    </span>
                  </div>
                </div>

                {/* Stat Badges Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
                  <div className="p-3 rounded-[6.4px] bg-[#0a0b0e] border border-[#22252c] text-center">
                    <span className="block text-[10.67px] text-[#a1a1aa]">K/D RATIO</span>
                    <span className="text-lg font-bold text-[#d2ff00]">{gamingData.valorant.kdRatio}</span>
                  </div>
                  <div className="p-3 rounded-[6.4px] bg-[#0a0b0e] border border-[#22252c] text-center">
                    <span className="block text-[10.67px] text-[#a1a1aa]">HEADSHOT %</span>
                    <span className="text-lg font-bold text-[#f4f4ed]">{gamingData.valorant.headshotPercentage}</span>
                  </div>
                  <div className="p-3 rounded-[6.4px] bg-[#0a0b0e] border border-[#22252c] text-center">
                    <span className="block text-[10.67px] text-[#a1a1aa]">WIN RATE</span>
                    <span className="text-lg font-bold text-[#00f0ff]">{gamingData.valorant.winRate}</span>
                  </div>
                  <div className="p-3 rounded-[6.4px] bg-[#0a0b0e] border border-[#22252c] text-center">
                    <span className="block text-[10.67px] text-[#a1a1aa]">MATCHES</span>
                    <span className="text-lg font-bold text-[#f4f4ed]">{gamingData.valorant.matchesPlayed}</span>
                  </div>
                </div>

                {/* Top Main Agents */}
                <div>
                  <span className="text-xs font-mono uppercase text-[#a1a1aa] block mb-2 font-semibold">
                    // MOST PLAYED AGENTS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {gamingData.valorant.topAgents.map((agent) => (
                      <div
                        key={agent.name}
                        className="p-3 rounded-[6.4px] bg-[#14161b] border border-[#22252c] flex items-center justify-between font-mono text-xs"
                      >
                        <div>
                          <span className="font-bold text-[#f4f4ed] block">{agent.name}</span>
                          <span className="text-[10.67px] text-[#a1a1aa]">{agent.role}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[#d2ff00] font-bold block">{agent.winRate} WR</span>
                          <span className="text-[10.67px] text-[#71717a]">{agent.pickRate} Pick</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Battlestation Specs */}
          <div className="lg:col-span-5">
            <Card className="p-6 sm:p-8 space-y-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#22252c] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#d2ff00]" />
                    <h3 className="font-mono text-xs uppercase font-bold text-[#d2ff00]">
                      // BATTLESTATION SETUP
                    </h3>
                  </div>
                  <Badge variant="dark" size="xs">
                    4K / 240HZ RIG
                  </Badge>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {gamingData.battlestation.map((spec, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-[6.4px] bg-[#14161b] border border-[#22252c] flex items-center justify-between"
                    >
                      <span className="text-[#a1a1aa] font-semibold">{spec.category}:</span>
                      <span className="text-[#f4f4ed] font-medium text-right max-w-[65%] truncate">
                        {spec.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#22252c] flex flex-wrap gap-2">
                <Badge variant="volt" size="sm">Rapid Trigger</Badge>
                <Badge variant="cyan" size="sm">240Hz Fast-IPS</Badge>
                <Badge variant="violet" size="sm">Discord Active</Badge>
              </div>
            </Card>
          </div>
        </div>

        {/* Recently Played Games */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-mono text-xs uppercase font-bold text-[#d2ff00] tracking-wider flex items-center gap-2">
              <span>//</span> RECENTLY PLAYED & FAVORITES
            </h3>
            <span className="font-mono text-xs text-[#a1a1aa]">
              STEAM & RIOT LOGGED
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gamingData.recentGames.map((game, idx) => (
              <Card
                key={idx}
                interactive
                glow="volt"
                className="p-5 space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <Badge variant="dark" size="xs">
                    {game.tag}
                  </Badge>
                  <span className="font-mono text-xs text-[#a1a1aa]">
                    {game.hours}
                  </span>
                </div>

                <div>
                  <h4 className="font-extrabold text-base text-[#f4f4ed] group-hover:text-[#d2ff00] transition-colors uppercase">
                    {game.title}
                  </h4>
                  <p className="font-mono text-xs text-[#a1a1aa] mt-0.5">
                    {game.genre}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#22252c] flex items-center justify-between font-mono text-xs">
                  <span className="text-[#71717a]">Status:</span>
                  <span className="text-[#d2ff00] font-semibold">{game.status}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
