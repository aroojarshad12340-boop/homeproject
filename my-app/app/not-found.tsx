'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at 25% 0%, rgba(245, 158, 11, 0.08) 0%, rgba(249, 115, 22, 0.05) 50%, rgba(255, 255, 255, 0) 100%), linear-gradient(135deg, #fef9e8 0%, #ffffff 100%)'
      }}
    >
      
      {/* Main Content */}
      <div className="text-center max-w-2xl mx-auto relative z-10">
        
        {/* 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-[120px] sm:text-[180px] md:text-[220px] font-black leading-none tracking-tighter">
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              4
            </span>
            <span className="text-gray-300">0</span>
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              4
            </span>
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 blur-3xl rounded-full" />
        </div>

        {/* Badge */}
        <div className="inline-block mb-6">
          <div className="px-4 py-2 bg-amber-50/80 backdrop-blur-sm border border-amber-200 rounded-full">
            <span className="text-amber-600 font-mono text-sm tracking-wider">
              ⚡ ERROR 404 | PAGE NOT FOUND ⚡
            </span>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>
        
        <p className="text-gray-500 text-lg mb-4">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <p className="text-gray-400 font-mono text-sm mb-12">
          Error Code: 404 | Resource Not Found
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="px-8 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-all duration-300 hover:scale-105 shadow-md"
          >
            ← Back to Home
          </Link>
          
          <Link
            href="/#projects"
            className="px-8 py-3 border-2 border-amber-500 text-amber-600 rounded-lg hover:bg-amber-50 transition-all duration-300 hover:scale-105"
          >
            View My Projects →
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm mb-4">Quick Navigation</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="text-gray-500 hover:text-amber-600 text-sm transition-colors">
              Home
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/#projects" className="text-gray-500 hover:text-amber-600 text-sm transition-colors">
              Projects
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/#skills" className="text-gray-500 hover:text-amber-600 text-sm transition-colors">
              Skills
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/#about" className="text-gray-500 hover:text-amber-600 text-sm transition-colors">
              About
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/#contact" className="text-gray-500 hover:text-amber-600 text-sm transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}