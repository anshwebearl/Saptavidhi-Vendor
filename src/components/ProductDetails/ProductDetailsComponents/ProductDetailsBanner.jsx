/* eslint-disable react/prop-types */
import React from "react";
import message from "../../../assets/images/ProductDetailsImages/message.png";
import contact from "../../../assets/images/ProductDetailsImages/Contact.png";
import gallery from "../../../assets/images/ProductDetailsImages/gallery.png";
import heart from "../../../assets/images/ProductDetailsImages/heart.png";
import location from "../../../assets/images/ProductDetailsImages/location.png";
import review from "../../../assets/images/ProductDetailsImages/review.png";
import share from "../../../assets/images/ProductDetailsImages/share.png";
import image1 from "../../../assets/images/ProductDetailsImages/image1.jpeg";

const BASE_IMAGE_URL = import.meta.env.DEV
    ? import.meta.env.VITE_IMAGE_URL_DEV
    : import.meta.env.VITE_IMAGE_URL_PROD;

function ProductDetailsBanner({ property_name, city, state, cover_photo }) {
    return (
        <div className="border-2 rounded-[30px] shadow-lg overflow-hidden">
            <div className=" h-[200px] md:h-[500px] overflow-hidden rounded-[30px] relative">
                <img
                    src={`${BASE_IMAGE_URL}/${cover_photo}`}
                    alt="Club Mahindra Kensville Gold Resort"
                    className="w-full h-full object-cover object-bottom"
                />
            </div>
            <div className="md:px-6 md:py-4 px-4 py-5 flex flex-col gap-3 md:flex-row justify-between">
                <div className="flex flex-col gap-2">
                    <h2 className=" text-lg md:text-2xl font-bold">
                        {property_name}
                    </h2>
                    <div className="flex items-center gap-2 text-gray-700 text-xs md:text-base border-2 rounded-[8px] w-fit p-1 md:p-2">
                        <img
                            src={location}
                            alt="Location"
                            className="h-[10px] md:h-[16px] w-auto"
                        />
                        Ahmedabad, Gujarat
                    </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-3 md:gap-5">
                    <div className="flex flex-row gap-2 md:gap-4 bg-white justify-end">
                        <button className="bg-gradient-to-r from-[#fd070789] to-[#5c034089] text-white py-1 px-2 md:px-4 rounded-[8px] hover:bg-pink-600 flex items-center gap-2 text-xs md:text-base">
                            <img
                                src={message}
                                alt="Message"
                                className="w-3 md:w-5 h-3 md:h-5"
                            />
                            Send Message
                        </button>
                        <button className="bg-gradient-to-r from-[#0b07fd82] to-[#5c034080] text-white py-1 px-2 md:px-4 rounded-[8px] hover:bg-purple-600 flex items-center gap-2 text-xs md:text-base">
                            <img
                                src={contact}
                                alt="Contact"
                                className="w-3 md:w-5 h-3 md:h-5"
                            />
                            View Contact
                        </button>
                    </div>
                    <div className="flex justify-around w-full md:w-fit text-gray-700 gap-3 md:gap-5 text-xs md:text-base">
                        <span className="cursor-pointer flex items-center">
                            <img
                                src={gallery}
                                alt="Photos"
                                className="mr-2 w-3 md:w-4"
                            />
                            Photos
                        </span>
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
        </div>
    );
}

export default ProductDetailsBanner;
