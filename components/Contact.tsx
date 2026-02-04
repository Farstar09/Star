'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaDiscord, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import DiscordPanel from './DiscordPanel';

const Contact = () => {
  const [isDiscordPanelOpen, setIsDiscordPanelOpen] = useState(false);

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
    { icon: FaTwitter, href: 'https://x.com/St4rishim', label: 'X (Twitter)', color: 'hover:text-blue-400' },
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

        <div className="max-w-2xl mx-auto">
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
        </div>
      </div>

      {/* Discord Contact Panel */}
      <DiscordPanel isOpen={isDiscordPanelOpen} onClose={() => setIsDiscordPanelOpen(false)} />
    </section>
  );
};

export default Contact;
