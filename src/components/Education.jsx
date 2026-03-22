import React, { useEffect, useState } from "react";
import "./Education.css";
import collegeImg from "../assets/college.jpg";
import schoolImg  from "../assets/school.jpg";

const cards = [
  {
    id: 0,
    degree:      "B.Tech – Information Technology",
    institution: "Sri Krishna College of Technology",
    location:    "Coimbatore, Tamil Nadu",
    period:      "2023 – 2027",
    status:      "active",
    image:       collegeImg,
    accent:      "purple",
    description: "Building real-world applications and diving deep into backend systems, REST APIs, and modern frontend frameworks.",
    tags:        ["Full-Stack Dev", "Spring Boot", "React", "Firebase"],
  },
  {
    id: 1,
    degree:      "Higher Secondary Education",
    institution: "St. Joseph's Matric Hr. Sec. School",
    location:    "Perambalur, Tamil Nadu",
    period:      "2021 – 2023",
    status:      "done",
    image:       schoolImg,
    accent:      "cyan",
    description: "Built the analytical foundation in Mathematics and Computer Science that sparked my passion for technology.",
    tags:        ["Mathematics", "Computer Science", "Logic", "Foundations"],
  },
];

const Education = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="edu-section" id="education">

      <div className="edu-grid" />
      <div className="edu-orb edu-orb-1" />
      <div className="edu-orb edu-orb-2" />

      <div className={`edu-content${visible ? " edu-content-in" : ""}`}>

        {/* Header */}
        <div className="edu-header">
          <div className="edu-eyebrow">
            <span className="edu-eline" />
            Academic Journey
            <span className="edu-eline edu-eline-r" />
          </div>
          <h2 className="edu-title">
            My <span>Education</span>
          </h2>
          <div className="edu-divider" />
        </div>

        {/* Cards */}
        <div className="edu-cards">
          {cards.map((c, i) => (
            <div
              key={c.id}
              className={`edu-card edu-card-${c.accent}${visible ? " edu-card-in" : ""}`}
              style={{ transitionDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className={`edu-bar edu-bar-${c.accent}`} />

              <div className="edu-img-wrap">
                <img src={c.image} alt={c.institution} />
                <div className={`edu-img-tint edu-tint-${c.accent}`} />
                <div className="edu-scanline" />
                <div className="edu-badges">
                  <span className={`edu-badge edu-badge-${c.accent}`}>{c.period}</span>
                  <span className={`edu-badge ${c.status === "active" ? "edu-badge-live" : "edu-badge-done"}`}>
                    {c.status === "active" ? "⚡ Active" : "✦ Done"}
                  </span>
                </div>
              </div>

              <div className="edu-body">
                <p className={`edu-degree edu-degree-${c.accent}`}>{c.degree}</p>
                <h3 className="edu-institution">{c.institution}</h3>
                <p className="edu-location">📍 {c.location}</p>
                <p className="edu-desc">{c.description}</p>
                <div className="edu-tags">
                  {c.tags.map((tag) => (
                    <span key={tag} className={`edu-tag edu-tag-${c.accent}`}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;