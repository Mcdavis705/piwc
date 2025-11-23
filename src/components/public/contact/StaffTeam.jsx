// src/components/contact/StaffTeam.js
import React, { use, useEffect, useState, useContext  } from 'react';
import UserContext from '../../../contexts/userContext';
import { Mail } from 'lucide-react';
import detailsData from '../../../data/leadership.json';

function StaffTeam() {
  const [staff, setStaff] = useState([]);

  const urlApi = 'https://app.nocodb.com/api/v2/tables/m0yb3cbgelblv5f/records';
  const { token } = useContext(UserContext);

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
            setStaff(data.list);
        })
        .catch(err => {
            console.error('API Fetch Error:', err);
        });
    }
  }, [token]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Leaders</h3>
      <div className="space-y-4">
        {staff.map((member, index) => (
          <div key={index} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-b-0">
            <div className="flex items-center">
              <img src={detailsData.leadership.find(leader => leader.name === member.name)?.image} alt={member.name} className="h-10 w-10 rounded-full" />
              <div>
                <p className="text-gray-900 font-semibold">{member.name}</p>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
            <a href={`mailto:${member.email}`} className="text-gray-500 hover:text-indigo-600 transition duration-150" aria-label={`Email ${member.name}`}>
              <Mail className="h-5 w-5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StaffTeam;