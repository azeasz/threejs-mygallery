import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import MinecraftPage from './pages/MinecraftPage';
import SteamPage from './pages/SteamPage';
import SpotifyPage from './pages/SpotifyPage';
import YoutubePage from './pages/YoutubePage';
import ProfilePage from './pages/ProfilePage';
import CollectionPage from './pages/CollectionPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="minecraft" element={<MinecraftPage />} />
        <Route path="steam" element={<SteamPage />} />
        <Route path="spotify" element={<SpotifyPage />} />
        <Route path="youtube" element={<YoutubePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="collection/:id" element={<CollectionPage />} />
      </Route>
    </Routes>
  );
}

export default App;