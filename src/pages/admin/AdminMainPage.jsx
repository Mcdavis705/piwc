

function AdminMainPage() {
    return (
        <>
            {/* Heading */}
            <section className=" h- auto max-w-4xl mx-auto w-full mt-20 px-4 text-gray-700">
                <div className="bg-white shadow-md rounded-xl p-10 text-center">
                    <h1 className="mb-5 text-5xl font-bold text-blue-600">Admin Page</h1>
                    <p className="mb-5 text-lg">Welcome to the admin dashboard.</p>
                </div>
            </section>

            {/* Total Membership */}
            <section className="w-full flex justify-center mt-10 px-4">
                <div className="stats stats-vertical md:stats-horizontal shadow bg-base-100 rounded-xl">
                    <div className="stat place-items-center">
                        <div className="stat-title">New Members This Month</div>
                        <div className="stat-value">3</div>
                        <div className="stat-desc">Sep 1st – Aug 1st</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Total Members</div>
                        <div className="stat-value">50</div>
                        <div className="stat-desc">↗︎ from 47</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Male</div>
                        <div className="stat-value">25</div>
                        <div className="stat-desc">50%</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Female</div>
                        <div className="stat-value">25</div>
                        <div className="stat-desc">50%</div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AdminMainPage;