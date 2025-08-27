import React from 'react';
import '../styles/CoursesAndTechStack.css';

const CoursesAndTechStack = () => {
  const certifications = [
    {
      name: 'Responsive Web Design using HTML5 + CSS3',
      issuer: 'UDEMY',
      date: 'UC-84de786e-21d6-473c-bad4-76aa0794e9c6',
      description: 'Comprehensive course on responsive web design principles and implementation',
      certificateUrl: 'https://www.udemy.com/certificate/UC-84de786e-21d6-473c-bad4-76aa0794e9c6/'
    },
    {
      name: 'Javascript Basic for beginners',
      issuer: 'UDEMY',
      date: 'UC-5b063564-67dc-4a54-89cc-afb9c912d1a6',
      description: 'Fundamental JavaScript concepts and programming basics',
      certificateUrl: 'https://www.udemy.com/certificate/UC-5b063564-67dc-4a54-89cc-afb9c912d1a6/'
    },
    {
      name: 'Basics of Chrome developer tools',
      issuer: 'UDEMY',
      date: 'UC-3ddbccae-7288-456e-b7ec-1028c7a45f85',
      description: 'Mastery of Chrome DevTools for debugging and development',
      certificateUrl: 'https://www.udemy.com/certificate/UC-3ddbccae-7288-456e-b7ec-1028c7a45f85/'
    },
    {
      name: 'Plan and Execute better Software',
      issuer: 'UDEMY',
      date: 'UC-7155ef89-7072-4f08-a60c-39a023e68b89',
      description: 'Software planning and execution methodologies',
      certificateUrl: 'https://www.udemy.com/certificate/UC-7155ef89-7072-4f08-a60c-39a023e68b89/'
    },
    {
      name: 'Mern Stack(Full Stack)',
      issuer: 'Green Technologies',
      date: '2023',
      description: 'Complete MERN stack development certification'
    }
  ];

  const techStackWithLogos = [
    { name: 'HTML', logo: '🌐', category: 'Frontend', level: 90 },
    { name: 'CSS', logo: '🎨', category: 'Frontend', level: 85 },
    { name: 'JavaScript', logo: '⚡', category: 'Frontend', level: 90 },
    { name: 'TypeScript', logo: '📘', category: 'Frontend', level: 80 },
    { name: 'React-js', logo: '⚛️', category: 'Framework', level: 85 },
    { name: 'jQuery', logo: '💫', category: 'Frontend', level: 75 },
    { name: 'Bootstrap', logo: '🎯', category: 'Frontend', level: 80 },
    { name: 'Node.js', logo: '🟢', category: 'Backend', level: 75 },
    { name: 'Express.js', logo: '🚂', category: 'Backend', level: 70 },
    { name: 'MongoDB', logo: '🍃', category: 'Database', level: 70 },
    { name: 'SQL', logo: '🗄️', category: 'Database', level: 65 },
    { name: 'Visual Studio Code', logo: '💻', category: 'Development Tools', level: 90 },
    { name: 'Visual Studio', logo: '🖥️', category: 'Development Tools', level: 70 },
    { name: 'Cursor', logo: '🎯', category: 'Development Tools', level: 75 },
    { name: 'Git', logo: '📁', category: 'Version Control', level: 80 },
    { name: 'GitHub', logo: '🐱', category: 'Version Control', level: 80 },
    { name: 'Figma', logo: '🎨', category: 'Design Tools', level: 70 },
    { name: 'Kony Visualizer', logo: '📱', category: 'Mobile Development', level: 65 },
    { name: 'Bolt AI', logo: '🤖', category: 'AI Tools', level: 60 },
    { name: 'Lovable', logo: '❤️', category: 'AI Tools', level: 60 },
    { name: 'Cursor', logo: '🎯', category: 'AI Tools', level: 75 },

    { name: 'Vercel', logo: '▲', category: 'Deployment', level: 75 },
    { name: 'Netlify', logo: '🌊', category: 'Deployment', level: 75 }
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
                  <h4 className="cert-name">
                    {cert.certificateUrl ? (
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-link"
                      >
                        {cert.name} 🔗
                      </a>
                    ) : (
                      cert.name
                    )}
                  </h4>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-description">{cert.description}</p>
                {cert.certificateUrl && (
                  <p className="cert-note">
                    <small>Click the certificate name to view online</small>
                  </p>
                )}
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
                      <div className="tech-level">
                        <div
                          className="tech-level-fill"
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                      <span className="tech-percent">{tech.level}%</span>
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