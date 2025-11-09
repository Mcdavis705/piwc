import React, { useEffect, useContext, useState } from 'react';
import ServiceCard from './ServiceCard';

// NOTE: Placeholder context and mock data
const UserContext = React.createContext({ token: 'mock-token-123' });

const mockServices = [
  { serviceDay: 'Sunday', time: '10:00 AM', title: 'Main Worship Service', description: 'Our primary gathering featuring dynamic worship, inspiring sermons, and community connection. Open to all ages.', location: 'Main Sanctuary', host: 'Pastor Smith', isHighlighted: true },
  { serviceDay: 'Wednesday', time: '7:00 PM', title: 'Midweek Bible Study', description: 'Deep dive into Scripture, group discussion, and prayer time to strengthen your faith foundation. Focus on John 3:16.', location: 'Fellowship Hall', host: 'Elder Chen', isHighlighted: false },
  { serviceDay: 'Friday', time: '6:30 PM', title: 'Youth & Young Adults', description: 'A relaxed and engaging environment for young people to build community and explore faith relevant to their lives. Games and snacks provided!', location: 'Youth Center', host: 'David Lee', isHighlighted: false },
  { serviceDay: 'Saturday', time: '9:00 AM', title: 'Men’s Prayer Breakfast', description: 'Weekly time dedicated to fellowship, prayer, and sharing a meal together. Coffee is always hot.', location: 'Church Cafe', host: 'Deacon Jones', isHighlighted: false },
  { serviceDay: 'Tuesday', time: '9:30 AM', title: 'Women’s Fellowship', description: 'Connecting women of all ages for encouragement, discipleship, and shared ministry projects. Childcare available.', location: 'Room 201', host: 'Sarah Chen', isHighlighted: false },
  { serviceDay: 'Sunday', time: '6:00 PM', title: 'Evening Contemplation', description: 'A quieter, reflective service focused on deep prayer and meditation. Perfect for ending the week.', location: 'Prayer Chapel', host: 'Minister Ray', isHighlighted: false },
];

function ServiceGrid({ searchTerm }) {
  // Use mock token if context isn't fully set up for the Canvas environment
  const { token } = useContext(UserContext) || { token: 'mock-token-default' };
  
  const urlApi = 'https://app.nocodb.com/api/v2/tables/m3knub05rlo6f8n/records';
  
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    // Simulate API Fetch
    if (token && token !== 'mock-token-default') {
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
            setServices(data.list || mockServices);
            setIsLoading(false);
        })
        .catch(err => {
            console.error('API Fetch Error:', err);
            setError('Could not fetch data. Displaying mock services.');
            setServices(mockServices);
            setIsLoading(false);
        });
    } else {
        // Use mock data immediately if token is missing
        setServices(mockServices);
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
