"use client";

import { useState, useEffect } from "react";

export default function ScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 60) setVisible(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Mouse scroll wheel — bobs gently, dot slides down inside */}
      <div className="animate-scroll-bob w-[18px] h-[30px] rounded-full border border-white/40 flex justify-center items-start pt-[5px]">
        <div className="w-[3px] h-[6px] rounded-full bg-white/70 animate-scroll-dot" />
      </div>
    </div>
  );
}
