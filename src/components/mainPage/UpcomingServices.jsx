
import { Clock, BookOpen, Users } from 'lucide-react';
import { useEffect, useContext, useState } from 'react';
import UserContext from '../../context/userContext';
import { select } from 'framer-motion/client';



// Card for a single Service Time
const ServiceCard = ({ title, serviceDay, time, description, isHighlighted }) => (
  <div className={`p-6 rounded-xl transition duration-300 bg-white shadow-lg ${isHighlighted ? 'border-2 border-indigo-400' : 'border border-gray-100 hover:border-indigo-300'}`}>
    <div className="flex flex-col mb-4">
      <h4 className="text-lg font-bold text-gray-800">{title}</h4>
      <h3 className="text-lg font-light text-gray-500">{serviceDay} at {time}</h3>
    </div>

    <button className="w-full flex items-center justify-center py-1 px-1 bg-indigo-600 text-white font-bold rounded-lg mb-4 hover:bg-indigo-700 transition duration-150">
      <span>More Info.</span>
    </button>

    <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
  </div>
);

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
      .then((data) => setService(data.list))
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
            key={service.day}
            {...service}
            // Highlight the first card to match the screenshot styled
            isHighlighted={index === 0}
          />
        ))}
      </div>
    </div>
  );
}

export default UpcomingServices;