import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import BlogCard from '../components/ui/BlogCard';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: '1',
      title: 'Understanding Data Structures: A Comprehensive Guide',
      excerpt: 'Explore the fundamentals of data structures and their practical applications in software development. Learn how choosing the right data structure can significantly impact your code performance.',
      date: 'Nov 15, 2024',
      readTime: '8 min read',
      tags: ['Data Structures', 'Algorithms', 'Programming'],
    },
    {
      id: '2',
      title: 'Getting Started with Embedded Systems Programming',
      excerpt: 'A beginner-friendly introduction to embedded systems development using STM32 and Raspberry Pi. Discover the world of hardware-software integration and real-time systems.',
      date: 'Oct 28, 2024',
      readTime: '12 min read',
      tags: ['Embedded Systems', 'STM32', 'Hardware'],
    },
    {
      id: '3',
      title: 'Building Modern Web Applications with React and Tailwind',
      excerpt: 'Learn how to create responsive, performant web applications using React and Tailwind CSS. Discover best practices for component architecture and styling.',
      date: 'Oct 10, 2024',
      readTime: '10 min read',
      tags: ['React', 'Web Development', 'Tailwind CSS'],
    },
    {
      id: '4',
      title: 'Natural Language Processing: Sentiment Analysis Explained',
      excerpt: 'Dive into the world of NLP and learn how sentiment analysis works. Understand the algorithms behind mood detection and text classification.',
      date: 'Sep 22, 2024',
      readTime: '15 min read',
      tags: ['NLP', 'Machine Learning', 'Python'],
    },
    {
      id: '5',
      title: 'Optimizing Algorithm Performance: Tips and Tricks',
      excerpt: 'Practical strategies for improving algorithm efficiency and reducing time complexity. Learn advanced optimization techniques used in competitive programming.',
      date: 'Sep 5, 2024',
      readTime: '7 min read',
      tags: ['Algorithms', 'Optimization', 'Performance'],
    },
    {
      id: '6',
      title: 'The Future of AI-Driven Automation',
      excerpt: 'Explore emerging trends in artificial intelligence and automation. Discover how AI is transforming industries and creating new opportunities.',
      date: 'Aug 18, 2024',
      readTime: '9 min read',
      tags: ['AI', 'Automation', 'Future Tech'],
    },
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-24 md:py-32 overflow-hidden" style={{marginTop: '5rem'}}>
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.05, 0.35, 0.05],
                scale: [1, 2.2, 1],
                x: [0, Math.random() * 200 - 100, 0],
                y: [0, Math.random() * 200 - 100, 0],
              }}
              transition={{
                duration: Math.random() * 18 + 12,
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
        
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>
        
        {/* Floating keywords */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          {['React', 'Python', 'AI', 'Web', 'Code', 'Tech'].map((word, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -300, 0],
                x: [0, Math.random() * 100 - 50, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                delay: i * 2,
              }}
              className="absolute text-5xl font-bold text-white"
              style={{
                left: `${(i * 15 + 5)}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              {word}
            </motion.div>
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
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <span className="text-6xl">📝</span>
            </motion.div>
            <h1 className="mb-6">Blog & Thoughts</h1>
            <p className="text-xl max-w-3xl mx-auto mb-10 px-4 leading-relaxed">
              Insights, tutorials, and reflections on technology, programming, and continuous learning.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto px-4"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-12 bg-gradient-to-r from-blue-50/60 via-purple-50/60 to-indigo-50/60 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {allTags.map((tag, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setSearchQuery(tag)}
                className="px-4 py-2 bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-full transition-all"
              >
                #{tag}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-gradient-to-br from-indigo-950 via-purple-950 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_40%,rgba(99,102,241,0.4),transparent_50%),radial-gradient(circle_at_65%_60%,rgba(168,85,247,0.4),transparent_50%)] opacity-80"></div>
        
        {/* Aurora wave effect */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.div
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)',
              backgroundSize: '200% 100%',
            }}
          />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -200, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 12 + 10,
                repeat: Infinity,
                delay: Math.random() * 8,
              }}
              className="absolute w-1 h-1 bg-purple-300 rounded-full blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: 0,
              }}
            />
          ))}
        </div>
        
        {/* Floating background orbs */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <SectionTitle centered subtitle="Latest articles and tutorials">
            Recent Posts
          </SectionTitle>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  readTime={post.readTime}
                  tags={post.tags}
                  delay={index * 0.1}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="mb-2 text-white">No Articles Found</h3>
              <p className="text-gray-300">Try a different search term</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.4),transparent_60%)] opacity-80"></div>
        {/* Floating decorative element */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fuchsia-300/30 rounded-full blur-3xl animate-float-slow"></div>
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
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <span className="text-6xl">✉️</span>
              </motion.div>
              <h2 className="mb-6 text-white">Stay Connected</h2>
              <p className="mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
                Follow my journey and get insights on the latest tech trends, tutorials, and project updates.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl shadow-2xl hover:shadow-3xl transition-all font-semibold text-lg"
                >
                  Get In Touch
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}