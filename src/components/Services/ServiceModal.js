import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCheck, FaArrowRight } from 'react-icons/fa';
import './ServiceModal.css';

const ServiceModal = ({ service, isOpen, onClose }) => {
  if (!service) return null;

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Modal */}
          <motion.div
            className="service-modal"
            initial={{ opacity: 0, scale: 0.7, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 50 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}>
              <FaTimes />
            </button>

            <div className="modal-header">
              <div className="modal-icon">
                {service.icon}
              </div>
              <div>
                <h2>{service.title}</h2>
                {service.badge && (
                  <span className="modal-badge">{service.badge}</span>
                )}
              </div>
            </div>

            <div className="modal-content">
              <div className="modal-section">
                <h3>📋 Overview</h3>
                <p>{service.detailedDescription}</p>
              </div>

              <div className="modal-section">
                <h3>✨ Key Features</h3>
                <ul className="modal-features-list">
                  {service.detailedFeatures?.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheck className="check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3>🎯 Perfect For</h3>
                <div className="perfect-for-grid">
                  {service.perfectFor?.map((item, idx) => (
                    <div key={idx} className="perfect-for-item">
                      <FaArrowRight className="arrow-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3>💼 What You Get</h3>
                <ul className="deliverables-list">
                  {service.deliverables?.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {service.technologies && (
                <div className="modal-section">
                  <h3>🛠️ Technologies We Use</h3>
                  <div className="tech-tags">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="modal-section pricing-section">
                <h3>💰 Investment</h3>
                <p className="pricing-text">{service.pricing}</p>
              </div>

              <div className="modal-section">
                <h3>⏱️ Timeline</h3>
                <p className="timeline-text">{service.timeline}</p>
              </div>

              <div className="modal-cta">
                <p>Ready to get started with {service.title}?</p>
                <button className="btn btn-primary" onClick={scrollToContact}>
                  Request a Quote <FaArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;

