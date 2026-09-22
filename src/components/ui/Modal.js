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
        className="relative w-full max-w-2xl bg-[#0d111c] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden backdrop-blur-2xl"
        style={{ borderTopColor: project.accentColor || "#6366f1", borderTopWidth: 3 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Badge variant="indigo" size="xs">
              PROJECT OVERVIEW
            </Badge>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
              {project.id}
            </span>
          </div>
          <button
            onClick={() => {
              sound.playBeep(440, 0.04);
              onClose();
            }}
            className="text-slate-400 hover:text-white p-1 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Title & category */}
        <div className="mb-4">
          <Badge variant="cyan" size="sm" className="mb-2">
            {project.category}
          </Badge>
          <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm font-mono text-cyan-400 mt-1">{project.tagline}</p>
        </div>

        {/* Full description */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && (
          <div className="mb-6 bg-[#131827]/80 border border-white/10 rounded-xl p-5">
            <h4 className="text-xs font-mono uppercase text-indigo-400 font-semibold mb-3 tracking-wider">
              KEY HIGHLIGHTS & ARCHITECTURE
            </h4>
            <ul className="space-y-2.5">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <span className="text-indigo-400 font-mono select-none">▶</span>
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
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/10">
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
              Visit Project
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
