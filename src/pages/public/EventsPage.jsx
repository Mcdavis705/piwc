// src/pages/EventsPage.js
import React from 'react';
import EventSidebar from '../../components/public/events/EventsSidebar.jsx';
import CalendarView from '../../components/public/events/CalendarView.jsx';

function EventsPage() {
  return (
    <div className="events-page pt-20 min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Events Calendar</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Sidebar (takes 1 column) */}
        <aside className="lg:col-span-1">
          <EventSidebar />
        </aside>
        
        {/* Main Calendar View (takes 3 columns) */}
        <section className="lg:col-span-3 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <CalendarView />
        </section>
      </div>
    </div>
  );
}

export default EventsPage;