'use client';

import { motion } from 'framer-motion';
import { HiOutlineStar } from 'react-icons/hi';

const Awards = () => {
  const awards = [
    {
      title: 'Best Residential Design',
      organization: 'ASID Design Excellence',
      year: '2025'
    },
    {
      title: 'Hospitality Design Award',
      organization: 'HD Awards',
      year: '2025'
    },
    {
      title: 'Innovation in Commercial Design',
      organization: 'IDIA',
      year: '2024'
    },
    {
      title: 'Emerging Studio of the Year',
      organization: 'Architectural Digest',
      year: '2024'
    },
    {
      title: 'Sustainable Design Leader',
      organization: 'USGBC',
      year: '2023'
    },
    {
      title: 'Top 50 Interior Designers',
      organization: 'Lowe Interiors + Design',
      year: '2023'
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Recognition aur Awards ek line mein */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
           <span className="inline-block px-4 py-2 bg-orange-100 border border-raduis border-amber-200 text-luxury-gold rounded-full text-sm font-semibold uppercase tracking-wider mb-4 mt-20">
             Recognition 
               </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          <span className="font-light text-gray-700">Awards & Accolades</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            Our commitment to design excellence has been recognized by the industry's most prestigious institutions.
          </p>
        </motion.div>

        {/* Awards Grid - 3 cards per row, chhoti height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className="p-4 rounded-lg border border-amber-200 hover:border-amber-300 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                {/* Star Icon - Light orange */}
                <div className="mt-0.5">
                  <HiOutlineStar className="text-lg text-amber-300" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Title */}
                  <h4 className="text-sm font-semibold text-gray-800 mb-1">
                    {award.title}
                  </h4>
                  
                  {/* Organization */}
                  <p className="text-gray-500 text-xs mb-2">
                    {award.organization}
                  </p>
                  
                  {/* Year */}
                  <span className="inline-block text-sm font-light text-amber-400">
                    {award.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;