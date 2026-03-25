'use client';

import { motion } from 'framer-motion';
import { 
  HiOutlineHome,
  HiOutlineOfficeBuilding,
  HiOutlineUsers,
  HiOutlineSparkles,
  HiOutlineColorSwatch,
  HiOutlineCog,
  HiOutlineStar
} from 'react-icons/hi';

const Hero = () => {
  const services = [
    { icon: HiOutlineHome, label: 'Residential Design' },
    { icon: HiOutlineOfficeBuilding, label: 'Commercial Design' },
    { icon: HiOutlineUsers, label: 'Hospitality Design' },
    { icon: HiOutlineSparkles, label: 'Color Consulting' },
    { icon: HiOutlineColorSwatch, label: 'Material Selection' },
    { icon: HiOutlineCog, label: 'Project Management' },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="./images/bg.jpg" 
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content - Sab kuch LEFT side mein */}
      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center h-full max-w-3xl pt-32">
            {/* Rating Stars */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <HiOutlineStar key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-white/80 text-sm">(4.9) 500+ reviews</span>
            </motion.div>

            {/* Heading - Size choti krdi */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Transforming{' '}
              <span className="text-amber-400">Spaces</span>
              <br />
              Into Extraordinary
              <br />
              Experiences
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-white/80 mb-8 max-w-lg"
            >
              Award-winning interior design studio crafting timeless, 
              sophisticated environments for discerning clients.
            </motion.p>

            {/* Buttons - Paragraph ke neeche */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4 mb-12"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-amber-600 transition"
              >
                View Our Work
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-white hover:text-black transition"
              >
                Contact Us
              </motion.button>
            </motion.div>

            {/* Services Buttons - Yeh bhi left side mein */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-4 max-w-lg"
            >
              {/* First Row - 4 buttons */}
              <div className="grid grid-cols-4 gap-2 mb-2">
                {services.slice(0, 4).map((service, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ y: -3 }}
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-lg hover:bg-white/30 transition-all"
                  >
                    <service.icon className="text-lg text-amber-400 mx-auto mb-1" />
                    <span className="text-[10px] text-white block text-center">
                      {service.label.split(' ')[0]}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Second Row - 2 buttons */}
              <div className="flex gap-2 mt-2">
                {services.slice(4, 6).map((service, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ y: -3 }}
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-lg hover:bg-white/30 transition-all flex-1"
                  >
                    <service.icon className="text-lg text-amber-400 mx-auto mb-1" />
                    <span className="text-[10px] text-white block text-center">
                      {service.label.split(' ')[0]}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-4 pt-3 border-t border-white/20">
                <div className="text-center">
                  <div className="text-sm font-bold text-amber-400">15+</div>
                  <div className="text-[10px] text-white/60">Years</div>
                </div>
                <div className="text-center border-x border-white/20">
                  <div className="text-sm font-bold text-amber-400">12</div>
                  <div className="text-[10px] text-white/60">Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-amber-400">100%</div>
                  <div className="text-[10px] text-white/60">Happy</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 47 Projects Card - Right side pe */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute top-32 right-10 lg:right-20 z-20"
      >
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-white">47+</span>
            </div>
            <div>
              <p className="text-white/60 text-xs">Projects</p>
              <p className="text-base font-bold text-white">Completed</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;