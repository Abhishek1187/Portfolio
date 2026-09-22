"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import Skills from "@/components/sections/Skills";
import BeyondCode from "@/components/sections/BeyondCode";
import CareerTimeline from "@/components/sections/CareerTimeline";
import RadioContact from "@/components/sections/RadioContact";
import Modal from "@/components/ui/Modal";
import DynamicScrollBackground from "@/components/ui/DynamicScrollBackground";
import { sound } from "@/lib/sound";

export default function Home() {
  const [isMuted, setIsMuted] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Ensure the application always starts at the top on initial load or refresh
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);

      // If page was loaded with a URL hash (e.g. #projects or #contact), remove it
      // so the browser does not jump down into the middle of the page
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
        window.scrollTo(0, 0);
      }
    }
  }, []);

  const handleToggleMute = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      sound.playBeep(880, 0.05);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-[#f8fafc] flex flex-col selection:bg-[#6366f1] selection:text-white overflow-x-hidden">
      {/* 1. Architectural Micro-Grid on Pitch Black Background */}
      <DynamicScrollBackground />

      {/* Top Floating HUD Navbar */}
      <Navbar
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
      />

      {/* Main Portfolio Sections */}
      <main className="relative z-10 flex-1">
        {/* Hero Section */}
        <Hero />

        {/* About & Craft */}
        <About />

        {/* Featured Projects & Modal Inspection */}
        <ProjectsGrid onSelectProject={(project) => setSelectedProject(project)} />

        {/* Skills & Tech Stack */}
        <Skills />

        {/* Beyond Code (Tactical Thinking, Deep Work Battlestation, Creative Craft) */}
        <BeyondCode />

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
