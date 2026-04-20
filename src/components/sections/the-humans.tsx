import FadeInUp from "@/components/fade-in-up";

const PROFILES = [
  {
    name: "Amara M.",
    role: "Chef · New York",
    bio: "She grew up cooking in West Africa. Now she runs intimate dinners in New York that feel like a homecoming — market mornings, long tables, strangers who leave as friends.",
    tags: ["west african cuisine", "storyteller", "market walks"],
    // Chef at work, warm kitchen tones
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Julien L.",
    role: "Guide · London",
    bio: "He knows every backstreet in Shoreditch, every hidden courtyard in Mayfair. Afternoons with Julien feel like finding something you didn't know you were looking for.",
    tags: ["hidden london", "architecture", "philosophy walks"],
    // Atmospheric narrow European street, warm evening
    image:
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sofia R.",
    role: "Companion · Singapore",
    bio: "She's lived in Singapore for twelve years and still finds new corners. Rooftop bars, hawker stalls at midnight, conversations that go on until you forget what time it is.",
    tags: ["night walks", "deep conversation", "local secrets"],
    // City at night, vibrant street life
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
  },
];

export default function TheHumans() {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInUp>
          <p className="font-mono text-xs text-fg-dim tracking-widest mb-3">
            // the humans
          </p>
          <h2 className="text-4xl font-medium text-fg leading-tight mb-4">
            People valued not for output — but for presence.
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p className="text-fg-dim text-[15px] leading-[1.8] mb-12">
            Every person on PostHumanAPI brings something no model can replicate.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROFILES.map((p, i) => (
            <FadeInUp key={p.name} delay={0.15 + i * 0.12}>
              <div className="group">
                {/* Image */}
                <div className="overflow-hidden mb-5 aspect-[4/5]">
                  <img
                    src={p.image}
                    alt=""
                    aria-hidden
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700"
                  />
                </div>

                {/* Name + role */}
                <p className="font-medium text-fg text-sm mb-0.5">{p.name}</p>
                <p className="text-fg-dim text-xs mb-3">{p.role}</p>

                {/* Bio */}
                <p className="text-fg-dim text-[13px] leading-[1.85] mb-4">
                  {p.bio}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] text-fg-dim border border-edge px-2 py-0.5"
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
