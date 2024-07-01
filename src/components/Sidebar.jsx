import React, { useState } from "react";

const Sidebar1 = () => {
    const [selectedItem, setSelectedItem] = useState("Projects");

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
    };

    return (
        <div className="bg-white text-black flex flex-col h-92 p-3 border-2 my-14 font-poppins sm:w-13/14 w-[250px] rounded-xl top-0 sticky z-20">
            <div className="space-y-3">
                <div
                    className={`flex items-center space-x-2 p-2 rounded-md text-[15px] font-medium ${
                        selectedItem === "Information"
                            ? "bg-pink-500"
                            : "hover:bg-pink-100"
                    }`}
                    onClick={() => handleItemClick("Information")}
                >
                    <img
                        src="/info.png"
                        alt="Information Icon"
                        className="w-4 h-4"
                    />
                    <span>Information</span>
                </div>

                <div
                    className={`flex items-center space-x-2 p-2 rounded-md text-[15px] font-medium ${
                        selectedItem === "My Catalog"
                            ? "bg-pink-500"
                            : "hover:bg-pink-100"
                    }`}
                    onClick={() => handleItemClick("My Catalog")}
                >
                    <img
                        src="/catalog.png"
                        alt="My Catalog Icon"
                        className="w-4 h-4"
                    />
                    <span>My Catalog</span>
                </div>
                <div
                    className={`flex items-center space-x-2 p-2 rounded-md text-[15px] font-medium ${
                        selectedItem === "Inquiries"
                            ? "bg-pink-500"
                            : "hover:bg-pink-100"
                    }`}
                    onClick={() => handleItemClick("Inquiries")}
                >
                    <img
                        src="/inquiries.png"
                        alt="Inquiries Icon"
                        className="w-4 h-4"
                    />
                    <span>Inquiries</span>
                </div>
                <div
                    className={`flex items-center space-x-2 p-2 rounded-md text-[15px] font-medium ${
                        selectedItem === "Projects"
                            ? "bg-pink-100"
                            : "hover:bg-pink-100"
                    }`}
                    onClick={() => handleItemClick("Projects")}
                >
                    <img
                        src="/project.png"
                        alt="Projects Icon"
                        className="w-4 h-4"
                    />

                    <span>Projects</span>
                </div>
                <div
                    className={`flex items-center space-x-2 p-2 rounded-md text-[15px] font-medium ${
                        selectedItem === "Membership Plans"
                            ? "bg-pink-500"
                            : "hover:bg-pink-100"
                    }`}
                    onClick={() => handleItemClick("Membership Plans")}
                >
                    <img
                        src="/membership.png"
                        alt="Membership Plans Icon"
                        className="w-4 h-4"
                    />

                    <span>Membership Plans</span>
                </div>
                <div
                    className={`flex items-center space-x-2 p-2 rounded-md text-[15px] font-medium ${
                        selectedItem === "Reviews"
                            ? "bg-pink-500"
                            : "hover:bg-pink-100"
                    }`}
                    onClick={() => handleItemClick("Reviews")}
                >
                    <img
                        src="/reviews.png"
                        alt="Reviews Icon"
                        className="w-4 h-4"
                    />

                    <span>Reviews</span>
                </div>
                <div
                    className={`flex items-center space-x-2 p-2 rounded-md text-[15px] font-medium ${
                        selectedItem === "Google My Business"
                            ? "bg-pink-500"
                            : "hover:bg-pink-100"
                    }`}
                    onClick={() => handleItemClick("Google My Business")}
                >
                    <img
                        src="/googlemybusiness.png"
                        alt="Google My Business Icon"
                        className="w-4 h-4"
                    />

                    <span>Google My Business</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar1;
