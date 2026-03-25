'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { 
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineUser,
  HiOutlinePencil,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineX
} from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: HiOutlineMail,
      title: 'Email Us',
      details: ['hello@atelierstudio.com', 'support@atelierstudio.com'],
      action: 'Send a message',
      link: 'mailto:hello@atelierstudio.com'
    },
    {
      icon: HiOutlinePhone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      action: 'Request a call',
      link: 'tel:+15551234567'
    },
    {
      icon: HiOutlineLocationMarker,
      title: 'Visit Us',
      details: ['123 Design District', 'New York, NY 10001'],
      action: 'Get directions',
      link: 'https://maps.google.com'
    },
    {
      icon: HiOutlineClock,
      title: 'Studio Hours',
      details: ['Mon-Fri: 9am - 6pm', 'Sat: 10am - 3pm', 'Sun: Closed'],
      action: 'Schedule visit',
      link: '#'
    }
  ];

  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, we recommend giving us a call."
    },
    {
      question: "Do you offer virtual consultations?",
      answer: "Yes! We offer both in-person and virtual consultations via video call for clients anywhere in the world."
    },
    {
      question: "What information should I have ready for the consultation?",
      answer: "It's helpful to have your budget range, inspiration images, room dimensions (if available), and any specific requirements or preferences."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600" 
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's <span className="text-amber-400">Connect</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Have a project in mind? We'd love to hear about it. Reach out and let's start a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-600 transition-colors">
                  <info.icon className="text-2xl text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
                <a 
                  href={info.link}
                  className="inline-flex items-center gap-1 text-amber-600 text-sm font-medium hover:gap-2 transition-all"
                >
                  {info.action}
                  <HiOutlineArrowRight />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">We'll get back to you within 24 hours</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <HiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'name' ? '100%' : '0%' }}
                      className="absolute bottom-0 left-0 h-0.5 bg-amber-600"
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'email' ? '100%' : '0%' }}
                      className="absolute bottom-0 left-0 h-0.5 bg-amber-600"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <HiOutlinePhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === 'phone' ? '100%' : '0%' }}
                    className="absolute bottom-0 left-0 h-0.5 bg-amber-600"
                  />
                </div>

                {/* Subject */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition"
                    placeholder="How can we help you?"
                  />
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === 'subject' ? '100%' : '0%' }}
                    className="absolute bottom-0 left-0 h-0.5 bg-amber-600"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <HiOutlinePencil className="absolute left-3 top-3 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === 'message' ? '100%' : '0%' }}
                    className="absolute bottom-0 left-0 h-0.5 bg-amber-600"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-amber-600 text-white py-4 rounded-lg font-semibold hover:bg-amber-700 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <HiOutlineArrowRight className="group-hover:translate-x-1 transition" />
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Location</h3>
                <div className="relative h-64 rounded-xl overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800" 
                    alt="Map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <button
                      onClick={() => setShowMap(true)}
                      className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition shadow-lg"
                    >
                      View Full Map
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 mt-4 text-sm">
                  123 Design District, New York, NY 10001
                </p>
              </div>

              {/* FAQ Preview */}
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                <Link 
                  href="/faq"
                  className="inline-flex items-center gap-1 text-amber-600 text-sm font-medium hover:gap-2 transition-all mt-4"
                >
                  View all FAQs
                  <HiOutlineArrowRight />
                </Link>
              </div>

              {/* Social Links */}
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ y: -5 }}
                      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-amber-600 hover:text-white transition-all"
                    >
                      <Icon />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-2xl max-w-md w-full p-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiOutlineCheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Map Modal */}
      <AnimatePresence>
        {showMap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowMap(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-2xl max-w-4xl w-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Our Location</h3>
                <button
                  onClick={() => setShowMap(false)}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                >
                  <HiOutlineX />
                </button>
              </div>
              <div className="h-[500px] rounded-xl overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1600" 
                  alt="Map Full"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactPage;