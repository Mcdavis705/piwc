


function JoinUs() {
    return (
        <>
            {/* Join Us Section */}
            <section className=" py-12 px-4 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Join Us</h2>

                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-center ">
                        {/* Service Times */}
                        <div className="bg-gray-100 p-6 rounded-xl shadow-sm transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                            <h3 className="text-xl font-semibold text-gray-700 mb-4">Service Times</h3>
                            <hr />
                            <br />
                            <ul className="space-y-2 text-gray-600">
                                <li><strong>Sun Church Service:</strong> 10:00 AM – 12:30 PM</li>
                                <li><strong>Mon Glorious Hour Prayers:</strong> 11:00 AM – 12:00 AM</li>
                                <li><strong>Tue Area Morning Dev.:</strong> 06:00 AM – 07:00 AM</li>
                                <li><strong>Wed Bible Academy:</strong> 8:30 PM - 9:30 PM</li>
                                <li><strong>Friday Prayer Meeting:</strong> 8:00 PM – 9:00 PM</li>
                            </ul>
                        </div>

                        {/* Location */}
                        <div className="bg-gray-100 p-6 rounded-xl shadow-sm transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                            <h3 className="text-xl font-semibold text-gray-700 mb-4">Location</h3>
                            <hr />
                            <br />
                            <p className="text-gray-600 mb-4 text-2xl">
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
    )
}

export default JoinUs;