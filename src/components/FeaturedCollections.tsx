import React from 'react';
import { motion } from 'framer-motion';
import CollectionCard, { CollectionType } from './CollectionCard';

interface FeaturedCollectionsProps {
  type?: CollectionType;
  title?: string;
}

const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({ 
  type, 
  title = 'Featured Collections' 
}) => {
  // This would normally come from an API
  const collections = [
    {
      id: 'mc-1',
      title: 'Ultimate Survival Modpack',
      description: 'A carefully curated selection of mods that enhance the survival experience while maintaining balance.',
      imageUrl: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      type: 'minecraft' as CollectionType,
      items: 42,
      likes: 387,
      views: 1243,
      owner: {
        name: 'CraftMaster',
        avatarUrl: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
      }
    },
    {
      id: 'steam-1',
      title: 'Indie Gems Collection',
      description: 'The best indie games you might have missed. Hidden gems with innovative gameplay and stunning art.',
      imageUrl: 'https://images.pexels.com/photos/2521156/pexels-photo-2521156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      type: 'steam' as CollectionType,
      items: 28,
      likes: 215,
      views: 892,
      owner: {
        name: 'GameHunter',
        avatarUrl: 'https://images.pexels.com/photos/1539946/pexels-photo-1539946.jpeg?auto=compress&cs=tinysrgb&w=150'
      }
    },
    {
      id: 'spotify-1',
      title: 'Synthwave Essentials',
      description: 'The ultimate collection of retro-futuristic sounds. Perfect for night drives and coding sessions.',
      imageUrl: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      type: 'spotify' as CollectionType,
      items: 64,
      likes: 421,
      views: 1876,
      owner: {
        name: 'RetroWaver',
        avatarUrl: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=150'
      }
    },
    {
      id: 'youtube-1',
      title: 'Game Development Tutorials',
      description: 'Learn game development from scratch with this comprehensive playlist of tutorials and walkthroughs.',
      imageUrl: 'https://images.pexels.com/photos/7245370/pexels-photo-7245370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      type: 'youtube' as CollectionType,
      items: 37,
      likes: 293,
      views: 1432,
      owner: {
        name: 'DevMaster',
        avatarUrl: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=150'
      }
    }
  ].filter(collection => !type || collection.type === type);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} {...collection} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;