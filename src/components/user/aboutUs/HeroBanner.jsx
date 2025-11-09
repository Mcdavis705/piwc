
import React from 'react';

function HeroBanner() {
  const imageUrl = "https://via.placeholder.com/1200x400?text=Church+Interior"; // Placeholder image URL

  return (
    <div 
      className="relative h-96 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Gradient/Purple Overlay (to match the design's tint) */}
      <div className="absolute inset-0 bg-indigo-900 opacity-30"></div>
      
      {/* Content */}
      <div className="relative text-center p-8">
        <h1 className="text-5xl font-extrabold text-white mb-4 [text-shadow:_0_2px_4px_rgb(0_0_0_/_70%)]">
          Our Journey of Faith and Community
        </h1>
        <p className="text-lg text-white max-w-2xl mx-auto [text-shadow:_0_1px_3px_rgb(0_0_0_/_50%)]">
          At FaithConnect, we believe in building a vibrant community rooted in shared values, compassion, and spiritual growth. Discover who we are and what drives us.
        </p>
      </div>
    </div>
  );
}

export default HeroBanner;