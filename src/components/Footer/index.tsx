'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [particleCount, setParticleCount] = useState(0);
  const [isExploding, setIsExploding] = useState(false);
  const [achievementUnlocked, setAchievementUnlocked] = useState<string | null>(null);
  const [interactionCount, setInteractionCount] = useState(0);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  // Helper function to check if link is active
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setInteractionCount(prev => prev + 1);
      setIsExploding(true);
      setAchievementUnlocked('Newsletter Ninja! 🚀');
      setTimeout(() => setIsExploding(false), 2000);
      setTimeout(() => setAchievementUnlocked(null), 4000);
      
      console.log('Newsletter subscription:', email);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    }
  };

  const handleSectionHover = (section: string) => {
    setHoveredSection(section);
    setInteractionCount(prev => prev + 1);
    
    // Unlock achievements based on interactions
    if (interactionCount === 4) {
      setAchievementUnlocked('Explorer! 🌍');
      setTimeout(() => setAchievementUnlocked(null), 3000);
    } else if (interactionCount === 8) {
      setAchievementUnlocked('Social Butterfly! 🦋');
      setTimeout(() => setAchievementUnlocked(null), 3000);
    }
  };

  const createParticle = (x: number, y: number) => {
    const particle = document.createElement('div');
    particle.className = 'absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full pointer-events-none';
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    
    const angle = Math.random() * Math.PI * 2;
    const velocity = 2 + Math.random() * 3;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    
    let opacity = 1;
    const animate = () => {
      const currentX = parseFloat(particle.style.left);
      const currentY = parseFloat(particle.style.top);
      
      particle.style.left = `${currentX + vx}px`;
      particle.style.top = `${currentY + vy}px`;
      particle.style.opacity = `${opacity}`;
      
      opacity -= 0.02;
      
      if (opacity > 0) {
        requestAnimationFrame(animate);
      } else {
        particle.remove();
      }
    };
    
    if (particlesRef.current) {
      particlesRef.current.appendChild(particle);
      requestAnimationFrame(animate);
    }
  };

  const handleExplosion = () => {
    if (particlesRef.current) {
      const rect = particlesRef.current.getBoundingClientRect();
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        createParticle(x, y);
      }
    }
  };

  useEffect(() => {
    if (isExploding) {
      handleExplosion();
    }
  }, [isExploding]);

  return (
    <footer 
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white min-h-screen"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background with 3D Parallax */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
          style={{ rotateX, rotateY }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-cyan-400/20 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      {/* Particle System */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

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

      {/* Main Footer Content */}
      <div className="container relative z-10">
        <div className="px-4 sm:px-6 lg:px-8 py-20">
          
          {/* Interactive Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center mb-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 shadow-2xl">
                  <span className="text-white font-bold text-2xl">T</span>
                </div>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur opacity-75"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                TravelAgency
              </span>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Embark on a journey where technology meets adventure. Experience the future of travel with our AI-powered itineraries, 
              blockchain-secured bookings, and immersive VR previews.
            </motion.p>
          </motion.div>

          {/* Gamified Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
            
            {/* Company Info - Interactive Card */}
            <motion.div 
              className="lg:col-span-2"
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => handleSectionHover('company')}
            >
              <motion.div 
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  borderColor: "rgba(59, 130, 246, 0.5)"
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {hoveredSection === 'company' ? '🚀 Future of Travel' : 'About Us'}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed mb-8 font-light">
                  We're not just a travel agency—we're your gateway to the future. With cutting-edge AI, blockchain technology, 
                  and immersive experiences, we're redefining what it means to explore the world.
                </p>
                
                {/* Interactive Newsletter */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 text-white flex items-center">
                    <span className="mr-2">📧</span>
                    Join the Revolution
                  </h4>
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <motion.div
                      className="relative"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email for exclusive updates"
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                        required
                      />
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0"
                        whileFocus={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                    <motion.button
                      type="submit"
                      className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">Subscribe & Unlock Rewards</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </motion.button>
                  </form>
                  <AnimatePresence>
                    {isSubscribed && (
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-cyan-400 text-sm mt-3 flex items-center"
                      >
                        <span className="mr-2">✅</span>
                        Welcome to the future! Check your email for exclusive content.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Social Media with Hover Effects */}
                <div className="flex space-x-4">
                  {[
                    { name: 'Twitter', href: '#', icon: '🐦', color: 'from-blue-400 to-blue-600' },
                    { name: 'Facebook', href: '#', icon: '📘', color: 'from-blue-600 to-blue-800' },
                    { name: 'Instagram', href: '#', icon: '📸', color: 'from-purple-400 to-pink-600' },
                    { name: 'LinkedIn', href: '#', icon: '💼', color: 'from-blue-500 to-blue-700' },
                    { name: 'YouTube', href: '#', icon: '📺', color: 'from-red-500 to-red-700' }
                  ].map((social) => (
                    <motion.div
                      key={social.name}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link 
                        href={social.href} 
                        className={`w-12 h-12 bg-gradient-to-br ${social.color} backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center text-white hover:shadow-2xl transition-all duration-300 group`}
                      >
                        <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                          {social.icon}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Quick Links - Holographic Card */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => handleSectionHover('quick')}
            >
              <motion.div 
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full relative overflow-hidden"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  borderColor: "rgba(168, 85, 247, 0.5)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent relative z-10">
                  {hoveredSection === 'quick' ? '⚡ Quick Access' : 'Quick Links'}
                </h3>
                <ul className="space-y-4 relative z-10">
                  {[
                    { href: '/about', label: 'About Us', icon: '🌟' },
                    { href: '/destinations', label: 'Destinations', icon: '🗺️' },
                    { href: '/contact', label: 'Contact', icon: '📞' },
                    { href: '/create-trip', label: 'Create Trip', icon: '✈️' },
                    { href: '/faq', label: 'FAQ', icon: '❓' }
                  ].map((link, index) => (
                    <motion.li 
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link 
                        href={link.href} 
                        className={`flex items-center space-x-3 transition-all duration-300 text-sm group ${
                          isActive(link.href) 
                            ? 'text-white font-medium' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                          {link.icon}
                        </span>
                        <span className="relative">
                          {link.label}
                          <motion.span 
                            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Support - Neural Network Card */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => handleSectionHover('support')}
            >
              <motion.div 
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full relative overflow-hidden"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  borderColor: "rgba(34, 197, 94, 0.5)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent relative z-10">
                  {hoveredSection === 'support' ? '🤖 AI Support' : 'Support'}
                </h3>
                <ul className="space-y-4 relative z-10">
                  {[
                    { href: '/help', label: 'Help Center', icon: '🎯' },
                    { href: '/terms', label: 'Terms of Service', icon: '📋' },
                    { href: '/privacy', label: 'Privacy Policy', icon: '🔒' },
                    { href: '/refund', label: 'Refund Policy', icon: '💰' },
                    { href: '/cookies', label: 'Cookie Policy', icon: '🍪' }
                  ].map((link, index) => (
                    <motion.li 
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link 
                        href={link.href} 
                        className={`flex items-center space-x-3 transition-all duration-300 text-sm group ${
                          isActive(link.href) 
                            ? 'text-white font-medium' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                          {link.icon}
                        </span>
                        <span className="relative">
                          {link.label}
                          <motion.span 
                            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-500 to-cyan-500"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>

          {/* Interactive Contact Section */}
          <motion.div 
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              🚀 Connect With Our AI Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '📍',
                  title: 'Global HQ',
                  content: ['123 Innovation Street', 'Future City, FC 12345'],
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: '📞',
                  title: 'Smart Phone',
                  content: ['+1 (555) 123-4567', '24/7 AI Assistant'],
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: '📧',
                  title: 'Quantum Email',
                  content: ['hello@travelagency.ai', 'support@travelagency.ai'],
                  color: 'from-green-500 to-emerald-500'
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                  </motion.div>
                  <h4 className="text-lg font-semibold mb-3 text-white">{item.title}</h4>
                  {item.content.map((line, lineIndex) => (
                    <p key={lineIndex} className="text-gray-300 text-sm mb-1">{line}</p>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Bottom Bar */}
      <motion.div 
        className="border-t border-white/10 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="container">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.div 
                className="text-gray-400 text-sm flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <span>© {currentYear} TravelAgency</span>
                <span className="text-cyan-400">•</span>
                <span>Powered by AI</span>
                <span className="text-purple-400">•</span>
                <span>Future-Ready</span>
              </motion.div>
              
              <div className="flex items-center space-x-6 text-sm">
                {[
                  { href: '/terms', label: 'Terms', icon: '📋' },
                  { href: '/privacy', label: 'Privacy', icon: '🔒' },
                  { href: '/cookies', label: 'Cookies', icon: '🍪' },
                  { href: '/sitemap', label: 'Sitemap', icon: '🗺️' }
                ].map((link, index) => (
                  <motion.div
                    key={link.href}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link 
                      href={link.href} 
                      className={`flex items-center space-x-2 transition-all duration-300 group ${
                        isActive(link.href) 
                          ? 'text-white font-medium' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </span>
                      <span className="relative">
                        {link.label}
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
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
} 