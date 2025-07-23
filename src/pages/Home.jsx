import backgroundImage from '../assets/backgroundImage.jpg'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            {/* Hero Section */}
            <section
                className="hero min-h-screen"
            // style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
                        <p className="mb-5">
                            A community of faith, hope, and love. Join us in worship and fellowship.
                        </p>
                        <Link className="btn btn-primary" to={'admin'}>Go to Admin page </Link>
                    </div>
                </div>
            </section>


            {/* Upcoming Events Section */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-10 text-gray-700">Upcoming Events</h2>

                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {/* Card 1 */}
                        <div className="card bg-base-100 image-full w-80 shadow-sm">
                            <figure>
                                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Service" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Sunday Service</h2>
                                <p>Join Us For Service every Sunday and you'll be blessed!</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">More info</button>
                                </div>
                            </div>
                        </div>

                        {/* card 2*/}
                        <div className="card bg-base-100 image-full w-80 shadow-sm">
                            <figure>
                                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Service" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Sunday Service</h2>
                                <p>Join Us For Service every Sunday and you'll be blessed!</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">More info</button>
                                </div>
                            </div>
                        </div>

                        {/* card 3*/}
                        <div className="card bg-base-100 image-full w-80 shadow-sm">
                            <figure>
                                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Service" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Sunday Service</h2>
                                <p>Join Us For Service every Sunday and you'll be blessed!</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">More info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-10 text-gray-700">Our Mission</h2>
                    <h3>Missions and Visions</h3>
                </div>
            </section>

        </>
    )

}

export default Home;