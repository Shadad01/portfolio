import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaLocationArrow,
  FaCode,
  FaRocket,
  FaAward,
  FaLightbulb,
  FaBuilding,
  FaUniversity
} from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';

// Experience data - now more scalable with IDs and categories
const experienceData = {
  work: [
    {
      id: 'work-1',
      role: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "Remote",
      period: "2022 - Present",
      duration: "2+ years",
      description: "Leading development of scalable SaaS products, mentoring junior developers, and implementing modern architecture patterns.",
      achievements: [
        "Increased application performance by 40% through code optimization",
        "Reduced deployment time by 60% with CI/CD automation",
        "Led migration to microservices architecture"
      ],
      tags: ["React", "Node.js", "TypeScript", "AWS", "Docker", "Microservices"],
      type: 'work',
      highlight: true
    },
    {
      id: 'work-2',
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "Kigali, Rwanda",
      period: "2019 - 2022",
      duration: "3 years",
      description: "Developed and maintained multiple web applications for enterprise clients, focusing on performance and scalability.",
      achievements: [
        "Built 10+ production applications from scratch",
        "Implemented real-time features using WebSockets",
        "Optimized database queries reducing load times by 70%"
      ],
      tags: ["React", "Express", "MongoDB", "Redis", "Socket.io"],
      type: 'work',
      highlight: false
    },
    {
      id: 'work-3',
      role: "Frontend Developer",
      company: "StartUp Ventures",
      location: "Kigali, Rwanda",
      period: "2018 - 2019",
      duration: "1 year",
      description: "Contributed to early-stage startup products, focusing on UI/UX implementation and frontend architecture.",
      achievements: [
        "Created design system used across all products",
        "Improved Lighthouse scores from 60 to 95+",
        "Implemented PWA features increasing user retention"
      ],
      tags: ["React", "Redux", "PWA", "Jest", "Sass"],
      type: 'work',
      highlight: false
    }
  ],
  education: [
    {
      id: 'edu-1',
      role: "MSc Computer Science",
      company: "University of Rwanda",
      location: "Kigali, Rwanda",
      period: "2020 - 2022",
      duration: "2 years",
      description: "Specialized in Artificial Intelligence and Machine Learning with focus on practical applications.",
      achievements: [
        "Graduated with Distinction (GPA: 3.8/4.0)",
        "Published research on ML in healthcare",
        "Teaching Assistant for Data Structures course"
      ],
      tags: ["Machine Learning", "Python", "TensorFlow", "Research"],
      type: 'education',
      highlight: true
    },
    {
      id: 'edu-2',
      role: "BSc Software Engineering",
      company: "University of Rwanda",
      location: "Kigali, Rwanda",
      period: "2016 - 2020",
      duration: "4 years",
      description: "Comprehensive software engineering curriculum with focus on modern development practices.",
      achievements: [
        "Dean's List all semesters",
        "Capstone project award winner",
        "Student Council - Tech Lead"
      ],
      tags: ["Java", "Algorithms", "Database Design", "Agile"],
      type: 'education',
      highlight: false
    }
  ],
  certificates: [
    {
      id: 'cert-1',
      role: "AWS Solutions Architect",
      company: "Amazon Web Services",
      period: "2023",
      tags: ["Cloud", "Architecture", "DevOps"],
      type: 'certificate'
    },
    {
      id: 'cert-2',
      role: "React Advanced Patterns",
      company: "Frontend Masters",
      period: "2022",
      tags: ["React", "Performance", "Patterns"],
      type: 'certificate'
    }
  ]
};

