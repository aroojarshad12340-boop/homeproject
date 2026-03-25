'use client';

import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaPinterestP,
  FaLinkedinIn 
} from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1 - Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 tracking-wide">
              <span className="text-white">ATELIER</span>
              <span className="text-amber-500 ml-2">STUDIO</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Creating extraordinary spaces that inspire, elevate, and transform the way you experience your environment.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <HiLocationMarker className="text-amber-500" />
                <span>123 Design District, New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <HiPhone className="text-amber-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <HiMail className="text-amber-500" />
                <span>hello@atelierstudio.com</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-500"></span>
            </h4>
            <ul className="space-y-3">
              {['Home', 'Projects', 'Services', 'About', 'Contact', 'Blog'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-500"></span>
            </h4>
            <ul className="space-y-3">
              {[
                'Residential Design',
                'Commercial Design', 
                'Hospitality Design',
                'Lighting Design',
                'Color Consulting',
                'Project Management'
              ].map((service) => (
                <li key={service} className="text-gray-400 text-sm hover:text-amber-500 transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
              Stay Connected
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-500"></span>
            </h4>
            
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to receive design inspiration and exclusive offers.
            </p>
            
            {/* Newsletter Form */}
            <div className="flex mb-6">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-900 text-white text-sm rounded-l-lg focus:outline-none focus:ring-1 focus:ring-amber-500 border border-gray-700"
              />
              <button className="bg-amber-500 text-black px-4 py-2 rounded-r-lg text-sm font-medium hover:bg-amber-600 transition">
                Subscribe
              </button>
            </div>

            {/* Social Icons */}
            <div>
              <h5 className="text-sm font-medium text-gray-300 mb-3">Follow us</h5>
              <div className="flex gap-3">
                {[FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaLinkedinIn].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-black transition-all"
                  >
                    <Icon className="text-sm" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © 2024 Atelier Studio. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-amber-500 transition">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-amber-500 transition">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-amber-500 transition">Cookie Policy</a>
            </div>

            {/* Made with love */}
            <p className="text-gray-600 text-xs">
              Designed with <span className="text-amber-500">❤</span> in NYC
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;