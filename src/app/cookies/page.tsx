'use client';

import Link from 'next/link';

export default function CookiesPolicy() {
  return (
    <section className="min-h-screen mt-[70px] py-[70px]">
      <div className="container">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className=" mx-auto">
            <div className="mb-8">
              <h1 className="h1 text-gray-900 mb-4">Cookies Policy</h1>
              <p className="text-lg text-gray-600">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            {/* Content */}
            <div className="bg-white rounded-lg  p-8 space-y-8">
              
              {/* Introduction */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">1. What Are Cookies?</h2>
                <p className="text-gray-700 mb-4">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>
                <p className="text-gray-700">
                  Cookies can be either "session cookies" (temporary and deleted when you close your browser) 
                  or "persistent cookies" (stored on your device for a longer period).
                </p>
              </section>

              {/* Types of Cookies */}
              <section>
                <h2 className="mb-4 h2 text-gray-900 ">2. Types of Cookies We Use</h2>
                
                <h3 className="h3 text-gray-800 mb-3">Essential Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are necessary for the website to function properly. They enable basic functions 
                  like page navigation, access to secure areas, and form submissions.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
                  <li>Authentication and security cookies</li>
                  <li>Session management cookies</li>
                  <li>Shopping cart functionality</li>
                  <li>Language and region preferences</li>
                </ul>

                <h3 className="h3 text-gray-800 mb-3">Analytics Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies help us understand how visitors interact with our website by collecting 
                  and reporting information anonymously.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
                  <li>Page views and time spent on pages</li>
                  <li>Traffic sources and user journeys</li>
                  <li>Error tracking and performance monitoring</li>
                  <li>Device and browser information</li>
                </ul>

                <h3 className="h3 text-gray-800 mb-3">Marketing Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are used to deliver relevant advertisements and track the effectiveness 
                  of our marketing campaigns.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
                  <li>Retargeting and remarketing</li>
                  <li>Social media integration</li>
                  <li>Email marketing tracking</li>
                  <li>Affiliate program tracking</li>
                </ul>

                <h3 className="h3 text-gray-800 mb-3">Preference Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies remember your choices and preferences to provide a personalized experience.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Travel preferences and search history</li>
                  <li>Currency and language settings</li>
                  <li>Display preferences and themes</li>
                  <li>Notification settings</li>
                </ul>
              </section>

              {/* Third-Party Cookies */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">3. Third-Party Cookies</h2>
                <p className="text-gray-700 mb-4">
                  We may use third-party services that place cookies on your device:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><strong>Google Analytics:</strong> Website analytics and performance tracking</li>
                  <li><strong>Google Ads:</strong> Advertising and remarketing services</li>
                  <li><strong>Facebook Pixel:</strong> Social media advertising and tracking</li>
                  <li><strong>Payment Processors:</strong> Secure payment processing</li>
                  <li><strong>Travel Suppliers:</strong> Booking and reservation systems</li>
                </ul>
              </section>

              {/* Cookie Management */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">4. Managing Your Cookie Preferences</h2>
                <p className="text-gray-700 mb-4">
                  You have several options for managing cookies:
                </p>
                
                <h3 className="h3 text-gray-800 mb-3">Browser Settings</h3>
                <p className="text-gray-700 mb-4">
                  Most browsers allow you to control cookies through their settings:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
                  <li>Block all cookies</li>
                  <li>Block third-party cookies only</li>
                  <li>Delete existing cookies</li>
                  <li>Set cookie expiration times</li>
                </ul>

                <h3 className="h3 text-gray-800 mb-3">Cookie Consent</h3>
                <p className="text-gray-700 mb-4">
                  When you first visit our website, you'll see a cookie consent banner. You can:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Customize your preferences</li>
                  <li>Change your settings later</li>
                </ul>

                <h3 className="h3 text-gray-800 mb-3">Opt-Out Tools</h3>
                <p className="text-gray-700">
                  You can also use industry opt-out tools to manage advertising cookies:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Digital Advertising Alliance (DAA)</li>
                  <li>European Interactive Digital Advertising Alliance (EDAA)</li>
                  <li>Network Advertising Initiative (NAI)</li>
                </ul>
              </section>

              {/* Impact of Disabling Cookies */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">5. Impact of Disabling Cookies</h2>
                <p className="text-gray-700 mb-4">
                  If you choose to disable cookies, some features of our website may not work properly:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>You may need to log in repeatedly</li>
                  <li>Shopping cart items may not be saved</li>
                  <li>Personalized content may not be available</li>
                  <li>Some forms may not function correctly</li>
                  <li>Website performance may be affected</li>
                </ul>
              </section>

              {/* Cookie Duration */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">6. Cookie Duration</h2>
                <p className="text-gray-700 mb-4">
                  Different types of cookies have different lifespans:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain for days, months, or years</li>
                  <li><strong>Analytics Cookies:</strong> Typically last 1-2 years</li>
                  <li><strong>Marketing Cookies:</strong> Usually last 90 days to 1 year</li>
                </ul>
              </section>

              {/* Updates to Policy */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">7. Updates to This Cookies Policy</h2>
                <p className="text-gray-700">
                  We may update this Cookies Policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons. We will notify you of any material 
                  changes by posting the updated policy on our website.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">8. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@travelagency.com<br />
                    <strong>Phone:</strong> +1 (555) 123-4567<br />
                    <strong>Address:</strong> 123 Travel Street, Adventure City, AC 12345
                  </p>
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