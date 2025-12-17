import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Portfolio.css';

const portfolioData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-featured online shopping platform with payment integration and inventory management.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#'
  },
  {
    id: 2,
    title: 'Restaurant Mobile App',
    category: 'Mobile App',
    description: 'iOS and Android app for restaurant ordering with real-time tracking and payments.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    technologies: ['React Native', 'Firebase', 'Stripe'],
    link: '#'
  },
  {
    id: 3,
    title: 'Corporate Website',
    category: 'Web Development',
    description: 'Modern, responsive corporate website with CMS integration and SEO optimization.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    link: '#'
  },
  {
    id: 4,
    title: 'Healthcare Management System',
    category: 'Integration',
    description: 'Integrated healthcare platform connecting patients, doctors, and pharmacies.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'API Integration'],
    link: '#'
  },
  {
    id: 5,
    title: 'Fitness Tracking App',
    category: 'Mobile App',
    description: 'Cross-platform fitness app with workout tracking, nutrition planning, and social features.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
    technologies: ['Flutter', 'Firebase', 'REST API'],
    link: '#'
  },
  {
    id: 6,
    title: 'Real Estate Portal',
    category: 'Web Development',
    description: 'Property listing platform with advanced search, virtual tours, and agent management.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    technologies: ['React', 'Express', 'PostgreSQL', 'AWS'],
    link: '#'
  }
];

const categories = ['All', 'Web Development', 'Mobile App', 'Integration'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? portfolioData 
    : portfolioData.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="portfolio">
      <div className="wide-container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Portfolio</h2>
          <p>
            Explore our recent projects and see how we've helped businesses 
            achieve their digital goals with innovative solutions.
          </p>
        </motion.div>

        <motion.div 
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-links">
                    <a href={project.link} className="portfolio-link">
                      <FaExternalLinkAlt />
                    </a>
                    <a href={project.link} className="portfolio-link">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>

              <div className="portfolio-content">
                <span className="portfolio-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="portfolio-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

