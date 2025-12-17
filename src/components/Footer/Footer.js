import React, { useState } from 'react';
import axios from 'axios';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight
} from 'react-icons/fa';
import './Footer.css';
import config from '../../config';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState({ type: '', message: '' });

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setNewsletterStatus({ type: '', message: '' });

    try {
      const response = await axios.post(`${config.apiUrl}/api/newsletter`, { email });
      
      if (response.data.success) {
        setNewsletterStatus({
          type: 'success',
          message: 'Successfully subscribed to our newsletter!'
        });
        setEmail('');
      }
    } catch (error) {
      setNewsletterStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to subscribe. Please try again.'
      });
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo-container">
              <img src="/logo.png" alt="Gebeta Tech" className="footer-logo-image" />
              <h3 className="footer-logo">Gebeta<span>Tech</span></h3>
            </div>
            <p>
              Leading technology solutions provider in Ethiopia. We transform 
              businesses through innovative web and mobile applications.
            </p>
            <div className="footer-social">
                <a href="#" className="social-icon"><FaFacebook /></a>
                <a href="#" className="social-icon"><FaTwitter /></a>
                <a href="#" className="social-icon"><FaLinkedin /></a>
                <a href="#" className="social-icon"><FaInstagram /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
              <li><a onClick={() => scrollToSection('services')}>Services</a></li>
              <li><a onClick={() => scrollToSection('about')}>About Us</a></li>
              <li><a onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#">Website Development</a></li>
              <li><a href="#">Mobile App Development</a></li>
              <li><a href="#">App Integration</a></li>
              <li><a href="#">E-Commerce Solutions</a></li>
              <li><a href="#">Cloud Solutions</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <FaMapMarkerAlt />
                <span>Addis Ababa, Ethiopia<br />Kirkos Subcity</span>
              </div>
              <div className="footer-contact-item">
                <FaPhone />
                <span>+251 919 444 499</span>
              </div>
              <div className="footer-contact-item">
                <FaEnvelope />
                <span>info@gebetatech.com</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to get the latest updates and offers.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">
                <FaArrowRight />
              </button>
            </form>
            {newsletterStatus.message && (
              <div className={`newsletter-status ${newsletterStatus.type}`}>
                {newsletterStatus.message}
              </div>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Gebeta Tech. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

