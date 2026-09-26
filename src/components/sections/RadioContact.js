"use client";

import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { sound } from "@/lib/sound";
import { profileData } from "@/data/profile";

export default function RadioContact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Full-Time Opportunity",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playRadioChime();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    sound.playBeep(440, 0.04);
    setFormState({
      name: "",
      email: "",
      subject: "Full-Time Opportunity",
      message: "",
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sector="06"
          tag="GET IN TOUCH"
          title="Let's Build Something Exceptional"
          subtitle="Actively exploring full-time Software Engineer and Full-Stack Developer opportunities. Let's discuss how I can create value on your team."
          badgeVariant="indigo"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Channels & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0d111c]/80 backdrop-blur-xl border border-white/10 space-y-6 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5 font-mono text-xs text-cyan-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  STATUS: {profileData.status}
                </div>
                <Badge variant="cyan" size="xs">
                  DIRECT CHANNELS
                </Badge>
              </div>

              <div className="space-y-4 font-mono text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 block mb-1 uppercase text-[11px] tracking-wider">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-white hover:text-indigo-400 transition-colors font-semibold tracking-wide"
                  >
                    {profileData.email}
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1 uppercase text-[11px] tracking-wider">
                    Phone
                  </span>
                  <a
                    href={`tel:${profileData.phone}`}
                    className="text-white hover:text-indigo-400 transition-colors font-semibold tracking-wide"
                  >
                    {profileData.phone}
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1 uppercase text-[11px] tracking-wider">
                    Location
                  </span>
                  <span className="text-white font-semibold">
                    {profileData.location}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1 uppercase text-[11px] tracking-wider">
                    Education
                  </span>
                  <span className="text-indigo-300 font-semibold">
                    B.Tech in Computer Science (2022–2026)
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#131827]/60 border border-white/5 space-y-1.5">
                <span className="font-mono text-xs font-bold text-indigo-400 uppercase tracking-wider block">
                  FAST RESPONSE PROMISE
                </span>
                <p className="text-xs text-slate-300/80 leading-relaxed">
                  I monitor my inbox daily and typically reply within 24 hours. Open to immediate interviews and technical assessments.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0d111c]/80 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 mx-auto rounded-full bg-indigo-500/20 border-2 border-indigo-400 flex items-center justify-center text-indigo-300 text-2xl font-bold shadow-[0_0_25px_rgba(99,102,241,0.5)]">
                    ✓
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Message Received
                    </h3>
                    <p className="font-mono text-xs text-cyan-400 tracking-wider">
                      THANK YOU • I WILL REPLY SHORTLY
                    </p>
                  </div>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out! I look forward to reviewing your message and connecting with you.
                  </p>
                  <Button variant="outline" size="sm" onClick={handleReset}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-2">
                    <span className="font-mono text-xs font-semibold uppercase text-indigo-400 tracking-wider">
                      Direct Communication
                    </span>
                    <span className="font-mono text-[11px] text-slate-400">
                      Typical reply: &lt; 24h
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-mono uppercase text-slate-400 tracking-wider">
                        Your Name <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Hiring Lead / Recruiter"
                        className="w-full bg-[#131827] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-sans transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-mono uppercase text-slate-400 tracking-wider">
                        Email Address <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. lead@company.com"
                        className="w-full bg-[#131827] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-sans transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-xs font-mono uppercase text-slate-400 tracking-wider">
                      Topic / Opportunity
                    </label>
                    <select
                      id="subject"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full bg-[#131827] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-sans transition-colors cursor-pointer"
                    >
                      <option value="Full-Time Opportunity">Full-Time Software Engineer Role</option>
                      <option value="Frontend / Full-Stack Role">Frontend / Full-Stack Developer Opportunity</option>
                      <option value="Project Collaboration">Project Collaboration & Contract</option>
                      <option value="Technical Discussion">Technical & Open Source Discussion</option>
                      <option value="General Inquiries">General Inquiries</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-mono uppercase text-slate-400 tracking-wider">
                      Message <span className="text-[#ff7a00]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share details about the role, technical challenge, or project..."
                      className="w-full bg-[#131b2e] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#ff7a00] focus:ring-1 focus:ring-[#ff7a00] font-sans resize-none transition-colors"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#ff7a00] to-[#ea580c] hover:from-[#ff9e2c] hover:to-[#ff7a00] text-black font-extrabold shadow-[0_0_25px_rgba(255,122,0,0.4)] border-none"
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    }
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
