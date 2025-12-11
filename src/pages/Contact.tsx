import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'gugansaravanan3007@gmail.com',
      href: 'mailto:gugansaravanan3007@gmail.com',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9150158370',
      href: 'tel:+919150158370',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Coimbatore, Tamil Nadu, India',
      href: '#',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/gugan',
      color: 'hover:bg-gray-900',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/guganss',
      color: 'hover:bg-blue-600',
    },
    {
      icon: Mail,
      name: 'Email',
      href: 'mailto:gugansaravanan3007@gmail.com',
      color: 'hover:bg-red-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-24 md:py-32 overflow-hidden" style={{marginTop: '5rem'}}>
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.05, 0.4, 0.05],
                scale: [1, 2, 1],
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
        
        {/* Pulsing connection nodes */}
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
              }}
              className="absolute w-4 h-4 bg-white rounded-full"
              style={{
                left: `${(i * 12 + 10)}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        {/* Animated circles */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.3, 1] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/4 right-1/4 w-96 h-96 border-4 border-white rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-1/4 left-1/4 w-80 h-80 border-4 border-white rounded-full"
          />
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <span className="text-6xl">📧</span>
            </motion.div>
            <h1 className="mb-6">Get In Touch</h1>
            <p className="text-xl max-w-3xl mx-auto px-4 leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's create something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(147,51,234,0.4),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.4),transparent_50%)] opacity-80"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40"></div>
        
        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -120, 0],
                x: [0, Math.random() * 80 - 40, 0],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute w-2 h-2 bg-blue-300 rounded-full blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: 0,
              }}
            />
          ))}
        </div>
        
        {/* Floating decorative elements */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-white/90 to-blue-50/70 backdrop-blur-md rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all block border border-white/50 group relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
                
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white relative z-10 shadow-lg`}
                >
                  <info.icon size={36} />
                </motion.div>
                <h4 className="mb-2 text-gray-900 font-bold text-xl relative z-10">{info.title}</h4>
                <p className="text-gray-800 text-base font-medium relative z-10">{info.value}</p>
              </motion.a>
            ))}
          </div>

          {/* Contact Info and Social */}
          <div className="grid lg:grid-cols-1 gap-12">
            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle subtitle="Connect with me on social media">
                Let's Connect
              </SectionTitle>

              <div className="bg-gradient-to-br from-indigo-900/70 to-purple-900/70 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-indigo-500/30">
                <h4 className="mb-4 text-white">Available For</h4>
                <ul className="space-y-3">
                  {[
                    'Full-time opportunities',
                    'Freelance projects',
                    'Technical collaborations',
                    'Open source contributions',
                    'Speaking engagements',
                    'Mentorship programs',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                      <span className="text-gray-200">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/90 to-purple-50/70 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white/50">
                <h4 className="mb-6">Social Media</h4>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className={`flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:text-white transition-all ${social.color}`}
                    >
                      <div className="w-12 h-12 rounded-lg bg-white shadow-md flex items-center justify-center text-gray-900">
                        <social.icon size={24} />
                      </div>
                      <div>
                        <p className="font-medium">{social.name}</p>
                        <p className="text-sm opacity-80">Connect with me</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white text-center"
              >
                <h5 className="mb-2">Response Time</h5>
                <p className="text-sm">
                  I typically respond within 24-48 hours during weekdays. 
                  For urgent inquiries, please reach out via email or phone.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.3),transparent_60%)] opacity-80"></div>
        {/* Floating decorative element */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl animate-float-slow"></div>
        </div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Find Me Here
            </h2>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              Located in Coimbatore, Tamil Nadu - The Manchester of South India
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-white/95 to-indigo-50/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border-2 border-white/60"
          >
            <div className="relative h-[500px] w-full">
              {/* Location info overlay */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md rounded-xl shadow-xl p-4 border border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Coimbatore, Tamil Nadu</h4>
                    <p className="text-sm text-gray-600">Based in India</p>
                  </div>
                </div>
              </motion.div>

              {/* OpenStreetMap Embed - More reliable */}
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=76.7488%2C10.9167%2C77.1488%2C11.1167&layer=mapnik&marker=11.0168%2C76.9558"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Coimbatore Location Map"
                className="rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}