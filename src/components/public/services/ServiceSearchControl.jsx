import React from 'react';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';

function ServiceSearchControls({ searchTerm, setSearchTerm }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Our Services & Schedule</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Discover all our regular gatherings, Bible studies, and special events. Find the perfect time and setting to connect with our community and grow in your faith.
        </p>
      </header>
      
      {/* Search and Filter Controls */}
      <section className="mb-12 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        
        {/* Search Input */}
        <div className="relative flex-grow w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by day, title, location, or host..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
          />
        </div>

        {/* Filter/Sort Button */}
        <button className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150">
          <SlidersHorizontal className="h-5 w-5" />
          <span className="font-semibold">Filter Services</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </section>
    </div>
  );
}

export default ServiceSearchControls;
