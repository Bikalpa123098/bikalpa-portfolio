import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Exploring } from "@/components/Exploring";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { RustJourney } from "@/components/RustJourney";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <RustJourney />
      <Education />
      <Exploring />
      <Contact />
    </>
  );
}
