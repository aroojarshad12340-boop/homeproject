'use client';

import { motion } from 'framer-motion';

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Modern Penthouse",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
    },
    {
      title: "Luxury Villa",
      category: "Residential", 
      image: "https://images.unsplash.com/photo-1618221195710-dd0b2e9c2ca8?w=800"
    },
    {
      title: "Corporate Office",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
    },
    {
      title: "Beach House",
      category: "Vacation",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800"
    },
    {
      title: "City Apartment",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800"
    },
    {
      title: "Design Studio",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
    }
  ];

  return (
    <section className="section-padding bg-luxury-beige">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center mb-12">
           <span className="inline-block px-4 py-2 bg-orange-100 border border-raduis border-amber-200 text-luxury-gold rounded-full text-sm font-semibold uppercase tracking-wider mb-4 mt-20">
              Our Works
            </span>
          
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-luxury-gold">Projects</span>
          </h2>
          <p className="text-gray-600">Check out our latest work</p>
        </div>

        {/* Simple Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group relative h-80 overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-luxury-gold text-sm mb-2 block">{project.category}</span>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;