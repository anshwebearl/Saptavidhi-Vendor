import React from 'react';

import image1 from '../../assets/images/CardWrapper7images/image1.jpeg';
import image2 from '../../assets/images/CardWrapper7images/image2.jpeg';
import image3 from '../../assets/images/CardWrapper7images/image3.jpeg';

const CardWrapper7Container = () => {
    return (
        <div className="flex gap-4 items-center">
            {/* Left Section */}
            <div className="relative w-full lg:w-2/3 h-64 lg:h-auto lg:min-h-64 md:rounded[3xl] rounded-lg overflow-hidden">
                <img
                    src={image1}
                    alt="Wedsta"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-white p-3 rounded-b-3xl">
                    <div>
                        <h2 className="text-[12px] md:text-[15px] font-bold">Wedsta</h2>
                    </div>
                    <hr className="border-gray-400 my-2" />
                    <div className='flex gap-3'>
                        <div className="text-[10px] md:text-[13px]">We At Home, Family Makeup Services</div>
                        <div className="text-[#fe819c] underline text-[10px] md:text-[13px] ">
                            <div>Know More</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col gap-4 w-full lg:w-1/3">
                {/* Upper Right Section */}
                <div className="relative flex-grow h-32 lg:h-auto lg:min-h-32 md:rounded[3xl] rounded-lg overflow-hidden">
                    <img
                        src={image2}
                        alt="Genie Services"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-white p-2 rounded-b-3xl">
                        <h2 className="text-[12px] md:text-[15px] font-bold">Genie Services</h2>
                    </div>
                </div>

                {/* Lower Right Section */}
                <div className="relative flex-grow h-32 lg:h-auto lg:min-h-32 md:rounded[3xl] rounded-lg overflow-hidden">
                    <img
                        src={image3}
                        alt="Venue Booking Service"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-white p-2 rounded-b-3xl">
                        <h2 className="text-[12px] md:text-[15px] font-bold">Venue Booking Service</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardWrapper7Container;
