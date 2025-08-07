'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I book a trip with TravelAgency?",
      answer: "Booking a trip with us is simple! You can browse our destinations, select your preferred dates, and book directly through our website. For personalized itineraries, you can also use our AI trip creation feature or contact our travel experts for custom planning."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We offer flexible cancellation policies that vary by booking type. Most bookings can be cancelled up to 24 hours before departure for a full refund. For specific details about your booking, please check your confirmation email or contact our support team."
    },
    {
      question: "Do you offer travel insurance?",
      answer: "Yes, we highly recommend travel insurance for all trips. We offer comprehensive travel insurance packages that cover medical emergencies, trip cancellations, lost luggage, and more. You can add insurance during the booking process or contact us to learn more."
    },
    {
      question: "Can I modify my booking after confirmation?",
      answer: "Yes, most bookings can be modified up to 48 hours before departure, subject to availability and any applicable fees. Changes may include date modifications, passenger updates, or itinerary adjustments. Contact our support team for assistance with modifications."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For international bookings, we also support various local payment methods. All payments are processed securely through our encrypted payment system."
    },
    {
      question: "How do I contact customer support?",
      answer: "Our customer support team is available 24/7 through multiple channels: phone (+1 555-123-4567), email (support@travelagency.com), live chat on our website, and through our mobile app. We typically respond to inquiries within 2 hours during business hours."
    },
    {
      question: "Do you offer group bookings?",
      answer: "Absolutely! We specialize in group travel and offer special rates for groups of 10 or more travelers. Our group booking specialists can help plan custom itineraries, arrange group activities, and provide dedicated support throughout your journey."
    },
    {
      question: "What documents do I need for international travel?",
      answer: "Requirements vary by destination, but generally include a valid passport (with at least 6 months validity), visas (if required), and any specific health documents. We provide detailed information for each destination and can assist with visa applications for many countries."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="container">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className=" mx-auto">
            
            {/* Section Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
                  {/* Decorative Element */}
          <div className="flex justify-center mb-6">
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
          </div>
              <h2 className="h2 font-bold text-gray-900 mb-6">
                Frequently Asked <span className='text-primary'>Questions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to the most common questions about our travel services and booking process.
              </p>
            </motion.div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <motion.svg 
                        className="w-6 h-6 text-gray-500"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="border-t border-gray-200 pt-4">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Contact CTA */}
            <motion.div 
              className="text-center mt-12"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <div className="bg-gradient-to-br from-primary to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Can't find what you're looking for? Our travel experts are here to help you with any questions about our services, destinations, or booking process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+15551234567"
                    className="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us Now
                  </a>
                  <a
                    href="mailto:support@travelagency.com"
                    className="bg-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors duration-300 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send Email
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
