import React, { useEffect, useRef, useState } from "react";
import "./HowIWork.css";

/* ── Data ───────────────── */
const CARDS = [
  {
    id: "understand",
    step: "Step 01",
    icon: "🧠",
    iconVariant: "purple",
    title: "Problem Understanding",
    body: "I analyze problems deeply and plan structured solutions before coding.",
  },
  {
    id: "design",
    step: "Step 02",
    icon: "🎨",
    iconVariant: "pink",
    title: "UI / UX Design",
    body: "Clean, responsive, and user-focused interfaces.",
  },
  {
    id: "backend",
    step: "Step 03",
    icon: "⚙️",
    iconVariant: "teal",
    title: "Backend Development",
    body: "Secure APIs with Spring Boot and efficient database design.",
  },
  {
    id: "testing",
    step: "Step 04",
    icon: "🧪",
    iconVariant: "amber",
    title: "Testing & Optimization",
    body: "Testing, debugging, and performance tuning.",
  },
  {
    id: "integration",
    step: "Step 05",
    icon: "🔗",
    iconVariant: "cyan",
    title: "System Integration",
    body: "Seamless frontend-backend communication.",
  },
  {
    id: "growth",
    step: "Step 06",
    icon: "🚀",
    iconVariant: "purple",
    title: "Continuous Improvement",
    body: "Learning and improving with every project.",
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
          setTimeout(() => setVisible(true), index * 90);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) {
      io.observe(ref.current);
    }
    return () => io.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`hw-card hw-card--${card.iconVariant} ${visible ? "hw-visible" : ""}`}
    >
      <div className="hw-card-top">
        <span className="hw-step-badge">{card.step}</span>
        <div className={`hw-icon-wrap hw-icon-wrap--${card.iconVariant}`}>
          {card.icon}
        </div>
      </div>

      <div className="hw-card-body">
        <h3>{card.title}</h3>
        <p>{card.body}</p>
      </div>

      <div className="hw-card-glow" />
    </div>
  );
}

/* ── Main Component ───────────────── */
function HowIWork() {
  return (
    <section className="hw-section hw-root" id="work">
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
