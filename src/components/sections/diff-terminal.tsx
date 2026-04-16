"use client";

import { useEffect, useRef, useState } from "react";
import FadeInUp from "@/components/fade-in-up";

const RED_LINES = [
  "- labor",
  "- productivity as status",
  "- time as output",
  "- wealth = what you own",
];

const GREEN_LINES = [
  "+ presence",
  "+ connection as currency",
  "+ time as life",
  "+ wealth = richness of experience",
];

export default function DiffTerminal() {
  // Start with all lines visible (SSR + no-JS fallback)
  const [redVisible, setRedVisible] = useState(RED_LINES.length);
  const [greenVisible, setGreenVisible] = useState(GREEN_LINES.length);
  const ref = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return; // stay fully visible

    const el = ref.current;
    if (!el) return;

    // Reset to hidden, then animate in on scroll
    setRedVisible(0);
    setGreenVisible(0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;

          RED_LINES.forEach((_, i) => {
            setTimeout(() => setRedVisible(i + 1), i * 150);
          });

          const redDelay = RED_LINES.length * 150 + 400;
          GREEN_LINES.forEach((_, i) => {
            setTimeout(() => setGreenVisible(i + 1), redDelay + i * 150);
          });
        }
      },
      { threshold: 0.1, rootMargin: "0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <FadeInUp>
          <p className="font-mono text-xs text-fg-dim tracking-widest mb-3">// why now</p>
          <h2 className="text-4xl font-medium text-fg leading-tight mb-4">
            The posthuman age needs a human API.
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p className="text-fg-dim text-[15px] leading-[1.8] max-w-[580px] mb-8">
            We named ourselves PostHumanAPI because that&rsquo;s the world we&rsquo;re building for — a world where AI does everything except feel. We&rsquo;re not against that world. We&rsquo;re the necessary complement to it.
          </p>
        </FadeInUp>

        <div ref={ref} className="bg-terminal rounded-xl p-5 overflow-x-auto">
          <div className="flex gap-1.5 mb-4">
            <div className="w-3 h-3 rounded-full bg-red" />
            <div className="w-3 h-3 rounded-full bg-amber" />
            <div className="w-3 h-3 rounded-full bg-green" />
          </div>

          <div className="font-mono text-sm text-terminal-fg-dim leading-7 mb-3">
            // the future, described as a diff
          </div>

          <div className="space-y-0 mb-2">
            {RED_LINES.map((line, i) => (
              <div
                key={line}
                className="font-mono text-sm leading-7 text-red transition-opacity duration-300 whitespace-pre"
                style={{ opacity: i < redVisible ? 1 : 0 }}
              >
                {line}
              </div>
            ))}
          </div>

          <div className="space-y-0">
            {GREEN_LINES.map((line, i) => (
              <div
                key={line}
                className="font-mono text-sm leading-7 text-green transition-opacity duration-300 whitespace-pre"
                style={{ opacity: i < greenVisible ? 1 : 0 }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
