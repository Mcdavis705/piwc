import backgroundImage from '../assets/backgroundImage.jpg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';




function Home() {

    useEffect(() => {
        AOS.init({ duration: 100 });
    }, [])

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

            {/* About us */}
            <section className="py-12 bg-gray-100 px-4 md:px-16">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    {/* image */}
                    <div className="w-full md:w-1/2">
                        <img
                            src="/group.jpg"
                            alt="Image of Piwc"
                            className="w-full h-auto rounded-xl shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                        />

                    </div>
                    {/* text */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">About Us</h2>
                        <p className="text-gray-600 text-lg leading-relaxed text-center">
                            Pentecost International Worship Centre (PIWC) Barcelona is a lively English-speaking congregation of The Church of Pentecost, dedicated to providing a Spirit-filled worship experience for the multicultural community in Barcelona.
                            <br />
                            <br />
                            We focus on nurturing Christ-centered believers through sound biblical teaching, vibrant worship, and intentional discipleship. Our mission aligns with the global vision of The Church of Pentecost — Possessing the Nations — by transforming every area of life with Kingdom values.
                        </p>
                        {/* more about us button */}
                        <div className="mt-8 text-center">
                            <button className="btn btn-primary btn-wide hover:text-blue-700 hover:bg-gray-100 transition-colors duration-300">
                                <Link to="/AboutUs">More About Us</Link></button>
                        </div>

                    </div>
                </div>

            </section>

            {/* Join Us Section */}
            <section className=" py-12 px-4 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Join Us</h2>

                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-center ">
                        {/* Service Times */}
                        <div class="bg-gray-100 p-6 rounded-xl shadow-sm transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                            <h3 class="text-xl font-semibold text-gray-700 mb-4">Service Times</h3>
                            <hr />
                            <br />
                            <ul class="space-y-2 text-gray-600">
                                <li><strong>Sun Church Service:</strong> 10:00 AM – 12:30 PM</li>
                                <li><strong>Mon Glorious Hour Prayers:</strong> 11:00 AM – 12:00 AM</li>
                                <li><strong>Tue Area Morning Dev.:</strong> 06:00 AM – 07:00 AM</li>
                                <li><strong>Wed Bible Academy:</strong> 8:30 PM - 9:30 PM</li>
                                <li><strong>Friday Prayer Meeting:</strong> 8:00 PM – 9:00 PM</li>
                            </ul>
                        </div>

                        {/* Location */}
                        <div class="bg-gray-100 p-6 rounded-xl shadow-sm transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                            <h3 class="text-xl font-semibold text-gray-700 mb-4">Location</h3>
                            <hr />
                            <br />
                            <p class="text-gray-600 mb-4 text-2xl">
                                Rambla França, 53, Local 10. <br />
                                08917 Badalona, Barcelona. <br />
                                Spain
                            </p>
                        </div>
                    </div>
                    <div className="w-full max-w-7xl mt-10 mx-auto px-4">
                        <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.1693123591795!2d2.2166936761930924!3d41.4572429712912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bb7c43128ee7%3A0xa312883e317f2799!2sTHE%20CHURCH%20OF%20PENTECOST%20INTERNATIONAL%20-%20SPAIN!5e0!3m2!1sen!2ses!4v1753441694155!5m2!1sen!2ses"
                                className="w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="PIWC Barcelona Location"
                            />
                        </div>
                    </div>
                </div>
            </section >

        </>
    );
}

export default Home;
