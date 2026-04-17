import FadeInUp from "@/components/fade-in-up";

const HUMANS = [
  {
    initials: "AM",
    avatarBg: "#E1F5EE",
    avatarText: "#085041",
    name: "Amara M.",
    location: "Lagos & London",
    bio: "She grew up cooking in Lagos. Now she does dinners in London that feel like coming home \u2014 market mornings, long afternoons, tables that don\u2019t end early.",
  },
  {
    initials: "JL",
    avatarBg: "#EEEDFE",
    avatarText: "#3C3489",
    name: "Julien L.",
    location: "Paris",
    bio: "He knows every backstreet in the 11th, every hidden courtyard in the Marais. Afternoons with Julien feel like finding something you didn\u2019t know you were looking for.",
  },
  {
    initials: "SR",
    avatarBg: "#FAECE7",
    avatarText: "#712B13",
    name: "Sofia R.",
    location: "Tokyo",
    bio: "She\u2019s been in Tokyo fifteen years and still finds new corners. Late nights, quiet bars, conversations that go on until the trains stop running.",
  },
];

export default function HumansConsumer() {
  return (
    <section className="py-16 md:py-28 bg-surface-raised">
      <div className="max-w-3xl mx-auto px-6">
        <FadeInUp>
          <p className="text-fg-dim text-sm">Who you&rsquo;ll meet</p>
          <h2 className="font-serif text-3xl md:text-4xl text-fg font-medium leading-tight mb-4 mt-2">
            People valued not for their output &mdash; but for who they are.
          </h2>
          <p className="text-fg-dim text-[15px] leading-relaxed mb-10">
            Every person on PostHumanAPI was introduced by someone who knew
            them. No vetting algorithm. Just good people vouching for good
            people.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HUMANS.map((human, i) => (
            <FadeInUp key={human.initials} delay={i * 0.1}>
              <div className="bg-surface p-6 border border-edge h-full">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-medium mb-5"
                  style={{
                    background: human.avatarBg,
                    color: human.avatarText,
                  }}
                >
                  {human.initials}
                </div>
                <p className="font-medium text-fg text-sm mb-0.5">
                  {human.name}
                </p>
                <p className="text-fg-dim text-xs mb-4">{human.location}</p>
                <p className="text-fg-dim text-[13px] leading-[1.8]">
                  {human.bio}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