// Reusable components for scalability
const TimelineItem = ({ item, side, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative ${side === 'left' ? 'md:pr-8 lg:pr-0' : 'md:pl-8 lg:pl-0'} ${side === 'left' ? 'md:text-right lg:text-left' : ''}`}
    >
      {/* Timeline connector */}
      <div className="hidden lg:block absolute top-8 w-8 h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>

      {/* Timeline dot */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className={`absolute top-6 hidden lg:flex items-center justify-center w-6 h-6 rounded-full border-2 border-blue-500 bg-gray-900 z-10 ${side === 'left' ? 'right-0 lg:right-[-3px]' : 'left-0 lg:left-[-3px]'
          }`}
      >
        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
      </motion.div>

      {/* Content card */}
      <motion.div
        whileHover={{ y: -5 }}
        className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300"
      >
        {/* Card header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl ${item.type === 'work' ? 'bg-blue-500/10' : item.type === 'education' ? 'bg-purple-500/10' : 'bg-emerald-500/10'}`}>
            {item.type === 'work' ? (
              <FaBriefcase className="text-blue-400 text-xl" />
            ) : item.type === 'education' ? (
              <FaGraduationCap className="text-purple-400 text-xl" />
            ) : (
              <FaAward className="text-emerald-400 text-xl" />
            )}
          </div>
          {item.highlight && (
            <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30">
              Featured
            </span>
          )}
        </div>

        {/* Role and company */}
        <h3 className="text-xl font-bold text-gray-100 mb-2">{item.role}</h3>
        <div className="flex items-center gap-2 text-gray-300 mb-4">
          {item.type === 'work' ? (
            <FaBuilding className="text-sm" />
          ) : item.type === 'education' ? (
            <FaUniversity className="text-sm" />
          ) : null}
          <span className="font-medium">{item.company}</span>
          {item.location && (
            <>
              <span className="text-gray-600">•</span>
              <div className="flex items-center gap-1 text-gray-400">
                <FaLocationArrow className="text-xs" />
                <span>{item.location}</span>
              </div>
            </>
          )}
        </div>

        {/* Period and duration */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2 text-gray-400">
            <FaCalendarAlt />
            <span className="text-sm">{item.period}</span>
          </div>
          {item.duration && (
            <span className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded">
              {item.duration}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4">{item.description}</p>

        {/* Expandable achievements */}
        {item.achievements && (
          <div className="mb-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <FaLightbulb />
              <span className="text-sm font-medium">
                {isExpanded ? 'Hide' : 'Show'} Key Achievements
              </span>
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ↓
              </motion.span>
            </button>

            <motion.div
              initial={false}
              animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="mt-3 space-y-2 pl-4">
                {item.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-800/50 text-gray-300 border border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ExperienceTab = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'all', label: 'All Experience', icon: <FaBriefcase />, count: experienceData.work.length + experienceData.education.length },
    { id: 'work', label: 'Professional', icon: <FaCode />, count: experienceData.work.length },
    { id: 'education', label: 'Education', icon: <FaGraduationCap />, count: experienceData.education.length },
    { id: 'certificates', label: 'Certificates', icon: <FaAward />, count: experienceData.certificates.length }
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-12">
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${activeTab === tab.id
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
              : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800'
            }`}
        >
          {tab.icon}
          <span>{tab.label}</span>
          <span className={`px-2 py-1 text-xs rounded-full ${activeTab === tab.id ? 'bg-white/20' : 'bg-gray-700'
            }`}>
            {tab.count}
          </span>
        </motion.button>
      ))}
    </div>
  );
};

export default function Experience() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredExperiences = () => {
    if (activeTab === 'all') {
      return [...experienceData.work, ...experienceData.education];
    }
    return experienceData[activeTab] || [];
  };

  return (
    <section id="experience" className="relative py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
            <FaRocket className="text-blue-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Career Journey
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-100 via-blue-200 to-gray-100 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            My professional journey through years of learning, building, and growing in the tech industry.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <ExperienceTab activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Timeline Container */}
        <div className="relative">
          {/* Center timeline line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent transform -translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-0">
            {filteredExperiences().map((item, index) => {
              const side = index % 2 === 0 ? 'left' : 'right';
              return (
                <div
                  key={item.id}
                  className={`lg:flex lg:items-center lg:gap-8 ${side === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                >
                  {/* Left side items (on desktop) */}
                  {side === 'left' && (
                    <div className="lg:w-1/2 lg:pr-12">
                      <TimelineItem item={item} side="left" index={index} />
                    </div>
                  )}

                  {/* Timeline center (desktop only) */}
                  <div className="hidden lg:block w-4"></div>

                  {/* Right side items (on desktop) */}
                  {side === 'right' && (
                    <div className="lg:w-1/2 lg:pl-12">
                      <TimelineItem item={item} side="right" index={index} />
                    </div>
                  )}

                  {/* Mobile layout */}
                  <div className="lg:hidden">
                    <TimelineItem item={item} side="center" index={index} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Years Experience', value: '6+', icon: <FaCalendarAlt />, color: 'from-blue-500 to-cyan-400' },
            { label: 'Projects Delivered', value: '50+', icon: <FaCode />, color: 'from-purple-500 to-pink-400' },
            { label: 'Technologies', value: '20+', icon: <FaRocket />, color: 'from-emerald-500 to-green-400' },
            { label: 'Certifications', value: '8+', icon: <FaAward />, color: 'from-amber-500 to-orange-400' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10 mb-4`}>
                <div className={`text-2xl bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-100 mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}