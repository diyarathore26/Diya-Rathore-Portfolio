import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>📞 Contact Me</h2>
        <p>
          I'm actively seeking full-time frontend developer opportunities and
          open to freelance or collaboration projects. Feel free to reach out
          for any job, project, or portfolio-related discussion!
        </p>

        <ul className="contact-details">
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:rathorediya26@gmail.com">
              rathorediya26@gmail.com
            </a>
          </li>
         
          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/diyarathore26"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/diyarathore26
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/diyarathore"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/diyarathore
            </a>
          </li>
          
        </ul>

      
      </div>
    </section>
  );
}

export default Contact;
