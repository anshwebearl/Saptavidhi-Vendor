import React, { useState } from 'react';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa'; 

const Filter = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
  <div className="w-full lg:px-2 max-w-[1200px] py-5 font-poppins flex flex-col gap-5 mx-auto bg-[#f5f5f5] overflow-hidden">
  <h2 className="text-2xl font-semibold text-gray-800 mx-3 -my-2 text-left">Banquet Halls</h2>
  <p className="text-sm text-gray-500 mx-3 text-left">Showing 23,126 results as per your search criteria</p>
          <div className="bg-gradient-to-r from-[#FD070780] to-[#5C034080] focus:outline-none p-3 rounded-3xl mx-3 lg:px-2 lg:mx-2 w-fit lg:w-full">
            <div className="lg:hidden flex justify-between items-center">
              <button onClick={toggleMenu} className="text-white flex gap-2">
                {isOpen ? (
                  <>
                    <span className="font-[500]">Filter</span>
                    <FaCaretUp className="w-6 h-6" />
                  </>
                ) : (
                  <>
                    <span className="font-[500]">Filter</span>
                    <FaCaretDown className="w-6 h-6" />
                  </>
                )}
              </button>
            </div>
            <div
              className={`lg:flex flex-row flex-wrap gap-3 lg:justify-around ${
                isOpen ? "flex" : "hidden"
              } lg:block`}
            >
              <div className="mt-3 lg:mt-0">
                <select
                  name="type"
                  className="text-sm py-1 px-3 md:text-base md:py-2 md:px-5 rounded-xl text-[#797979]"
                >
                  <option value="" disabled selected>
                    No. of Guests
                  </option>
                  <option value="option 1">Type 1</option>
                  <option value="option 2">Type 2</option>
                  <option value="option 3">Type 3</option>
                </select>
              </div>
              <div className="mt-3 lg:mt-0">
                <select
                  name="Occasion"
                  className="text-sm py-1 px-3 md:text-base md:py-2 md:px-5 rounded-xl text-[#797979]"
                >
                  <option value="" disabled selected>
                    Price per plate 
                  </option>
                  <option value="option 1">Occasion 1</option>
                  <option value="option 2">Occasion 2</option>
                  <option value="option 3">Occasion 3</option>
                </select>
              </div>
              <div className="mt-3 lg:mt-0">
                <select
                  name="Price"
                  className="text-sm py-1 px-3 md:text-base md:py-2 md:px-5 rounded-xl text-[#797979]"
                >
                  <option value="" disabled selected>
                    Rental Cost
                  </option>
                  <option value="option 1">Price 1</option>
                  <option value="option 2">Price 2</option>
                  <option value="option 3">Price 3</option>
                </select>
              </div>
              <div className="mt-3 lg:mt-0">
                <select
                  name="city"
                  className="text-sm py-1 px-3 md:text-base md:py-2 md:px-5 rounded-xl text-[#797979]"
                >
                  <option value="" disabled selected>
                    Venue Type
                  </option>
                  <option value="option 1">City 1</option>
                  <option value="option 2">City 2</option>
                  <option value="option 3">City 3</option>
                </select>
              </div>
              <div className="mt-3 lg:mt-0">
                <select
                  name="brand"
                  className="text-sm py-1 px-3 md:text-base md:py-2 md:px-5 rounded-xl text-[#797979]"
                >
                  <option value="" disabled selected>
                    Space
                  </option>
                  <option value="option 1">Brand 1</option>
                  <option value="option 2">Brand 2</option>
                  <option value="option 3">Brand 3</option>
                </select>
              </div>
              <div className="mt-3 lg:mt-0">
                <select
                  name="colors"
                  className="text-sm py-1 px-3 md:text-base md:py-2 md:px-5 rounded-xl text-[#797979]"
                >
                  <option value="" disabled selected>
                    Room Count
                  </option>
                  <option value="option 1">Colors 1</option>
                  <option value="option 2">Colors 2</option>
                  <option value="option 3">Colors 3</option>
                </select>
              </div>
              <div className="mt-3 lg:mt-0">
                <select
                  name="fabric"
                  className="text-sm py-1 px-3 md:text-base md:py-2 md:px-5 rounded-xl text-[#797979]"
                >
                  <option value="" disabled selected>
                    Rating
                  </option>
                  <option value="option 1">Fabric 1</option>
                  <option value="option 2">Fabric 2</option>
                  <option value="option 3">Fabric 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Filter;