'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Discord Bots', 'Minecraft Plugins', 'Websites', 'eSports'];

  const projects = [
    {
      id: 1,
      title: 'Advanced Moderation Bot',
      category: 'Discord Bots',
      description: 'Feature-rich Discord bot with advanced moderation, logging, and auto-moderation capabilities.',
      image: 'https://placehold.co/600x400/1a1a1a/9333ea?text=Discord+Bot',
      tags: ['Discord.js', 'Node.js', 'MongoDB'],
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'Custom Skyblock Plugin',
      category: 'Minecraft Plugins',
      description: 'Fully customizable Skyblock plugin with custom islands, challenges, and economy system.',
      image: 'https://placehold.co/600x400/1a1a1a/9333ea?text=Minecraft+Plugin',
      tags: ['Java', 'Spigot', 'MySQL'],
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'Tournament Platform',
      category: 'eSports',
      description: 'Complete tournament management system with bracket generation, team management, and live scores.',
      image: 'https://placehold.co/600x400/1a1a1a/9333ea?text=Tournament+Platform',
      tags: ['Next.js', 'React', 'PostgreSQL'],
      github: '#',
      demo: '#',
    },
    {
      id: 4,
      title: 'Gaming Community Hub',
      category: 'Websites',
      description: 'Modern community website with forums, events, and integrated Discord authentication.',
      image: 'https://placehold.co/600x400/1a1a1a/9333ea?text=Community+Hub',
      tags: ['React', 'Tailwind', 'Firebase'],
      github: '#',
      demo: '#',
    },
    {
      id: 5,
      title: 'Music & Games Bot',
      category: 'Discord Bots',
      description: 'Multi-purpose bot featuring high-quality music streaming and interactive mini-games.',
      image: 'https://placehold.co/600x400/1a1a1a/9333ea?text=Music+Bot',
      tags: ['Discord.js', 'Lavalink', 'Redis'],
      github: '#',
      demo: '#',
    },
    {
      id: 6,
      title: 'Faction Warfare Plugin',
      category: 'Minecraft Plugins',
      description: 'Advanced faction system with territory control, wars, and custom economy.',
      image: 'https://placehold.co/600x400/1a1a1a/9333ea?text=Faction+Plugin',
      tags: ['Java', 'Paper', 'SQLite'],
      github: '#',
      demo: '#',
    },
    {
      id: 7,
      title: 'Team Management System',
      category: 'eSports',
      description: 'Comprehensive platform for managing eSports teams, rosters, and statistics.',
      image: 'https://placehold.co/600x400/1a1a1a/9333ea?text=Team+Management',
      tags: ['Next.js', 'TypeScript', 'Prisma'],
      github: '#',
      demo: '#',
    },
    {
      id: 8,
      title: 'Portfolio Showcase',
      category: 'Websites',
      description: 'Stunning portfolio website with animations, dark theme, and responsive design.',
      image: 'https://placehold.co/600x400/1a1a1a/9333ea?text=Portfolio+Site',
      tags: ['Next.js', 'Framer Motion', 'Tailwind'],
      github: '#',
      demo: '#',
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding">
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
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            A showcase of my recent projects and contributions
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-primary text-white shadow-glow'
                    : 'bg-dark-card text-gray-400 hover:text-primary border border-gray-800 hover:border-primary'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="card overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 mb-4 -m-6 mb-6 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent opacity-60"></div>
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    <FaGithub />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    <FaExternalLinkAlt />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
