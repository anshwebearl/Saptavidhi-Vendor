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
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar1 = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const location = useLocation();

    const navigate = useNavigate();

    const handleItemClick = (itemName) => {
        switch (itemName) {
            case "Personal Information":
                return navigate("personal-information");
            case "Additional Info":
                return navigate("additional-info");
            case "Banquets":
                return navigate("banquets");
            case "Inquiries":
                return navigate("inquiries");
            case "Projects":
                return navigate("projects");
            case "Membership Plans":
                return navigate("membership-plans");
            case "Reviews":
                return navigate("reviews");
            case "Google My Business":
                return navigate("google-my-business");
            case "Menu":
                return navigate("menu");
            default:
                return navigate("personal-information");
        }
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
                <div className="md:space-y-3 flex md:flex-col gap-2 md:gap-0 flex-wrap items-center md:items-start">
                    {[
                        {
                            name: "Personal Information",
                            key: "personal-information",
                            icon: inquiriesIcon,
                            selectedIcon: inquiriesIconSelected,
                        },
                        {
                            name: "Additional Info",
                            key: "additional-info",
                            icon: infoIcon,
                            selectedIcon: infoIconSelected,
                        },
                        {
                            name: "Menu",
                            key: "menu",
                            icon: catalogIcon,
                            selectedIcon: catalogIconSelected,
                        },
                        {
                            name: "Banquets",
                            key: "banquets",
                            icon: catalogIcon,
                            selectedIcon: catalogIconSelected,
                        },
                        {
                            name: "Projects",
                            key: "projects",
                            icon: projectsIcon,
                            selectedIcon: projectsIconSelected,
                        },
                        {
                            name: "Inquiries",
                            key: "inquiries",
                            icon: inquiriesIcon,
                            selectedIcon: inquiriesIconSelected,
                        },
                        {
                            name: "Membership Plans",
                            key: "membership-plans",
                            icon: membershipIcon,
                            selectedIcon: membershipIconSelected,
                        },
                        {
                            name: "Reviews",
                            key: "reviews",
                            icon: reviewsIcon,
                            selectedIcon: reviewsIconSelected,
                        },
                        {
                            name: "Google My Business",
                            key: "google-my-business",
                            icon: gmbIcon,
                            selectedIcon: gmbIconSelected,
                        },
                    ].map((item) => (
                        <div
                            key={item.name}
                            className={`cursor-pointer flex md:w-full items-center space-x-2 p-2 rounded-md text-sm md:text-xl font-medium transition-colors duration-300 ease-in-out ${
                                location.pathname.toString().split("/")[2] ===
                                item.key
                                    ? "bg-[#CF166F0D] text-[#CF166F]"
                                    : "hover:bg-pink-100"
                            }`}
                            onClick={() => handleItemClick(item.name)}
                        >
                            <img
                                src={
                                    location.pathname
                                        .toString()
                                        .split("/")[2] === item.key
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
