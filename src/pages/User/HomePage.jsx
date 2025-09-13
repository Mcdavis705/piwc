import Hero from '../../components/Hero';
import UpcomingEvents from '../../components/UpcomingEvents';
import Services from '../../components/Services';


import backgroundImage from '../../assets/backgroundImage.jpg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



function HomePage() {

    return (
        <>
            <Hero />
            <UpcomingEvents />
            <Services />
            
        </>
    );
}

export default HomePage;
