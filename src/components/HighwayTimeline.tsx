import { motion } from 'motion/react';

export default function HighwayTimeline() {
  const milestones = [
    {
      year: '2023',
      title: 'Started B.Tech Journey',
      description: 'Began Computer Science Engineering at Amrita Vishwa Vidyapeetham',
      icon: '🎓',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      year: '2024',
      title: 'Smart Irrigation System',
      description: 'Built IoT-based automation with STM32 microcontroller and sensor integration',
      icon: '💧',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      year: '2025',
      title: 'Bluestock Fintech Internship',
      description: 'Software Development Engineer Intern',
      icon: '💼',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      year: '2027',
      title: 'B.Tech Graduation',
      description: 'Computer Science Engineering',
      icon: '🎯',
      gradient: 'from-amber-500 to-orange-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4 text-white font-bold text-5xl tracking-tight"
          >
            Career Journey
          </motion.h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Professional milestones and academic achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Connecting vertical line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-orange-400 opacity-30 hidden md:block"
          />

          {/* Timeline milestones */}
          <div className="relative space-y-32">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 100
                }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:justify-between`}
              >
                {/* Left/Right spacing div for alternating layout */}
                <div className="hidden md:block w-full md:w-5/12" />

                {/* Timeline dot - centered */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="relative flex-shrink-0 z-20"
                >
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${milestone.gradient} flex items-center justify-center text-4xl shadow-2xl border-4 border-white/20`}>
                    {milestone.icon}
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${milestone.gradient} -z-10`}
                  />
                </motion.div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  className={`bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10 w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  } text-center`}
                >
                  <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-center`}>
                    <span className={`text-3xl font-bold bg-gradient-to-r ${milestone.gradient} bg-clip-text text-transparent`}>
                      {milestone.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {milestone.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* Journey Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto relative z-30"
        >
          {[
            { icon: '🎓', label: 'Years of Study', value: '2023-2027' },
            { icon: '💼', label: 'Internships', value: '3+' },
            { icon: '🚀', label: 'Projects', value: '5+' },
            { icon: '🏆', label: 'Certificates', value: '12+' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-gradient-to-br from-white/90 to-blue-50/70 backdrop-blur-md rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all border border-white/50 relative z-10"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-gray-800 text-sm mb-1 font-semibold">{stat.label}</div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}