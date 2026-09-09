"use client";

import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { sound } from "@/lib/sound";
import { profileData } from "@/data/profile";

export default function RadioContact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Full-Time / Internship Role",
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
    }, 1000);
  };

  const handleReset = () => {
    sound.playBeep(440, 0.04);
    setFormState({
      name: "",
      email: "",
      subject: "Full-Time / Internship Role",
      message: "",
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sector="07"
          tag="GET IN TOUCH"
          title="Contact & Opportunities"
          subtitle="Have an internship or full-time opportunity, project discussion, or want to connect? Send a message below."
          badgeVariant="volt"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <Card glow="volt" className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-[#22252c] pb-3">
                <div className="flex items-center gap-2 font-mono text-xs text-[#d2ff00] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#d2ff00] animate-ping" />
                  STATUS: {profileData.status}
                </div>
                <Badge variant="dark" size="xs">
                  DIRECT INBOX
                </Badge>
              </div>

              <div className="space-y-4 font-mono text-xs sm:text-sm">
                <div>
                  <span className="text-[#a1a1aa] block mb-1 uppercase">Direct Email:</span>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-[#f4f4ed] hover:text-[#d2ff00] transition-colors font-bold"
                  >
                    {profileData.email}
                  </a>
                </div>
                <div>
                  <span className="text-[#a1a1aa] block mb-1 uppercase">Phone:</span>
                  <a
                    href={`tel:${profileData.phone}`}
                    className="text-[#f4f4ed] hover:text-[#d2ff00] transition-colors font-bold"
                  >
                    {profileData.phone}
                  </a>
                </div>
                <div>
                  <span className="text-[#a1a1aa] block mb-1 uppercase">Location:</span>
                  <span className="text-[#f4f4ed] font-bold">
                    {profileData.location}
                  </span>
                </div>
                <div>
                  <span className="text-[#a1a1aa] block mb-1 uppercase">Education:</span>
                  <span className="text-[#00f0ff] font-bold">
                    B.Tech in Computer Science (Expected 2026)
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-[6.4px] bg-[#14161b] border border-[#22252c] space-y-2">
                <span className="font-mono text-xs font-bold text-[#d2ff00] uppercase block">
                  // QUICK RESPONSE
                </span>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  I am actively seeking software engineering internships and junior full-stack opportunities. Feel free to reach out directly.
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#d2ff00]/15 border-2 border-[#d2ff00] flex items-center justify-center text-[#d2ff00] text-2xl font-black shadow-[0_0_25px_rgba(210,255,0,0.5)]">
                    ✓
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-[#f4f4ed] uppercase">
                      MESSAGE TRANSMITTED
                    </h3>
                    <p className="font-mono text-xs text-[#d2ff00]">
                      PACKET DELIVERED TO INBOX // STATUS: SUCCESS
                    </p>
                  </div>
                  <p className="text-sm text-[#a1a1aa] max-w-md mx-auto">
                    Thank you for reaching out! I will review your message and reply as soon as possible.
                  </p>
                  <Button variant="outline" size="sm" onClick={handleReset}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-[#22252c] pb-3 mb-2">
                    <span className="font-mono text-xs font-bold uppercase text-[#d2ff00]">
                      // MESSAGE CONSOLE
                    </span>
                    <span className="font-mono text-[10.67px] text-[#a1a1aa]">ENCRYPTED TRANSMISSION</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-mono uppercase text-[#a1a1aa]">
                        Your Name <span className="text-[#d2ff00]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Hiring Lead / Recruiter"
                        className="w-full bg-[#14161b] border border-[#22252c] rounded-[6.4px] px-4 py-2.5 text-sm text-[#f4f4ed] placeholder-[#71717a] focus:outline-none focus:border-[#d2ff00] focus:ring-1 focus:ring-[#d2ff00] font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-mono uppercase text-[#a1a1aa]">
                        Email Address <span className="text-[#d2ff00]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. recruiter@company.com"
                        className="w-full bg-[#14161b] border border-[#22252c] rounded-[6.4px] px-4 py-2.5 text-sm text-[#f4f4ed] placeholder-[#71717a] focus:outline-none focus:border-[#d2ff00] focus:ring-1 focus:ring-[#d2ff00] font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-xs font-mono uppercase text-[#a1a1aa]">
                      Topic / Opportunity
                    </label>
                    <select
                      id="subject"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full bg-[#14161b] border border-[#22252c] rounded-[6.4px] px-4 py-2.5 text-sm text-[#f4f4ed] focus:outline-none focus:border-[#d2ff00] focus:ring-1 focus:ring-[#d2ff00] font-mono"
                    >
                      <option value="Full-Time / Internship Role">Full-Time / Internship Opportunity</option>
                      <option value="Project Collaboration">Project Collaboration</option>
                      <option value="Freelance Web Development">Freelance Full-Stack Development</option>
                      <option value="Technical Inquiries">Technical & Open Source Discussion</option>
                      <option value="General Discussion">General Discussion</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-mono uppercase text-[#a1a1aa]">
                      Message <span className="text-[#d2ff00]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Type your message or opportunity details..."
                      className="w-full bg-[#14161b] border border-[#22252c] rounded-[6.4px] px-4 py-2.5 text-sm text-[#f4f4ed] placeholder-[#71717a] focus:outline-none focus:border-[#d2ff00] focus:ring-1 focus:ring-[#d2ff00] font-mono resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    }
                  >
                    {isSubmitting ? "Transmitting..." : "Send Message"}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
