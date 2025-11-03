import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function ContactSection() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Section Heading */}
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
        Get In Touch
      </h2>
      
      {/* Content Grid (Contact Details & Image) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Contact Details Block */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Details</h3>
          
          <div className="space-y-4 mb-8">
            {/* Address */}
            <div className="flex items-start text-gray-600">
              <MapPin className="w-5 h-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-700">123 Community Way, Cityville, State 12345</p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-start text-gray-600">
              <Phone className="w-5 h-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
              <p>(555) 123-4567</p>
            </div>
            
            {/* Email */}
            <div className="flex items-start text-gray-600">
              <Mail className="w-5 h-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
              <p>info@churchconnect.org</p>
            </div>
          </div>
          
          {/* Send Us a Message Button/Form Placeholder */}
          <button className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-150">
            Send Us a Message
          </button>
        </div>
        
        {/* Image Placeholder Block */}
        <div className="min-h-[300px] flex items-center justify-center relative p-6">
          {/* Placeholder for the church icon image */}
          <div className="w-full h-full bg-cover bg-center rounded-lg border-2 border-dashed border-indigo-200 flex items-center justify-center text-indigo-400">
        </div>
          {/* Dashed line border visible in the screenshot */}
          <div className="absolute inset-0 border-4 border-dashed border-indigo-400 rounded-xl" style={{ opacity: 0.15 }} />
        </div>
        
      </div>
    </div>
  );
}

export default ContactSection;