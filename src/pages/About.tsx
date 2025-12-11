import { motion, useScroll, useTransform } from 'motion/react';
import { BookOpen, Target, Lightbulb, Award } from 'lucide-react';
import { useRef } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ParallaxLayer from '../components/ParallaxLayer';
import profileImage from 'figma:asset/df2f62cb04e4ae7a1df6fa2e60b0f7e6ba0bcce4.png';

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-24 md:py-32 overflow-hidden" style={{marginTop: '5rem'}}>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.05, 0.25, 0.05],
                scale: [1, 1.8, 1],
                x: [0, Math.random() * 150 - 75, 0],
                y: [0, Math.random() * 150 - 75, 0],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
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
        
        {/* Animated geometric shapes with parallax */}
        <ParallaxLayer speed={0.3} className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <motion.div
            animate={{ rotate: 360, x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute top-20 left-10 w-64 h-64 border-4 border-white rounded-full"
          />
        </ParallaxLayer>
        <ParallaxLayer speed={0.5} className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <motion.div
            animate={{ rotate: -360, x: [0, -40, 0], y: [0, 40, 0] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-20 right-10 w-80 h-80 border-4 border-white rounded-2xl"
          />
        </ParallaxLayer>
        <ParallaxLayer speed={0.7} className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.3, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 w-96 h-96 border-4 border-white/50 rounded-3xl"
          />
        </ParallaxLayer>
        
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <span className="text-7xl sm:text-8xl">👨‍💻</span>
            </motion.div>
            <h1 className="mb-6 text-5xl sm:text-6xl md:text-7xl">About Me</h1>
            <p className="text-xl sm:text-2xl max-w-4xl mx-auto px-4 leading-relaxed">
              A dedicated Computer Science Engineering undergraduate with a passion for innovation, 
              problem-solving, and building impactful technological solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.3),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.3),transparent_50%)] opacity-70"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-indigo-300/30 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '4s'}}></div>
        </div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 md:mb-28">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 md:p-8"
              >
                {/* Floating parallax orbs */}
                <motion.div
                  aria-hidden
                  className="absolute -top-10 -left-10 w-48 h-48 bg-blue-300/30 rounded-full blur-3xl"
                  animate={{ x: [0, 12, -6, 0], y: [0, 8, -8, 0] }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  aria-hidden
                  className="absolute -bottom-12 right-4 w-56 h-56 bg-purple-300/25 rounded-full blur-3xl"
                  animate={{ x: [0, -14, 8, 0], y: [0, -10, 6, 0] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  aria-hidden
                  className="absolute top-1/3 left-1/2 w-32 h-32 bg-indigo-300/20 rounded-2xl blur-2xl"
                  animate={{ x: [0, 8, -6, 0], y: [0, -8, 6, 0], rotate: [0, 5, -4, 0] }}
                  transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="relative">
                  <img
                    src={profileImage}
                    alt="Gugan S S"
                    className="relative rounded-3xl shadow-2xl w-full"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="absolute -left-2 -top-2 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3"
                  >
                    <Award size={28} />
                    <div>
                      <p className="text-xs uppercase tracking-wide opacity-80">Experience</p>
                      <p className="text-sm font-semibold">2+ Years Building</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-gray-100"
            >
              <SectionTitle>Who I Am</SectionTitle>
              <p>
                I am <strong className="text-white">Gugan S S</strong>, a Computer Science Engineering undergraduate at
                <strong className="text-white"> Amrita Vishwa Vidyapeetham, Coimbatore</strong> (2023-2027). My journey in
                technology is driven by curiosity to understand how systems work and a determination to build solutions that make a difference.
              </p>
              <p>
                With a strong foundation in programming languages such as C, C++, Python, Java, Haskell, and JavaScript, I approach
                every challenge with a systematic mindset. My interests span <strong className="text-white">Data Structures and Algorithms</strong>,
                <strong className="text-white"> Systems Programming</strong>, and <strong className="text-white">Web Development</strong>.
              </p>
              <p>
                Beyond academics, I contribute to projects that blend creativity with technical rigor—from AI-powered
                recommenders—turning theoretical knowledge into practical applications.
              </p>
              <p>
                I believe in collaboration, continuous learning, and precision in execution, aiming to deliver innovative projects that push what
                technology can achieve.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 mb-24"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                <Target size={24} />
              </div>
              <h3 className="text-gray-900 font-bold text-2xl">What I'm Currently Doing</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-white/50"
              >
                <h5 className="mb-3 text-purple-700 font-bold text-lg">📚 Academic Pursuits</h5>
                <p className="text-gray-800 text-base font-medium">
                  Deepening my understanding of advanced algorithms, optimization techniques, and system-level 
                  programming while maintaining academic excellence at Amrita Vishwa Vidyapeetham.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-white/80 to-green-50/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-white/50"
              >
                <h5 className="mb-3 text-green-700 font-bold text-lg">🌐 Web Development Projects</h5>
                <p className="text-gray-800 text-base font-medium">
                  Building responsive and interactive web applications using modern frameworks and technologies, 
                  with a focus on user experience and performance optimization.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-white/80 to-orange-50/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-white/50"
              >
                <h5 className="mb-3 text-orange-700 font-bold text-lg">🧠 AI & Machine Learning</h5>
                <p className="text-gray-800 text-base font-medium">
                  Exploring AI-driven systems and automation, with hands-on experience in NLP, sentiment analysis, 
                  and intelligent recommendation systems.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <div>
            <SectionTitle centered>Core Values & Approach</SectionTitle>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-white/90 to-blue-50/70 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-white/60"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">Continuous Learning</h4>
                <p className="text-gray-800 text-base font-medium">
                  Committed to staying updated with emerging technologies and methodologies, 
                  constantly expanding my skill set through hands-on projects and academic research.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-white/90 to-purple-50/70 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-white/60"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Target size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">Precision & Quality</h4>
                <p className="text-gray-800 text-base font-medium">
                  Every line of code, every algorithm, and every design decision is made with careful consideration 
                  for efficiency, scalability, and maintainability.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-white/90 to-indigo-50/70 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-white/60"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <Lightbulb size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">Innovation & Impact</h4>
                <p className="text-gray-800 text-base font-medium">
                  Driven by the desire to create meaningful solutions that address real-world challenges 
                  and contribute positively to society through technology.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
