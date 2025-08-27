import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      title: 'Email',
      value: 'rishibaskar2001@gmail.com.com',
      icon: '📧'
    },
    {
      title: 'Phone',
      value: '+91 9150362196',
      icon: '📱'
    },
    {
      title: 'Location',
      value: 'Chennai, India',
      icon: '📍'
    },
    {
      title: 'LinkedIn',
      value: 'www.linkedin.com/in/rishi-kumar-99156b1ab',
      icon: '🔗',
      link: 'https://www.linkedin.com/in/rishi-kumar-99156b1ab'

    },
    {
      title: 'GitHub',
      value: 'https://github.com/Rishikumar-baskar',
      icon: '💻',
      link: 'https://github.com/Rishikumar-baskar'
    }
  ];

  return (
    <div className="contact">
      <section className="page-header">
        <div className="glass-card">
          <h2 className="page-title">Get In Touch</h2>
          <p className="page-description">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>
      </section>

      <div className="contact-content">
        <section className="contact-form-section">
          <div className="glass-card">
            <h3 className="section-title">Send Me a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  rows="5"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="form-success">
                  <p>✅ Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}
            </form>
          </div>
        </section>

        <section className="contact-info-section">
          <div className="glass-card">
            <h3 className="section-title">Contact Information</h3>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;