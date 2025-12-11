import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  skills: string[];
  delay?: number;
}

export default function SkillCard({ icon, title, skills, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      className="group relative h-full"
    >
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-75 blur-lg transition-all duration-500" />
      
      <motion.div
        whileHover={{ scale: 1.05, y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative bg-gradient-to-br from-white/90 to-blue-50/70 backdrop-blur-md rounded-2xl shadow-xl p-8 sm:p-10 hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-white/50"
      >
        <motion.div
          whileHover={{ rotate: 360, scale: 1.15 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 flex items-center justify-center mb-8 mx-auto text-white shadow-xl group-hover:shadow-2xl"
        >
          {icon}
        </motion.div>
        
        <h3 className="text-center mb-8 group-hover:text-blue-700 transition-colors duration-300 text-2xl font-bold text-gray-900">
          {title}
        </h3>
        
        <div className="space-y-4 flex-grow">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + (index * 0.06), type: "spring" }}
              whileHover={{ x: 12, scale: 1.05 }}
              className="flex items-center gap-4 group/item"
            >
              <motion.div
                whileHover={{ scale: 1.8, rotate: 180 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex-shrink-0"
              />
              <span className="text-gray-800 group-hover/item:text-blue-700 transition-colors duration-300 font-medium text-lg">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}