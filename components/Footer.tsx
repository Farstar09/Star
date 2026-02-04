'use client';

import Link from 'next/link';
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isDiscordPanelOpen, setIsDiscordPanelOpen] = useState(false);

  const socialLinks = [
    { icon: FaTwitter, href: 'https://x.com/St4rishim', label: 'Twitter' },
    { icon: FaDiscord, href: '#', label: 'Discord', isDiscord: true },
  ];

  const footerLinks = {
    Services: [
      { name: 'Discord Bots', href: '#portfolio' },
      { name: 'Minecraft Plugins', href: '#portfolio' },
      { name: 'Web Development', href: '#portfolio' },
      { name: 'eSports Solutions', href: '#portfolio' },
    ],
    Company: [
      { name: 'About', href: '#home' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Blog', href: '#blog' },
      { name: 'Contact', href: '#contact' },
    ],
  };

  return (
    <footer className="bg-[#111111] border-t border-gray-800 mt-20">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-bold gradient-text"
              >
                ★ Star
              </motion.h3>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Creating exceptional digital experiences through innovative Discord bots, 
              Minecraft plugins, and modern web applications.
            </p>
            <div className="flex space-x-4">
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
                  className="text-gray-400 hover:text-purple-600 transition-colors duration-300 text-2xl cursor-pointer"
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold mb-4 text-purple-600">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-purple-600 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Star. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-purple-600 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-600 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Discord Contact Panel */}
      {isDiscordPanelOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsDiscordPanelOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="card max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsDiscordPanelOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Close"
            >
              <FaTimes className="text-2xl" />
            </button>
            
            <div className="text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/10 rounded-full mb-4">
                  <FaDiscord className="text-4xl text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Discord Contact</h3>
                <p className="text-gray-400">Connect with me on Discord</p>
              </div>
              
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 mb-6">
                <p className="text-sm text-gray-500 mb-2">Discord Username</p>
                <p className="text-2xl font-bold text-purple-600">st4r.1</p>
              </div>
              
              <p className="text-gray-400 text-sm">
                Copy the username above and add me on Discord to get in touch!
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </footer>
  );
};

export default Footer;
