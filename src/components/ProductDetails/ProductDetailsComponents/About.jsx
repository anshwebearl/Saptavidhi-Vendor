import React from "react"

function About() {
    return (
        <>
            <div className="p-4 mx-[10px] md:mx-[20px] my-[20px] border border-gray-400 rounded-[20px]">
                <h2 className="text-[18px] font-bold mb-2 ">About</h2>
                <hr className="mb-5 border border-gray-400" />
                <div className="flex ">
                    <div className="flex-1">
                        <div className="mb-5">
                            <p className="text-gray-800 text-[15px]">Been on Saptavidhi</p>
                            <p className="text-black font-semibold text-[15px]">4 Years</p>
                        </div>
                        <div className="mb-5">
                            <p className="text-gray-800 text-[15px]">Space</p>
                            <p className="text-black font-semibold text-[15px]">Indoor, Outdoor, Poolside</p>
                        </div>
                        <div className="mb-5">
                            <p className="text-gray-800 text-[15px]">Outside Alcohol</p>
                            <p className="text-black font-semibold text-[15px]">Inhouse alcohol not available<br />Outside alcohol not permitted</p>
                        </div>
                        <div className="mb-5">
                            <p className="text-gray-800 text-[15px]">Small Party Venue</p>
                            <p className="text-black font-semibold text-[15px]">Less than 50 pax allowed</p>
                        </div>
                        <div className="mb-5">
                            <p className="text-gray-800 text-[15px]">Room Count</p>
                            <p className="text-black font-semibold text-[15px]">50 Rooms</p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="mb-5">
                            <p className="text-gray-800 text-[15px]">Parking</p>
                            <p className="text-black font-semibold text-[15px]">There is sufficient parking available</p>
                        </div>
                        <div className="mb-5">
                            <p className="text-gray-800 text-[15px]">Catering policy</p>
                            <p className="text-black font-semibold text-[15px]">Inhouse and outside catering allowed</p>
                        </div>
                        <div className="mb-5">
                            <p className="text-gray-800 text-[15px]">Start of Venue</p>
                            <p className="text-black font-semibold text-[15px]">2011</p>
                        </div>
                        <div className="mb-5">
                            <p className="text-gray-800 text-[15px]">Decor Policy</p>
                            <p className="text-black font-semibold text-[15px]">Outside decorators permitted</p>
                        </div>
                        <div className="mb-5">
                            <p className="text-gray-800 text-[15px]">DJ Policy</p>
                            <p className="text-black font-semibold text-[15px]">In house DJ not available<br />Outside DJ not permitted</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default About;
