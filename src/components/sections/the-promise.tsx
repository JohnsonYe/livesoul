import FadeInUp from '@/components/fade-in-up'

const pillars = [
  {
    symbol: "✦",
    title: "Verified Identities",
    body: "Every Soul is background-checked and identity-verified before they connect with a single Seeker. Trust is not assumed. It is built.",
    delay: 0,
  },
  {
    symbol: "◈",
    title: "Mutual Respect",
    body: "Community guidelines that protect both Seekers and Souls — because the relationship is reciprocal and the dignity is equal.",
    delay: 0.1,
  },
  {
    symbol: "◉",
    title: "Real People",
    body: "No algorithms. No AI-generated recommendations. Human-to-human matching, because the person matters as much as the experience.",
    delay: 0.2,
  },
]

export default function ThePromise() {
  return (
    <section id="the-promise" className="bg-charcoal py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section label */}
        <FadeInUp>
          <p className="text-xs tracking-widest uppercase text-stone mb-12">
            Trust &amp; Safety
          </p>
        </FadeInUp>

        {/* Heading */}
        <FadeInUp delay={0.1}>
          <h2 className="font-serif text-4xl md:text-6xl text-cream font-black leading-tight mb-16">
            Our Promise
          </h2>
        </FadeInUp>

        {/* Amber rule */}
        <FadeInUp delay={0.15}>
          <div className="w-16 h-px bg-amber mb-16" aria-hidden="true" />
        </FadeInUp>

        {/* Three-column grid on desktop, stacked on mobile */}
        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar) => (
            <FadeInUp key={pillar.title} delay={pillar.delay}>
              <div>
                {/* Symbol */}
                <div
                  className="text-amber text-2xl mb-6 font-sans"
                  aria-hidden="true"
                >
                  {pillar.symbol}
                </div>
                {/* Title */}
                <h3 className="font-serif text-xl text-cream font-bold mb-4 leading-snug">
                  {pillar.title}
                </h3>
                {/* Body */}
                <p className="font-sans text-base text-stone leading-loose">
                  {pillar.body}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* Bottom note */}
        <FadeInUp delay={0.1}>
          <p className="font-sans text-sm text-stone/70 mt-16 pt-16 border-t border-stone/20 max-w-2xl">
            LiveSoul is not a marketplace for strangers. It is a community with
            standards. Everyone here — Seeker and Soul alike — has agreed to show
            up with honesty, care, and respect.
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}
