import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/courses-tech-stack', label: 'Courses & Tech Stack' },
    { path: '/projects', label: 'Projects' },
    { path: '/resume', label: 'Resume' }
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        {navItems.map((item) => (
          <Link 
            key={item.path}
            to={item.path}
            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;