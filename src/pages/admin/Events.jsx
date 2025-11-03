import SideBar from '../../components/admin/sidebar2';

import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../../context/userContext';

import { Plus, Edit, Trash2 } from 'lucide-react';

const initialEvents = [
  { id: 1, name: 'Youth Summer Camp', date: '2024-08-01', location: 'Camp Grounds', status: 'Full' },
  { id: 2, name: 'Weekly Bible Study', date: '2024-07-10', location: 'Church Hall', status: 'Recurring' },
  { id: 3, name: 'Community Outreach', date: '2024-07-15', location: 'City Park', status: 'Scheduled' },
];

const StatusBadge = ({ status }) => {
  let classes = 'px-3 py-1 text-xs font-semibold rounded-full';
  if (status === 'Scheduled') classes += ' bg-blue-100 text-blue-800';
  else if (status === 'Full') classes += ' bg-red-100 text-red-800';
  else if (status === 'Recurring') classes += ' bg-yellow-100 text-yellow-800';
  return <span className={classes}>{status}</span>;
};

function EventsPage() {

  const token = useContext(UserContext);
  const apiUrl = '/api/v3/data/p2ixghde5p3i4rm/m2d172w9k3mf04q/records'

  const [events, setEvents] = useState(initialEvents);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'xc-token':token
      }
    };

    fetch(apiUrl, options)
      .then(response => response.json())
      .then(data => {
        setEvents(data.items);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(events);



  // --- CRUD Placeholders ---
  const handleCreate = () => alert("Open Create Event Modal/Form.");
  const handleEdit = (id) => alert(`Open Edit Modal for Event ID: ${id}`);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter(e => e.id !== id));
    }
  };


  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar />


      <div className="p-6 bg-white rounded-lg shadow-md">
        {/* The rest of your EventsPage content */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Events Management</h2>
          <button
            onClick={handleCreate}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-150"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create New Event
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {['Name', 'Date', 'Location', 'Status', 'Actions'].map((header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {events.map((event) => (
                <tr key={event.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={event.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button
                      onClick={() => handleEdit(event.id)}
                      className="text-indigo-600 hover:text-indigo-900 p-1"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(event.id)}
                      className="text-red-600 hover:text-red-900 p-1"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State/Pagination Placeholder */}
        {events.length === 0 && (
          <div className="text-center py-10 text-gray-500">No upcoming events found.</div>
        )}
      </div>
    </div>
  );
}

export default EventsPage;