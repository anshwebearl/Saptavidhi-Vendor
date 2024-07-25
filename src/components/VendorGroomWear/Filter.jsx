/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const Filter = ({
    totalCount,
    storeType,
    budget,
    outfitType,
    setStoreType,
    setBudget,
    setOutfitType,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="w-full lg:px-2 py-5 font-poppins flex flex-col gap-5 mx-auto bg-[#f5f5f5] overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-800 -my-2 text-left">
                Bridal Wear
            </h2>
            <p className="text-sm text-gray-500 text-left">
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
                            value={storeType}
                            onChange={(e) => setStoreType(e.target.value)}
                            className="text-sm py-1 px-3 md:text-sm md:py-1 md:px-4 rounded-full text-[#797979] w-32"
                        >
                            <option value="" selected>
                                Store Type
                            </option>
                            <option value="Retail Shop">Retail Shop</option>
                            <option value="Studio / Boutique">
                                Studio / Boutique
                            </option>
                            <option value="Couture Brand">Couture Brand</option>
                            <option value="Multi designer studio">
                                Multi designer studio
                            </option>
                            <option value="Rental Store">Rental Store</option>
                        </select>
                    </div>
                    <div className="">
                        <select
                            name="Room Count"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            className="text-sm py-1 px-3 md:text-sm md:py-1 md:px-4 rounded-full text-[#797979]"
                        >
                            <option value="" selected>
                                Budget
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
                            value={outfitType}
                            onChange={(e) => setOutfitType(e.target.value)}
                            className="text-sm py-1 px-3 md:text-sm md:py-1 md:px-4 rounded-full text-[#797979] w-32"
                        >
                            <option value="" selected>
                                Outfit Type
                            </option>
                            <option value="Bridal Lehengas">
                                Bridal Lehengas
                            </option>
                            <option value="Light Lehengas">
                                Light Lehengas
                            </option>
                            <option value="Trousseau Sarees">
                                Trousseau Sarees
                            </option>
                            <option value="Cocktail Gowns">
                                Cocktail Gowns
                            </option>
                            <option value="Anarkalis">Anarkalis</option>
                            <option value="Christian Wedding Gowns">
                                Christian Wedding Gowns
                            </option>
                            <option value="Bridal Lehenga on Rent">
                                Bridal Lehenga on Rent
                            </option>
                            <option value="Kanjeevaram / Silk Sarees">
                                Kanjeevaram / Silk Sarees
                            </option>
                        </select>
                    </div>
                    <div className="">
                        <select
                            name="fabric"
                            className="text-sm py-1 px-3 md:text-sm md:py-1 md:px-4 rounded-full text-[#797979]"
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
