'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen py-20">
      <div className="container-custom section-padding max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-12">
            <Link 
              href="/" 
              className="inline-block text-purple-600 hover:text-purple-500 mb-6 transition-colors duration-300"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-purple max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Welcome to Star ("we," "our," or "us"). We are committed to protecting your privacy and ensuring 
                the security of your personal information. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-200 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Contact us through our website forms</li>
                <li>Subscribe to our newsletter or blog updates</li>
                <li>Request services or support</li>
                <li>Participate in surveys or feedback forms</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                This information may include your name, email address, Discord username, and any other 
                information you choose to provide.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information about your device, 
                including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages viewed and time spent on pages</li>
                <li>Date and time of visits</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the collected information for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Providing and maintaining our services</li>
                <li>Responding to your inquiries and support requests</li>
                <li>Sending you updates, newsletters, and promotional materials (with your consent)</li>
                <li>Improving our website and services</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Detecting and preventing fraud or security issues</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service 
                providers who assist us in operating our website and delivering our services</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in 
                response to valid legal requests</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, 
                your information may be transferred to the acquiring entity</li>
                <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">5. Data Security</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, no 
                method of transmission over the internet or electronic storage is 100% secure, and we cannot 
                guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may use cookies and similar tracking technologies to enhance your browsing experience, 
                analyze website traffic, and understand user preferences. You can control cookie settings 
                through your browser preferences, though disabling cookies may limit certain website functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">7. Your Rights and Choices</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">8. Third-Party Links</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our website may contain links to third-party websites or services. We are not responsible for 
                the privacy practices or content of these external sites. We encourage you to review the 
                privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our services are not intended for children under the age of 13. We do not knowingly collect 
                personal information from children under 13. If you are a parent or guardian and believe your 
                child has provided us with personal information, please contact us so we can delete it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or 
                legal requirements. We will notify you of any material changes by posting the updated policy 
                on this page and updating the "Last Updated" date. Your continued use of our services after 
                such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">11. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data 
                practices, please contact us at:
              </p>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <p className="text-gray-300">
                  <strong className="text-purple-600">Email:</strong> privacy@star-dev.com<br />
                  <strong className="text-purple-600">Website:</strong> <Link href="/#contact" className="text-purple-500 hover:text-purple-400">Contact Form</Link>
                </p>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-center">
              © {currentYear} Star. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
