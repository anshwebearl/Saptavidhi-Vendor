import React from "react";

const Card3 = ({ src, description }) => {
  return (
    <>
      <div className="shadow-md flex-shrink-0 w-[200px] h-auto overflow-hidden rounded-3xl">
        <div className="overflow-hidden h-[100px] w-full">
          <img
            src={src}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-[5px] bg-[#ff8da64a]">
          <h3 className="text-sm font-semibold text-center">{description}</h3>
        </div>
      </div>
    </>
  );
};

export default Card3;
