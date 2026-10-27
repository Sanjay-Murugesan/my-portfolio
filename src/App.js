import React from "react";
import "./App.css";

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Home from "./components/Home";
import MyJourney from "./components/MyJourney";
import HowIWork from "./components/HowIWork";
import HowIAddValue from "./components/HowIAddValue";
import GithubContributions from "./components/GithubContributions";

import Navbar from "./components/Navbar";
import useScrollEffects from "./hooks/useScrollEffects";

function App() {

  // 🔥 All scroll & navbar logic here
  useScrollEffects();

  return (
    <div className="app">

      {/* NAVBAR */}
      <Navbar />

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

      <section id="github" className="reveal">
        <GithubContributions />
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
