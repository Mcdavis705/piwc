// src/components/contact/DetailsCard.js
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import detailsData from '../../../data/contactDetails.json';

function DetailsCard() {
  const details = [
    { icon: MapPin, text: detailsData.address.street + ', ' + detailsData.address.city + ', ' + detailsData.address.country },
    { icon: Phone, text: detailsData.contact.phone },
    { icon: Mail, text: detailsData.contact.email },
    { icon: Clock, text: 'Office Hours: ' + detailsData.hours.open + ' - ' + detailsData.hours.close }
  ];

  return (
  
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Our Details</h3>
      <div className="space-y-4">
        {details.map((item, index) => (
          <div key={index} className="flex items-start">
            <item.icon className="h-5 w-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
            <p className="text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailsCard;