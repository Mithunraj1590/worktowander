'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const HomeBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            image: '/banner1.jpg',
        },
        {
            image: '/banner2.jpg',
        },
        {
            image: '/banner3.jpg',
        }
    ]

    const content = {
        title: 'Welcome to Our Platform',
        description: 'Discover amazing features and possibilities that will transform your experience. Join us on this journey of innovation and growth.',
        ctaText: 'Get Started'
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    return (
        <div className="relative h-screen w-full overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slides[currentSlide].image}
                        alt="Banner background"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                        quality={85}
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </motion.div>
            </AnimatePresence>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="absolute bottom-[100px] left-0 right-0 container mx-auto px-4"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                >
                    {content.title}
                </motion.h1>
                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
                >
                    {content.description}
                </motion.p>
                <motion.button
                    className="btn btn-primary"
                >
                    {content.ctaText}
                </motion.button>
            </motion.div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3  transition-all duration-300 ${
                            currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default HomeBanner 