'use client';

import { useState } from 'react';
import TripCard from '@/components/TripCard';
import Pagination from '@/components/Pagination';

interface Trip {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  tags: string[];
}

// Sample data based on the design
const allTrips: Trip[] = [
  {
    id: '1',
    title: 'Thornridge Cir. Shiloh',
    location: 'St George\'s Ln Singapore',
    price: 300,
    image: '/img.png',
    tags: ['Mountains', 'City']
  },
  {
    id: '2',
    title: 'Roraima Tepui',
    location: 'Canaima Park, Venezuela',
    price: 790,
    image: '/img.png',
    tags: ['Solo travel', 'Budget']
  },
  {
    id: '3',
    title: 'Socotra Island',
    location: 'Yemen',
    price: 870,
    image: '/img.png',
    tags: ['Luxury', 'Beach']
  },
  {
    id: '4',
    title: 'San Lake Baikal',
    location: 'Siberia, Russia',
    price: 604,
    image: '/img.png',
    tags: ['Sports', 'Adventurous']
  },
  {
    id: '5',
    title: 'Anse Source d\'Argent',
    location: 'La Digue, Seychelles',
    price: 870,
    image: '/img.png',
    tags: ['Beach', 'Luxury']
  },
  {
    id: '6',
    title: 'Aysén Region',
    location: 'Patagonia, Chile',
    price: 604,
    image: '/img.png',
    tags: ['Sports', 'Adventurous']
  },
  {
    id: '7',
    title: 'Taman Negara',
    location: 'Peninsular Malaysia',
    price: 300,
    image: '/img.png',
    tags: ['Mountains', 'Budget']
  },
  {
    id: '8',
    title: 'Zhangye Landform',
    location: 'Gansu, China',
    price: 790,
    image: '/img.png',
    tags: ['Solo travel', 'City']
  },
  // Add more trips for pagination testing
  {
    id: '9',
    title: 'Machu Picchu',
    location: 'Cusco, Peru',
    price: 650,
    image: '/img.png',
    tags: ['Mountains', 'Adventurous']
  },
  {
    id: '10',
    title: 'Santorini Sunset',
    location: 'Greece',
    price: 920,
    image: '/img.png',
    tags: ['Luxury', 'Beach']
  },
  {
    id: '11',
    title: 'Northern Lights',
    location: 'Iceland',
    price: 750,
    image: '/img.png',
    tags: ['Solo travel', 'Adventurous']
  },
  {
    id: '12',
    title: 'Tokyo Tower',
    location: 'Japan',
    price: 580,
    image: '/img.png',
    tags: ['City', 'Budget']
  },
  {
    id: '13',
    title: 'Great Barrier Reef',
    location: 'Australia',
    price: 680,
    image: '/img.png',
    tags: ['Beach', 'Sports']
  },
  {
    id: '14',
    title: 'Swiss Alps',
    location: 'Switzerland',
    price: 850,
    image: '/img.png',
    tags: ['Mountains', 'Sports']
  },
  {
    id: '15',
    title: 'Amazon Rainforest',
    location: 'Brazil',
    price: 720,
    image: '/img.png',
    tags: ['Adventurous', 'Budget']
  },
  {
    id: '16',
    title: 'Dubai Desert',
    location: 'UAE',
    price: 950,
    image: '/img.png',
    tags: ['Luxury', 'City']
  }
];

export default function HandpickedTrips() {
  const [currentPage, setCurrentPage] = useState(1);
  const tripsPerPage = 8;
  
  // Calculate pagination
  const totalPages = Math.ceil(allTrips.length / tripsPerPage);
  const startIndex = (currentPage - 1) * tripsPerPage;
  const endIndex = startIndex + tripsPerPage;
  const currentTrips = allTrips.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of this section when page changes
    const section = document.querySelector('[data-section="handpicked-trips"]');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" 
      data-section="handpicked-trips"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with Enhanced Design */}
        <div className="text-center mb-16">
          {/* Decorative Element */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
          </div>
          
          {/* Main Heading */}
          <h2 className="h2 font-bold text-gray-900 mb-6 leading-tight">
            Handpicked{' '}
            <span className="text-primary">
              Trips
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated collection of extraordinary destinations, 
            designed to inspire your next adventure and create unforgettable memories.
          </p>
        </div>

        {/* Trips Grid with Enhanced Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {currentTrips.map((trip, index) => (
            <div 
              key={trip.id}
              className="group transform transition-all duration-500 hover:scale-105"
            >
              <TripCard
                id={trip.id}
                title={trip.title}
                location={trip.location}
                price={trip.price}
                image={trip.image}
                tags={trip.tags}
              />
            </div>
          ))}
        </div>

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200/50">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                              />
              </div>
            </div>
          )}

       
      </div>
    </section>
  );
} 