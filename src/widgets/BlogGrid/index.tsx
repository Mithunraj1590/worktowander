"use client"
import { useState } from 'react';
import BlogCard from '@/components/BlogCard';

// Mock blog data
const blogPosts = [
  {
    id: '1',
    title: '10 Essential Tips for Planning Successful Team Retreats',
    excerpt: 'Discover the key strategies that make team retreats truly effective for building stronger relationships and boosting productivity.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
    category: 'Team Building',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80'
    },
    publishedAt: 'March 15, 2024',
    readTime: '5 min read',
    slug: '10-essential-tips-team-retreats'
  },
  {
    id: '2',
    title: 'How Workations Are Revolutionizing Employee Retention',
    excerpt: 'Learn how combining work and travel is becoming the new standard for keeping top talent engaged and motivated.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
    category: 'Employee Engagement',
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80'
    },
    publishedAt: 'March 12, 2024',
    readTime: '7 min read',
    slug: 'workations-employee-retention'
  },
  {
    id: '3',
    title: 'Top 5 Destinations for Corporate Team Building in 2024',
    excerpt: 'Explore the most popular and effective destinations for corporate team building activities this year.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80',
    category: 'Destinations',
    author: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80'
    },
    publishedAt: 'March 10, 2024',
    readTime: '6 min read',
    slug: 'top-5-destinations-team-building-2024'
  },
  {
    id: '4',
    title: 'The Psychology Behind Successful Team Travel Experiences',
    excerpt: 'Understanding the psychological factors that make team travel experiences memorable and impactful.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    category: 'Travel Tips',
    author: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'
    },
    publishedAt: 'March 8, 2024',
    readTime: '8 min read',
    slug: 'psychology-team-travel-experiences'
  },
  {
    id: '5',
    title: 'Budget-Friendly Team Building Activities That Actually Work',
    excerpt: 'Discover cost-effective team building activities that deliver real results without breaking the bank.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    category: 'Team Building',
    author: {
      name: 'Lisa Thompson',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80'
    },
    publishedAt: 'March 5, 2024',
    readTime: '4 min read',
    slug: 'budget-friendly-team-building-activities'
  },
  {
    id: '6',
    title: 'Remote Team Building: Bridging the Digital Divide',
    excerpt: 'How to create meaningful connections and team spirit in a remote work environment.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    category: 'Employee Engagement',
    author: {
      name: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80'
    },
    publishedAt: 'March 3, 2024',
    readTime: '6 min read',
    slug: 'remote-team-building-digital-divide'
  }
];

const BlogGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts by category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const categories = ['All', 'Team Building', 'Travel Tips', 'Employee Engagement', 'Destinations', 'Workation'];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentPosts.map((post) => (
              <BlogCard
                key={post.id}
                {...post}
              />
            ))}
          </div>

          {/* No Posts Message */}
          {currentPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No posts found</h3>
              <p className="text-gray-600">Try selecting a different category or check back later for new content.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid; 