import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, Share2, Heart } from 'lucide-react';

export type CollectionType = 'minecraft' | 'steam' | 'spotify' | 'youtube';

interface CollectionCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  type: CollectionType;
  items: number;
  likes: number;
  views: number;
  owner: {
    name: string;
    avatarUrl: string;
  };
}

const getTypeColor = (type: CollectionType): string => {
  switch (type) {
    case 'minecraft':
      return 'from-green-500 to-green-700';
    case 'steam':
      return 'from-blue-500 to-blue-700';
    case 'spotify':
      return 'from-green-500 to-green-700';
    case 'youtube':
      return 'from-red-500 to-red-700';
    default:
      return 'from-primary-500 to-primary-700';
  }
};

const getTypeBadgeText = (type: CollectionType): string => {
  switch (type) {
    case 'minecraft':
      return 'Minecraft Mods';
    case 'steam':
      return 'Steam Library';
    case 'spotify':
      return 'Spotify Playlist';
    case 'youtube':
      return 'YouTube Playlist';
    default:
      return 'Collection';
  }
};

const CollectionCard: React.FC<CollectionCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  type,
  items,
  likes,
  views,
  owner
}) => {
  const typeColor = getTypeColor(type);
  const badgeText = getTypeBadgeText(type);

  return (
    <motion.div
      className="glass-card overflow-hidden rounded-xl"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/collection/${id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-dark-300/80 to-transparent" />
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${typeColor} text-white`}>
            {badgeText}
          </div>
        </div>
      
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2 line-clamp-1">{title}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
          
          <div className="flex items-center mb-4">
            <img 
              src={owner.avatarUrl} 
              alt={owner.name}
              className="w-8 h-8 rounded-full mr-3 border-2 border-white/20"
            />
            <span className="text-sm text-gray-300">{owner.name}</span>
          </div>
          
          <div className="flex justify-between text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Heart size={16} />
              <span>{likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye size={16} />
              <span>{views}</span>
            </div>
            <div className="flex items-center gap-1">
              <Share2 size={16} />
              <span>Share</span>
            </div>
            <div>
              {items} items
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CollectionCard;