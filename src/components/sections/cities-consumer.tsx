import FadeInUp from "@/components/fade-in-up";

export default function CitiesConsumer() {
  return (
    <section className="py-12 md:py-16 border-t border-edge">
      <div className="max-w-3xl mx-auto px-6">
        <FadeInUp>
          <p className="text-fg-dim text-sm mb-6">
            Now welcoming introductions in
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {["New York", "London", "Tokyo"].map((city) => (
              <span
                key={city}
                className="font-serif text-xl font-medium text-fg"
              >
                {city}
              </span>
            ))}
          </div>
          <p className="text-fg-dim text-sm mt-5">
            Paris and Milan &mdash; arriving soon.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
