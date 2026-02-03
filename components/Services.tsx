'use client';

import { motion } from 'framer-motion';
import { FaDiscord, FaCube, FaCode, FaTrophy, FaRocket, FaPalette } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaDiscord,
      title: 'Discord Bots',
      description: 'Custom Discord bots with advanced features, moderation tools, and engaging commands to enhance your community.',
      features: ['Custom Commands', 'Moderation', 'Music & Games', 'API Integration'],
    },
    {
      icon: FaCube,
      title: 'Minecraft Plugins',
      description: 'High-performance Minecraft plugins tailored to your server needs, from mini-games to complex systems.',
      features: ['Custom Plugins', 'Server Management', 'Mini-games', 'Economy Systems'],
    },
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies for optimal user experience.',
      features: ['React/Next.js', 'Responsive Design', 'SEO Optimized', 'Fast Performance'],
    },
    {
      icon: FaTrophy,
      title: 'eSports Solutions',
      description: 'Specialized platforms and tools for eSports teams, tournaments, and gaming communities.',
      features: ['Tournament Systems', 'Team Management', 'Statistics Tracking', 'Live Updates'],
    },
    {
      icon: FaRocket,
      title: 'Custom Projects',
      description: 'Innovative solutions for unique challenges. From automation to complex integrations.',
      features: ['Automation', 'API Development', 'Database Design', 'Cloud Solutions'],
    },
    {
      icon: FaPalette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love. Focused on accessibility and modern aesthetics.',
      features: ['Wireframing', 'Prototyping', 'User Testing', 'Brand Identity'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="section-padding bg-[#1a1a1a]/50">
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
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Delivering excellence across multiple domains with expertise and passion
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="card group"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-block p-4 bg-purple-600/10 rounded-lg group-hover:bg-purple-600/20 transition-colors duration-300">
                  <service.icon className="text-4xl text-purple-600" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
