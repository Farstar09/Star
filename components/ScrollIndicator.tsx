'use client';

import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const MIN_SCROLL_THRESHOLD = 100; // Minimum scroll distance to show indicator
const BOTTOM_OFFSET = 200; // Distance from bottom to hide indicator

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;
    
    const handleScroll = () => {
      // Debounce scroll handler for better performance
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // Show if scrolled more than threshold and not near the bottom
        const shouldShow = scrollPosition > MIN_SCROLL_THRESHOLD && 
                          (scrollPosition + windowHeight < documentHeight - BOTTOM_OFFSET);
        setIsVisible(shouldShow);
      }, 50); // 50ms debounce delay
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
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
        animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
        transition={prefersReducedMotion ? {} : { duration: 1.5, repeat: Infinity }}
        className="p-3 bg-purple-600/10 rounded-full border border-purple-600/30 hover:bg-purple-600/20 transition-colors duration-300"
      >
        <FaArrowDown className="text-purple-600 text-xl" />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
