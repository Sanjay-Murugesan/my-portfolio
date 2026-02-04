import React, { useEffect } from "react";
import "./HowIWork.css"

function HowIWork() {

  useEffect(() => {
    const cards = document.querySelectorAll(".how-card");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
  }, []);

  return (
    <section className="how-section">
      <h2 className="how-title">How I Work</h2>

      <div className="how-container">

        <div className="how-card">
          <h3>🧠 Problem Understanding</h3>
          <p>I analyze problems deeply, break them into logical steps, and plan structured solutions before coding.</p>
        </div>

        <div className="how-card">
          <h3>🎨 UI/UX Design Thinking</h3>
          <p>I design responsive, clean, and user-friendly interfaces with focus on usability and visual balance.</p>
        </div>

        <div className="how-card">
          <h3>⚙️ Backend Development</h3>
          <p>I develop secure REST APIs using Java & Spring Boot and manage databases efficiently.</p>
        </div>

        <div className="how-card">
          <h3>🔗 System Integration</h3>
          <p>I connect frontend and backend smoothly ensuring efficient data flow and performance.</p>
        </div>

        <div className="how-card">
          <h3>🧪 Testing & Optimization</h3>
          <p>I test thoroughly, debug errors, and optimize performance for reliable applications.</p>
        </div>

        <div className="how-card">
          <h3>🚀 Continuous Improvement</h3>
          <p>I constantly learn modern tools and best practices to grow as a developer.</p>
        </div>

      </div>
    </section>
  );
}

export default HowIWork;
