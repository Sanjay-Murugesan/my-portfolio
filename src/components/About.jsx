import React, { useEffect, useRef, useState } from "react";
import "./About.css";

const traits = [
  { icon: "⬡", label: "Problem Decomposer", desc: "Break it down, then build it up" },
  { icon: "⬡", label: "Clarity First", desc: "Simple > clever, always" },
  { icon: "⬡", label: "Learn by Doing", desc: "Build it. Break it. Fix it." },
  { icon: "⬡", label: "Clean Code", desc: "Code is read more than written" },
];

const stack = [
  { name: "Java", color: "#f89820" },
  { name: "React", color: "#61dafb" },
  { name: "Spring Boot", color: "#6db33f" },
  { name: "MySQL", color: "#4479a1" },
  { name: "Kotlin", color: "#7f52ff" },
  { name: "Firebase", color: "#ffca28" },
  { name: "FastAPI", color: "#009688" },
  { name: "Git", color: "#f05032" },
];

const About = () => {
  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const [counters, setCounters] = useState({ projects: 0, commits: 0, months: 0 });
  const countersStarted = useRef(false);

  useEffect(() => {
    const handleMouse = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    const section = sectionRef.current;
    section?.addEventListener("mousemove", handleMouse);
    return () => section?.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const targets = { projects: 5, commits: 72, months: 12 };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ab-visible");
            if (!countersStarted.current) {
              countersStarted.current = true;
              Object.entries(targets).forEach(([key, target]) => {
                let current = 0;
                const step = Math.ceil(target / 40);
                const timer = setInterval(() => {
                  current = Math.min(current + step, target);
                  setCounters((prev) => ({ ...prev, [key]: current }));
                  if (current >= target) clearInterval(timer);
                }, 40);
              });
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".ab-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="ab-section" ref={sectionRef}>
      {/* Ambient glow that follows cursor */}
      <div
        className="ab-glow"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(139,92,246,0.12), transparent 60%)`,
        }}
      />

      {/* Grid texture */}
      <div className="ab-grid" />

      <div className="ab-inner">

        {/* ── Header ── */}
        <div className="ab-reveal ab-header">
          <span className="ab-eyebrow">get to know me</span>
          <h2 className="ab-title">
            About <span className="ab-accent">Me</span>
          </h2>
          <div className="ab-title-line" />
        </div>

        {/* ── Subtitle ── */}
        <p className="ab-reveal ab-subtitle">
          I'm not trying to be the best developer in the room —&nbsp;
          I'm focused on becoming a{" "}
          <span className="ab-highlight">better one every day</span>.
        </p>

        {/* ── Stats row ── */}
        <div className="ab-reveal ab-stats">
          <div className="ab-stat">
            <span className="ab-stat-num">{counters.projects}<span className="ab-stat-plus">+</span></span>
            <span className="ab-stat-label">Projects built</span>
          </div>
          <div className="ab-stat-divider" />
          <div className="ab-stat">
            <span className="ab-stat-num">{counters.commits}<span className="ab-stat-plus">+</span></span>
            <span className="ab-stat-label">Commits pushed</span>
          </div>
          <div className="ab-stat-divider" />
          <div className="ab-stat">
            <span className="ab-stat-num">{counters.months}<span className="ab-stat-plus">mo</span></span>
            <span className="ab-stat-label">of consistency</span>
          </div>
        </div>

        {/* ── Main cards ── */}
        <div className="ab-cards">
          {/* Who I Am */}
          <div className="ab-reveal ab-card ab-card--bio">
            <div className="ab-card-glow" />
            <div className="ab-card-tag">01</div>
            <h3 className="ab-card-title">Who I Am</h3>
            <p className="ab-card-text">
              I'm an Information Technology student who enjoys understanding how
              things work under the hood. Instead of just using tools, I prefer
              learning the logic behind them.
            </p>
            <p className="ab-card-text">
              I've worked with Java, React, Spring Boot, and MySQL to build
              real-world applications. Strong fundamentals matter more than
              chasing trends.
            </p>
            <div className="ab-card-footer">
              <span className="ab-badge">B.Tech IT · SKCT</span>
              <span className="ab-badge ab-badge--cyan">Batch 2027</span>
            </div>
          </div>

          {/* How I Think */}
          <div className="ab-reveal ab-card ab-card--traits">
            <div className="ab-card-glow ab-card-glow--cyan" />
            <div className="ab-card-tag ab-card-tag--cyan">02</div>
            <h3 className="ab-card-title">How I Think</h3>
            <ul className="ab-traits">
              {traits.map((t, i) => (
                <li
                  key={i}
                  className={`ab-trait ${activeCard === i ? "ab-trait--active" : ""}`}
                  onMouseEnter={() => setActiveCard(i)}
                  onMouseLeave={() => setActiveCard(null)}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="ab-trait-dot" />
                  <div className="ab-trait-text">
                    <span className="ab-trait-label">{t.label}</span>
                    <span className="ab-trait-desc">{t.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div className="ab-reveal ab-card ab-card--exp">
            <div className="ab-card-glow ab-card-glow--violet" />
            <div className="ab-card-tag ab-card-tag--violet">03</div>
            <h3 className="ab-card-title">Experience</h3>
            <div className="ab-timeline">
              <div className="ab-timeline-item">
                <div className="ab-timeline-dot" />
                <div className="ab-timeline-content">
                  <span className="ab-timeline-role">Intern · Mist Technologies</span>
                  <span className="ab-timeline-period">May – Jun 2025</span>
                  <span className="ab-timeline-stack">React · Spring Boot · MySQL · Postman</span>
                </div>
              </div>
              <div className="ab-timeline-item">
                <div className="ab-timeline-dot ab-timeline-dot--dim" />
                <div className="ab-timeline-content">
                  <span className="ab-timeline-role">B.Tech Information Technology</span>
                  <span className="ab-timeline-period">2023 – 2027</span>
                  <span className="ab-timeline-stack">Sri Krishna College of Technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Tech Stack ── */}
        <div className="ab-reveal ab-stack-section">
          <span className="ab-stack-label">tech i work with</span>
          <div className="ab-stack-grid">
            {stack.map((tech, i) => (
              <div
                key={i}
                className="ab-tech-pill"
                style={{ "--pill-color": tech.color, animationDelay: `${i * 80}ms` }}
              >
                <span className="ab-tech-dot" style={{ background: tech.color }} />
                {tech.name}
              </div>
            ))}
          </div>
        </div>

        {/* ── Footer line ── */}
        <p className="ab-reveal ab-footer">
          Right now, my goal is simple —{" "}
          <strong>gain real experience, build meaningful software,</strong>{" "}
          and grow into a dependable full-stack developer.
        </p>

      </div>
    </section>
  );
};

export default About;