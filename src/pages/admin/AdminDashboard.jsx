import React from 'react';
import AdminHeader from '../../components/admin/Header'; 
import SideBar from '../../components/admin/SideBar';
import DashboardContent from '../../components/admin/DashboardContent'; 

function AdminDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader /> 
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;