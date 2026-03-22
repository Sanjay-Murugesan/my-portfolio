import React, { useState } from "react";
import "./Projects.css";

const projectData = [
  {
    id: 0,
    title: "AI-Powered Student Grade Tracker",
    description:
      "Full-stack academic management platform with an integrated ML engine that predicts student performance and identifies at-risk learners before it's too late.",
    tags: ["React", "Spring Boot", "FastAPI", "MySQL"],
    tagTheme: "purple",
    bannerIcon: "🎓",
    bannerTheme: "purple",
    status: "Completed",
    statusTheme: "done",
    github: "#",
    highlights: [
      "React frontend with Spring Boot REST API backend and JWT-based authentication",
      "FastAPI ML microservice that predicts performance trends from historical grade data",
      "Automated at-risk student alerts and visual analytics dashboards for teachers",
      "MySQL relational database with optimized queries for multi-institution scale",
    ],
    stats: [
      { value: "4", label: "Tech Layers" },
      { value: "ML", label: "Powered" },
      { value: "REST", label: "API Design" },
    ],
  },
  {
    id: 1,
    title: "SafeTrail — Real-Time Group Safety",
    description:
      "Android app for real-time GPS-based group travel safety coordination — track your crew live, get SOS alerts, and share location with trusted contacts.",
    tags: ["Android", "Kotlin", "Firebase", "Jetpack Compose"],
    tagTheme: "cyan",
    bannerIcon: "🗺️",
    bannerTheme: "cyan",
    status: "In Progress",
    statusTheme: "build",
    github: "#",
    highlights: [
      "Live GPS tracking with Firebase Realtime Database for sub-second location sync",
      "Group session management — create, join, and monitor travel groups securely via OTP",
      "SOS emergency alert system that notifies all group members instantly",
      "Built with Jetpack Compose UI, Firebase Auth, and Firestore for scalable data",
    ],
    stats: [
      { value: "GPS", label: "Real-Time" },
      { value: "SOS", label: "Emergency" },
      { value: "Live", label: "In Progress" },
    ],
  },
  {
    id: 2,
    title: "Travel Booking Website",
    description:
      "Modern frontend travel booking interface with responsive design, animated components, and a clean UX for discovering and booking travel packages.",
    tags: ["React", "Bootstrap"],
    tagTheme: "green",
    bannerIcon: "✈️",
    bannerTheme: "green",
    status: "Completed",
    statusTheme: "done",
    github: "#",
    highlights: [
      "Fully responsive layout built with React and Bootstrap grid system",
      "Interactive destination cards, filter system, and smooth page transitions",
      "Modern UI with hero sections, cards, and mobile-first design principles",
    ],
    stats: [
      { value: "100%", label: "Responsive" },
      { value: "React", label: "SPA" },
    ],
  },
  
];

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded((prev) => (prev === id ? null : id));

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <p className="section-eyebrow">What I've Built</p>
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>
        <div className="section-divider"></div>
      </div>

      <div className="projects-grid">
        {projectData.map((project) => {
          const isOpen = expanded === project.id;
          return (
            <div
              className={`project-card ${isOpen ? "expanded" : ""} card-${project.bannerTheme}`}
              key={project.id}
              onClick={() => toggle(project.id)}
            >
              <div className={`card-glow glow-${project.bannerTheme}`}></div>

              <div className={`card-banner banner-${project.bannerTheme}`}>
                <div className={`banner-grid grid-${project.bannerTheme}`}></div>
                <div className="banner-icon">{project.bannerIcon}</div>
              </div>

              <div className="card-body">
                <div className="card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`tag tag-${project.tagTheme}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.description}</p>

                {isOpen && (
                  <>
                    <div className="card-highlights">
                      {project.highlights.map((h, i) => (
                        <div className="highlight-item" key={i}>
                          <span className={`highlight-dot dot-${project.bannerTheme}`}></span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="stats-row">
                      {project.stats.map((s) => (
                        <div className="stat" key={s.label}>
                          <span className="stat-value">{s.value}</span>
                          <span className="stat-label">{s.label}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <div className="card-footer">
                  <span className={`status-badge status-${project.statusTheme}`}>
                    {project.statusTheme === "build" ? "⚡" : "✦"} {project.status}
                  </span>
                  <div className="card-actions">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-icon"
                      onClick={(e) => e.stopPropagation()}
                      title="GitHub"
                    >
                      ⌥
                    </a>
                    <div className={`expand-toggle ${isOpen ? "open" : ""}`}>↓</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;