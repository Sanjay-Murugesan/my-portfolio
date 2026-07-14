import React from "react";
import {
  FaSeedling,
  FaBookOpen,
  FaLaptopCode,
  FaRocket,
  FaBullseye,
} from "react-icons/fa";
import "./MyJourney.css";
const journeyData = [
  {
    year: "2023",
    icon: <FaSeedling />,
    title: "The Beginning",
    description:
      "Started with curiosity about how websites work. That curiosity slowly became a passion for programming and technology.",
  },
  {
    year: "2024",
    icon: <FaBookOpen />,
    title: "Building Strong Foundations",
    description:
      "Focused on Java, Object-Oriented Programming, Data Structures, Algorithms, SQL, and problem-solving instead of rushing into frameworks.",
  },
  {
    year: "2025",
    icon: <FaLaptopCode />,
    title: "Building Real Projects",
    description:
      "Developed full-stack applications using React, Spring Boot, REST APIs, MySQL, and AI-powered solutions to solve real-world problems.",
  },
  {
    year: "2026",
    icon: <FaRocket />,
    title: "Continuous Growth",
    description:
      "Improving every day by practicing DSA, learning System Design, writing cleaner code, and building scalable applications.",
  },
  {
    year: "Future",
    icon: <FaBullseye />,
    title: "The Next Chapter",
    description:
      "Looking forward to contributing to impactful software, collaborating with talented teams, and growing into a skilled Software Engineer.",
  },
];

const MyJourney = () => {
  return (
    <section className="journey-section" id="journey">

      <div className="journey-bg-1"></div>
      <div className="journey-bg-2"></div>

      <div className="journey-header">

        <span className="journey-badge">
          MY JOURNEY
        </span>

        <h2>
          Every Step Made Me
          <span> Better.</span>
        </h2>

        <p>
          Every project, challenge, and late-night debugging session has
          shaped the developer I am today.
        </p>

      </div>

      <div className="timeline">

        {journeyData.map((item, index) => (

          <div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"
              }`}
            key={index}
          >

            <div className="timeline-dot">

              <div className="icon">
                {item.icon}
              </div>

            </div>

            <div className="timeline-card">

              <span className="timeline-year">
                {item.year}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>

          </div>

        ))}

      </div>

      <div className="journey-footer">

        <h3>The Journey Continues...</h3>

        <p>
          Every challenge helps me grow as a developer.
          I enjoy building software that is clean,
          scalable, and meaningful.
          This is only the beginning of my journey.
        </p>

      </div>

    </section>
  );
};

export default MyJourney;