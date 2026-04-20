"use client";

// bg-terminal keeps the widget dark even on the new light page theme.
// text-terminal-fg / text-terminal-fg-dim are used instead of text-fg /
// text-fg-dim so terminal text stays legible on the dark background.

import { useEffect, useRef } from "react";

type Segment = { text: string; cls: string };
type TermLine = { segs: Segment[] };

const REQUEST_LINES: TermLine[] = [
  { segs: [{ text: "// POST /human: the only endpoint that feels something", cls: "text-terminal-fg-dim" }] },
  { segs: [{ text: "POST ", cls: "text-green" }, { text: "https://posthumanapi.com/v1/human", cls: "text-terminal-fg" }] },
  { segs: [{ text: "Content-Type: application/json", cls: "text-terminal-fg-dim" }] },
  { segs: [{ text: "{", cls: "text-terminal-fg-dim" }] },
  { segs: [{ text: '  "need"', cls: "text-blue" }, { text: ": ", cls: "text-terminal-fg" }, { text: '"someone to explore Tokyo with"', cls: "text-amber" }, { text: ",", cls: "text-terminal-fg" }] },
  { segs: [{ text: '  "when"', cls: "text-blue" }, { text: ": ", cls: "text-terminal-fg" }, { text: '"now"', cls: "text-amber" }, { text: ",", cls: "text-terminal-fg" }] },
  { segs: [{ text: '  "automated"', cls: "text-blue" }, { text: ": ", cls: "text-terminal-fg" }, { text: "false", cls: "text-red" }] },
  { segs: [{ text: "}", cls: "text-terminal-fg-dim" }] },
];

const RESPONSE_LINES: TermLine[] = [
  { segs: [{ text: "// 200 OK: human found", cls: "text-terminal-fg-dim" }] },
  { segs: [{ text: "{", cls: "text-terminal-fg-dim" }] },
  { segs: [{ text: '  "status"', cls: "text-blue" }, { text: ": ", cls: "text-terminal-fg" }, { text: '"matched"', cls: "text-amber" }, { text: ",", cls: "text-terminal-fg" }] },
  { segs: [{ text: '  "presence"', cls: "text-blue" }, { text: ": ", cls: "text-terminal-fg" }, { text: "true", cls: "text-green" }, { text: ",", cls: "text-terminal-fg" }] },
  { segs: [{ text: '  "warmth"', cls: "text-blue" }, { text: ": ", cls: "text-terminal-fg" }, { text: "true", cls: "text-green" }, { text: ",", cls: "text-terminal-fg" }] },
  { segs: [{ text: '  "soul"', cls: "text-blue" }, { text: ": ", cls: "text-terminal-fg" }, { text: "true", cls: "text-green" }, { text: ",", cls: "text-terminal-fg" }] },
  { segs: [{ text: '  "automated"', cls: "text-blue" }, { text: ": ", cls: "text-terminal-fg" }, { text: "false", cls: "text-red" }, { text: ",", cls: "text-terminal-fg" }] },
  { segs: [{ text: '  "eta"', cls: "text-blue" }, { text: ": ", cls: "text-terminal-fg" }, { text: '"human time"', cls: "text-amber" }] },
  { segs: [{ text: "}", cls: "text-terminal-fg-dim" }] },
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
    if (prefersReduced) return;

    const chars = Array.from(container.querySelectorAll("[data-c]")) as HTMLElement[];
    const resBorder = container.querySelector("[data-res]") as HTMLElement | null;
    const cursor = container.querySelector("[data-cursor]") as HTMLElement | null;

    chars.forEach(c => { c.style.opacity = "0"; });
    if (resBorder) resBorder.style.opacity = "0";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          observer.disconnect();

          if (cursor) cursor.style.display = "none";

          let delay = 400;
          chars.forEach((span, i) => {
            setTimeout(() => {
              span.style.opacity = "1";
              if (i === REQ_TOTAL && resBorder) resBorder.style.opacity = "1";
            }, delay);
            delay += (i === REQ_TOTAL - 1 ? 600 : 12);
          });
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="bg-terminal rounded-xl p-4 sm:p-5 overflow-x-auto">
      {DOTS}

      <span data-cursor="" className={`${LINE} text-terminal-fg animate-blink`}>|</span>

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
