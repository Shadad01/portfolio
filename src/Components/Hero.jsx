import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCode,
  FaServer,
  FaPalette,
  FaRocket,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
  FaEnvelope,
  FaChevronDown,
  FaCoffee,
  FaLightbulb
} from 'react-icons/fa';
import { HiOutlineSparkles, HiOutlineCursorClick } from 'react-icons/hi';
import { SiTypescript, SiReact, SiNodedotjs, SiTailwindcss } from 'react-icons/si';

// Configurable data - makes component highly scalable
const heroConfig = {
  personal: {
    firstName: "Ishimwe",
    lastName: "Shadad",
    title: "Full-Stack Developer",
    subtitle: "Creating Digital Experiences That Matter",
    description: "I specialize in building scalable, performant web applications with modern technologies. Passionate about clean code, user experience, and solving complex problems.",
    email: "ishimweshadad010@gmail.com",
    location: "Kigali, Rwanda",
    status: "openToWork"
  },

  ctaButtons: [
    {
      id: 'contact',
      label: 'Get In Touch',
      icon: <FaEnvelope />,
      variant: 'primary',
      href: '#contact'
    },
    {
      id: 'resume',
      label: 'Download Resume',
      icon: <FaDownload />,
      variant: 'secondary',
      href: '/resume.pdf',
      download: true
    },
    {
      id: 'projects',
      label: 'View Projects',
      icon: <HiOutlineCursorClick />,
      variant: 'outline',
      href: '#projects'
    }
  ],

  socialLinks: [
    {
      id: 'github',
      icon: <FaGithub />,
      label: 'GitHub',
      href: 'https://github.com/shadad-ishimwe',
      color: 'hover:bg-gray-800 hover:text-white'
    },
    {
      id: 'linkedin',
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/shadad-ishimwe',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      id: 'twitter',
      icon: <FaTwitter />,
      label: 'Twitter',
      href: 'https://twitter.com/shadad-ishimwe',
      color: 'hover:bg-sky-500 hover:text-white'
    }
  ],

  techStack: [
    { name: "React", icon: <SiReact />, color: "text-blue-400" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-400" },
  ],

  specialties: [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description: "Modern React, TypeScript, and responsive design"
    },
    {
      icon: <FaServer />,
      title: "Backend Engineering",
      description: "Node.js, APIs, and scalable architecture"
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      description: "User-centric interfaces and experiences"
    }
  ]
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const fadeInUp = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

const floatAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Reusable Components
const CTAButton = ({ button }) => (
  <motion.a
    href={button.href}
    download={button.download}
    whileHover={{
      y: -5,
      transition: { duration: 0.2 }
    }}
    whileTap={{ scale: 0.98 }}
    className={`
      flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-medium transition-all
      ${button.variant === 'primary'
        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl'
        : button.variant === 'secondary'
          ? 'bg-gray-800 hover:bg-gray-700 text-gray-100 border border-gray-700'
          : 'bg-transparent hover:bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-gray-600'
      }
    `}
  >
    {button.icon}
    <span>{button.label}</span>
  </motion.a>
);

const SocialLink = ({ link }) => (
  <motion.a
    href={link.href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className={`p-3 rounded-xl bg-gray-800/50 border border-gray-700 ${link.color} transition-all duration-300`}
    aria-label={link.label}
  >
    <span className="text-xl">{link.icon}</span>
  </motion.a>
);

const TechBadge = ({ tech }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-800/50 border border-gray-700"
  >
    <span className={`text-xl ${tech.color}`}>{tech.icon}</span>
    <span className="text-gray-300 font-medium text-sm">{tech.name}</span>
  </motion.div>
);

const SpecialtyCard = ({ specialty, index }) => (
  <motion.div
    variants={fadeInUp}
    custom={index}
    className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700/50"
  >
    <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10">
      <span className="text-blue-400 text-xl">{specialty.icon}</span>
    </div>
    <div>
      <h4 className="font-semibold text-gray-100 text-sm">{specialty.title}</h4>
      <p className="text-gray-400 text-xs mt-1">{specialty.description}</p>
    </div>
  </motion.div>
);

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ['Developer', 'Designer', 'Problem Solver', 'Innovator'];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = 1500;

    const type = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting && typedText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }

      setTypedText(prev =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );
    };

    const timer = setTimeout(type, typeSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentWordIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-700/30 to-transparent"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #4f46e5 1px, transparent 1px),
                            linear-gradient(to bottom, #4f46e5 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2">
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <div className="flex items-center gap-2">
                  <HiOutlineSparkles className="text-blue-400" />
                  <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {heroConfig.personal.status === 'openToWork' ? '🚀 Open to Opportunities' : 'Full-Stack Developer'}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <div className="space-y-4">
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-clip-text text-transparent">
                  {heroConfig.personal.firstName}{' '}
                </span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {heroConfig.personal.lastName}
                </span>
              </motion.h1>

              <motion.div variants={fadeInUp} className="text-2xl md:text-3xl text-gray-300">
                <span className="text-gray-400">I'm a </span>
                <span className="text-blue-400 font-semibold">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p variants={fadeInUp} className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              {heroConfig.personal.description}
            </motion.p>

            {/* Specialties */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {heroConfig.specialties.map((specialty, index) => (
                <SpecialtyCard key={index} specialty={specialty} index={index} />
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
              {heroConfig.ctaButtons.map((button) => (
                <CTAButton key={button.id} button={button} />
              ))}
            </motion.div>

            {/* Social Links & Info */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-3">
                {heroConfig.socialLinks.map((link) => (
                  <SocialLink key={link.id} link={link} />
                ))}
              </div>

              <div className="hidden md:flex items-center gap-4 text-gray-400">
                <div className="w-px h-6 bg-gray-700"></div>
                <div className="flex items-center gap-2">
                  <FaCoffee className="text-amber-500" />
                  <span className="text-sm">Available for freelance</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            {/* Main Profile Card */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              {/* Floating Tech Badges */}
              <motion.div
                variants={floatAnimation}
                animate="animate"
                className="absolute -top-6 -left-6 lg:-top-8 lg:-left-8"
              >
                <TechBadge tech={heroConfig.techStack[0]} />
              </motion.div>

              <motion.div
                variants={floatAnimation}
                animate="animate"
                transition={{ delay: 0.2 }}
                className="absolute -top-6 -right-6 lg:-top-8 lg:-right-8"
              >
                <TechBadge tech={heroConfig.techStack[1]} />
              </motion.div>

              <motion.div
                variants={floatAnimation}
                animate="animate"
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8"
              >
                <TechBadge tech={heroConfig.techStack[2]} />
              </motion.div>

              <motion.div
                variants={floatAnimation}
                animate="animate"
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8"
              >
                <TechBadge tech={heroConfig.techStack[3]} />
              </motion.div>

              {/* Profile Container */}
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>

                {/* Profile Card */}
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 shadow-2xl">
                  <div className="aspect-square rounded-2xl overflow-hidden border-2 border-gray-700 mb-6">
                    {/* Profile Image or Placeholder */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">👨‍💻</div>
                        <div className="text-gray-400 text-sm">Your Amazing Photo Here</div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-100">Quick Info</h3>
                        <p className="text-gray-400 text-sm">At a glance</p>
                      </div>
                      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                        <FaLightbulb className="text-blue-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-gray-800/50">
                        <p className="text-gray-400 text-xs">Location</p>
                        <p className="text-gray-100 font-medium">{heroConfig.personal.location}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-gray-800/50">
                        <p className="text-gray-400 text-xs">Status</p>
                        <p className="text-green-400 font-medium">Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 grid grid-cols-3 gap-4"
            >
              {[
                { label: 'Projects', value: '50+' },
                { label: 'Experience', value: '5+ Years' },
                { label: 'Clients', value: '20+' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-gray-900/30 border border-gray-800">
                  <div className="text-2xl font-bold text-gray-100 mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm">Scroll to explore</span>
            <FaChevronDown className="text-lg" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}