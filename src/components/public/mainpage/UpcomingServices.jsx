import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../../contexts/userContext';
import { motion } from "framer-motion"; // Removed useMotionValue, useTransform

// Single Service Card (with simple fade-in and hover)
const ServiceCard = ({ title, serviceDay, time, description, isHighlighted, index }) => {
  

  return (
    <motion.div
      // Entrance: Simple fade-in only (no vertical movement)
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      
      // Hover: Modern lift and shadow pulse
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(99, 102, 241, 0.3)", // Subtle indigo ring shadow
      }}
      
      className={`p-6 rounded-2xl bg-white shadow-sm border transition-all duration-300 cursor-pointer
        ${isHighlighted
          ? "border-indigo-400/70 shadow-md"
          : "border-gray-200 hover:border-indigo-300 hover:shadow-lg"
        }
      `}
    >
      <div className="flex flex-col mb-3">
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        <h3 className="text-base font-light text-gray-500">
          {serviceDay} at {time}
        </h3>
      </div>

      <button className="w-full py-1.5 bg-indigo-600 text-white text-sm font-semibold rounded-md mb-4 hover:bg-indigo-700 transition-all">
        <Link to={`/services/`}>More Info</Link>
      </button>

      <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
    </motion.div>
  );
};


function UpcomingServices() {

  const { token } = useContext(UserContext);
  const urlApi = 'https://app.nocodb.com/api/v2/tables/m3knub05rlo6f8n/records';

  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(urlApi, {
      method: 'GET',
      headers: {
        "content-type": 'application/json',
        'xc-token': token
      },
    })
      .then((response) => response.json())
      .then((data) => setService(data.list || []))
      .catch((error) => console.error('Error fetching services:', error));
  }, [token]);

  return (
    <div className="max-w-7xl mx-auto mb-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
        Upcoming Service Times
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {service.map((service, index) => (
          <ServiceCard
            key={service.day || index}
            {...service}
            isHighlighted={index === 0}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default UpcomingServices;