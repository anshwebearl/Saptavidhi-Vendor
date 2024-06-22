import React from "react"

function About() {
    return (
        <>
            <div className="md:px-6 md:py-5 px-5 py-2 border-2 rounded-[20px] flex flex-col gap-2 md:gap-3">
                <h2 className="text-lg md:text-xl font-bold">About</h2>
                <hr className="border border-gray-400" />
                <div className="flex gap-2">
                    <div className="flex-1 flex flex-col gap-3 md:gap-5">
                        <div className="">
                            <p className="text-gray-800 text-sm md:text-lg">Been on Saptavidhi</p>
                            <p className="text-black font-semibold text-sm md:text-lg">4 Years</p>
                        </div>
                        <div className="">
                            <p className="text-gray-800 text-sm md:text-lg">Space</p>
                            <p className="text-black font-semibold text-sm md:text-lg">Indoor, Outdoor, Poolside</p>
                        </div>
                        <div className="">
                            <p className="text-gray-800 text-sm md:text-lg">Outside Alcohol</p>
                            <p className="text-black font-semibold text-sm md:text-lg">Inhouse alcohol not available<br />Outside alcohol not permitted</p>
                        </div>
                        <div className="">
                            <p className="text-gray-800 text-sm md:text-lg">Small Party Venue</p>
                            <p className="text-black font-semibold text-sm md:text-lg">Less than 50 pax allowed</p>
                        </div>
                        <div className="">
                            <p className="text-gray-800 text-sm md:text-lg">Room Count</p>
                            <p className="text-black font-semibold text-sm md:text-lg">50 Rooms</p>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-3 md:gap-5">
                        <div className="">
                            <p className="text-gray-800 text-sm md:text-lg">Parking</p>
                            <p className="text-black font-semibold text-sm md:text-lg">There is sufficient parking available</p>
                        </div>
                        <div className="">
                            <p className="text-gray-800 text-sm md:text-lg">Catering policy</p>
                            <p className="text-black font-semibold text-sm md:text-lg">Inhouse and outside catering allowed</p>
                        </div>
                        <div className="">
                            <p className="text-gray-800 text-sm md:text-lg">Start of Venue</p>
                            <p className="text-black font-semibold text-sm md:text-lg">2011</p>
                        </div>
                        <div className="">
                            <p className="text-gray-800 text-sm md:text-lg">Decor Policy</p>
                            <p className="text-black font-semibold text-sm md:text-lg">Outside decorators permitted</p>
                        </div>
                        <div className="">
                            <p className="text-gray-800 text-sm md:text-lg">DJ Policy</p>
                            <p className="text-black font-semibold text-sm md:text-lg">In house DJ not available<br />Outside DJ not permitted</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default About;
