import React from 'react';
import '../styles/Header.css';
import logo from "../Assets/Rishi.jpg";


const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="avatar-container">
          <img 
            src={logo}
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