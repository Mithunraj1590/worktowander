'use client';

import { usePathname } from 'next/navigation';
import Header from '../Header';

export default function Layout() {
  const pathname = usePathname();
  
  // Don't show header on sign-in page or admin routes
  const shouldShowHeader = !pathname.startsWith('/admin') && pathname !== '/signin';
  
  return shouldShowHeader ? <Header /> : null;
} 