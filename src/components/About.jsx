import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          A passionate and detail-oriented frontend developer focused on
          building clean, responsive, and accessible web interfaces. Dedicated
          to crafting seamless digital experiences with an emphasis on
          usability, performance, and modern design principles.
        </p>
        <p>
          Proficient in <strong>HTML5</strong>, <strong>CSS3</strong>,{" "}
          <strong>JavaScript (ES6+)</strong>, <strong>React.js</strong>,{" "}
          <strong>Tailwind CSS</strong>, <strong>Bootstrap</strong>,{" "}
          <strong>Redux</strong>, and <strong>TypeScript</strong>. Experienced
          with responsive layouts, component-based architecture, and
          cross-browser compatibility.
        </p>
        <p>
          Well-versed in version control using <strong>Git & GitHub</strong>,
          API integration, DOM manipulation, performance optimization, and
          frontend best practices.
        </p>
        <p>
          Continuously enhancing problem-solving abilities through regular
          practice in <strong>Data Structures and Algorithms (DSA)</strong>,
          focusing on logic building and efficient coding patterns.
        </p>
      </div>
    </section>
  );
}

export default About;
