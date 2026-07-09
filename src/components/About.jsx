import "./About.css";

const skills = [
  "Java",
  "React",
  "Spring Boot",
  "JavaScript",
  "HTML",
  "CSS",
  "SQL",
  "REST API",
  "Swagger",
  "Git",
];

export default function About() {
  return (
    <section className="ab-section" id="about">
      <div className="ab-inner">

        {/* Header */}

        <div className="ab-header">

          <span className="ab-eyebrow">
            ABOUT ME
          </span>

          <h2 className="ab-title">
            Hi, I'm <span className="ab-accent">Sanjay Murugesan</span>
          </h2>

          <p className="ab-subtitle">
            Final Year B.Tech Information Technology student at
            <strong> Sri Krishna College of Technology</strong> with a strong
            interest in Full Stack Web Development. I enjoy building web
            applications, learning modern technologies, and continuously
            improving my programming and problem-solving skills.
          </p>

        </div>

        {/* Stats */}

        <div className="ab-stats">

          <div className="ab-stat">
            <span className="ab-stat-num">7.40</span>
            <span className="ab-stat-label">CGPA</span>
          </div>

          <div className="ab-stat-divider"></div>

          <div className="ab-stat">
            <span className="ab-stat-num">3</span>
            <span className="ab-stat-label">Projects</span>
          </div>

          <div className="ab-stat-divider"></div>

          <div className="ab-stat">
            <span className="ab-stat-num">1</span>
            <span className="ab-stat-label">Internship</span>
          </div>

        </div>

        {/* Cards */}

        <div className="ab-grid-box">

          {/* About */}

          <div className="ab-card">

            <h3>Who I Am</h3>

            <p>
              I'm a passionate Information Technology student who enjoys
              developing web applications and exploring both frontend and
              backend technologies. I like solving real-world problems through
              software and believe that every project is an opportunity to
              learn something new.
            </p>

            <ul>
              <li>🎓 Final Year B.Tech - Information Technology</li>
              <li>🏫 Sri Krishna College of Technology</li>
              <li>📍 Coimbatore, Tamil Nadu</li>
              <li>💼 Looking for Internship & Full-Time Opportunities</li>
            </ul>

          </div>

          {/* Experience */}

          <div className="ab-card">

            <h3>Experience</h3>

            <div className="ab-exp">

              <h4>Full Stack Web Development Intern</h4>

              <span>Mist Solutions, Coimbatore</span>

              <small>1 Month Internship</small>

              <p>
                Worked on developing web applications using Java, React,
                Spring Boot, SQL, REST APIs and gained practical experience in
                full stack development, teamwork and software development
                practices.
              </p>

            </div>

            <hr />

            <h3>Career Objective</h3>

            <p>
              I am looking for opportunities where I can contribute,
              collaborate with experienced developers, and continue growing as
              a Full Stack Software Developer. I am open to Frontend, Backend,
              and Full Stack roles, and willing to relocate.
            </p>

          </div>

          {/* Certifications */}

          <div className="ab-card">

            <h3>Certifications</h3>

            <ul>
              <li>🏅 Oracle AI Vector Search Professional</li>
              <li>🏅 Foundations of Cybersecurity - Coursera</li>
              <li>🏅 Network & Communications Security - Infosys Springboard</li>
            </ul>

            <hr />

            <h3>Currently Learning</h3>

            <ul>
              <li>Java & Advanced Spring Boot</li>
              <li>Data Structures & Algorithms</li>
              <li>System Design Fundamentals</li>
              <li>Backend Development Best Practices</li>
            </ul>

          </div>

        </div>

        {/* Tech */}

      

        {/* Footer */}

        <div className="ab-footer">

          <p>
            <strong>"I enjoy building software that solves real problems while
            continuously learning new technologies and improving my skills as a
            developer."</strong>
          </p>

        </div>

      </div>
    </section>
  );
}