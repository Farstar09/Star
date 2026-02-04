'use client';

import { motion } from 'framer-motion';
import { FaDiscord, FaTimes } from 'react-icons/fa';
import { useEffect } from 'react';

interface DiscordPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const DiscordPanel = ({ isOpen, onClose }: DiscordPanelProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
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
          onClick={onClose}
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
  );
};

export default DiscordPanel;
