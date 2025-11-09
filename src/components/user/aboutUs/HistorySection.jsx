// src/components/about/HistorySection.js
import React from 'react';

function HistorySection() {
  const graphicUrl = "https://via.placeholder.com/600x300/1e3a8a/bfdbfe?text=Abstract+Graphic"; // Placeholder graphic

  return (
    <section className="py-12 border-b border-gray-200">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Our History</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Graphic Column */}
        <div className="w-full h-full lg:h-64 rounded-lg overflow-hidden shadow-lg">
          <img 
            src={graphicUrl} 
            alt="Abstract historical background graphic" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Column */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">A Legacy of Faith and Growth</h3>
          <p className="text-gray-600">
            Founded in 1998 by a small group of devoted families, FaithConnect began as a humble gathering with a big vision: to create a church that truly connected with its community. After several years meeting in a rented hall to a thriving congregation with a permanent sanctuary and educational wings. Expanding our youth programs in 2005, the launch of our community food bank initiative in 2010, and moving to our new, larger facility in 2018, our journey has been guided by faith and the unwavering dedication of our members.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HistorySection;