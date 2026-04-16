"use client";

import { useEffect, useState } from "react";

export default function Nav() {
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
        // Mobile: always solid. Desktop: transparent at top, solid on scroll.
        scrolled
          ? "bg-void/95 backdrop-blur-md border-edge"
          : "bg-void md:bg-transparent border-edge md:border-transparent",
      ].join(" ")}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-mono text-sm text-fg tracking-tight flex items-center gap-2">
          <span>posthumanapi</span>
          <span className="hidden sm:inline text-fg-dim">// v1.0.0</span>
        </a>

        <a
          href="#waitlist"
          className="font-mono text-xs px-3 py-2 sm:px-4 border border-green text-green hover:bg-green hover:text-void transition-colors duration-200 whitespace-nowrap"
        >
          <span className="hidden sm:inline">Request Early Access →</span>
          <span className="sm:hidden">Early Access →</span>
        </a>
      </div>
    </nav>
  );
}
