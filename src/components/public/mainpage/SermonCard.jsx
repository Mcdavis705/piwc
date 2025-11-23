import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Play, Mic, Calendar, Video } from 'lucide-react';

// Extract YouTube video ID from any URL format
export const getYouTubeId = (url) => {
  if (!url) return null;
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\/live\/|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

// Get YouTube thumbnail URL with fallback
export const getYouTubeThumbnail = (url) => {
  const videoId = getYouTubeId(url);
  if (!videoId) return "https://via.placeholder.com/480x270?text=No+Thumbnail";

  // Try maxres, then hq, then default
  const base = `https://img.youtube.com/vi/${videoId}`;
  const thumbnails = ["maxresdefault.jpg", "hqdefault.jpg", "mqdefault.jpg", "default.jpg"];
  return `${base}/${thumbnails[0]}`; // use maxresfirst, can implement dynamic check if needed
};


const SermonCard = ({ sermon, index }) => {
  const thumbnail = getYouTubeThumbnail(sermon.link);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{
        scale: 1.03,
        boxShadow:
          '0 10px 20px rgba(0,0,0,0.15), 0 0 0 2px rgba(99,102,241,0.3)',
        transition: { duration: 0.2 },
      }}
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col cursor-pointer"
    >
      {/* Image with video overlay */}
      <div className="relative h-48 bg-indigo-100 flex items-center justify-center">
        <img
          src={thumbnail}
          alt={sermon.title}
          className="w-full h-full object-cover"
        />

        {/* Clickable overlay */}
        <a
          href={sermon.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white opacity-0 hover:opacity-100 transition duration-300"
          aria-label={`Watch sermon: ${sermon.title}`}
        >
          <Play className="h-14 w-14 fill-white" />
        </a>
      </div>

      {/* Card content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-snug hover:text-indigo-600 transition duration-150">
          <a href={sermon.link} target="_blank" rel="noopener noreferrer">
            {sermon.title}
          </a>
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

          <a
            href={sermon.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors mt-2"
          >
            <Video className="h-4 w-4 mr-2 text-white" />
            <span>Watch Sermon</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

SermonCard.propTypes = {
  sermon: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    speaker: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
  index: PropTypes.number,
};

export default SermonCard;
