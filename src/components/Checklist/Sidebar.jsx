import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

const DropdownMenu = () => (
  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
    <ul>
      <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
        <input type="checkbox" className="mr-2" />
        <span>Option 1</span>
      </li>
      <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
        <input type="checkbox" className="mr-2" />
        <span>Option 2</span>
      </li>
      <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
        <input type="checkbox" className="mr-2" />
        <span>Option 3</span>
      </li>
    </ul>
  </div>
);

const ListItem = ({ text }) => {
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <div className="relative my-2 sm:w-full">
      <div className="flex items-center justify-between cursor-pointer bg-white px-2 py-1 rounded-md sm:px-4 sm:py-2" onClick={() => setIsDropdown(!isDropdown)}>
        <span>{text}</span>
        <FaCaretDown className="ml-1" />
      </div>
      {isDropdown && (
        <div className="mt-2 bg-white shadow rounded p-4">
          <div className="flex items-center mb-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-pink-500" id="opt1" />
            <label className="ml-2 text-gray-700" htmlFor="opt1">Browse and save outfit photos</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-pink-500" id="opt2" />
            <label className="ml-2 text-gray-700" htmlFor="opt2">Decide wedding budget</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-pink-500" id="opt3" />
            <label className="ml-2 text-gray-700" htmlFor="opt3">Research Venue options</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-pink-500" id="opt4" />
            <label className="ml-2 text-gray-700" htmlFor="opt4">Estimate guest count</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-pink-500" id="opt5" />
            <label className="ml-2 text-gray-700" htmlFor="opt5">Research Wedding Planners</label>
          </div>
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-full max-w-[1200px] font-poppins">
      <div className="flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 lg:w-1/4 h-auto lg:h-72 bg-white shadow-md rounded-xl border-gray-200 p-4 mb-4 border-2 my-10 mx-3">
            <ul className="space-y-6">
                <li>
                    <div className="flex items-center">
                        <span className="mr-2"></span>
                        <span className="text-[18px] font-medium">Wall</span>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <span className="mr-2"></span>
                        <span className="text-[18px] font-medium">Check List</span>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <span className="mr-2"></span>
                        <span className="text-[18px] font-medium">Shortlists</span>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <span className="mr-2"></span>
                        <span className="text-[18px] font-medium">Loves</span>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <span className="mr-2"></span>
                        <span className="text-[18px] font-medium">Finalized Vendors</span>
                    </div>
                </li>
            </ul>
        <button className="bg-gradient-to-r from-[#FF8DA6] to-[#c2bfc1] text-white px-5 py-2 rounded-xl mt-4 -ml-2 lg:mt-20 w-full lg:w-72">
            Invite Groom
        </button>
        </div>

        <div className="w-full sm:w-1 lg:w-2/3 bg-white shadow-md rounded-xl border-gray-200 p-4 mb-4 border-2 my-10 mx-3">
            <div className="text-lg font-semi bold"><ListItem text="1 Month to Go" /></div>
            <div className="text-lg font-semi bold"><ListItem text="2 Weeks to Go" /></div>
            <div className="text-lg font-semi bold"><ListItem text="1 week to Go" /></div>
            <div className="text-lg font-semi bold"><ListItem text="3 days to Go" /></div>
            <div className="text-lg font-semi bold"><ListItem text="0 day to go" /></div>
            <div className="text-lg font-semi bold"><ListItem text="Post Wedding" /></div>
            <div className="text-lg font-semi bold"><ListItem text="Completed" /></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
