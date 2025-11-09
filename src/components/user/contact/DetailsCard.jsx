// src/components/contact/DetailsCard.js
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function DetailsCard() {
  const details = [
    { icon: MapPin, text: '123 Church Street, Cityville, State 12345, USA' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: Mail, text: 'info@faithconnect.org' },
    { icon: Clock, text: 'Office Hours: Mon - Fri, 9:00 AM - 5:00 PM' },
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