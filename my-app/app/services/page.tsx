'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { 
  HiOutlineHome,
  HiOutlineOfficeBuilding,
  HiOutlineUsers,
  HiOutlineSparkles,
  HiOutlineColorSwatch,
  HiOutlineCog,
  HiOutlineLightBulb,
  HiOutlineTemplate, // 👈 HiOutlineRuler ki jagah
  HiOutlineShoppingBag,
  HiOutlineArrowRight,
  HiOutlineCheckCircle
} from 'react-icons/hi';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [showConsultation, setShowConsultation] = useState(false);

  const services = [
    {
      id: 1,
      icon: HiOutlineHome,
      title: 'Residential Design',
      shortDesc: 'Creating personalized living environments that reflect your lifestyle and taste.',
      fullDesc: 'Our residential design service goes beyond mere decoration. We create homes that tell your story, with every detail carefully considered to enhance your daily life. From cozy apartments to luxury villas, we transform houses into homes.',
      features: [
        'Custom furniture design',
        'Space planning & layout optimization',
        'Material & finish selection',
        'Lighting design',
        'Color consultation',
        'Project management'
      ],
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      price: 'Starting from $5,000',
      duration: '2-4 months',
      bgColor: 'from-amber-50 to-amber-100/50'
    },
    {
      id: 2,
      icon: HiOutlineOfficeBuilding,
      title: 'Commercial Design',
      shortDesc: 'Designing inspiring workplaces that boost productivity and brand identity.',
      fullDesc: 'We create commercial spaces that work for you. Our designs balance aesthetics with functionality, creating environments that impress clients and inspire employees. From corporate offices to retail stores, we help businesses make their mark.',
      features: [
        'Office space planning',
        'Brand integration',
        'Ergonomic furniture solutions',
        'Reception & lobby design',
        'Conference room setup',
        'Breakout areas'
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      price: 'Starting from $8,000',
      duration: '3-6 months',
      bgColor: 'from-blue-50 to-blue-100/50'
    },
    {
      id: 3,
      icon: HiOutlineUsers,
      title: 'Hospitality Design',
      shortDesc: 'Crafting memorable guest experiences for hotels, restaurants, and venues.',
      fullDesc: 'In the hospitality industry, design is everything. We create spaces that leave lasting impressions, from intimate restaurants to grand hotels. Our designs consider every touchpoint of the guest journey.',
      features: [
        'Hotel room design',
        'Restaurant & bar layout',
        'Lobby & common areas',
        'Outdoor dining spaces',
        'Event venue planning',
        'Ambient lighting'
      ],
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800',
      price: 'Starting from $10,000',
      duration: '4-8 months',
      bgColor: 'from-green-50 to-green-100/50'
    },
    {
      id: 4,
      icon: HiOutlineLightBulb,
      title: 'Lighting Design',
      shortDesc: 'Creating perfect ambiance with custom lighting solutions.',
      fullDesc: 'Lighting can transform any space. Our specialized lighting design service focuses on creating the perfect mood and functionality through layered lighting schemes, from architectural to accent lighting.',
      features: [
        'Architectural lighting',
        'Accent & task lighting',
        'Smart lighting integration',
        'Natural light optimization',
        'Fixture selection',
        'Energy-efficient solutions'
      ],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
      price: 'Starting from $3,000',
      duration: '1-2 months',
      bgColor: 'from-yellow-50 to-yellow-100/50'
    },
    {
      id: 5,
      icon: HiOutlineColorSwatch,
      title: 'Color & Material Consulting',
      shortDesc: 'Expert guidance on palettes, finishes, and material selections.',
      fullDesc: 'Choosing the right colors and materials can be overwhelming. Our consultants help you navigate the options, ensuring cohesive, harmonious interiors that stand the test of time.',
      features: [
        'Color palette development',
        'Material selection',
        'Finish specifications',
        'Sample coordination',
        'Trend analysis',
        'Sustainable options'
      ],
      image: 'https://images.unsplash.com/photo-1618221195710-dd0b2e9c2ca8?w=800',
      price: 'Starting from $2,000',
      duration: '2-4 weeks',
      bgColor: 'from-pink-50 to-pink-100/50'
    },
    {
      id: 6,
      icon: HiOutlineCog,
      title: 'Project Management',
      shortDesc: 'Full-service oversight from concept to completion.',
      fullDesc: 'Let us handle the details. Our project management service ensures your design project runs smoothly, coordinating contractors, managing timelines, and ensuring quality at every stage.',
      features: [
        'Contractor coordination',
        'Timeline management',
        'Budget oversight',
        'Quality control',
        'Permit assistance',
        'Final walkthrough'
      ],
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6a72?w=800',
      price: 'Starting from $4,000',
      duration: 'Varies by project',
      bgColor: 'from-orange-50 to-orange-100/50'
    },
    {
      id: 7,
      icon: HiOutlineTemplate, // 👈 HiOutlineRuler ki jagah HiOutlineTemplate
      title: 'Space Planning',
      shortDesc: 'Optimizing layouts for functionality and flow.',
      fullDesc: 'Great design starts with great planning. Our space planning service ensures every square foot serves a purpose, creating layouts that are both beautiful and functional.',
      features: [
        'Floor plan optimization',
        'Traffic flow analysis',
        'Furniture layout',
        'Storage solutions',
        'Ergonomic considerations',
        'Accessibility compliance'
      ],
      image: 'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?w=800',
      price: 'Starting from $2,500',
      duration: '3-6 weeks',
      bgColor: 'from-purple-50 to-purple-100/50'
    },
    {
      id: 8,
      icon: HiOutlineShoppingBag,
      title: 'Custom Furniture',
      shortDesc: 'Bespoke pieces crafted to your specifications.',
      fullDesc: 'Make your space truly unique with custom furniture. We collaborate with skilled artisans to create one-of-a-kind pieces that perfectly fit your space and style.',
      features: [
        'Custom design consultation',
        'Material selection',
        'Prototype development',
        'Artisan collaboration',
        'Quality craftsmanship',
        'Installation service'
      ],
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
      price: 'Varies by piece',
      duration: '6-12 weeks',
      bgColor: 'from-indigo-50 to-indigo-100/50'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We discuss your vision, needs, and budget to understand your project goals.',
      icon: '💬'
    },
    {
      step: '02',
      title: 'Concept Design',
      description: 'We create mood boards, sketches, and 3D visualizations for your approval.',
      icon: '✏️'
    },
    {
      step: '03',
      title: 'Design Development',
      description: 'We refine the design, select materials, and create detailed plans.',
      icon: '📐'
    },
    {
      step: '04',
      title: 'Execution',
      description: 'We bring the design to life with expert craftsmanship and project management.',
      icon: '🔨'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Glass Effect */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="./images/bg.jpg" 
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Decorative Bubbles */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4 block"
            >
              What We Do
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Our <span className="text-amber-400">Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Comprehensive interior design solutions tailored to your unique vision and lifestyle.
              From concept to completion, we bring your dreams to life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div 
                  className={`bg-gradient-to-br ${service.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-white/20`}
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:shadow-xl"
                  >
                    <service.icon className="text-3xl text-amber-600" />
                  </motion.div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {service.shortDesc}
                  </p>

                  {/* Quick Info */}
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-amber-600 font-medium">{service.price}</span>
                    <span className="text-gray-500">{service.duration}</span>
                  </div>

                  {/* Learn More Indicator */}
                  <div className="flex items-center gap-2 text-amber-600 font-medium group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <HiOutlineArrowRight className="group-hover:translate-x-1 transition" />
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {activeService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-6 pt-6 border-t border-amber-200"
                      >
                        {/* Full Description */}
                        <p className="text-gray-700 mb-4">
                          {service.fullDesc}
                        </p>

                        {/* Features */}
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="grid grid-cols-2 gap-2 mb-4">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                              <HiOutlineCheckCircle className="text-amber-600 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Request Button */}
                        <Link
                          href="/contact"
                          className="inline-block w-full text-center bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition mt-4"
                        >
                          Request This Service
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-amber-600">Process</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach to bringing your vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center group"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl group-hover:scale-110 transition group-hover:bg-amber-200">
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-amber-600">Us?</span>
              </h2>
              <div className="space-y-4">
                {[
                  { title: 'Expert Team', desc: '10+ years of industry experience' },
                  { title: 'Custom Solutions', desc: 'Tailored to your unique needs' },
                  { title: 'Quality Assurance', desc: 'Premium materials and craftsmanship' },
                  { title: 'Timely Delivery', desc: 'Projects completed on schedule' },
                  { title: 'Client Satisfaction', desc: '98% repeat client rate' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <HiOutlineCheckCircle className="text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800"
                alt="Design Team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold">500+</p>
                <p className="text-sm">Projects Completed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="./images/bg2.jpg" 
            alt="Consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Decorative Bubbles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-12 md:p-16 shadow-2xl"
          >
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              >
                Ready to Start Your <span className="text-amber-400">Project?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
              >
                Book a free consultation with our design experts today.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition shadow-xl"
                >
                  Book Free Consultation
                  <HiOutlineArrowRight />
                </Link>
              </motion.div>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "200px" }}
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

export default ServicesPage;