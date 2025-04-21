import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import { useLocation } from 'react-router-dom';

// Animated floating cube component
const FloatingCube = ({ position, color, size, rotationSpeed }: { 
  position: [number, number, number]; 
  color: string; 
  size: number;
  rotationSpeed: number;
}) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * rotationSpeed * 0.5;
      mesh.current.rotation.y += delta * rotationSpeed;
      // Small floating animation
      mesh.current.position.y += Math.sin(state.clock.elapsedTime * 0.5) * 0.005;
    }
  });

  return (
    <mesh position={position} ref={mesh}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
    </mesh>
  );
};

// Animated particle system
const ParticleField = ({ count = 100, color = '#ffffff' }: { count?: number; color?: string }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 50,
      (Math.random() - 0.5) * 50,
      (Math.random() - 0.5) * 50
    ] as [number, number, number],
    size: Math.random() * 0.2 + 0.05
  }));

  return (
    <>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshBasicMaterial color={color} transparent opacity={0.6} />
        </mesh>
      ))}
    </>
  );
};

// Get theme colors based on current route
const useThemeColors = () => {
  const location = useLocation();
  const path = location.pathname;
  
  if (path.includes('minecraft')) {
    return { primary: '#5D8C3A', secondary: '#825432', particles: '#7FB85C' }; // Green and brown for Minecraft
  } else if (path.includes('steam')) {
    return { primary: '#1B2838', secondary: '#66C0F4', particles: '#00ADEE' }; // Steam blue colors
  } else if (path.includes('spotify')) {
    return { primary: '#1DB954', secondary: '#191414', particles: '#1ED760' }; // Spotify green
  } else if (path.includes('youtube')) {
    return { primary: '#FF0000', secondary: '#282828', particles: '#FF5252' }; // YouTube red
  }
  
  // Default theme
  return { primary: '#0ea5e9', secondary: '#8b5cf6', particles: '#ec4899' };
};

const ThreeScene = () => {
  const colors = useThemeColors();
  
  // Generate multiple cubes with different properties
  const cubes = [
    { position: [-8, 2, -10], color: colors.primary, size: 2, rotationSpeed: 0.1 },
    { position: [10, -3, -15], color: colors.secondary, size: 3, rotationSpeed: 0.15 },
    { position: [0, 7, -20], color: colors.primary, size: 1.5, rotationSpeed: 0.2 },
    { position: [15, 5, -25], color: colors.secondary, size: 2.5, rotationSpeed: 0.12 },
    { position: [-12, -4, -18], color: colors.primary, size: 1.8, rotationSpeed: 0.18 }
  ];

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
      
      {cubes.map((cube, index) => (
        <FloatingCube
          key={index}
          position={cube.position}
          color={cube.color}
          size={cube.size}
          rotationSpeed={cube.rotationSpeed}
        />
      ))}
      
      <ParticleField count={80} color={colors.particles} />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 -z-10">
      <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
        <ThreeScene />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;