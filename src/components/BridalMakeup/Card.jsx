import React from "react";

const Card = ({ src, description }) => {
  return (
    <div className="flex flex-col items-center justify-between shadow-md w-[200px] h-auto rounded-3xl">
      <div className="overflow-hidden w-full">
        <img src={src} alt={description} className="w-full" />
      </div>
      <div className="p-2 bg-white w-full">
        <h3 className="text-sm font-semibold mb-2 text-center">{description}</h3>
      </div>
    </div>
  );
};

export default Card;
