import React, { useState, useEffect, useRef } from 'react';
import { FaCaretDown, FaCaretUp, FaBars } from 'react-icons/fa';
import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const Navbar = () => {
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const servicesDropdownRef = useRef(null);
    const dropdownRef = useRef(null);
    const navigate = useNavigate(null);

    const toggleServicesDropdown = () => {
        setIsServicesDropdownOpen(!isServicesDropdownOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
            setIsServicesDropdownOpen(false);
        }
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
        setIsServicesDropdownOpen(false);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="bg-transparent m-auto py-2 flex flex-row justify-between items-center px-4 md:px-8">
            <div className="w-[100px] md:w-[150px] bg-cover mr-4 md:mr-8">
                <img src={logo} alt="Logo" style={{ width: '100%', height: 'auto' }} />
            </div>
            <button
                className="md:hidden text-2xl"
                onClick={toggleMobileMenu}
            >
                <FaBars />
            </button>
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} onClick={toggleMobileMenu}></div>
            <nav className={`fixed top-0 right-0 h-full bg-white z-50 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:relative md:transform-none md:flex md:items-center`}>
                <div className="flex flex-col md:flex-row md:items-center h-full md:h-auto">
                    <div href="#" className="font-poppins font-medium text-[16px] leading-[24px] mr-8 p-4 md:p-0"><Link to="/home">Home</Link></div>
                    <div href="#" className="font-poppins font-medium text-[16px] leading-[24px] mr-8 p-4 md:p-0"><Link to="/createwedding">Create a Wedding </Link></div>
                    <div className="relative font-poppins font-medium text-[16px] leading-[24px] mr-8 p-4 md:p-0">
                        <button onClick={toggleServicesDropdown} className="flex items-center">
                            Services {isServicesDropdownOpen ? <FaCaretUp className="ml-2 text-[#CF166F]" /> : <FaCaretDown className="ml-2 text-[#CF166F]" />}
                        </button>
                        {isServicesDropdownOpen && (
                            <div ref={servicesDropdownRef} className="absolute top-full mt-2 bg-white rounded-[30px] p-6 shadow-lg w-[200px] z-50">
                                <div onClick={() => handleNavigation('/venues')} to='/venues' className="mb-4 cursor-pointer font-poppins font-medium text-[16px] leading-[24px]">Venues</div >
                                <div onClick={() => handleNavigation('/photographers')}  className="mb-4 cursor-pointer font-poppins font-medium text-[16px] leading-[24px]">Photographers</div >
                                <div onClick={() => handleNavigation('/wear')} className="mb-4 font-poppins cursor-pointer font-medium text-[16px] leading-[24px]">Bridal Wear</div >
                                <div onClick={() => handleNavigation('/wear')} className="mb-4 font-poppins cursor-pointer font-medium text-[16px] leading-[24px]">Groom Wear</div >
                                <div onClick={() => handleNavigation('/makeup')} className="mb-4 font-poppins cursor-pointer font-medium text-[16px] leading-[24px]">Makeup</div >
                                <div onClick={() => handleNavigation('/decorators')} className="mb-4 font-poppins cursor-pointer font-medium text-[16px] leading-[24px]">Decorators</div >
                                <div onClick={() => handleNavigation('/smalldecoration')} className="mb-4 font-poppins cursor-pointer font-medium text-[16px] leading-[24px]">Small Function</div >
                                <div onClick={() => handleNavigation('/einvites')} className="mb-4 font-poppins cursor-pointer font-medium text-[16px] leading-[24px]">E-invites</div >
                                




                            </div>
                        )}
                    </div>
                    <Link to="/plans" className="font-poppins font-medium text-[16px] leading-[24px] mr-8 p-4 md:p-0">Our Plans</Link>
                    <Link to="/contactus" className="font-poppins font-medium text-[16px] leading-[24px] mr-8 p-4 md:p-0">Contact Us</Link>
                    <div className="relative flex flex-col p-4 md:p-0">
                        <button onClick={toggleDropdown} className="flex items-center font-poppins font-medium text-[16px] leading-[24px] text-[#CF166F]">
                            Saathi R. {isDropdownOpen ? <FaCaretUp className="ml-2 text-[#CF166F]" /> : <FaCaretDown className="ml-2 text-[#CF166F]" />}
                        </button>
                        {isDropdownOpen && (
                            <div ref={dropdownRef} className="absolute top-full mt-2 bg-white rounded-[30px] p-6 shadow-lg w-[300px] z-50">
                                <div onClick={() => handleNavigation('/einvites')}className="mb-4 cursor-pointer font-poppins cursor-pointer -medium text-[16px] leading-[24px]">Saathi Rathod</div>
                                <div onClick={() => handleNavigation('/joinwedding')}className="mb-4 cursor-pointer font-poppins font-medium text-[16px] leading-[24px]">Join a Wedding</div>
                                <div onClick={() => handleNavigation('/profile')}className="mb-4 cursor-pointer font-poppins font-medium text-[16px] leading-[24px]">Profile Analysis</div>
                                <div onClick={() => handleNavigation('/inbox')}className="mb-4 cursor-pointer font-poppins font-medium text-[16px] leading-[24px]">Inbox</div>
                                <div onClick={() => handleNavigation('/bookings')}className="mb-4 cursor-pointer font-poppins font-medium text-[16px] leading-[24px]">Bookings</div>
                                <div onClick={() => handleNavigation('/settings')}className="mb-4 cursor-pointer font-poppins font-medium text-[16px] leading-[24px]">Settings</div>
                                <div onClick={() => handleNavigation('/downloadapp')}className="mb-4 cursor-pointer font-poppins font-medium text-[16px] leading-[24px]">Download App</div>
                                <div onClick={() => handleNavigation('/changepassword')}className="mb-4 cursor-pointer font-poppins font-medium text-[16px] leading-[24px]">Change Password</div>
                                <div onClick={() => handleNavigation('/einvites')}className="mb-4 cursor-pointer font-poppins font-medium text-[16px] leading-[24px]">Logout</div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
