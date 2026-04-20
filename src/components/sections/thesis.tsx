import FadeInUp from "@/components/fade-in-up";

const POINTS = [
  {
    num: "01",
    title: "intelligence is abundant",
    body: "AI can write, code, plan, analyse. At infinite scale, near-zero cost.",
  },
  {
    num: "02",
    title: "presence is scarce",
    body: "No model can replicate warmth, chemistry, or the weight of being truly with someone.",
  },
  {
    num: "03",
    title: "scarcity defines value",
    body: "The rarest thing in an automated world is a human who shows up.",
  },
];

export default function Thesis() {
  return (
    <section className="py-8 md:py-10">
      <div className="max-w-3xl mx-auto px-6">
        <FadeInUp>
          <p className="font-mono text-xs text-fg-dim tracking-widest mb-3">// the thesis</p>
          <h2 className="text-4xl font-medium text-fg leading-tight mb-8">
            Presence is the next category of value.
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.05}>
          <p className="font-serif text-xl md:text-2xl text-fg italic leading-[1.7] mb-10 max-w-[600px]">
            &ldquo;Your wealth will no longer be measured by{" "}
            <span className="not-italic font-medium">what you own</span>,
            but by the richness of your{" "}
            <span className="not-italic font-medium">human experience</span>.&rdquo;
          </p>
        </FadeInUp>

        <div>
          {POINTS.map((p, i) => (
            <FadeInUp key={p.num} delay={0.1 + i * 0.08}>
              <div className="border-t border-edge py-6 flex gap-6 items-baseline">
                <span className="font-mono text-[11px] text-fg-dim shrink-0 w-6">{p.num}</span>
                <div>
                  <p className="text-base font-medium text-fg mb-1.5">
                    {p.title}
                  </p>
                  <p className="text-fg-dim text-[14px] leading-relaxed max-w-[460px]">{p.body}</p>
                </div>
              </div>
            </FadeInUp>
          ))}
          <div className="border-t border-edge" />
        </div>
      </div>
    </section>
  );
}
