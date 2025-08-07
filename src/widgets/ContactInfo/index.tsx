'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ContactInfo() {
  const [hasAnimated, setHasAnimated] = useState(false);

  // Only animate on page refresh, not route changes
  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, [hasAnimated]);

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className=" mx-auto">
            
            {/* Section Header */}
            <motion.div 
              className="text-center mb-16"
              initial={hasAnimated ? false : { y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Decorative Element */}
          <div className="flex justify-center mb-6">
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
          </div>
              <h2 className="h2 font-bold text-gray-900 mb-6">
                Get in Touch{' '}
                <span className='text-primary'>
                with Us</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We have multiple ways to reach us. Choose the method that works best for you.
              </p>
            </motion.div>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                  title: 'Phone Support',
                  description: 'Call us anytime for immediate assistance',
                  primary: '+1 (555) 123-4567',
                  secondary: 'Mon-Fri 9AM-6PM EST',
                  color: 'from-blue-600 to-blue-700'
                },
                {
                  icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                  title: 'Email Support',
                  description: 'Send us an email and we\'ll respond quickly',
                  primary: 'hello@travelagency.com',
                  secondary: 'support@travelagency.com',
                  color: 'from-purple-600 to-purple-700'
                },
                {
                  icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
                  title: 'Live Chat',
                  description: 'Chat with our team in real-time',
                  primary: 'Available 24/7',
                  secondary: 'Click the chat button below',
                  color: 'from-green-600 to-green-700'
                }
              ].map((method, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
                  initial={hasAnimated ? false : { y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-6`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={method.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="space-y-2">
                    <p className="text-gray-900 font-medium">{method.primary}</p>
                    <p className="text-gray-500 text-sm">{method.secondary}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Office Locations */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8"
              initial={hasAnimated ? false : { y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Office Locations</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    city: 'New York',
                    address: '123 Travel Street, Manhattan, NY 10001',
                    phone: '+1 (555) 123-4567',
                    email: 'nyc@travelagency.com',
                    hours: 'Mon-Fri 9AM-6PM EST'
                  },
                  {
                    city: 'Los Angeles',
                    address: '456 Adventure Ave, Hollywood, CA 90210',
                    phone: '+1 (555) 234-5678',
                    email: 'la@travelagency.com',
                    hours: 'Mon-Fri 9AM-6PM PST'
                  },
                  {
                    city: 'London',
                    address: '789 Journey Lane, Westminster, London SW1A 1AA',
                    phone: '+44 20 7123 4567',
                    email: 'london@travelagency.com',
                    hours: 'Mon-Fri 9AM-6PM GMT'
                  }
                ].map((office, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200/50"
                    initial={hasAnimated ? false : { scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">{office.city}</h4>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start">
                        <svg className="w-4 h-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="text-gray-600">{office.address}</p>
                      </div>
                      
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <p className="text-gray-600">{office.phone}</p>
                      </div>
                      
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p className="text-gray-600">{office.email}</p>
                      </div>
                      
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-gray-600">{office.hours}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
