'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BentoGrid, BentoCard } from '@/components/magicui/bento-grid';

interface DestinationCard {
  id: string;
  title: string;
  image: string;
  rating: number;
  activities: number;
  location: string;
  description: string;
  cta: string;
}

const destinations: DestinationCard[] = [
  {
    id: '1',
    title: 'Barcelona Tour',
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    activities: 196,
    location: 'Barcelona, Spain',
    description: 'Explore the vibrant culture and stunning architecture of Barcelona',
    cta: 'Explore Barcelona'
  },
  {
    id: '2',
    title: 'Australia Tour',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    activities: 156,
    location: 'Australia',
    description: 'Discover the natural wonders and unique wildlife of Australia',
    cta: 'Discover Australia'
  },
  {
    id: '3',
    title: 'Japan Tour',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    activities: 234,
    location: 'Japan',
    description: 'Experience the perfect blend of tradition and modernity in Japan',
    cta: 'Experience Japan'
  },
  {
    id: '4',
    title: 'Kyoto Temples',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    activities: 189,
    location: 'Kyoto, Japan',
    description: 'Visit ancient temples and immerse in Japanese spirituality',
    cta: 'Visit Temples'
  },
  {
    id: '5',
    title: 'London, United Kingdom',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    activities: 278,
    location: 'London, UK',
    description: 'Experience the rich history and modern culture of London',
    cta: 'Explore London'
  },
  {
    id: '6',
    title: 'Greece Tour',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    rating: 4.4,
    activities: 145,
    location: 'Greece',
    description: 'Discover ancient ruins and beautiful Mediterranean landscapes',
    cta: 'Discover Greece'
  }
];

// Custom Icon Component - Empty icon to hide the default icon
const DestinationIcon = ({ className }: { className?: string }) => null;

export default function FeaturedDestinations() {
  return (
    <section className="relative py-20 bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.05),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section with Modern Design */}
        <div className="text-center mb-20">
          {/* Decorative Element */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
            FEATURED{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              DESTINATIONS
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Discover the world's most captivating destinations, carefully selected to inspire 
            your next adventure and create unforgettable travel experiences.
          </p>
        </div>

        {/* Destinations Grid using Magic UI Bento Grid with Enhanced Styling */}
        <div className="relative">
          <BentoGrid className="grid-cols-1 md:grid-cols-3 auto-rows-[12rem] md:auto-rows-[16rem] gap-6">
            {/* Large Card - Barcelona (spans 2 columns and 2 rows) */}
            <BentoCard
              name={destinations[0].title}
              description={destinations[0].description}
              href={`/destinations/${destinations[0].id}`}
              cta={destinations[0].cta}
              Icon={DestinationIcon}
              className="md:col-span-2 md:row-span-2 cursor-pointer h-full group transform transition-all duration-500 hover:scale-[1.02]"
              background={
                <div className="relative h-full w-full">
                  <Image
                    src={destinations[0].image}
                    alt={destinations[0].title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Enhanced Rating Badge */}
                  <div className="absolute z-[10] top-4 left-4 bg-white text-black text-sm font-bold px-3 py-2 rounded-xl shadow-lg backdrop-blur-sm">
                    {destinations[0].rating}
                  </div>
                  {/* Enhanced Activities Badge */}
                  <div className="absolute z-[10] top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-2 rounded-xl border border-white/20">
                    🎯 {destinations[0].activities} Activities
                  </div>
                </div>
              }
            />

            {/* Small Cards - Right Column (3 cards stacked) */}
            {destinations.slice(1, 4).map((destination, index) => (
              <BentoCard
                key={destination.id}
                name={destination.title}
                description={destination.description}
                href={`/destinations/${destination.id}`}
                cta={destination.cta}
                Icon={DestinationIcon}
                              className="md:col-span-1 cursor-pointer group transform transition-all duration-500 hover:scale-[1.02]"
                background={
                  <div className="relative h-full w-full">
                    <Image
                      src={destination.image}
                      alt={destination.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* Enhanced Rating Badge */}
                    <div className="absolute z-[10] top-3 left-3 bg-white text-black text-xs font-bold px-2 py-1 rounded-lg shadow-lg">
                       {destination.rating}
                    </div>
                    {/* Enhanced Activities Badge */}
                    <div className="absolute z-[10] top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-lg border border-white/20">
                      🎯 {destination.activities}
                    </div>
                  </div>
                }
              />
            ))}

            {/* Bottom Row Cards (2 cards side by side) */}
            {destinations.slice(4).map((destination, index) => (
              <BentoCard
                key={destination.id}
                name={destination.title}
                description={destination.description}
                href={`/destinations/${destination.id}`}
                cta={destination.cta}
                Icon={DestinationIcon}
                              className="md:col-span-1 cursor-pointer group transform transition-all duration-500 hover:scale-[1.02]"
                background={
                  <div className="relative h-full w-full">
                    <Image
                      src={destination.image}
                      alt={destination.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* Enhanced Rating Badge */}
                    <div className="absolute z-[10] top-3 left-3 bg-white text-black text-xs font-bold px-2 py-1 rounded-lg shadow-lg">
                       {destination.rating}
                    </div>
                    {/* Enhanced Activities Badge */}
                    <div className="absolute z-[10] top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-lg border border-white/20">
                      🎯 {destination.activities}
                    </div>
                  </div>
                }
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
} 