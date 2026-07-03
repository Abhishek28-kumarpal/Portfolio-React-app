import { useState } from "react";

import "./index.css";

import { useScrollProgress, useScrollY } from "./hooks/usePortfolio";

import CursorGlow      from "./components/CursorGlow";
import Navbar          from "./components/Navbar";
import Hero            from "./components/Hero";
import Stats           from "./components/Stats";
import Skills          from "./components/Skills";
import Experience      from "./components/Experience";
import Projects        from "./components/Projects";
import Certifications  from "./components/Certifications";
import Education       from "./components/Education";
import Contact         from "./components/Contact";
import Footer          from "./components/Footer";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const progress = useScrollProgress();
  const scrollY  = useScrollY();

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
      />

      {/* Background effects */}
      <CursorGlow />
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      {/* Layout */}
      <Navbar scrollY={scrollY} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Stats />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
