import React from 'react';
import StatsOverview from '../admin/dashboardContent/StatsOverview';
import QuickActions from '../admin/dashboardContent/QuickAction';
import RecentActivity from '../admin/dashboardContent/RecentActivity';
import UpcomingEvents from '../admin/dashboardContent/UpcomingEvents';
import RecentMembers from '../admin/dashboardContent/RecentMembers';
import RecentContent from '../admin/dashboardContent/RecentContent';

function DashboardContent() {
  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Welcome, Church Admin!</h1>
      <p className="text-gray-500 mb-8">Here's a quick overview of your Church Connect dashboard.</p>

      {/* 4 Stat Cards */}
      <StatsOverview />

      {/* Quick Actions */}
      <QuickActions />

      {/* Two-Column Layout for Activity & Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Column 1: Recent Activity */}
        <div className="lg:col-span-1">
          <RecentActivity />
        </div>

        {/* Column 2: Upcoming Events Overview */}
        <div className="lg:col-span-2">
          <UpcomingEvents />
        </div>
      </div>

      {/* Two-Column Layout for Members & Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Column 1: Recent Members Overview */}
        <RecentMembers />

        {/* Column 2: Recent Content Updates */}
        <RecentContent />
      </div>
    </>
  );
}

export default DashboardContent;