import React from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">

        {/* LEFT – STUDENT INFO */}
        <div className="contact-left">
          <h2>Get In Touch</h2>

          <p>
            I’m a B.Tech Information Technology student who enjoys learning,
            building projects, and exploring new technologies through
            hands-on practice.
          </p>

          <p>
            This portfolio showcases my academic journey, personal projects,
            and technical skills. If you’d like to give feedback, ask
            questions, or discuss ideas related to technology or learning,
            feel free to reach out.
          </p>

          <div className="contact-links">
            <a href="mailto:mssanjay4444@gmail.com">📧 Email</a>
            <a href="https://github.com/Sanjay-Murugesan/" target="_blank" rel="noreferrer">
              💻 GitHub
            </a>
            <a href="https://www.linkedin.com/in/sanjay-murugesan-77b23127a/" target="_blank" rel="noreferrer">
              🔗 LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT – ENQUIRY FORM */}
        <div className="contact-right">
          <h3>Send a Message</h3>

          <form className="enquiry-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
