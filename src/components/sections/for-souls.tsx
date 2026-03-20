import FadeInUp from '@/components/fade-in-up'

export default function ForSouls() {
  return (
    <section id="for-souls" className="relative overflow-hidden bg-cream py-24 md:py-32">
      {/* Warm amber tint via a subtle background layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(196,136,47,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Section label */}
        <FadeInUp>
          <p className="text-xs tracking-widest uppercase text-stone mb-6">
            For Souls
          </p>
        </FadeInUp>

        {/* Heading */}
        <FadeInUp delay={0.1}>
          <h2 className="font-serif text-4xl md:text-6xl text-charcoal font-black leading-tight mb-4">
            Get paid to be yourself.
          </h2>
          <p className="font-sans text-lg text-stone leading-relaxed mb-16 max-w-2xl">
            Your experience, your stories, your way of seeing the world — these
            are not hobbies. They are a vocation. And there are people out there
            who need exactly what only you can give.
          </p>
        </FadeInUp>

        {/* Amber rule */}
        <FadeInUp delay={0.15}>
          <div className="w-16 h-px bg-amber mb-16" aria-hidden="true" />
        </FadeInUp>

        {/* Who are Souls — narrative, not bullets */}
        <div className="font-sans text-base md:text-lg text-charcoal leading-loose space-y-8 max-w-3xl mb-16">
          <FadeInUp>
            <p>
              <strong className="font-serif text-xl text-charcoal">Renaissance humans.</strong>{" "}
              You have lived many lives — a chef who became a teacher who became a
              traveller who came home with a suitcase full of stories and nowhere
              to put them. LiveSoul gives you somewhere to put them.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.05}>
            <p>
              <strong className="font-serif text-xl text-charcoal">Retired professionals.</strong>{" "}
              Forty years of expertise doesn&apos;t retire when you do. The doctor, the
              architect, the diplomat, the chef — there are seekers who would pay
              to walk through a city with you and hear how you see it.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.05}>
            <p>
              <strong className="font-serif text-xl text-charcoal">Cultural bridges.</strong>{" "}
              You grew up between worlds. You speak the language of the locals and
              the language of the stranger. You are the most valuable kind of
              translator there is — not of words, but of belonging.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.05}>
            <p>
              <strong className="font-serif text-xl text-charcoal">The irreplaceable.</strong>{" "}
              AI displaced your role but not your skills. The warmth in your
              presence, the instinct you&apos;ve spent years developing, the
              way you read a room — no model can replicate that. LiveSoul is where
              those skills have a market.
            </p>
          </FadeInUp>
        </div>

        {/* CTA */}
        <FadeInUp delay={0.1}>
          <a
            href="#sign"
            className="inline-block bg-charcoal text-cream font-sans font-semibold text-sm tracking-wide px-8 py-4 transition-colors duration-200 hover:bg-charcoal/80"
          >
            Apply to Become a Soul
          </a>
        </FadeInUp>
      </div>
    </section>
  )
}
