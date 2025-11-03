import React from 'react';
import { Calendar, Users, FileText, UserPlus, Edit } from 'lucide-react';

const stats = [
  {
    title: 'Upcoming Events',
    value: '12',
    period: 'Next 30 days',
    icon: Calendar,
    color: 'text-indigo-600',
  },
  {
    title: 'Active Members',
    value: '1,234',
    period: 'Currently registered',
    icon: Users,
    color: 'text-green-600',
  },
  {
    title: 'New Member Applications',
    value: '7',
    period: 'Last week',
    icon: UserPlus,
    color: 'text-orange-600',
  },
  {
    title: 'Content Updates',
    value: '24',
    period: 'Recent sermons & articles',
    icon: FileText,
    color: 'text-red-600',
  },
];

function StatsOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-white p-5 rounded-lg shadow-md flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">{stat.title}</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
            <p className="text-xs text-gray-400 mt-1">{stat.period}</p>
          </div>
          <div className="flex flex-col items-center">
            <stat.icon className={`w-5 h-5 ${stat.color}`} />
            <Edit className="w-4 h-4 text-gray-400 mt-4 cursor-pointer hover:text-indigo-600" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsOverview;