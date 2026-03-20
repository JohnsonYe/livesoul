"use client";

import { useState } from "react";

const SIGNATORY_COUNT = 847;

export default function SignManifesto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function validateEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!validateEmail(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  return (
    <section id="sign" className="bg-parchment py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6">
        {/* Section label */}
        <p className="text-xs tracking-widest uppercase text-stone mb-12">
          Join the Movement
        </p>

        {submitted ? (
          /* Success state */
          <div className="text-center py-12">
            <div className="w-12 h-12 rounded-full border-2 border-amber mx-auto mb-8 flex items-center justify-center">
              <span className="text-amber text-xl" aria-hidden="true">✦</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-black mb-6">
              Welcome to the movement.
            </h2>
            <p className="font-sans text-base text-stone leading-relaxed mb-8">
              Share this with someone who needs it.
            </p>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                "I just signed the LiveSoul manifesto. Still human. Be here. Together. livesoul.com"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-charcoal text-charcoal font-sans font-semibold text-sm tracking-wide px-8 py-4 transition-colors duration-200 hover:bg-charcoal hover:text-cream"
            >
              Share on X / Twitter
            </a>
          </div>
        ) : (
          <>
            {/* Heading */}
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-black leading-tight mb-4">
              Sign the Manifesto
            </h2>
            <p className="font-sans text-base text-stone leading-relaxed mb-4">
              10,000 people believe human connection matters. Do you?
            </p>

            {/* Signatory counter */}
            <p className="font-sans text-sm text-amber font-semibold mb-12">
              Join {SIGNATORY_COUNT.toLocaleString()} signatories
            </p>

            {/* Amber rule */}
            <div className="w-16 h-px bg-amber mb-12" aria-hidden="true" />

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name (optional) */}
              <div>
                <label
                  htmlFor="sign-name"
                  className="block font-sans text-xs tracking-widest uppercase text-stone mb-2"
                >
                  Name <span className="normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  id="sign-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full bg-cream border border-mist text-charcoal font-sans text-base px-4 py-3 outline-none transition-colors duration-200 focus:border-amber placeholder:text-stone/50"
                />
              </div>

              {/* Email (required) */}
              <div>
                <label
                  htmlFor="sign-email"
                  className="block font-sans text-xs tracking-widest uppercase text-stone mb-2"
                >
                  Email <span className="text-amber">*</span>
                </label>
                <input
                  id="sign-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="you@example.com"
                  required
                  aria-describedby={error ? "sign-email-error" : undefined}
                  className="w-full bg-cream border border-mist text-charcoal font-sans text-base px-4 py-3 outline-none transition-colors duration-200 focus:border-amber placeholder:text-stone/50"
                />
                {error && (
                  <p
                    id="sign-email-error"
                    role="alert"
                    className="mt-2 font-sans text-sm text-clay"
                  >
                    {error}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-amber text-cream font-sans font-semibold text-sm tracking-wide px-8 py-4 transition-opacity duration-200 hover:opacity-80 mt-2"
              >
                I&apos;m Still Human
              </button>
            </form>

            {/* Disclaimer */}
            <p className="font-sans text-xs text-stone/60 mt-6 leading-relaxed">
              No spam. Just the occasional dispatch from the human frequency.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
