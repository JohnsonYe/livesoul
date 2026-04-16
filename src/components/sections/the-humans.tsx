import FadeInUp from "@/components/fade-in-up";

const PROFILES = [
  {
    initials: "AM",
    name: "Amara M.",
    role: "Chef · Lagos & London",
    avatarBg: "#E1F5EE",
    avatarText: "#085041",
    tags: ["west african cuisine", "storyteller", "market walks"],
  },
  {
    initials: "JL",
    name: "Julien L.",
    role: "Guide · Paris",
    avatarBg: "#EEEDFE",
    avatarText: "#3C3489",
    tags: ["hidden paris", "architecture", "philosophy walks"],
  },
  {
    initials: "SR",
    name: "Sofia R.",
    role: "Companion · Tokyo",
    avatarBg: "#FAECE7",
    avatarText: "#712B13",
    tags: ["tea ceremony", "night walks", "deep conversation"],
  },
];

export default function TheHumans() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <FadeInUp>
          <p className="font-mono text-xs text-fg-dim tracking-widest mb-3">// the humans</p>
          <h2 className="text-4xl font-medium text-fg leading-tight mb-4">
            People valued not for output — but for presence.
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p className="text-fg-dim text-[15px] leading-[1.8] mb-8">
            Every person on PostHumanAPI brings something no model can replicate.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {PROFILES.map((p, i) => (
            <FadeInUp key={p.name} delay={0.15 + i * 0.1}>
              <div className="bg-surface border border-edge rounded-xl p-5 h-full">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-medium mb-4"
                  style={{ background: p.avatarBg, color: p.avatarText }}
                >
                  {p.initials}
                </div>
                <div className="text-sm font-medium text-fg mb-0.5">{p.name}</div>
                <div className="text-fg-dim text-xs mb-3">{p.role}</div>
                <div className="flex flex-wrap gap-1">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] text-fg-dim border border-edge px-2 py-0.5 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
