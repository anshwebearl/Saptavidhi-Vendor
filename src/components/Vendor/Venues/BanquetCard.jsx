/* eslint-disable react/prop-types */
import React from "react";
import locationicon from "../../../assets/images/location.png";
import { MdEdit, MdDelete } from "react-icons/md";

const BanquetCard = ({
    src,
    title,
    subtitle,
    location,
    fixed_capacity,
    max_capacity,
    id,
    handleDeleteModal,
    handleEditModal,
}) => {
    const BASE_URL = import.meta.env.DEV
        ? import.meta.env.VITE_IMAGE_URL_DEV
        : import.meta.env.VITE_IMAGE_URL_PROD;

    return (
        <div className="bg-white rounded-3xl border-[#00000033] flex gap-2 md:gap-4 border-[1px] w-[250px] md:w-[320px] overflow-hidden">
            <img
                className="object-cover w-[90px] md:w-[120px] h-full"
                src={`${BASE_URL}/${src}`}
                alt="Venue"
            />
            <div className="pr-4 md:pr-5 w-full py-2 md:py-3 flex flex-col gap-2">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-sm md:text-lg font-semibold flex-grow">
                            {title}
                        </h2>
                        <p className="text-gray-600 text-[10px] md:text-xs">
                            {subtitle}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <div className="hover:text-green-700 text-green-500 h-fit w-fit border-[0.5px] rounded-md border-green-500 hover:border-green-800 cursor-pointer">
                            <MdEdit
                                onClick={()=>handleEditModal(id)}
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

                <p className="text-gray-600 flex items-center text-[10px] md:text-sm">
                    <img
                        src={locationicon}
                        className="text-gray-600 mr-1 h-3 md:h-4"
                    />{" "}
                    {location}
                </p>
                <div className="border-b-[1px] border-gray-400" />
                <div className="flex justify-start items-center flex-wrap gap-1">
                    <span className="border-[1px] border-gray-400 rounded text-gray-700 text-[8px] md:text-[10px] px-[4px] md:px-[6px] py-[2px] md:py-[3px]">
                        {fixed_capacity} Fixed
                    </span>
                    <span className="border-[1px] border-gray-400 rounded text-gray-700 text-[8px] md:text-[10px] px-[4px] md:px-[6px] py-[2px] md:py-[3px]">
                        {max_capacity} Max
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BanquetCard;
