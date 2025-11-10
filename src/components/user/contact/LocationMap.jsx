// src/components/contact/LocationMap.js
import React from 'react';
import { MapPin } from 'lucide-react';
import detailsData from '../../../data/contactDetails.json';


function LocationMap() {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Our Location</h3>
      <p className="text-gray-700 mb-4 flex items-center">
        <MapPin className="h-5 w-5 text-indigo-600 mr-2" />
        {detailsData.address.street}, {detailsData.address.city} {detailsData.address.country}
      </p>

      <div className="relative h-64 w-full rounded-lg shadow-inner overflow-hidden border border-gray-300">
        <iframe
          src={detailsData.address.googleMapsLink}
          title="Location Map"
          frameBorder="0"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default LocationMap;