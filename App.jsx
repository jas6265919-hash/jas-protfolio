import React from "react";
import "./App.css";
import jas from "./assets/jas.png";

function App() {
  return (
    <div className="portfolio">

      <nav className="navbar">
        <h2>Jasmine</h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">

        <div className="hero-text">
          <p className="small-title">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Jasmine</span>
          </h1>

          <h2>ECE Student | Web Developer</h2>

          <p>
            I am passionate about technology, web development
            and creating useful digital solutions.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn">
              View My Work
            </a>

            <a href="#contact" className="btn outline">
              Contact Me
            </a>
          </div>
        </div>

        {/* MY PHOTO */}
        <div className="hero-image">
          <img src={jas} alt="Jasmine" />
        </div>

      </section>

      <section id="about" className="section">
        <p className="section-subtitle">GET TO KNOW ME</p>
        <h2>About Me</h2>

        <div className="about-box">
          <div>
            <h3>Hello! I'm Jasmine 👋</h3>

            <p>
              I am a B.E. Electronics and Communication Engineering
              student at Adithya Institute of Technology.
            </p>

            <p>
              I am interested in web development, programming and
              learning new technologies.
            </p>
          </div>

          <div className="education">
            <h3>Education</h3>
            <p>
              <strong>
                B.E. Electronics and Communication Engineering
              </strong>
            </p>
            <p>Adithya Institute of Technology</p>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <p className="section-subtitle">WHAT I KNOW</p>
        <h2>My Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <span>💻</span>
            <h3>HTML</h3>
            <p>Web Development</p>
          </div>

          <div className="skill-card">
            <span>🎨</span>
            <h3>CSS</h3>
            <p>Web Styling</p>
          </div>

          <div className="skill-card">
            <span>⚡</span>
            <h3>JavaScript</h3>
            <p>Programming</p>
          </div>

          <div className="skill-card">
            <span>⚛️</span>
            <h3>React</h3>
            <p>Frontend Development</p>
          </div>

          <div className="skill-card">
            <span>🐍</span>
            <h3>Python</h3>
            <p>Programming</p>
          </div>

          <div className="skill-card">
            <span>©️</span>
            <h3>C Programming</h3>
            <p>Programming</p>
          </div>

        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-subtitle">MY RECENT WORK</p>
        <h2>Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <div className="project-icon">🚑</div>
            <h3>Ambulance Booking System</h3>
            <p>
              A project designed to help users book an ambulance
              quickly during emergency situations.
            </p>
            <span>Web Development</span>
          </div>

          <div className="project-card">
            <div className="project-icon">🤖</div>
            <h3>ArcFace Intelligent Recognition</h3>
            <p>
              An intelligent recognition project based on
              artificial intelligence techniques.
            </p>
            <span>AI / ML</span>
          </div>

          <div className="project-card">
            <div className="project-icon">🌐</div>
            <h3>Personal Portfolio</h3>
            <p>
              A responsive portfolio website created using React.
            </p>
            <span>React</span>
          </div>

        </div>
      </section>

      <section id="certificates" className="section">
        <p className="section-subtitle">MY ACHIEVEMENTS</p>
        <h2>Certificates</h2>

        <div className="certificate-box">

          <div className="certificate-card">
            <h3>Certificate 1</h3>
            <p>My Certification</p>

            <a
              href="/certificates/certificate1.jpeg"
              target="_blank"
              rel="noreferrer"
            >
              View Certificate
            </a>
          </div>

          <div className="certificate-card">
            <h3>Certificate 2</h3>
            <p>My Certification</p>

            <a
              href="/certificates/certificate2.jpeg"
              target="_blank"
              rel="noreferrer"
            >
              View Certificate
            </a>
          </div>

        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="section-subtitle">GET IN TOUCH</p>
        <h2>Let's Connect</h2>

        <p>
          Feel free to contact me for opportunities,
          projects or collaboration.
        </p>

        <div className="contact-info">
          <p>📧 jas6265919@gmail.com</p>
          <p>🎓 B.E. ECE Student</p>
          <p>📍 Tamil Nadu, India</p>
        </div>
      </section>

      <footer>
        <h3>Jasmine</h3>
        <p>ECE Student | Web Developer</p>
        <p>© 2026 Jasmine. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;