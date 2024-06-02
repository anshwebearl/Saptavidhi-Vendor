import React from "react";

const Card6 = ({ src, name }) => {
  return (
    <div className="relative flex flex-col shadow-md w-full md:w-[48%] mb-4 md:mb-3 md:mr-2 overflow-hidden rounded-xl h-[200px]">
        <img src={src} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h3 className="text-white text-md md:text-lg font-bold">{name}</h3>
        </div>
    </div>
  );
};

export default Card6;
