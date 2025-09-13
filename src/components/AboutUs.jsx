

function AboutUs() {
    return (
        <>
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
        </>
    )
}


export default AboutUs;