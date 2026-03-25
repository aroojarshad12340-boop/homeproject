'use client';

import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    { 
      title: 'Modern Penthouse', 
      category: 'Residential', 
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      location: 'New York'
    },
    { 
      title: 'Corporate Office', 
      category: 'Commercial', 
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      location: 'Los Angeles'
    },
    { 
      title: 'Minimalist Apartment', 
      category: 'Residential', 
      image: './images/images.jpg',
      location: 'Miami'
    },
    { 
      title: 'Luxury Villa', 
      category: 'Residential', 
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800',
      location: 'Dubai'
    },
    { 
      title: 'Boutique Hotel', 
      category: 'Hospitality', 
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
      location: 'Paris'
    },
    { 
      title: 'Design Studio', 
      category: 'Commercial', 
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800',
      location: 'London'
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-luxury-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section - Center aligned */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-luxury-gold">Projects</span>
            </h2>
            <p className="text-gray-600">
              Explore our latest interior design work and get inspired for your next project.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid - 3 columns */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-lg h-80 cursor-pointer"
            >
              <div className="relative w-full h-full">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Location Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-luxury-gold/90 text-white text-xs px-3 py-1 rounded-full">
                    {project.location}
                  </span>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                  <p className="text-luxury-gold text-sm font-medium mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  
                  {/* View Project Link */}
                  <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Project</span>
                    <span className="group-hover:translate-x-2 transition">→</span>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-amber-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg inline-flex items-center gap-2 group">
            View All Projects
            <span className="group-hover:translate-x-1 transition">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;