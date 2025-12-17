import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-orb"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="hero-badge"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Leading Tech Solutions in Ethiopia
            </motion.span>

            <h1>
              We build digital products that drive growth
            </h1>

            <p>
              From web apps to mobile solutions, we deliver modern technology 
              that helps your business thrive in the digital age.
            </p>

            <div className="hero-features">
              <div className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <span>Modern & Scalable</span>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <span>Fast Delivery</span>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <span>Expert Team</span>
              </div>
            </div>

            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToContact}>
                Get Started <FaArrowRight />
              </button>
              <button className="btn btn-secondary" onClick={scrollToServices}>
                View Services
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

