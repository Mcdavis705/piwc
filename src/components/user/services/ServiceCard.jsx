import React from 'react';
import { motion } from "framer-motion";
import { Calendar, Mic, MapPin, Clock } from 'lucide-react';

// Single Service Card (with modern lift + simple fade-in)
const ServiceCard = ({ service, index }) => {
  
  // Destructure service details (using optional chaining for safety)
  const title = service.title || 'Weekly Service';
  const serviceDay = service.serviceDay || 'Sunday';
  const time = service.time || '10:00 AM';
  const location = service.location || 'Main Sanctuary';
  const host = service.host || 'Pastor Smith';
  const description = service.description || 'Our primary gathering featuring dynamic worship, inspiring music and a timely message. Open to all ages.';
  const isHighlighted = service.isHighlighted || index === 0;

  return (
    <motion.div
      // MODIFIED: Removed y: 40 from initial state to prevent upward push
      initial={{ opacity: 0 }} 
      // MODIFIED: Removed y: 0 from whileInView state, as y is no longer needed
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.15 }} // Increased duration slightly for slower fade

      // NEW ANIMATION: Lift, shadow pulse, and scale
      whileHover={{ 
        scale: 1.03, // Gentle lift
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15), 0 0 0 2px rgba(99, 102, 241, 0.3)", // Soft shadow and ring pulse
        transition: { duration: 0.2 }
      }}

      className={`p-6 rounded-2xl bg-white shadow-md border transition-all duration-300 cursor-pointer h-full flex flex-col
        ${isHighlighted
          ? "border-indigo-400/70 shadow-lg ring-2 ring-indigo-500/20"
          : "border-gray-200 hover:border-indigo-300"
        }
      `}
    >
      {/* Icon/Image Placeholder */}
      <div className="flex items-center space-x-3 mb-3 text-indigo-600">
        <Calendar className="w-5 h-5"/>
        <Mic className="w-5 h-5"/>
      </div>

      <div className="flex flex-col mb-3">
        <h4 className="text-xl font-bold text-gray-800">{title}</h4>
      </div>
      
      {/* Detailed Metadata Block */}
      <div className="space-y-2 mb-4 text-gray-700 flex-shrink-0">
        <p className="flex items-center text-sm">
            <Clock className="w-4 h-4 mr-2 text-indigo-500 flex-shrink-0" />
            <span className="font-semibold">{serviceDay}</span> at {time}
        </p>
        <p className="flex items-center text-sm">
            <MapPin className="w-4 h-4 mr-2 text-indigo-500 flex-shrink-0" />
            <span>{location}</span>
        </p>
        <p className="flex items-center text-sm">
            <Mic className="w-4 h-4 mr-2 text-indigo-500 flex-shrink-0" />
            <span>Hosted by {host}</span>
        </p>
      </div>
      
      <p className="text-sm text-gray-500 line-clamp-4 pt-4 border-t border-gray-100 mt-auto">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
