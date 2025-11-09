// src/components/about/LeadershipSection.js
import React from 'react';

// Sub-Component for a single Leader's Profile Card
const LeaderProfileCard = ({ name, role, description, imageUrl }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg transition duration-300 hover:shadow-lg">
    <img 
      src={imageUrl} 
      alt={name} 
      className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-indigo-100"
    />
    <h4 className="text-lg font-bold text-gray-900">{name}</h4>
    <p className="text-sm font-semibold text-indigo-600 mb-3">{role}</p>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

const leaders = [
  {
    name: 'Pastor John Smith',
    role: 'Lead Pastor',
    description: 'Pastor John has served FaithConnect for over 15 years, leading our community with wisdom, love, and compassion. His sermons inspire and challenge us to live out our faith daily.',
    imageUrl: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Elder Sarah Chen',
    role: 'Community Outreach Director',
    description: 'Sarah leads our efforts to serve the wider community, organizing impactful volunteer programs, address local needs, and spread hope.',
    imageUrl: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'Minister David Lee',
    role: 'Youth Minister',
    description: 'David is passionate about nurturing the next generation of believers, creating programs and events that engage and empower our youth.',
    imageUrl: 'https://i.pravatar.cc/150?img=11',
  },
];

function LeadershipSection() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">Our Leadership</h2>
      <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Our dedicated team of leaders is committed to guiding FaithConnect with spiritual wisdom, integrity, and a heart for service.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {leaders.map((leader, index) => (
          <LeaderProfileCard key={index} {...leader} />
        ))}
      </div>
    </section>
  );
}

export default LeadershipSection;