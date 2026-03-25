'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { 
  HiOutlineCalendar,
  HiOutlineUser,
  HiOutlineClock,
  HiOutlineTag,
  HiOutlineArrowRight,
  HiOutlineSearch,
  HiOutlineX
} from 'react-icons/hi';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [showNewsletter, setShowNewsletter] = useState(false);

  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'design-tips', name: 'Design Tips', count: 4 },
    { id: 'trends', name: 'Trends', count: 3 },
    { id: 'case-studies', name: 'Case Studies', count: 3 },
    { id: 'news', name: 'News', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Tips for Small Space Living',
      excerpt: 'Discover how to maximize every square foot of your small apartment with these clever design tricks and space-saving solutions.',
      content: 'Living in a small space doesn\'t mean sacrificing style or comfort. In this comprehensive guide, we explore innovative ways to make the most of your compact living area...',
      author: 'Sarah Johnson',
      authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
      date: 'Mar 15, 2024',
      readTime: '5 min read',
      category: 'design-tips',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      tags: ['small spaces', 'apartment living', 'organization'],
      featured: true
    },
    {
      id: 2,
      title: '2024 Interior Design Trends: What\'s In and What\'s Out',
      excerpt: 'From sustainable materials to bold colors, here are the top interior design trends shaping homes this year.',
      content: 'As we move through 2024, interior design continues to evolve with exciting new trends. We\'re seeing a shift towards sustainable materials, bold color choices, and personalized spaces...',
      author: 'Michael Chen',
      authorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
      date: 'Mar 10, 2024',
      readTime: '8 min read',
      category: 'trends',
      image: './images/images.jpg',
      tags: ['trends 2024', 'sustainable design', 'color trends'],
      featured: true
    },
    {
      id: 3,
      title: 'Case Study: Transforming a Historic Brownstone',
      excerpt: 'How we preserved the charm of a 19th-century brownstone while bringing it into the 21st century with modern amenities.',
      content: 'This historic brownstone in Brooklyn presented unique challenges and opportunities. Our team worked tirelessly to maintain the architectural integrity while updating the space for modern living...',
      author: 'Emma Williams',
      authorImage: 'https://randomuser.me/api/portraits/women/68.jpg',
      date: 'Mar 5, 2024',
      readTime: '10 min read',
      category: 'case-studies',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      tags: ['historic renovation', 'brownstone', 'case study'],
      featured: false
    },
    {
      id: 4,
      title: 'The Ultimate Guide to Sustainable Materials',
      excerpt: 'Learn about eco-friendly materials that are good for both your home and the planet.',
      content: 'Sustainable design is more than just a trend - it\'s a responsibility. This guide covers the best eco-friendly materials available today, from reclaimed wood to recycled glass...',
      author: 'Sarah Johnson',
      authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
      date: 'Feb 28, 2024',
      readTime: '7 min read',
      category: 'design-tips',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
      tags: ['sustainable', 'eco-friendly', 'materials'],
      featured: false
    },
    {
      id: 5,
      title: 'Lighting Design 101: Creating the Perfect Ambiance',
      excerpt: 'Master the art of lighting design with our comprehensive guide to layering light in your home.',
      content: 'Good lighting can transform any space. In this guide, we cover the three layers of lighting - ambient, task, and accent - and how to combine them for the perfect atmosphere...',
      author: 'Michael Chen',
      authorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
      date: 'Feb 20, 2024',
      readTime: '6 min read',
      category: 'design-tips',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
      tags: ['lighting', 'ambiance', 'home improvement'],
      featured: false
    },
    {
      id: 6,
      title: 'Atelier Studio Wins International Design Award',
      excerpt: 'We\'re thrilled to announce that our latest project has been recognized at the International Design Awards.',
      content: 'It\'s an honor to receive this recognition for our work on the Modern Penthouse project. This award is a testament to our team\'s dedication to excellence and innovation...',
      author: 'Emma Williams',
      authorImage: 'https://randomuser.me/api/portraits/women/68.jpg',
      date: 'Feb 15, 2024',
      readTime: '3 min read',
      category: 'news',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      tags: ['award', 'recognition', 'news'],
      featured: false
    },
    {
      id: 7,
      title: 'How to Mix Patterns Like a Pro',
      excerpt: 'Afraid of mixing patterns? Our designers share their secrets for creating harmonious, eye-catching combinations.',
      content: 'Pattern mixing can be intimidating, but when done right, it adds depth and personality to any room. Learn the rules (and when to break them) with our expert guide...',
      author: 'Sarah Johnson',
      authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
      date: 'Feb 8, 2024',
      readTime: '6 min read',
      category: 'design-tips',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
      tags: ['patterns', 'decor', 'styling'],
      featured: false
    },
    {
      id: 8,
      title: 'Case Study: Modern Office Design for Tech Startup',
      excerpt: 'How we created an inspiring workspace for a fast-growing tech company that reflects their brand and culture.',
      content: 'When TechStart approached us to design their new headquarters, they wanted a space that would foster creativity and collaboration. The result is a dynamic workspace that employees love...',
      author: 'Michael Chen',
      authorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
      date: 'Feb 1, 2024',
      readTime: '9 min read',
      category: 'case-studies',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      tags: ['office design', 'commercial', 'case study'],
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600" 
            alt="Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Blog
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Insights & <span className="text-amber-400">Inspiration</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover the latest trends, design tips, and stories from our team of expert designers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="py-8 border-b border-gray-200 sticky top-20 bg-white/80 backdrop-blur-sm z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-amber-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && searchQuery === '' && selectedCategory === 'all' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedPost(post.id)}
                >
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[16/9]">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-600 text-white text-xs px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>

                    {/* Category */}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/90 text-gray-900 text-sm px-3 py-1 rounded-full">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                      <span className="flex items-center gap-1">
                        <HiOutlineCalendar className="text-amber-600" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiOutlineClock className="text-amber-600" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600">{post.excerpt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedPost(post.id)}
              >
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3]">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-600 text-white text-xs px-3 py-1 rounded-full">
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                  <span className="flex items-center gap-1">
                    <HiOutlineCalendar className="text-amber-600" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <HiOutlineClock className="text-amber-600" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>

                {/* Author */}
                <div className="flex items-center gap-2">
                  <img 
                    src={post.authorImage} 
                    alt={post.author}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-sm text-gray-500">{post.author}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 text-amber-600 hover:text-amber-700 font-medium"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-12 rounded-2xl shadow-xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Subscribe to Our <span className="text-amber-600">Newsletter</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Get the latest design inspiration, tips, and news delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                />
                <button
                  type="button"
                  onClick={() => setShowNewsletter(true)}
                  className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {blogPosts.find(p => p.id === selectedPost) && (
                <>
                  {/* Modal Header - Image */}
                  <div className="relative h-80">
                    <img 
                      src={blogPosts.find(p => p.id === selectedPost)?.image} 
                      alt={blogPosts.find(p => p.id === selectedPost)?.title}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full hover:bg-black/70 transition flex items-center justify-center"
                    >
                      <HiOutlineX />
                    </button>

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        {categories.find(c => c.id === blogPosts.find(p => p.id === selectedPost)?.category)?.name}
                      </span>
                    </div>
                  </div>

                  {/* Modal Content */}
                  <div className="p-8">
                    {/* Title and Meta */}
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {blogPosts.find(p => p.id === selectedPost)?.title}
                    </h2>

                    <div className="flex items-center gap-6 mb-6">
                      <div className="flex items-center gap-2">
                        <img 
                          src={blogPosts.find(p => p.id === selectedPost)?.authorImage} 
                          alt={blogPosts.find(p => p.id === selectedPost)?.author}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium text-gray-900">
                            {blogPosts.find(p => p.id === selectedPost)?.author}
                          </p>
                          <p className="text-xs text-gray-500">Author</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <HiOutlineCalendar className="text-amber-600" />
                          {blogPosts.find(p => p.id === selectedPost)?.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <HiOutlineClock className="text-amber-600" />
                          {blogPosts.find(p => p.id === selectedPost)?.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="prose max-w-none mb-8">
                      <p className="text-gray-700 leading-relaxed">
                        {blogPosts.find(p => p.id === selectedPost)?.content}
                      </p>
                      <p className="text-gray-700 leading-relaxed mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                      </p>
                      <p className="text-gray-700 leading-relaxed mt-4">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="mb-8">
                      <h3 className="font-bold text-gray-900 mb-3">Tags:</h3>
                      <div className="flex flex-wrap gap-2">
                        {blogPosts.find(p => p.id === selectedPost)?.tags.map((tag, i) => (
                          <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Share and Actions */}
                    <div className="flex gap-4 pt-6 border-t border-gray-200">
                      <button className="flex-1 bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition">
                        Share Article
                      </button>
                      <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:border-amber-600 hover:text-amber-600 transition">
                        Save for Later
                      </button>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Newsletter Success Modal */}
      <AnimatePresence>
        {showNewsletter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowNewsletter(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-2xl max-w-md w-full p-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
              <p className="text-gray-600 mb-6">
                You've successfully subscribed to our newsletter. Get ready for design inspiration in your inbox!
              </p>
              <button
                onClick={() => setShowNewsletter(false)}
                className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition"
              >
                Continue Reading
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogPage;