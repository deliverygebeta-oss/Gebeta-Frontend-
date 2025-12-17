import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaAward, 
  FaUsers, 
  FaLightbulb, 
  FaHandshake,
  FaCheckCircle 
} from 'react-icons/fa';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies to deliver innovative solutions.'
    },
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'Quality and excellence are at the core of everything we do.'
    },
    {
      icon: <FaUsers />,
      title: 'Collaboration',
      description: 'We work closely with clients to understand and exceed their expectations.'
    },
    {
      icon: <FaHandshake />,
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and reliability.'
    }
  ];

  const achievements = [
    'Award-Winning Design Team',
    'Certified Cloud Solutions Partner',
    '24/7 Technical Support',
    'Agile Development Methodology',
    'Data Security & Privacy Compliant'
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Gebeta Technology Trading PLC</h2>
          <p>
            Your trusted technology partner in Ethiopia, delivering world-class solutions 
            that drive digital transformation and business growth.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Leading the Digital Revolution in Ethiopia</h3>
            <p>
              At Gebeta Tech, we're passionate about transforming businesses through technology. 
              Based in Ethiopia, we provide comprehensive tech solutions including website development, 
              mobile applications, and seamless app integrations for organizations and private companies.
            </p>
            <p>
              Our team of experienced developers, designers, and strategists work collaboratively 
              to deliver solutions that not only meet but exceed expectations. We understand the 
              unique challenges of the Ethiopian market and tailor our solutions accordingly.
            </p>
            <p>
              <strong>Coming Soon:</strong> We're excited to announce the upcoming launch of our 
              revolutionary delivery app platform, designed specifically for the Ethiopian market. 
              This platform will connect businesses with customers seamlessly, providing efficient 
              and reliable delivery services.
            </p>

            <div className="achievements-list">
              <h4>Our Achievements & Certifications</h4>
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="achievement-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <FaCheckCircle />
                    <span>{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-values"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Our Core Values</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="value-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="about-cta">
              <h4>Ready to Transform Your Business?</h4>
              <p>Let's discuss how we can help you achieve your goals.</p>
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;