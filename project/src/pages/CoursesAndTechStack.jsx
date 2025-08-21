import React from 'react';
import '../styles/CoursesAndTechStack.css';

const CoursesAndTechStack = () => {
  const certifications = [
    {
      name: 'Responsive Web Design using HTML5 + CSS3',
      issuer: 'UDEMY',
      date: 'UC-84de786e-21d6-473c-bad4-76aa0794e9c6',
      description: 'Comprehensive course on responsive web design principles and implementation'
    },
    {
      name: 'Javascript Basic for beginners',
      issuer: 'UDEMY',
      date: 'UC-5b063564-67dc-4a54-89cc-afb9c912d1a6',
      description: 'Fundamental JavaScript concepts and programming basics'
    },
    {
      name: 'Basics of Chrome developer tools',
      issuer: 'UDEMY',
      date: 'UC-3ddbccae-7288-456e-b7ec-1028c7a45f85',
      description: 'Mastery of Chrome DevTools for debugging and development'
    },
    {
      name: 'Plan and Execute better Software',
      issuer: 'UDEMY',
      date: 'UC-7155ef89-7072-4f08-a60c-39a023e68b89',
      description: 'Software planning and execution methodologies'
    },
    {
      name: 'Mern Stack(Full Stack)',
      issuer: 'Green Technologies',
      date: '2023',
      description: 'Complete MERN stack development certification'
    }
  ];

  const techStackWithLogos = [
    { name: 'HTML', logo: '🌐', category: 'Frontend' },
    { name: 'CSS', logo: '🎨', category: 'Frontend' },
    { name: 'JavaScript', logo: '⚡', category: 'Frontend' },
    { name: 'TypeScript', logo: '📘', category: 'Frontend' },
    { name: 'React-js', logo: '⚛️', category: 'Framework' },
    { name: 'jQuery', logo: '💫', category: 'Frontend' },
    { name: 'Bootstrap', logo: '🎯', category: 'Frontend' },
    { name: 'Node.js', logo: '🟢', category: 'Backend' },
    { name: 'Express.js', logo: '🚂', category: 'Backend' },
    { name: 'MongoDB', logo: '🍃', category: 'Database' },
    { name: 'SQL', logo: '🗄️', category: 'Database' },
    { name: 'Visual Studio Code', logo: '💻', category: 'Development Tools' },
    { name: 'Visual Studio', logo: '🖥️', category: 'Development Tools' },
    { name: 'Git', logo: '📁', category: 'Version Control' },
    { name: 'GitHub', logo: '🐱', category: 'Version Control' },
    { name: 'Figma', logo: '🎨', category: 'Design Tools' },
    { name: 'Kony Visualizer', logo: '📱', category: 'Mobile Development' },
    { name: 'Bolt AI', logo: '🤖', category: 'AI Tools' },
    { name: 'Lovable', logo: '❤️', category: 'AI Tools' },
    { name: 'Vercel', logo: '▲', category: 'Deployment' },
    { name: 'Netlify', logo: '🌊', category: 'Deployment' }
  ];

  const categories = ['Framework', 'Frontend', 'Backend', 'Database', 'Development Tools', 'Version Control', 'Design Tools', 'Mobile Development', 'AI Tools', 'Deployment'];

  return (
    <div className="courses-tech-stack">
      <section className="page-header">
        <div className="glass-card">
          <h2 className="page-title">Courses & Tech Stack</h2>
          <p className="page-description">
            A comprehensive overview of my certifications, courses completed, and the technologies I work with at Redcaso Solutions and ShoppersStop.
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