import React, { useEffect } from "react";
import "./Education.css";
import collegeImg from "../assets/college.jpg";
import schoolImg from "../assets/school.jpg";

const Education = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".edu-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // optimize
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="edu-modern">

      <h2 className="edu-heading">My Education Journey</h2>

      {/* ===== College ===== */}
      <div className="edu-row edu-animate">
        <div className="edu-image">
          <img src={collegeImg} alt="College" />
        </div>

        <div className="edu-card-modern">
          <h3>B.Tech – Information Technology</h3>
          <p className="edu-place">Coimbatore, Tamil Nadu</p>
          <p>
            Currently pursuing my 3rd year and expected to graduate in <strong>2027</strong>.
          </p>
          <p>
            Exploring full-stack development, backend systems, and building
            real-world applications using Java, React, Spring Boot and MySQL.
          </p>
        </div>
      </div>

      {/* ===== School ===== */}
      <div className="edu-row reverse edu-animate">
        <div className="edu-image">
          <img src={schoolImg} alt="School" />
        </div>

        <div className="edu-card-modern">
          <h3>Higher Secondary Education</h3>
          <p className="edu-place">
            St. Joseph’s Matric Hr. Sec. School, Perambalur
          </p>
          <p>
            Built strong fundamentals in Mathematics and Computer Science,
            which laid the foundation for my technical journey.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Education;