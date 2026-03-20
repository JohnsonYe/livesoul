export default function ForSeekers() {
  return (
    <section id="for-seekers" className="bg-parchment py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section label */}
        <p className="text-xs tracking-widest uppercase text-stone mb-6">
          For Seekers
        </p>

        {/* Heading */}
        <h2 className="font-serif text-4xl md:text-6xl text-charcoal font-black leading-tight mb-4">
          The experience{" "}
          <em className="not-italic text-amber">is</em> the person.
        </h2>
        <p className="font-sans text-lg text-stone leading-relaxed mb-16 max-w-2xl">
          You&apos;ve read the reviews. You&apos;ve checked the ratings. You&apos;ve done
          everything the algorithm recommended. And something was still missing.
        </p>

        {/* Amber rule */}
        <div className="w-16 h-px bg-amber mb-16" aria-hidden="true" />

        {/* Who are Seekers — narrative */}
        <div className="font-sans text-base md:text-lg text-charcoal leading-loose space-y-8 max-w-3xl mb-16">
          <p>
            <strong className="font-serif text-xl text-charcoal">The solo traveller.</strong>{" "}
            You&apos;ve seen the sights. You&apos;ve eaten the food. But you&apos;ve eaten it
            alone, and no photo of it will ever capture how that felt. You want
            more than TripAdvisor. You want a person.
          </p>

          <p>
            <strong className="font-serif text-xl text-charcoal">The expat finding their footing.</strong>{" "}
            You moved to a new city with a job and a lease and no idea how to
            make it feel like home. You need someone who already knows where home
            is, and can walk you there.
          </p>

          <p>
            <strong className="font-serif text-xl text-charcoal">The remote worker who realised their city is still a stranger.</strong>{" "}
            You&apos;ve lived here for two years. You know the coffee shop and the
            grocery store and the route to the gym. You don&apos;t know a single
            person you didn&apos;t know before you arrived.
          </p>

          <p>
            <strong className="font-serif text-xl text-charcoal">The lonely professional.</strong>{" "}
            Your calendar is full. Your social life is not. You want a real
            conversation over dinner — not networking, not speed-dating, not a
            Zoom call. Just two people, a meal, and something worth saying.
          </p>
        </div>

        {/* CTA */}
        <a
          href="#sign"
          className="inline-block bg-amber text-cream font-sans font-semibold text-sm tracking-wide px-8 py-4 transition-opacity duration-200 hover:opacity-80"
        >
          Join the Waitlist
        </a>
      </div>
    </section>
  );
}
