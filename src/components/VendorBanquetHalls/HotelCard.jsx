import React from 'react';
import { FaCalendar } from 'react-icons/fa';

const HotelCard = () => {
  return (
    <div className="max-w-xl rounded-2xl overflow-hidden shadow-lg font-poppins mx-auto my-4 border-[1px] sm:flex">
      <div className="w-full sm:w-1/3">
        <img className="w-full h-full object-cover" src="hotel.jpeg" alt="Hotel" />
      </div>
      <div className="w-full sm:w-2/3 p-4 flex flex-col justify-between">
        <div>
          <div className="text-sm text-gray-500 mb-2 flex items-center">
            <FaCalendar className="text-gray-600 mr-1" /> <p className='text-black text-xs'>02/01/2024</p>
          </div>
          <div className="font-semibold text-sm text-left mb-2">Hotel Raj Bagh Palace</div>
          <p className="text-gray-700 text-xs text-left">
            It's very good experience such a luxury property near by nature very good rooms well maintained nice banquet sportive staff
          </p>
          <hr className='mt-2'/>
        </div>
        <div className="flex items-center mt-4">
          <img className="w-5 h-5 rounded-full mr-4" src="johndoe.jpeg" alt="Avatar" />
          <div className="text-xs flex space-x-40">
            <p className="text-gray-400 leading-none text-left -ml-2">Jhone Doe</p>
            <a href="#" className="text-gray-500 underline text-right">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;






