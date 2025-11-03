import React from 'react';
import { User } from 'lucide-react';

function AdminHeader() {
  return (
    <header className="flex justify-end items-center h-16 bg-white shadow-sm px-6">
      <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition duration-150">
        <User className="w-5 h-5 text-gray-700" />
      </button>
    </header>
  );
}

export default AdminHeader;