import React from "react";
import "./App.css";

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Home from "./components/Home";
import WhyMe from "./components/HowIAddValue";
import MyJourney from "./components/MyJourney";
import HowIWork from "./components/HowIWork";
import HowIAddValue from "./components/HowIAddValue";

import useScrollEffects from "./hooks/useScrollEffects";

function App() {

  // 🔥 All scroll & navbar logic here
  useScrollEffects();

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Sanjay</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* SECTIONS */}
      <Home />

      <section id="about" className="reveal">
        <About />
      </section>

      <section id="work">
      <HowIWork />
      </section>

      <section id="journey">
      <MyJourney />
      </section>


      {/* HOW I ADD VALUE (replaces Why Me) */}
<section id="value">
  <HowIAddValue />
</section>

      <section id="skills" className="reveal">
        <Skills />
      </section>

      <section id="projects" className="reveal reveal-left">
        <Projects />
      </section>

      <section id="education">
  <Education />
</section>

      <section id="contact" className="reveal">
        <Contact />
      </section>

    </div>
  );
}

export default App;
