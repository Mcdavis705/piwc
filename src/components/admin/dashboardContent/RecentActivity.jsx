import React from 'react';
import { Bell, User, Globe, AlertTriangle, Users } from 'lucide-react';

const activities = [
  { text: 'John Doe created a new event: "Community Potluck"', icon: Bell, color: 'text-indigo-500' },
  { text: 'New member registered: Jane Smith', icon: User, color: 'text-green-500' },
  { text: 'Website content "Sermon Series" updated', icon: Globe, color: 'text-blue-500' },
  { text: 'Event "Youth Camp" status changed to Canceled', icon: AlertTriangle, color: 'text-red-500', highlight: 'text-red-600 font-bold' },
  { text: 'Michael Johnson updated member details for Emily White', icon: Users, color: 'text-purple-500' },
];

function RecentActivity() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li key={index} className="flex items-start text-sm border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
            <activity.icon className={`w-5 h-5 ${activity.color} mr-3 mt-1 flex-shrink-0`} />
            <p className="text-gray-600">
              {activity.text.split('Canceled').map((part, i) => (
                <React.Fragment key={i}>
                  {part}
                  {i < activity.text.split('Canceled').length - 1 && (
                    <span className={activity.highlight}>Canceled</span>
                  )}
                </React.Fragment>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentActivity;