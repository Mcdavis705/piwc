import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext.js"


function Events() {
    const { token } = useContext(UserContext);
    const urlApi = "https://app.nocodb.com/api/v2/tables/m2d172w9k3mf04q/records"

    const [events, setEvents] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'xc-token': token
            }
        };

        fetch(urlApi, options)
            .then(resp => resp.json())
            .then(data => setEvents(data.list))
            .catch(err => console.log(err));
    }, []);

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
                        {events.map(event =>
                            <div className="card bg-base-100 w-96 shadow-sm" key={event.id}>
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {event.Title}
                                        <div className="badge badge-secondary">{event.date}</div>
                                    </h2>
                                    <p>{event.description}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">Venue: {event.venue}</div>
                                        <div className="badge badge-outline">Time: {event.time}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Events;