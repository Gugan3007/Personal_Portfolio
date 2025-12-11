import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';
import ParallaxLayer from '../components/ParallaxLayer';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations with Framer Motion, parallax scrolling effects, interactive UI components, and optimized performance with lazy loading. Showcases projects, skills, experience, and includes contact functionality with an interactive map. Designed with a beautiful gradient aesthetic and glassmorphism effects for a contemporary look.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'React Router'],
      role: 'Full Stack Developer & Designer',
      category: 'Web',
      
    },
    {
      title: 'StudSync - Student Management Platform',
      description: 'Developing a comprehensive cross-platform mobile application using Flutter designed to streamline student and staff management across educational institutions. Features real-time attendance tracking with automated notifications, intelligent timetable management with period scheduling, and dynamic staff availability status monitoring. Integrated Firebase backend provides cloud-based data synchronization for managing college events, academic calendars, holiday schedules, and institutional announcements. Built with an intuitive, modern UI ensuring seamless navigation and interaction for students, faculty, and administrators.',
      techStack: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Firebase Auth', 'Real-time Database', 'Material Design'],
      role: 'Lead Developer & Designer',
      category: 'Mobile',
      githubUrl: 'https://github.com/Gugan3007/Stud-Sync',
      liveUrl: 'https://drive.google.com/file/d/1RcVuT3FFzpmnVZ9i9zE2lDJwpjgLYp0_/view',
    },
    {
      title: 'Smart Irrigation System',
      description: 'Team of three (CB.SC.U4CSE23465 Sistick S, CB.SC.U4CSE23448 Srija Kesavarpu, CB.SC.U4CSE23416 Gugan SS) built an STM32-based smart irrigation setup using a soil moisture sensor, relay-driven motor, and I2C LCD for live status. Automatic mode toggles the pump based on moisture, while Manual mode keeps the pump running regardless of soil conditions.',
      techStack: ['STM32', 'C', 'I2C', 'LCD', 'Soil Moisture Sensor', 'Relay Module'],
      role: 'Embedded Developer (Team of 3)',
      category: 'Embedded',
      githubUrl: 'https://github.com/Gugan3007/Embedded_CaseStudy_Team12',
      liveUrl: 'https://youtu.be/a2a_wdq3IO0?si=9uT8pWuaGriyefTr',
    },
    {
      title: 'Car Automation System - Embedded C Project',
      description: 'Implemented automotive safety modules including seat temperature control, speed monitoring, tyre pressure monitoring, and CO emission detection. Built sensor-simulated components for alcohol detection, SOS trigger, and fuel/temperature-based alerts. Designed modular Embedded C programs for real-time responses and improved driver safety.',
      techStack: ['Embedded C', 'Sensors', 'Safety Systems', 'Real-time Logic', 'Modular Architecture'],
      role: 'Embedded Systems Developer',
      category: 'Embedded',
    },
    
    {
      title: 'ParamaEdu - Online Learning Platform',
      description: 'Developed the frontend of ParamaEdu, an online learning platform, using HTML, CSS, JavaScript, and Bootstrap in a team project, focusing on responsive design, user interface development, and cross-browser compatibility. Implemented interactive components and optimized user experience across multiple devices and browsers.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Responsive Design'],
      role: 'Frontend Developer',
      category: 'Web',
      githubUrl: 'https://github.com/Gugan3007/ParamaEdu_Educational-Platform',
      liveUrl: 'https://paramaedu-demo.com',
    },
    
  
    
  ];

  const categories = ['All', 'Mobile', 'Web', 'Embedded', 'Systems'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-24 md:py-32 overflow-hidden" style={{marginTop: '5rem'}}>
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.05, 0.3, 0.05],
                scale: [1, 1.8, 1],
                x: [0, Math.random() * 150 - 75, 0],
                y: [0, Math.random() * 150 - 75, 0],
              }}
              transition={{
                duration: Math.random() * 15 + 12,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 2,
              }}
              className="absolute w-32 h-32 bg-white rounded-full blur-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        {/* Code rain effect */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [-100, 1000],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
              className="absolute text-white font-mono text-sm"
              style={{
                left: `${i * 10}%`,
              }}
            >
              {Array.from({ length: 20 }, () => String.fromCharCode(Math.random() * 26 + 65)).join('\n')}
            </motion.div>
          ))}
        </div>
        
        {/* Rotating geometric shapes with parallax */}
        <ParallaxLayer speed={0.5} className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="absolute top-20 left-20 w-80 h-80 border-4 border-white rounded-full"
          />
        </ParallaxLayer>
        <ParallaxLayer speed={0.7} className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <motion.div
            animate={{ rotate: -360, x: [0, 50, 0] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-10 right-20 w-64 h-64 border-4 border-white"
            style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          />
        </ParallaxLayer>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <span className="text-6xl">🚀</span>
            </motion.div>
            <h1 className="mb-6">My Projects</h1>
            <p className="text-xl max-w-3xl mx-auto px-4 leading-relaxed">
              A showcase of my technical projects spanning web development, machine learning, 
              embedded systems, and algorithmic problem-solving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gradient-to-r from-indigo-900/95 via-purple-900/95 to-blue-900/95 sticky top-20 z-40 shadow-md backdrop-blur-md border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 pointer-events-none"></div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all cursor-pointer ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(79,70,229,0.4),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.4),transparent_50%)] opacity-80"></div>
        
        {/* Starfield effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        {/* Animated background orbs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-300/40 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-300/40 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-300/30 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-10 right-1/3 w-64 h-64 bg-fuchsia-300/30 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '4.5s'}}></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">{" "}
          <SectionTitle centered subtitle="Browse through my portfolio of completed and ongoing projects">
            Featured Work
          </SectionTitle>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                role={project.role}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                delay={index * 0.1}
              />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl mb-6"
              >
                🔍
              </motion.div>
              <h3 className="mb-2 text-white font-bold text-2xl">No Projects Found</h3>
              <p className="text-gray-200 text-lg font-medium">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* GitHub CTA */}
      <section className="py-24 bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.4),transparent_60%)] opacity-80"></div>
        {/* Floating decorative element */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300/40 rounded-full blur-3xl animate-float-slow"></div>
        </div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden"
          >
            {/* Animated background */}
            <div className="absolute inset-0">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.random() * 50 - 25, 0],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 5,
                    repeat: Infinity,
                  }}
                  className="absolute w-32 h-32 bg-white rounded-full blur-3xl"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <span className="text-6xl">💻</span>
              </motion.div>
              <h2 className="mb-6 text-white">Want to See More?</h2>
              <p className="mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
                Check out my GitHub profile for more projects, contributions, and open-source work.
              </p>
              <motion.a
                href="https://github.com/gugan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-2xl hover:shadow-3xl transition-all font-semibold text-lg group"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Visit My GitHub
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}