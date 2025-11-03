import React from 'react';
import { Plus, UserPlus, BookOpen, FileText } from 'lucide-react';

const actions = [
  { name: 'Create New Event', icon: Plus },
  { name: 'Add New Member', icon: UserPlus },
  { name: 'Manage Content', icon: BookOpen },
  { name: 'View Reports', icon: FileText },
];

function QuickActions() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
      <div className="flex flex-wrap gap-4">
        {actions.map((action) => (
          <button
            key={action.name}
            className="flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg shadow-sm hover:bg-gray-50 transition duration-150"
          >
            <action.icon className="w-5 h-5 mr-2 text-indigo-600" />
            {action.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;