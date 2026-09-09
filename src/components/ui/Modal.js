"use client";

import { useEffect, useRef } from "react";
import Button from "./Button";
import Badge from "./Badge";
import { sound } from "@/lib/sound";

export default function Modal({ isOpen, onClose, project }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        sound.playBeep(440, 0.04);
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-[#0a0b0e] border border-[#22252c] rounded-[8.77px] p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
        style={{ borderTopColor: project.accentColor || "#d2ff00", borderTopWidth: 3 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top telemetry bar */}
        <div className="flex items-center justify-between border-b border-[#22252c] pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Badge variant="solidVolt" size="xs">
              QUEST LOG
            </Badge>
            <span className="font-mono text-xs text-[#a1a1aa] uppercase tracking-wider">
              ID: {project.id}
            </span>
          </div>
          <button
            onClick={() => {
              sound.playBeep(440, 0.04);
              onClose();
            }}
            className="text-[#a1a1aa] hover:text-[#d2ff00] p-1 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d2ff00]"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Title & category */}
        <div className="mb-4">
          <Badge variant="volt" size="sm" className="mb-2">
            {project.category}
          </Badge>
          <h3 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-[#f4f4ed] uppercase">
            {project.title}
          </h3>
          <p className="text-sm font-mono text-[#d2ff00] mt-1">{project.tagline}</p>
        </div>

        {/* Full description */}
        <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && (
          <div className="mb-6 bg-[#14161b]/80 border border-[#22252c] rounded-[6.4px] p-4">
            <h4 className="text-xs font-mono uppercase text-[#d2ff00] font-bold mb-3 tracking-wider">
              // KEY MISSION HIGHLIGHTS
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#f4f4ed]">
                  <span className="text-[#d2ff00] font-mono select-none">▶</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="dark" size="xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#22252c]">
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close Window
          </Button>
          {project.link && (
            <Button
              variant="primary"
              size="sm"
              href={project.link}
              target="_blank"
              icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              }
            >
              Open Transmission
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
