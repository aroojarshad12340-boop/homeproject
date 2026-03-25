'use client';

import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { number: '47+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '12', label: 'Design Awards' },
    { number: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <section className="section-padding bg-luxury-beige mt-16 md:mt-20"> {/* Sirf yahan margin-top add kiya */}
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-luxury-gold mb-2 italic">{stat.number}</div>
              <div className="text-gray-600 italic ">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};