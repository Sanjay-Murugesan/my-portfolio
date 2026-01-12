import React from "react";

const Projects = () => {
  const projectData = [
    {
      title: "Student Grade Tracker",
      description:
        "A full-stack application to manage student grades using React, Spring Boot, and MySQL.",
      tech: "React | Spring Boot | MySQL",
      github: "#",
    },
    {
      title: "Travel Booking Website",
      description:
        "Frontend travel booking website with modern UI and responsive design.",
      tech: "React | Bootstrap",
      github: "#",
    },
    {
      title: "Enquiry Management System",
      description:
        "A PHP and MySQL based enquiry form system for storing and managing user requests.",
      tech: "PHP | MySQL | HTML | CSS",
      github: "#",
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.tech}</span>
            <a href={project.github} target="_blank" rel="noreferrer">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
