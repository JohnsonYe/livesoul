import FadeInUp from "@/components/fade-in-up";

const SCENES = [
  {
    city: "Tokyo",
    time: "8pm",
    prose:
      "You land at Narita. Before you\u2019ve reached the taxi stand, your evening is arranged \u2014 a counter seat at a ramen place with no sign, then drinks at a jazz bar that only locals can find. Tomorrow you\u2019ll wonder how it happened.",
  },
  {
    city: "Paris",
    time: "Saturday",
    prose:
      "No plans, no agenda. A message arrives from someone who has lived in the 11th for ten years \u2014 a local, a walker, a person who makes the city feel like it was always yours.",
  },
  {
    city: "New York",
    time: "Last minute",
    prose:
      "A friend is visiting and you want to show them something real. We find someone who grew up in Harlem and knows the places that don\u2019t have reviews. The evening becomes a story you both tell for years.",
  },
];

export default function Scenes() {
  return (
    <section className="py-16 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <FadeInUp>
          <p className="font-serif text-2xl sm:text-3xl text-fg italic leading-snug mb-12 max-w-xl">
            &ldquo;In every city, the best moments aren&rsquo;t listed
            anywhere.&rdquo;
          </p>
        </FadeInUp>

        {SCENES.map((scene) => (
          <FadeInUp key={scene.city}>
            <div className="border-t border-edge py-8 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8">
              <div>
                <p className="font-serif text-xl font-medium text-fg">
                  {scene.city}
                </p>
                <p className="text-fg-dim text-sm mt-0.5">{scene.time}</p>
              </div>
              <p className="text-fg-dim text-[15px] leading-[1.85] max-w-[480px]">
                {scene.prose}
              </p>
            </div>
          </FadeInUp>
        ))}

        <FadeInUp>
          <p className="font-serif text-base italic text-fg-dim text-center mt-10">
            This is what we do.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
