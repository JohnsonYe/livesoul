"use client";

// Animation strategy mirrors diff-terminal.tsx exactly:
// - All text pre-rendered (SSR visible)
// - useEffect hides all chars, then IntersectionObserver reveals them
//   via direct DOM opacity changes — zero React state updates during typing
// - This avoids rapid structural re-renders that iOS throttles/drops

import { useEffect, useRef } from "react";

type Segment = { text: string; cls: string };
type TermLine = { segs: Segment[] };

const REQUEST_LINES: TermLine[] = [
  { segs: [{ text: "// POST /human — the only endpoint that feels something", cls: "text-fg-dim" }] },
  { segs: [{ text: "POST ", cls: "text-green" }, { text: "https://posthumanapi.com/v1/human", cls: "text-fg" }] },
  { segs: [{ text: "Content-Type: application/json", cls: "text-fg-dim" }] },
  { segs: [{ text: "{", cls: "text-fg-dim" }] },
  { segs: [{ text: '  "need"', cls: "text-blue" }, { text: ": ", cls: "text-fg" }, { text: '"someone to explore Tokyo with"', cls: "text-amber" }, { text: ",", cls: "text-fg" }] },
  { segs: [{ text: '  "when"', cls: "text-blue" }, { text: ": ", cls: "text-fg" }, { text: '"now"', cls: "text-amber" }, { text: ",", cls: "text-fg" }] },
  { segs: [{ text: '  "automated"', cls: "text-blue" }, { text: ": ", cls: "text-fg" }, { text: "false", cls: "text-red" }] },
  { segs: [{ text: "}", cls: "text-fg-dim" }] },
];

const RESPONSE_LINES: TermLine[] = [
  { segs: [{ text: "// 200 OK — human found", cls: "text-fg-dim" }] },
  { segs: [{ text: "{", cls: "text-fg-dim" }] },
  { segs: [{ text: '  "status"', cls: "text-blue" }, { text: ": ", cls: "text-fg" }, { text: '"matched"', cls: "text-amber" }, { text: ",", cls: "text-fg" }] },
  { segs: [{ text: '  "presence"', cls: "text-blue" }, { text: ": ", cls: "text-fg" }, { text: "true", cls: "text-green" }, { text: ",", cls: "text-fg" }] },
  { segs: [{ text: '  "warmth"', cls: "text-blue" }, { text: ": ", cls: "text-fg" }, { text: "true", cls: "text-green" }, { text: ",", cls: "text-fg" }] },
  { segs: [{ text: '  "soul"', cls: "text-blue" }, { text: ": ", cls: "text-fg" }, { text: "true", cls: "text-green" }, { text: ",", cls: "text-fg" }] },
  { segs: [{ text: '  "automated"', cls: "text-blue" }, { text: ": ", cls: "text-fg" }, { text: "false", cls: "text-red" }, { text: ",", cls: "text-fg" }] },
  { segs: [{ text: '  "eta"', cls: "text-blue" }, { text: ": ", cls: "text-fg" }, { text: '"human time"', cls: "text-amber" }] },
  { segs: [{ text: "}", cls: "text-fg-dim" }] },
];

function lineLen(l: TermLine) {
  return l.segs.reduce((s, seg) => s + seg.text.length, 0);
}

const REQ_TOTAL = REQUEST_LINES.reduce((s, l) => s + lineLen(l), 0);

const DOTS = (
  <div className="flex gap-1.5 mb-4">
    <div className="w-3 h-3 rounded-full bg-red" />
    <div className="w-3 h-3 rounded-full bg-amber" />
    <div className="w-3 h-3 rounded-full bg-green" />
  </div>
);

const LINE = "font-mono text-[12px] sm:text-sm leading-7 whitespace-pre";

export default function Terminal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return; // leave all text visible

    const charMs = window.innerWidth < 768 ? 50 : 12;

    // Gather all character spans and the response section border
    const chars = Array.from(container.querySelectorAll("[data-c]")) as HTMLElement[];
    const resBorder = container.querySelector("[data-res]") as HTMLElement | null;
    const cursor = container.querySelector("[data-cursor]") as HTMLElement | null;

    // Hide everything — same pattern as diff-terminal.tsx
    chars.forEach(c => { c.style.opacity = "0"; });
    if (resBorder) resBorder.style.opacity = "0";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          observer.disconnect();

          // Hide cursor, start typing
          if (cursor) cursor.style.display = "none";

          let delay = 400;
          const reqLen = REQ_TOTAL;

          chars.forEach((span, i) => {
            setTimeout(() => {
              span.style.opacity = "1";
              // Show response border when first response char appears
              if (i === reqLen && resBorder) resBorder.style.opacity = "1";
            }, delay);

            // 600 ms pause after the last request character
            delay += (i === reqLen - 1 ? 600 : charMs);
          });
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="bg-surface rounded-xl p-4 sm:p-5 overflow-x-auto">
      {DOTS}

      {/* Cursor shown before typing starts, hidden via DOM once animation begins */}
      <span data-cursor="" className={`${LINE} text-fg animate-blink`}>|</span>

      {/* Request block */}
      <div>
        {REQUEST_LINES.map((line, i) => (
          <div key={i} className={LINE}>
            {line.segs.map((seg, j) =>
              seg.text.split("").map((char, k) => (
                <span key={k} data-c="" className={seg.cls}>{char}</span>
              ))
            )}
          </div>
        ))}
      </div>

      {/* Response block — border hidden until first response char appears */}
      <div data-res="" className="mt-3 border-l-2 border-green pl-4">
        {RESPONSE_LINES.map((line, i) => (
          <div key={i} className={LINE}>
            {line.segs.map((seg, j) =>
              seg.text.split("").map((char, k) => (
                <span key={k} data-c="" className={seg.cls}>{char}</span>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
