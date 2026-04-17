import NavConsumer from "@/components/nav-consumer";
import HeroConsumer from "@/components/sections/hero-consumer";
import Scenes from "@/components/sections/scenes";
import HumansV2 from "@/components/sections/humans-v2";
import CitiesConsumer from "@/components/sections/cities-consumer";
import CTAConsumer from "@/components/sections/cta-consumer";
import FooterConsumer from "@/components/sections/footer-consumer";

export default function V2() {
  return (
    <main>
      <NavConsumer />
      <HeroConsumer />
      <Scenes />
      <HumansV2 />
      <CitiesConsumer />
      <CTAConsumer />
      <FooterConsumer />
    </main>
  );
}
