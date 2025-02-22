import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Work";
import { Contact } from "../components/Contact";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </>
  );
};
