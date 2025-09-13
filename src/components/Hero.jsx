import { Link } from 'react-router-dom';

function Hero() {
    return (
                <section
                    className="hero min-h-screen relative overflow-hidden"
                    style={{
                        backgroundImage: `url("/herobackground1.png")`,
                        backgroundSize: 'cover',
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

    )
}

export default Hero;