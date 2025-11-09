import React from 'react';
import { motion } from 'framer-motion'; // <-- Import motion
import { PlayCircle, Mic, Calendar, Folder } from 'lucide-react';

// Use index prop for staggered animation
const SermonCard = ({ sermon, index }) => {
  return (
    <motion.div
      // --- ENTRANCE ANIMATION (Simple Fade-in) ---
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.1 }} 
      
      // --- HOVER ANIMATION (Lift and Shadow Pulse) ---
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15), 0 0 0 2px rgba(99, 102, 241, 0.3)", // Indigo shadow/ring
        transition: { duration: 0.2 }
      }}

      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition duration-300 cursor-pointer"
    >
      <div className="relative h-40 bg-indigo-100 flex items-center justify-center">
        <img 
          src={sermon.imageUrl || "https://via.placeholder.com/600x400?text=Sermon+Image"} 
          alt={sermon.title} 
          className="w-full h-full object-cover"
        />
        
        <button 
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white opacity-0 hover:opacity-100 transition duration-300"
          aria-label={`Play sermon: ${sermon.title}`}
        >
          <PlayCircle className="h-14 w-14 fill-white text-indigo-500" />
        </button>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-snug hover:text-indigo-600 transition duration-150">
          <a href={sermon.link}>{sermon.title}</a>
        </h3>

        <div className="space-y-1 text-sm text-gray-500 mt-auto pt-2 border-t border-gray-100">
          <p className="flex items-center">
            <Mic className="h-4 w-4 mr-2 text-indigo-500" />
            <span>{sermon.speaker}</span>
          </p>
          <p className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-indigo-500" />
            <span>{sermon.date}</span>
          </p>
          <p className="flex items-center">
            <Folder className="h-4 w-4 mr-2 text-indigo-500" />
            <span>{sermon.category}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SermonCard;
