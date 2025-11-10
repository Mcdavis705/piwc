// src/components/about/LeadershipSection.js
import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../../../contexts/userContext';

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

// Main Leadership Section  

function LeadershipSection() {

  const urlApi = 'https://app.nocodb.com/api/v2/tables/m0yb3cbgelblv5f/records';
  const { token } = useContext(UserContext);
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    if (token) {
      fetch(urlApi, {
        method: 'GET',
        headers: {
          "content-type": 'application/json',
          'xc-token': token
        },
      })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setLeaders(data.list);
        })
        .catch(err => {
            console.error('API Fetch Error:', err);
        });
    }
  }, [token]);

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