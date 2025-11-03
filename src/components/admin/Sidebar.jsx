import React from 'react';
import { LayoutDashboard, Users, Calendar, Settings, FileText, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NavBar() { }

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, current: true },
  { name: 'Events', icon: Calendar, current: false },
  { name: 'Members', icon: Users, current: false },
  { name: 'Content Management', icon: Globe, current: false },
  { name: 'Settings', icon: Settings, current: false },
  { name: 'Reports', icon: FileText, current: false },
];

function SideBar() {
  return (
    <div className="w-64 bg-white shadow-xl flex flex-col justify-between">
      {/* Top Section */}
      <div>
        {/* Logo/Name */}
        <div className="flex items-center p-4 border-b border-gray-100">
          <Globe className="w-6 h-6 text-indigo-600 mr-2" />
          <span className="text-xl font-bold text-gray-800">Church Connect</span>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6 space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              {item.name === 'Events' ? (
                <Link
                  to="/adminDashboard/events"
                  className={`flex items-center px-4 py-2 transition-colors duration-200 
                    ${item.current
                      ? 'bg-indigo-50 text-indigo-600 font-semibold border-r-4 border-indigo-600'
                      : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              ) : (
                <a
                href = {`#${item.name.toLowerCase()}`}
                  className={`flex items-center px-4 py-2 transition-colors duration-200 
                    ${item.current
                      ? 'bg-indigo-50 text-indigo-600 font-semibold border-r-4 border-indigo-600'
                      : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-100 text-sm text-gray-400">
        Church Connect
      </div>
    </div>
  );
}
