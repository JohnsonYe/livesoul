"use client";

import { useState } from "react";
import FadeInUp from "@/components/fade-in-up";

type Role = "a host" | "a guest" | "both" | null;

const LAUNCH_CITIES = ["New York", "Singapore", "London"];

export default function CTAPHA() {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [role, setRole] = useState<Role>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [count] = useState(247);

  const handleSubmit = () => {
    if (email && email.includes("@")) {
      setSubmitted(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <section id="waitlist" className="py-10 md:py-14">
      <div className="max-w-3xl mx-auto px-6">
        <FadeInUp>
          <p className="font-mono text-xs text-fg-dim tracking-widest mb-3">
            // join the waitlist
          </p>
          <h2 className="text-4xl font-medium text-fg leading-tight mb-5">
            Don&rsquo;t automate this one.
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p className="text-fg-dim text-[15px] leading-[1.85] max-w-[560px] mb-8">
            We&rsquo;re starting in New York, Singapore, and London, then
            everywhere else that still believes in showing up. Tell us your
            city, tell us who you&rsquo;d like to be, a host or a guest, and
            we&rsquo;ll reach out when we arrive.
          </p>
        </FadeInUp>

        {/* City pills */}
        <FadeInUp delay={0.15}>
          <div className="flex flex-wrap gap-2 mb-8">
            {LAUNCH_CITIES.map((c) => (
              <span
                key={c}
                className="font-mono text-xs text-fg-dim border border-edge px-3 py-1.5 rounded-full"
              >
                {c}
              </span>
            ))}
            <span className="font-mono text-xs text-fg-dim border border-dashed border-edge px-3 py-1.5 rounded-full">
              your city next
            </span>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div
            className="relative rounded-2xl p-6 sm:p-9 border border-edge shadow-sm"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 30% 50%, rgba(40,200,64,0.06) 0%, transparent 70%), #ffffff",
            }}
          >
            <div className="font-mono text-xs text-fg-dim mb-5">
              {count} people on the waitlist
            </div>

            {!submitted ? (
              <>
                {/* Email */}
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
                    "font-mono text-sm px-4 py-3 bg-void text-fg placeholder:text-fg-dim outline-none border rounded-xl w-full transition-colors mb-3",
                    error ? "border-red" : "border-edge focus:border-green",
                  ].join(" ")}
                />

                {/* City */}
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="your city"
                  className="font-mono text-sm px-4 py-3 bg-void text-fg placeholder:text-fg-dim outline-none border border-edge focus:border-fg rounded-xl w-full transition-colors mb-4"
                />

                {/* Role selector */}
                <p className="font-mono text-xs text-fg-dim mb-2">I wanna be</p>
                <div className="flex gap-2 mb-5 flex-wrap">
                  {(["a host", "a guest", "both"] as Role[]).map((r) => (
                    <button
                      key={r!}
                      type="button"
                      onClick={() => setRole(r === role ? null : r)}
                      className={[
                        "font-mono text-xs px-4 py-2.5 rounded-full border transition-colors duration-150 cursor-pointer",
                        role === r
                          ? "border-fg bg-fg text-void"
                          : "border-edge text-fg-dim hover:border-fg hover:text-fg",
                      ].join(" ")}
                    >
                      {r}
                    </button>
                  ))}
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="w-full font-mono text-sm py-3.5 rounded-xl bg-fg text-void hover:bg-green hover:text-void transition-colors duration-200 cursor-pointer tracking-wide"
                >
                  request early access →
                </button>

                <p className="font-mono text-xs text-fg-dim mt-4">
                  No spam. No automation. An actual human will reach out.
                </p>
              </>
            ) : (
              <p className="font-mono text-sm text-green">
                // 201 Created — you&rsquo;re on the list. we&rsquo;ll be in
                touch.
              </p>
            )}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
