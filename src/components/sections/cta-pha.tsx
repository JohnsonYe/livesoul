"use client";

import { useState } from "react";
import FadeInUp from "@/components/fade-in-up";

export default function CTAPHA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [count, setCount] = useState(247);

  const handleSubmit = () => {
    if (email && email.includes("@")) {
      setCount((c) => c + 1);
      setSubmitted(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <section id="waitlist" className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <FadeInUp>
          <p className="font-mono text-xs text-fg-dim tracking-widest mb-3">// join the waitlist</p>
          <h2 className="text-4xl font-medium text-fg leading-tight mb-4">
            Don&rsquo;t automate this one.
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p className="text-fg-dim text-[15px] leading-[1.8] max-w-[540px] mb-8">
            We&rsquo;re launching city by city. Drop your email and we&rsquo;ll reach out when PostHumanAPI is live near you.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.15}>
          {/* Subtle radial glow behind input area */}
          <div
            className="relative rounded-xl p-5 sm:p-8 bg-surface"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 30% 50%, rgba(40,200,64,0.05) 0%, transparent 70%), #111111",
            }}
          >
            <div className="font-mono text-xs text-fg-dim mb-4">
              {count} people on the waitlist
            </div>

            {!submitted ? (
              <>
                <div className="flex flex-col sm:flex-row gap-2 mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError(false);
                    }}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    placeholder="your@email.com"
                    className={[
                      "font-mono text-sm px-4 py-3 bg-void text-fg placeholder:text-fg-dim outline-none border w-full sm:w-60 transition-colors",
                      error ? "border-red" : "border-edge focus:border-green",
                    ].join(" ")}
                  />
                  <button
                    onClick={handleSubmit}
                    className="font-mono text-xs px-5 py-3 border border-green text-green hover:bg-green hover:text-void transition-colors duration-200 cursor-pointer whitespace-nowrap"
                  >
                    Request Early Access →
                  </button>
                </div>
                <p className="font-mono text-xs text-fg-dim">
                  No spam. No automation. An actual human will reach out.
                </p>
              </>
            ) : (
              <p className="font-mono text-sm text-green">
                // 201 Created — you&rsquo;re on the list. we&rsquo;ll be in touch.
              </p>
            )}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
