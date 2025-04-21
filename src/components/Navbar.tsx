import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, User, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-200/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-display font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                CollectSphere
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} end>
                Home
              </NavLink>
              <NavLink to="/minecraft" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                Minecraft
              </NavLink>
              <NavLink to="/steam" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                Steam
              </NavLink>
              <NavLink to="/spotify" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                Spotify
              </NavLink>
              <NavLink to="/youtube" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                YouTube
              </NavLink>
              <button className="text-gray-300 hover:text-white">
                <Search size={20} />
              </button>
              <Link to="/profile" className="btn-primary flex items-center gap-2">
                <User size={16} />
                <span>Profile</span>
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-dark-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'bg-primary-900 text-white' : 'text-gray-300 hover:bg-primary-900/30 hover:text-white'
                }`
              }
              onClick={() => setIsOpen(false)}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/minecraft" 
              className={({isActive}) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'bg-primary-900 text-white' : 'text-gray-300 hover:bg-primary-900/30 hover:text-white'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Minecraft
            </NavLink>
            <NavLink 
              to="/steam" 
              className={({isActive}) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'bg-primary-900 text-white' : 'text-gray-300 hover:bg-primary-900/30 hover:text-white'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Steam
            </NavLink>
            <NavLink 
              to="/spotify" 
              className={({isActive}) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'bg-primary-900 text-white' : 'text-gray-300 hover:bg-primary-900/30 hover:text-white'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Spotify
            </NavLink>
            <NavLink 
              to="/youtube" 
              className={({isActive}) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'bg-primary-900 text-white' : 'text-gray-300 hover:bg-primary-900/30 hover:text-white'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              YouTube
            </NavLink>
            <NavLink 
              to="/profile" 
              className={({isActive}) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'bg-primary-600 text-white' : 'bg-primary-500 text-white hover:bg-primary-600'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Profile
            </NavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;