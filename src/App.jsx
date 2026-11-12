import projects from './projects.json';
import './App.css';

function App() {
  return (
    <>
      <header className="header">
        <div className="container header-content">
          <a href="#" className="logo">Jean-Daniel Poulain</a>
          <nav aria-label="Navigation principale">
            <ul className="nav-list">
              <li><a href="#projets">Projets</a></li>
              <li><a href="#competences">Compétences</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* SECTION HERO */}
        <section className="hero container">
          <h1>Intégrateur Web & Développeur Front-End</h1>
          <p className="hero-text">
            Passionné par la création d'interfaces web modernes, accessibles et performantes. 
            Issu du parcours Intégrateur Web d'OpenClassrooms, je transforme des maquettes en applications fluides.
          </p>
          <div className="hero-buttons">
            <a href="#projets" className="btn btn-primary">Voir mes projets</a>
            <a href="#contact" className="btn btn-secondary">Me contacter</a>
          </div>
        </section>

        {/* SECTION PROJETS */}
        <section id="projets" className="section container">
          <h2>Mes Projets</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card">
                <img 
                  src={project.image} 
                  alt={`Aperçu du projet ${project.title}`} 
                  loading="lazy"
                  width="600"
                  height="350"
                />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="tags-list">
                    {project.tags.map((tag, index) => (
                      <li key={index} className="tag">{tag}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-small">
                      Code GitHub
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-small btn-outline">
                        Démo Live
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION COMPÉTENCES */}
        <section id="competences" className="section bg-light">
          <div className="container">
            <h2>Compétences Techniques</h2>
            <div className="skills-grid">
              <div className="skill-box">
                <h3>Front-End</h3>
                <ul>
                  <li>HTML5 sémantique & CSS3</li>
                  <li>Sass / Flexbox / CSS Grid</li>
                  <li>JavaScript (ES6+)</li>
                  <li>React & Redux</li>
                </ul>
              </div>
              <div className="skill-box">
                <h3>Qualité & Performance</h3>
                <ul>
                  <li>Responsive Design (Mobile-First)</li>
                  <li>Optimisation SEO & Lighthouse</li>
                  <li>Accessibilité Web (WCAG)</li>
                  <li>Débogage & Tests (Chrome DevTools)</li>
                </ul>
              </div>
              <div className="skill-box">
                <h3>Outils & Workflow</h3>
                <ul>
                  <li>Git & GitHub</li>
                  <li>Intégration de maquettes Figma</li>
                  <li>Appels API REST / Swagger</li>
                  <li>Vite / npm</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION CONTACT */}
        <section id="contact" className="section container contact-section">
          <h2>Travaillons ensemble</h2>
          <p>Je suis actuellement disponible pour des opportunités en développement front-end ou intégration web.</p>
          <a href="mailto:jeandpoulain@gmail.com" className="btn btn-primary">
            M'envoyer un email
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Jean-Daniel Poulain — Tous droits réservés.</p>
          <div className="social-links">
            <a href="https://github.com/jeandpoulain-lgtm" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/jean-daniel-poulain-028397423/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;