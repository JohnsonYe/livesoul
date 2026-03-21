'use client'
import FadeInUp from '@/components/fade-in-up'

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
        <FadeInUp delay={0}>
          <p className="text-xs tracking-widest uppercase text-stone mb-8">
            A manifesto for human connection
          </p>
        </FadeInUp>

        {/* Main headline */}
        <FadeInUp delay={0.1}>
          <h1 className="font-serif text-7xl md:text-9xl font-black text-charcoal leading-none tracking-tight mb-6">
            Still Human.
          </h1>
        </FadeInUp>

        {/* Sub-headline */}
        <FadeInUp delay={0.2}>
          <p className="font-serif text-3xl md:text-5xl text-stone font-normal mb-10">
            Be Here. Together.
          </p>
        </FadeInUp>

        {/* Amber line — grows on load via CSS animation */}
        <div
          aria-hidden="true"
          className="mx-auto mb-10 h-px bg-amber"
          style={{
            maxWidth: "120px",
            animation: "amber-grow 1.2s ease-out 0.3s both",
          }}
        />

        {/* Body provocation */}
        <FadeInUp delay={0.35}>
          <p className="font-sans text-base md:text-lg text-stone leading-relaxed max-w-2xl mx-auto mb-12">
            In a world where everything is becoming automated, the most valuable
            thing you can offer is your presence.
          </p>
        </FadeInUp>

        {/* CTAs */}
        <FadeInUp delay={0.45}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#sign"
              className="inline-block bg-amber text-cream font-sans font-semibold text-sm tracking-wide px-8 py-4 transition-colors duration-200 hover:bg-amber/90"
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
        </FadeInUp>
      </div>

      {/* Scroll indicator */}
      <a
        href="#manifesto"
        aria-label="Scroll to manifesto"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-80 transition-opacity duration-200"
      >
        <span className="text-xs tracking-widest uppercase text-stone">Scroll</span>
        <span className="text-stone text-lg animate-bounce" aria-hidden="true">↓</span>
      </a>
    </section>
  )
}
