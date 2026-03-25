'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'hospitality', name: 'Hospitality' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Penthouse',
      category: 'residential',
      location: 'New York',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      year: '2024',
    },
    {
      id: 2,
      title: 'Corporate Office',
      category: 'commercial',
      location: 'Chicago',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      year: '2024',
    },
    {
      id: 3,
      title: 'Boutique Hotel',
      category: 'hospitality',
      location: 'Miami',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800',
      year: '2023',
    },
    {
      id: 4,
      title: 'Minimalist Apartment',
      category: 'residential',
      location: 'Los Angeles',
      image: './images/images.jpg',
      year: '2023',
    },
    {
      id: 5,
      title: 'Luxury Restaurant',
      category: 'hospitality',
      location: 'New York',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
      year: '2024',
    },
    {
      id: 6,
      title: 'Beach House',
      category: 'residential',
      location: 'Malibu',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      year: '2023',
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Our <span className="text-amber-600">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of transformative design projects
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-600 text-white text-sm px-3 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500">{project.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0">
    <img 
      src="./images/bg1.jpg" 
      alt="Luxury Interior"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40" />
  </div>

  {/* Decorative Bubbles */}
  <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
  <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl" />
  <div className="absolute top-1/2 right-20 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl" />
  <div className="absolute bottom-20 left-20 w-36 h-36 bg-white/5 rounded-full blur-3xl" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-12 md:p-16 shadow-2xl"
    >
      <div className="text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-amber-500/30"
        >
          <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          Have a <span className="text-amber-400">Project</span> in Mind?
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Let's discuss how we can bring your vision to life with our expert design team.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition shadow-lg hover:shadow-xl"
          >
            Start Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Decorative Bottom Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "150px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mt-8"
        />
      </div>
    </motion.div>
  </div>
</section>
    </div>
  );
};


export default PortfolioPage;