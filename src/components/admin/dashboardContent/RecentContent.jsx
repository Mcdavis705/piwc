import React from 'react';
import { Edit } from 'lucide-react';

const contentUpdates = [
  { title: 'Sermon: The Power of Forgiveness', type: 'Sermon', date: '2024-07-09' },
  { title: 'Blog Post: Community Service Impact', type: 'Blog', date: '2024-07-07' },
  { title: 'Announcement: Annual Picnic Details', type: 'Announcement', date: '2024-07-05' },
  { title: 'Sermon: Living a Purposeful Life', type: 'Sermon', date: '2024-07-02' },
];

function RecentContent() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Content Updates</h2>
      <ul className="divide-y divide-gray-200">
        {contentUpdates.map((item, index) => (
          <li key={index} className="flex justify-between items-start py-3">
            <div className="flex-1 min-w-0 pr-4">
              <p className="text-sm font-medium text-gray-900 truncate">{item.title}</p>
              <p className="text-xs text-gray-500">
                <span className="font-bold mr-1">{item.type}</span> • {item.date}
              </p>
            </div>
            <button className="text-indigo-600 hover:text-indigo-900 p-1 flex-shrink-0">
              <Edit className="w-4 h-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentContent;