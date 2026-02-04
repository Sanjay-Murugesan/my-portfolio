import React, { useEffect } from "react";
import "./Education.css";
import collegeImg from "../assets/college.jpg";

const Education = () => {

  // ✅ Education-only scroll animation
  useEffect(() => {
    const items = document.querySelectorAll(".edu-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
   <section className="edu-modern edu-section">

      <h2 className="edu-heading">My Education</h2>

      {/* COLLEGE */}
      <div className="edu-row edu-animate">
        <div className="edu-image">
          <img src={collegeImg} alt="College" />
        </div>

        <div className="edu-card-modern">
          <h3>B.Tech – Information Technology</h3>
          <p className="edu-place">Coimbatore, Tamil Nadu</p>
          <p>
            Currently in 3rd Year • Graduation: <strong>2027</strong>
          </p>
          <p>
            Focused on Web Development, Backend Systems, and building real-world
            applications using Java, React, Spring Boot, and MySQL.
          </p>
        </div>
      </div>

      {/* SCHOOL */}
      <div className="edu-row reverse edu-animate">
        <div className="edu-image small">
          <img src={collegeImg} alt="School" />
        </div>

        <div className="edu-card-modern">
          <h3>12th Grade – Higher Secondary</h3>
          <p className="edu-place">
            St. Joseph’s Matric Hr. Sec. School, Perambalur
          </p>
          <p>
            Built strong fundamentals in Mathematics and Computer Science which
            laid the foundation for my technical journey.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Education;
