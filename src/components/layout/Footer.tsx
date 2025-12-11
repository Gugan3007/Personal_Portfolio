import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/gugan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/guganss', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:gugansaravanan3007@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-24 -left-24 w-96 h-96 border-4 border-white rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-24 -right-24 w-96 h-96 border-4 border-white"
        />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold">GS</span>
              </motion.div>
              <span className="font-semibold text-xl">Gugan S S</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Computer Science Engineering Undergraduate passionate about building innovative solutions through code.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-11 h-11 rounded-lg bg-white/10 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 flex items-center justify-center transition-all backdrop-blur-sm"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="block"
                    >
                      {link.name}
                    </motion.span>
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-1 flex-shrink-0 text-blue-400" />
                <a
                  href="mailto:gugansaravanan3007@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  gugansaravanan3007@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-1 flex-shrink-0 text-green-400" />
                <a
                  href="tel:+919150158370"
                  className="hover:text-white transition-colors"
                >
                  +91 9150158370
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-purple-400" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p className="text-center md:text-left">
              &copy; {currentYear} Gugan S S. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}