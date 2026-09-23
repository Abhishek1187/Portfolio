"use client";

export default function TickerRibbon() {
  const tickerItems = [
    "FULL-STACK WEB DEVELOPMENT",
    "REACT.JS & NODE.JS",
    "REST APIS & SOCKET.IO",
    "MONGODB & SUPABASE",
    "200+ DSA LEETCODE SOLVED",
    "DATA STRUCTURES & ALGORITHMS",
    "FIREBASE & FIRESTORE",
    "OPEN TO OPPORTUNITIES",
  ];

  return (
    <div className="w-full relative z-10 my-16 select-none overflow-hidden">
      <div className="w-full bg-[#0c1222]/85 backdrop-blur-md border-y border-white/10 py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
        <div className="animate-ticker flex items-center gap-10">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 font-mono text-xs uppercase tracking-widest text-[#94a3b8] hover:text-[#ff9e2c] transition-colors font-bold shrink-0"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff7a00] shadow-[0_0_8px_rgba(255,122,0,0.8)] animate-pulse" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
