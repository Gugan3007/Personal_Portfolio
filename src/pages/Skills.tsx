import { motion, useScroll, useTransform } from 'motion/react';
import { Code2, Globe, Database, Wrench, Brain, Layers } from 'lucide-react';
import { useRef } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import SkillCard from '../components/ui/SkillCard';
import ParallaxLayer from '../components/ParallaxLayer';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code2 size={32} />,
      title: 'Programming Languages',
      skills: ['C', 'C++', 'Python', 'Java', 'Haskell', 'JavaScript'],
    },
    {
      icon: <Globe size={32} />,
      title: 'Web Technologies',
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'React', 'JavaScript'],
    },
    {
      icon: <Database size={32} />,
      title: 'Databases',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
    },
    {
      icon: <Wrench size={32} />,
      title: 'Tools & Software',
      skills: ['Git', 'GitHub', 'VS Code', 'MATLAB', 'ChatGPT', 'Linux'],
    },
    {
      icon: <Layers size={32} />,
      title: 'Embedded Systems',
      skills: ['STM32F4', 'Raspberry Pi', 'Arduino', 'Hardware Integration'],
    },
    {
      icon: <Brain size={32} />,
      title: 'Soft Skills',
      skills: ['Critical Thinking', 'Problem Solving', 'Adaptability', 'Team Collaboration'],
    },
  ];

  const techStack = [
    { name: 'Python', level: 90, color: 'bg-yellow-500' },
    { name: 'C/C++', level: 85, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 80, color: 'bg-yellow-400' },
    { name: 'React', level: 75, color: 'bg-cyan-500' },
    { name: 'Java', level: 70, color: 'bg-red-500' },
    { name: 'Tailwind CSS', level: 85, color: 'bg-teal-500' },
  ];

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
                scale: [1, 2, 1],
                x: [0, Math.random() * 200 - 100, 0],
                y: [0, Math.random() * 200 - 100, 0],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 3,
              }}
              className="absolute w-32 h-32 bg-white rounded-full blur-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        {/* Animated code symbols */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          {['</>', '{}', '[]', '()', '<>', '//'].map((symbol, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -200, 0],
                x: [0, Math.random() * 100 - 50, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                delay: i * 2,
              }}
              className="absolute text-6xl font-bold text-white"
              style={{
                left: `${(i * 20 + 10)}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>
        
        {/* Rotating circles with parallax */}
        <ParallaxLayer speed={0.4} className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            className="absolute top-10 right-10 w-96 h-96 border-4 border-white rounded-full"
          />
        </ParallaxLayer>
        <ParallaxLayer speed={0.6} className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-10 left-10 w-80 h-80 border-4 border-white rounded-full"
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
              animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <span className="text-6xl">⚡</span>
            </motion.div>
            <h1 className="mb-6">Technical Skills</h1>
            <p className="text-xl max-w-3xl mx-auto px-4 leading-relaxed">
              A comprehensive overview of my technical expertise across programming languages, 
              frameworks, tools, and methodologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.4),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.4),transparent_50%)] opacity-80"></div>
        
        {/* Animated wave pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100 V200 H0 Z"
              fill="rgba(255,255,255,0.1)"
              animate={{ d: ['M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100 V200 H0 Z', 'M0,100 Q250,150 500,100 T1000,100 T1500,100 T2000,100 V200 H0 Z', 'M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100 V200 H0 Z'] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -150, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: 0,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
          <SectionTitle centered subtitle="Diverse technical skills acquired through academic projects and hands-on experience">
            Core Competencies
          </SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={index}
                icon={category.icon}
                title={category.title}
                skills={category.skills}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Summary */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.3),transparent_60%)] opacity-70"></div>
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-float-slow"></div>
        </div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
          <SectionTitle centered subtitle="Proficiency levels in key technologies">
            Tech Stack Summary
          </SectionTitle>

          <div className="max-w-4xl mx-auto space-y-8 px-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h5 className="text-white font-bold text-lg">{tech.name}</h5>
                  <span className="text-gray-200 font-semibold">{tech.level}%</span>
                </div>
                <div className="h-4 bg-gray-700/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                    className={`h-full ${tech.color} rounded-full shadow-lg`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(6,182,212,0.3),transparent_50%)] opacity-80"></div>
        {/* Floating decorative elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-80 h-80 bg-indigo-300/30 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl animate-float"></div>
        </div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <SectionTitle centered subtitle="Key areas where I excel and continue to grow">
            Expertise Areas
          </SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Data Structures & Algorithms',
                description: 'Strong foundation in algorithmic problem-solving and optimization',
                icon: '📊',
                color: 'from-blue-500 to-blue-600',
              },
              {
                title: 'Systems Programming',
                description: 'Low-level programming and system architecture understanding',
                icon: '⚙️',
                color: 'from-purple-500 to-purple-600',
              },
              {
                title: 'Web Development',
                description: 'Full-stack development with modern frameworks and tools',
                icon: '🌐',
                color: 'from-green-500 to-green-600',
              },
              {
                title: 'Embedded Systems',
                description: 'Hardware-software integration and microcontroller programming',
                icon: '🔧',
                color: 'from-orange-500 to-orange-600',
              },
              {
                title: 'AI & NLP',
                description: 'Natural language processing and intelligent systems',
                icon: '🤖',
                color: 'from-pink-500 to-pink-600',
              },
              {
                title: 'Optimization',
                description: 'Performance tuning and algorithm efficiency',
                icon: '⚡',
                color: 'from-yellow-500 to-yellow-600',
              },
              {
                title: 'Database Management',
                description: 'Design and optimization of relational databases',
                icon: '💾',
                color: 'from-cyan-500 to-cyan-600',
              },
              {
                title: 'Problem Solving',
                description: 'Analytical thinking and creative solution development',
                icon: '🧩',
                color: 'from-red-500 to-red-600',
              },
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-white/90 to-blue-50/70 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all border border-white/50"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center text-3xl`}>
                  {area.icon}
                </div>
                <h5 className="mb-2 text-center text-gray-900 font-bold text-lg">{area.title}</h5>
                <p className="text-gray-700 text-center text-base font-medium">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Placeholder */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-fuchsia-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(217,70,239,0.3),transparent_50%)] opacity-70"></div>
        {/* Floating decorative element */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/40 rounded-full blur-3xl animate-float-slow"></div>
        </div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <SectionTitle centered subtitle="Professional certifications and completed courses">
            Certifications & Courses
          </SectionTitle>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-white/90 to-purple-50/70 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 text-center border border-white/60"
          >
            <div className="text-6xl mb-6">🏆</div>
            <h3 className="mb-4 text-gray-900 text-2xl font-bold">Professional Development</h3>
            <p className="text-gray-700 mb-6 text-lg font-medium">
              Continuously expanding my knowledge through courses, certifications, and practical experience. 
              Recent completion includes a Software Development Engineer internship at Bluestock Fintech.
            </p>
            <div className="flex justify-center mt-8">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 max-w-md border border-blue-200">
                <h5 className="mb-2 text-gray-900 font-bold text-lg">Software Development Engineer (SDE)</h5>
                <p className="text-gray-700 text-base font-semibold">Bluestock Fintech - Sep 2025 to Oct 2025</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}