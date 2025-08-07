'use client';

import Image from 'next/image';
import Link from 'next/link';

interface TripCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  tags: string[];
}

export default function TripCard({ id, title, location, price, image, tags }: TripCardProps) {
  return (
    <Link href={`/trips/${id}`} className="group block">
      <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer border border-gray-100 hover:border-gray-200">
        {/* Image Container with Enhanced Effects */}
        <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Price Tag with Enhanced Design */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-gray-900 font-bold px-4 py-2 rounded-xl text-sm shadow-lg border border-gray-200/50">
            <span className="text-primary">$</span>
            {price.toLocaleString()}
          </div>
          
          {/* Favorite Button */}
          <button className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg border border-gray-200/50 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-50 hover:border-red-200">
            <svg className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Content with Enhanced Typography */}
        <div className="p-6">
          {/* Title with Better Hierarchy */}
          <h3 className="font-bold text-gray-900 text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300 leading-tight">
            {title}
          </h3>
          
          {/* Location with Enhanced Icon */}
          <div className="flex items-center text-gray-600 text-sm mb-4">
            <div className="flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full mr-2">
              <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="line-clamp-1 font-medium">{location}</span>
          </div>
          
          {/* Enhanced Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => {
              // Enhanced color schemes for different tags
              const getTagColors = (tag: string) => {
                const tagLower = tag.toLowerCase();
                if (tagLower.includes('luxury')) {
                  return 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100';
                } else if (tagLower.includes('budget')) {
                  return 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100';
                } else if (tagLower.includes('adventurous')) {
                  return 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100';
                } else if (tagLower.includes('solo travel')) {
                  return 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100';
                } else if (tagLower.includes('beach')) {
                  return 'bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100';
                } else if (tagLower.includes('mountains')) {
                  return 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100';
                } else if (tagLower.includes('sports')) {
                  return 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100';
                } else if (tagLower.includes('city')) {
                  return 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100';
                } else {
                  return 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100';
                }
              };

              return (
                <span
                  key={index}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-all duration-200 ${getTagColors(tag)}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
          
          {/* View Details Button */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 font-medium">View Details</span>
              <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Hover Effect Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200/50 transition-colors duration-300 pointer-events-none" />
      </div>
    </Link>
  );
} 