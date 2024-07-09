/* eslint-disable react/prop-types */
import React, { useState } from "react";
import message from "../../../assets/images/ProductDetailsImages/message.png";
import contact from "../../../assets/images/ProductDetailsImages/Contact.png";
import gallery from "../../../assets/images/ProductDetailsImages/gallery.png";
import heart from "../../../assets/images/ProductDetailsImages/heart.png";
import location from "../../../assets/images/ProductDetailsImages/location.png";
import review from "../../../assets/images/ProductDetailsImages/review.png";
import share from "../../../assets/images/ProductDetailsImages/share.png";
import { ImCross } from "react-icons/im";
import { HiMail } from "react-icons/hi";
import { PiPhoneDisconnectBold } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";

const BASE_IMAGE_URL = import.meta.env.DEV
    // ? import.meta.env.VITE_IMAGE_URL_DEV
    ? "http://127.0.0.1:8000"
    : import.meta.env.VITE_IMAGE_URL_PROD;

function ProductDetailsBanner({
    brand_name,
    city,
    state,
    cover_photo,
    address,
    email,
    mobile_number,
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="border-2 rounded-[30px] shadow-lg overflow-hidden z-20 mb-9 md:mb-2">
                <div className="h-[200px] md:h-[500px] overflow-hidden rounded-[30px] relative">
                    <img
                        src={`${BASE_IMAGE_URL}/${cover_photo}`}
                        alt="Club Mahindra Kensville Gold Resort"
                        className="w-full h-full object-cover object-bottom"
                    />
                </div>

                <ContactModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    email={email}
                    phone={mobile_number}
                    address={address}
                />
            </div>
            <div className=" bg-white md:px-6 md:py-6 rounded-b-[15px] px-4 py-3 border-2 shadow-lg border-t-0 flex flex-col gap-3 -mt-16 md:flex-row justify-between sticky top-0 z-10">
                <div className="flex flex-col gap-2">
                    <h2 className=" text-lg md:text-2xl font-bold capitalize
                    ">
                        {brand_name}
                    </h2>
                    <div className="flex items-center gap-2 text-gray-700 text-xs md:text-sm border-2 rounded-2xl w-fit p-1 md:px-5 md:py-2">
                        <img
                            src={location}
                            alt="Location"
                            className="h-[10px] md:h-[16px] w-auto"
                        />
                        {city}, {state}
                    </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-3 md:gap-5">
                    <div className="flex flex-row gap-2 md:gap-4 bg-white justify-end">
                        <div
                            onClick={() => {
                                const element =
                                    document.getElementById("messageSection");
                                element.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                        >
                            <button className="bg-gradient-to-r from-[#fd070789] to-[#5c034089] text-white py-2 px-2 md:px-4 md:py-2  rounded-2xl hover:bg-pink-600 flex items-center gap-2 font-semibold text-xs md:text-base">
                                <img
                                    src={message}
                                    alt="Message"
                                    className="w-3 md:w-5 h-3 md:h-5"
                                />
                                Send Message
                            </button>
                        </div>
                        <button
                            className="bg-gradient-to-r from-[#0b07fd82] to-[#5c034080] text-white py-2 px-2 md:px-4 md:py-2 rounded-2xl hover:bg-purple-600 flex items-center gap-2 font-semibold text-xs md:text-base"
                            onClick={handleOpenModal}
                        >
                            <img
                                src={contact}
                                alt="Contact"
                                className="w-3 md:w-5 h-3 md:h-5"
                            />
                            View Contact
                        </button>
                    </div>
                    <div className="flex justify-around w-full md:w-fit text-gray-700 gap-3 md:gap-5 text-xs md:text-base">
                        <div
                            className="cursor-pointer flex items-center"
                            onClick={() => {
                                const element =
                                    document.getElementById("gallerySection");
                                element.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                        >
                            <img
                                src={gallery}
                                alt="Photos"
                                className="mr-2 w-3 md:w-4"
                            />
                            Photos
                        </div>
                        <span className="cursor-pointer flex items-center border-l border-gray-500 pl-2 md:pl-3">
                            <img
                                src={heart}
                                alt="Shortlist"
                                className="mr-2 w-3 md:w-4"
                            />
                            Shortlist
                        </span>
                        <span className="cursor-pointer flex items-center border-l border-gray-500 pl-2 md:pl-3">
                            <img
                                src={review}
                                alt="Review"
                                className="mr-2 w-3 md:w-4"
                            />
                            Review
                        </span>
                        <span className="cursor-pointer flex items-center border-l border-gray-500 pl-2 md:pl-3">
                            <img
                                src={share}
                                alt="Share"
                                className="mr-2 w-3 md:w-4"
                            />
                            Share
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetailsBanner;

const ContactModal = ({ isOpen, onClose, email, phone, address }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 w-full">
            <div className="bg-white rounded-lg shadow-lg w-[90%] md:w-[500px] flex flex-col">
                <div className="bg-[#CF166F1A] px-3 py-2 md:px-6 md:py-3 flex justify-between items-center">
                    <h2 className="text-lg md:text-2xl font-bold text-[#CF166F]">
                        Contact Information
                    </h2>
                    <button
                        className=" bg-[#CF166F] p-[5px] flex items-center justify-center rounded-full hover:bg-[#aa346d]"
                        onClick={onClose}
                    >
                        <ImCross size={12} color="white" />
                    </button>
                </div>
                <div className="flex flex-col gap-3  px-6 py-3 ">
                    <div>
                        <div className="flex items-center gap-2">
                            <HiMail color={"#CF166F"} size={24} />
                            <p className="text-[#CF166F] font-[500] md:text-lg text-base">
                                Email
                            </p>
                        </div>
                        <p className="text-gray-600 font-[600] ml-3">{email}</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <PiPhoneDisconnectBold
                                color={"#CF166F"}
                                size={24}
                            />
                            <p className="text-[#CF166F] font-[500] md:text-lg text-base">
                                Phone
                            </p>
                        </div>
                        <p className="text-gray-600 font-[600] ml-3">{phone}</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <IoLocationSharp color={"#CF166F"} size={22} />
                            <p className="text-[#CF166F] font-[500] md:text-lg text-base">
                                Email
                            </p>
                        </div>
                        <p className="text-gray-600 font-[600] ml-3">
                            {address}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
