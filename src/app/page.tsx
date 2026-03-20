import Nav from "@/components/nav";
import Hero from "@/components/sections/hero";
import Manifesto from "@/components/sections/manifesto";
import Problem from "@/components/sections/problem";
import WhatIsLiveSoul from "@/components/sections/what-is-livesoul";
import ForSouls from "@/components/sections/for-souls";
import ForSeekers from "@/components/sections/for-seekers";
import ThePromise from "@/components/sections/the-promise";
import SignManifesto from "@/components/sections/sign-manifesto";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Manifesto />
      <Problem />
      <WhatIsLiveSoul />
      <ForSouls />
      <ForSeekers />
      <ThePromise />
      <SignManifesto />
      <Footer />
    </main>
  );
}
