
import React, { useContext, useEffect, useState } from 'react';
import { Search, ChevronDown, Filter, SlidersHorizontal } from 'lucide-react';
import SermonCard from '../../components/user/mainpage/SermonCard.jsx';
import UserContext from '../../contexts/userContext.js';

import Pagination from '../../components/user/Pagination.jsx';
import { image } from 'framer-motion/client';

// // --- DUMMY DATA ---
// const DUMMY_SERMONS = [
//   { id: 1, title: 'The Power of Forgiveness', speaker: 'Pastor John Davis', date: 'Jul 28, 2025', category: 'Grace', link: '#', imageUrl: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=Forgiveness' },
//   { id: 2, title: 'Living a Life of Service', speaker: 'Rev. Dr. A. Lee', date: 'Jul 21, 2025', category: 'Community', link: '#', imageUrl: 'https://via.placeholder.com/600x400/9ca3af/ffffff?text=Service' },
//   { id: 3, title: 'Finding Joy in the Everyday', speaker: 'Pastor John Davis', date: 'Jul 14, 2025', category: 'Faith', link: '#', imageUrl: 'https://via.placeholder.com/600x400/34d399/ffffff?text=Joy' },
//   { id: 4, title: 'Understanding the Scriptures', speaker: 'Rev. T. Wilson', date: 'Jul 07, 2025', category: 'Study', link: '#', imageUrl: 'https://via.placeholder.com/600x400/fcd34d/ffffff?text=Scriptures' },
//   { id: 5, title: 'Building Stronger Families', speaker: 'Pastor John Davis', date: 'Jun 30, 2025', category: 'Family', link: '#', imageUrl: 'https://via.placeholder.com/600x400/fb923c/ffffff?text=Family' },
//   { id: 6, title: 'Overcoming Doubt', speaker: 'Rev. Dr. A. Lee', date: 'Jun 23, 2025', category: 'Faith', link: '#', imageUrl: 'https://via.placeholder.com/600x400/a78bfa/ffffff?text=Doubt' },
//   { id: 7, title: 'The Call to Missions', speaker: 'Guest Speaker K.', date: 'Jun 16, 2025', category: 'Missions', link: '#', imageUrl: 'https://via.placeholder.com/600x400/84cc16/ffffff?text=Missions' },
//   { id: 8, title: 'The Lord is My Shepherd', speaker: 'Pastor John Davis', date: 'Jun 09, 2025', category: 'Grace', link: '#', imageUrl: 'https://via.placeholder.com/600x400/f472b6/ffffff?text=Shepherd' },
// ];

function SermonsPage() {
  const { token } = useContext(UserContext);
  const urlApi = "https://app.nocodb.com/api/v2/tables/mbakctrrlxs0ky6/records";
  const [sermons, setSermons] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch(urlApi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "xc-token": token,
      },
    })
      .then((response) => response.json())
      .then((data) => setSermons(data.list || []))
      .catch((error) => console.error("Error fetching sermons:", error));
  }, [token]);



  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4; // Hardcoded total pages for demonstration

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      //fetch data for the new page here
    }
  };

  const filteredSermons = sermons.filter(sermon => {
    const searchString = `${sermon.title} ${sermon.description} ${sermon.date} ${sermon.speaker} ${sermon.category}`.toLowerCase();
    return searchString.includes(searchTerm.toLowerCase());
  });


  return (
    <div className="sermons-archive-page pt-20 max-w-7xl mx-auto">
      {/* Page Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Sermons Archive</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Browse and listen to inspiring messages from our past services. Filter by topic, speaker, or date to find exactly what you need for spiritual growth.
        </p>
      </header>

      {/* Search, Filter, Sort Controls */}
      <section className="mb-10 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">

        {/* Search Input */}
        <div className="relative flex-grow w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search sermons..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150"
          />
        </div>

        {/* Filter Button */}
        <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150">
          <Filter className="h-5 w-5" />
          <span>Filter</span>
          <ChevronDown className="h-4 w-4" />
        </button>

        {/* Sort By Button */}
        <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150">
          <SlidersHorizontal className="h-5 w-5" />
          <span>Sort By</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </section>

      {/* Sermons Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {filteredSermons.map((sermon, index) => (
          <SermonCard key={sermon.id || index} sermon={sermon} index={index} />
        ))}
      </section>

      {/* Pagination */}
      <section className="pb-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </div>
  );
}

export default SermonsPage;