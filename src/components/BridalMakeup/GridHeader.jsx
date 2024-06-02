import React from 'react';
import { FaCaretDown, FaSearch } from 'react-icons/fa'; // Importing FaCaretDown and FaSearch icons

const GridHeader = () => {
  return (
    <div className="bg-purple-50 w-full flex flex-col md:flex-row items-center justify-between px-4 py-2 my-10 space-y-4 md:space-y-0">
      <div className="flex items-center w-full md:w-auto">
        <div className="relative w-full md:w-[490px]">
          <input
            type="text"
            placeholder="Search articles"
            className="w-full h-[40px] rounded-xl border border-pink-500 focus:outline-none focus:ring-2 ring-[#FF8DA6] pl-10 pr-16"
            style={{ padding: '7px 10px' }}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            <FaSearch className="text-gray-400" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-8 w-full md:w-auto space-y-4 md:space-y-0">
        <span className="w-full md:w-[300px] bg-gradient-to-r from-[#FF8DA6] to-[#c2bfc1] text-white px-4 text-left py-2 rounded-xl hover:bg-pink-600 transition-colors duration-300 flex justify-between items-center">
          <span>Wedding Vendors</span> 
          <FaCaretDown className="inline ml-2" />
        </span>
        
        <button className="w-full md:w-[300px] text-left bg-gradient-to-r from-[#FF8DA6] to-[#c2bfc1] text-white px-4 py-2 rounded-xl hover:bg-pink-600 transition-colors duration-300 flex justify-between items-center">
          <span>Select City</span> 
          <FaCaretDown className="inline ml-2" />
        </button>
      </div>
    </div>
  );
};

export default GridHeader;
