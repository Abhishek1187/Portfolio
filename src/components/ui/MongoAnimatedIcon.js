"use client";

import { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function MongoAnimatedIcon({ className = "w-10 h-10" }) {
  const [mounted, setMounted] = useState(false);
  const [useFallbackUrl, setUseFallbackUrl] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const primaryUrl = "https://lottie.host/ac2bc753-4b04-4f6f-bf00-2e625ca5af8b/2tTvZ7He9D.lottie";
  const localUrl = "/animations/mongodb.lottie";
  const activeUrl = useFallbackUrl ? localUrl : primaryUrl;

  // Static fallback while mounting or if animation fails to load
  const fallbackSvg = (
    <svg viewBox="0 0 24 24" className={className} fill="#47A248">
      <path d="M12 0C11.6 0 10 .8 9.5 2.5c-.8 2.6-1.5 5.5-1.5 8.5 0 4.8 2.2 8.5 4 13 1.8-4.5 4-8.2 4-13 0-3-.7-5.9-1.5-8.5C14 .8 12.4 0 12 0zm0 2.1c.3.5.7 1.5.9 2.5.4 1.7.9 3.7.9 6.4 0 3.7-1.4 7.2-2.8 10.9-1.4-3.7-2.8-7.2-2.8-10.9 0-2.7.5-4.7.9-6.4.2-1 .6-2 .9-2.5z" />
    </svg>
  );

  if (!mounted || hasError) {
    return fallbackSvg;
  }

  return (
    <div
      className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}
      style={{ overflow: "visible" }}
    >
      <DotLottieReact
        src={activeUrl}
        loop
        autoplay
        layout={{
          fit: "contain",
          align: [0.5, 0.5],
        }}
        renderConfig={{
          devicePixelRatio: typeof window !== "undefined" ? Math.max(window.devicePixelRatio || 1, 3) : 3,
        }}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          transform: "scale(1.18)",
          transformOrigin: "center center",
        }}
        onError={() => {
          if (!useFallbackUrl) {
            setUseFallbackUrl(true);
          } else {
            setHasError(true);
          }
        }}
      />
    </div>
  );
}
