import React from "react";

const HowIAddValue = () => {
  return (
    <section className="value-section">
      <h2 className="value-title">How I Add Value</h2>
      <p className="value-sub">
        Not claims — this is my actual working style in a team or project.
      </p>

      <div className="value-grid">
        <div className="value-card">
          <span className="value-index">01</span>
          <h3>Clarity First</h3>
          <p>
            I make sure requirements are clear before coding. This avoids
            confusion, rework, and wasted effort.
          </p>
        </div>

        <div className="value-card">
          <span className="value-index">02</span>
          <h3>Simple Solutions</h3>
          <p>
            I avoid overengineering. I prefer clean, readable solutions that are
            easy to maintain and extend.
          </p>
        </div>

        <div className="value-card">
          <span className="value-index">03</span>
          <h3>Consistency</h3>
          <p>
            I follow consistent naming, structure, and logic so the codebase
            stays understandable for everyone.
          </p>
        </div>

        <div className="value-card">
          <span className="value-index">04</span>
          <h3>Ownership</h3>
          <p>
            I take responsibility for what I build — bugs, fixes, and
            improvements are all part of the job.
          </p>
        </div>

        <div className="value-card highlight">
          <span className="value-index">05</span>
          <h3>Growth Mindset</h3>
          <p>
            I continuously learn from feedback, mistakes, and better
            developers. Growth never stops.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowIAddValue;
