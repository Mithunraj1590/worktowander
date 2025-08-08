'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface User {
  id: string;
  name: string;
  email: string;
}

interface HeaderProps {
  user?: User | null;
  onLogout?: () => void;
}

export default function Header({ user, onLogout }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasAnimated, setHasAnimated] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const [achievementUnlocked, setAchievementUnlocked] = useState<string | null>(null);
  const pathname = usePathname();

  // Animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const logoVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  const navVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const userSectionVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  const searchVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  // Trigger animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInteraction = () => {
    setInteractionCount(prev => prev + 1);
    
    // Unlock achievements based on interactions
    if (interactionCount === 2) {
      setAchievementUnlocked('Navigation Master! 🧭');
      setTimeout(() => setAchievementUnlocked(null), 3000);
    } else if (interactionCount === 5) {
      setAchievementUnlocked('Explorer Pro! 🌟');
      setTimeout(() => setAchievementUnlocked(null), 3000);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    handleInteraction();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isSearchOpen) {
      setIsSearchOpen(false);
    }
    handleInteraction();
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery('');
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    handleInteraction();
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    setIsDropdownOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Achievement Notification */}
      <AnimatePresence>
        {achievementUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            className="fixed top-20 right-6 z-50 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🏆</span>
              <span className="font-bold">{achievementUnlocked}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.header 
        className="fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-xl shadow-2xl border-b border-white/10 transition-all duration-500 overflow-hidden"
        variants={headerVariants}
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/50 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
          
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${30 + i * 20}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
            {/* Logo with Glow Effect */}
            <motion.div 
              className="flex-shrink-0"
              variants={logoVariants}
            >
              <Link href="/" className="flex items-center group">
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center mr-2 sm:mr-3 shadow-2xl group-hover:shadow-cyan-500/25 transition-all duration-300">
                    <span className="text-white font-bold text-sm sm:text-lg">T</span>
                  </div>
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl sm:rounded-2xl blur opacity-75"
                    animate={{ 
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-105 transition-all duration-300">
                  <span className="hidden sm:inline">TravelAgency</span>
                  <span className="sm:hidden">Travel</span>
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation with Hover Effects */}
            <motion.nav 
              className="hidden lg:flex items-center space-x-1"
              variants={navVariants}
            >
              {[
                { href: '/', label: 'Home', icon: '🏠' },
                { href: '/about', label: 'About', icon: '🌟' },
                { href: '/destinations', label: 'Destinations', icon: '🗺️' },
                { href: '/contact', label: 'Contact', icon: '📞' }
              ].map((item, index) => (
                <motion.div
                  key={item.href}
                  variants={navItemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={item.href} 
                    className={`flex items-center space-x-2 px-4 py-2 text-base sm:text-lg font-medium transition-all duration-300 relative group ${
                      isActive(item.href)
                        ? 'text-cyan-400'
                        : 'text-gray-300 hover:text-cyan-400'
                    }`}
                    onClick={handleInteraction}
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="relative">
                      {item.label}
                      <motion.span 
                        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* User Section with Interactive Elements */}
            <motion.div 
              className="flex items-center space-x-2 sm:space-x-4"
              variants={userSectionVariants}
            >
              {/* AI Trip Creation Button with Glow */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/create-trip"
                  className="hidden lg:flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 group relative overflow-hidden"
                  onClick={handleInteraction}
                >
                  <span className="relative z-10 flex items-center">
                    <span className="mr-2">🤖</span>
                    <span className="hidden xl:inline">Create Trip with AI</span>
                    <span className="xl:hidden">AI Trip</span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Link>
              </motion.div>

              {/* Search Button with Animation */}
              <motion.button 
                onClick={toggleSearch}
                className="p-2 rounded-xl text-gray-300 hover:bg-white/10 hover:text-cyan-400 transition-all duration-300 relative group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                  🔍
                </span>
              </motion.button>

              {isLoggedIn ? (
                <div className="relative">
                  <motion.button
                    onClick={toggleDropdown}
                    className="flex items-center space-x-2 sm:space-x-3 p-2 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 hidden sm:inline">
                      {user?.name || 'User'}
                    </span>
                    <motion.div 
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300"
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)"
                      }}
                    >
                      <span className="text-white font-semibold text-xs sm:text-sm">
                        {user?.name?.charAt(0).toUpperCase() || 'U'}
                      </span>
                    </motion.div>
                  </motion.button>

                  {/* Enhanced Dropdown Menu */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div 
                        className="absolute right-0 mt-3 w-56 sm:w-64 bg-black/95 backdrop-blur-xl rounded-2xl shadow-2xl py-2 z-50 border border-white/20"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        <div className="px-4 py-3 border-b border-white/10">
                          <p className="text-sm font-semibold text-white">{user?.name || 'User'}</p>
                          <p className="text-xs text-gray-400 mt-1">{user?.email || 'user@example.com'}</p>
                        </div>
                        <div className="py-2">
                          {[
                            { href: '/profile', label: 'Profile', icon: '👤' },
                            { href: '/bookings', label: 'My Bookings', icon: '📋' },
                            { href: '/settings', label: 'Settings', icon: '⚙️' }
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-cyan-400 transition-colors duration-200"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              <span className="mr-3 text-lg">{item.icon}</span>
                              {item.label}
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-white/10 pt-2">
                          <button
                            onClick={handleLogout}
                            className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors duration-200"
                          >
                            <span className="mr-3 text-lg">🚪</span>
                            Logout
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/signin"
                      className="px-4 py-2 rounded-xl font-medium text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm sm:text-base"
                      onClick={handleInteraction}
                    >
                      <span className="hidden sm:inline">Sign In</span>
                      <span className="sm:hidden">Sign In</span>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/signup"
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-xl font-medium hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 text-sm sm:text-base"
                      onClick={handleInteraction}
                    >
                      <span className="hidden sm:inline">Sign Up</span>
                      <span className="sm:hidden">Sign Up</span>
                    </Link>
                  </motion.div>
                </div>
              )}

              {/* Mobile Menu Button with Animation */}
              <motion.button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-xl">☰</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Search Bar with Animation */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div 
                className="py-4 border-t border-white/10"
                variants={searchVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search destinations, trips, or activities..."
                    className="w-full px-4 py-3 pl-12 pr-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm sm:text-base text-white placeholder-gray-400"
                    autoFocus
                  />
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg">🔍</span>
                  <button
                    type="button"
                    onClick={toggleSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  >
                    <span className="text-lg">✕</span>
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu with Glass Effect */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                className="lg:hidden bg-black/95 backdrop-blur-xl rounded-2xl mt-4 p-4 shadow-2xl border border-white/20"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <nav className="space-y-2">
                  {[
                    { href: '/', label: 'Home', icon: '🏠' },
                    { href: '/about', label: 'About', icon: '🌟' },
                    { href: '/destinations', label: 'Destinations', icon: '🗺️' },
                    { href: '/contact', label: 'Contact', icon: '📞' }
                  ].map((item) => (
                    <motion.div
                      key={item.href}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 ${
                          isActive(item.href)
                            ? 'bg-cyan-600 text-white'
                            : 'text-gray-300 hover:bg-white/10'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                  {/* Mobile AI Trip Creation Button */}
                  <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/create-trip"
                      className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-lg">🤖</span>
                      <span>Create Trip with AI</span>
                    </Link>
                  </motion.div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Backdrop for dropdown and mobile menu */}
        {(isDropdownOpen || isMobileMenuOpen) && (
          <div
            className="fixed inset-0 z-30"
            onClick={() => {
              setIsDropdownOpen(false);
              setIsMobileMenuOpen(false);
            }}
          />
        )}
      </motion.header>
    </>
  );
} 