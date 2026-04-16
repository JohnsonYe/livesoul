import FadeInUp from "@/components/fade-in-up";

const CARDS = [
  {
    title: "intelligence is abundant",
    body: "AI can write, code, plan, analyse — at infinite scale, near-zero cost.",
  },
  {
    title: "presence is scarce",
    body: "No model can replicate warmth, chemistry, or the weight of being truly with someone.",
  },
  {
    title: "scarcity defines value",
    body: "The rarest thing in an automated world is a human who shows up.",
  },
];

export default function Thesis() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <FadeInUp>
          <p className="font-mono text-xs text-fg-dim tracking-widest mb-3">// the thesis</p>
          <h2 className="text-4xl font-medium text-fg leading-tight mb-6">
            Presence is the next category of value.
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p className="font-serif text-lg text-fg-dim italic leading-[1.9] mb-6">
            Your wealth will no longer be measured by{" "}
            <span className="text-fg not-italic font-medium">what you own</span>,
            <br />
            but by the richness of your{" "}
            <span className="text-fg not-italic font-medium">human experience</span>.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.15}>
          <p className="text-fg-dim text-[15px] leading-[1.8] max-w-[580px] mb-8">
            As AI makes intelligence abundant, the most important asset to hold is human connection. The next great platforms won&rsquo;t just save time — they&rsquo;ll give it meaning.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {CARDS.map((card, i) => (
            <FadeInUp key={card.title} delay={0.2 + i * 0.1}>
              <div className="bg-surface border border-edge rounded-xl p-5 h-full">
                <div className="text-sm font-medium text-fg mb-2">{card.title}</div>
                <div className="text-fg-dim text-[13px] leading-relaxed">{card.body}</div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
