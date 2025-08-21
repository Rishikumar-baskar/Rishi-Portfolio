import React from 'react';
import '../styles/Home.css';

const Home = () => {
  const techStack = [
    { name: 'React', logo: '⚛️' },
    { name: 'JavaScript', logo: '🟨' },
    { name: 'TypeScript', logo: '📘' },
    { name: 'Node.js', logo: '🟢' },
    { name: 'MongoDB', logo: '🍃' },
    { name: 'HTML', logo: '🔶' },
    { name: 'CSS', logo: '🎨' },
    { name: 'Express', logo: '🚂' }
  ];

  const projects = [
    {
      name: 'NXT Platform',
      description: 'API validation, performance assessment, and debugging platform for developers',
      technologies: 'HTML, CSS, JavaScript, jQuery, AJAX'
    },
    {
      name: 'QFC Client',
      description: 'Digital banking application frontend for Android, iOS, and Web platforms',
      technologies: 'Kony Visualizer, JavaScript, Kony Fabric'
    },
    {
      name: 'ShoppersStop',
      description: 'Full-stack eCommerce platform with MERN stack and payment integration',
      technologies: 'MERN Stack, Stripe, Bootstrap, Redux'
    }
  ];

  return (
    <div className="home">
      <section className="hero-section">
        <div className="glass-card hero-card">
          <h2 className="hero-title">Welcome to My Portfolio</h2>
          <p className="hero-description">
            React Developer with 2+ years of experience specializing in modern web technologies and full-stack development
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="glass-card">
          <h3 className="section-title">About Me</h3>
          <div className="about-content">
            <p>Hello! I'm Rishi Kumar, a React Developer with 2+ years of experience at Redcaso Solutions. I specialize in HTML, CSS, JavaScript, TypeScript, and React Framework with strong UI design skills using Figma.</p>
            <div className="experience-grid">
              <div className="experience-item">
                <h4>Experience</h4>
                <p>2+ years at Redcaso Solutions</p>
              </div>
              <div className="experience-item">
                <h4>Education</h4>
                <p>Bachelor of Engineering from St.Joseph's College of Engineering (GPA: 7.6)</p>
              </div>
              <div className="experience-item">
                <h4>Specialization</h4>
                <p>React.js Development & Full-stack with MERN</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-section">
        <div className="glass-card">
          <h3 className="section-title">Tech Stack</h3>
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-item">
                <div className="tech-logo">{tech.logo}</div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="glass-card">
          <h3 className="section-title">Featured Projects</h3>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h4 className="project-name">{project.name}</h4>
                <p className="project-description">{project.description}</p>
                <span className="project-tech">{project.technologies}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;