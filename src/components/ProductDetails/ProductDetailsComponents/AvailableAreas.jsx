/* eslint-disable react/prop-types */
import React from "react";
import hotel from "../../../assets/images/ProductDetailsImages/hotel.png"; // adjust the path as necessary

function AvailableAreas({ available_spaces }) {
    return (
        <>
            <div className="border-2  rounded-[20px] px-5 py-3 md:px-8 shadow-md md:py-5 flex flex-col gap-2 md:gap-3 flex-grow h-fit">
                <h1 className="md:text-lg text-base font-semibold">
                    Available Areas
                </h1>
                <hr className="border-gray-300 " />
                <div className="flex flex-col justify-between gap-5">
                    {available_spaces?.map((item) => (
                        <div
                            key={item.space_name}
                            className="flex items-center gap-5 md:gap-16"
                        >
                            <div className="flex flex-col items-center w-[30px] md:w-[60px] text-center">
                                <img
                                    src={hotel}
                                    alt="Indoor & Outdoor"
                                    className="w-6 h-6 md:w-8 md:h-8"
                                />
                                <div className="flex flex-wrap justify-center text-xs md:text-sm text-gray-600">
                                    <div>{item.space_type}</div>
                                </div>
                            </div>
                            <div>
                                <div className="text-sm md:text-lg font-medium">
                                    {item.fixed_capacity} Seating | {item.max_capacity} Floating
                                </div>
                                <div className="text-sm md:text-lg">
                                    {item.space_name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default AvailableAreas;
