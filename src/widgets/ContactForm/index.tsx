'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) return 'Name is required';
    if (name.length < 2) return 'Name must be at least 2 characters';
    if (name.length > 50) return 'Name must be less than 50 characters';
    if (!/^[a-zA-Z\s]+$/.test(name)) return 'Name can only contain letters and spaces';
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (phone.trim()) {
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
        return 'Phone number must be exactly 10 digits';
      }
    }
    return undefined;
  };

  const validateSubject = (subject: string): string | undefined => {
    if (!subject.trim()) return 'Subject is required';
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) return 'Message is required';
    if (message.length < 10) return 'Message must be at least 10 characters';
    if (message.length > 1000) return 'Message must be less than 1000 characters';
    return undefined;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Special handling for phone number - only allow digits
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [name]: numericValue }));
    } 
    // Special handling for name - only allow letters and spaces
    else if (name === 'name') {
      const lettersOnly = value.replace(/[^a-zA-Z\s]/g, '');
      setFormData(prev => ({ ...prev, [name]: lettersOnly }));
    } 
    else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    newErrors.name = validateName(formData.name);
    newErrors.email = validateEmail(formData.email);
    newErrors.phone = validatePhone(formData.phone);
    newErrors.subject = validateSubject(formData.subject);
    newErrors.message = validateMessage(formData.message);

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setErrors({});
    }, 3000);
  };

  return (
    <section className="relative py-20 bg-white">
      <div className="container">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Form Section */}
              <motion.div 
                className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="mb-8">
                  <h2 className="h2 font-bold text-gray-900 mb-4">Send us a Message</h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible. 
                    We typically respond within 2 hours during business hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div 
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                         <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                           Full Name *
                         </label>
                         <input
                           type="text"
                           id="name"
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
                           required
                           className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                             errors.name 
                               ? 'border-red-500 focus:ring-red-500' 
                               : 'border-gray-300 focus:ring-blue-500'
                           }`}
                           placeholder="Enter your full name"
                         />
                         {errors.name && (
                           <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                         )}
                       </div>
                       
                       <div>
                         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                           Email Address *
                         </label>
                         <input
                           type="email"
                           id="email"
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           required
                           className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                             errors.email 
                               ? 'border-red-500 focus:ring-red-500' 
                               : 'border-gray-300 focus:ring-blue-500'
                           }`}
                           placeholder="Enter your email address"
                         />
                         {errors.email && (
                           <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                         )}
                       </div>
                     </div>

                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                         <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                           Phone Number
                         </label>
                         <input
                           type="tel"
                           id="phone"
                           name="phone"
                           value={formData.phone}
                           onChange={handleChange}
                           maxLength={10}
                           className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                             errors.phone 
                               ? 'border-red-500 focus:ring-red-500' 
                               : 'border-gray-300 focus:ring-blue-500'
                           }`}
                           placeholder="Enter 10-digit phone number"
                         />
                         {errors.phone && (
                           <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                         )}
                       </div>
                       
                       <div>
                         <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                           Subject *
                         </label>
                         <select
                           id="subject"
                           name="subject"
                           value={formData.subject}
                           onChange={handleChange}
                           required
                           className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                             errors.subject 
                               ? 'border-red-500 focus:ring-red-500' 
                               : 'border-gray-300 focus:ring-blue-500'
                           }`}
                         >
                           <option value="">Select a subject</option>
                           <option value="general">General Inquiry</option>
                           <option value="booking">Booking Support</option>
                           <option value="trip-planning">Trip Planning</option>
                           <option value="technical">Technical Support</option>
                           <option value="partnership">Partnership</option>
                           <option value="other">Other</option>
                         </select>
                         {errors.subject && (
                           <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                         )}
                       </div>
                     </div>

                                         <div>
                       <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                         Message *
                       </label>
                       <textarea
                         id="message"
                         name="message"
                         value={formData.message}
                         onChange={handleChange}
                         required
                         rows={6}
                         maxLength={1000}
                         className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none ${
                           errors.message 
                             ? 'border-red-500 focus:ring-red-500' 
                             : 'border-gray-300 focus:ring-blue-500'
                         }`}
                         placeholder="Tell us about your inquiry (minimum 10 characters)..."
                       />
                       <div className="flex justify-between items-center mt-1">
                         {errors.message && (
                           <p className="text-red-500 text-sm">{errors.message}</p>
                         )}
                         <p className="text-gray-500 text-sm ml-auto">
                           {formData.message.length}/1000
                         </p>
                       </div>
                     </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>

              {/* Info Section */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <div>
                  <h3 className="h3 font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                  <div className="space-y-6">
                    {[
                      {
                        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                        title: 'Quick Response',
                        description: 'We typically respond to all inquiries within 2 hours during business hours.'
                      },
                      {
                        icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                        title: 'Expert Support',
                        description: 'Our travel experts are here to help you plan the perfect trip.'
                      },
                      {
                        icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
                        title: 'Personalized Service',
                        description: 'Every inquiry is handled with care and personalized attention.'
                      }
                    ].map((feature, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start space-x-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200/50">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Need Immediate Help?</h4>
                  <p className="text-gray-600 mb-4">
                    For urgent matters, you can reach us directly:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-700 font-medium">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-700 font-medium">support@travelagency.com</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
