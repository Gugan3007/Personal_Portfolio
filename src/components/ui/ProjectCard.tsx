import { motion } from 'motion/react';
import { Github, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from './Button';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  role?: string;
  githubUrl?: string;
  liveUrl?: string;
  delay?: number;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  role,
  githubUrl,
  liveUrl,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      className="group relative h-full"
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />
      
      <motion.div
        whileHover={{ y: -12, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative bg-gradient-to-br from-white/90 to-indigo-50/70 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col border border-white/50"
      >
        <div className="h-2.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
        
        <div className="p-7 sm:p-9 flex-grow flex flex-col space-y-5">
          <div className="flex items-start justify-between mb-4">
            <h3 className="group-hover:text-blue-700 transition-colors duration-300 flex-1 pr-6 text-xl sm:text-2xl font-bold text-gray-900">
              {title}
            </h3>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="flex-shrink-0"
            >
              <Sparkles className="text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={28} />
            </motion.div>
          </div>
          
          {role && (
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring" }}
              className="text-sm font-semibold text-blue-600 mb-5 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full inline-block w-fit"
            >
              {role}
            </motion.p>
          )}
          
          <p className="text-gray-700 mb-7 flex-grow leading-relaxed text-base font-medium">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2.5 mb-7">
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: delay + (index * 0.06), type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.15, y: -3 }}
                className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all cursor-default shadow-sm hover:shadow-md"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          
          <div className="flex gap-3 mt-auto">
            {githubUrl && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(githubUrl, '_blank')}
                className="flex-1"
              >
                <Github size={18} />
                GitHub
              </Button>
            )}
            {liveUrl && (
              <Button
                variant="primary"
                size="sm"
                onClick={() => window.open(liveUrl, '_blank')}
                className="flex-1"
              >
                <ExternalLink size={18} />
                Demo
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}