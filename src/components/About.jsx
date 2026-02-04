import React, { useEffect } from "react";

const About = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <section className="about-unique">

      <h2 className="fade-in">About Me</h2>

      <p className="about-intro fade-in">
        I’m not trying to be the best developer in the room —  
        I’m focused on becoming a <span>better one every day</span>.
      </p>

      <div className="about-grid">

        <div className="about-block fade-in">
          <h3>Who I Am</h3>
          <p>
            I’m an Information Technology student who enjoys understanding how
            things work under the hood. Instead of just using tools, I prefer
            learning the logic behind them.
          </p>
          <p>
            I’ve worked with Java, React, Spring Boot, and MySQL to build
            real-world applications, not just demo projects. I believe strong
            fundamentals matter more than trends.
          </p>
        </div>

        <div className="about-block highlight fade-in">
          <h3>How I Think</h3>
          <ul>
            <li>✔ I break problems into simple steps</li>
            <li>✔ I focus on clarity over complexity</li>
            <li>✔ I learn by building, failing, and fixing</li>
            <li>✔ I value clean code and consistency</li>
          </ul>
        </div>

      </div>

      <p className="about-footer fade-in">
        Right now, my goal is simple —  
        <strong> gain real experience, build meaningful software,</strong>  
        and grow into a dependable full-stack developer.
      </p>

    </section>
  );
};

export default About;
