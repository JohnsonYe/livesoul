import Nav from "@/components/nav";
import HeroPHA from "@/components/sections/hero-pha";
import ProblemPHA from "@/components/sections/problem-pha";
import Thesis from "@/components/sections/thesis";
import HowItWorks from "@/components/sections/how-it-works";
import TheHumans from "@/components/sections/the-humans";
import DiffTerminal from "@/components/sections/diff-terminal";
import CTAPHA from "@/components/sections/cta-pha";
import FooterPHA from "@/components/sections/footer-pha";

export default function VCPage() {
  return (
    <main>
      <Nav />
      <HeroPHA />
      <ProblemPHA />
      <Thesis />
      <HowItWorks />
      <TheHumans />
      <DiffTerminal />
      <CTAPHA />
      <FooterPHA />
    </main>
  );
}
