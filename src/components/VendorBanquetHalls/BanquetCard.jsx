/* eslint-disable react/prop-types */

import locationicon from "../../assets/images/location.png";
import vegIcon from "../../assets/images/vegicon.png";
import nonVegIcon from "../../assets/images/nonvegicon.png";

const BanquetCard = ({
    src,
    title,
    banquet_type,
    location,
    guest_count,
    id,
    handleNavigation,
    veg_price,
    nonveg_price,
    parking_capacity,
    room_count,
}) => {
    const BASE_URL = import.meta.env.DEV
        ? import.meta.env.VITE_IMAGE_URL_DEV
        : import.meta.env.VITE_IMAGE_URL_PROD;

    return (
        <div
            onClick={() => handleNavigation(`banquet/${id}`)}
            className="bg-white rounded-3xl border-[#00000033] cursor-pointer flex gap-2 md:gap-4 border-[1px] max-w-[100%] flex-grow md:max-w-[360px] overflow-hidden"
        >
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
                            {banquet_type}
                        </p>
                    </div>
                </div>

                <p className="text-gray-600 flex items-center text-[10px] md:text-sm">
                    <img
                        src={locationicon}
                        className="text-gray-600 mr-1 h-3 md:h-3"
                    />{" "}
                    {location}
                </p>
                <div className="border-b-[1px] border-gray-400" />
                <div className="flex justify-start items-center flex-wrap gap-1">
                    <span className="border-[1px] border-gray-400 rounded text-gray-700 text-[8px] md:text-[10px] px-[4px] md:px-[6px] py-[2px] md:py-[3px]">
                        {parking_capacity} Parking
                    </span>
                    <span className="border-[1px] border-gray-400 rounded text-gray-700 text-[8px] md:text-[10px] px-[4px] md:px-[6px] py-[2px] md:py-[3px]">
                        {guest_count} Pax
                    </span>
                    <span className="border-[1px] border-gray-400 rounded text-gray-700 text-[8px] md:text-[10px] px-[4px] md:px-[6px] py-[2px] md:py-[3px]">
                        {room_count} Rooms
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex gap-1 items-center">
                        <img
                            src={vegIcon}
                            alt="red"
                            className="w-3 h-3 md:w-4 md:h-4"
                        />
                        <span className="text-black-500 font-semibold text-[12px] md:text-lg">
                            ₹ {veg_price.toLocaleString("en-IN")}
                        </span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <img
                            src={nonVegIcon}
                            alt="green"
                            className="w-3 h-3 md:w-4 md:h-4"
                        />
                        <span className="text-black-500 font-semibold text-[12px] md:text-lg">
                            ₹ {nonveg_price.toLocaleString("en-IN")}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BanquetCard;
