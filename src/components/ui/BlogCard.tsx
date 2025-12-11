import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  delay?: number;
}

export default function BlogCard({
  id,
  title,
  excerpt,
  date,
  readTime,
  tags,
  delay = 0,
}: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      whileHover={{ y: -8 }}
      className="bg-gradient-to-br from-white/90 to-purple-50/70 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group h-full flex flex-col border border-white/50"
    >
      <div className="h-56 sm:h-64 bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 relative overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-full h-full flex items-center justify-center text-white text-7xl sm:text-8xl opacity-20"
        >
          📝
        </motion.div>
      </div>
      
      <div className="p-7 sm:p-8 flex-grow flex flex-col">
        <div className="flex items-center gap-5 text-sm text-gray-600 mb-4 font-semibold">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{readTime}</span>
          </div>
        </div>
        
        <h3 className="mb-4 group-hover:text-blue-700 transition-colors duration-300 text-xl sm:text-2xl font-bold leading-tight text-gray-900">
          {title}
        </h3>
        
        <p className="text-gray-700 mb-6 leading-relaxed text-base flex-grow font-medium">
          {excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2.5 mb-6">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        <Link
          to={`/blog/${id}`}
          className="inline-flex items-center gap-2 text-blue-600 hover:gap-4 transition-all group"
        >
          Read More
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
