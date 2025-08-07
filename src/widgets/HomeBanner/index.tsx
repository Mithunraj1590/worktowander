'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function HomeBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
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
    visible: { opacity: 0.2, scale: 1 }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: -15 },
    visible: { opacity: 1, scale: 1, rotateY: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

      return (
      <motion.section 
        ref={sectionRef}
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"
          variants={floatingVariants}
        ></motion.div>
        <motion.div 
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full opacity-20 animate-pulse delay-1000"
          variants={floatingVariants}
        ></motion.div>
        <motion.div 
          className="absolute bottom-40 left-1/4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse delay-2000"
          variants={floatingVariants}
        ></motion.div>
        
        {/* Floating Shapes */}
        <motion.div 
          className="absolute top-1/3 right-1/3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 transform rotate-45 opacity-20 animate-bounce"
          variants={floatingVariants}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-bounce delay-1000"
          variants={floatingVariants}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-20 gap-12">
          {/* Left Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left space-y-8"
            variants={containerVariants}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg"
              variants={itemVariants}
            >
              <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></span>
              ✨ Discover Amazing Destinations
            </motion.div>
            
            {/* Main Heading */}
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <motion.h1 
                className="h1 font-bold leading-tight"
                variants={itemVariants}
              >
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  Explore the
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  World
                </span>
                <br />
                <span className="text-gray-700">
                  Your Way
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                variants={itemVariants}
              >
                Create unforgettable travel experiences with our personalized trip planning. 
                From dream destinations to perfect itineraries, we make your journey extraordinary.
              </motion.p>
            </motion.div>
            
            {/* Call to Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.div variants={itemVariants}>
                <Link
                  href="/signin"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <span>Start Your Journey</span>
                  <svg 
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold text-lg rounded-2xl border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <span>Learn More</span>
                  <svg 
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
            
           
          </motion.div>
          
          {/* Right Content - Hero Image */}
          <motion.div 
            className="flex-1 relative"
            variants={containerVariants}
          >
            <motion.div 
              className="relative"
              variants={imageVariants}
            >
              {/* Main Image */}
              <motion.div 
                className="relative w-full max-w-lg mx-auto"
                variants={imageVariants}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
                <motion.div 
                  className="relative bg-white rounded-3xl p-2 shadow-2xl"
                  variants={imageVariants}
                >
                  <Image
                    src="/hero-img.png"
                    alt="Travel Adventure"
                    width={500}
                    height={600}
                    className="w-full h-auto rounded-2xl object-cover"
                    priority
                  />
                </motion.div>
              </motion.div>
              
              {/* Floating Cards */}
              <motion.div 
                className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
                variants={cardVariants}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Verified</div>
                    <div className="text-sm text-gray-600">Travel Partner</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
                variants={cardVariants}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            fill="currentColor"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            fill="currentColor"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </motion.section>
  );
} 