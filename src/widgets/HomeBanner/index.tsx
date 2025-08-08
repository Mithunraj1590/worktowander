'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function HomeBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleInteraction = () => {
    setInteractionCount(prev => prev + 1);
    setIsGlowing(true);
    setTimeout(() => setIsGlowing(false), 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 0.3, scale: 1 }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)]" />
        
        {/* Animated Grid with Enhanced Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements with Enhanced Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-xl"
          variants={floatingVariants}
          animate={{
            scale: [1, 1.2, 1],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-500/30 to-orange-500/30 rounded-full blur-xl"
          variants={floatingVariants}
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-full blur-xl"
          variants={floatingVariants}
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-20 gap-16">
          {/* Left Content - Enhanced Interactive Layout */}
          <motion.div 
            className="flex-1 text-center lg:text-left space-y-12"
            variants={containerVariants}
          >
            {/* Interactive Badge */}
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full group cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              onClick={handleInteraction}
            >
              <motion.div 
                className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-white/80 font-medium tracking-wide">EXPLORE THE EXTRAORDINARY</span>
            </motion.div>
            
            {/* Enhanced Typography with Glow Effect */}
            <motion.div 
              className="space-y-8"
              variants={itemVariants}
            >
              <motion.h1 
                className="text-6xl md:text-7xl lg:text-8xl font-black leading-none"
                variants={itemVariants}
              >
                <motion.span 
                  className="block text-white"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  TRAVEL
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  BEYOND
                </motion.span>
                <motion.span 
                  className="block text-white"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  LIMITS
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
                variants={itemVariants}
              >
                Experience destinations that defy imagination. 
                <span className="text-cyan-400 font-medium"> Create memories</span> that last a lifetime.
              </motion.p>
            </motion.div>
            
            {/* Interactive CTA Section */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/signin"
                  className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
                  onClick={handleInteraction}
                >
                  <span className="relative z-10">START JOURNEY</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Link>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <button 
                  className="group relative inline-flex items-center justify-center px-10 py-5 bg-transparent text-white font-bold text-lg rounded-full border-2 border-white/20 hover:border-white/40 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                  onClick={handleInteraction}
                >
                  <span>WATCH STORY</span>
                  <motion.svg 
                    className="ml-3 w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </motion.svg>
                </button>
              </motion.div>
            </motion.div>
            
       
          </motion.div>
          
          {/* Right Content - Enhanced Interactive Image Layout */}
          <motion.div 
            className="flex-1 relative"
            variants={containerVariants}
          >
            <motion.div 
              className="relative"
              variants={imageVariants}
            >
              {/* Main Image with Enhanced Frame */}
              <motion.div 
                className="relative w-full max-w-lg mx-auto"
                variants={imageVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute -inset-6 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30"
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative bg-black/20 backdrop-blur-sm rounded-3xl p-3 border border-white/10">
                  <Image
                    src="/hero-img.png"
                    alt="Travel Adventure"
                    width={500}
                    height={600}
                    className="w-full h-auto rounded-2xl object-cover"
                    priority
                  />
                </div>
              </motion.div>
              
              {/* Enhanced Floating Cards */}
              <motion.div 
                className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white text-xl">✅</span>
                  </motion.div>
                  <div>
                    <div className="font-bold text-white text-lg">Verified</div>
                    <div className="text-sm text-gray-300">Travel Partner</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: 5 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white text-xl">⏰</span>
                  </motion.div>
                  <div>
                    <div className="font-bold text-white text-lg">24/7</div>
                    <div className="text-sm text-gray-300">Support</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 text-gray-900" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            fill="currentColor"
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            fill="currentColor"
          />
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </motion.section>
  );
} 