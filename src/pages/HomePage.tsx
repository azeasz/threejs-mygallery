import React from 'react';
import ThreeBackground from '../components/three/ThreeBackground';
import HeroSection from '../components/HeroSection';
import FeaturedCollections from '../components/FeaturedCollections';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Gamepad2, Music, Film, Monitor } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <>
      <ThreeBackground />
      <HeroSection />

      <section id="features" className="py-20 bg-dark-300/90 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Collection Types</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Curate and showcase your favorite digital content across multiple platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link to="/minecraft" className="block h-full">
                <div className="glass-card p-6 h-full flex flex-col items-center text-center transition-all duration-300 hover:bg-gradient-to-b hover:from-green-800/20 hover:to-transparent">
                  <div className="w-16 h-16 rounded-2xl mb-4 bg-green-800/30 flex items-center justify-center">
                    <Gamepad2 size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Minecraft Mods</h3>
                  <p className="text-gray-400 mb-6">
                    Share your custom modpacks, resourcepacks, and datapacks with detailed installation guides.
                  </p>
                  <span className="mt-auto inline-block px-4 py-2 rounded-full bg-green-800/30 text-green-400 text-sm font-medium">
                    Browse Minecraft Mods
                  </span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/steam" className="block h-full">
                <div className="glass-card p-6 h-full flex flex-col items-center text-center transition-all duration-300 hover:bg-gradient-to-b hover:from-blue-800/20 hover:to-transparent">
                  <div className="w-16 h-16 rounded-2xl mb-4 bg-blue-800/30 flex items-center justify-center">
                    <Monitor size={32} className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Steam Library</h3>
                  <p className="text-gray-400 mb-6">
                    Showcase your game collection with play time stats, achievements, and personalized reviews.
                  </p>
                  <span className="mt-auto inline-block px-4 py-2 rounded-full bg-blue-800/30 text-blue-400 text-sm font-medium">
                    Browse Steam Collections
                  </span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/spotify" className="block h-full">
                <div className="glass-card p-6 h-full flex flex-col items-center text-center transition-all duration-300 hover:bg-gradient-to-b hover:from-green-800/20 hover:to-transparent">
                  <div className="w-16 h-16 rounded-2xl mb-4 bg-green-800/30 flex items-center justify-center">
                    <Music size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Spotify Playlists</h3>
                  <p className="text-gray-400 mb-6">
                    Share your favorite playlists with track listings, artwork, and custom descriptions.
                  </p>
                  <span className="mt-auto inline-block px-4 py-2 rounded-full bg-green-800/30 text-green-400 text-sm font-medium">
                    Browse Spotify Playlists
                  </span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/youtube" className="block h-full">
                <div className="glass-card p-6 h-full flex flex-col items-center text-center transition-all duration-300 hover:bg-gradient-to-b hover:from-red-800/20 hover:to-transparent">
                  <div className="w-16 h-16 rounded-2xl mb-4 bg-red-800/30 flex items-center justify-center">
                    <Film size={32} className="text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">YouTube Playlists</h3>
                  <p className="text-gray-400 mb-6">
                    Curate your favorite videos into themed collections with custom descriptions and notes.
                  </p>
                  <span className="mt-auto inline-block px-4 py-2 rounded-full bg-red-800/30 text-red-400 text-sm font-medium">
                    Browse YouTube Playlists
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <FeaturedCollections />

      <section className="py-20 bg-dark-200/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Experience Your Collections in <span className="text-primary-400">3D</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                CollectSphere brings your digital collections to life with stunning 3D visuals 
                and interactive environments. Share your passion with the world in a way that's 
                truly immersive and engaging.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-800/40 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-400 font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Create Your Collection</h3>
                    <p className="text-gray-400">
                      Import your collections from Minecraft, Steam, Spotify, or YouTube with just a few clicks.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-800/40 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary-400 font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Customize the 3D Gallery</h3>
                    <p className="text-gray-400">
                      Choose themes, layouts, and interactive elements to make your collection unique.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-800/40 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent-400 font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Share with Everyone</h3>
                    <p className="text-gray-400">
                      Generate a shareable link that lets anyone explore your 3D collection gallery.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="glass-card p-1 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1261824/pexels-photo-1261824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="3D Gallery Experience"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary-900/60 to-secondary-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Share Your Collections?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Join thousands of passionate collectors and showcase your digital treasures in our immersive 3D galleries.
            </p>
            <Link to="/profile" className="btn-primary text-lg px-8 py-3 rounded-full">
              Create Your First Collection
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;