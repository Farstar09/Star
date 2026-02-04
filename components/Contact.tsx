'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaDiscord, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import DiscordPanel from './DiscordPanel';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isDiscordPanelOpen, setIsDiscordPanelOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitStatus('success');
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus('idle');
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'star@builtbystar.com',
      href: 'mailto:star@builtbystar.com',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Remote / Worldwide',
      href: null,
    },
  ];

  const socialLinks = [
    { icon: FaTwitter, href: 'https://x.com/St4rishim', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: FaDiscord, href: '#', label: 'Discord', color: 'hover:text-indigo-400', isDiscord: true },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s work together to bring your ideas to life!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
              Feel free to reach out through any of the channels below.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4 card">
                  <div className="p-3 bg-purple-600/10 rounded-lg">
                    <info.icon className="text-2xl text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-300 hover:text-purple-600 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.isDiscord ? undefined : "_blank"}
                    rel={social.isDiscord ? undefined : "noopener noreferrer"}
                    onClick={(e) => {
                      if (social.isDiscord) {
                        e.preventDefault();
                        setIsDiscordPanelOpen(true);
                      }
                    }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 bg-[#111111] border border-gray-800 rounded-lg text-gray-400 transition-all duration-300 ${social.color} hover:border-purple-600 cursor-pointer`}
                    aria-label={social.label}
                  >
                    <social.icon className="text-2xl" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="card">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary"
                >
                  Send Message
                </motion.button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-center"
                  >
                    Message sent successfully! I&apos;ll get back to you soon.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Discord Contact Panel */}
      <DiscordPanel isOpen={isDiscordPanelOpen} onClose={() => setIsDiscordPanelOpen(false)} />
    </section>
  );
};

export default Contact;
