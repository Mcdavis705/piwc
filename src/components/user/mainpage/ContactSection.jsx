import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import churchIconUrl from '../../../assets/group.jpg'; // ✅ correct import

function ContactSection() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
        Get In Touch
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-100"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Details</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start text-gray-600">
              <MapPin className="w-5 h-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
              <p className="font-semibold text-gray-700">
                123 Community Way, Cityville, State 12345
              </p>
            </div>
            
            <div className="flex items-start text-gray-600">
              <Phone className="w-5 h-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
              <p>(555) 123-4567</p>
            </div>
            
            <div className="flex items-start text-gray-600">
              <Mail className="w-5 h-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
              <p>info@churchconnect.org</p>
            </div>
          </div>
          
          <button className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-150">
            Send Us a Message
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="min-h-[300px] flex items-center justify-center relative p-6"
        >
          <div className="w-full h-full bg-cover bg-center rounded-lg flex items-center justify-center text-indigo-400">
            <img 
              src={churchIconUrl}
              alt="Church building icon" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div />
        </motion.div>
        
      </div>
    </div>
  );
}

export default ContactSection;
