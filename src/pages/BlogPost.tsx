import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function BlogPost() {
  const { id } = useParams();

  // Mock blog post data - in a real app, this would fetch from an API
  const blogPosts: Record<string, any> = {
    '1': {
      title: 'Understanding Data Structures: A Comprehensive Guide',
      content: `
        <p>Data structures are fundamental building blocks in computer science and software engineering. They provide efficient ways to organize, store, and manipulate data, which is crucial for writing performant and scalable applications.</p>

        <h3>What Are Data Structures?</h3>
        <p>A data structure is a specialized format for organizing, processing, retrieving, and storing data. Different types of data structures are suited to different kinds of applications, and some are highly specialized to specific tasks.</p>

        <h3>Common Data Structures</h3>
        <p>Let's explore some of the most commonly used data structures:</p>

        <h4>1. Arrays</h4>
        <p>Arrays are the simplest and most widely used data structure. They store elements in contiguous memory locations, allowing for constant-time access to any element using its index.</p>

        <h4>2. Linked Lists</h4>
        <p>Linked lists consist of nodes where each node contains data and a reference to the next node. They provide efficient insertion and deletion operations.</p>

        <h4>3. Stacks and Queues</h4>
        <p>Stacks follow the Last-In-First-Out (LIFO) principle, while queues follow First-In-First-Out (FIFO). Both are essential for many algorithms and system operations.</p>

        <h4>4. Trees</h4>
        <p>Tree structures organize data hierarchically. Binary search trees, AVL trees, and red-black trees are common variations that provide efficient searching, insertion, and deletion.</p>

        <h4>5. Hash Tables</h4>
        <p>Hash tables provide near-constant time complexity for insertion, deletion, and lookup operations, making them incredibly efficient for many use cases.</p>

        <h3>Choosing the Right Data Structure</h3>
        <p>Selecting the appropriate data structure depends on several factors:</p>
        <ul>
          <li>The type of operations you need to perform most frequently</li>
          <li>Memory constraints</li>
          <li>Time complexity requirements</li>
          <li>The nature of your data</li>
        </ul>

        <h3>Conclusion</h3>
        <p>Understanding data structures is essential for any programmer. They form the foundation of efficient algorithm design and are crucial for technical interviews and real-world software development. Practice implementing these structures from scratch to truly understand their inner workings.</p>
      `,
      date: 'Nov 15, 2024',
      readTime: '8 min read',
      tags: ['Data Structures', 'Algorithms', 'Programming'],
      author: 'Gugan S S',
    },
    '2': {
      title: 'Getting Started with Embedded Systems Programming',
      content: `
        <p>Embedded systems are everywhere around us - from your smartphone to your car, from home appliances to industrial machinery. Understanding how to program these systems opens up a world of opportunities in hardware-software integration.</p>

        <h3>What Are Embedded Systems?</h3>
        <p>An embedded system is a computer system with a dedicated function within a larger mechanical or electrical system. Unlike general-purpose computers, embedded systems are designed to perform specific tasks efficiently.</p>

        <h3>Getting Started with STM32</h3>
        <p>The STM32 family of microcontrollers is an excellent starting point for embedded systems development. These powerful ARM Cortex-M based MCUs offer a great balance of performance, features, and cost.</p>

        <h4>Essential Tools</h4>
        <ul>
          <li>STM32 Development Board</li>
          <li>STM32CubeIDE or Keil MDK</li>
          <li>ST-Link Debugger</li>
          <li>Basic electronics components</li>
        </ul>

        <h3>Working with Raspberry Pi</h3>
        <p>Raspberry Pi serves as an excellent platform for learning Linux-based embedded systems. It bridges the gap between microcontroller programming and full-fledged computer systems.</p>

        <h3>Key Concepts in Embedded Programming</h3>
        <ul>
          <li>Register-level programming</li>
          <li>Interrupt handling</li>
          <li>Real-time operating systems (RTOS)</li>
          <li>Communication protocols (I2C, SPI, UART)</li>
          <li>Power management</li>
        </ul>

        <h3>Practical Projects</h3>
        <p>Start with simple projects like LED blinking and gradually move to complex systems involving sensors, actuators, and communication modules. Hands-on experience is crucial in embedded systems development.</p>

        <h3>Conclusion</h3>
        <p>Embedded systems programming requires understanding both hardware and software. It's a challenging but rewarding field that combines theoretical knowledge with practical skills. Start small, be patient, and keep experimenting!</p>
      `,
      date: 'Oct 28, 2024',
      readTime: '12 min read',
      tags: ['Embedded Systems', 'STM32', 'Hardware'],
      author: 'Gugan S S',
    },
    '3': {
      title: 'Building Modern Web Applications with React and Tailwind',
      content: `
        <p>Modern web development has evolved significantly with the introduction of powerful frameworks like React and utility-first CSS frameworks like Tailwind CSS. Together, they provide an excellent developer experience and enable rapid application development.</p>

        <h3>Why React?</h3>
        <p>React has become the go-to library for building user interfaces due to its component-based architecture, virtual DOM, and rich ecosystem. It allows developers to create reusable UI components and manage application state efficiently.</p>

        <h3>Why Tailwind CSS?</h3>
        <p>Tailwind CSS takes a utility-first approach to styling, providing low-level utility classes that you can compose to build custom designs. This approach eliminates the need to write custom CSS and speeds up development significantly.</p>

        <h3>Setting Up Your Project</h3>
        <p>Modern tooling makes it easy to get started. Using Vite, you can set up a React + Tailwind project in minutes with optimal build performance and hot module replacement.</p>

        <h3>Component Architecture</h3>
        <p>Good component architecture is crucial for maintainable applications. Follow these principles:</p>
        <ul>
          <li>Keep components small and focused</li>
          <li>Use composition over inheritance</li>
          <li>Separate concerns (logic, presentation, styling)</li>
          <li>Make components reusable and configurable</li>
        </ul>

        <h3>Responsive Design</h3>
        <p>Tailwind's responsive utilities make it easy to create designs that work across all devices. Use breakpoint prefixes to apply styles conditionally based on screen size.</p>

        <h3>Performance Optimization</h3>
        <p>Consider these optimization techniques:</p>
        <ul>
          <li>Code splitting and lazy loading</li>
          <li>Memoization with useMemo and useCallback</li>
          <li>Virtual scrolling for long lists</li>
          <li>Image optimization</li>
        </ul>

        <h3>Conclusion</h3>
        <p>React and Tailwind CSS together provide a powerful toolkit for modern web development. Focus on building reusable components, writing clean code, and optimizing for performance. The combination offers both developer productivity and excellent user experience.</p>
      `,
      date: 'Oct 10, 2024',
      readTime: '10 min read',
      tags: ['React', 'Web Development', 'Tailwind CSS'],
      author: 'Gugan S S',
    },
  };

  const post = blogPosts[id || '1'] || blogPosts['1'];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-blue-100/80 via-purple-100/80 to-indigo-100/80">
      {/* Back Button */}
      <section className="py-8 bg-gradient-to-r from-blue-50/60 via-purple-50/60 to-indigo-50/60 border-b backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog">
            <Button variant="outline" size="sm">
              <ArrowLeft size={18} />
              Back to Blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-100">
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>By {post.author}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(59,130,246,0.3),transparent_60%)] opacity-80"></div>
        {/* Floating decorative elements */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl animate-float"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t"
          >
            <div className="flex items-center justify-between">
              <h4>Share this article</h4>
              <Button variant="outline">
                <Share2 size={18} />
                Share
              </Button>
            </div>
          </motion.div>

          {/* Author Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 p-8 bg-gradient-to-br from-blue-900/80 to-purple-900/80 backdrop-blur-lg rounded-2xl border border-blue-500/30"
          >
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white flex-shrink-0">
                <span>GS</span>
              </div>
              <div>
                <h4 className="mb-2 text-white">About {post.author}</h4>
                <p className="text-gray-200 mb-4">
                  Computer Science Engineering undergraduate at Amrita Vishwa Vidyapeetham, 
                  passionate about systems programming, web development, and AI-driven automation.
                </p>
                <Link to="/about">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(99,102,241,0.3),transparent_60%)] opacity-80"></div>
        {/* Floating decorative elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl animate-float-slow"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h3 className="mb-8 text-white">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(blogPosts)
              .filter(([postId]) => postId !== id)
              .slice(0, 2)
              .map(([postId, relatedPost]) => (
                <Link key={postId} to={`/blog/${postId}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-white/90 to-blue-50/70 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all border border-white/50"
                  >
                    <h5 className="mb-3 text-gray-900 font-bold text-xl">{relatedPost.title}</h5>
                    <div className="flex items-center gap-4 text-sm text-gray-700 mb-3 font-semibold">
                      <span>{relatedPost.date}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {relatedPost.tags.map((tag: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
