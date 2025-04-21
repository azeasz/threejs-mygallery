import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Heart, Share2, Eye, Download, ArrowLeft } from 'lucide-react';

// Mock collection data
const collections = {
  'mc-1': {
    id: 'mc-1',
    title: 'Ultimate Survival Modpack',
    description: 'A carefully curated selection of mods that enhance the survival experience while maintaining balance. This pack focuses on adding challenging new mechanics, beautiful biomes, and interesting creatures without compromising the core Minecraft experience.',
    type: 'minecraft',
    items: [
      { id: 1, name: 'Biomes O\' Plenty', description: 'Adds over 90 new biomes to Minecraft', imageUrl: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750' },
      { id: 2, name: 'Tinkers\' Construct', description: 'Custom tool creation and modification', imageUrl: 'https://images.pexels.com/photos/942317/pexels-photo-942317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750' },
      { id: 3, name: 'Dynamic Trees', description: 'Realistic tree growth and harvesting', imageUrl: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750' },
      { id: 4, name: 'JourneyMap', description: 'Real-time mapping in-game as you explore', imageUrl: 'https://images.pexels.com/photos/697662/pexels-photo-697662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750' },
      { id: 5, name: 'Twilight Forest', description: 'A mystical dimension filled with new adventures', imageUrl: 'https://images.pexels.com/photos/1083515/pexels-photo-1083515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750' }
    ],
    owner: {
      name: 'CraftMaster',
      avatarUrl: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    stats: {
      likes: 387,
      views: 1243,
      downloads: 521
    },
    createdAt: 'June 15, 2023'
  }
};

// 3D Floating Item Component
const FloatingItem = ({ position, imageUrl, name, index }: { 
  position: [number, number, number]; 
  imageUrl: string; 
  name: string;
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const mesh = useRef<THREE.Mesh>(null!);
  
  return (
    <group 
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh ref={mesh} rotation={[0, Math.PI / (4 + index * 0.5), 0]}>
        <boxGeometry args={[3, 4, 0.2]} />
        <meshStandardMaterial 
          color={hovered ? "#ffffff" : "#aaaaaa"} 
          map={undefined} 
          roughness={0.3} 
          metalness={0.3} 
        />
      </mesh>
      <Text
        position={[0, -2.5, 0.2]}
        fontSize={0.4}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.8}
      >
        {name}
      </Text>
    </group>
  );
};

// 3D Scene for the collection
const CollectionScene = ({ collection }: { collection: any }) => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} />
      
      {collection.items.map((item: any, index: number) => (
        <FloatingItem 
          key={item.id}
          position={[
            Math.sin(index / collection.items.length * Math.PI * 2) * 8,
            0,
            Math.cos(index / collection.items.length * Math.PI * 2) * 8
          ]}
          imageUrl={item.imageUrl}
          name={item.name}
          index={index}
        />
      ))}
      
      <Text
        position={[0, 0, 0]}
        fontSize={1.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={10}
      >
        {collection.title}
      </Text>
      
      <OrbitControls 
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const CollectionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const collection = collections[id as keyof typeof collections];
  
  if (!collection) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Collection not found</h2>
          <p className="text-gray-400 mt-2">The collection you're looking for doesn't seem to exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <a href="javascript:history.back()" className="inline-flex items-center text-gray-400 hover:text-white mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Back
          </a>
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">{collection.title}</h1>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  <img 
                    src={collection.owner.avatarUrl} 
                    alt={collection.owner.name}
                    className="w-8 h-8 rounded-full mr-2 border-2 border-white/20"
                  />
                  <span className="text-gray-300">{collection.owner.name}</span>
                </div>
                <span className="text-gray-500 text-sm">•</span>
                <span className="text-gray-500 text-sm">Created {collection.createdAt}</span>
              </div>
              <p className="text-gray-300 max-w-2xl">{collection.description}</p>
            </div>
            
            <div className="flex gap-3 self-start">
              <button className="btn-primary flex items-center gap-2">
                <Download size={18} />
                <span>Download</span>
              </button>
              <button className="glass-card p-2 rounded-full">
                <Heart size={20} />
              </button>
              <button className="glass-card p-2 rounded-full">
                <Share2 size={20} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold">{collection.stats.likes}</div>
              <div className="text-gray-400 text-sm">Likes</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold">{collection.stats.views}</div>
              <div className="text-gray-400 text-sm">Views</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold">{collection.stats.downloads}</div>
              <div className="text-gray-400 text-sm">Downloads</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-dark-300/50 backdrop-blur-sm rounded-xl overflow-hidden mb-12 h-[500px]"
        >
          <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
            <CollectionScene collection={collection} />
          </Canvas>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">Collection Items</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collection.items.map((item: any) => (
              <motion.div 
                key={item.id}
                className="glass-card overflow-hidden rounded-xl"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="relative h-48">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CollectionPage;