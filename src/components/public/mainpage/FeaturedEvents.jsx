import { useContext, useEffect, useState } from "react";
import UserContext from "../../../contexts/userContext";

import { MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion'; // Removed motion values/transforms

const EventCard = ({ title, date, location, description, imageUrl, index }) => {

  return (
    <motion.div
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      
      whileHover={{ 
        scale: 1.05, // Slight increase in lift compared to services for impact
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15), 0 0 0 2px rgba(99, 102, 241, 0.3)", // Indigo shadow/ring
        transition: { duration: 0.2 }
      }}

      className="bg-white rounded-xl shadow-sm border border-gray-200 hover:border-indigo-300 overflow-hidden transition-all duration-300 cursor-pointer flex flex-col"
    >
      {/* Image */}
      <div className="h-40 w-full overflow-hidden bg-gray-200">
        <div
          className="w-full h-full bg-cover bg-center transition duration-500"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
      </div>

      {/* Text Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h4 className="text-lg font-bold text-gray-800 mb-2">{title}</h4>

        <div className="flex items-center text-sm text-indigo-600 mb-1">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{date}</span>
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{location}</span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 leading-6 mb-2 flex-grow">
          {description}
        </p>
      </div>
    </motion.div>
  );
};


function FeaturedEvents() {
  const { token } = useContext(UserContext);
  const urlApi = "https://app.nocodb.com/api/v2/tables/m2d172w9k3mf04q/records";
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch(urlApi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "xc-token": token,
      },
    })
      .then((response) => response.json())
      .then((data) => setEvents(data.list || []))
      .catch((error) => console.error("Error fetching events:", error));
  }, [token]);

  return (
    <div className="max-w-7xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
        Featured Events
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {events.map((event, index) => (
          <EventCard key={event.title || index} {...event} index={index} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedEvents;