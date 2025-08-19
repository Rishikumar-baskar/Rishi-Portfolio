import React from 'react';
import '../styles/CoursesAndTechStack.css';

const CoursesAndTechStack = () => {
  const certifications = [
    {
      name: 'Full Stack Web Development Bootcamp',
      issuer: 'Tech Institute',
      date: '2023',
      description: 'Comprehensive program covering MERN stack development'
    },
    {
      name: 'React.js Advanced Certification',
      issuer: 'React Academy',
      date: '2023',
      description: 'Advanced React patterns, hooks, and state management'
    },
    {
      name: 'JavaScript ES6+ Mastery',
      issuer: 'JavaScript Institute',
      date: '2022',
      description: 'Modern JavaScript features and best practices'
    },
    {
      name: 'Node.js Backend Development',
      issuer: 'Backend Masters',
      date: '2022',
      description: 'Server-side development with Node.js and Express'
    },
    {
      name: 'MongoDB Database Certification',
      issuer: 'MongoDB University',
      date: '2022',
      description: 'NoSQL database design and optimization'
    },
    {
      name: 'Git & GitHub Professional',
      issuer: 'Version Control Academy',
      date: '2021',
      description: 'Advanced version control and collaboration workflows'
    }
  ];

  const techStackWithLogos = [
    { name: 'HTML5', logo: '🌐', category: 'Frontend' },
    { name: 'CSS3', logo: '🎨', category: 'Frontend' },
    { name: 'JavaScript', logo: '⚡', category: 'Frontend' },
    { name: 'React JS', logo: '⚛️', category: 'Frontend' },
    { name: 'jQuery', logo: '💫', category: 'Frontend' },
    { name: 'AJAX', logo: '🔄', category: 'Frontend' },
    { name: 'Node.js', logo: '🟢', category: 'Backend' },
    { name: 'Express.js', logo: '🚂', category: 'Backend' },
    { name: 'MongoDB', logo: '🍃', category: 'Database' },
    { name: 'SQL', logo: '🗄️', category: 'Database' },
    { name: 'Bolt AI', logo: '🤖', category: 'Tools' },
    { name: 'Vercel', logo: '▲', category: 'Deployment' },
    { name: 'Netlify', logo: '🌊', category: 'Deployment' },
    { name: 'Git', logo: '📁', category: 'Version Control' },
    { name: 'GitHub', logo: '🐱', category: 'Version Control' }
  ];

  const categories = ['Frontend', 'Backend', 'Database', 'Tools', 'Deployment', 'Version Control'];

  return (
    <div className="courses-tech-stack">
      <section className="page-header">
        <div className="glass-card">
          <h2 className="page-title">Courses & Tech Stack</h2>
          <p className="page-description">
            A comprehensive overview of my certifications, courses completed, and the technologies I work with.
          </p>
        </div>
      </section>

      <section className="certifications-section">
        <div className="glass-card">
          <h3 className="section-title">Professional Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-header">
                  <h4 className="cert-name">{cert.name}</h4>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-description">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-stack-section">
        <div className="glass-card">
          <h3 className="section-title">Technology Stack</h3>
          {categories.map(category => (
            <div key={category} className="tech-category">
              <h4 className="category-title">{category}</h4>
              <div className="tech-items">
                {techStackWithLogos
                  .filter(tech => tech.category === category)
                  .map((tech, index) => (
                    <div key={index} className="tech-item-card">
                      <div className="tech-logo">{tech.logo}</div>
                      <span className="tech-name">{tech.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoursesAndTechStack;