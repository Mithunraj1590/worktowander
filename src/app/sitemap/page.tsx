'use client';

import Link from 'next/link';

export default function Sitemap() {
  return (
    <section className="min-h-screen mt-[70px] py-[70px]">
      <div className="container">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className=" mx-auto">
            <div className="mb-8">
              <h1 className="h1 text-gray-900 mb-4">Sitemap</h1>
              <p className="text-lg text-gray-600">
                Find all pages and sections of our travel agency website
              </p>
            </div>

            {/* Content */}
            <div className="bg-white rounded-lg p-8 space-y-8">
              
              {/* Main Pages */}
              <section className='mb-12'>
                <h2 className="h2 text-gray-900 mb-6">Main Pages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="h3 text-gray-800 mb-4">Essential Pages</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                          Home
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">Main landing page with featured destinations and trips</p>
                      </li>
                      <li>
                        <Link href="/signin" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                          Sign In
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">User authentication and account access</p>
                      </li>
                      <li>
                        <Link href="/about" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                          About Us
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">Company information and mission</p>
                      </li>
                      <li>
                        <Link href="/contact" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                          Contact
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">Get in touch with our team</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="h3 text-gray-800 mb-4">Travel Services</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/destinations" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                          Destinations
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">Explore featured travel destinations</p>
                      </li>
                      <li>
                        <Link href="/trips" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                          Handpicked Trips
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">Curated travel experiences and packages</p>
                      </li>
                      <li>
                        <Link href="/blog" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                          Travel Blog
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">Travel tips, stories, and insights</p>
                      </li>
                      <li>
                        <Link href="/faq" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                          FAQ
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">Frequently asked questions</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Support & Legal */}
              <section className='mb-12'>
                <h2 className="h2 text-gray-900 mb-6">Support & Legal</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="h3 text-gray-800 mb-4">Customer Support</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/help" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                          Help Center
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">Customer support and assistance</p>
                      </li>
                      <li>
                        <Link href="/refund" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                          Refund Policy
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">Information about refunds and cancellations</p>
                      </li>
                      <li>
                        <Link href="/safety" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                          Travel Safety
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">Safety guidelines and travel tips</p>
                      </li>
                      <li>
                        <Link href="/insurance" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                          Travel Insurance
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">Insurance options and coverage</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="h3 text-gray-800 mb-4">Legal Pages</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/terms" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                          Terms of Service
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">Terms and conditions of use</p>
                      </li>
                      <li>
                        <Link href="/privacy" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                          Privacy Policy
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">How we handle your personal information</p>
                      </li>
                      <li>
                        <Link href="/cookies" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                          Cookies Policy
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">Information about cookie usage</p>
                      </li>
                      <li>
                        <Link href="/sitemap" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                          Sitemap
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">Complete list of website pages</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Website Sections */}
              <section>
                <h2 className="h2 text-gray-900 mb-6">Website Sections</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="h3 text-gray-800 mb-4">Homepage Sections</h3>
                    <ul className="space-y-3">
                      <li>
                        <span className="text-gray-700">Hero Banner</span>
                        <p className="text-sm text-gray-600 mt-1">Main call-to-action and hero content</p>
                      </li>
                      <li>
                        <span className="text-gray-700">Featured Destinations</span>
                        <p className="text-sm text-gray-600 mt-1">Highlighted travel destinations grid</p>
                      </li>
                      <li>
                        <span className="text-gray-700">Handpicked Trips</span>
                        <p className="text-sm text-gray-600 mt-1">Curated travel packages with pagination</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="h3 text-gray-800 mb-4">Navigation</h3>
                    <ul className="space-y-3">
                      <li>
                        <span className="text-gray-700">Header Navigation</span>
                        <p className="text-sm text-gray-600 mt-1">Main navigation menu and user account</p>
                      </li>
                      <li>
                        <span className="text-gray-700">Footer Links</span>
                        <p className="text-sm text-gray-600 mt-1">Quick links, support, and contact information</p>
                      </li>
                      <li>
                        <span className="text-gray-700">Breadcrumbs</span>
                        <p className="text-sm text-gray-600 mt-1">Page navigation and location indicators</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Search & Filters */}
              <section>
                <h2 className="h2 text-gray-900 mb-6">Search & Discovery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="h3 text-gray-800 mb-4">Search Features</h3>
                    <ul className="space-y-3">
                      <li>
                        <span className="text-gray-700">Destination Search</span>
                        <p className="text-sm text-gray-600 mt-1">Find destinations by location or interest</p>
                      </li>
                      <li>
                        <span className="text-gray-700">Trip Filtering</span>
                        <p className="text-sm text-gray-600 mt-1">Filter trips by price, duration, and type</p>
                      </li>
                      <li>
                        <span className="text-gray-700">Advanced Search</span>
                        <p className="text-sm text-gray-600 mt-1">Complex search with multiple criteria</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="h3 text-gray-800 mb-4">Categories</h3>
                    <ul className="space-y-3">
                      <li>
                        <span className="text-gray-700">Mountains</span>
                        <p className="text-sm text-gray-600 mt-1">Mountain and adventure destinations</p>
                      </li>
                      <li>
                        <span className="text-gray-700">Beach</span>
                        <p className="text-sm text-gray-600 mt-1">Beach and coastal destinations</p>
                      </li>
                      <li>
                        <span className="text-gray-700">City</span>
                        <p className="text-sm text-gray-600 mt-1">Urban and cultural destinations</p>
                      </li>
                      <li>
                        <span className="text-gray-700">Adventurous</span>
                        <p className="text-sm text-gray-600 mt-1">Adventure and extreme sports trips</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            {/* Back to Home */}
            <div className="mt-8 text-center">
              <Link 
                href="/" 
                className="btn btn-primary"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 