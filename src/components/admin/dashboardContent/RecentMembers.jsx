import React from 'react';
import { Edit } from 'lucide-react';

const members = [
  { name: 'Michael Chen', joinDate: '2024-07-08', status: 'Active' },
  { name: 'Sarah Lee', joinDate: '2024-07-05', status: 'Pending' },
  { name: 'David Miller', joinDate: '2024-07-01', status: 'Active' },
  { name: 'Jessica Brown', joinDate: '2024-06-28', status: 'Active' },
];

const StatusBadge = ({ status }) => {
  let classes = 'px-3 py-1 text-xs font-semibold rounded-full';
  if (status === 'Active') classes += ' bg-green-100 text-green-800';
  else if (status === 'Pending') classes += ' bg-yellow-100 text-yellow-800';
  return <span className={classes}>{status}</span>;
};

function RecentMembers() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Members Overview</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {['Name', 'Join Date', 'Status', 'Action'].map((header) => (
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
          {members.map((member, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.joinDate}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <StatusBadge status={member.status} />
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

export default RecentMembers;