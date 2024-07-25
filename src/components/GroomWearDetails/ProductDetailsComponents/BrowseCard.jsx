import React from 'react';
import locationicon from '../../../assets/images/ProductDetailsImages/location.png'
import vegIcon from '../../../assets/images/ProductDetailsImages/vegicon.png'
import nonVegIcon from '../../../assets/images/ProductDetailsImages/nonvegicon.png'

const BrowseCard = ({ src, title, subtitle, location, detailsArray, priceVeg, priceNonVeg }) => {
    return (
        <div className="mx-[10px] my-[20px] bg-white rounded-[20px] border-gray-400 flex border items-center">
          <div className="relative px-[8px]">
            <img className="object-cover w-[100px] h-[100px] rounded-[10px] " src={src} alt="Venue" />
            <div className="absolute top-4 right-4 bg-[#ffffff80] rounded-lg py-[2px] px-[5px] shadow-md flex items-center space-x-1 text-[6px]">
              <span className="text-yellow-500 text-[12px] font-semibold">★</span>
              <span className="text-black text-[12px] font-semibold">4.9</span>
            </div>
          </div>
          <div className="p-1 ">
            <h2 className="text-[15px] font-semibold">{title}</h2>
            <p className="text-gray-600 mb-1 g text-[13px]">{subtitle}</p>
            <p className="text-gray-600 flex items-center text-[10px]">
              <img src={locationicon} className="text-gray-600 mr-1 h-3" /> {location}
            </p>
            <hr className='my-[8px] border border-gray-400' />
            <div className="flex justify-start items-center flex-wrap mb-2 space-x-2">
              <span className="border-[1px] border-gray-400 rounded text-gray-700 text-[10px] px-[6px] py-[3px] mb-1 md:mb-0">100-2000 Pax</span>
              <span className="border-[1px] border-gray-400 rounded text-gray-700 text-[10px] px-[6px] py-[3px] mb-1 md:mb-0">152 Rooms</span>
              <span className="border-[1px] border-gray-400 rounded text-gray-700 text-[10px] px-[6px] py-[3px]  mb-1 md:mb-0">152 Rooms</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={nonVegIcon} alt="red" className="w-3 h-3" />
              <span className="text-black-500 font-semibold text-xs">₹2,000</span>
              <div className="mx-4"></div> 
              <img src={vegIcon} alt="green" className="w-3 h-3" />
              <span className="text-black-500 font-semibold text-xs">₹2,000</span>
            </div>
          </div>
        </div>
      );
};

export default BrowseCard;
