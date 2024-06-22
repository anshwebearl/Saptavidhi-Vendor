import React from "react";
import roomImage from "../../../assets/images/ProductDetailsImages/room.png";
import vegDishImage from "../../../assets/images/ProductDetailsImages/veg.png";
import nonVegDishImage from "../../../assets/images/ProductDetailsImages/nonveg.png";
import vegIcon from "../../../assets/images/ProductDetailsImages/vegicon.png";
import nonVegIcon from "../../../assets/images/ProductDetailsImages/nonvegicon.png";

function Charges() {
    return (
        <>
            <div className="border-2 rounded-[20px] flex flex-col gap-3 md:gap-4 px-5 py-3 md:px-8 md:py-5">
                <div className="flex items-center ">
                    <div className="flex gap-2 flex-1 items-center">
                        <img src={roomImage} alt="Room" className="w-5 h-5" />
                        <span className="text-xs md:text-base font-semibold">
                            ₹ 8,500
                        </span>
                    </div>
                    <span className="text-sm md:text-lg text-gray-500">
                        Starting Price/room
                    </span>
                </div>
                <hr className=" border-gray-400" />
                <div className="flex items-center">
                    <div className="flex gap-2 flex-1 items-center">
                        <img
                            src={vegDishImage}
                            alt="Veg Dish"
                            className="w-5 h-4"
                        />
                        <span className="text-xs md:text-base font-semibold">
                            ₹ 8,500
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src={vegIcon} alt="Veg Icon" className="w-4 h-4" />
                        <span className="text-sm md:text-lg text-gray-500">
                            Veg/plate
                        </span>
                    </div>
                </div>
                <hr className=" border-gray-400" />
                <div className="flex items-center">
                    <div className="flex gap-2 flex-1 items-center">
                        <img
                            src={nonVegDishImage}
                            alt="Non Veg Dish"
                            className="w-5 h-4"
                        />
                        <span className="text-xs md:text-base font-semibold">
                            ₹ 8,500
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <img
                            src={nonVegIcon}
                            alt="Non Veg Icon"
                            className="w-4 h-4"
                        />
                        <span className="text-sm md:text-lg text-gray-500">
                            Non Veg/plate
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Charges;
