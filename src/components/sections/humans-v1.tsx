import FadeInUp from "@/components/fade-in-up";

const HUMANS = [
  {
    initials: "AM",
    avatarBg: "#E1F5EE",
    avatarText: "#085041",
    name: "Amara M.",
    location: "Lagos & London",
    bio: "She grew up cooking in Lagos. Now she does dinners in London that feel like coming home. Market mornings, long afternoons, tables that don't end early.",
  },
  {
    initials: "JL",
    avatarBg: "#EEEDFE",
    avatarText: "#3C3489",
    name: "Julien L.",
    location: "Paris",
    bio: "He knows every backstreet in the 11th, every hidden courtyard in the Marais. Afternoons with Julien feel like finding something you didn't know you were looking for.",
  },
  {
    initials: "SR",
    avatarBg: "#FAECE7",
    avatarText: "#712B13",
    name: "Sofia R.",
    location: "Tokyo",
    bio: "She's been in Tokyo fifteen years and still finds new corners. Late nights, quiet bars, conversations that go on until the trains stop running.",
  },
];

export default function HumansV1() {
  return (
    <section className="py-16 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <FadeInUp>
          <p className="text-fg-dim text-sm tracking-wide uppercase text-xs mb-2">
            Who you&rsquo;ll meet
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-fg font-medium leading-tight mb-4">
            People valued not for their output, but for who they are.
          </h2>
          <p className="text-fg-dim text-[15px] leading-relaxed mb-14 max-w-xl">
            Every person on PostHumanAPI was introduced by someone who knew
            them. No vetting algorithm. Just good people vouching for good
            people.
          </p>
        </FadeInUp>

        <div className="divide-y divide-edge">
          {HUMANS.map((human, i) => (
            <FadeInUp key={human.initials} delay={i * 0.12}>
              <div className="py-8 flex gap-6 items-start">
                {/* Avatar */}
                <div
                  className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-mono text-xs font-semibold mt-0.5"
                  style={{ background: human.avatarBg, color: human.avatarText }}
                >
                  {human.initials}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-serif text-lg font-medium text-fg">
                      {human.name}
                    </span>
                    <span className="text-fg-dim text-xs">{human.location}</span>
                  </div>
                  <p className="text-fg-dim text-[14px] leading-[1.85]">
                    {human.bio}
                  </p>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
