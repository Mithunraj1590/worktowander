"use client"
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20" style={{ backgroundColor: 'var(--primary)' }}>
      <div className="container">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Struggling with{' '}
              <span className="text-yellow-300">Employee Retention</span>{' '}
              and{' '}
              <span className="text-green-300">Hiring?</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Let us help you create unforgettable team experiences that boost morale 
              and make your company the place everyone wants to work.
            </p>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 text-gray-900 font-bold text-base sm:text-lg rounded-lg hover:bg-yellow-300 transition-colors duration-300"
            >
              Get Your Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 