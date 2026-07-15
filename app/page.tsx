import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Ripple from "./components/Ripple";
import Footer from "./components/Footer";
import { LanguageProvider } from "./i18n/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
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
      <Footer />
    </LanguageProvider>
  );
}
