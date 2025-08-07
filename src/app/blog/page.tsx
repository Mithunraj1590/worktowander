import { Metadata } from 'next';
import BlogBanner from '@/widgets/BlogBanner';
import BlogGrid from '@/widgets/BlogGrid';

export const metadata: Metadata = {
  title: 'Travel Blog | TravelAgency - Team Building & Employee Engagement',
  description: 'Discover insights, tips, and stories about team travel, employee engagement, and creating unforgettable experiences. Expert advice on corporate team building and workations.',
  keywords: 'team building, corporate travel, employee engagement, workation, team retreats, travel tips',
  openGraph: {
    title: 'Travel Blog | TravelAgency',
    description: 'Discover insights, tips, and stories about team travel, employee engagement, and creating unforgettable experiences.',
    type: 'website',
    url: 'https://travelagency.com/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Blog | TravelAgency',
    description: 'Discover insights, tips, and stories about team travel, employee engagement, and creating unforgettable experiences.',
  },
};

export default function Blog() {
  return (
    <>
      <BlogBanner />
      <BlogGrid />
    </>
  );
} 