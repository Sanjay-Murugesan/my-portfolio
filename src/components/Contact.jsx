import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>

      <p>If you’d like to connect or discuss opportunities, feel free to reach out.</p>

      <div className="contact-links">
        <a href="mailto:yourmail@gmail.com">📧 Email</a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          💻 GitHub
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          🔗 LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
