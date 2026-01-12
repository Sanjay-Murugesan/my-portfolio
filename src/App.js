import React from "react";
import "./App.css";

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
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
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <h1>
          Hi, I'm <span>Sanjay</span>
        </h1>

        <h2>IT Student | Full Stack Developer</h2>

        <p>
          I build modern web applications using React, Java, Spring Boot and
          MySQL.
        </p>

       <div className="buttons">
  <a href="#projects" className="btn primary">View Projects</a>
  <a href="#contact" className="btn outline">Contact Me</a>
  <a href="/Sanjay_Resume.pdf" className="btn outline" target="_blank" rel="noreferrer">
    Download Resume
  </a>
</div>

      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* SKILLS */}
      <section id="skills">
        <Skills />
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <Projects />
      </section>

      {/* EDUCATION */}
      <section id="education">
        <Education />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
