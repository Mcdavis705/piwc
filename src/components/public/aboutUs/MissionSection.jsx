// src/components/about/MissionSection.js
import React from 'react';
import bannerImage from '/smallbanner.jpg'; 

function MissionSection() {
  const imageUrl = bannerImage;

  return (
    <section className="py-12 border-b border-gray-200">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Mission & Vision</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Text Column */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Mission</h3>
          <p className="text-gray-600 mb-4">
            We exist to build responsible, self-sustaining churches filled with Spirit-led believers of integrity who positively impact their communities.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Vision</h3>
          <p className="text-gray-600">
            To be a global Pentecostal church that is culturally relevant and passionate about evangelism, church planting, discipleship, and holistic ministry.
          </p>

          <a
            href="https://www.copspain.org/mission"
            className="flex items-center italic text-indigo-600 font-semibold hover:text-indigo-800 transition duration-150 w-fit"
          >
            Click here for more about our Mission & Vision
          </a>
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