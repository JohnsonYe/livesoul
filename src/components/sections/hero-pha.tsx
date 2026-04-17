"use client";

import { useEffect, useRef } from "react";
import Terminal from "@/components/terminal";
import CountUp from "@/components/countup";

export default function HeroPHA() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--gx", `${x}px`);
      el.style.setProperty("--gy", `${y}px`);
    };

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={glowRef}
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-16"
      style={{
        background:
          "radial-gradient(600px circle at var(--gx, 50%) var(--gy, 40%), rgba(40,200,64,0.04) 0%, transparent 70%)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 w-full">
        {/* Terminal */}
        <div className="mb-10">
          <Terminal />
        </div>

        {/* Heading */}
        <h1 className="font-serif text-[40px] md:text-6xl lg:text-7xl font-medium text-fg leading-[1.1] mb-5 tracking-tight">
          In a world of infinite intelligence
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are still just human
        </h1>

        {/* Subline */}
        <p className="text-fg-dim text-base md:text-[17px] leading-relaxed max-w-xl mb-8 md:mb-10">
          PostHumanAPI connects you with real people — for a meal, a walk, a sport, a conversation, an adventure. Not a bot. Not a subscription. A human, on demand.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-8 md:mb-10">
          <div className="bg-surface rounded-lg p-3 sm:p-4">
            <div className="font-mono text-xl sm:text-2xl font-medium text-fg">
              <CountUp target={247} />
            </div>
            <div className="text-fg-dim text-[10px] sm:text-xs mt-1">on waitlist</div>
          </div>
          <div className="bg-surface rounded-lg p-3 sm:p-4">
            <div className="font-mono text-xl sm:text-2xl font-medium text-fg">∞</div>
            <div className="text-fg-dim text-[10px] sm:text-xs mt-1">AI alternatives</div>
          </div>
          <div className="bg-surface rounded-lg p-3 sm:p-4">
            <div className="font-mono text-xl sm:text-2xl font-medium text-fg">1</div>
            <div className="text-fg-dim text-[10px] sm:text-xs mt-1">human API</div>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#waitlist"
          className="block sm:inline-block text-center font-mono text-sm px-6 py-3 border border-green text-green hover:bg-green hover:text-void transition-colors duration-200"
        >
          Request Early Access →
        </a>
      </div>
    </section>
  );
}
