import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
            <img src="/logo.png" alt="Gebeta Tech" className="logo-image" />
            <h2>Gebeta<span>Tech</span></h2>
          </div>

          <div className="navbar-right">
            <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
              <li><button type="button" onClick={() => scrollToSection('hero')}>Home</button></li>
              <li><button type="button" onClick={() => scrollToSection('services')}>Services</button></li>
              <li><button type="button" onClick={() => scrollToSection('about')}>About</button></li>
              <li><button type="button" onClick={() => scrollToSection('portfolio')}>Portfolio</button></li>
              <li><button type="button" onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>

            <button 
              className="btn btn-primary navbar-cta"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </button>
          </div>

          <div 
            className="mobile-menu-icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

