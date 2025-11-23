// src/components/events/CalendarView.js
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarHeader = ({ monthYear }) => (
  <div className="flex items-center justify-between mb-6">
    {/* Month Navigation */}
    <div className="flex items-center space-x-4">
      <button className="text-gray-500 hover:text-indigo-600 transition duration-150">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <h2 className="text-2xl font-bold text-gray-900">{monthYear}</h2>
      <button className="text-gray-500 hover:text-indigo-600 transition duration-150">
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>

    {/* View Switcher */}
    <div className="inline-flex rounded-md shadow-sm border border-gray-200">
      <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-l-md hover:bg-indigo-700 transition duration-150">
        Month
      </button>
      <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-150 border-l border-r">
        Week
      </button>
      <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-r-md hover:bg-gray-50 transition duration-150">
        Day
      </button>
    </div>
  </div>
);

const CalendarGrid = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  // Dummy data representing the 5 weeks of July 2024
  const dates = [
    null, 1, 2, 3, 4, 5, 6, 
    7, 8, 9, 10, 11, 12, 13, 
    14, 15, 16, 17, 18, 19, 20, 
    21, 22, 23, 24, 25, 26, 27, 
    28, 29, 30, 31, null, null, null
  ];

  // Events are just attached to dates 28 and 29 for visual matching
  const events = {
    28: [{ name: 'Sunday Worship', category: 'Worship' }],
    29: [{ name: 'Youth Group', category: 'Youth Events' }],
  };

  const getEventClass = (category) => {
    switch (category) {
      case 'Worship': return 'bg-indigo-100 text-indigo-800 border-indigo-300';
      case 'Youth Events': return 'bg-pink-100 text-pink-800 border-pink-300';
      case 'Community Outreach': return 'bg-green-100 text-green-800 border-green-300';
      case 'Bible Study': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div>
      {/* Days of the Week Header */}
      <div className="grid grid-cols-7 border-b border-gray-200">
        {daysOfWeek.map(day => (
          <div key={day} className="py-2 text-center text-sm font-medium text-gray-600">
            {day}
          </div>
        ))}
      </div>

      {/* Date Grid */}
      <div className="grid grid-cols-7 border-t border-gray-200">
        {dates.map((date, index) => (
          <div 
            key={index} 
            className={`h-24 p-2 border border-gray-100 transition duration-100 hover:bg-gray-50 relative ${date === null ? 'bg-gray-50' : 'bg-white'}`}
          >
            {date && (
              <span className="text-sm font-medium text-gray-700">{date}</span>
            )}
            
            {/* Event Markers */}
            {date && events[date] && (
              <div className="mt-1 space-y-1">
                {events[date].map((event, eventIndex) => (
                  <div 
                    key={eventIndex}
                    className={`text-xs truncate px-2 py-0.5 rounded-sm border ${getEventClass(event.category)}`}
                    title={event.name}
                  >
                    {event.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

function CalendarView() {
  return (
    <div className="calendar-view">
      <CalendarHeader monthYear="July 2024" />
      <CalendarGrid />
    </div>
  );
}

export default CalendarView;