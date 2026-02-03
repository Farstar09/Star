'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaClock, FaTag } from 'react-icons/fa';
import Image from 'next/image';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable Discord Bots with Node.js',
      excerpt: 'Learn how to create Discord bots that can handle thousands of servers efficiently.',
      image: 'https://placehold.co/600x400/1a1a1a/9333ea?text=Discord+Bots',
      date: 'Jan 15, 2024',
      readTime: '5 min read',
      category: 'Tutorial',
      tags: ['Discord.js', 'Node.js', 'Scalability'],
    },
    {
      id: 2,
      title: 'Minecraft Plugin Development Best Practices',
      excerpt: 'Essential tips and patterns for creating high-performance Minecraft plugins.',
      image: 'https://placehold.co/600x400/1a1a1a/9333ea?text=Minecraft+Dev',
      date: 'Jan 10, 2024',
      readTime: '8 min read',
      category: 'Guide',
      tags: ['Minecraft', 'Java', 'Spigot'],
    },
    {
      id: 3,
      title: 'Next.js 14 and the App Router',
      excerpt: 'Exploring the new App Router in Next.js 14 and its benefits for modern web apps.',
      image: 'https://placehold.co/600x400/1a1a1a/9333ea?text=Next.js+14',
      date: 'Jan 5, 2024',
      readTime: '6 min read',
      category: 'Tutorial',
      tags: ['Next.js', 'React', 'Web Dev'],
    },
    {
      id: 4,
      title: 'Creating Engaging eSports Platforms',
      excerpt: 'Design considerations and features for building successful eSports websites.',
      image: 'https://placehold.co/600x400/1a1a1a/9333ea?text=eSports',
      date: 'Dec 28, 2023',
      readTime: '7 min read',
      category: 'Design',
      tags: ['eSports', 'UX', 'Web Design'],
    },
    {
      id: 5,
      title: 'Dark Mode Design: Tips and Tricks',
      excerpt: 'How to create beautiful dark themes that are easy on the eyes.',
      image: 'https://placehold.co/600x400/1a1a1a/9333ea?text=Dark+Mode',
      date: 'Dec 20, 2023',
      readTime: '4 min read',
      category: 'Design',
      tags: ['UI/UX', 'Design', 'CSS'],
    },
    {
      id: 6,
      title: 'Optimizing Database Queries in Web Apps',
      excerpt: 'Techniques to improve database performance and reduce query times.',
      image: 'https://placehold.co/600x400/1a1a1a/9333ea?text=Database',
      date: 'Dec 15, 2023',
      readTime: '10 min read',
      category: 'Tutorial',
      tags: ['Database', 'Performance', 'SQL'],
    },
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="blog" className="section-padding bg-dark-lighter/50">
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

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts by title, content, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-14 bg-dark-card border border-gray-800 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-300"
              />
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card overflow-hidden group cursor-pointer"
            >
              {/* Post Image */}
              <div className="relative h-48 -m-6 mb-6 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Info */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <FaClock />
                  {post.readTime}
                </span>
                <span>{post.date}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                  >
                    <FaTag className="text-[10px]" />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-400 text-lg">
              No posts found matching &quot;{searchQuery}&quot;
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;
