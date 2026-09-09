"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import Skills from "@/components/sections/Skills";
import GamerCorner from "@/components/sections/GamerCorner";
import CareerTimeline from "@/components/sections/CareerTimeline";
import RadioContact from "@/components/sections/RadioContact";
import Modal from "@/components/ui/Modal";
import { sound } from "@/lib/sound";

export default function Home() {
  const [isMuted, setIsMuted] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleToggleMute = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      sound.playBeep(880, 0.05);
    }
  };

  return (
    <div className="min-h-screen bg-black text-[#f4f4ed] flex flex-col selection:bg-[#d2ff00] selection:text-black">
      {/* Top Floating HUD Navbar */}
      <Navbar
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
      />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* About & Craft */}
        <About />

        {/* Featured Projects & Modal Inspection */}
        <ProjectsGrid onSelectProject={(project) => setSelectedProject(project)} />

        {/* Skills & Tech Stack */}
        <Skills />

        {/* Dedicated Gamer Corner (Valorant Rank, Combat Stats, Recent Games, Battlestation) */}
        <GamerCorner />

        {/* Experience & Education Timeline */}
        <CareerTimeline />

        {/* Contact Form Console */}
        <RadioContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal Dialog */}
      <Modal
        isOpen={Boolean(selectedProject)}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
