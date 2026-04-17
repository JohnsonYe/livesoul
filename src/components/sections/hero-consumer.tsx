import ScrollHint from "@/components/scroll-hint";

export default function HeroConsumer() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image — Paris café with Eiffel Tower, warm evening light */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundColor: "#1a0f0a",
          backgroundImage:
            "url(https://images.unsplash.com/photo-SUPX5avakwA?auto=format&fit=crop&w=1920&q=85)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />

      {/* Content — bottom-left, no fade-in (first thing people see) */}
      <div className="relative h-full flex flex-col justify-end px-6 pb-16 md:pb-24 max-w-5xl mx-auto w-full">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] font-medium tracking-tight max-w-lg">
          Every city has a world
          <br />
          most people never find.
        </h1>
        <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-sm mt-4 mb-8">
          We introduce you to the people who can take you there.
        </p>
        <a
          href="#join"
          className="inline-block font-sans text-sm px-7 py-3.5 bg-white text-fg hover:bg-fg hover:text-[#f5f4f0] transition-colors duration-300 tracking-wide w-fit"
        >
          Request an introduction
        </a>
      </div>

      <ScrollHint />

      <span className="absolute bottom-4 right-6 text-white/25 text-[10px] font-sans">
        Photo: Unsplash
      </span>
    </section>
  );
}
