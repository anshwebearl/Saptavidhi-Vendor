import React from 'react';
import bannerImage from '../assets/images/banner-image.jpeg'; // Import your banner image

const Banner = () => {
    return (
        <div className="relative flex flex-col items-center justify-center">
            <div className="banner-image-container">
                <img
                    src={bannerImage}
                    alt="Banner"
                    className="banner-image"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            </div>
            <div className="absolute text-white text-center">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Your <span className='font-satisfy'>Wedding</span>, Your <span className='font-satisfy'>Way</span></h1>
                    <p className="text-sm md:text-xl mb-8 mx-3">
                        Find the best wedding vendors with thousands of trusted reviews
                    </p>
                </div>
                <div className="flex flex-row gap-4 p-2 bg-white/20 backdrop-blur-sm rounded-full w-fit mx-auto">
                    <button className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#FF8DA6] to-[#c2bfc1] rounded-full text-sm"> {/* Reduced padding and font size */}
                        <span className="text-white">Select Vendor Type</span>
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#FF8DA6] to-[#c2bfc1] rounded-full text-sm"> {/* Reduced padding and font size */}
                        <span className="text-white">Select City</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
