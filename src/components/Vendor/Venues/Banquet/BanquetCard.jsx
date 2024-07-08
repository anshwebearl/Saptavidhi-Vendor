/* eslint-disable react/prop-types */
import React from "react";
import locationicon from "../../../../assets/images/location.png";
import { MdEdit, MdDelete } from "react-icons/md";
import vegIcon from "../../../../assets/images/vegicon.png";
import nonVegIcon from "../../../../assets/images/nonvegicon.png";
import { useNavigate } from "react-router-dom";

const BanquetCard = ({
    src,
    handleDeleteModal,
    handleNavigate,
    veg_price,
    nonveg_price,
    room_count,
    title,
    banquet_type,
    location,
    guest_count,
    id,
    parking_capacity,
}) => {
    const BASE_URL = import.meta.env.DEV
        // ? import.meta.env.VITE_IMAGE_URL_DEV
        ? "http://127.0.0.1:8000/api"
        : import.meta.env.VITE_IMAGE_URL_PROD;

    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-3xl border-[#00000033] flex gap-2 md:gap-4 border-[1px] w-[260px] flex-grow md:max-w-[320px] overflow-hidden">
            <img
                onClick={() => navigate(`/vendors/venues/banquet/${id}`)}
                className="object-cover w-[90px] md:w-[120px] h-full cursor-pointer"
                src={`${BASE_URL}/${src}`}
                alt="Venue"
            />
            <div className="pr-4 md:pr-5 w-full py-2 md:py-3 flex flex-col gap-2">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-sm md:text-base font-semibold flex-grow">
                            {title}
                        </h2>
                        <p className="text-gray-600 text-[10px] md:text-[10px]">
                            {banquet_type}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <div className="hover:text-green-700 text-green-500 h-fit w-fit border-[0.5px] rounded-md border-green-500 hover:border-green-800 cursor-pointer">
                            <MdEdit
                                onClick={() =>
                                    handleNavigate(`update-banquet/${id}`)
                                }
                                size={window.screen.width > 768 ? 20 : 20}
                            />
                        </div>
                        <div className="hover:text-red-800 text-red-500 cursor-pointer h-fit w-fit border-[0.5px] rounded-md border-red-500 hover:border-red-800">
                            <MdDelete
                                onClick={() => handleDeleteModal(id)}
                                size={window.screen.width > 768 ? 20 : 20}
                            />
                        </div>
                    </div>
                </div>

                <p className="text-gray-600 flex items-center text-[10px] md:text-xs">
                    <img
                        src={locationicon}
                        className="text-gray-600 mr-1 h-3 md:h-4"
                    />{" "}
                    {location}
                </p>
                <div className="border-b-[1px] border-gray-400" />
                {/* <div className="flex justify-start items-center flex-wrap gap-1">
                    <span className="border-[1px] border-gray-400 rounded text-gray-700 text-[8px] md:text-[10px] px-[4px] md:px-[6px] py-[2px] md:py-[3px]">
                        {parking_capacity} Parking
                    </span>
                    <span className="border-[1px] border-gray-400 rounded text-gray-700 text-[8px] md:text-[10px] px-[4px] md:px-[6px] py-[2px] md:py-[3px]">
                        {guest_count} Pax
                    </span>
                    <span className="border-[1px] border-gray-400 rounded text-gray-700 text-[8px] md:text-[10px] px-[4px] md:px-[6px] py-[2px] md:py-[3px]">
                        {room_count} Rooms
                    </span>
                </div> */}
                <div className="flex items-center gap-4">
                    <div className="flex gap-1 items-center">
                        <img
                            src={vegIcon}
                            alt="red"
                            className="w-3 h-3 md:w-3 md:h-3"
                        />
                        <span className="text-black-500 font-semibold text-[12px] md:text-base">
                            ₹ {veg_price}
                        </span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <img
                            src={nonVegIcon}
                            alt="green"
                            className="w-3 h-3 md:w-3 md:h-3"
                        />
                        <span className="text-black-500 font-semibold text-[12px] md:text-base">
                            ₹ {nonveg_price}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BanquetCard;
