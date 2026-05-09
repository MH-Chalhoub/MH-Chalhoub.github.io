import './App.css'

export default function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">🤖 GeoAI Engineer</div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>GeoAI Engineer</h1>
          <p>Bridging Geospatial Intelligence and Artificial Intelligence</p>
          <p className="subtitle">
            Building solutions for environmental monitoring, urban planning, and
            sustainable development using AI and geospatial analysis.
          </p>
          <div className="button-group">
            <button className="btn btn-primary">View My Work</button>
            <button className="btn btn-secondary">Get In Touch</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stat">
            <h3>15+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h3>20+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I'm a GeoAI Engineer specializing in combining artificial intelligence
            with geospatial technologies to solve real-world environmental and urban
            challenges.
          </p>
          <p>
            With 5+ years of experience, I've worked on projects ranging from satellite
            image analysis and climate impact assessment to smart city analytics and
            biodiversity monitoring systems.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>AI & Machine Learning</h3>
              <p>TensorFlow • PyTorch • scikit-learn • Deep Learning</p>
            </div>
            <div className="skill-card">
              <h3>Geospatial Analysis</h3>
              <p>QGIS • ArcGIS • PostGIS • Remote Sensing</p>
            </div>
            <div className="skill-card">
              <h3>Programming</h3>
              <p>Python • JavaScript/TypeScript • SQL • R</p>
            </div>
            <div className="skill-card">
              <h3>Data Science</h3>
              <p>Data Visualization • Statistical Analysis • ETL Pipelines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Urban Green Space Optimization</h3>
              <p>
                ML-powered satellite imagery analysis to optimize urban green spaces
                for air quality and biodiversity.
              </p>
              <div className="tags">
                <span>Python</span>
                <span>TensorFlow</span>
                <span>GIS</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Climate Change Impact Assessment</h3>
              <p>
                Predictive models assessing climate change impacts on coastal regions
                using historical climate data.
              </p>
              <div className="tags">
                <span>Machine Learning</span>
                <span>Remote Sensing</span>
                <span>R</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Land Use Classification AI</h3>
              <p>
                Automated land use classification system using deep learning on aerial
                imagery with 95% accuracy.
              </p>
              <div className="tags">
                <span>Deep Learning</span>
                <span>Computer Vision</span>
                <span>PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>
            Interested in collaborating or learning more about my work? Let's connect!
          </p>
          <div className="contact-info">
            <a href="mailto:hello@geoai-engineer.com" className="contact-link">
              📧 hello@geoai-engineer.com
            </a>
            <a href="https://linkedin.com" className="contact-link">
              💼 LinkedIn
            </a>
            <a href="https://github.com" className="contact-link">
              🐙 GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2024 GeoAI Engineer. Built with React and CSS.</p>
        </div>
      </footer>
    </div>
  )
}
