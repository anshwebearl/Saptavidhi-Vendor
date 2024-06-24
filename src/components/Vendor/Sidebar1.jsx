// Sidebar1.js
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import { IoPersonCircleOutline, IoCameraOutline } from "react-icons/io5";
import { FiInfo } from "react-icons/fi";
import { BiFoodMenu, BiMessageRoundedDetail } from "react-icons/bi";
import { FaRegBuilding } from "react-icons/fa";
import { RiImageCircleFill } from "react-icons/ri";
import { BsPersonFillAdd } from "react-icons/bs";
import { MdCardMembership } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

const Sidebar1 = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const { vendorType } = useContext(UserContext);

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

    const sidebarItems = [
        {
            name: "Personal Information",
            key: "personal-information",
            icon: <IoPersonCircleOutline color="black" size={20} />,
            selectedIcon: <IoPersonCircleOutline color="#CF166F" size={20} />,
        },
        {
            name: "Additional Info",
            key: "additional-info",
            icon: <FiInfo size={20} />,
            selectedIcon: <FiInfo color="#CF166F" size={20} />,
        },
        {
            name: "Menu",
            key: "menu",
            icon: <BiFoodMenu size={20} />,
            selectedIcon: <BiFoodMenu color="#CF166F" size={20} />,
            visibleFor: "Venues",
        },
        {
            name: "Banquets",
            key: "banquets",
            icon: <FaRegBuilding size={20} />,
            selectedIcon: <FaRegBuilding color="#CF166F" size={20} />,
            visibleFor: "Venues",
        },
        {
            name: "Projects",
            key: "projects",
            icon: <RiImageCircleFill size={20} />,
            selectedIcon: <RiImageCircleFill color="#CF166F" size={20} />,
        },
        {
            name: "Inquiries",
            key: "inquiries",
            icon: <BsPersonFillAdd size={20} />,
            selectedIcon: <BsPersonFillAdd color="#CF166F" size={20} />,
        },
        {
            name: "Membership Plans",
            key: "membership-plans",
            icon: <MdCardMembership size={20} />,
            selectedIcon: <MdCardMembership color="#CF166F" size={20} />,
        },
        {
            name: "Reviews",
            key: "reviews",
            icon: <BiMessageRoundedDetail size={20} />,
            selectedIcon: <BiMessageRoundedDetail color="#CF166F" size={20} />,
        },
        {
            name: "Google My Business",
            key: "google-my-business",
            icon: <FaCode size={20} />,
            selectedIcon: <FaCode color="#CF166F" size={20} />,
        },
    ];

    return (
        <div className="flex flex-col md:flex-row h-fit w-fit">
            <button
                className="md:hidden p-2 bg-pink-500 text-white rounded-md w-fit"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? <FaCaretLeft /> : <FaCaretRight />}
            </button>
            <div
                className={`bg-white md:mt-0 mt-4 text-black flex flex-col p-3 border-2 font-poppins w-fit md:w-[220px] rounded-xl transition-all duration-300 ease-in-out ${
                    isSidebarOpen ? "block" : "hidden"
                } md:block`}
            >
                <div className="md:space-y-3 flex md:flex-col gap-2 md:gap-0 flex-wrap items-center md:items-start">
                    {sidebarItems
                        .filter(
                            (item) =>
                                !item.visibleFor ||
                                item.visibleFor === vendorType
                        )
                        .map((item) => (
                            <div
                                key={item.name}
                                className={`cursor-pointer flex md:w-full items-center space-x-2 p-2 rounded-md transition-colors duration-300 ease-in-out ${
                                    location.pathname
                                        .toString()
                                        .split("/")[2] === item.key
                                        ? "bg-[#CF166F0D] text-[#CF166F]"
                                        : "hover:bg-pink-100"
                                }`}
                                onClick={() => handleItemClick(item.name)}
                            >
                                {location.pathname.toString().split("/")[2] ===
                                item.key
                                    ? item.selectedIcon
                                    : item.icon}
                                <span className="text-sm md:text-base font-medium">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar1;
