'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { 
  HiOutlineUsers, 
  HiOutlineStar, 
  HiOutlineClock, 
  HiOutlineHeart 
} from 'react-icons/hi';

const AboutPage = () => {
  const [showMoreStory, setShowMoreStory] = useState(false);
  const [activeValue, setActiveValue] = useState<number | null>(null);

  const stats = [
    { icon: HiOutlineUsers, value: '500+', label: 'Happy Clients' },
    { icon: HiOutlineStar, value: '15', label: 'Design Awards' },
    { icon: HiOutlineClock, value: '10+', label: 'Years Experience' },
    { icon: HiOutlineHeart, value: '250+', label: 'Projects Completed' },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Creative Director',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Michael Chen',
      role: 'Senior Designer',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Emma Williams',
      role: 'Project Manager',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
  ];

  // Extra content for "Learn More" button
  const extraStoryContent = {
    achievements: [
      'Featured in Architectural Digest 2024',
      'Winner of International Design Awards',
      'Projects in 15+ countries worldwide',
      '100+ certified sustainable designs'
    ],
    philosophy: 'We believe that great design is not just about aesthetics, but about creating spaces that enhance well-being, productivity, and happiness. Our holistic approach considers every aspect of the human experience.',
    vision: 'To be the leading force in sustainable luxury design, setting new standards for excellence and innovation in the interior design industry.'
  };

  // Extra content for stats buttons
  const statsDetails = [
    {
      title: 'Happy Clients',
      details: [
        '98% client satisfaction rate',
        '80% repeat clients',
        'Clients in 25+ cities',
        'Featured testimonials from top brands'
      ]
    },
    {
      title: 'Design Awards',
      details: [
        'Best Residential Design 2024',
        'Sustainable Design Award 2023',
        'Innovation in Commercial Design 2023',
        'Emerging Studio of the Year 2022'
      ]
    },
    {
      title: 'Years Experience',
      details: [
        'Founded in 2014',
        'Team of 25+ experts',
        '1000+ successful projects',
        'Continuous learning & innovation'
      ]
    },
    {
      title: 'Projects Completed',
      details: [
        '250+ residential projects',
        '150+ commercial spaces',
        '100+ hospitality venues',
        '50+ international projects'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Amber/Orange Gradient */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        {/* Animated Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-300 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl text-amber-600 font-bold text-sm uppercase tracking-wider mb-4 block"
            >
              About Us
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold text-black mb-6"
            >
              Creating <span className="text-amber-600">Extraordinary</span> Spaces
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-amber-600 leading-relaxed"
            >
              We are a passionate team of designers dedicated to transforming ordinary spaces into extraordinary experiences.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section with Light Gray Background */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-amber-600">Story</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded in 2014, Atelier Studio began with a simple mission: to create spaces 
                that inspire and elevate the human experience. What started as a small team 
                of passionate designers has grown into an award-winning interior design studio 
                with projects spanning the globe.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Today, we continue to push the boundaries of design, combining timeless 
                elegance with innovative solutions.
              </p>
              
              {/* Learn More Button with Extra Content */}
              <motion.button
                onClick={() => setShowMoreStory(!showMoreStory)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition shadow-lg hover:shadow-xl mb-6"
              >
                {showMoreStory ? 'Show Less' : 'Learn More'}
              </motion.button>

              {/* Extra Content - Shows when button clicked */}
              <AnimatePresence>
                {showMoreStory && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-amber-50 p-6 rounded-xl mt-4 border border-amber-200">
                      <h3 className="text-xl font-bold text-amber-800 mb-4">Our Achievements</h3>
                      <ul className="space-y-3 mb-6">
                        {extraStoryContent.achievements.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3 text-gray-700"
                          >
                            <span className="w-2 h-2 bg-amber-600 rounded-full" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                      <p className="text-gray-600 mb-4">{extraStoryContent.philosophy}</p>
                      <p className="text-amber-700 font-medium">{extraStoryContent.vision}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Image 1 with hover effect */}
              <motion.div
                whileHover={{ scale: 1.05, rotateZ: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative overflow-hidden rounded-2xl shadow-xl group"
              >
                <img 
                  src="./images/images.jpg" 
                  alt="Interior Design"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Image 2 with hover effect */}
              <motion.div
                whileHover={{ scale: 1.05, rotateZ: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative overflow-hidden rounded-2xl shadow-xl mt-8 group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800" 
                  alt="Interior Design"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Amber/Orange Gradient */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="text-center text-white cursor-pointer relative"
                onClick={() => setActiveValue(activeValue === index ? null : index)}
              >
                <motion.div 
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="text-2xl text-white" />
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-amber-100 text-sm">{stat.label}</div>

                {/* Popup Details on Click */}
                <AnimatePresence>
                  {activeValue === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute z-10 mt-2 p-4 bg-white rounded-lg shadow-xl text-gray-800 w-48 left-1/2 transform -translate-x-1/2"
                    >
                      <h4 className="font-bold text-amber-600 mb-2">{statsDetails[index].title}</h4>
                      <ul className="text-xs space-y-1">
                        {statsDetails[index].details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-amber-400">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Light Background */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-amber-600">Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The creative minds behind our success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => {
              const [showBio, setShowBio] = useState(false);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4"
                    >
                      <motion.button 
                        whileHover={{ scale: 1.2 }}
                        className="w-10 h-10 bg-white rounded-full text-amber-600 flex items-center justify-center font-bold hover:bg-amber-600 hover:text-white transition"
                      >
                        f
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.2 }}
                        className="w-10 h-10 bg-white rounded-full text-amber-600 flex items-center justify-center font-bold hover:bg-amber-600 hover:text-white transition"
                      >
                        in
                      </motion.button>
                    </motion.div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-amber-600 mb-3">{member.role}</p>
                    
                    {/* View Bio Button */}
                    <button
                      onClick={() => setShowBio(!showBio)}
                      className="text-sm text-amber-600 hover:text-amber-800 font-medium transition"
                    >
                      {showBio ? 'Hide Bio' : 'View Bio'}
                    </button>

                    {/* Bio Content */}
                    <AnimatePresence>
                      {showBio && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden mt-4"
                        >
                          <p className="text-sm text-gray-600 bg-amber-50 p-4 rounded-lg border border-amber-200">
                            {member.name} has over 10 years of experience in luxury interior design,
                            leading numerous award-winning projects across the globe.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section with Light Amber Background */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Our <span className="text-amber-600">Values</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Creativity', 
                desc: 'We push boundaries to create unique designs.', 
                icon: '🎨',
                more: 'Our creative process involves innovative thinking, unique concepts, and artistic expression that sets trends rather than follows them.'
              },
              { 
                title: 'Quality', 
                desc: 'We use the finest materials and craftsmanship.', 
                icon: '✨',
                more: 'We partner with premium suppliers and skilled artisans to ensure every detail meets our exacting standards.'
              },
              { 
                title: 'Integrity', 
                desc: 'We are honest and transparent in our work.', 
                icon: '🤝',
                more: 'We believe in building trust through clear communication, ethical practices, and delivering on our promises.'
              }
            ].map((item, i) => {
              const [showMore, setShowMore] = useState(false);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center group border border-amber-100"
                >
                  <motion.div 
                    className="text-5xl mb-4 group-hover:scale-110 transition-transform cursor-pointer"
                    whileHover={{ rotate: 360 }}
                    onClick={() => setShowMore(!showMore)}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  
                  {/* Read More Button */}
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="text-amber-600 text-sm font-medium hover:text-amber-800 transition"
                  >
                    {showMore ? 'Read Less' : 'Read More'}
                  </button>

                  {/* Extra Content */}
                  <AnimatePresence>
                    {showMore && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-4 pt-4 border-t border-amber-200"
                      >
                        <p className="text-sm text-gray-500">{item.more}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section with Black Gradient */}
      <section className="py-20 relative overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0">
    <img 
      src="./images/bg.jpg" 
      alt="Luxury Interior"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/30" />
  </div>

  {/* Decorative Bubbles */}
  <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
  <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl" />
  <div className="absolute top-1/2 right-20 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl" />
  <div className="absolute bottom-20 left-20 w-36 h-36 bg-white/5 rounded-full blur-3xl" />

  {/* Main Content Box */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-12 md:p-16 shadow-2xl"
    >
      <div className="text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          Ready to Start Your Project?
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Let's discuss how we can transform your space into something extraordinary.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/contact" 
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition shadow-xl"
          >
            Get in Touch
          </Link>
        </motion.div>

        {/* Decorative Bottom Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mt-8"
        />
      </div>
    </motion.div>
  </div>
</section>
    </div>
  );
};

export default AboutPage;