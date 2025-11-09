// src/components/about/MissionSection.js
import React from 'react';

function MissionSection() {
  const imageUrl = "https://via.placeholder.com/600x400?text=Hands+Reaching+Out"; // Placeholder image

  return (
    <section className="py-12 border-b border-gray-200">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Our Mission</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Text Column */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Guiding Hearts, Transforming Lives</h3>
          <p className="text-gray-600 mb-4">
            FaithConnect's mission is to empower individuals to live lives of purpose and joy through the teachings of Christ. We are committed to nurturing spiritual growth, fostering genuine community, and encouraging lifelong learning. We believe that true faith is active, inspiring us to make a positive impact both within our congregation and in the broader world.
          </p>
          <p className="text-gray-600">
            Our values include compassion, integrity, and grace in all our interactions. We strive to create an inclusive environment where everyone feels welcomed, valued, and encouraged to explore their faith journey.
          </p>
        </div>
        
        {/* Image Column */}
        <div className="w-full h-full lg:h-64 rounded-lg overflow-hidden shadow-lg">
          <img 
            src={imageUrl} 
            alt="Hands reaching out in service" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default MissionSection;