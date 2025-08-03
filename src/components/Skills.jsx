import React from "react";
import "../styles/Skills.css";

function Skills() {
  const skillData = [
    {
      category: "Languages",
      skills: [
        { name: "HTML5", img: "/skills/html5.png" },
        { name: "CSS3", img: "/skills/css3.png" },
        { name: "JavaScript (ES6+)", img: "/skills/javascript.png" },
        { name: "TypeScript", img: "/skills/TypeScript.png" },
      ],
    },
    {
      category: "Libraries & Frameworks",
      skills: [
        { name: "React", img: "/skills/react.png" },
        { name: "Redux", img: "/skills/redux.png" },
        { name: "Tailwind CSS", img: "/skills/TailwindCSS.png" },
        { name: "Bootstrap", img: "/skills/bootstrap.png" },
        { name: "Chakra UI", img: "/skills/ChakraUi.png" },
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git", img: "/skills/Git.png" },
        { name: "Github", img: "/skills/Github.png" },
        { name: "VS Code", img: "/skills/VsCode.png" },
        { name: "Figma (UI to Code)", img: "/skills/Figma.png" },
        { name: "Chrome DevTools", img: "/skills/ChromeDevTools.png" },
        { name: "JSON Server", img: "/skills/JSONServer.png" },
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-content">
        <h2>My Skills</h2>
        <p>
          I bring strong technical expertise in modern frontend technologies,
          tools, and frameworks, enabling me to build fast, responsive, and
          visually engaging web interfaces.
        </p>
      </div>

      {skillData.map((section, index) => (
          <div className="skill-category" key={index}>
            <h3>{section.category}</h3>
            <div className="skill-grid">
              {section.skills.map((skill, i) => (
                <div className="skill-item" key={i}>
                  <img src={skill.img} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
    </section>
  );
}

export default Skills;
