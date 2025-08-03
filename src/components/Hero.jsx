import "../styles/Hero.css";

function Hero() {
  return (
    <section  className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Hi, I’m <span className="highlight-name">Diya Rathore</span>
          </h1>
          <h2 className="role-title">
            Frontend Developer | Clean Coder | UI Enthusiast
          </h2>
          <p className="hero-description">
            I build responsive, accessible, and performance-driven websites
            using modern frontend tools like <strong>React.js</strong>,{" "}
            <strong>JavaScript</strong>, <strong>Tailwind CSS</strong>, and{" "}
            <strong>Redux</strong>.
          </p>
          <a
            href="/Resume/Diya_Rathore_Resume.pdf"
            className="resume-btn"
            download
          >
            Resume
          </a>
        </div>
        <div className="hero-image">
          <img src="/images/diya-image.png" alt="Diya Rathore" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
