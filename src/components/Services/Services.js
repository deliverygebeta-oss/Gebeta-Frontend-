import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaPlug, 
  FaTruck, 
  FaShoppingCart, 
  FaCloud 
} from 'react-icons/fa';
import ServiceModal from './ServiceModal';
import './Services.css';

const servicesData = [
  {
    icon: <FaLaptopCode />,
    title: 'Website Development',
    description: 'Custom, responsive websites built with modern technologies. From corporate sites to complex web applications, we deliver excellence.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Modern UI/UX'],
    detailedDescription: 'Transform your online presence with our cutting-edge website development services. We create stunning, responsive websites that not only look great but perform exceptionally. From simple landing pages to complex web applications, our team delivers solutions that drive results and exceed expectations.',
    detailedFeatures: [
      'Fully responsive design that works on all devices',
      'SEO optimization for better search rankings',
      'Lightning-fast performance and loading times',
      'Modern, intuitive UI/UX design',
      'Content Management System (CMS) integration',
      'E-commerce functionality',
      'Custom admin dashboards',
      'Third-party API integrations',
      'Security best practices implemented',
      'Regular updates and maintenance'
    ],
    perfectFor: [
      'Startups & New Businesses',
      'Corporate Websites',
      'E-commerce Stores',
      'Portfolio Sites',
      'Blog & Content Platforms',
      'Web Applications'
    ],
    deliverables: [
      'Fully functional website',
      'Responsive design (mobile, tablet, desktop)',
      'Content Management System',
      'SEO optimization',
      'Security implementation',
      'Documentation & training',
      '3 months free support'
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'WordPress', 'Laravel', 'MongoDB', 'PostgreSQL'],
    pricing: 'Starting from competitive rates based on project scope. Basic sites from budget-friendly pricing, complex applications custom quoted.',
    timeline: '2-8 weeks depending on complexity'
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android. Beautiful, intuitive, and high-performing apps.',
    features: ['iOS & Android', 'Cross-Platform', 'Native Performance', 'App Store Ready'],
    detailedDescription: 'Reach your customers wherever they are with our professional mobile app development services. We build native iOS and Android apps, as well as cross-platform solutions that deliver exceptional performance and user experience. From concept to app store launch, we handle everything.',
    detailedFeatures: [
      'Native iOS (Swift) and Android (Kotlin) development',
      'Cross-platform solutions (React Native, Flutter)',
      'Beautiful, intuitive user interfaces',
      'Offline functionality support',
      'Push notifications integration',
      'In-app purchases and subscriptions',
      'Social media integration',
      'Real-time data synchronization',
      'App Store and Play Store optimization',
      'Post-launch support and updates'
    ],
    perfectFor: [
      'Consumer Apps',
      'Business Applications',
      'E-commerce Mobile Apps',
      'Social Networking Apps',
      'On-Demand Services',
      'Enterprise Solutions'
    ],
    deliverables: [
      'iOS and/or Android app',
      'App Store submission & approval',
      'Backend API (if needed)',
      'Admin dashboard',
      'Push notification system',
      'Analytics integration',
      'User documentation',
      '6 months maintenance'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS', 'Node.js', 'REST APIs'],
    pricing: 'Custom pricing based on features and complexity. Simple apps from competitive rates, enterprise solutions quoted individually.',
    timeline: '8-16 weeks for full development and launch'
  },
  {
    icon: <FaPlug />,
    title: 'App Integration',
    description: 'Seamless integration of third-party services, APIs, and systems. Connect your business tools for maximum efficiency.',
    features: ['API Integration', 'Payment Gateways', 'CRM Systems', 'Custom Solutions'],
    detailedDescription: 'Streamline your business operations by connecting all your tools and systems. We specialize in integrating third-party services, APIs, payment gateways, CRM systems, and custom solutions to create a unified, efficient workflow that saves time and increases productivity.',
    detailedFeatures: [
      'Third-party API integration',
      'Payment gateway setup (Stripe, PayPal, etc.)',
      'CRM system integration (Salesforce, HubSpot)',
      'Email marketing tools (Mailchimp, SendGrid)',
      'Social media API connections',
      'Accounting software integration',
      'Inventory management systems',
      'Shipping and logistics APIs',
      'Custom middleware development',
      'Data synchronization solutions'
    ],
    perfectFor: [
      'E-commerce Businesses',
      'SaaS Companies',
      'Enterprise Organizations',
      'Marketing Agencies',
      'Logistics Companies',
      'Financial Services'
    ],
    deliverables: [
      'Fully integrated systems',
      'Custom API endpoints',
      'Data synchronization',
      'Error handling & logging',
      'Security implementation',
      'Testing & quality assurance',
      'Documentation',
      'Ongoing support'
    ],
    technologies: ['REST APIs', 'GraphQL', 'Webhooks', 'OAuth', 'JWT', 'Node.js', 'Python', 'Microservices'],
    pricing: 'Project-based pricing depending on complexity and number of integrations required.',
    timeline: '2-6 weeks based on integration requirements'
  },
  {
    icon: <FaTruck />,
    title: 'Delivery App Solutions',
    description: 'Coming soon! Revolutionary delivery app platform designed for the Ethiopian market. Stay tuned for the launch.',
    features: ['Real-time Tracking', 'Multiple Vendors', 'Secure Payments', 'User-Friendly'],
    badge: 'Coming Soon',
    detailedDescription: 'Get ready for Ethiopia\'s next-generation delivery platform! Our upcoming delivery app solution will revolutionize how businesses and customers connect for delivery services. Built specifically for the Ethiopian market with local payment integration, real-time tracking, and support for multiple vendors.',
    detailedFeatures: [
      'Real-time GPS tracking for deliveries',
      'Multi-vendor marketplace support',
      'Customer and driver mobile apps',
      'Admin dashboard for management',
      'Local payment gateway integration',
      'Order management system',
      'Rating and review system',
      'Push notifications for updates',
      'Route optimization',
      'Analytics and reporting',
      'Multiple delivery zones',
      'Commission management'
    ],
    perfectFor: [
      'Restaurant Businesses',
      'Grocery Stores',
      'Retail Shops',
      'Pharmacy Delivery',
      'Courier Services',
      'Multi-vendor Marketplaces'
    ],
    deliverables: [
      'Customer mobile app (iOS & Android)',
      'Driver mobile app',
      'Vendor web panel',
      'Admin dashboard',
      'Payment integration',
      'SMS & push notifications',
      'Complete documentation',
      '1 year support'
    ],
    technologies: ['React Native', 'Flutter', 'Node.js', 'MongoDB', 'Google Maps API', 'Firebase', 'Socket.io'],
    pricing: 'Special launch pricing available! Contact us for early bird offers and package details.',
    timeline: 'Launching in Q1 2024 - Pre-orders now available!'
  },
  {
    icon: <FaShoppingCart />,
    title: 'E-Commerce Solutions',
    description: 'Complete e-commerce platforms with payment integration, inventory management, and analytics.',
    features: ['Online Store', 'Payment Integration', 'Inventory System', 'Analytics Dashboard'],
    detailedDescription: 'Launch and grow your online store with our comprehensive e-commerce solutions. From product catalog management to secure payment processing and inventory tracking, we provide everything you need to sell online successfully. Built for scalability and designed for conversions.',
    detailedFeatures: [
      'Beautiful, conversion-optimized design',
      'Product catalog with categories',
      'Shopping cart and checkout',
      'Multiple payment gateway integration',
      'Inventory management system',
      'Order tracking and management',
      'Customer account system',
      'Wishlist and favorites',
      'Product reviews and ratings',
      'SEO optimization',
      'Mobile-responsive design',
      'Admin dashboard with analytics',
      'Email marketing integration',
      'Discount and coupon system'
    ],
    perfectFor: [
      'Retail Businesses',
      'Fashion & Apparel',
      'Electronics Stores',
      'Handmade & Crafts',
      'Food & Beverage',
      'Multi-vendor Marketplaces'
    ],
    deliverables: [
      'Complete e-commerce website',
      'Product management system',
      'Payment gateway integration',
      'Shipping integration',
      'Admin dashboard',
      'Mobile apps (optional)',
      'SEO setup',
      'Training & documentation',
      '6 months support'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'WooCommerce', 'Shopify', 'PostgreSQL', 'Redis'],
    pricing: 'Packages starting from competitive rates. Custom solutions quoted based on requirements.',
    timeline: '4-12 weeks depending on complexity and features'
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Solutions',
    description: 'Cloud infrastructure setup, migration, and management. Scalable, secure, and reliable cloud services.',
    features: ['Cloud Migration', 'Server Setup', 'Database Management', 'Security & Backup'],
    detailedDescription: 'Modernize your infrastructure with our professional cloud solutions. Whether you\'re moving to the cloud or optimizing your existing setup, we provide comprehensive services including migration, setup, security, and ongoing management. Reduce costs while improving performance and reliability.',
    detailedFeatures: [
      'Cloud infrastructure design and setup',
      'Server migration to cloud platforms',
      'Database migration and optimization',
      'Load balancing and auto-scaling',
      'Security implementation (firewall, SSL)',
      'Automated backup solutions',
      'Disaster recovery planning',
      'Performance monitoring',
      'Cost optimization',
      'DevOps automation',
      'Container orchestration (Docker, Kubernetes)',
      'CI/CD pipeline setup'
    ],
    perfectFor: [
      'Growing Startups',
      'Enterprise Companies',
      'SaaS Applications',
      'High-traffic Websites',
      'Data-intensive Applications',
      'Remote Teams'
    ],
    deliverables: [
      'Cloud infrastructure setup',
      'Migration services',
      'Security configuration',
      'Backup automation',
      'Monitoring dashboard',
      'Documentation',
      'Staff training',
      'Ongoing maintenance'
    ],
    technologies: ['AWS', 'Google Cloud', 'Azure', 'DigitalOcean', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    pricing: 'Consultation and setup fees plus ongoing cloud costs. Packages available for different scales.',
    timeline: '2-8 weeks for migration and setup'
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Services</h2>
          <p>
            Comprehensive technology solutions tailored to your business needs. 
            We turn your ideas into reality with cutting-edge technology.
          </p>
        </motion.div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {service.badge && (
                <div className="service-badge">{service.badge}</div>
              )}
              
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span>✓</span> {feature}
                  </li>
                ))}
              </ul>

              <button 
                className="service-btn"
                onClick={() => handleLearnMore(service)}
              >
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <ServiceModal 
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Services;

