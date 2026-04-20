import FadeInUp from "@/components/fade-in-up";

export default function ProblemPHA() {
  return (
    <section className="py-8 md:py-10">
      <div className="max-w-3xl mx-auto px-6">
        <FadeInUp>
          <p className="font-mono text-xs text-fg-dim tracking-widest mb-3">// the problem</p>
          <h2 className="text-4xl font-medium text-fg leading-tight mb-6">
            Technology optimised everything. Except connection.
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p className="text-fg-dim text-[15px] leading-[1.8] max-w-[580px] mb-6">
            For decades, every advance removed friction. Removed waiting. Removed inconvenience. But quietly, it also removed us from each other. We learned to avoid inconvenience and, unintentionally, to avoid the people in it.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <blockquote className="border-l-2 border-amber pl-6 my-8">
            <p className="font-serif text-xl text-fg leading-[1.65] italic">
              &ldquo;A meaningful life is not built on seamless transactions. It is built on moments that move us: a shared meal that lingers, a conversation that changes you, a silence that reminds you that you are not alone.&rdquo;
            </p>
          </blockquote>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <p className="text-fg-dim text-[15px] leading-[1.8] max-w-[580px]">
            AI accelerates this. Intelligence will be everywhere. Productivity will be abundant. But what becomes genuinely rare is human presence: energy, empathy, chemistry, story.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
