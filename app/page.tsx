import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Ripple from "./components/Ripple";

export default function Home() {
  return (
    <>
      <Ripple />
      <Nav />
      <Hero />
      <div className="water-divider" />
      <About />
      <div className="water-divider" />
      <Projects />
      <div className="water-divider" />
      <Skills />
      <div className="water-divider" />
      <Contact />
      <footer className="px-16 py-6 border-t border-[var(--border)] flex justify-between items-center">
        <p className="text-[12px] text-[var(--muted)]">© 2026 Lucas Coelho · Construído com TypeScript e muito café.</p>
        <span className="font-[family-name:var(--font-cinzel)] text-[12px] tracking-[4px] text-[var(--water2)]">LC.</span>
      </footer>
    </>
  );
}
