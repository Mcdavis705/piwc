


function NotFound (){

    return(
        <section
            className="min-h-screen flex flex-col max-w-4xl mx-auto w-full mt-20 justify-center items-center"
        >
            <div className="overlay"></div> 
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">404</h1>
                    <p className="mb-5">
                        Page Not Found
                        <hr/>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default NotFound;
