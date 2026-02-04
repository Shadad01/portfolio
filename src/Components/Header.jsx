import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaBriefcase,
  FaGithub,
  FaLinkedin,
  FaFileDownload
} from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    {
      name: 'Home',
      href: '#home',
      icon: <FaHome />
    },
    {
      name: 'About',
      href: '#about',
      icon: <FaUser />
    },
    {
      name: 'Experience',
      href: '#experience',
      icon: <FaBriefcase />
    },
    {
      name: 'Skills',
      href: '#skills',
      icon: <FaCode />
    },
    {
      name: 'Projects',
      href: '#projects',
      icon: <FaProjectDiagram />
    },
    {
      name: 'Contact',
      href: '#contact',
      icon: <FaEnvelope />
    },
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setNavOpen(false);
    setActiveSection(href.substring(1));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4
      }
    })
  };

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled
            ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl py-3 border-b border-gray-800/50'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={scrollToTop}
            >
              <div className={`p-2 rounded-xl transition-all ${scrolled ? 'bg-gradient-to-br from-blue-600 to-purple-600' : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'
                }`}>
                <span className="text-xl font-bold text-white">IS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Ishimwe
                </span>
                <span className="text-sm bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">
                  Full-Stack Developer
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -2 }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl mx-1 transition-all ${activeSection === item.href.substring(1)
                      ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 border border-blue-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="w-1.5 h-1.5 rounded-full bg-blue-400"
                    />
                  )}
                </motion.a>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2"
              >
                <motion.a
                  href="https://github.com/shadad-ishimwe"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl bg-gray-800/50 hover:bg-gray-800 text-gray-300 hover:text-white transition-all border border-gray-700/50"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/shadad-ishimwe"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl bg-gray-800/50 hover:bg-gray-800 text-gray-300 hover:text-white transition-all border border-gray-700/50"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </motion.a>
              </motion.div>

              {/* Resume Button */}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all"
              >
                <FaFileDownload className="text-sm" />
                <span>Resume</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setNavOpen(!navOpen)}
              className="lg:hidden p-3 rounded-xl bg-gray-800/50 hover:bg-gray-800 text-gray-300 hover:text-white transition-all border border-gray-700/50"
              aria-label="Toggle menu"
            >
              {navOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden fixed top-16 inset-x-0 z-40"
          >
            <div className="container mx-auto px-4 sm:px-6">
              <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
                {/* Mobile Menu Header */}
                <div className="p-4 border-b border-gray-800/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                        <HiOutlineSparkles className="text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Navigation</p>
                        <p className="font-medium text-gray-200">Quick Links</p>
                      </div>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setNavOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
                      aria-label="Close menu"
                    >
                      <FaTimes />
                    </motion.button>
                  </div>
                </div>

                {/* Mobile Menu Items */}
                <nav className="p-2">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl my-1 transition-all ${activeSection === item.href.substring(1)
                          ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                        }`}
                    >
                      <div className={`text-lg ${activeSection === item.href.substring(1) ? 'text-blue-400' : 'text-gray-400'
                        }`}>
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.name}</span>
                      {activeSection === item.href.substring(1) && (
                        <div className="ml-auto w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                      )}
                    </motion.a>
                  ))}
                </nav>

                {/* Mobile Footer Actions */}
                <div className="p-4 border-t border-gray-800/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <motion.a
                        href="https://github.com/shadad-ishimwe"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 rounded-xl bg-gray-800/50 hover:bg-gray-800 text-gray-300 hover:text-white transition-all"
                        aria-label="GitHub"
                      >
                        <FaGithub />
                      </motion.a>
                      <motion.a
                        href="https://linkedin.com/in/shadad-ishimwe"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 rounded-xl bg-gray-800/50 hover:bg-gray-800 text-gray-300 hover:text-white transition-all"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin />
                      </motion.a>
                    </div>
                    <motion.a
                      href="/resume.pdf"
                      download
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium"
                    >
                      <FaFileDownload />
                      <span className="text-sm">Resume</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? (window.scrollY / (document.body.scrollHeight - window.innerHeight)) : 0 }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}