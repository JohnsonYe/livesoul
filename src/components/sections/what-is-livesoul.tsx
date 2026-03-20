import FadeInUp from '@/components/fade-in-up'

export default function WhatIsLiveSoul() {
  return (
    <section id="what-is-livesoul" className="bg-parchment py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section label */}
        <FadeInUp>
          <p className="text-xs tracking-widest uppercase text-stone mb-12">
            The Platform
          </p>
        </FadeInUp>

        {/* Heading */}
        <FadeInUp delay={0.1}>
          <h2 className="font-serif text-4xl md:text-6xl text-charcoal font-black leading-tight mb-6">
            What is LiveSoul?
          </h2>

          <p className="font-sans text-lg md:text-xl text-stone leading-relaxed mb-16 max-w-2xl">
            We connect people who want to share real moments with people who are
            great at creating them.
          </p>
        </FadeInUp>

        {/* Amber rule */}
        <FadeInUp delay={0.15}>
          <div className="w-16 h-px bg-amber mb-16" aria-hidden="true" />
        </FadeInUp>

        {/* Two-column layout on desktop */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">

          {/* Seekers column */}
          <FadeInUp delay={0}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                {/* Simple CSS shape — circle */}
                <div
                  aria-hidden="true"
                  className="w-8 h-8 rounded-full border-2 border-amber flex-shrink-0"
                />
                <h3 className="font-serif text-2xl text-charcoal font-bold">
                  Seekers
                </h3>
              </div>
              <p className="font-sans text-base text-stone leading-loose mb-6">
                People who want an experience — who arrive somewhere new and want
                more than a guidebook, more than a map pin, more than an algorithm&apos;s
                best guess at what they might like.
              </p>
              <ul className="font-sans text-base text-charcoal leading-loose space-y-3">
                <li className="flex gap-3">
                  <span className="text-amber flex-shrink-0 mt-1" aria-hidden="true">—</span>
                  Solo travellers craving depth over check-ins
                </li>
                <li className="flex gap-3">
                  <span className="text-amber flex-shrink-0 mt-1" aria-hidden="true">—</span>
                  Expats still finding their footing in a foreign city
                </li>
                <li className="flex gap-3">
                  <span className="text-amber flex-shrink-0 mt-1" aria-hidden="true">—</span>
                  Lonely professionals who want real conversation over dinner
                </li>
              </ul>
            </div>
          </FadeInUp>

          {/* Souls column */}
          <FadeInUp delay={0.15}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                {/* Simple CSS shape — diamond */}
                <div
                  aria-hidden="true"
                  className="w-7 h-7 border-2 border-amber flex-shrink-0 rotate-45"
                />
                <h3 className="font-serif text-2xl text-charcoal font-bold">
                  Souls
                </h3>
              </div>
              <p className="font-sans text-base text-stone leading-loose mb-6">
                People who are the experience — who carry a city in their bones,
                who light up when they share what they know, who make a stranger
                feel like they&apos;ve always belonged.
              </p>
              <ul className="font-sans text-base text-charcoal leading-loose space-y-3">
                <li className="flex gap-3">
                  <span className="text-amber flex-shrink-0 mt-1" aria-hidden="true">—</span>
                  Local guides with stories no app will ever index
                </li>
                <li className="flex gap-3">
                  <span className="text-amber flex-shrink-0 mt-1" aria-hidden="true">—</span>
                  Retired professionals with decades of wisdom to share
                </li>
                <li className="flex gap-3">
                  <span className="text-amber flex-shrink-0 mt-1" aria-hidden="true">—</span>
                  Cultural bridges — people who can translate a city for a stranger
                </li>
              </ul>
            </div>
          </FadeInUp>
        </div>

        {/* Closing line */}
        <FadeInUp delay={0.1}>
          <p className="font-serif text-xl md:text-2xl text-charcoal font-bold mt-16 pt-16 border-t border-mist">
            You don&apos;t hire a service. You connect with a Soul.
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}
