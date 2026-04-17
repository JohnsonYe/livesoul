import NavConsumer from "@/components/nav-consumer";
import HeroConsumer from "@/components/sections/hero-consumer";
import Scenes from "@/components/sections/scenes";
import HumansConsumer from "@/components/sections/humans-consumer";
import CitiesConsumer from "@/components/sections/cities-consumer";
import CTAConsumer from "@/components/sections/cta-consumer";
import FooterConsumer from "@/components/sections/footer-consumer";

export default function Home() {
  return (
    <main>
      <NavConsumer />
      <HeroConsumer />
      <Scenes />
      <HumansConsumer />
      <CitiesConsumer />
      <CTAConsumer />
      <FooterConsumer />
    </main>
  );
}
