'use client';

import { motion } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi';

const CTABanner = () => {
  return (
    <section className="relative py-16 overflow-hidden">

      {/* Main Content Box */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-black/100 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-10 shadow-2xl"
        >
          <div className="text-center">
            {/* Heading - size thori chhoti */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3"
            >
              Ready to Transform{' '}
              <span className="text-amber-400">Your Space?</span>
            </motion.h2>

            {/* Paragraph - compact kiya */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Let's create something beautiful together. Start your design journey today 
              and discover how our award-winning team can transform your vision into reality. 
              Whether it's residential, commercial, or hospitality design, we bring 
              extraordinary experiences to every space we touch.
            </motion.p>

            {/* Two Buttons - size thore chhote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              {/* Book Consultation Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center gap-2 bg-amber-400 text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl"
              >
                Book Consultation
                <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* View Portfolio Button */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center gap-2 bg-black/50 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold text-base border-2 border-white/50 hover:border-white hover:bg-black/70 transition-all"
              >
                View Portfolio
                <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Decorative Bottom Line - chhoti */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mt-6"
            />
          </div>
        </motion.div>
      </div>

      {/* Corner Bubbles - thore chhote */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-40 left-40 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl" />
      <div className="absolute bottom-40 right-40 w-28 h-28 bg-white/5 rounded-full blur-2xl" />
    </section>
  );
};

export default CTABanner;