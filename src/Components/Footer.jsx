import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaGithub, FaLinkedin, FaTwitter, FaCodepen,
  FaInstagram, FaHeart, FaArrowUp, FaCoffee,
  FaTelegram, FaDiscord, FaYoutube
} from 'react-icons/fa';
import { FiMail, FiSend, FiMapPin, FiClock } from 'react-icons/fi';
import { HiOutlineSparkles, HiOutlineMailOpen } from 'react-icons/hi';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate API call
      setTimeout(() => {
        setIsSubscribed(true);
        setEmail('');
        // Reset after 3 seconds
        setTimeout(() => setIsSubscribed(false), 3000);
      }, 500);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/shadad-ishimwe",
      color: "hover:bg-gray-800/50 hover:text-gray-100 border-gray-700",
      label: "View my code and projects"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/shadad-ishimwe",
      color: "hover:bg-blue-600/20 hover:text-blue-400 border-blue-600/30",
      label: "Connect professionally"
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://twitter.com/shadad-ishimwe",
      color: "hover:bg-sky-500/20 hover:text-sky-400 border-sky-500/30",
      label: "Follow my thoughts"
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com/shadad-ishimwe",
      color: "hover:bg-pink-500/20 hover:text-pink-400 border-pink-500/30",
      label: "See behind the scenes"
    },
    {
      name: "Telegram",
      icon: <FaTelegram />,
      url: "https://t.me/shadad-ishimwe",
      color: "hover:bg-blue-500/20 hover:text-blue-300 border-blue-500/30",
      label: "Chat with me"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home", badge: null },
    { name: "About", href: "#about", badge: null },
    { name: "Projects", href: "#projects", badge: "New" },
    { name: "Experience", href: "#experience", badge: null },
    { name: "Contact", href: "#contact", badge: null },
    { name: "Blog", href: "#blog", badge: "Coming Soon" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-gray-800/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
              <HiOutlineMailOpen className="text-blue-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Stay Updated
              </span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-gray-100 mb-4">
              Let's Build Together
            </h3>

            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Subscribe to get updates on new projects, articles, and tech insights.
            </p>

            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all text-gray-100 placeholder-gray-500"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubscribed}
                  className={`px-8 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${isSubscribed
                      ? 'bg-emerald-600/50 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500'
                    }`}
                >
                  {isSubscribed ? (
                    <>
                      <HiOutlineSparkles />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <FiSend />
                      <span>Subscribe</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16"
        >
          {/* Left Column - Brand & Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">IS</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-100">
                    Ishimwe <span className="text-blue-400">Shadad</span>
                  </h2>
                  <p className="text-gray-400 text-sm">Full-Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Crafting exceptional digital experiences with modern technologies.
                Passionate about building scalable solutions that make an impact.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <FiMail className="text-blue-400" />
                <a
                  href="mailto:ishimweshadad010@gmail.com"
                  className="hover:text-gray-200 transition-colors"
                >
                  ishimweshadad010@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FiMapPin className="text-blue-400" />
                <span>Kigali, Rwanda</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FiClock className="text-blue-400" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Links & Social */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold text-gray-100 mb-6 flex items-center gap-2">
                <HiOutlineSparkles className="text-blue-400" />
                Navigation
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center justify-between text-gray-400 hover:text-gray-100 transition-colors group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.name}
                      </span>
                      {link.badge && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-300 rounded-full border border-blue-500/20">
                          {link.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold text-gray-100 mb-6 flex items-center gap-2">
                <HiOutlineSparkles className="text-blue-400" />
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border ${social.color} bg-gray-900/30 backdrop-blur-sm transition-all duration-300 group`}
                    aria-label={social.name}
                  >
                    <div className="text-2xl mb-2 text-gray-400 group-hover:text-current transition-colors">
                      {social.icon}
                    </div>
                    <span className="text-xs font-medium text-gray-400 group-hover:text-current transition-colors">
                      {social.name}
                    </span>
                    <span className="text-[10px] text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800/50 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>
                © {new Date().getFullYear()} Ishimwe Shadad. All rights reserved.
              </p>
              <p className="mt-1 text-gray-500">
                Built with <FaHeart className="inline text-red-400 animate-pulse" /> & lots of coffee
              </p>
            </div>

            <div className="flex items-center gap-6">
              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-colors"
                aria-label="Scroll to top"
              >
                <FaArrowUp className="text-gray-400 hover:text-blue-400 transition-colors" />
              </motion.button>

              <a
                href="https://buymeacoffee.com/shadad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 rounded-xl text-white font-medium transition-all"
              >
                <FaCoffee />
                <span>Buy me a coffee</span>
              </a>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind', 'AWS'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-800/50 text-gray-400 border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}