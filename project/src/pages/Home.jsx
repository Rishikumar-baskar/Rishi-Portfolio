import React from 'react';
import '../styles/Home.css';

const Home = () => {
  const techStack = [
    { name: 'React', logo: '⚛️' },
    { name: 'JavaScript', logo: '🟨' },
    { name: 'Node.js', logo: '🟢' },
    { name: 'MongoDB', logo: '🍃' },
    { name: 'HTML', logo: '🔶' },
    { name: 'CSS', logo: '🎨' },
    { name: 'Express', logo: '🚂' },
    { name: 'Git', logo: '📁' }
  ];

  const projects = [
    {
      name: 'NXT Project',
      description: 'API management and documentation platform similar to Postman',
      technologies: 'HTML, CSS, JavaScript'
    },
    {
      name: 'QVC Mobile Application',
      description: 'Mobile application for a finance insurance company in Qatar',
      technologies: 'Kony Visualizer'
    },
    {
      name: 'ShopperStop (eCommerce Website)',
      description: 'Full-stack eCommerce platform with payment integration',
      technologies: 'MERN Stack, Stripe, Bootstrap'
    }
  ];

  return (
    <div className="home">
      <section className="hero-section">
        <div className="glass-card hero-card">
          <h2 className="hero-title">Welcome to My Portfolio</h2>
          <p className="hero-description">
            Full Stack Developer specializing in React.js with expertise in modern web technologies
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="glass-card">
          <h3 className="section-title">About Me</h3>
          <div className="about-content">
            <p>Hello! I'm Rishi Kumar, a passionate React developer with extensive experience in full-stack web development.</p>
            <div className="experience-grid">
              <div className="experience-item">
                <h4>Experience</h4>
                <p>3+ years as a developer</p>
              </div>
              <div className="experience-item">
                <h4>Education</h4>
                <p>Computer Science Graduate with excellent academic performance</p>
              </div>
              <div className="experience-item">
                <h4>Specialization</h4>
                <p>React.js Development & MERN Stack</p>
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