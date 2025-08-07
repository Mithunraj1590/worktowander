"use client"
import { useState } from 'react';
import Image from 'next/image';

const BlogBanner = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-indigo-200 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-purple-200 rounded-full"></div>
      </div>

      <div className="container relative z-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Header */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Travel{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Blog
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Discover insights, tips, and stories about team travel, employee engagement, and creating unforgettable experiences
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-12 text-lg bg-white rounded-full shadow-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3">
              {['All', 'Team Building', 'Travel Tips', 'Employee Engagement', 'Destinations', 'Workation'].map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 bg-white text-gray-700 rounded-full border border-gray-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 font-medium"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBanner; 