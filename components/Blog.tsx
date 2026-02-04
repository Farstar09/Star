'use client';

import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <section id="blog" className="section-padding bg-[#1a1a1a]/50">
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
            Star&apos;s <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Insights, tutorials, and thoughts on development and technology
          </p>
        </motion.div>

        {/* TBD Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center py-16"
        >
          <div className="card max-w-2xl mx-auto">
            <div className="text-6xl mb-6">📝</div>
            <h3 className="text-3xl font-bold mb-4 gradient-text">
              Coming Soon
            </h3>
            <p className="text-gray-400 text-lg">
              TBD
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
