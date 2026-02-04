'use client';

import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show indicator when user has scrolled down from the top
      // Hide when near the bottom of the page
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show if scrolled more than 100px and not near the bottom (within 200px of bottom)
      const shouldShow = scrollPosition > 100 && (scrollPosition + windowHeight < documentHeight - 200);
      setIsVisible(shouldShow);
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const windowHeight = window.innerHeight;
    const currentPosition = window.scrollY;
    const nextPosition = currentPosition + windowHeight;
    
    window.scrollTo({
      top: nextPosition,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center cursor-pointer"
      onClick={scrollToNext}
    >
      <span className="text-gray-500 text-sm mb-2">Scroll to explore</span>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="p-3 bg-purple-600/10 rounded-full border border-purple-600/30 hover:bg-purple-600/20 transition-colors duration-300"
      >
        <FaArrowDown className="text-purple-600 text-xl" />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
