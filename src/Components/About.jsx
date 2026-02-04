import { motion } from 'framer-motion';
import {
  FaCode, FaServer, FaDatabase, FaMobileAlt,
  FaPuzzlePiece, FaCloud, FaRocket, FaPalette,
  FaShieldAlt, FaBolt, FaLayerGroup, FaUsers
} from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

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

// Skill categories for better scalability
const skillCategories = {
  development: [
    {
      id: 'frontend',
      title: "Frontend Development",
      description: "Building responsive, accessible interfaces with React, Vue, and modern CSS frameworks.",
      icon: <FaCode />,
      color: "from-blue-500 to-cyan-400",
      tags: ["React", "Vue.js", "TypeScript", "Tailwind"]
    },
    {
      id: 'backend',
      title: "Backend Development",
      description: "Architecting scalable APIs and microservices with Node.js, Python, and cloud-native patterns.",
      icon: <FaServer />,
      color: "from-emerald-500 to-green-400",
      tags: ["Node.js", "Python", "REST APIs", "Microservices"]
    },
    {
      id: 'mobile',
      title: "Mobile Development",
      description: "Crafting performant native and cross-platform mobile experiences for iOS & Android.",
      icon: <FaMobileAlt />,
      color: "from-amber-500 to-yellow-400",
      tags: ["React Native", "Flutter", "iOS", "Android"]
    }
  ],
  engineering: [
    {
      id: 'database',
      title: "Database Architecture",
      description: "Designing optimized database schemas and implementing efficient query strategies.",
      icon: <FaDatabase />,
      color: "from-violet-500 to-purple-400",
      tags: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
    },
    {
      id: 'devops',
      title: "DevOps & Cloud",
      description: "Implementing CI/CD pipelines, containerization, and cloud infrastructure automation.",
      icon: <FaCloud />,
      color: "from-indigo-500 to-blue-400",
      tags: ["Docker", "Kubernetes", "AWS", "CI/CD"]
    },
    {
      id: 'performance',
      title: "Performance Optimization",
      description: "Enhancing application speed, reducing latency, and optimizing resource usage.",
      icon: <FaBolt />,
      color: "from-orange-500 to-red-400",
      tags: ["Lighthouse", "Web Vitals", "Bundle Optimization"]
    }
  ],
  specializations: [
    {
      id: 'extensions',
      title: "Browser Extensions",
      description: "Developing powerful browser extensions that enhance and customize web experiences.",
      icon: <FaPuzzlePiece />,
      color: "from-rose-500 to-pink-400",
      tags: ["Chrome API", "Manifest V3", "Cross-browser"]
    },
    {
      id: 'security',
      title: "Security Engineering",
      description: "Implementing security best practices, authentication, and data protection measures.",
      icon: <FaShieldAlt />,
      color: "from-teal-500 to-emerald-400",
      tags: ["OAuth", "JWT", "Encryption", "Security Headers"]
    },
    {
      id: 'architecture',
      title: "System Architecture",
      description: "Designing scalable, maintainable software architectures and design patterns.",
      icon: <FaLayerGroup />,
      color: "from-slate-600 to-gray-500",
      tags: ["Microservices", "Monorepos", "Design Patterns"]
    }
  ]
};

// Reusable Skill Card Component
const SkillCard = ({ skill, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 }
      }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />

      <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-gray-600/70 group-hover:bg-gray-900/70">
        <motion.div
          variants={scaleIn}
          className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br ${skill.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}
        >
          <div className={`text-3xl bg-gradient-to-br ${skill.color} bg-clip-text text-transparent`}>
            {skill.icon}
          </div>
        </motion.div>

        <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-white transition-colors">
          {skill.title}
        </h3>

        <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
          {skill.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {skill.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-800/50 text-gray-300 group-hover:bg-gray-800/70 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
      </div>
    </motion.div>
  );
};

// Category Section Component
const CategorySection = ({ title, skills, icon: Icon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="mb-16 last:mb-0"
    >
      <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-gray-800/50">
          <Icon className="text-xl text-blue-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-100">{title}</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent ml-4" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={skill.id} skill={skill} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default function About() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <FaRocket className="text-blue-400 text-sm" />
            <span className="text-sm font-medium text-blue-300">Expertise & Skills</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold  mb-6 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            Crafting Digital Excellence
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            As a passionate full-stack engineer, I transform complex challenges into elegant,
            scalable solutions. With a focus on performance, user experience, and clean architecture,
            I build applications that stand the test of time.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>8+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>50+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Full-Stack Specialization</span>
            </div>
          </div>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          <CategorySection
            title="Core Development"
            skills={skillCategories.development}
            icon={FaCode}
          />

          <CategorySection
            title="Engineering & Infrastructure"
            skills={skillCategories.engineering}
            icon={FaServer}
          />

          <CategorySection
            title="Specializations"
            skills={skillCategories.specializations}
            icon={FaUsers}
          />
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-100 mb-4">
                Engineering Philosophy
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I believe in building software that's not just functional, but exceptional.
                Every line of code should be purposeful, every interface intuitive, and every
                system scalable. My approach combines technical excellence with user-centric
                design to create digital products that make a meaningful impact.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center p-6 rounded-2xl bg-gray-800/50">
                <div className="text-3xl font-bold text-blue-400">100%</div>
                <div className="text-gray-400 mt-2">Code Quality</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-800/50">
                <div className="text-3xl font-bold text-emerald-400">24/7</div>
                <div className="text-gray-400 mt-2">Reliability</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}