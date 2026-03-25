'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus } from 'react-icons/hi';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is your design process?',
      answer: 'We start with a consultation to understand your vision, then create concepts, finalize designs, and execute the plan with regular updates.',
    },
    {
      question: 'How long does a project take?',
      answer: 'Timeline varies by project size. A single room takes 4-6 weeks, while full homes take 3-6 months.',
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer customized quotes based on project scope. Contact us for a free consultation and estimate.',
    },
    {
      question: 'Do you work with my budget?',
      answer: 'Yes! We work with various budgets and will tailor our services to meet your financial goals.',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-luxury-cream relative overflow-hidden mb-20">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Heading - Center */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 max-w-2xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-orange-100 border border-raduis border-amber-200 text-luxury-gold rounded-full text-sm font-semibold uppercase tracking-wider mb-4 mt-20">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-luxury-gold">Questions</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to know about working with us
            </p>
          </motion.div>

          {/* FAQ Cards - Center */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-3xl mx-auto space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4"
                >
                  <span className="font-semibold text-lg text-gray-800 flex-1">
                    {faq.question}
                  </span>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 bg-luxury-gold/10 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <HiMinus className="text-luxury-gold text-lg" />
                    ) : (
                      <HiPlus className="text-luxury-gold text-lg" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Still Have Questions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12 p-8 bg-luxury-gold/5 rounded-2xl max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-4">
              Can't find the answer you're looking for? Please contact our team.
            </p>
            <button className="bg-amber-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg inline-flex items-center gap-2 group">
              Contact Us
              <span className="group-hover:translate-x-1 transition">→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;