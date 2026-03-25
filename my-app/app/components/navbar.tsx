'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX, HiPhone } from 'react-icons/hi';
import { BiMoon } from 'react-icons/bi';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2">
            <div className="ml-2">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                Atelier STUDIO
              </h1>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Dark Mode Button */}
            <button
              onClick={handleDarkMode}
              className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Toggle dark mode"
            >
              <BiMoon className={`text-xl transition-colors ${
                isDarkMode ? 'text-amber-400' : 'text-gray-700 dark:text-gray-300'
              }`} />
            </button>
            
            {/* Book Consultation Button */}
            <Link href="/contact">
              <button className="bg-amber-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-amber-700 transition flex items-center gap-2">
                <HiPhone className="text-base" />
                Book Consultation
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden py-4 border-t dark:border-gray-700"
          >
            {/* Navigation Links */}
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-3 px-2 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile Actions - Two Separate Buttons */}
            <div className="flex flex-col gap-3 mt-6 pt-4 border-t dark:border-gray-700">
              {/* Dark Mode Button - Full Width */}
              <button
                onClick={handleDarkMode}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                <BiMoon className={`text-xl ${
                  isDarkMode ? 'text-amber-400' : 'text-gray-700 dark:text-gray-300'
                }`} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </span>
              </button>

              {/* Book Consultation Button - Full Width */}
              <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full">
                <button className="w-full bg-amber-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-amber-700 transition flex items-center justify-center gap-2">
                  <HiPhone className="text-base" />
                  <span>Book Consultation</span>
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;