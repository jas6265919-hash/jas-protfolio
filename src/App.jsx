import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <nav>
        <h2>Jasmine</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <p className="hello">Hello, I'm</p>
          <h1>Jasmine</h1>
          <h2>ECE Student & Aspiring Developer</h2>

          <p>
            I am a passionate Electronics and Communication Engineering
            student interested in technology, programming and web development.
          </p>

          <a className="button" href="#projects">
            View My Projects
          </a>
        </div>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a B.E. Electronics and Communication Engineering student at
          Adithya Institute of Technology. I enjoy learning new technologies
          and building useful projects.
        </p>
      </section>

      <section id="skills">
        <h2>My Skills</h2>

        <div className="skills">
          <div>Python</div>
          <div>Java</div>
          <div>HTML & CSS</div>
          <div>React</div>
          <div>Git & GitHub</div>
          <div>Electronics</div>
        </div>
      </section>

      <section id="projects">
        <h2>My Projects</h2>

        <div className="project-card">
          <h3>Jasmine Portfolio</h3>
          <p>
            A personal portfolio website created using React to showcase my
            skills, projects and education.
          </p>
        </div>

        <div className="project-card">
          <h3>Ambulance Booking System</h3>
          <p>
            A project idea focused on helping users book ambulance services
            quickly during emergencies.
          </p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email:jas6265919@gmail.com</p>
        <p>Location: Tamil Nadu, India</p>
      </section>

      <footer>
        <p>© 2026 Jasmine | ECE Student</p>
      </footer>
    </div>
  );
}

export default App;