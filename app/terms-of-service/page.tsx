'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="text-gray-400">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-purple max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Welcome to Star. By accessing or using our website, services, Discord bots, Minecraft plugins, 
                or any other products (collectively, the "Services"), you agree to be bound by these Terms of 
                Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">2. Description of Services</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Star provides various digital services, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Discord bot development and hosting</li>
                <li>Minecraft plugin development and customization</li>
                <li>Web development and design services</li>
                <li>eSports solutions and tournament management tools</li>
                <li>Technical consultation and support</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                We reserve the right to modify, suspend, or discontinue any part of our Services at any time 
                without prior notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">3. User Responsibilities</h2>
              <h3 className="text-xl font-semibold text-gray-200 mb-3">3.1 Account Security</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you create an account or use our services, you are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">3.2 Acceptable Use</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                When using our Services, you agree NOT to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights of others</li>
                <li>Transmit malicious code, viruses, or harmful software</li>
                <li>Engage in spamming, phishing, or other fraudulent activities</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Attempt to gain unauthorized access to our systems or services</li>
                <li>Use our Services for any illegal or unauthorized purpose</li>
                <li>Reverse engineer, decompile, or disassemble our software</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">4. Intellectual Property Rights</h2>
              <h3 className="text-xl font-semibold text-gray-200 mb-3">4.1 Our Content</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                All content, features, and functionality of our Services, including but not limited to text, 
                graphics, logos, icons, images, audio clips, video clips, software code, and the compilation 
                thereof, are the exclusive property of Star or our licensors and are protected by copyright, 
                trademark, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">4.2 User Content</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                You retain ownership of any content you submit or provide to us. However, by submitting content, 
                you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and 
                display such content in connection with providing our Services.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">4.3 Custom Development</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                For custom development projects, intellectual property rights will be specified in individual 
                project agreements. Unless otherwise stated, you will receive a license to use the deliverables, 
                while we may retain rights to reuse general concepts and methodologies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">5. Payment and Billing</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you purchase services from us:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>You agree to pay all fees as specified in your service agreement</li>
                <li>All payments are due within the timeframe specified in your invoice</li>
                <li>We reserve the right to suspend services for non-payment</li>
                <li>Refunds, if applicable, will be processed according to our refund policy</li>
                <li>You are responsible for any taxes associated with your purchase</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">6. Service Level and Availability</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                While we strive to provide reliable and consistent service:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>We do not guarantee uninterrupted or error-free service</li>
                <li>Services may be temporarily unavailable for maintenance or updates</li>
                <li>We are not liable for service disruptions caused by third-party providers</li>
                <li>Specific uptime guarantees, if any, will be outlined in individual service agreements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">7. Third-Party Services and Links</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our Services may integrate with or link to third-party services, platforms, or websites 
                (including Discord, Minecraft servers, etc.). We are not responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>The content, accuracy, or availability of third-party services</li>
                <li>Any changes or discontinuation of third-party platforms</li>
                <li>Privacy practices of third-party services</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                Your use of third-party services is governed by their respective terms and policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">8. Disclaimer of Warranties</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
                EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>MERCHANTABILITY</li>
                <li>FITNESS FOR A PARTICULAR PURPOSE</li>
                <li>NON-INFRINGEMENT</li>
                <li>ACCURACY, RELIABILITY, OR AVAILABILITY</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not warrant that our Services will meet your requirements or be free from errors, 
                bugs, or security vulnerabilities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, STAR SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Loss of profits, data, or business opportunities</li>
                <li>Service interruptions or data loss</li>
                <li>Errors or bugs in our software</li>
                <li>Unauthorized access to your data</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our total liability for any claims arising from or related to our Services shall not exceed 
                the amount you paid us in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">10. Indemnification</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree to indemnify, defend, and hold harmless Star, its officers, directors, employees, 
                and agents from any claims, liabilities, damages, losses, and expenses (including legal fees) 
                arising from:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Your use or misuse of our Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Any content you submit or share through our Services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">11. Termination</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We reserve the right to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Suspend or terminate your access to our Services at any time for any reason</li>
                <li>Remove or disable any content that violates these Terms</li>
                <li>Take legal action against users who violate these Terms</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                You may terminate your use of our Services at any time by discontinuing use and, if applicable, 
                closing your account. Certain provisions of these Terms (including intellectual property rights, 
                disclaimers, and limitations of liability) shall survive termination.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">12. Modifications to Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of material 
                changes by:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Posting the updated Terms on our website</li>
                <li>Updating the "Last Updated" date</li>
                <li>Sending notifications to registered users (for significant changes)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                Your continued use of our Services after changes become effective constitutes acceptance of 
                the modified Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">13. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with applicable laws, without 
                regard to conflict of law principles. Any disputes arising from these Terms or your use of 
                our Services shall be resolved through:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Good faith negotiation between the parties</li>
                <li>Mediation, if negotiation fails</li>
                <li>Binding arbitration or court proceedings as a last resort</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">14. General Provisions</h2>
              <h3 className="text-xl font-semibold text-gray-200 mb-3">14.1 Entire Agreement</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                These Terms, together with our Privacy Policy and any additional agreements, constitute the 
                entire agreement between you and Star regarding our Services.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">14.2 Severability</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                If any provision of these Terms is found to be unenforceable, the remaining provisions shall 
                continue in full force and effect.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">14.3 Waiver</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our failure to enforce any right or provision of these Terms shall not constitute a waiver 
                of such right or provision.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">14.4 Assignment</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                You may not assign or transfer these Terms without our prior written consent. We may assign 
                our rights and obligations without restriction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">15. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions, concerns, or feedback regarding these Terms of Service, please 
                contact us at:
              </p>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <p className="text-gray-300">
                  <strong className="text-purple-600">Email:</strong> legal@star-dev.com<br />
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
