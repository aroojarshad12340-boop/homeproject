'use client';

import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
           <span className="inline-block px-4 py-2 bg-orange-100 border border-raduis border-amber-200 text-luxury-gold rounded-full text-sm font-semibold uppercase tracking-wider mb-4 mt-20">
            Get In Touch
            </span>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">
             <span className="font-bold">Start Your Design Journey</span>
          </h2>
        
          <p className="text-gray-500 max-w-2xl mx-auto">
            Ready to transform your space? Reach out to schedule a consultation or ask us anything about our services.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/3"
          >
            {/* Form - Name aur Email ek line mein */}
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="(555) 284-9103"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-amber-400 text-white px-8 py-3 rounded-md font-medium hover:bg-amber-700 transition shadow-md"
              >
                Send Message
                <span className="text-lg">→</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side - Contact Info (Icons) aur Studio Hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-1/3"
          >
            {/* Contact Info Icons - Studio Hours ke opr */}
            <div className="space-y-3 mb-6">
              {/* Phone */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <HiPhone className="text-amber-600 text-sm" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="text-sm font-medium text-gray-900">(555) 284-9103</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <HiMail className="text-amber-600 text-sm" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-medium text-gray-900">hello@studio.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <HiLocationMarker className="text-amber-600 text-sm" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="text-sm font-medium text-gray-900">NYC, USA</p>
                </div>
              </div>
            </div>

            {/* Studio Hours */}
            <div className="bg-gray-50 p-6 rounded-lg">
              {/* Hours Header with Icon */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <HiClock className="text-amber-600 text-sm" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Studio Hours
                </h3>
              </div>
              
              <div className="space-y-3">
                {/* Monday - Friday */}
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-gray-900">Monday - Friday</span>
                  <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                </div>

                {/* Saturday */}
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-gray-900">Saturday</span>
                  <span className="text-gray-600">10:00 AM - 3:00 PM</span>
                </div>

                {/* Sunday */}
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-gray-900">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>

              {/* Decorative Line */}
              <div className="w-12 h-0.5 bg-amber-600 mt-4"></div>
              
              {/* Additional Info */}
              <p className="text-xs text-gray-500 mt-3">
                *Consultations available by appointment only
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;