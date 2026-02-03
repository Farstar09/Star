'use client';

import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="container-custom">
        <div className="text-center">
          {/* Animated greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-purple-600 text-lg md:text-xl font-semibold">
              Welcome to my digital universe
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            I&apos;m <span className="gradient-text glow-text">Star</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            Developer & Digital Creator
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting exceptional <span className="text-purple-600 font-semibold">Discord Bots</span>,{' '}
            <span className="text-purple-600 font-semibold">Minecraft Plugins</span>, and{' '}
            <span className="text-purple-600 font-semibold">Web Applications</span> that bring ideas to life.
            Specializing in eSports solutions and innovative digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="#portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full sm:w-auto"
              >
                View My Work
              </motion.button>
            </Link>
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary w-full sm:w-auto"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col items-center"
          >
            <span className="text-gray-500 text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaArrowDown className="text-purple-600 text-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
