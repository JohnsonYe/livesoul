import FadeInUp from "@/components/fade-in-up";

export default function Bridge() {
  return (
    <section
      className="relative w-full py-32 md:py-44 flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #f5f4f0 0%, #1c1410 18%, #1c1410 82%, #f5f4f0 100%)",
      }}
    >
      {/* Subtle warm vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(241,162,91,0.06)_0%,_transparent_70%)]" />

      <FadeInUp>
        <p className="relative font-serif text-xl md:text-2xl text-white/75 text-center tracking-[0.06em] leading-relaxed px-6">
          Where the conversation begins.
        </p>
      </FadeInUp>
    </section>
  );
}
