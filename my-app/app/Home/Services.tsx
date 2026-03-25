'use client';

import { motion } from 'framer-motion';
import { 
  HiHome, 
  HiOfficeBuilding, 
  HiLightBulb,
  HiOutlineSparkles,
  HiOutlineColorSwatch,
  HiOutlineCog 
} from 'react-icons/hi';

const Services = () => {
  const services = [
    {
      icon: HiHome,
      title: 'Residential Design',
      description: 'Creating personalized living environments that reflect your lifestyle, taste, and the way you truly live in your home.',
    },
    {
      icon: HiOfficeBuilding,
      title: 'Commercial Design',
      description: 'Designing and executing projects that enhance the functionality and aesthetics of commercial spaces.',
    },
    {
      icon: HiLightBulb,
      title: 'Lighting Design',
      description: 'Perfect ambiance with custom lighting solutions that enhance every space.',
    },
    {
      icon: HiOutlineSparkles,
      title: 'Hospitality Design',
      description: 'Crafting immersive guest experiences through thoughtful spatial design for hotels, restaurants, and venues.',
    },
    {
      icon: HiOutlineColorSwatch,
      title: 'Color & Material Consulting',
      description: 'Expert guidance on color palettes, finishes, and material selections that create cohesive, harmonious interiors.',
    },
    {
      icon: HiOutlineCog,
      title: 'Project Management',
      description: 'Full-service renovation oversight from concept to completion, ensuring quality at every stage.',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Our Expertise Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-6 md:px-8 py-2 md:py-3 bg-amber-500 text-white rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider shadow-md hover:bg-amber-600 transition-colors border-2 border-amber-400">
            Our Expertise
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-4 md:mb-6"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
            Comprehensive <span className="text-amber-600">Design Services</span>
          </h2>
          
          {/* Additional Paragraph */}
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            From concept to completion, we offer a full spectrum of interior design services 
            tailored to elevate every space. Our holistic approach ensures every detail 
            is carefully considered.
          </p>
        </motion.div>

        {/* Services Grid - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-12 px-4 md:px-0"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden border border-gray-100"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 md:w-16 md:h-16 bg-amber-100 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-amber-200 transition-colors"
              >
                <service.icon className="text-2xl md:text-3xl text-amber-600" />
              </motion.div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-amber-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Link */}
              <motion.a 
                href="#"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="inline-flex items-center gap-1 md:gap-2 mt-3 md:mt-4 text-amber-600 text-sm font-medium group/link"
              >
                Learn more 
                <span className="group-hover/link:translate-x-1 transition">→</span>
              </motion.a>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 border-amber-200 group-hover:border-amber-400 transition-colors" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 md:mt-16 px-4"
        >
          <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
            Ready to start your project?
          </p>
          <button className="bg-amber-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-amber-700 transition-all hover:shadow-lg border-2 border-amber-400">
            Get a Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;