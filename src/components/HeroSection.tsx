import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Share2, Library } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-[-5] bg-gradient-radial from-dark-200/50 to-dark-300/90" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Share Your Collections in 3D
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Store and showcase your Minecraft mods, Steam library,
            Spotify playlists, and YouTube collections in one beautiful 3D gallery.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/profile" className="btn-primary flex items-center gap-2 text-lg px-8 py-3 rounded-full">
              Get Started
              <ArrowRight size={20} />
            </Link>
            <Link to="#features" className="btn-secondary flex items-center gap-2 text-lg px-8 py-3 rounded-full">
              Explore Features
            </Link>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="glass-card p-6 text-center">
              <div className="bg-primary-500/30 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <BookOpen size={28} className="text-primary-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Organize</h3>
              <p className="text-gray-400">
                Create and manage collections across multiple platforms in one central hub.
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="bg-secondary-500/30 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <Library size={28} className="text-secondary-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Showcase</h3>
              <p className="text-gray-400">
                Display your collections in immersive 3D environments with interactive elements.
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="bg-accent-500/30 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <Share2 size={28} className="text-accent-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Share</h3>
              <p className="text-gray-400">
                Generate unique links to share your collections with friends and communities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;