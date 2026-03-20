export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-cream flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Subtle grain texture overlay via pseudo-element workaround using CSS */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 60% 20%, rgba(196,136,47,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Section eyebrow */}
        <p className="text-xs tracking-widest uppercase text-stone mb-8 animate-fade-in-up">
          A manifesto for human connection
        </p>

        {/* Main headline */}
        <h1 className="font-serif text-7xl md:text-9xl font-black text-charcoal leading-none tracking-tight mb-6 animate-fade-in-up animation-delay-100">
          Still Human.
        </h1>

        {/* Sub-headline */}
        <p className="font-serif text-3xl md:text-5xl text-stone font-normal mb-10 animate-fade-in-up animation-delay-200">
          Be Here. Together.
        </p>

        {/* Amber line — grows on load via CSS animation */}
        <div
          aria-hidden="true"
          className="mx-auto mb-10 h-px bg-amber animate-fade-in-up animation-delay-300"
          style={{
            maxWidth: "120px",
            animation:
              "amber-grow 1.2s ease-out 0.3s both",
          }}
        />
        <style>{`
          @keyframes amber-grow {
            from { max-width: 0px; opacity: 0; }
            to   { max-width: 120px; opacity: 1; }
          }
        `}</style>

        {/* Body provocation */}
        <p className="font-sans text-base md:text-lg text-stone leading-relaxed max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-400">
          In a world where everything is becoming automated, the most valuable
          thing you can offer is your presence.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-500">
          <a
            href="#sign"
            className="inline-block bg-amber text-cream font-sans font-semibold text-sm tracking-wide px-8 py-4 transition-opacity duration-200 hover:opacity-80"
          >
            Sign the Manifesto
          </a>
          <a
            href="#manifesto"
            className="inline-block border border-charcoal text-charcoal font-sans font-semibold text-sm tracking-wide px-8 py-4 transition-colors duration-200 hover:bg-charcoal hover:text-cream"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up animation-delay-500"
      >
        <span className="text-xs tracking-widest uppercase text-stone/60">Scroll</span>
        <div className="w-px h-10 bg-stone/30" />
      </div>
    </section>
  );
}
