import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/userContext";

import { MapPin, Calendar, ArrowRight } from 'lucide-react';

// Card for a single Featured Event
const EventCard = ({ title, date, location, description, imageUrl }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col hover:shadow-xl transition duration-300">
    {/* Image container */}
    <div className="h-40 bg-gray-200 overflow-hidden">
        {/* Placeholder for actual image: */}
        <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: `url('${imageUrl}')` }} 
            aria-label={`Image for ${title}`}
        />
    </div>
    
    {/* Content */}
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
      
      <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-2 leading-6">{description}</p>
      
      {/* <a href={`#event-${title.replace(/\s/g, '-')}`} className="mt-auto flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition duration-150">
        Learn More
        <ArrowRight className="w-4 h-4 ml-1" />
      </a> */}
    </div>
  </div>
);

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
    .then((data) => setEvents(data.list))
    .catch((error) => console.error("Error fetching events:", error));
}, [token]);


  return (
    <div className="max-w-7xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
        Featured Events
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {events.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedEvents;