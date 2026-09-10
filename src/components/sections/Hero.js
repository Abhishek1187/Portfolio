"use client";

import Image from "next/image";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import { profileData } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      {/* Subtle Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#d2ff00]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#00f0ff]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Top Status HUD Pill */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-6">
          <Badge variant="solidVolt" size="sm">
            PORTFOLIO
          </Badge>
          <Badge variant="volt" size="sm" dot>
            {profileData.status}
          </Badge>
          <Badge variant="dark" size="sm">
            LOC: {profileData.location}
          </Badge>
        </div>

        {/* Main Grid: Headline & Developer Cockpit Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center sm:text-left">
            <div className="space-y-3">
              <span className="font-mono text-xs sm:text-sm font-bold text-[#d2ff00] tracking-widest uppercase flex items-center justify-center sm:justify-start">
                <span>{profileData.title}</span>
              </span>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase leading-[0.95] text-[var(--color-text-primary)]">
                {profileData.name.split(" ")[0]} <br />
                <span className="text-[#d2ff00] text-glow-volt">
                  {profileData.name.split(" ")[1] || "DEV"}
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] max-w-xl font-normal leading-relaxed">
              {profileData.bio.lead}
            </p>

            {/* Quick Spec Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              {profileData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--color-surface-card)]/80 border border-[var(--color-border-card)] rounded-[8.77px] p-3 text-center sm:text-left shadow-sm"
                >
                  <span className="block text-[10.67px] font-mono text-[var(--color-text-secondary)] uppercase truncate">
                    {stat.label}
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-[#d2ff00] font-mono">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
              >
                View Projects
              </Button>
              <Button variant="outline" size="lg" href="#skills">
                Tech Stack
              </Button>
              <Button variant="ghost" size="lg" href="#contact">
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Column: High-Tech Developer Terminal Card */}
          <div className="lg:col-span-5">
            <Card glow="volt" className="border-volt-subtle p-5 sm:p-6 space-y-4 sm:space-y-5">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[var(--color-border-card)] pb-3">
                <div className="flex items-center gap-2 font-mono text-xs text-[#d2ff00] font-bold tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#d2ff00] animate-ping" />
                  DEV ENVIRONMENT • ACTIVE
                </div>
                <Badge variant="dark" size="xs">
                  NEXT.JS 16 • TAILWIND
                </Badge>
              </div>

              {/* Operator / Avatar Visual Frame */}
              <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-[8.77px] overflow-hidden border border-[var(--color-border-card)] group bg-[var(--color-surface-subtle)] shadow-inner">
                <Image
                  src="/toji.png"
                  alt="Abhishek Kumar"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top filter brightness-[0.95] contrast-[1.05] transition-transform duration-700 group-hover:scale-105 group-hover:brightness-100"
                  priority
                />
                {/* Vignette gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-card)] via-transparent to-transparent opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-60" />

                {/* HUD Corner Accents */}
                <div className="absolute bottom-2.5 right-2.5 font-mono text-[9px] tracking-widest text-[var(--color-text-secondary)] bg-black/75 backdrop-blur-md px-2 py-0.5 rounded-[4px] border border-white/10">
                </div>
              </div>

              <div className="pt-1">
                <Button
                  variant="outline"
                  size="sm"
                  href="#contact"
                  className="w-full text-center"
                >
                  Get In Touch ↗
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
