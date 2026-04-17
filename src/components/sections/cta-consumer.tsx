"use client";

import { useState, type FormEvent } from "react";

export default function CTAConsumer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section id="join" className="py-20 md:py-28 bg-[#111110]">
      <div className="max-w-3xl mx-auto px-6">
        <p className="font-mono text-xs text-white/40 tracking-widest mb-4">
          By introduction only
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-white leading-tight mb-4">
          Ready to be introduced?
        </h2>
        <p className="text-white/60 text-[15px] leading-relaxed max-w-sm mb-8">
          Leave your email. We&rsquo;ll reach out personally when we open in
          your city.
        </p>

        {submitted ? (
          <p className="font-serif italic text-white/80 text-base">
            Welcome. Someone will be in touch.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2 max-w-sm"
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border border-white/20 text-white placeholder:text-white/40 font-sans text-sm px-4 py-3 outline-none focus:border-white/60 transition-colors w-full"
            />
            <button
              type="submit"
              className="bg-white text-fg font-sans text-sm px-6 py-3 hover:bg-white/90 transition-colors cursor-pointer whitespace-nowrap"
            >
              Request an introduction
            </button>
          </form>
        )}

        <p className="text-white/35 text-xs mt-4">
          No spam. No automation. A real person will reach out.
        </p>
      </div>
    </section>
  );
}
