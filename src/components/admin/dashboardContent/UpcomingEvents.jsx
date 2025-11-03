import React from 'react';
import { Edit } from 'lucide-react';

const events = [
  { name: 'Community Outreach', date: '2024-07-15', location: 'City Park', status: 'Scheduled' },
  { name: 'Youth Summer Camp', date: '2024-08-01', location: 'Camp Grounds', status: 'Full' },
  { name: 'Weekly Bible Study', date: '2024-07-10', location: 'Church Hall', status: 'Recurring' },
  { name: 'New Member Welcome', date: '2024-07-20', location: 'Fellowship Room', status: 'Scheduled' },
];

const StatusBadge = ({ status }) => {
  let classes = 'px-3 py-1 text-xs font-semibold rounded-full';
  if (status === 'Scheduled') classes += ' bg-blue-100 text-blue-800';
  else if (status === 'Full') classes += ' bg-red-100 text-red-800';
  else if (status === 'Recurring') classes += ' bg-yellow-100 text-yellow-800';
  return <span className={classes}>{status}</span>;
};

function UpcomingEvents() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Events Overview</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {['Event Name', 'Date', 'Location', 'Status', 'Action'].map((header) => (
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
          {events.map((event, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.location}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <StatusBadge status={event.status} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900 p-1">
                  <Edit className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UpcomingEvents;