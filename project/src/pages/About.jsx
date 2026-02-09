import React from 'react';
import '../styles/About.css';
import profileImage from "../Assets/Rishi.png";

const About = () => {
  const personalInfo = {
    name: "Rishi Kumar",
    title: "React Developer & Full Stack Engineer",
    location: "Chennai, India",
    email: "rishibaskar2001@gmail.com",
    phone: "+91 9150362196",
    about: "I'm a passionate React Developer with over 2 years of experience creating modern web applications. I specialize in building responsive, user-friendly interfaces with React and have a strong foundation in full-stack development. I love solving complex problems and turning ideas into reality through code."
  };

  const certifications = [
    { name: 'Responsive Web Design using HTML5 + CSS3', issuer: 'Coursera', date: '2022' },
    { name: 'Javascript Basic for beginners', issuer: 'Udemy', date: '2021' },
    { name: 'Basics of Chrome developer tools', issuer: 'Google', date: '2021' },
    { name: 'Plan and Execute better Software', issuer: 'edX', date: '2022' },
    { name: 'Mern Stack(Full Stack) - Green Technologies', issuer: 'Green Technologies', date: '2023' }
  ];

  const fullStackTech = [
    { name: 'HTML', category: 'Frontend', level: 90 },
    { name: 'CSS', category: 'Frontend', level: 85 },
    { name: 'JavaScript', category: 'Frontend', level: 90 },
    { name: 'TypeScript', category: 'Frontend', level: 80 },
    { name: 'React-js', category: 'Frontend', level: 85 },
    { name: 'jQuery', category: 'Frontend', level: 75 },
    { name: 'Bootstrap', category: 'Frontend', level: 80 },
    { name: 'Node.js', category: 'Backend', level: 75 },
    { name: 'Express.js', category: 'Backend', level: 70 },
    { name: 'MongoDB', category: 'Database', level: 70 },
    { name: 'SQL', category: 'Database', level: 65 }
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

  const interests = [
    'Open Source Contribution',
    'UI/UX Design',
    'Technical Blogging',
    'Mentoring Junior Developers',
    'Learning New Technologies'
  ];

  return (
    <div className="about">
      <div className="about-content-wrapper">
        <section className="personal-intro-section">
          <div className="glass-card personal-intro-card">
            <div className="personal-intro-content">
              <div className="profile-image-container">
                <img src={profileImage} alt={personalInfo.name} className="profile-image" loading="lazy" />
              </div>
              <div className="personal-details">
                <h2 className="page-title">{personalInfo.name}</h2>
                <h3 className="personal-title">{personalInfo.title}</h3>
                <p className="personal-location">{personalInfo.location}</p>
                <p className="personal-about">{personalInfo.about}</p>
                <div className="contact-info">
                  <p><strong>Email:</strong> {personalInfo.email}</p>
                  <p><strong>Phone:</strong> {personalInfo.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="certifications-section">
          <div className="glass-card">
            <h3 className="section-title">Courses & Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <div className="cert-icon">🏆</div>
                  <div className="cert-details">
                    <h4 className="cert-name">{cert.name}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-date">{cert.date}</p>
                  </div>
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
                        <div key={index} className="skill-item">
                          <span className="skill-name">{tech.name}</span>
                          <div className="skill-level">
                            <div 
                              className="skill-level-fill" 
                              style={{width: `${tech.level}%`}}
                            ></div>
                          </div>
                          <span className="skill-percent">{tech.level}%</span>
                        </div>
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

        <section className="interests-section">
          <div className="glass-card">
            <h3 className="section-title">Personal Interests</h3>
            <div className="interests-grid">
              {interests.map((interest, index) => (
                <div key={index} className="interest-item">
                  <span className="interest-name">❤️ {interest}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;