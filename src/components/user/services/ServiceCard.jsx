import React from 'react';
import { motion } from "framer-motion";
import { Calendar, Mic, MapPin, Clock } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  
  const title = service.title ;
  const serviceDay = service.serviceDay;
  const time = service.time ;
  const location = service.location ;
  const host = service.host ;
  const description = service.description ;
  const isHighlighted = service.isHighlighted || index === 0;

  return (
    <motion.div
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.15 }} 

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

      <div className="flex flex-col mb-3">
        <h4 className="text-xl font-bold text-gray-800">{title}</h4>
      </div>
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
