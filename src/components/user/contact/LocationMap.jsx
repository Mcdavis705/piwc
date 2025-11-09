// src/components/contact/LocationMap.js
import React from 'react';
import { MapPin } from 'lucide-react';

function LocationMap() {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Our Location</h3>
      <p className="text-gray-700 mb-4 flex items-center">
        <MapPin className="h-5 w-5 text-indigo-600 mr-2" />
        123 Church Street, Cityville, State 12345, USA
      </p>
      
      {/* Map Placeholder */}
      <div className="relative h-64 w-full bg-gray-200 rounded-lg shadow-inner overflow-hidden border border-gray-300">
        <img 
          src="https://via.placeholder.com/600x400?text=Map+Placeholder" 
          alt="Location Map" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-indigo-100 bg-opacity-20">
          <p className="text-gray-600 font-semibold text-center">Interactive Map Coming Soon</p>
        </div>
      </div>
    </div>
  );
}

export default LocationMap;