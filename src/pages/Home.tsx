import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Download, Code2, Rocket, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Button } from '../components/ui/Button';
import profileImage from 'figma:asset/df2f62cb04e4ae7a1df6fa2e60b0f7e6ba0bcce4.png';
import resumePDF from '../assets/Gugan_S_S.pdf';
import ParallaxLayer from '../components/ParallaxLayer';
import MouseParallax from '../components/MouseParallax';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const stats = [
    { icon: Code2, label: 'Projects Completed', value: '6' },
    { icon: Rocket, label: 'Technologies', value: '20+' },
    { icon: Users, label: 'Collaborations', value: '3' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 animate-gradient pt-24 md:pt-0">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.03, 0.15, 0.03],
                scale: [1, 1.3, 1],
                x: [0, Math.random() * 150 - 75, 0],
                y: [0, Math.random() * 150 - 75, 0],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 3,
              }}
              className="absolute w-24 h-24 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white rounded-full blur-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Geometric shapes with parallax */}
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <motion.div
            style={{ y: y1 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 border-4 border-white rounded-full"
          />
          <motion.div
            style={{ y: y2 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 border-4 border-white rounded-2xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, type: "spring", stiffness: 80 }}
              className="text-white space-y-8 md:space-y-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-block px-8 py-4 bg-white/20 backdrop-blur-md rounded-full shadow-xl border border-white/30"
              >
                <span className="text-base sm:text-lg font-medium">👋 Welcome to my portfolio</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent animate-shimmer">
                  Gugan
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-blue-100"
              >
                Computer Science Engineering Undergraduate
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="text-lg sm:text-xl md:text-2xl text-gray-100 leading-relaxed max-w-2xl mb-10"
              >
                Passionate about building innovative solutions through systems programming, 
                web development, and AI-driven automation. Currently pursuing B.Tech in CSE 
                at Amrita Vishwa Vidyapeetham, Coimbatore.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="flex flex-wrap gap-5"
              >
                <Link to="/projects">
                  <motion.div whileHover={{ scale: 1.08, y: -3 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="primary" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-2xl px-8 py-4 text-lg font-semibold rounded-xl hover:shadow-blue-300/50 transition-all">
                      View Projects
                      <ArrowRight size={22} />
                    </Button>
                  </motion.div>
                </Link>
                <motion.div whileHover={{ scale: 1.08, y: -3 }} whileTap={{ scale: 0.95 }}>
                  <a href={resumePDF} download="Gugan_S_S_Resume.pdf">
                    <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl px-8 py-4 text-lg font-semibold rounded-xl hover:shadow-white/30 transition-all">
                      <Download size={22} />
                      Download Resume
                    </Button>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Image with Mouse Parallax */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: 60 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4, type: "spring", stiffness: 80 }}
              className="relative hidden lg:block"
            >
              <MouseParallax strength={15}>
                <motion.div
                  animate={{
                    y: [0, -25, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative z-10"
                >
                  <div className="w-full max-w-lg mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 rounded-3xl blur-3xl opacity-40 animate-pulse-glow" />
                    <motion.img
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ duration: 0.3 }}
                      src={profileImage}
                      alt="Gugan S S"
                      className="relative rounded-3xl shadow-2xl w-full"
                    />
                  </div>
                </motion.div>
              </MouseParallax>

              {/* Floating Elements with parallax */}
              <motion.div
                style={{ y: y1 }}
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -top-10 -left-10 w-32 h-32 border-4 border-white/30 rounded-full"
              />
              <motion.div
                style={{ y: y2 }}
                animate={{
                  rotate: -360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -bottom-10 -right-10 w-40 h-40 border-4 border-yellow-300/30 rounded-full"
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.3),transparent_60%)] opacity-80"></div>
        {/* Floating decorative elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl animate-float-slow"></div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50" />
        
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group relative"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition duration-500" />
                
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="w-28 h-28 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-2xl group-hover:shadow-3xl relative overflow-hidden">
                    {/* Shimmer effect */}
                    <motion.div
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                    <stat.icon size={48} className="relative z-10" />
                  </div>
                </motion.div>
                
                <motion.h3
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                  className="mb-3 text-4xl sm:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-200 text-lg font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.3),transparent_60%)] opacity-80"></div>
        {/* Floating shapes */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 left-10 w-36 h-36 border-4 border-blue-300/30 rounded-full opacity-50"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 right-10 w-44 h-44 border-4 border-purple-300/30 rounded-2xl opacity-50"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <span className="text-6xl">✨</span>
            </motion.div>
            <h2 className="mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Key Highlights
            </h2>
            <p className="text-gray-100 text-lg max-w-3xl mx-auto leading-relaxed px-4">
              A glimpse into my academic journey, technical expertise, and professional achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Academic Excellence',
                description: 'Pursuing B.Tech in Computer Science Engineering at Amrita Vishwa Vidyapeetham, Coimbatore (2023-2027)',
                icon: '🎓',
                gradient: 'from-blue-500 via-cyan-500 to-blue-600',
                delay: 0,
              },
              {
                title: 'Technical Proficiency',
                description: 'Expertise in multiple programming languages including C, C++, Python, Java, JavaScript, and Haskell',
                icon: '💻',
                gradient: 'from-purple-500 via-pink-500 to-red-500',
                delay: 0.1,
              },
              {
                title: 'Web Development',
                description: 'Skilled in modern web technologies: HTML, CSS, Tailwind, Bootstrap, and JavaScript frameworks',
                icon: '🌐',
                gradient: 'from-green-500 via-emerald-500 to-teal-500',
                delay: 0.2,
              },
              {
                title: 'AI & NLP',
                description: 'Experience in building AI-driven systems, including mood-based music recommendation using NLP',
                icon: '🤖',
                gradient: 'from-orange-500 via-red-500 to-pink-500',
                delay: 0.3,
              },
              {
                title: 'Embedded Systems',
                description: 'Hands-on experience with STM32F4, Raspberry Pi, and hardware-software integration',
                icon: '⚙️',
                gradient: 'from-indigo-500 via-purple-500 to-pink-600',
                delay: 0.4,
              },
              {
                title: 'Problem Solving',
                description: 'Strong foundation in Data Structures, Algorithms, and Systems Programming',
                icon: '🧩',
                gradient: 'from-yellow-500 via-orange-500 to-red-500',
                delay: 0.5,
              },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: highlight.delay }}
                className="group relative"
              >
                {/* Animated glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${highlight.gradient} rounded-2xl opacity-0 group-hover:opacity-75 blur-xl transition duration-500`} />
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.4, type: 'spring' }}
                  className="relative bg-gradient-to-br from-white/90 to-blue-50/80 backdrop-blur-md rounded-2xl shadow-xl p-8 hover:shadow-3xl transition-all h-full border-2 border-white/50 group-hover:border-white"
                >
                  {/* Icon with animation */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: highlight.delay + 0.3, type: 'spring', stiffness: 200 }}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    className="text-6xl mb-6 inline-block"
                  >
                    {highlight.icon}
                  </motion.div>
                  
                  <h4 className={`mb-4 text-2xl font-bold bg-gradient-to-r ${highlight.gradient} bg-clip-text text-transparent`}>
                    {highlight.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {highlight.description}
                  </p>

                  {/* Corner decoration */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: highlight.delay,
                    }}
                    className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r ${highlight.gradient}`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.2, 1],
                x: [0, Math.random() * 50 - 25, 0],
                y: [0, Math.random() * 50 - 25, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-32 h-32 bg-white rounded-full blur-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <span className="text-6xl">🚀</span>
            </motion.div>
            
            <h2 className="mb-6 text-white">Let's Work Together</h2>
            <p className="mb-10 text-lg max-w-2xl mx-auto leading-relaxed text-gray-100">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl shadow-2xl hover:shadow-3xl transition-all font-semibold text-lg group"
              >
                Get In Touch
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={24} />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}