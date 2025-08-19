import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import CoursesAndTechStack from './pages/CoursesAndTechStack';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="background-gradient"></div>
        <Header />
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses-tech-stack" element={<CoursesAndTechStack />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;