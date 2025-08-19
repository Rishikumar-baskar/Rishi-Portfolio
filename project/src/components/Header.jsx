import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="avatar-container">
          <img 
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face"
            alt="Rishi Kumar"
            className="avatar"
          />
        </div>
        <h1 className="portfolio-title">Rishi Kumar's Portfolio</h1>
      </div>
    </header>
  );
};

export default Header;