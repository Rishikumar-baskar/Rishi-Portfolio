import React, { useState } from 'react';
import '../styles/Resume.css';

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });

  const handleStartProject = () => {
    console.log('Opening modal...');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log('Closing modal...');
    setIsModalOpen(false);
    setFormData({
      name: '',
      email: '',
      description: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email body with form data
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.description}
    `;

    // Open email client with form data
    window.open(
      `mailto:rishibaskar2001@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(emailBody)}`,
      '_blank'
    );

    // Close modal and reset form
    handleCloseModal();
  };

  return (
    <div className="resume">
      <section className="resume-header">
        <div className="glass-card">
          <div className="resume-title-section">
            <h2 className="resume-title">RISHI KUMAR</h2>
            <p className="resume-subtitle">React Developer | Redcaso Solutions | ShoppersStop</p>
          </div>
        </div>
      </section>

      <div className="resume-content">
        <section className="resume-section">
          <div className="glass-card">
            <h3 className="section-title">Experience Summary</h3>
            <p className="summary-text">
              React Developer with 2+ years of experience in Redcaso Solutions with HTML, CSS, JavaScript, TypeScript, React Framework. 
              Strong UI design skills with Figma. Experienced in backend development and proficient with Bolt and Lovable AI tools. 
              Further strengthened coding, problem-solving, and Full-stack development abilities for building scalable web applications.
            </p>
          </div>
        </section>

        <section className="resume-section">
          <div className="glass-card">
            <h3 className="section-title">Work Experience</h3>
            
            <div className="experience-item">
              <div className="experience-header">
                <h4>NXT Platform</h4>
                <span className="experience-duration">May 2023 - Present</span>
              </div>
              <p className="company-name">Redcaso Solutions, Chennai</p>
              <ul className="experience-details">
                <li>A robust solution for API validation, performance assessment, and debugging, enabling developers to analyze API interactions, monitor response times, and ensure seamless integration with multiple services.</li>
                <li>Enhanced UI responsiveness by designing and developing interactive components using HTML, CSS, JavaScript, and jQuery, improving page load performance and user engagement.</li>
                <li>Boosted user interaction by implementing dynamic features (animations, modals, tooltips, carousels) with jQuery, resulting in a smoother and more engaging interface.</li>
                <li>Improved application efficiency by integrating AJAX to fetch and display real-time data without page reloads, reducing load interruptions by 30%.</li>
                <li>Partnered with backend teams to deliver seamless API integration, ensuring accurate and fast data rendering across the platform.</li>
                <li>Created custom jQuery plugins to standardize UI features and reduce repetitive code, improving maintainability and development speed.</li>
                <li>Ensured cross-browser compatibility and mobile responsiveness, achieving consistent performance across devices.</li>
                <li>Resolved UI bugs and performance bottlenecks using Chrome DevTools and browser debugging tools, enhancing platform stability.</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h4>QFC Client</h4>
                <span className="experience-duration">Apr 2024 - Present</span>
              </div>
              <p className="company-name">Redcaso Solutions, Chennai</p>
              <ul className="experience-details">
                <li>A secure, user-friendly digital banking application frontend built using Kony Visualizer and JavaScript, delivering seamless banking experiences across Android, iOS, and Web platforms.</li>
                <li>Designed and developed responsive UI screens in Kony Visualizer, focusing on core banking features like transactions, account management, and customer engagement, resulting in an intuitive user experience.</li>
                <li>Built custom widgets and reusable UI components, improving design consistency and reducing development time for future enhancements.</li>
                <li>Implemented event-driven interactions with JavaScript and Kony Fabric, enabling smooth navigation and improving application performance.</li>
                <li>Optimized UI for cross-platform compatibility, ensuring seamless functionality and consistent performance on mobile (Android, iOS) and web applications.</li>
                <li>Debugged and resolved UI/UX issues, ensuring compliance with banking security regulations and accessibility standards, enhancing both security and usability.</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h4>ShoppersStop</h4>
                <span className="experience-duration">May 2025 - Present</span>
              </div>
              <p className="company-name">ShoppersStop, Chennai</p>
              <ul className="experience-details">
                <li>Developed a Personal e-commerce website using the MERN stack (MongoDB, Express.js, React.js, Node.js), featuring a responsive product catalog, shopping cart, secure checkout, and an admin dashboard for managing products and orders.</li>
                <li>Designed and built responsive UI components with React.js leveraging React Hooks (useState, useEffect, useContext etc..) for state management, data fetching, and improved component reusability.</li>
                <li>Integrated payment gateway and authentication features, enhancing transaction security and user trust.</li>
                <li>Developed a product search and filter page using React.js and Redux, enabling users to search products by keyword and apply dynamic filters such as price range, category, and ratings.</li>
                <li>Implemented state management with Redux and integrated RESTFUL APIs to fetch products based on applied filters and pagination.</li>
                <li>Designed responsive UI with Bootstrap and enhanced UX by adding pagination, interactive price slider, and real-time notifications using react-toastify.</li>
                <li>Utilized React Hooks for managing component state, fetching data, and handling route-based search queries.</li>
                <li>Ensured scalability and performance by efficiently handling large product lists with pagination and optimized API calls.</li>
                <li>Implemented RESTful APIs with Node.js and Express.js for product management, user authentication, and order handling.</li>
                <li>Optimized database queries in MongoDB and applied performance best practices to improve application speed and scalability.</li>
                <li>Currently working on final deployment and performance optimization (70% project completion).</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <div className="glass-card">
            <h3 className="section-title">Educational Qualification</h3>
            <div className="education-item">
              <h4>Bachelor of Engineering</h4>
              <p className="institution">St.Joseph's College of Engineering</p>
              <p className="education-details">
                <strong>GPA:</strong> 7.6
              </p>
              <p className="education-details">
                <strong>Duration:</strong> 2018-2022
              </p>
              <p className="education-details">
                <strong>Location:</strong> Chennai
              </p>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <div className="glass-card">
            <h3 className="section-title">Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Framework</h4>
                <ul>
                  <li>React-js</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Frontend</h4>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>jQuery</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Database</h4>
                <ul>
                  <li>SQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Backend</h4>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Development Tools & Platforms</h4>
                <ul>
                  <li>Visual Studio Code</li>
                  <li>Visual Studio</li>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>Figma</li>
                  <li>Kony Visualizer</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>AI Tools</h4>
                <ul>
                  <li>Bolt AI</li>
                  <li>Lovable</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Deployment</h4>
                <ul>
                  <li>Vercel</li>
                  <li>Netlify</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <div className="glass-card">
            <h3 className="section-title">Certifications</h3>
            <div className="certifications-list">
              <div className="cert-item">
                <span className="cert-name">Responsive Web Design using HTML5 + CSS3</span>
                <span className="cert-year">UDEMY</span>
              </div>
              <div className="cert-item">
                <span className="cert-name">Javascript Basic for beginners</span>
                <span className="cert-year">UDEMY</span>
              </div>
              <div className="cert-item">
                <span className="cert-name">Basics of Chrome developer tools</span>
                <span className="cert-year">UDEMY</span>
              </div>
              <div className="cert-item">
                <span className="cert-name">Plan and Execute better Software</span>
                <span className="cert-year">UDEMY</span>
              </div>
              <div className="cert-item">
                <span className="cert-name">Mern Stack(Full Stack)</span>
                <span className="cert-year">Green Technologies</span>
              </div>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <div className="glass-card">
            <div className="start-project-section">
              <h3 className="section-title">Ready to Start a Project?</h3>
              <p className="project-description">
                I'm available for new opportunities and exciting projects. Let's discuss how I can help bring your ideas to life!
              </p>
              <button className="start-project-btn" onClick={handleStartProject}>
                Start a Project
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Form Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Get In Touch</h3>
              <button className="modal-close" onClick={handleCloseModal}>×</button>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="description">Message</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell me about your project..."
                  rows="5"
                ></textarea>
              </div>
              
              <div className="form-actions">
                <button type="button" className="btn-secondary" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;