'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { HiStar } from 'react-icons/hi';
import { useState } from 'react';

const Testimonials = () => {
  const [page, setPage] = useState(0);

  const testimonials = [
    {
      name: 'Elizabeth Taylor',
      role: 'Homeowner',
      text: 'The team transformed our apartment into something straight out of a magazine. Every detail was perfect.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Robert Anderson',
      role: 'CEO, Anderson Corp',
      text: 'Working with Luxe Interiors was an absolute pleasure. They understood our vision perfectly and delivered beyond expectations.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Sophie Martinez',
      role: 'Design Critic',
      text: "Their attention to detail and creativity sets them apart from other design firms. A truly exceptional experience.",
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      name: 'James Wilson',
      role: 'Property Developer',
      text: 'The team transformed our show apartment into a masterpiece. It sold within days of completion. Exceptional work!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
      name: 'Maria Garcia',
      role: 'Hotel Owner',
      text: 'Our boutique hotel renovation was handled with utmost professionalism. The guests love the new design!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/63.jpg'
    },
    {
      name: 'David Chen',
      role: 'Architect',
      text: "As an architect, I'm very particular about design. Luxe Interiors exceeded my expectations in every way.",
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/91.jpg'
    }
  ];

  const nextPage = () => {
    setPage((prev) => (prev + 1) % 2); // 2 pages total (6/3 = 2)
  };

  const prevPage = () => {
    setPage((prev) => (prev - 1 + 2) % 2);
  };

  const currentTestimonials = testimonials.slice(page * 3, page * 3 + 3);

  return (
    <section className="section-padding bg-luxury-beige relative overflow-hidden mt-20">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-luxury-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-orange-100 border border-raduis border-amber-200 text-luxury-gold rounded-full text-2xl font-bold uppercase tracking-wider mb-4"
          >
            Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-luxury-gold">Reviews</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What our clients say about their experience working with us
          </p>
        </div>

        {/* 3 Reviews Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-6 ml-30 mr-30"
          >
            {currentTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all relative group"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-4xl text-luxury-gold/10">"</div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiStar key={i} className="text-luxury-gold text-xl fill-current" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 mb-6 line-clamp-4">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-luxury-gold/10">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-luxury-gold text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-luxury-gold/20 rounded-2xl transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={prevPage}
            className="w-12 h-12 bg-white rounded-full shadow-lg hover:bg-luxury-gold hover:text-white transition-all flex items-center justify-center text-xl"
          >
            ←
          </button>
          
          {/* Page Counter */}
          <div className="flex items-center px-4">
            <span className="text-luxury-gold font-bold">Page {page + 1}</span>
            <span className="text-gray-400 mx-1">/</span>
            <span className="text-gray-400">2</span>
          </div>
          
          <button 
            onClick={nextPage}
            className="w-12 h-12 bg-white rounded-full shadow-lg hover:bg-luxury-gold hover:text-white transition-all flex items-center justify-center text-xl"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          <button
            onClick={() => setPage(0)}
            className={`h-2 rounded-full transition-all duration-300 ${
              page === 0 ? 'w-8 bg-luxury-gold' : 'w-2 bg-gray-300 hover:bg-luxury-gold/50'
            }`}
          />
          <button
            onClick={() => setPage(1)}
            className={`h-2 rounded-full transition-all duration-300 ${
              page === 1 ? 'w-8 bg-luxury-gold' : 'w-2 bg-gray-300 hover:bg-luxury-gold/50'
            }`}
          />
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-2xl"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-luxury-gold">500+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center border-x border-gray-200">
            <div className="text-2xl font-bold text-luxury-gold">98%</div>
            <div className="text-sm text-gray-600">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-luxury-gold">4.9</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;