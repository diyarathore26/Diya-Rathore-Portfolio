import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: " Forest Essentials Clone",
    description: `A pixel-perfect, fully responsive clone of the Forest Essentials
e-commerce website. Showcases advanced frontend UI development,
clean design principles, and layout replication.`,
    features:
      "Homepage layout, dropdown navbar, interactive hover effects, responsive design.",
    stack: "HTML5, CSS3, JavaScript (ES6+)",
    image: "/project/forest.png",
    link: "https://your-forest-clone-link.com",
  },
  {
    title: "ToDo List App (CRUD Project)",
    description: `A task manager to add, edit, delete, and track tasks. Demonstrates
use of React state, components, props, and controlled inputs.`,
    features:
      "Real-time updates, intuitive UI, responsiveness, and basic CRUD logic.",
    stack: "React.js, JavaScript (ES6+), CSS3",
    image: "/project/Todo.png",
    link: "https://your-todo-app-link.com",
  },
  {
    title: "Calculator App",
    description: `A functional calculator with a minimalist layout supporting basic
arithmetic operations and responsive design.`,
    features:
      "Real-time calculations, interactive button inputs, error handling.",
    stack: "HTML5, CSS3, JavaScript (ES6+)",
    image: "/project/calc.png",
    link: "https://your-calculator-link.com",
  },
  {
    title: "Diya Rathore – Portfolio Website",
    description: `A personal portfolio showcasing my frontend skills with a modern,
modular, and mobile-friendly layout.`,
    features:
      "Resume download, smooth scroll, React components, mobile-first design.",
    stack: "React.js, CSS3, JSX, GitHub Pages",
    image: "/project/forest.png",
    link: "https://your-portfolio-link.com",
  },
];

function Projects() {
  return (
    <section className="project-section">
      <h2 className="project-heading">Projects</h2>
      {projects.map((proj, idx) => (
        <div key={idx} className="project-container">
          <div className="project-info">
            <h3>{proj.title}</h3>
            <div className="glass-box">
              <p>{proj.description}</p>
              <p>
                <strong>Features:</strong> {proj.features}
              </p>
              <p>
                <strong>Tech Stack:</strong> {proj.stack}
              </p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="live-link"
              >
                🔗 Live Demo
              </a>
            </div>
          </div>
          <div className="project-image-wrapper">
            <img src={proj.image} alt={proj.title} className="project-image" />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
