import Hero from '../../components/user/mainpage/Hero';
import UpcomingServices from '../../components/user/mainpage/UpcomingServices.jsx';
import FeaturedEvents from '../../components/user/mainpage/FeaturedEvents.jsx';
import MissionValues from '../../components/user/mainpage/MissionValues.jsx';
import ContactSection from '../../components/user/mainpage/ContactSection.jsx';


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
