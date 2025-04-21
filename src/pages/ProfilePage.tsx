import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Monitor, Music, Film, User, Settings, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  // Mock user data
  const user = {
    name: 'Alex Johnson',
    username: 'alexj',
    avatarUrl: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Passionate gamer, music lover, and content creator. I love sharing my collections with the community!',
    joinedDate: 'March 2023',
    stats: {
      collections: 12,
      followers: 247,
      following: 183,
      likes: 528
    }
  };

  // Mock collection data
  const userCollections = [
    {
      id: 'mc-user-1',
      title: 'Fantasy RPG Overhaul',
      type: 'minecraft',
      imageUrl: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      items: 47,
      likes: 124,
      views: 532
    },
    {
      id: 'steam-user-1',
      title: 'Strategy Masterpieces',
      type: 'steam',
      imageUrl: 'https://images.pexels.com/photos/3654750/pexels-photo-3654750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      items: 18,
      likes: 86,
      views: 341
    },
    {
      id: 'spotify-user-1',
      title: 'Lo-Fi Work Focus',
      type: 'spotify',
      imageUrl: 'https://images.pexels.com/photos/1447092/pexels-photo-1447092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      items: 53,
      likes: 215,
      views: 783
    },
    {
      id: 'youtube-user-1',
      title: 'Web Development Tutorials',
      type: 'youtube',
      imageUrl: 'https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      items: 32,
      likes: 97,
      views: 426
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'minecraft':
        return <Gamepad2 size={16} className="text-green-400" />;
      case 'steam':
        return <Monitor size={16} className="text-blue-400" />;
      case 'spotify':
        return <Music size={16} className="text-green-400" />;
      case 'youtube':
        return <Film size={16} className="text-red-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-dark-200 to-dark-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <motion.div 
            className="flex flex-col md:flex-row items-start gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-500/30">
              <img 
                src={user.avatarUrl} 
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold">{user.name}</h1>
                  <p className="text-gray-400">@{user.username}</p>
                </div>
                
                <div className="mt-4 md:mt-0 flex gap-4">
                  <button className="btn-secondary flex items-center gap-2">
                    <Settings size={18} />
                    <span>Edit Profile</span>
                  </button>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 max-w-2xl">{user.bio}</p>
              
              <div className="flex flex-wrap gap-8 mt-6">
                <div className="text-center">
                  <p className="text-2xl font-bold">{user.stats.collections}</p>
                  <p className="text-gray-400 text-sm">Collections</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{user.stats.followers}</p>
                  <p className="text-gray-400 text-sm">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{user.stats.following}</p>
                  <p className="text-gray-400 text-sm">Following</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{user.stats.likes}</p>
                  <p className="text-gray-400 text-sm">Likes</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400">Joined {user.joinedDate}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">My Collections</h2>
            <Link to="/profile/create" className="btn-primary flex items-center gap-2">
              <Plus size={18} />
              <span>Create Collection</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {userCollections.map((collection) => (
              <Link key={collection.id} to={`/collection/${collection.id}`}>
                <motion.div
                  className="glass-card overflow-hidden rounded-xl h-full"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="relative h-40">
                    <img 
                      src={collection.imageUrl} 
                      alt={collection.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-dark-300/80 to-transparent" />
                    <div className="absolute top-3 right-3 bg-dark-300/80 rounded-full p-2">
                      {getTypeIcon(collection.type)}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{collection.title}</h3>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>{collection.items} items</span>
                      <span>{collection.likes} likes</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}

            <Link to="/profile/create">
              <motion.div
                className="glass-card rounded-xl h-full flex flex-col items-center justify-center p-8 border-2 border-dashed border-white/10"
                whileHover={{ borderColor: 'rgba(255,255,255,0.3)', transition: { duration: 0.2 } }}
              >
                <div className="w-16 h-16 rounded-full bg-primary-900/30 flex items-center justify-center mb-4">
                  <Plus size={32} className="text-primary-400" />
                </div>
                <p className="text-center text-white font-medium">Create New Collection</p>
                <p className="text-center text-gray-400 text-sm mt-2">
                  Add Minecraft mods, Steam games, or media playlists
                </p>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;