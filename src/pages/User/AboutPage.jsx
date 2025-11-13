
import React from 'react';
import HeroBanner from '../../components/user/aboutUs/HeroBanner';
import MissionSection from '../../components/user/aboutUs/MissionSection';
import HistorySection from '../../components/user/aboutUs/HistorySection';
import LeadershipSection from '../../components/user/aboutUs/LeadershipSection';

function AboutPage() {
  return (
    <div className="about-page pt-15 min-h-screen bg-gray-50">
      
      {/* 1. Hero Banner */}
      <HeroBanner />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* 2. Our Mission */}
        <MissionSection />

        {/* 3. Our History */}
        <HistorySection />

        {/* 4. Our Leadership */}
        <LeadershipSection />
      </div>
    </div>
  );
}

export default AboutPage;