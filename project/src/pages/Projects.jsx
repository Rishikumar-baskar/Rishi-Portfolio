import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'NXT Platform',
      description: 'A robust solution for API validation, performance assessment, and debugging, enabling developers to analyze API interactions, monitor response times, and ensure seamless integration with multiple services.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'AJAX'],
      features: [
        'Enhanced UI responsiveness with interactive components',
        'Dynamic features (animations, modals, tooltips, carousels) with jQuery',
        'Real-time data fetching with AJAX (30% load interruption reduction)',
        'Seamless API integration with backend teams',
        'Custom jQuery plugins for standardized UI features',
        'Cross-browser compatibility and mobile responsiveness',
        'UI bugs resolution using Chrome DevTools'
      ],
      status: 'Completed',
      type: 'Web Application',
      company: 'Redcaso Solutions',
      duration: 'May 2023 - Present',
      location: 'Chennai'
    },
    {
      name: 'QFC Client',
      description: 'A secure, user-friendly digital banking application frontend built using Kony Visualizer and JavaScript, delivering seamless banking experiences across Android, iOS, and Web platforms.',
      technologies: ['Kony Visualizer', 'JavaScript', 'Kony Fabric'],
      features: [
        'Responsive UI screens for core banking features',
        'Custom widgets and reusable UI components',
        'Event-driven interactions with JavaScript and Kony Fabric',
        'Cross-platform compatibility (Android, iOS, Web)',
        'Banking security regulations compliance',
        'Accessibility standards implementation'
      ],
      status: 'Deployed',
      type: 'Mobile Application',
      company: 'Redcaso Solutions',
      duration: 'Apr 2024 - Present',
      location: 'Chennai'
    },
    {
      name: 'ShoppersStop',
      description: 'Personal e-commerce website using MERN stack featuring responsive product catalog, shopping cart, secure checkout, and admin dashboard for managing products and orders.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Bcrypt', 'HTML5', 'CSS', 'JavaScript', 'Stripe/PayPal', 'Git', 'GitHub', 'Postman'],
      features: [
        'Responsive product catalog with search and filters',
        'Shopping cart and secure checkout with Stripe/PayPal',
        'User authentication and profiles with JWT',
        'Admin dashboard for product and order management',
        'Product search and filter with Redux state management',
        'Interactive price slider and real-time notifications',
        'RESTful APIs for product management and authentication',
        'Optimized database queries in MongoDB',
        'Pagination and performance optimization'
      ],
      status: 'In Progress (70% Complete)',
      type: 'Full Stack Web Application',
      company: 'Personal Project',
      duration: 'May 2025 - Present',
      deployment: 'Final deployment in progress',
      versionControl: 'Git & GitHub'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return '#3b82f6';
      case 'Deployed': return '#60a5fa';
      case 'In Progress (70% Complete)': return '#93c5fd';
      default: return '#dbeafe';
    }
  };

  return (
    <div className="projects">
      <section className="page-header">
        <div className="glass-card">
          <h2 className="page-title">My Projects</h2>
          <p className="page-description">
            A showcase of my development work at Redcaso Solutions and ShoppersStop, ranging from API management tools to full-stack eCommerce platforms.
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

            <div className="deployment-info">
              <p><strong>Company:</strong> {project.company}</p>
              <p><strong>Duration:</strong> {project.duration}</p>
              <p><strong>Location:</strong> {project.location}</p>
              {project.deployment && (
                <p><strong>Deployment:</strong> {project.deployment}</p>
              )}
              {project.versionControl && (
                <p><strong>Version Control:</strong> {project.versionControl}</p>
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="skills-summary">
        <div className="glass-card">
          <h3 className="section-title">Technical Expertise Demonstrated</h3>
          <div className="skills-grid">
            <div className="skill-area">
              <h4>Frontend Development</h4>
              <p>React.js, HTML5, CSS3, JavaScript, TypeScript, jQuery, Bootstrap, Responsive Design</p>
            </div>
            <div className="skill-area">
              <h4>Backend Development</h4>
              <p>Node.js, Express.js, RESTful APIs, JWT Authentication, Bcrypt</p>
            </div>
            <div className="skill-area">
              <h4>Database Management</h4>
              <p>MongoDB, SQL, Data Modeling, Query Optimization</p>
            </div>
            <div className="skill-area">
              <h4>Mobile Development</h4>
              <p>Kony Visualizer, Cross-platform Development, Banking Applications</p>
            </div>
            <div className="skill-area">
              <h4>DevOps & Tools</h4>
              <p>Git, GitHub, Postman, Chrome DevTools, Figma, Bolt AI, Lovable</p>
            </div>
            <div className="skill-area">
              <h4>Payment Integration</h4>
              <p>Stripe, PayPal, Secure Checkout, E-commerce Solutions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;