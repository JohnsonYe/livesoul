"use client";

import { useState } from "react";
import FadeInUp from "@/components/fade-in-up";

const ACTIVE_CITIES = [
  { name: "New York", detail: "Manhattan, by introduction" },
  { name: "London", detail: "Mayfair, now open" },
  { name: "Tokyo", detail: "Azabu-Juban, select membership" },
];

const COMING_CITIES = [
  { name: "Paris", detail: "Founding members — Summer 2026" },
  { name: "Milan", detail: "Founding members — Autumn 2026" },
];

export default function CitiesConsumer() {
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!city.trim()) return;
    setSubmitted(true);
  }

  return (
    <section className="py-16 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <FadeInUp>
          <p className="text-fg-dim text-xs tracking-widest uppercase mb-3">
            Where we are
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-fg font-medium leading-tight mb-12">
            Now accepting members in
          </h2>
        </FadeInUp>

        {/* Active cities */}
        <div className="mb-12">
          {ACTIVE_CITIES.map((c, i) => (
            <FadeInUp key={c.name} delay={i * 0.1}>
              <div className="flex items-baseline justify-between py-5 border-b border-edge group">
                <span className="font-serif text-2xl md:text-3xl font-medium text-fg group-hover:tracking-wide transition-all duration-300">
                  {c.name}
                </span>
                <span className="text-fg-dim text-xs tracking-wide hidden sm:block">
                  {c.detail}
                </span>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* Coming soon */}
        <FadeInUp delay={0.3}>
          <div className="mb-12">
            <p className="text-fg-dim text-xs tracking-widest uppercase mb-5">
              Accepting founding members
            </p>
            {COMING_CITIES.map((c) => (
              <div
                key={c.name}
                className="flex items-baseline justify-between py-4 border-b border-edge/50"
              >
                <span className="font-serif text-xl md:text-2xl font-medium text-fg/40 italic">
                  {c.name}
                </span>
                <span className="text-fg-dim/50 text-xs tracking-wide hidden sm:block">
                  {c.detail}
                </span>
              </div>
            ))}
          </div>
        </FadeInUp>

        {/* City request */}
        <FadeInUp delay={0.4}>
          <div className="bg-surface px-6 py-7 border border-edge">
            <p className="text-fg text-sm font-medium mb-1">
              Where should we be next?
            </p>
            <p className="text-fg-dim text-sm mb-5">
              Cities with the strongest interest open first.
            </p>

            {submitted ? (
              <p className="font-serif italic text-fg text-sm">
                Thank you — {city} is noted. We&rsquo;ll be in touch.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2 max-w-sm"
              >
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Your city, country"
                  className="font-sans text-sm px-4 py-2.5 border border-edge bg-void text-fg placeholder:text-fg-dim outline-none focus:border-fg transition-colors w-full"
                />
                <button
                  type="submit"
                  className="font-sans text-sm px-5 py-2.5 border border-fg text-fg hover:bg-fg hover:text-[#f5f4f0] transition-colors duration-200 whitespace-nowrap cursor-pointer"
                >
                  Send
                </button>
              </form>
            )}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
