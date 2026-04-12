import React, { useEffect, useRef, useState, useCallback } from "react";
import "./HowIWork.css";

/* ── Data ───────────────── */
const CARDS = [
  {
    id: "understand",
    step: "Step 01",
    icon: "🧠",
    iconVariant: "purple",
    cardVariant: "purple",
    title: "Problem Understanding",
    body: "I analyze problems deeply and plan structured solutions before coding.",
    size: "big",
  },
  {
    id: "design",
    step: "Step 02",
    icon: "🎨",
    iconVariant: "pink",
    cardVariant: "glass",
    title: "UI / UX Design",
    body: "Clean, responsive, and user-focused interfaces.",
  },
  {
    id: "backend",
    step: "Step 03",
    icon: "⚙️",
    iconVariant: "teal",
    cardVariant: "dark",
    title: "Backend Development",
    body: "Secure APIs with Spring Boot and efficient database design.",
    size: "wide",
  },
  {
    id: "testing",
    step: "Step 04",
    icon: "🧪",
    iconVariant: "amber",
    cardVariant: "glass",
    title: "Testing & Optimization",
    body: "Testing, debugging, and performance tuning.",
  },
  {
    id: "integration",
    step: "Step 05",
    icon: "🔗",
    iconVariant: "amber",
    cardVariant: "glass",
    title: "System Integration",
    body: "Seamless frontend-backend communication.",
  },
  {
    id: "growth",
    step: "Step 06",
    icon: "🚀",
    iconVariant: "purple",
    cardVariant: "teal",
    title: "Continuous Improvement",
    body: "Learning and improving with every project.",
    size: "big",
  },
];

/* ── Card Component ───────────────── */
function HowCard({ card, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 100);
        }
      },
      { threshold: 0.2 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`hw-card hw-card--${card.cardVariant} 
      ${card.size === "big" ? "big" : ""} 
      ${card.size === "wide" ? "wide" : ""} 
      ${visible ? "hw-visible" : ""}`}
    >
      <span className="hw-step-badge">{card.step}</span>

      <div className={`hw-icon-wrap hw-icon-wrap--${card.iconVariant}`}>
        {card.icon}
      </div>

      <h3>{card.title}</h3>
      <p>{card.body}</p>
    </div>
  );
}

/* ── Main Component ───────────────── */
function HowIWork() {
  return (
    <section className="hw-section hw-root">

      <div className="hw-header">
        <p className="hw-eyebrow">
          <span /> Workflow <span />
        </p>

        <h2 className="hw-title">
          How I <em>Work</em>
        </h2>

        <p className="hw-subtitle">
          From idea to execution — structured and efficient
        </p>
      </div>

      <div className="hw-grid">
        {CARDS.map((card, i) => (
          <HowCard key={card.id} card={card} index={i} />
        ))}
      </div>

    </section>
  );
}

export default HowIWork;