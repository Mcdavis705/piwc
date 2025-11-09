
import React from 'react';
import { Layers, Church, Users, Heart, BookOpen, User, Baby, UserCircle, Calendar } from 'lucide-react';

const categories = [
  { name: 'All Categories', icon: Layers, count: 22 },
  { name: 'Worship', icon: Church, count: 5 },
  { name: 'Community Outreach', icon: Heart, count: 7 },
  { name: 'Youth Events', icon: Users, count: 4 },
  { name: 'Bible Study', icon: BookOpen, count: 6 },
];

const audiences = [
  { name: 'All Audiences', icon: User, key: 'all' },
  { name: 'All Ages', icon: Baby, key: 'all-ages' },
  { name: 'Adults', icon: UserCircle, key: 'adults' },
  { name: 'Children', icon: Users, key: 'children' },
  { name: 'Seniors', icon: UserCircle, key: 'seniors' },
];

const SidebarItem = ({ name, icon: Icon, active = false, count = null }) => (
  <button 
    className={`flex items-center justify-between w-full p-2 rounded-md transition duration-150 text-left
      ${active ? 'bg-indigo-100 text-indigo-700 font-semibold' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`
    }
  >
    <div className="flex items-center">
      <Icon className="h-5 w-5 mr-3 flex-shrink-0" />
      <span>{name}</span>
    </div>
    {count !== null && (
      <span className={`text-xs px-2 py-0.5 rounded-full ${active ? 'bg-indigo-300' : 'bg-gray-200'}`}>
        {count}
      </span>
    )}
  </button>
);

function EventsSidebar() {
  return (
    <div className="space-y-6">
      
      {/* Event Categories Filter */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Event Categories</h3>
        <div className="space-y-1">
          {categories.map((cat, index) => (
            <SidebarItem 
              key={cat.name} 
              {...cat} 
              active={index === 0} // Set 'All Categories' as active initially
            />
          ))}
        </div>
      </div>
      
      {/* Audience Filter */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Audience</h3>
        <div className="space-y-1">
          {audiences.map((aud, index) => (
            <SidebarItem 
              key={aud.name} 
              {...aud} 
              active={index === 0} // Set 'All Audiences' as active initially
            />
          ))}
        </div>
      </div>
      
      {/* Quick Calendar */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Quick Calendar</h3>
        <div className="flex flex-col items-center justify-center h-28 bg-gray-50 rounded-lg text-gray-500">
          <Calendar className="h-6 w-6 mb-2" />
          <p className="text-sm">Mini-Calendar Placeholder</p>
        </div>
      </div>
    </div>
  );
}

export default EventsSidebar;