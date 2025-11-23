import React, { useEffect, useContext, useState } from 'react';
import ServiceCard from './ServiceCard';

import UserContext from '../../../contexts/userContext';


function ServiceGrid({ searchTerm }) {
  const { token } = useContext(UserContext);
  
  const urlApi = 'https://app.nocodb.com/api/v2/tables/m3knub05rlo6f8n/records';
  
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    if (token) {
      fetch(urlApi, {
        method: 'GET',
        headers: {
          "content-type": 'application/json',
          'xc-token': token
        },
      })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setServices(data.list);
            setIsLoading(false);
        })
        .catch(err => {
            console.error('API Fetch Error:', err);
            setError('Could not fetch data. ');
            setIsLoading(false);
        });
    } else {
        setIsLoading(false);
    }
  }, [token]);


  // Filtering Logic
  const filteredServices = services.filter(service => {
    const searchString = `${service.title} ${service.description} ${service.serviceDay} ${service.location} ${service.host}`.toLowerCase();
    return searchString.includes(searchTerm.toLowerCase());
  });

  if (isLoading) {
    return (
        <div className="flex justify-center items-center py-24">
            <div className="text-xl font-semibold text-indigo-600">Loading Services...</div>
        </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {error && <div className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg">{error}</div>}
        
        {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                    <ServiceCard
                        key={index}
                        service={service}
                        index={index}
                    />
                ))}
            </div>
        ) : (
            <div className="text-center py-16 text-gray-500">
                <p className="text-2xl font-semibold mb-2">No services found.</p>
                <p>Try clearing your search or adjusting your filters.</p>
            </div>
        )}
      
      {/* Simple Pagination Placeholder */}
      <div className="flex justify-center pt-16 pb-10">
        <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-150">
          Load More Services
        </button>
      </div>

    </section>
  );
}

export default ServiceGrid;
