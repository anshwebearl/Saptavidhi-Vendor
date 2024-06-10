// Sidebar1.js
/* eslint-disable react/prop-types */
import { useState } from "react";
import infoIcon from "../../assets/images/Vector0.png"; // Import the vector images
import infoIconSelected from "../../assets/images/Vector1.png"; // Import the vector images
import catalogIcon from "../../assets/images/Vector2.png";
import catalogIconSelected from "../../assets/images/Vector10.png";
import inquiriesIcon from "../../assets/images/Vector3.png";
import inquiriesIconSelected from "../../assets/images/Vector11.png";
import projectsIcon from "../../assets/images/Vector4.png";
import projectsIconSelected from "../../assets/images/Vector12.png";
import membershipIcon from "../../assets/images/Vector5.png";
import membershipIconSelected from "../../assets/images/Vector13.png";
import reviewsIcon from "../../assets/images/Vector6.png";
import reviewsIconSelected from "../../assets/images/Vector9.png";
import gmbIcon from "../../assets/images/Vector7.png";
import gmbIconSelected from "../../assets/images/Vector8.png";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const Sidebar1 = ({ selectedItem, setSelectedItem }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
    };

    return (
        <div className="flex flex-col md:flex-row h-fit w-fit">
            <button
                className="md:hidden p-2 bg-pink-500 text-white rounded-md m-2 w-fit"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? <FaCaretLeft /> : <FaCaretRight />}
            </button>
            <div
                className={`bg-white text-black flex flex-col p-3 border-2 font-poppins w-fit md:w-[250px] rounded-xl transition-all duration-300 ease-in-out ${
                    isSidebarOpen ? "block" : "hidden"
                } md:block`}
            >
                <div className="space-y-3">
                    {[
                        {
                            name: "Personal Information",
                            icon: infoIcon,
                            selectedIcon: infoIconSelected,
                        },
                        {
                            name: "Additional Info",
                            icon: infoIcon,
                            selectedIcon: infoIconSelected,
                        },
                        {
                            name: "My Catalog",
                            icon: catalogIcon,
                            selectedIcon: catalogIconSelected,
                        },
                        {
                            name: "Inquiries",
                            icon: inquiriesIcon,
                            selectedIcon: inquiriesIconSelected,
                        },
                        {
                            name: "Projects",
                            icon: projectsIcon,
                            selectedIcon: projectsIconSelected,
                        },
                        {
                            name: "Membership Plans",
                            icon: membershipIcon,
                            selectedIcon: membershipIconSelected,
                        },
                        {
                            name: "Reviews",
                            icon: reviewsIcon,
                            selectedIcon: reviewsIconSelected,
                        },
                        {
                            name: "Google My Business",
                            icon: gmbIcon,
                            selectedIcon: gmbIconSelected,
                        },
                    ].map((item) => (
                        <div
                            key={item.name}
                            className={`flex items-center space-x-2 p-2 rounded-md text-sm md:text-xl font-medium transition-colors duration-300 ease-in-out ${
                                selectedItem === item.name
                                    ? "bg-[#CF166F0D] text-[#CF166F]"
                                    : "hover:bg-pink-100"
                            }`}
                            onClick={() => handleItemClick(item.name)}
                        >
                            <img
                                src={
                                    selectedItem === item.name
                                        ? item.selectedIcon
                                        : item.icon
                                }
                                alt={`${item.name} Icon`}
                                className="w-4 h-4"
                            />
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar1;
