import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import profileImage from "../Assets/Rishi.jpg";
import web from '../Assets/webapp.avif'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const roles = ['React Developer', 'Full Stack Developer', 'UI/UX Enthusiast'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <section className="hero-section">
        <div className={`hero-card glass-card ${isVisible ? 'hero-visible' : ''}`}>
          <div className="hero-content">
            <div className="profile-container">
              <img
                src={profileImage}
                alt="Rishi Kumar"
                className="profile-image"
                loading="lazy"
              />
            </div>
            <div className="hero-text">
              <h1 className="hero-name">Rishi Kumar</h1>
              <div className="hero-role-container">
                <span className="hero-role-text">I'm a </span>
                <span className="hero-role">{roles[currentRoleIndex]}</span>
              </div>
              <p className="hero-description">
                React Developer with 2+ years of experience specializing in modern web technologies and full-stack development
              </p>
              <div className="hero-buttons">
                <a href="/projects" className="btn btn-primary">View My Work</a>
                <a href="/resume" className="btn btn-secondary">Get Resume</a>
              </div>
            </div>
          </div>
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

      <section
        className="parallax-section"
        style={{backgroundImage: `url(${web})`}}
      >
        <div className="parallax-overlay"></div>
        <div className="parallax-content">
          <h2>Creating Digital Experiences</h2>
          <p>With a passion for clean code and innovative solutions, I transform ideas into engaging digital products.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;