/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const Filter = ({
    totalCount,
    roomCount,
    guestCount,
    platePrice,
    venueType,
    setRoomCount,
    setGuestCount,
    setPlatePrice,
    setVenueType,
    space,
    setSpace,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="w-full lg:px-2 py-5 font-poppins flex flex-col gap-5 mx-auto bg-[#f5f5f5] overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-800 mx-3 -my-2 text-left">
                Banquet Halls
            </h2>
            <p className="text-sm text-gray-500 mx-3 text-left">
                Showing {totalCount} results as per your search criteria
            </p>
            <div className="bg-gradient-to-r from-[#FD070780] to-[#5C034080] focus:outline-none p-3 rounded-full mx-3 lg:px-3  md:self-center">
                {/* <div className="lg:hidden flex justify-between items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-white flex gap-2"
                    >
                        {isOpen ? (
                            <>
                                <span className="font-[500]">Filter</span>
                                <FaCaretUp className="w-6 h-6" />
                            </>
                        ) : (
                            <>
                                <span className="font-[500]">Filter</span>
                                <FaCaretDown className="w-6 h-6" />
                            </>
                        )}
                    </button>
                </div> */}
                <div
                    className={`flex flex-row gap-3 justify-between items-center overflow-x-scroll no-scrollbar`}
                >
                    <div className="">
                        <select
                            name="type"
                            value={guestCount}
                            onChange={(e) => setGuestCount(e.target.value)}
                            className="text-sm py-1 px-3 md:text-base md:py-2 md:px-5 rounded-full text-[#797979]"
                        >
                            <option value="" selected>
                                No. of Guests
                            </option>
                            <option value="<100">&lt; 100</option>
                            <option value="100-250">100-250</option>
                            <option value="250-500">250-500</option>
                            <option value="500-1000">500-1000</option>
                            <option value=">1000">&gt; 1000</option>
                        </select>
                    </div>
                    <div className="">
                        <select
                            name="Room Count"
                            value={roomCount}
                            onChange={(e) => setRoomCount(e.target.value)}
                            className="text-sm py-1 px-3 md:text-base md:py-2 md:px-5 rounded-full text-[#797979]"
                        >
                            <option value="" selected>
                                Room Count
                            </option>
                            <option value="<30">&lt; 30</option>
                            <option value="30-60">30-60</option>
                            <option value="61-100">61-100</option>
                            <option value="100-200">100-200</option>
                            <option value="200-1000">200-1000</option>
                        </select>
                    </div>
                    <div className="">
                        <select
                            name="Price"
                            value={platePrice}
                            onChange={(e) => setPlatePrice(e.target.value)}
                            className="text-sm py-1 px-3 md:text-base md:py-2 md:px-5 rounded-full text-[#797979]"
                        >
                            <option value="" selected>
                                Veg. Price Per Plate
                            </option>
                            <option value="<1000">&lt; 1000</option>
                            <option value="1000-1500">1000-1500</option>
                            <option value="1500-2000">1500-2000</option>
                            <option value="2000-3000">2000-3000</option>
                            <option value="3000">3000</option>
                        </select>
                    </div>
                    <div className="">
                        <select
                            name="city"
                            value={venueType}
                            onChange={(e) => setVenueType(e.target.value)}
                            className="text-sm py-1 px-3 md:text-base md:py-2 md:px-5 rounded-full text-[#797979]"
                        >
                            <option value="" selected>
                                Venue Type
                            </option>
                            <option value="4 Star & Above Wedding Hotels">
                                4 Star & Above Wedding Hotels
                            </option>
                            <option value="Banquet Halls">Banquet Halls</option>
                            <option value="Lawns / Farmhouses">
                                Lawns / Farmhouses
                            </option>
                            <option value="3 Star Hotels with Banquets">
                                3 Star Hotels with Banquets
                            </option>
                            <option value="Country / Golf Club">
                                Country / Golf Club
                            </option>
                            <option value="Wedding Resorts">
                                Wedding Resorts
                            </option>
                            <option value="Party Restaurants / Lounge Bars">
                                Party Restaurants / Lounge Bars
                            </option>
                            <option value="Forts / Palaces For Wedding">
                                Forts / Palaces For Wedding
                            </option>
                            <option value="Destination Wedding Venues">
                                Destination Wedding Venues
                            </option>
                            <option value="Kalyana Mandapams">
                                Kalyana Mandapams
                            </option>
                            <option value="Small Function / Party Halls">
                                Small Function / Party Halls
                            </option>
                            <option value="Venues With Rooms">
                                Venues With Rooms
                            </option>
                            <option value="5 Star Luxury Wedding Hotels">
                                5 Star Luxury Wedding Hotels
                            </option>
                            <option value="Temple Wedding Venues">
                                Temple Wedding Venues
                            </option>
                            <option value="Convention / Function Halls">
                                Convention / Function Halls
                            </option>
                        </select>
                    </div>
                    <div className="">
                        <select
                            name="brand"
                            value={space}
                            onChange={(e) => setSpace(e.target.value)}
                            className="text-sm py-1 px-3 md:text-base md:py-2 md:px-5 rounded-full text-[#797979]"
                        >
                            <option value="" selected>
                                Select Space Type
                            </option>
                            <option value="Indoor">Indoor</option>
                            <option value="Outdoor">Outdoor</option>
                            <option value="Poolside">Poolside</option>
                            <option value="Indoor & Outdoor">
                                Indoor & Outdoor
                            </option>
                            <option value="Terrace">Terrace</option>
                        </select>
                    </div>
                    <div className="">
                        <select
                            name="fabric"
                            className="text-sm py-1 px-3 md:text-base md:py-2 md:px-5 rounded-full text-[#797979]"
                        >
                            <option value="" selected>
                                Rating
                            </option>
                            <option value="option 1">Fabric 1</option>
                            <option value="option 2">Fabric 2</option>
                            <option value="option 3">Fabric 3</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;
