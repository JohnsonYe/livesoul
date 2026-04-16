import FadeInUp from "@/components/fade-in-up";

const STEPS = [
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
          <p className="text-fg-dim text-[15px] leading-[1.8] max-w-[540px] mb-10">
            Whether you need a companion to explore a new city, a chef to cook and share a meal,
            a tennis partner, or simply someone to talk to — PostHumanAPI matches you with a real
            person whose skills and soul fit your moment.
          </p>
        </FadeInUp>

        <div>
          {STEPS.map((step, i) => (
            <FadeInUp key={step.num} delay={0.15 + i * 0.1}>
              <div className="border-t border-edge py-7 grid grid-cols-[56px_1fr] md:grid-cols-[72px_1fr] items-start gap-2">
                <span className="font-mono text-4xl md:text-5xl font-medium text-edge leading-none select-none">
                  {step.num}
                </span>
                <div className="pt-1">
                  <p className="text-base font-medium text-fg mb-2">{step.title}</p>
                  <p className="text-fg-dim text-[14px] leading-relaxed max-w-[440px]">{step.body}</p>
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
