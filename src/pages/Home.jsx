import backgroundImage from '../assets/backgroundImage.jpg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            {/* Hero Section */}
            <section
                className="hero min-h-screen relative overflow-hidden"
                style={{
                    backgroundImage: `url("/herobackground1.png")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 backdrop-blur-sm z-10" />
                <div className="hero-content text-center text-neutral-content z-20 relative">
                    <div className="max-w-2xl animate-fade-in">
                        <p className="mb-4 text-2xl font-semibold tracking-wide">Welcome to</p>
                        <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6">
                            PIWC Barcelona
                        </h1>
                        <p className="mb-6 text-lg md:text-xl text-gray-200">
                            A community of faith, hope, and love. Join us in worship and fellowship.
                        </p>
                        <Link className="btn btn-primary btn-wide" to="/aboutus">
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12">Upcoming Events</h2>

                    <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {/* Card 1 */}
                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 w-80">
                            <figure>
                                <img
                                    src={backgroundImage}
                                    alt="Sunday Service"
                                    className="object-cover w-full h-48"
                                />
                            </figure>
                            <div className="card-body text-left">
                                <h2 className="card-title">Sunday Service</h2>
                                <p>Every Sunday at 10:00 AM. Join us for spirit-filled worship and teaching.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-outline btn-primary">More Info</button>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-80">
                            <figure>
                                <img
                                    src={backgroundImage}
                                    alt="Youth Prayer Night"
                                    className="object-cover w-full h-48"
                                />
                            </figure>
                            <div className="card-body text-left">
                                <h2 className="card-title">Youth Prayer Night</h2>
                                <p>Friday at 7:00 PM — Come and grow spiritually with fellow youth.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-outline btn-primary">More Info</button>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-80">
                            <figure>
                                <img
                                    src={backgroundImage}
                                    alt="National Watchnight"
                                    className="object-cover w-full h-48"
                                />
                            </figure>
                            <div className="card-body text-left">
                                <h2 className="card-title">National Watchnight</h2>
                                <p>Be the hands and feet of Christ through local missions and support programs.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-outline btn-primary">More Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 bg-gray-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        At <span className="font-semibold">PIWC Barcelona</span>, our mission is to glorify God by nurturing
                        spiritual growth, building a strong community of believers, and reaching the lost with the gospel
                        of Jesus Christ through worship, teaching, and outreach.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Home;
