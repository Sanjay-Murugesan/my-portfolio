import React, { useEffect } from "react";
import "./About.css";

const About = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about">

      <h2 className="fade-in title">About Me</h2>

      <p className="fade-in subtitle">
        I’m not trying to be the best developer in the room —  
        I’m focused on becoming a <span>better one every day</span>.
      </p>

      <div className="about-container">

        <div className="card fade-in">
          <h3>Who I Am</h3>
          <p>
            I’m an Information Technology student who enjoys understanding how
            things work under the hood. Instead of just using tools, I prefer
            learning the logic behind them.
          </p>
          <p>
            I’ve worked with Java, React, Spring Boot, and MySQL to build
            real-world applications. I believe strong fundamentals matter more than trends.
          </p>
        </div>

        <div className="card highlight fade-in">
          <h3>How I Think</h3>
          <ul>
            <li>Break problems into simple steps</li>
            <li>Clarity over complexity</li>
            <li>Learn by building & fixing</li>
            <li>Clean code matters</li>
          </ul>
        </div>

      </div>

      <p className="fade-in footer">
        Right now, my goal is simple —  
        <strong> gain real experience, build meaningful software,</strong>  
        and grow into a dependable full-stack developer.
      </p>

    </section>
  );
};

export default About;