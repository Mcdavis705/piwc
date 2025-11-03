import React, { useState } from 'react';
import { Plus, Edit, Trash2, CheckCircle, Clock } from 'lucide-react';

const initialMembers = [
  { id: 1, name: 'Michael Chen', joinDate: '2024-07-08', status: 'Active', email: 'michael@connect.org' },
  { id: 2, name: 'Sarah Lee', joinDate: '2024-07-05', status: 'Pending', email: 'sarah.lee@mail.com' },
  { id: 3, name: 'David Miller', joinDate: '2024-07-01', status: 'Active', email: 'david@church.net' },
  { id: 4, name: 'Jessica Brown', joinDate: '2024-06-28', status: 'Active', email: 'jessica@connect.org' },
];

const StatusBadge = ({ status }) => {
  let classes = 'px-3 py-1 text-xs font-semibold rounded-full flex items-center w-fit';
  let Icon = status === 'Active' ? CheckCircle : Clock;
  let iconColor = status === 'Active' ? 'text-green-600' : 'text-yellow-600';
  
  if (status === 'Active') classes += ' bg-green-100 text-green-800';
  else if (status === 'Pending') classes += ' bg-yellow-100 text-yellow-800';
  
  return (
    <span className={classes}>
      <Icon className={`w-3 h-3 mr-1 ${iconColor}`} />
      {status}
    </span>
  );
};

function MembersPage() {
  const [members, setMembers] = useState(initialMembers);

  // --- CRUD Placeholders ---
  const handleCreate = () => alert("Open Create Member Modal/Form.");
  const handleEdit = (id) => alert(`Open Edit Modal for Member ID: ${id}`);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      setMembers(members.filter(m => m.id !== id));
    }
  };
  // -------------------------

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Member Directory</h2>
        <button 
          onClick={handleCreate}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-150"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add New Member
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {['Name', 'Email', 'Join Date', 'Status', 'Actions'].map((header) => (
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
            {members.map((member) => (
              <tr key={member.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.joinDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={member.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button 
                    onClick={() => handleEdit(member.id)}
                    className="text-indigo-600 hover:text-indigo-900 p-1"
                    title="Edit"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(member.id)}
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
      
      {/* Empty State Placeholder */}
      {members.length === 0 && (
          <div className="text-center py-10 text-gray-500">No members found.</div>
      )}
    </div>
  );
}

export default MembersPage;