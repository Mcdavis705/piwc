import { useContext, useEffect, useState} from "react";


function Events() {
    const {token} = useContext(AuthContext);


    return (
        <section
            className="min-h-screen max-w-4xl mx-auto w-full mt-20"
        >
            <div className="overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md text-gray-700">
                    <h1 className="mb-5 text-5xl font-bold">Events</h1>
                    <p className="mb-5">
                        Events Page with card

                    </p>
                </div>
            </div>
        </section>
    )
}

export default Events;