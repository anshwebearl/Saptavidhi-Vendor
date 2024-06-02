import React from "react";

const Card4 = ({ src, name, address, price, rating }) => {
  return (
    <div className="shadow-md flex-shrink-0 w-[270px] h-auto overflow-hidden rounded-3xl ">
      <div className="relative overflow-hidden h-[150px]">
        <img src={src} alt={name}  />
        <div className="absolute top-2 right-2 bg-[#ffc9d4] rounded-full px-3 py-[1px] flex items-center ">
          <span className="text-yellow-500 mr-1 text-[20px]">★</span>
          <span className="text-gray-700 text-[11px] ">{rating}</span>
        </div>
      </div>
      <div className="p-4 bg-[#ff8da64a]">
        <h3 className="text-[13px] font-bold mb-1">{name}</h3>
        <p className="text-gray-700 text-[11px] mb-1">{address}</p>
        <p className="text-[#ff466e] text-[12px] font-bold mb-1">{price}</p>
      </div>
    </div>
  );
};

export default Card4;
