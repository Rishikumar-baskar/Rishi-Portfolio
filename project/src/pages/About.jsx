import React from 'react';
import '../styles/About.css';

const About = () => {
  const certifications = [
    'Full Stack Web Development Certification',
    'React.js Advanced Certification',
    'JavaScript ES6+ Certification',
    'Node.js Backend Development',
    'MongoDB Database Management',
    'Git & GitHub Version Control'
  ];

  const fullStackTech = [
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'React JS', category: 'Frontend' },
    { name: 'jQuery', category: 'Frontend' },
    { name: 'AJAX', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'SQL', category: 'Database' }
  ];

  const additionalTech = [
    'Bolt AI',
    'Vercel',
    'Netlify',
    'Git',
    'GitHub'
  ];

  return (
    <div className="about">
      <section className="intro-section">
        <div className="glass-card">
          <h2 className="page-title">About Rishi Kumar</h2>
          <p className="intro-text">
            I'm a dedicated Full Stack Developer with a passion for creating innovative web solutions. 
            My journey in software development spans over 3 years, during which I've honed my skills 
            in modern web technologies and delivered high-quality applications.
          </p>
        </div>
      </section>

      <section className="certifications-section">
        <div className="glass-card">
          <h3 className="section-title">Courses & Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <div className="cert-icon">🏆</div>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="glass-card">
          <h3 className="section-title">Full Stack Technologies</h3>
          <div className="skills-categories">
            {['Frontend', 'Backend', 'Database'].map(category => (
              <div key={category} className="skill-category">
                <h4 className="category-title">{category}</h4>
                <div className="skills-list">
                  {fullStackTech
                    .filter(tech => tech.category === category)
                    .map((tech, index) => (
                      <span key={index} className="skill-tag">{tech.name}</span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="additional-skills-section">
        <div className="glass-card">
          <h3 className="section-title">Additional Knowledge</h3>
          <div className="additional-skills">
            {additionalTech.map((tech, index) => (
              <div key={index} className="additional-skill">
                <span className="skill-name">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;