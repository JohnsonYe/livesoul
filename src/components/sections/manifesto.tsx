export default function Manifesto() {
  return (
    <section id="manifesto" className="bg-parchment py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section label */}
        <p className="text-xs tracking-widest uppercase text-stone mb-12">
          The Manifesto
        </p>

        {/* Pull quote */}
        <h2 className="font-serif text-4xl md:text-6xl text-charcoal font-black leading-tight mb-16">
          Some things cannot be automated.
        </h2>

        {/* Amber rule */}
        <div className="w-16 h-px bg-amber mb-16" aria-hidden="true" />

        {/* Manifesto prose */}
        <div className="font-sans text-base md:text-lg text-charcoal leading-loose space-y-10 max-w-3xl">

          <p>
            The world changed. AI can write, code, compose, diagnose. It can
            plan your trip, answer your questions, and predict your next move
            before you know it yourself. It&apos;s extraordinary. And it is not
            stopping.
          </p>

          <p>
            But something is missing. The silence after the screen closes. The
            meal eaten alone in a city full of strangers. The walk through a
            foreign neighbourhood without a single person to turn to and say —
            <em className="font-serif text-amber"> did you see that?</em>
          </p>

          <p>
            We have built the most connected infrastructure in human history and
            somehow ended up more isolated than any generation before us. The
            feed is endless. The eye contact is gone.
          </p>

          <p>
            Some things cannot be automated. The warmth of eye contact across a
            table. The surprise of a stranger&apos;s story that reaches somewhere
            inside you. The feeling — irreducible, irreplaceable — of being
            truly <em className="font-serif">seen</em> by another human being.
          </p>

          <p>
            LiveSoul exists because we believe human connection is not a luxury.
            It is a need. Ancient, biological, urgent. We are not anti-technology
            — we are pro-human. Building bridges between people who want to share
            real moments and people who are extraordinary at creating them. In a
            world where everything else is being automated, the most radical
            thing you can offer another person is your undivided presence.
          </p>

          {/* Final call — styled distinctly */}
          <p className="font-serif text-2xl md:text-3xl text-charcoal font-bold leading-snug border-l-2 border-amber pl-6 mt-16">
            Still human. Still here. Still needed.
            <br />
            Be here. Together.
          </p>
        </div>
      </div>
    </section>
  );
}
