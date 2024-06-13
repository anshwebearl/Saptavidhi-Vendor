import React from "react";

import image1 from "../../assets/images/CardWrapper7images/image1.jpeg";
import image2 from "../../assets/images/CardWrapper7images/image2.jpeg";
import image3 from "../../assets/images/CardWrapper7images/image3.jpeg";

const CardWrapper7Container = () => {
    return (
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center mx-2 md:mx-5">
            {/* Left Section */}
            <div className="relative w-full h-[200px] md:w-1/2 md:h-[600px]">
                <div
                    className={`absolute inset-0 bg-[url('/create_wedding.png')] bg-cover bg-center rounded-3xl`}
                    style={{ backgroundImage: `url(${image1})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 rounded-3xl"></div>
                <div className="absolute left-1 bottom-1 md:bottom-4 md:left-4 w-full bg-opacity-50 text-white p-3 rounded-b-3xl">
                    <h2 className="text-xs md:text-3xl  font-regular">
                        Wedsta
                    </h2>
                    <div className="w-[95%] p-[.5px] bg-white my-2 md:my-5"></div>
                    <div className="flex justify-between w-full">
                        <h2 className="text-[12px] md:text-xl w-1/2 font-regular">
                            We At Home, Family Makeup Services
                        </h2>
                        <h2 className="text-[12px] md:text-xl self-end md:px-10 font-regular underline">
                            Know More
                        </h2>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex md:flex-col gap-2 md:gap-4 w-full md:w-1/2">
                {/* Upper Right Section */}
                <div className="relative w-1/2 h-[100px] md:w-full md:h-[290px]">
                    <div
                        className={`absolute inset-0 bg-[url('/create_wedding.png')] bg-cover bg-center rounded-3xl`}
                        style={{ backgroundImage: `url(${image2})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 rounded-3xl"></div>
                    <div className="absolute bottom-1 left-1 md:bottom-4 md:left-4 w-full bg-opacity-50 text-white p-3 rounded-b-3xl">
                        <h2 className="text-xs md:text-2xl  font-regular">
                            Genie Services
                        </h2>
                    </div>
                </div>

                {/* Lower Right Section */}
                <div className="relative w-1/2 h-[100px] md:w-full md:h-[290px]">
                    <div
                        className={`absolute inset-0 bg-[url('/create_wedding.png')] bg-cover bg-center rounded-3xl`}
                        style={{ backgroundImage: `url(${image3})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-3xl"></div>
                    <div className="absolute bottom-1 left-1 md:bottom-4 md:left-4 w-full bg-opacity-50 text-white p-3 rounded-b-3xl">
                        <h2 className="text-[12px] md:text-2xl  font-regular">
                            Venue Booking Services
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardWrapper7Container;
