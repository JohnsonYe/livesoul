"use client";

import { useEffect, useState } from "react";

export default function NavConsumer() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        scrolled
          ? "bg-void/95 backdrop-blur-md border-edge"
          : "bg-transparent border-transparent",
      ].join(" ")}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-serif text-base font-medium text-fg">
          PostHumanAPI
        </a>

        <a
          href="#join"
          className="font-sans text-xs px-4 py-2 border border-fg text-fg hover:bg-fg hover:text-void transition-colors duration-200 whitespace-nowrap"
        >
          Request an introduction
        </a>
      </div>
    </nav>
  );
}
