import FadeInUp from "@/components/fade-in-up";

const HUMANS = [
  {
    name: "Amara M.",
    location: "Lagos & London",
    bio: "She grew up cooking in Lagos. Now she does dinners in London that feel like coming home. Market mornings, long afternoons, tables that don't end early.",
    // Warm market/food editorial — hands over a spread, not a face
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Julien L.",
    location: "Paris",
    bio: "He knows every backstreet in the 11th, every hidden courtyard in the Marais. Afternoons with Julien feel like finding something you didn't know you were looking for.",
    // Narrow Paris alley, warm afternoon light, atmospheric
    image:
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sofia R.",
    location: "Tokyo",
    bio: "She's been in Tokyo fifteen years and still finds new corners. Late nights, quiet bars, conversations that go on until the trains stop running.",
    // Tokyo night street, neon, quiet
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
  },
];

export default function HumansV2() {
  return (
    <section className="py-16 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInUp>
          <p className="text-fg-dim text-xs tracking-wide uppercase mb-2">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8">
          {HUMANS.map((human, i) => (
            <FadeInUp key={human.name} delay={i * 0.15}>
              <div className="group mb-10 md:mb-0">
                {/* Image — atmospheric context, not a headshot */}
                <div className="overflow-hidden mb-5 aspect-[4/5]">
                  <img
                    src={human.image}
                    alt=""
                    aria-hidden
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700"
                  />
                </div>

                {/* Text */}
                <p className="font-serif text-lg font-medium text-fg mb-0.5">
                  {human.name}
                </p>
                <p className="text-fg-dim text-xs mb-3 tracking-wide">
                  {human.location}
                </p>
                <p className="text-fg-dim text-[13px] leading-[1.85]">
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
