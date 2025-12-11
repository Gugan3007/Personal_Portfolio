import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award, Calendar, Trophy, Sparkles } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import HighwayTimeline from '../components/HighwayTimeline';
import bluestockCert from 'figma:asset/c76b918304fa991701377ecc674531ff691f39c3.png';
import tataCrucibleCert from 'figma:asset/0adde60f945a5a0603fee48d534ca526bacf7b9c.png';
import mobilityXCert from 'figma:asset/e52e64b184d33168a529dcdc951ea56fdaf32812.png';
import unstopCert from 'figma:asset/e30da9bd156139227d76cb7d7130685aa23f7688.png';
import isroHackathonCert from 'figma:asset/26715e9a65b1a78515c44440d5aabee020b8f99d.png';
import narcoticsCert from 'figma:asset/28bbbd6ad4ccc98af4efdc8641cd64b4f7d96a5a.png';
import amritaSevanavaram from 'figma:asset/27a15f140cb0e09487f67b58ccca65dca9ab6467.png';
import amritaSeedBallCert from 'figma:asset/3d8fb3282495d0b9d48edf5b452e3fc96dc0669e.png';
import adobeHackathonCert from 'figma:asset/77f5349968ef6be84c77ae37778a4ee6e1e5ed3b.png';
import googleAICert from 'figma:asset/5c17692f140394037de70704031ac4d7d47879ef.png';
import uptricksOfferLetter from 'figma:asset/e86111c508e992cef0c9abf38229b7792e84d7f1.png';

