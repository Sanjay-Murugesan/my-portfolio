import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import { SiSpringboot, SiMysql, SiFigma } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#e34c26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
    { name: "JavaScript", icon: <FaJs />, color: "#f0db4f" },
    { name: "React", icon: <FaReact />, color: "#61dafb" },
    { name: "Java", icon: <FaJava />, color: "#f89820" },
    { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f" },
    { name: "MySQL", icon: <SiMysql />, color: "#00758f" },
    { name: "Git & GitHub", icon: <FaGithub />, color: "#ffffff" },
    { name: "Figma", icon: <SiFigma />, color: "#f24e1e" },
  ];

  return (
    <section className="skills">
      <h2>Technical Skills</h2>

      <div className="skills-slider">
        <div className="skills-track">
          {[...skills, ...skills].map((skill, index) => (
            <div
              className="skill-card"
              key={index}
              style={{ "--glow": skill.color }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
