import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import GithubStats from "../components/GithubStats";
import Achievement from "../components/Achievement";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <GithubStats />
      <Achievement />
      <Contact />
    </>
  );
}