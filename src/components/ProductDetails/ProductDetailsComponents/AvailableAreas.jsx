import React from "react";
import hotel from "../../../assets/images/ProductDetailsImages/hotel.png"; // adjust the path as necessary

function  AvailableAreas() {
    const areaInfo = {
        seating: 1000,
        floating: 1400,
        type: "Lawn + Hall",
    };
    return (
        <>
            <div className="border-2  rounded-[20px] px-5 py-3 md:px-8 shadow-md md:py-5 flex flex-col gap-2 md:gap-3">
                <h1 className="md:text-lg text-base font-semibold">
                    Available Areas
                </h1>
                <hr className="border-gray-300 " />
                <div className="flex items-center gap-10">
                    <div className="flex flex-col items-center">
                        <img
                            src={hotel}
                            alt="Indoor & Outdoor"
                            className="w-6 h-6 md:w-8 md:h-8"
                        />
                        <div className="flex flex-wrap justify-center text-xs md:text-base">
                            <div>Indoor</div>
                            <div>&nbsp;</div> {/* Empty space for line break */}
                            <div>&</div>
                            <div>&nbsp;</div> {/* Empty space for line break */}
                            <div>Outdoor</div>
                        </div>
                    </div>
                    <div>
                        <div className="text-sm md:text-xl font-medium">
                            {areaInfo.seating} Seating | {areaInfo.floating}{" "}
                            Floating
                        </div>
                        <div className="text-xs md:text-base text-gray-600">
                            {areaInfo.type}
                        </div>
                    </div>
                </div>
                <hr className="border-gray-400" />
                <div className="flex items-center gap-10">
                    <div className="flex flex-col items-center">
                        <img
                            src={hotel}
                            alt="Indoor & Outdoor"
                            className="w-6 h-6 md:w-8 md:h-8"
                        />
                        <div className="flex flex-wrap justify-center text-xs md:text-base">
                            <div>Indoor</div>
                            <div>&nbsp;</div> {/* Empty space for line break */}
                            <div>&</div>
                            <div>&nbsp;</div> {/* Empty space for line break */}
                            <div>Outdoor</div>
                        </div>
                    </div>
                    <div>
                        <div className="text-sm md:text-xl font-medium">
                            {areaInfo.seating} Seating | {areaInfo.floating}{" "}
                            Floating
                        </div>
                        <div className="text-xs md:text-base text-gray-600">
                            {areaInfo.type}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AvailableAreas;
