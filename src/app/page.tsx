'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import FeaturedDestinations from "@/widgets/FeaturedDestinations";
import HomeBanner from "@/widgets/HomeBanner";
import HandpickedTrips from "@/widgets/HandpickedTrips";
import CustomiseWorkation from "@/widgets/CustomiseWorkation";
import CTASection from "@/widgets/CTASection";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [achievementUnlocked, setAchievementUnlocked] = useState<string | null>(null);
  const [interactionCount, setInteractionCount] = useState(0);
  const [isExploding, setIsExploding] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  // Handle scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Unlock achievements based on scroll
      if (window.scrollY > 500 && interactionCount === 0) {
        setAchievementUnlocked('Scroll Explorer! 📜');
        setInteractionCount(prev => prev + 1);
        setTimeout(() => setAchievementUnlocked(null), 3000);
      } else if (window.scrollY > 1000 && interactionCount === 1) {
        setAchievementUnlocked('Content Discoverer! 🔍');
        setInteractionCount(prev => prev + 1);
        setTimeout(() => setAchievementUnlocked(null), 3000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [interactionCount]);

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

  // Intersection Observer for section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = parseInt(entry.target.getAttribute('data-section') || '0');
            setCurrentSection(sectionIndex);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

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

      {/* Progress Indicator */}
      <motion.div 
        className="fixed top-24 left-6 z-40 bg-black/50 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="space-y-2">
          {['Home', 'Destinations', 'Trips', 'Workation', 'CTA'].map((section, index) => (
            <motion.div
              key={section}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSection === index 
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-500 scale-125' 
                  : 'bg-white/20'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Particle System */}
      <div ref={particlesRef} className="fixed inset-0 pointer-events-none z-30" />

      {/* Main Content with Smooth Animations */}
      <motion.div 
        ref={containerRef}
        className="relative"
      >
        {/* Animated Background */}
        <div className="fixed inset-0 -z-10">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
            style={{ 
              y: useTransform(useSpring(scrollY), [0, 1000], [0, -200])
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
          
          {/* Floating Geometric Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 border border-cyan-400/20 rounded-full"
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${20 + i * 8}%`,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
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

        {/* Sections with Enhanced Animations */}
        <motion.div
          data-section="0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HomeBanner />
        </motion.div>

        <motion.div
          data-section="1"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FeaturedDestinations />
        </motion.div>

        <motion.div
          data-section="2"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <HandpickedTrips />
        </motion.div>

        <motion.div
          data-section="3"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <CustomiseWorkation />
        </motion.div>

        <motion.div
          data-section="4"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <CTASection />
        </motion.div>
      </motion.div>

      {/* Interactive Floating Action Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white text-2xl hover:shadow-cyan-500/25 transition-all duration-300"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setIsExploding(true);
          setAchievementUnlocked('Action Hero! ⚡');
          setTimeout(() => setIsExploding(false), 2000);
          setTimeout(() => setAchievementUnlocked(null), 4000);
        }}
      >
        🚀
      </motion.button>
    </>
  );
}
