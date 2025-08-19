import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <section className="resume-header">
        <div className="glass-card">
          <div className="resume-title-section">
            <h2 className="resume-title">Rishi Kumar</h2>
            <p className="resume-subtitle">Full Stack Developer | React.js Specialist</p>
          </div>
        </div>
      </section>

      <div className="resume-content">
        <section className="resume-section">
          <div className="glass-card">
            <h3 className="section-title">Professional Summary</h3>
            <p className="summary-text">
              Experienced Full Stack Developer with 3+ years of expertise in modern web technologies, 
              specializing in React.js and MERN stack development. Proven track record of delivering 
              high-quality web applications and mobile solutions for diverse industries including 
              finance, insurance, and eCommerce.
            </p>
          </div>
        </section>

        <section className="resume-section">
          <div className="glass-card">
            <h3 className="section-title">Work Experience</h3>
            <div className="experience-item">
              <div className="experience-header">
                <h4>React Developer</h4>
                <span className="experience-duration">2021 - Present</span>
              </div>
              <p className="company-name">Various Technology Companies</p>
              <ul className="experience-details">
                <li>Developed and maintained React.js applications with modern hooks and state management</li>
                <li>Built full-stack applications using MERN stack (MongoDB, Express.js, React, Node.js)</li>
                <li>Integrated third-party APIs and payment gateways including Stripe</li>
                <li>Collaborated with cross-functional teams to deliver projects on time</li>
                <li>Implemented responsive designs and optimized applications for performance</li>
                <li>Developed mobile applications using Kony Visualizer for finance sector</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <div className="glass-card">
            <h3 className="section-title">Education</h3>
            <div className="education-item">
              <h4>Bachelor's Degree in Computer Science</h4>
              <p className="institution">University Name</p>
              <p className="education-details">
                <strong>Academic Performance:</strong> Excellent grades with distinction in programming courses
              </p>
              <p className="education-details">
                <strong>Relevant Coursework:</strong> Data Structures, Algorithms, Web Development, Database Systems, Software Engineering
              </p>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <div className="glass-card">
            <h3 className="section-title">Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend Technologies</h4>
                <ul>
                  <li>React.js (Advanced)</li>
                  <li>JavaScript ES6+</li>
                  <li>HTML5 & CSS3</li>
                  <li>jQuery & AJAX</li>
                  <li>Bootstrap</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Backend Technologies</h4>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>RESTful APIs</li>
                  <li>MongoDB</li>
                  <li>SQL Databases</li>
                  <li>Authentication & Security</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Development Tools</h4>
                <ul>
                  <li>Git & GitHub</li>
                  <li>Vercel & Netlify</li>
                  <li>Kony Visualizer</li>
                  <li>Bolt AI</li>
                  <li>VS Code</li>
                  <li>Postman</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Specializations</h4>
                <ul>
                  <li>MERN Stack Development</li>
                  <li>Payment Integration</li>
                  <li>Mobile App Development</li>
                  <li>API Development</li>
                  <li>Database Design</li>
                  <li>Version Control</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <div className="glass-card">
            <h3 className="section-title">Key Projects</h3>
            <div className="project-summary">
              <div className="project-item">
                <h4>ShopperStop eCommerce Platform</h4>
                <p>Full-stack MERN application with Stripe payment integration and admin dashboard</p>
              </div>
              <div className="project-item">
                <h4>QVC Mobile Application</h4>
                <p>Finance insurance mobile app for Qatar market using Kony Visualizer</p>
              </div>
              <div className="project-item">
                <h4>NXT API Management Tool</h4>
                <p>Postman-like application for API testing and documentation</p>
              </div>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <div className="glass-card">
            <h3 className="section-title">Certifications</h3>
            <div className="certifications-list">
              <div className="cert-item">
                <span className="cert-name">Full Stack Web Development Certification</span>
                <span className="cert-year">2023</span>
              </div>
              <div className="cert-item">
                <span className="cert-name">React.js Advanced Certification</span>
                <span className="cert-year">2023</span>
              </div>
              <div className="cert-item">
                <span className="cert-name">JavaScript ES6+ Mastery</span>
                <span className="cert-year">2022</span>
              </div>
              <div className="cert-item">
                <span className="cert-name">Node.js Backend Development</span>
                <span className="cert-year">2022</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;