import React from 'react';
import ThreeBackground from '../components/three/ThreeBackground';
import FeaturedCollections from '../components/FeaturedCollections';
import { motion } from 'framer-motion';

const SpotifyPage: React.FC = () => {
  return (
    <>
      <ThreeBackground />
      
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Spotify Playlist Collections
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover and share music playlists with interactive 3D visualizations that bring your music to life.
            </p>
          </motion.div>
          
          <FeaturedCollections type="spotify" title="Popular Spotify Collections" />
        </div>
      </section>
    </>
  );
};

export default SpotifyPage;