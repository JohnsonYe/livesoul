import FadeInUp from "@/components/fade-in-up";

const ROWS = [
  {
    num: "01",
    title: "describe what you need",
    body: "A meal, a walk, a conversation, an adventure. Any city, any time.",
  },
  {
    num: "02",
    title: "get matched instantly",
    body: "Our system finds a human whose skills, energy, and availability fit your moment.",
  },
  {
    num: "03",
    title: "experience presence",
    body: "Show up. Be there. That's the whole product.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <FadeInUp>
          <p className="font-mono text-xs text-fg-dim tracking-widest mb-3">// what we do</p>
          <h2 className="text-4xl font-medium text-fg leading-tight mb-4">
            Book a human. Any moment. Any city.
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p className="text-fg-dim text-[15px] leading-[1.8] max-w-[580px] mb-8">
            Whether you need a companion to explore a new city, a chef to cook and share a meal, a tennis partner, or simply someone to talk to — PostHumanAPI matches you with a real person whose skills and soul fit your moment.
          </p>
        </FadeInUp>

        <div className="space-y-3">
          {ROWS.map((row, i) => (
            <FadeInUp key={row.num} delay={0.15 + i * 0.12}>
              <div className="flex gap-4 items-start bg-surface-raised rounded-lg p-4">
                <span className="font-mono text-xs text-fg-dim min-w-[28px] pt-0.5">{row.num}</span>
                <div>
                  <div className="text-sm font-medium text-fg mb-1">{row.title}</div>
                  <div className="text-fg-dim text-[13px] leading-relaxed">{row.body}</div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
