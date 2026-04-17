import NavConsumer from "@/components/nav-consumer";
import HeroConsumer from "@/components/sections/hero-consumer";
import Scenes from "@/components/sections/scenes";
import HumansV1 from "@/components/sections/humans-v1";
import CitiesConsumer from "@/components/sections/cities-consumer";
import CTAConsumer from "@/components/sections/cta-consumer";
import FooterConsumer from "@/components/sections/footer-consumer";

export default function V1() {
  return (
    <main>
      <NavConsumer />
      <HeroConsumer />
      <Scenes />
      <HumansV1 />
      <CitiesConsumer />
      <CTAConsumer />
      <FooterConsumer />
    </main>
  );
}
