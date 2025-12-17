import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTimes, 
  FaPaperPlane, 
  FaUser 
} from 'react-icons/fa';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "👋 Hello! I'm Gebeta Tech's AI Assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // AI Response Logic
  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    // Services related
    if (message.includes('service') || message.includes('what do you do') || message.includes('offer')) {
      return "We offer comprehensive tech solutions including:\n\n🌐 Website Development\n📱 Mobile App Development (iOS & Android)\n🔗 App Integration & API Services\n🛒 E-Commerce Solutions\n☁️ Cloud Solutions\n🚚 Delivery App (Coming Soon!)\n\nWhich service interests you?";
    }

    // Pricing related
    if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
      return "Our pricing varies based on project requirements. We offer competitive rates and flexible packages:\n\n• Website Development: Starting from competitive rates\n• Mobile Apps: Custom quotes based on features\n• Integration Services: Project-based pricing\n\nWould you like to schedule a free consultation to discuss your specific needs?";
    }

    // Contact related
    if (message.includes('contact') || message.includes('reach') || message.includes('email') || message.includes('phone')) {
      return "You can reach us at:\n\n📧 Email: info@gebeta-tech.com\n📞 Phone: +251 911 234 567\n📍 Location: Addis Ababa, Ethiopia\n\nOr scroll down to fill out our contact form and we'll get back to you within 24 hours!";
    }

    // Portfolio/Projects
    if (message.includes('portfolio') || message.includes('project') || message.includes('work') || message.includes('example')) {
      return "We've successfully delivered 50+ projects including:\n\n• E-Commerce Platforms\n• Restaurant Mobile Apps\n• Corporate Websites\n• Healthcare Management Systems\n• Real Estate Portals\n\nCheck out our Portfolio section on the website to see our work in detail!";
    }

    // About company
    if (message.includes('who are you') || message.includes('about') || message.includes('company')) {
      return "Gebeta Tech is Ethiopia's leading technology solutions provider! 🇪🇹\n\nWe specialize in:\n✨ Website & Mobile App Development\n✨ System Integration\n✨ Digital Transformation\n\nWith 5+ years of experience and 30+ happy clients, we're committed to excellence and innovation!";
    }

    // Timeline/Duration
    if (message.includes('how long') || message.includes('timeline') || message.includes('duration')) {
      return "Project timelines vary based on complexity:\n\n⚡ Basic Website: 2-3 weeks\n⚡ E-Commerce Site: 4-6 weeks\n⚡ Mobile App: 6-12 weeks\n⚡ Custom Solutions: Depends on requirements\n\nWe provide detailed timelines after understanding your specific needs!";
    }

    // Technology/Stack
    if (message.includes('technology') || message.includes('tech stack') || message.includes('what do you use')) {
      return "We use cutting-edge technologies:\n\n💻 Frontend: React, Next.js, Vue.js\n⚙️ Backend: Node.js, Express, Laravel\n📱 Mobile: React Native, Flutter\n🗄️ Database: MongoDB, MySQL, PostgreSQL\n☁️ Cloud: AWS, Azure, Google Cloud\n\nWe choose the best stack for each project!";
    }

    // Support
    if (message.includes('support') || message.includes('maintenance') || message.includes('after')) {
      return "Yes! We provide comprehensive post-launch support:\n\n🔧 Technical Support\n🔄 Regular Updates\n🐛 Bug Fixes\n📈 Performance Optimization\n📊 Analytics & Monitoring\n\nWe're committed to your long-term success!";
    }

    // Delivery App
    if (message.includes('delivery') || message.includes('delivery app')) {
      return "🚀 Exciting news! Our delivery app platform is launching soon!\n\nIt will feature:\n✅ Real-time tracking\n✅ Multiple vendor support\n✅ Secure payments\n✅ User-friendly interface\n✅ Built for the Ethiopian market\n\nStay tuned for the launch announcement!";
    }

    // Greeting
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! 👋 Great to hear from you!\n\nI'm here to help you learn about our services, discuss your project ideas, or answer any questions about Gebeta Tech.\n\nWhat would you like to know?";
    }

    // Thank you
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! 😊\n\nIs there anything else I can help you with? Feel free to ask about our services, pricing, or anything else!";
    }

    // Default response
    return "That's a great question! 🤔\n\nI can help you with:\n• Our Services & Solutions\n• Pricing & Packages\n• Project Timeline\n• Technologies We Use\n• Contact Information\n• Portfolio & Past Work\n\nWhat would you like to know more about?\n\nFor complex inquiries, feel free to contact our team directly using the contact form below!";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking and respond
    setTimeout(() => {
      const botResponse = {
        text: getAIResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickResponses = [
    "What services do you offer?",
    "How much does a website cost?",
    "View portfolio",
    "Contact information"
  ];

  const handleQuickResponse = (response) => {
    setInputValue(response);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className={`chatbot-button ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img 
          src="/chatbot.png" 
          alt="Chatbot" 
          className="chatbot-icon-image"
        />
        <span className="chatbot-badge">AI</span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-header-info">
                <img 
                  src="/chatbot.png" 
                  alt="AI Assistant" 
                  className="chatbot-header-icon chatbot-header-image"
                />
                <div>
                  <h3>Gebeta Tech AI</h3>
                  <p>Online • Ready to help</p>
                </div>
              </div>
              <button 
                className="chatbot-close"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="chatbot-messages">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`message ${message.isBot ? 'bot' : 'user'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="message-avatar">
                    {message.isBot ? (
                      <img 
                        src="/chatbot.png" 
                        alt="AI" 
                        className="avatar-image"
                      />
                    ) : (
                      <FaUser />
                    )}
                  </div>
                  <div className="message-content">
                    <p style={{ whiteSpace: 'pre-line' }}>{message.text}</p>
                    <span className="message-time">
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  className="message bot typing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="message-avatar">
                    <img 
                      src="/chatbot.png" 
                      alt="AI" 
                      className="avatar-image"
                    />
                  </div>
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Responses */}
            {messages.length <= 2 && (
              <div className="chatbot-quick-responses">
                {quickResponses.map((response, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickResponse(response)}
                    className="quick-response-btn"
                  >
                    {response}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="chatbot-input-container">
              <input
                type="text"
                className="chatbot-input"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button 
                className="chatbot-send"
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
              >
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;

