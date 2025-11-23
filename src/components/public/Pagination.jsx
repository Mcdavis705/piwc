// src/components/Pagination.js
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center justify-center space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition duration-150 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex space-x-1">
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`px-4 py-2 rounded-md font-medium transition duration-150
              ${number === currentPage
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-200'
              }`
            }
          >
            {number}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition duration-150 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Next
        <ChevronRight className="h-5 w-5 ml-1" />
      </button>
    </nav>
  );
};

export default Pagination;