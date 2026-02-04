import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCode,
  FaRocket,
  FaAward,
  FaLightbulb,
  FaStar,
  FaChevronRight,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';

// Updated experience data structure
const experienceData = {
  professional: [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Self-Employed / Freelance",
      location: "Kigali, Rwanda",
      period: "2020 - Present",
      duration: "4+ years",
      description: "Building custom web applications for clients across various industries. Specializing in React, Node.js, and modern web technologies.",
      achievements: [
        "Developed 20+ web applications from concept to deployment",
        "Improved client website performance by 60% on average",
        "Built scalable backend APIs serving thousands of users",
        "Implemented responsive designs that work across all devices"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "TypeScript"],
      type: 'professional',
      featured: true,
      link: "#"
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Local Tech Startups",
      location: "Kigali, Rwanda",
      period: "2019 - 2020",
      duration: "1 year",
      description: "Collaborated with early-stage startups to build MVP products and user interfaces.",
      achievements: [
        "Built 3 successful MVP products that secured funding",
        "Created reusable component libraries",
        "Improved user experience scores by 40%",
        "Implemented modern design systems"
      ],
      technologies: ["React", "JavaScript", "CSS3", "Figma", "Git"],
      type: 'professional',
      featured: false,
      link: "#"
    }
  ],
  education: [
    {
      id: 3,
      role: "Computer Science",
      company: "Self-Taught & Online Learning",
      location: "Online",
      period: "2018 - Present",
      duration: "Ongoing",
      description: "Continuous learning through online platforms, documentation, and building real projects.",
      achievements: [
        "Mastered modern JavaScript and React ecosystem",
        "Completed 50+ online courses and tutorials",
        "Built 30+ personal projects for practice",
        "Contributed to open source projects"
      ],
      technologies: ["JavaScript", "React", "Web Development", "Algorithms", "System Design"],
      type: 'education',
      featured: true,
      link: "#"
    }
  ],
  certifications: [
    {
      id: 4,
      role: "Modern React Bootcamp",
      company: "Udemy",
      period: "2023",
      description: "Advanced React patterns, hooks, and best practices",
      technologies: ["React", "Hooks", "Context API", "Redux"],
      type: 'certification',
      link: "#"
    },
    {
      id: 5,
      role: "JavaScript Algorithms & Data Structures",
      company: "FreeCodeCamp",
      period: "2022",
      description: "Mastered fundamental algorithms and data structures",
      technologies: ["JavaScript", "Algorithms", "Data Structures"],
      type: 'certification',
      link: "#"
    },
    {
      id: 6,
      role: "Responsive Web Design",
      company: "FreeCodeCamp",
      period: "2021",
      description: "Modern responsive design techniques and best practices",
      technologies: ["HTML5", "CSS3", "Responsive Design"],
      type: 'certification',
      link: "#"
    }
  ]
};

// Animation variants
const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

// Experience Card Component
const ExperienceCard = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="relative bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-xl">

        {/* Featured Badge */}
        {experience.featured && (
          <div className="absolute -top-3 left-6">
            <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium flex items-center gap-1">
              <FaStar className="text-xs" />
              <span>Featured</span>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl ${experience.type === 'professional'
              ? 'bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400'
              : experience.type === 'education'
                ? 'bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400'
                : 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
              }`}>
              {experience.type === 'professional' ? (
                <FaBriefcase className="text-lg" />
              ) : experience.type === 'education' ? (
                <FaGraduationCap className="text-lg" />
              ) : (
                <FaAward className="text-lg" />
              )}
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {experience.role}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {experience.company}
                </p>
                <span className="text-gray-400">•</span>
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
                  <FaMapMarkerAlt className="text-xs" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <FaCalendarAlt />
            <span className="text-sm font-medium">{experience.period}</span>
          </div>
          {experience.duration && (
            <span className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium">
              {experience.duration}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {experience.description}
        </p>

        {/* Expandable Achievements */}
        {experience.achievements && (
          <div className="mb-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <FaLightbulb />
              <span className="font-medium">
                {isExpanded ? 'Hide' : 'Show'} Key Achievements
              </span>
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm"
              >
                ↓
              </motion.span>
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 space-y-2 pl-6 overflow-hidden"
                >
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <FaChevronRight className="text-blue-500 dark:text-blue-400 mt-1 text-xs" />
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {experience.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Details Link */}
        {experience.link && (
          <a
            href={experience.link}
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
          >
            <span>View Details</span>
            <FaExternalLinkAlt className="text-xs" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

// Certification Card Component
const CertificationCard = ({ certification, index }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -3 }}
      className="group"
    >
      <div className="bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-5 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700">
        <div className="flex items-start justify-between mb-3">
          <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <FaAward className="text-lg" />
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            {certification.period}
          </span>
        </div>

        <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">
          {certification.role}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          {certification.company} • {certification.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {certification.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-blue-500/30 mb-6">
            <FaRocket className="text-blue-500 dark:text-blue-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Journey & Growth
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My journey from learning to building real-world applications. Every project taught me something new.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: 'all', label: 'All', icon: <HiOutlineSparkles /> },
            { id: 'professional', label: 'Professional', icon: <FaBriefcase /> },
            { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
            { id: 'certifications', label: 'Certifications', icon: <FaAward /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Main Experience Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Timeline */}
            <div className="lg:col-span-2 space-y-8">
              {(activeTab === 'all' || activeTab === 'professional') &&
                experienceData.professional.map((exp, index) => (
                  <ExperienceCard key={exp.id} experience={exp} index={index} />
                ))
              }

              {(activeTab === 'all' || activeTab === 'education') &&
                experienceData.education.map((exp, index) => (
                  <ExperienceCard key={exp.id} experience={exp} index={index} />
                ))
              }
            </div>

            {/* Right Column - Stats & Certifications */}
            <div className="space-y-8">
              {/* Stats Card */}
              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white"
              >
                <h3 className="text-xl font-bold mb-4">Career Stats</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Years Experience', value: '4+', color: 'from-blue-400 to-cyan-300' },
                    { label: 'Projects Completed', value: '30+', color: 'from-purple-400 to-pink-300' },
                    { label: 'Technologies', value: '15+', color: 'from-emerald-400 to-green-300' },
                    { label: 'Happy Clients', value: '20+', color: 'from-amber-400 to-orange-300' }
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm opacity-90">{stat.label}</span>
                      <span className="text-lg font-bold">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Certifications Section */}
              {(activeTab === 'all' || activeTab === 'certifications') && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                    <FaAward className="text-emerald-500" />
                    <span>Certifications</span>
                  </h3>
                  <div className="space-y-4">
                    {experienceData.certifications.map((cert, index) => (
                      <CertificationCard key={cert.id} certification={cert} index={index} />
                    ))}
                  </div>
                </div>
              )}

              {/* Skills Overview */}
              <div className="bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <FaCode className="text-blue-500" />
                  <span>Core Competencies</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Frontend Development',
                    'Responsive Design',
                    'API Development',
                    'Database Design',
                    'Performance Optimization',
                    'UI/UX Implementation'
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 mb-6">
              <HiOutlineSparkles className="text-blue-500 dark:text-blue-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                My Philosophy
              </span>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              "I believe in continuous learning and building things that matter. Every line of code
              is an opportunity to solve a problem, create value, and grow as a developer."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}