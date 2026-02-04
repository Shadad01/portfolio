import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FiMail, FiMapPin, FiPhone, FiSend,
  FiUser, FiMessageSquare, FiCheckCircle,
  FiLinkedin, FiGithub, FiTwitter, FiInstagram,
  FiGlobe
} from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const socialLinks = [
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/shadad-ishimwe',
      color: 'hover:bg-blue-500/20 hover:text-blue-400 border-blue-500/30'
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      href: 'https://github.com/ShadadDev',
      color: 'hover:bg-gray-500/20 hover:text-gray-300 border-gray-500/30'
    },
    {
      icon: <FiTwitter />,
      label: 'Twitter',
      href: 'https://twitter.com/shadad-ishimwe',
      color: 'hover:bg-sky-500/20 hover:text-sky-400 border-sky-500/30'
    },
    {
      icon: <FiInstagram />,
      label: 'Instagram',
      href: 'https://www.instagram.com/shadad__01/',
      color: 'hover:bg-pink-500/20 hover:text-pink-400 border-pink-500/30'
    }
  ];

  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email",
      value: "ishimweshadad010@gmail.com",
      href: "mailto:ishimweshadad010@gmail.com",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <FiPhone />,
      title: "Phone",
      value: "+250 792 612 666",
      href: "tel:+250792612666",
      color: "from-emerald-500 to-green-400"
    },
    {
      icon: <FiMapPin />,
      title: "Location",
      value: "Kigali, Rwanda",
      href: "#",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <FiGlobe />,
      title: "Timezone",
      value: "GMT+2 (CAT)",
      href: "#",
      color: "from-amber-500 to-orange-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
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

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6"
          >
            <HiOutlineSparkles className="text-blue-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-100 via-blue-200 to-gray-100 bg-clip-text text-transparent">
              Get In Touch
            </span>
            <span className="text-blue-400 ml-2">👋</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info & Social */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  whileHover={{ x: 5 }}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${info.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}>
                    <div className={`text-2xl bg-gradient-to-br ${info.color} bg-clip-text text-transparent`}>
                      {info.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 font-medium mb-1">{info.title}</p>
                    <p className="text-gray-200 font-semibold group-hover:text-white transition-colors">
                      {info.value}
                    </p>
                  </div>
                  <div className="text-gray-600 group-hover:text-blue-400 transition-colors">
                    →
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-gray-100 mb-6 flex items-center gap-2">
                <HiOutlineSparkles className="text-blue-400" />
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group flex flex-col items-center justify-center p-4 rounded-xl border ${social.color} bg-gray-900/30 backdrop-blur-sm transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <div className="text-2xl mb-2 text-gray-400 group-hover:text-current transition-colors">
                      {social.icon}
                    </div>
                    <span className="text-xs font-medium text-gray-400 group-hover:text-current transition-colors">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-blue-500/20">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <FiCheckCircle className="text-blue-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-100 mb-2">Currently Available</h4>
                  <p className="text-gray-400 text-sm">
                    Open to new projects, collaborations, and full-time opportunities.
                    <br />
                    <span className="text-blue-400 font-medium">Response time: &lt; 24 hours</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Form Container */}
            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-800 overflow-hidden">
              {/* Form Header */}
              <div className="border-b border-gray-800 p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-100">Send a Message</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8">
                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20"
                  >
                    <div className="flex items-center gap-3">
                      <FiCheckCircle className="text-emerald-400 text-xl" />
                      <div>
                        <p className="font-semibold text-emerald-400">Message Sent!</p>
                        <p className="text-emerald-300/80 text-sm">I'll get back to you soon.</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all text-gray-100 placeholder-gray-500"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all text-gray-100 placeholder-gray-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="relative">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all text-gray-100 placeholder-gray-500"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Your Message
                    </label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-4 top-4 text-gray-500" />
                      <textarea
                        id="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all text-gray-100 placeholder-gray-500 resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-3 ${isSubmitting
                      ? 'bg-blue-600/50 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500'
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="text-lg" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>

            {/* Floating Element */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}