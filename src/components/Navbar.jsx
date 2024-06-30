import React, { useState, useEffect, useRef, useContext } from "react";
import { FaCaretDown, FaCaretUp, FaBars } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
    const { user, setUser } = useContext(UserContext);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const servicesDropdownRef = useRef(null);
    const servicesButtonRef = useRef(null);
    const dropdownRef = useRef(null);
    const dropdownButtonRef = useRef(null);
    const navigate = useNavigate();

    const toggleServicesDropdown = () => {
        setIsServicesDropdownOpen((prev) => !prev);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (
            servicesDropdownRef.current &&
            !servicesDropdownRef.current.contains(event.target) &&
            !servicesButtonRef.current.contains(event.target)
        ) {
            setIsServicesDropdownOpen(false);
        }
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            !dropdownButtonRef.current.contains(event.target)
        ) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        setUser(null);
        // document.cookie = "token=;";
        localStorage.clear();
        navigate("/");
    };

    const handleNavigation = (path) => {
        navigate(path);
        setIsServicesDropdownOpen(false);
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="bg-transparent py-2 mx-5 md:mx-0 flex flex-row justify-between items-center font-poppins">
            <div className="w-[100px] md:w-[120px] bg-cover mr-4 md:mr-8">
                <img
                    src={logo}
                    alt="Logo"
                    style={{ width: "100%", height: "auto", cursor: "pointer" }}
                    onClick={() => navigate("/")}
                />
            </div>
            <button className="md:hidden text-2xl" onClick={toggleMobileMenu}>
                <FaBars />
            </button>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${
                    isMobileMenuOpen ? "block" : "hidden"
                } md:hidden`}
                onClick={toggleMobileMenu}
            ></div>
            <nav
                className={`fixed top-0 right-0 h-full bg-white z-50 ${
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 md:relative md:transform-none md:flex md:items-center`}
            >
                <div className="flex flex-col md:flex-row md:items-center md:gap-6 h-full md:h-auto">
                    <Link
                        to="/"
                        className="font-poppins font-semibold text-sm leading-[24px] p-4 md:p-0"
                    >
                        Home
                    </Link>
                    <Link
                        to="/createwedding"
                        className="font-poppins font-semibold text-sm leading-[24px] p-4 md:p-0"
                    >
                        Create a Wedding
                    </Link>
                    <div className="relative font-poppins font-semibold text-sm leading-[24px] p-4 md:p-0">
                        <button
                            ref={servicesButtonRef}
                            onClick={toggleServicesDropdown}
                            className="flex items-center"
                        >
                            Services{" "}
                            {isServicesDropdownOpen ? (
                                <FaCaretUp className="text-[#CF166F]" />
                            ) : (
                                <FaCaretDown className="text-[#CF166F]" />
                            )}
                        </button>
                        {isServicesDropdownOpen && (
                            <div
                                ref={servicesDropdownRef}
                                className="absolute top-full mt-2 bg-white rounded-[30px] p-6 shadow-lg w-[200px] z-50 right-0"
                            >
                                <div
                                    onClick={() =>
                                        handleNavigation(
                                            "/vendors/venues/all-venues"
                                        )
                                    }
                                    className="mb-4 cursor-pointer font-poppins font-medium text-[16px] leading-[24px]"
                                >
                                    Venues
                                </div>
                                <div
                                    onClick={() =>
                                        handleNavigation("/photographers")
                                    }
                                    className="mb-4 cursor-pointer font-poppins font-medium text-[16px] leading-[24px]"
                                >
                                    Photographers
                                </div>
                                <div
                                    onClick={() => handleNavigation("/wear")}
                                    className="mb-4 font-poppins cursor-pointer font-medium text-[16px] leading-[24px]"
                                >
                                    Bridal Wear
                                </div>
                                <div
                                    onClick={() => handleNavigation("/wear")}
                                    className="mb-4 font-poppins cursor-pointer font-medium text-[16px] leading-[24px]"
                                >
                                    Groom Wear
                                </div>
                                <div
                                    onClick={() => handleNavigation("/makeup")}
                                    className="mb-4 font-poppins cursor-pointer font-medium text-[16px] leading-[24px]"
                                >
                                    Makeup
                                </div>
                                <div
                                    onClick={() =>
                                        handleNavigation("/decorators")
                                    }
                                    className="mb-4 font-poppins cursor-pointer font-medium text-[16px] leading-[24px]"
                                >
                                    Decorators
                                </div>
                                <div
                                    onClick={() =>
                                        handleNavigation("/smalldecoration")
                                    }
                                    className="mb-4 font-poppins cursor-pointer font-medium text-[16px] leading-[24px]"
                                >
                                    Small Function
                                </div>
                                <div
                                    onClick={() =>
                                        handleNavigation("/einvites")
                                    }
                                    className="mb-4 font-poppins cursor-pointer font-medium text-[16px] leading-[24px]"
                                >
                                    E-invites
                                </div>
                            </div>
                        )}
                    </div>
                    <Link
                        to="/plans"
                        className="font-poppins font-semibold text-sm leading-[24px] p-4 md:p-0"
                    >
                        Our Plans
                    </Link>
                    <Link
                        to="/contactus"
                        className="font-poppins font-semibold text-sm leading-[24px] p-4 md:p-0"
                    >
                        Contact Us
                    </Link>
                    {!user ? (
                        <div className="relative p-4 md:p-0">
                            <div
                                className="bg-gradient-to-r from-[#5C0340] to-[#CF166F] text-white px-3 py-1 cursor-pointer w-fit rounded-full font-extrabold text-sm"
                                onClick={() => navigate("/login")}
                            >
                                Log in
                            </div>
                        </div>
                    ) : (
                        <div className="relative flex flex-col p-4 md:p-0">
                            <button
                                ref={dropdownButtonRef}
                                onClick={toggleDropdown}
                                className="flex items-center font-poppins font-medium text-[16px] leading-[24px] text-[#CF166F]"
                            >
                                {user?.contact_person_name}{" "}
                                {isDropdownOpen ? (
                                    <FaCaretUp className="ml-2 text-[#CF166F]" />
                                ) : (
                                    <FaCaretDown className="ml-2 text-[#CF166F]" />
                                )}
                            </button>
                            {isDropdownOpen && (
                                <div
                                    ref={dropdownRef}
                                    className="absolute top-full mt-2 bg-white rounded-[30px] p-6 shadow-lg w-[200px] z-50 right-0"
                                >
                                    <div
                                        onClick={() =>
                                            handleNavigation("/einvites")
                                        }
                                        className="mb-4 cursor-pointer font-poppins font-medium text-[16px] leading-[24px]"
                                    >
                                        {user?.contact_person_name}
                                    </div>
                                    <div
                                        onClick={() =>
                                            handleNavigation("/joinwedding")
                                        }
                                        className="mb-4 cursor-pointer font-poppins font-medium text-[16px] leading-[24px]"
                                    >
                                        Join a Wedding
                                    </div>
                                    <div
                                        onClick={() =>
                                            handleNavigation("/profile")
                                        }
                                        className="mb-4 cursor-pointer font-poppins font-medium text-[16px] leading-[24px]"
                                    >
                                        Profile Analysis
                                    </div>
                                    <div
                                        onClick={() =>
                                            handleNavigation("/inbox")
                                        }
                                        className="mb-4 cursor-pointer font-poppins font-medium text-[16px] leading-[24px]"
                                    >
                                        Inbox
                                    </div>
                                    <div
                                        onClick={() =>
                                            handleNavigation("/bookings")
                                        }
                                        className="mb-4 cursor-pointer font-poppins font-medium text-[16px] leading-[24px]"
                                    >
                                        Bookings
                                    </div>
                                    <div
                                        onClick={() =>
                                            handleNavigation("/settings")
                                        }
                                        className="mb-4 cursor-pointer font-poppins font-medium text-[16px] leading-[24px]"
                                    >
                                        Settings
                                    </div>
                                    <div
                                        onClick={() =>
                                            handleNavigation("/downloadapp")
                                        }
                                        className="mb-4 cursor-pointer font-poppins font-medium text-[16px] leading-[24px]"
                                    >
                                        Download App
                                    </div>
                                    <div
                                        onClick={() =>
                                            handleNavigation("/forgotpassword")
                                        }
                                        className="mb-4 cursor-pointer font-poppins font-medium text-[16px] leading-[24px]"
                                    >
                                        Change Password
                                    </div>
                                    <div
                                        onClick={handleLogout}
                                        className="mb-4 cursor-pointer font-poppins font-medium text-[16px] leading-[24px] text-[#CF166F]"
                                    >
                                        Log Out
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
