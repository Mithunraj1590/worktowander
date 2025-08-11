'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'Overview', href: '/admin/dashboard', icon: '📊' },
  { name: 'Trips', href: '/admin/dashboard/trips', icon: '✈️' },
  { name: 'Users', href: '/admin/dashboard/users', icon: '👥' },
  { name: 'Admins', href: '/admin/dashboard/admins', icon: '👑' },
  { name: 'Bookings', href: '/admin/dashboard/bookings', icon: '📅' },
  { name: 'Analytics', href: '/admin/dashboard/analytics', icon: '📈' },
  { name: 'Settings', href: '/admin/dashboard/settings', icon: '⚙️' },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="h-full bg-black/50 backdrop-blur-xl border-r border-white/10">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center justify-center h-18 px-6 border-b border-white/10">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Admin Panel
            </span>
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                  {isActive && (
                    <motion.div
                      className="w-2 h-2 bg-cyan-400 rounded-full ml-auto"
                      layoutId="activeIndicator"
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-white/10 flex-shrink-0">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">👤</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">Admin User</p>
              <p className="text-xs text-gray-400">admin@travelagency.com</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              🚪
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
