import FadeInUp from "@/components/fade-in-up";

const PROFILES = [
  {
    name: "Amara M.",
    role: "Chef · New York",
    bio: "She grew up in New York when the markets still had stories. From the original Essex Street stalls to the hidden corners of the Bronx, she knows where the city's real food culture lives. Walk with her and you eat history, not Instagram.",
    tags: ["street food", "market walks", "food history"],
    // People ordering from a New York City street vendor
    image:
      "https://images.unsplash.com/photo-1767556879433-3fd1b6f8c708?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Julien L.",
    role: "Guide · London",
    bio: "He knows every backstreet in Shoreditch, every hidden courtyard in Mayfair. Afternoons with Julien feel like finding something you didn't know you were looking for.",
    tags: ["hidden london", "architecture", "philosophy walks"],
    // Guide walking through London old architecture streets
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sofia R.",
    role: "Historian · Singapore",
    bio: "Born and raised in Singapore, she knows the city the way most people never will. Walk with her and the streets come alive with stories, from colonial shophouses to hidden temples that tourists walk past every day.",
    tags: ["city history", "heritage walks", "local storytelling"],
    // Woman exploring Singapore
    image:
      "https://images.unsplash.com/photo-1756691085709-f1818e7be890?auto=format&fit=crop&w=800&q=80",
  },
];

export default function TheHumans() {
  return (
    <section className="py-8 md:py-10">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInUp>
          <p className="font-mono text-xs text-fg-dim tracking-widest mb-3">
            // the humans
          </p>
          <h2 className="text-4xl font-medium text-fg leading-tight mb-4">
            People valued not for output, but for presence.
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
