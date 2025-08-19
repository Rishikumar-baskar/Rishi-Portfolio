import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'NXT Project',
      description: 'API management and documentation platform similar to Postman. This comprehensive tool allows developers to create, test, and document APIs efficiently with an intuitive user interface.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'API endpoint testing',
        'Request/Response documentation',
        'User-friendly interface',
        'Real-time API monitoring'
      ],
      status: 'Completed',
      type: 'Web Application'
    },
    {
      name: 'QVC Mobile Application',
      description: 'Mobile application developed for a finance insurance company in Qatar. The app provides comprehensive insurance management services with a focus on user experience and security.',
      technologies: ['Kony Visualizer'],
      features: [
        'Insurance policy management',
        'Claims processing',
        'Customer dashboard',
        'Secure payment integration',
        'Multi-language support'
      ],
      status: 'Deployed',
      type: 'Mobile Application'
    },
    {
      name: 'ShopperStop (eCommerce Website)',
      description: 'Full-stack eCommerce platform built with MERN stack. Features modern UI/UX design, secure payment processing, and comprehensive product management system.',
      technologies: ['MongoDB', 'Express.js', 'React JS', 'Node.js', 'Bootstrap', 'Stripe'],
      features: [
        'Product catalog with search and filters',
        'Shopping cart and wishlist',
        'Secure Stripe payment integration',
        'User authentication and profiles',
        'Order tracking and management',
        'Admin dashboard for inventory',
        'Responsive design with Bootstrap',
        'RESTful API architecture'
      ],
      status: 'Almost Complete',
      type: 'Full Stack Web Application',
      deployment: 'Netlify',
      versionControl: 'Git & GitHub'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return '#ec4899';
      case 'Deployed': return '#f472b6';
      case 'Almost Complete': return '#f9a8d4';
      default: return '#fce7f3';
    }
  };

  return (
    <div className="projects">
      <section className="page-header">
        <div className="glass-card">
          <h2 className="page-title">My Projects</h2>
          <p className="page-description">
            A showcase of my development work, ranging from API management tools to full-stack eCommerce platforms.
          </p>
        </div>
      </section>

      <section className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3 className="project-name">{project.name}</h3>
              <div className="project-meta">
                <span className="project-type">{project.type}</span>
                <span 
                  className="project-status"
                  style={{ backgroundColor: getStatusColor(project.status) }}
                >
                  {project.status}
                </span>
              </div>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="technologies-section">
              <h4>Technologies Used:</h4>
              <div className="tech-tags">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="features-section">
              <h4>Key Features:</h4>
              <ul className="features-list">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>

            {project.deployment && (
              <div className="deployment-info">
                <p><strong>Deployed on:</strong> {project.deployment}</p>
                {project.versionControl && (
                  <p><strong>Version Control:</strong> {project.versionControl}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="skills-summary">
        <div className="glass-card">
          <h3 className="section-title">Technical Expertise Demonstrated</h3>
          <div className="skills-grid">
            <div className="skill-area">
              <h4>Frontend Development</h4>
              <p>React.js, HTML5, CSS3, JavaScript ES6+, Bootstrap, Responsive Design</p>
            </div>
            <div className="skill-area">
              <h4>Backend Development</h4>
              <p>Node.js, Express.js, RESTful APIs, Database Design</p>
            </div>
            <div className="skill-area">
              <h4>Database Management</h4>
              <p>MongoDB, SQL, Data Modeling, Query Optimization</p>
            </div>
            <div className="skill-area">
              <h4>DevOps & Deployment</h4>
              <p>Git, GitHub, Netlify, Version Control, CI/CD</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;