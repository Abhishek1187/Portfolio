"use client";

import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { profileData } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sector="02"
          tag="ABOUT & BACKGROUND"
          title="Engineering & Craft"
          subtitle="A passionate developer dedicated to building responsive, accessible, and aesthetically refined digital experiences."
          badgeVariant="volt"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Narrative Bio */}
          <div className="lg:col-span-7">
            <Card glow="volt" className="p-6 sm:p-8 h-full flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="volt" size="sm" dot>
                    BACKGROUND & VISION
                  </Badge>
                  <span className="font-mono text-xs text-[#a1a1aa]">PROFILE • BIO</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#f4f4ed] uppercase">
                  Building with Purpose, Speed & Precision
                </h3>

                <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
                  {profileData.bio.about}
                </p>

                <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
                  I specialize in modern JavaScript/TypeScript ecosystems, component-driven UI architectures, and building products that not only work seamlessly but also delight users with high-end visuals and micro-interactions.
                </p>
              </div>

              {/* Core focus badges */}
              <div className="pt-4 border-t border-[#22252c] flex flex-wrap gap-2">
                <Badge variant="volt" size="sm">Frontend Architecture</Badge>
                <Badge variant="cyan" size="sm">RESTful APIs</Badge>
                <Badge variant="violet" size="sm">Database Systems</Badge>
                <Badge variant="dark" size="sm">Data Structures & OOP</Badge>
              </div>
            </Card>
          </div>

          {/* Quick Facts / Highlights */}
          <div className="lg:col-span-5">
            <Card className="p-6 sm:p-8 h-full space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#22252c] pb-3">
                  <span className="font-mono text-xs uppercase font-bold text-[#d2ff00]">
                    QUICK SPEC SHEET
                  </span>
                  <span className="font-mono text-xs text-[#a1a1aa]">DEV PROFILE</span>
                </div>

                <div className="space-y-3 font-mono text-xs sm:text-sm">
                  <div className="flex justify-between py-1.5 border-b border-[#22252c]/60">
                    <span className="text-[#a1a1aa]">ROLE:</span>
                    <span className="text-[#d2ff00] font-bold">{profileData.title}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#22252c]/60">
                    <span className="text-[#a1a1aa]">LOCATION:</span>
                    <span className="text-[#f4f4ed] font-bold">{profileData.location}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#22252c]/60">
                    <span className="text-[#a1a1aa]">EDUCATION:</span>
                    <span className="text-[#00f0ff] font-bold">B.Tech CSE (2022-2026)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#22252c]/60">
                    <span className="text-[#a1a1aa]">PROBLEM SOLVING:</span>
                    <span className="text-[#a855f7] font-bold">200+ LeetCode DSA</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#22252c]/60">
                    <span className="text-[#a1a1aa]">AVAILABILITY:</span>
                    <span className="text-[#d2ff00] font-bold">Open to Full-Time Roles</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  href="#contact"
                  className="w-full"
                >
                  Let's Work Together ↗
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
