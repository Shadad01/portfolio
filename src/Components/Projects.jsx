import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiExternalLink,
  FiGithub,
  FiEye,
  FiCode,
  FiChevronRight,
  FiFilter,
  FiGrid,
  FiList,
  FiStar
} from 'react-icons/fi';
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaAws, FaMobileAlt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si';

// Project data - scalable and easily modifiable
const projectsData = {
  all: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with real-time inventory management, payment processing, and admin dashboard.",
      detailedDescription: "Built with modern microservices architecture, featuring user authentication, cart functionality, order tracking, and integrated payment gateway.",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
      techIcons: [<FaReact />, <FaNodeJs />, <FaDatabase />],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#",
      category: "fullstack",
      featured: true,
      status: "completed"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity application with drag-and-drop interface and real-time collaboration features.",
      detailedDescription: "Includes task boards, real-time updates, file attachments, team collaboration, and advanced filtering.",
      tags: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      techIcons: [<FaReact />, <SiTailwindcss />, <SiFirebase />],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#",
      category: "frontend",
      featured: true,
      status: "completed"
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      description: "Business intelligence platform with machine learning predictions and data visualization.",
      detailedDescription: "Real-time data processing, predictive analytics, customizable dashboards, and automated reporting.",
      tags: ["Python", "React", "FastAPI", "PostgreSQL", "D3.js"],
      techIcons: [<FaPython />, <SiTypescript />, <FaDatabase />],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#",
      category: "fullstack",
      featured: false,
      status: "completed"
    },
    {
      id: 4,
      title: "Mobile Fitness Tracker",
      description: "Cross-platform fitness application with workout plans and progress tracking.",
      detailedDescription: "Personalized workout routines, nutrition tracking, social features, and wearable device integration.",
      tags: ["React Native", "Firebase", "Redux", "Expo"],
      techIcons: [<FaMobileAlt />, <SiFirebase />],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#",
      category: "mobile",
      featured: false,
      status: "completed"
    },
    {
      id: 5,
      title: "Cloud Storage Solution",
      description: "Secure file storage platform with advanced encryption and sharing capabilities.",
      detailedDescription: "End-to-end encryption, real-time collaboration, version control, and cross-platform synchronization.",
      tags: ["AWS", "Node.js", "React", "S3", "Lambda"],
      techIcons: [<FaAws />, <FaNodeJs />, <FaReact />],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#",
      category: "fullstack",
      featured: false,
      status: "in-progress"
    },
    {
      id: 6,
      title: "Real-time Chat Application",
      description: "Modern messaging platform with video calls and file sharing.",
      detailedDescription: "WebRTC video calls, end-to-end encryption, group chats, message reactions, and push notifications.",
      tags: ["Socket.io", "React", "MongoDB", "WebRTC"],
      techIcons: [<FaNodeJs />, <SiMongodb />],
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#",
      category: "fullstack",
      featured: false,
      status: "completed"
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
      delayChildren: 0.1
    }
  }
};

const fadeInUp = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
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

// Project Card Component
const ProjectCard = ({ project, viewMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700 ${viewMode === 'grid' ? 'h-full' : ''
        }`}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'completed'
              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
              : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
            }`}>
            {project.status === 'completed' ? 'Completed' : 'In Progress'}
          </span>
        </div>

        {/* Tech Icons */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          {project.techIcons.map((icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
              className="p-2 rounded-lg bg-gray-900/80 backdrop-blur-sm text-white"
            >
              {icon}
            </motion.div>
          ))}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <div className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30">
              <div className="flex items-center gap-1">
                <FiStar className="text-amber-400 text-xs" />
                <span className="text-xs font-medium text-amber-400">Featured</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
              <span className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">
                {project.category}
              </span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {showDetails ? project.detailedDescription : project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all duration-200"
            >
              <FiEye />
              <span>Live Demo</span>
            </motion.a>
            <motion.a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-200"
            >
              <FiCode />
              <span>View Code</span>
            </motion.a>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowDetails(!showDetails)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors"
            aria-label={showDetails ? "Show less" : "Show more"}
          >
            <FiChevronRight className={`transform transition-transform ${showDetails ? 'rotate-90' : ''}`} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const categories = [
    { id: 'all', label: 'All Projects', count: projectsData.all.length },
    { id: 'fullstack', label: 'Full Stack', count: projectsData.all.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', label: 'Frontend', count: projectsData.all.filter(p => p.category === 'frontend').length },
    { id: 'mobile', label: 'Mobile', count: projectsData.all.filter(p => p.category === 'mobile').length },
  ];

  const allTags = [...new Set(projectsData.all.flatMap(project => project.tags))];

  // Filter projects based on selected category, search term, and tags
  const filteredProjects = projectsData.all.filter(project => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedTags.length === 0 ||
      selectedTags.every(tag => project.tags.includes(tag));

    return matchesCategory && matchesSearch && matchesTags;
  });

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
            <FiCode className="text-blue-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Work
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
              My Portfolio
            </span>
            <span className="text-blue-500 dark:text-blue-400">.</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of projects showcasing my expertise in full-stack development,
            modern design patterns, and scalable architecture.
          </p>
        </motion.div>

        {/* Filters and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-8">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2.5 rounded-xl font-medium transition-all ${activeCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  {category.label}
                  <span className={`ml-2 px-2 py-1 text-xs rounded-full ${activeCategory === category.id
                      ? 'bg-white/20'
                      : 'bg-gray-200 dark:bg-gray-700'
                    }`}>
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
                <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              {/* View Toggle */}
              <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'grid'
                      ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                >
                  <FiGrid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'list'
                      ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                >
                  <FiList size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Tag Filters */}
          <div className="flex flex-wrap gap-2">
            {allTags.slice(0, 10).map((tag) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${selectedTags.includes(tag)
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid/List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${viewMode}-${searchTerm}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'flex flex-col'} gap-6`}
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                viewMode={viewMode}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 mx-auto mb-6 text-gray-300 dark:text-gray-600">
              <FiFilter className="w-full h-full" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your filters or search term
            </p>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Total Projects', value: projectsData.all.length, color: 'from-blue-500 to-cyan-400' },
            { label: 'Completed', value: projectsData.all.filter(p => p.status === 'completed').length, color: 'from-green-500 to-emerald-400' },
            { label: 'Technologies', value: allTags.length, color: 'from-purple-500 to-pink-400' },
            { label: 'Featured', value: projectsData.all.filter(p => p.featured).length, color: 'from-amber-500 to-orange-400' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-2xl bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800"
            >
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}