export default function Experience() {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Amrita Vishwa Vidyapeetham, Coimbatore',
      duration: '2023 - 2027',
      grade: 'Currently pursuing',
      description: 'Comprehensive curriculum covering Data Structures, Algorithms, Systems Programming, Web Development, and AI-driven systems.',
      highlights: [
        'Focus on algorithmic problem-solving',
        'Hands-on projects in embedded systems',
        'Active participation in technical clubs',
      ],
    },
    {
      degree: 'Higher Secondary (12th Grade)',
      institution: 'The Indian Public School',
      duration: '2022 - 2023',
      grade: '92/100 in SSLC',
      description: 'Completed higher secondary education with strong foundation in Mathematics and Computer Science.',
      highlights: [
        'Scored 92% in board examinations',
        'Active in extracurricular activities',
      ],
    },
    {
      degree: 'Secondary (10th Grade)',
      institution: 'The Indian Public School',
      duration: '2020 - 2021',
      grade: '87/100 in HSC',
      description: 'Completed secondary education with distinction.',
      highlights: [
        'Scored 87% in board examinations',
        'Served as School Cultural Secretary',
      ],
    },
  ];

  const internships = [
    {
      position: 'Software Development Engineer (SDE) Intern',
      company: 'Bluestock Fintech',
      duration: 'Sep 2025 - Oct 2025',
      location: 'Remote',
      description: 'Completed intensive internship program focused on software development, financial technology solutions, and full-stack development.',
      responsibilities: [
        'Developed and maintained financial technology applications',
        'Implemented backend services and API integrations',
        'Collaborated with cross-functional teams',
        'Participated in code reviews and agile development',
      ],
      technologies: ['Python', 'JavaScript', 'REST APIs', 'Git'],
    },
  ];

  const achievements = [
    {
      title: 'School Cultural Secretary',
      organization: 'The Indian Public School',
      year: '2022',
      description: 'Led cultural activities and coordinated events for the entire school, demonstrating leadership and organizational skills.',
    },
    {
      title: 'Academic Excellence',
      organization: 'Amrita Vishwa Vidyapeetham',
      year: '2023-Present',
      description: 'Consistent academic performance with focus on systems programming and algorithmic problem-solving.',
    },
    {
      title: 'Project Excellence',
      organization: 'Various Projects',
      year: '2024-2025',
      description: 'Successfully completed multiple technical projects including NLP-based systems and embedded robotics.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-24 md:py-32 overflow-hidden" style={{marginTop: '5rem'}}>
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.5, 1],
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
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

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <span className="text-6xl">🎓</span>
            </motion.div>
            <h1 className="mb-6">Experience & Education</h1>
            <p className="text-xl max-w-3xl mx-auto px-4 leading-relaxed">
              My academic journey, professional experiences, and notable achievements 
              that have shaped my technical expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(59,130,246,0.4),transparent_50%),radial-gradient(circle_at_60%_70%,rgba(139,92,246,0.4),transparent_50%)] opacity-80"></div>
        {/* Floating background orbs */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
          <SectionTitle centered subtitle="Academic background and qualifications">
            <div className="flex items-center justify-center gap-3">
              <GraduationCap size={36} />
              Education
            </div>
          </SectionTitle>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-white/90 to-blue-50/70 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all border border-white/60"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                      <GraduationCap size={32} />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="mb-2 text-gray-900 font-bold text-2xl">{edu.degree}</h3>
                        <p className="text-blue-700 font-semibold text-lg">{edu.institution}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700 mt-2 md:mt-0 font-semibold">
                        <Calendar size={18} />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-800 mb-2 font-semibold text-base">{edu.grade}</p>
                    <p className="text-gray-700 mb-4 text-base font-medium">{edu.description}</p>
                    <div className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-600" />
                          <span className="text-gray-800 font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-fuchsia-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(192,38,211,0.4),transparent_60%)] opacity-80"></div>
        {/* Floating decorative elements */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="Professional work experience and internships">
            <div className="flex items-center justify-center gap-3">
              <Briefcase size={36} />
              Professional Experience
            </div>
          </SectionTitle>

          <div className="max-w-4xl mx-auto space-y-8">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-500" />
                
                <div className="relative bg-gradient-to-br from-white/90 to-purple-50/70 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-all border border-white/60">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg"
                      >
                        <Briefcase size={32} />
                      </motion.div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="mb-2 text-gray-900 font-bold text-2xl">{internship.position}</h3>
                          <p className="text-purple-700 font-semibold text-lg">{internship.company}</p>
                          <p className="text-gray-700 text-base mt-1 font-medium">{internship.location}</p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-800 mt-2 md:mt-0 bg-purple-50 px-4 py-2 rounded-lg font-semibold">
                          <Calendar size={18} />
                          <span>{internship.duration}</span>
                        </div>
                      </div>
                      <p className="text-gray-800 mb-4 leading-relaxed text-base font-medium">{internship.description}</p>
                      <div className="mb-4">
                        <h5 className="mb-3 text-gray-900 font-bold text-lg">Key Responsibilities:</h5>
                        <div className="space-y-2">
                          {internship.responsibilities.map((resp, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                              <span className="text-gray-800 leading-relaxed font-medium">{resp}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {internship.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-3 py-1.5 bg-purple-50 text-purple-600 rounded-full text-sm hover:bg-purple-100 transition-all cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.5, 1],
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="inline-block mb-6"
            >
              <Trophy size={64} className="text-yellow-400" />
            </motion.div>
            <h2 className="mb-6 text-white">Certificates & Achievements</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Recognition and accomplishments throughout my learning journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* ISRO Bharatiya Antariksh Hackathon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-500 transition-opacity" />
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-white/95 to-orange-50/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/60"
              >
                <div className="absolute top-0 right-0 p-4">
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Sparkles className="text-yellow-500" size={24} />
                  </motion.div>
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    ISRO Bharatiya Antariksh Hackathon 2025
                  </h4>
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={isroHackathonCert}
                      alt="ISRO Bharatiya Antariksh Hackathon Certificate"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-base text-gray-800 text-center mt-4 font-semibold">
                    Space Innovation Challenge
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Narcotics Control Bureau */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-500 transition-opacity" />
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-white/95 to-blue-50/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/60"
              >
                <div className="absolute top-0 right-0 p-4">
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  >
                    <Award className="text-amber-600" size={24} />
                  </motion.div>
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-center bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    Narcotics Control Bureau
                  </h4>
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={narcoticsCert}
                      alt="Narcotics Control Bureau Certificate"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-base text-gray-800 text-center mt-4 font-semibold">
                    Say Yes to Life, No to Drugs - June 2025
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Amrita Sevanavaram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-500 transition-opacity" />
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-white/95 to-blue-50/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/60"
              >
                <div className="absolute top-0 right-0 p-4">
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    <GraduationCap className="text-purple-600" size={24} />
                  </motion.div>
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-center bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                    Sevanavaram - Amrita Seed Ball Making
                  </h4>
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={amritaSevanavaram}
                      alt="Amrita Sevanavaram Certificate"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-base text-gray-800 text-center mt-4 font-semibold">
                    Amma's 70th Birthday Celebrations - Sep 2023
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Bluestock Certificate */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-500 transition-opacity" />
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-white/95 to-blue-50/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/60"
              >
                <div className="p-6">
                  <h4 className="mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Bluestock Fintech - SDE Internship
                  </h4>
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={bluestockCert}
                      alt="Bluestock Fintech Certificate"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-base text-gray-800 text-center mt-4 font-semibold">
                    Sep 2025 - Oct 2025
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Tata Crucible */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-500 transition-opacity" />
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-white/95 to-blue-50/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/60"
              >
                <div className="p-6">
                  <h4 className="mb-4 text-center bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    TATA Crucible Campus Quiz 2025
                  </h4>
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={tataCrucibleCert}
                      alt="Tata Crucible Certificate"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-base text-gray-800 text-center mt-4 font-semibold">
                    Campus Quiz 2023
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* MobilityX */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-500 transition-opacity" />
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-white/95 to-blue-50/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/60"
              >
                <div className="p-6">
                  <h4 className="mb-4 text-center bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    MobilityX - Innovation Challenge
                  </h4>
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={mobilityXCert}
                      alt="MobilityX Certificate"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-base text-gray-800 text-center mt-4 font-semibold">
                    Team Paradox - Round 1 Participant
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Unstop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-500 transition-opacity" />
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-white/95 to-blue-50/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/60"
              >
                <div className="p-6">
                  <h4 className="mb-4 text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Unstop - Data Sprint Challenge
                  </h4>
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={unstopCert}
                      alt="Unstop Certificate"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-base text-gray-800 text-center mt-4 font-semibold">
                    Data Analytics Participant
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Amrita Seed Ball */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-lime-600 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-500 transition-opacity" />
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-white/95 to-blue-50/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/60"
              >
                <div className="p-6">
                  <h4 className="mb-4 text-center bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                    Amrita Seed Ball Making
                  </h4>
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={amritaSeedBallCert}
                      alt="Amrita Seed Ball Certificate"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-base text-gray-800 text-center mt-4 font-semibold">
                    Amma's 70th Birthday Celebrations - Sep 2023
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Adobe Hackathon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-500 transition-opacity" />
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-white/95 to-blue-50/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/60"
              >
                <div className="p-6">
                  <h4 className="mb-4 text-center bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                    Adobe Hackathon 2025
                  </h4>
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={adobeHackathonCert}
                      alt="Adobe Hackathon Certificate"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-base text-gray-800 text-center mt-4 font-semibold">
                    Team Innovate - Round 2 Participant
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Google AI */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-500 transition-opacity" />
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-white/95 to-blue-50/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/60"
              >
                <div className="p-6">
                  <h4 className="mb-4 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Google AI Challenge 2025
                  </h4>
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={googleAICert}
                      alt="Google AI Certificate"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-base text-gray-800 text-center mt-4 font-semibold">
                    Team Alpha - Finalist
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Uptricks Internship Offer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0, type: 'spring' }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-500 transition-opacity" />
              <motion.div
                whileHover={{ scale: 1.05, y: -15, rotateY: 5 }}
                transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
                className="relative bg-gradient-to-br from-white/95 to-blue-50/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/60"
              >
                <div className="absolute top-0 right-0 p-4 z-20">
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.3, 1] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 3 }}
                  >
                    <Briefcase className="text-orange-600" size={28} />
                  </motion.div>
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-center bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                    Uptricks Services - Full Stack Internship
                  </h4>
                  <div className="rounded-xl overflow-hidden shadow-2xl relative group/img">
                    <motion.img
                      whileHover={{ scale: 1.15, rotate: 2 }}
                      transition={{ duration: 0.6, type: 'spring' }}
                      src={uptricksOfferLetter}
                      alt="Uptricks Services Internship Offer Letter"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-base text-gray-800 text-center mt-4 font-semibold">
                    Internship Offer - Dec 2025 to Jan 2026
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-violet-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_55%,rgba(124,58,237,0.4),transparent_60%)] opacity-80"></div>
        {/* Floating decorative elements */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="Notable achievements and recognitions">
            <div className="flex items-center justify-center gap-3">
              <Award size={36} />
              Achievements
            </div>
          </SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gradient-to-br from-white/90 to-yellow-50/70 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all text-center border border-white/50 relative"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white"
                >
                  <Award size={36} />
                </motion.div>
                <h4 className="mb-2 text-gray-900 font-bold text-xl">{achievement.title}</h4>
                <p className="text-blue-700 mb-2 font-semibold text-base">{achievement.organization}</p>
                <p className="text-gray-700 text-base mb-3 font-semibold">{achievement.year}</p>
                <p className="text-gray-800 text-base font-medium">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highway Timeline */}
      <HighwayTimeline />
    </div>
  );
}