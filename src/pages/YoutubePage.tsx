import React from 'react';
import ThreeBackground from '../components/three/ThreeBackground';
import FeaturedCollections from '../components/FeaturedCollections';
import { motion } from 'framer-motion';

const YoutubePage: React.FC = () => {
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
              YouTube Playlist Collections
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Curate and share your favorite YouTube videos in themed collections with immersive 3D galleries.
            </p>
          </motion.div>
          
          <FeaturedCollections type="youtube" title="Popular YouTube Collections" />
        </div>
      </section>
    </>
  );
};

export default YoutubePage;