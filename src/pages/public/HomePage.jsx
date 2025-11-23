import React from 'react';
import Hero from '../../components/public/mainpage/Hero';
import UpcomingServices from '../../components/public/mainpage/UpcomingServices.jsx';
import FeaturedEvents from '../../components/public/mainpage/FeaturedEvents.jsx';
import MissionValues from '../../components/public/mainpage/MissionValues.jsx';
import ContactSection from '../../components/public/mainpage/ContactSection.jsx';


function HomePage() {

    return (
        <div className="home-page p-10">
            <Hero />
            <UpcomingServices />
            <FeaturedEvents />
            <MissionValues />
            <ContactSection />
        </div>
    );
}

export default HomePage;
