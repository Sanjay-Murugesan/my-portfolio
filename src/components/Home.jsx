import React from "react";
import profile from "../assets/profile.jpeg";

const Home = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        {/* LEFT – TEXT */}
        <div className="hero-text">
          <h1>
            Hi, I’m <span>Sanjay Murugesan</span>
          </h1>

          <h2>Pre-Final Year B.Tech IT Student | Full Stack Developer</h2>

          <p className="hero-intro">
            I’m a pre-final year Information Technology student at
            emphasising Sri Krishna College of Technology, passionate about
            building efficient, scalable, and user-friendly applications.
          </p>

      

          <div className="hero-actions">
  <a href="#projects">View Projects</a>
  <a href="#contact">Contact Me</a>
  <a href="/Sanjay_Resume.pdf" target="_blank" rel="noreferrer">
    Download Resume
  </a>
</div>

        </div>

        {/* RIGHT – IMAGE */}
        <div className="hero-image">
          <img src={profile} alt="Sanjay Murugesan" />
        </div>

      </div>
    </section>
  );
};

export default Home;
