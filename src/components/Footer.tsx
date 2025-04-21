import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-xl font-display font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                CollectSphere
              </span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              The ultimate platform for sharing your Minecraft mods, Steam library, 
              Spotify and YouTube playlists in a beautiful 3D gallery.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-white">Collections</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/minecraft" className="text-gray-400 hover:text-white transition-colors">
                  Minecraft Mods
                </Link>
              </li>
              <li>
                <Link to="/steam" className="text-gray-400 hover:text-white transition-colors">
                  Steam Library
                </Link>
              </li>
              <li>
                <Link to="/spotify" className="text-gray-400 hover:text-white transition-colors">
                  Spotify Playlists
                </Link>
              </li>
              <li>
                <Link to="/youtube" className="text-gray-400 hover:text-white transition-colors">
                  YouTube Playlists
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white">Account</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/profile" className="text-gray-400 hover:text-white transition-colors">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/profile/collections" className="text-gray-400 hover:text-white transition-colors">
                  My Collections
                </Link>
              </li>
              <li>
                <Link to="/profile/settings" className="text-gray-400 hover:text-white transition-colors">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} CollectSphere. All rights reserved. Made with <Heart size={14} className="inline text-accent-500" /> by passionate collectors.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;