'use client';

import Link from 'next/link';

export default function TermsOfService() {
  return (
    <section className="min-h-screen mt-[70px] py-[70px]">
      <div className="container">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className=" mx-auto">
            <div className="mb-8">
              <h1 className="h1 text-gray-900 mb-4">Terms of Service</h1>
              <p className="text-lg text-gray-600">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            {/* Content */}
            <div className="bg-white rounded-lg p-8 space-y-8">
              
              {/* Introduction */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  Welcome to TravelAgency. These Terms of Service ("Terms") govern your use of our website and services. 
                  By accessing or using our services, you agree to be bound by these Terms.
                </p>
                <p className="text-gray-700">
                  TravelAgency provides travel booking services, including but not limited to trip planning, 
                  destination recommendations, and travel arrangements.
                </p>
              </section>

              {/* Services */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">2. Services</h2>
                <p className="text-gray-700 mb-4">
                  Our services include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Travel destination recommendations and planning</li>
                  <li>Trip booking and reservation services</li>
                  <li>Travel insurance and safety information</li>
                  <li>Customer support and assistance</li>
                  <li>Travel blog and content</li>
                </ul>
              </section>

              {/* User Accounts */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">3. User Accounts</h2>
                <p className="text-gray-700 mb-4">
                  To access certain features of our services, you may be required to create an account. 
                  You are responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Providing accurate and complete information</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                </ul>
              </section>

              {/* Booking and Payments */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">4. Booking and Payments</h2>
                <p className="text-gray-700 mb-4">
                  When booking travel services through our platform:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>All prices are subject to change without notice</li>
                  <li>Payment is required at the time of booking</li>
                  <li>We accept major credit cards and other payment methods as indicated</li>
                  <li>Refunds are subject to our refund policy and supplier terms</li>
                  <li>Additional fees may apply for changes or cancellations</li>
                </ul>
              </section>

              {/* Cancellation Policy */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">5. Cancellation Policy</h2>
                <p className="text-gray-700 mb-4">
                  Cancellation policies vary by service provider and booking type:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Some bookings may be non-refundable</li>
                  <li>Cancellation fees may apply</li>
                  <li>Refund processing may take 5-10 business days</li>
                  <li>Contact our support team for cancellation requests</li>
                </ul>
              </section>

              {/* Prohibited Uses */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">6. Prohibited Uses</h2>
                <p className="text-gray-700 mb-4">
                  You agree not to use our services for any unlawful purpose or to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on the rights of others</li>
                  <li>Transmit harmful or malicious content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use our services for commercial purposes without permission</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">7. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  All content on our website, including text, images, logos, and software, 
                  is owned by TravelAgency or our licensors and is protected by copyright laws.
                </p>
                <p className="text-gray-700">
                  You may not reproduce, distribute, or create derivative works without our express written consent.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  TravelAgency shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages arising from your use of our services.
                </p>
                <p className="text-gray-700">
                  Our total liability shall not exceed the amount paid by you for the specific service in question.
                </p>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">9. Changes to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right to modify these Terms at any time. Changes will be effective 
                  immediately upon posting. Your continued use of our services constitutes acceptance of the new Terms.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">10. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> legal@travelagency.com<br />
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