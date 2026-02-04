import React from "react";

const MyJourney = () => {
  return (
    <section className="journey">
      <h2>My Journey</h2>
      <p className="journey-sub">
        Not just skills — this is how I grew as a developer.
      </p>

      <div className="journey-track">

        <div className="journey-step">
          <span className="dot"></span>
          <h3>Started Curious</h3>
          <p>
            Began my journey exploring how websites work and got interested in
            programming fundamentals.
          </p>
        </div>

        <div className="journey-step">
          <span className="dot"></span>
          <h3>Learned the Core</h3>
          <p>
            Built strong foundations in Java, databases, and web technologies
            instead of jumping only into frameworks.
          </p>
        </div>

        <div className="journey-step">
          <span className="dot"></span>
          <h3>Built Real Projects</h3>
          <p>
            Developed full-stack projects using React, Spring Boot, and MySQL
            with real-world use cases.
          </p>
        </div>

        <div className="journey-step">
          <span className="dot"></span>
          <h3>Now</h3>
          <p>
            Actively preparing for internships and placements while improving
            problem-solving and system design skills.
          </p>
        </div>

        <div className="journey-step highlight">
          <span className="dot"></span>
          <h3>What’s Next?</h3>
          <p>
            Contributing to impactful projects, learning advanced backend
            systems, and growing as a professional developer.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MyJourney;
