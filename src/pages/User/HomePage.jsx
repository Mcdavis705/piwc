import Hero from '../../components/mainPage/Hero';
import UpcomingServices from '../../components/mainPage/UpcomingServices';
import FeaturedEvents from '../../components/mainPage/FeaturedEvents';
import MissionValues from '../../components/mainPage/MissionValues';
import ContactSection from '../../components/mainPage/ContactSection';


function HomePage() {

    return (
        <div className="pt-20">
            <Hero />
            <UpcomingServices />
            <FeaturedEvents />
            <MissionValues />
            <ContactSection />
        </div>
    );
}

export default HomePage;
