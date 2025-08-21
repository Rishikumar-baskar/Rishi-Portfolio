import React from 'react';
import '../styles/About.css';

const About = () => {
  const certifications = [
    'Responsive Web Design using HTML5 + CSS3',
    'Javascript Basic for beginners',
    'Basics of Chrome developer tools',
    'Plan and Execute better Software',
    'Mern Stack(Full Stack) - Green Technologies'
  ];

  const fullStackTech = [
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'React-js', category: 'Frontend' },
    { name: 'jQuery', category: 'Frontend' },
    { name: 'Bootstrap', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'SQL', category: 'Database' }
  ];

  const additionalTech = [
    'Visual Studio Code',
    'Visual Studio',
    'Cursor',
    'Git',
    'GitHub',
    'Figma',
    'Kony Visualizer',
    'Bolt AI',
    'Lovable',
    'Vercel',
    'Netlify'
  ];

  return (
    <div className="about">
      <section className="intro-section">
        <div className="glass-card">
          <h2 className="page-title">About Rishi Kumar</h2>
          <p className="intro-text">
            React Developer with 2+ years of experience in Redcaso Solutions with HTML, CSS, JavaScript, TypeScript, React Framework. 
            Strong UI design skills with Figma. Experienced in backend development and proficient with Bolt and Lovable AI tools. 
            Further strengthened coding, problem-solving, and Full-stack development abilities for building scalable web applications.
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
          <h3 className="section-title">Technical Skills</h3>
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
          <h3 className="section-title">Development Tools & Platforms</h3>
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