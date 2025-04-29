import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BlogGrid from './components/BlogGrid';
import Footer from './components/Footer';
import HighlightShare from './components/HighlightShare';
import ScrollProgressBar from './components/ScrollProgressBar';
import './styles/themes.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 relative">
      <ScrollProgressBar />
      <Navbar />
      <HeroSection />
      <BlogGrid />
      <Footer />
      <HighlightShare />
    </div>
  );
}

export default App;

