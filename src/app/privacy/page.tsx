'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen mt-[70px] py-[70px]">
      <div className="container">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className=" mx-auto">
            <div className="mb-8">
              <h1 className="h1 text-gray-900 mb-4">Privacy Policy</h1>
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
                <h2 className="h2 text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  At TravelAgency, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                </p>
                <p className="text-gray-700">
                  By using our services, you consent to the data practices described in this policy.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">2. Information We Collect</h2>
                
                <h3 className="h3 text-gray-800 mb-3">Personal Information</h3>
                <p className="text-gray-700 mb-4">
                  We may collect the following personal information:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
                  <li>Name, email address, and phone number</li>
                  <li>Billing and shipping addresses</li>
                  <li>Payment information (processed securely by third-party providers)</li>
                  <li>Travel preferences and booking history</li>
                  <li>Passport and identification information for travel bookings</li>
                </ul>

                <h3 className="h3 text-gray-800 mb-3">Automatically Collected Information</h3>
                <p className="text-gray-700 mb-4">
                  We automatically collect certain information when you visit our website:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website and search terms</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              {/* How We Use Information */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Process and manage your travel bookings</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Send booking confirmations and travel updates</li>
                  <li>Improve our website and services</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> With trusted partners who assist in providing our services</li>
                  <li><strong>Travel Suppliers:</strong> With airlines, hotels, and other travel providers to fulfill bookings</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                </ul>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">5. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                  <li>Secure payment processing through trusted providers</li>
                </ul>
              </section>

              {/* Cookies and Tracking */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar technologies to enhance your browsing experience:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Marketing Cookies:</strong> Used for personalized advertising</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  You can control cookie settings through your browser preferences.
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">7. Your Privacy Rights</h2>
                <p className="text-gray-700 mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Receive your data in a portable format</li>
                  <li><strong>Objection:</strong> Object to certain processing activities</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
                </ul>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">8. Data Retention</h2>
                <p className="text-gray-700 mb-4">
                  We retain your personal information for as long as necessary to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Provide our services and fulfill bookings</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Maintain business records</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  When we no longer need your information, we securely delete or anonymize it.
                </p>
              </section>

              {/* International Transfers */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">9. International Data Transfers</h2>
                <p className="text-gray-700">
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place to protect your data in accordance with applicable laws.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">10. Children's Privacy</h2>
                <p className="text-gray-700">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect 
                  personal information from children under 13. If you believe we have collected such information, 
                  please contact us immediately.
                </p>
              </section>

              {/* Changes to Policy */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes 
                  by posting the new policy on our website and updating the "Last updated" date.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="h2 text-gray-900 mb-4">12. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@travelagency.com<br />
                    <strong>Phone:</strong> +1 (555) 123-4567<br />
                    <strong>Address:</strong> 123 Travel Street, Adventure City, AC 12345<br />
                    <strong>Data Protection Officer:</strong> dpo@travelagency.com
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
    </div>
  );
} 