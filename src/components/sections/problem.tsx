import FadeInUp from '@/components/fade-in-up'

export default function Problem() {
  return (
    <section id="problem" className="bg-charcoal py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section label */}
        <FadeInUp>
          <p className="text-xs tracking-widest uppercase text-stone mb-12">
            The Reality
          </p>
        </FadeInUp>

        {/* Headline */}
        <FadeInUp delay={0.1}>
          <h2 className="font-serif text-4xl md:text-6xl text-cream font-black leading-tight mb-16">
            We are the most connected generation in history.
            <br />
            <span className="text-stone">And the loneliest.</span>
          </h2>
        </FadeInUp>

        {/* Amber rule */}
        <FadeInUp delay={0.15}>
          <div className="w-16 h-px bg-amber mb-16" aria-hidden="true" />
        </FadeInUp>

        {/* Prose with woven stats */}
        <div className="font-sans text-base md:text-lg text-mist leading-loose space-y-10 max-w-3xl">
          <FadeInUp>
            <p>
              The U.S. Surgeon General declared a loneliness epidemic in 2023 —
              not a metaphor, not hyperbole. A public health crisis on the scale
              of obesity and addiction. The data is unambiguous and the feeling is
              universal: something has gone badly wrong with how we relate to each
              other.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.05}>
            <blockquote className="border-l-2 border-amber pl-6 my-12">
              <p className="font-serif text-xl md:text-2xl text-cream font-bold leading-snug">
                &ldquo;We have 300 million social media followers and no one to call.&rdquo;
              </p>
            </blockquote>
          </FadeInUp>

          <FadeInUp delay={0.05}>
            <p>
              One in four adults report feeling chronically lonely. Not
              occasionally, not situationally — but as a persistent, background
              condition of modern life. A quarter of us are carrying this quietly,
              every day.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.05}>
            <p>
              Gen Z — the first generation to grow up entirely within the
              attention economy — is the most digitally connected and the most
              socially isolated cohort ever measured. They have phones in their
              hands from the age of eight and fewer real friendships than their
              grandparents had at the same age.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.05}>
            <p>
              Remote work untethered tens of millions of people from the accidental
              community of the office. The watercooler conversation, the shared
              lunch, the hallway collision that turned into a friendship — gone,
              replaced by Slack pings and calendar invites that begin{" "}
              <em>on time</em> and end the moment the last person clicks
              &ldquo;leave meeting.&rdquo;
            </p>
          </FadeInUp>

          <FadeInUp delay={0.05}>
            <p>
              The infrastructure of serendipity has been systematically dismantled.
              And we are feeling it.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.05}>
            <p className="text-stone">
              This is not a technology problem. Technology is what we have. This
              is a will problem — a choice problem. The question is whether we
              choose to build bridges back toward each other before the distance
              becomes a default we can no longer imagine crossing.
            </p>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}
