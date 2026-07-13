import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_gpkbk7d",     // Service ID
        "template_jyelggk",    // Template ID
        e.target,
        "ZV3HKW8BcL-r2-u_F"      // Replace with your Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <h2>Get In Touch</h2>

          <p>
            I'm a Final Year B.Tech Information Technology student who enjoys
            learning, building real-world projects, and exploring modern
            technologies through practical experience.
          </p>

          <p>
            This portfolio showcases my academic journey, projects, and
            technical skills. If you'd like to discuss opportunities,
            collaborate on projects, or simply connect, I'd love to hear from
            you.
          </p>

          <div className="contact-links">

            <a href="mailto:mssanjay4444@gmail.com">
              📧 mssanjay4444@gmail.com
            </a>

            <a
              href="https://github.com/Sanjay-Murugesan"
              target="_blank"
              rel="noreferrer"
            >
              💻 GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sanjay-murugesan-77b23127a/"
              target="_blank"
              rel="noreferrer"
            >
              🔗 LinkedIn
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">

          <h3>Send a Message</h3>

          <form className="enquiry-form" onSubmit={sendEmail}>

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;