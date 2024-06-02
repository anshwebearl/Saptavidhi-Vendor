import React from "react";

const Card5 = ({ src, date, title, description, author }) => {
  return (
    <div className="font-poppins flex shadow-md flex-shrink-0  w-[300px] h-[200px] overflow-hidden rounded-3xl">
      <div className="h-[150px] w-[120px] md:w-[200px] md:h-[200px] overflow-hidden">
        <img src={src} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col justify-between p-2 md:p-4 w-fit md:w-[400px]">
        <div className="flex flex-col gap-1 md:gap-2">
          <p className="text-gray-500 text-xs md:text-sm">
            <span className="mr-2">📅</span>
            {date}
          </p>
          <h3 className="text-base md:text-lg font-bold">{title}</h3>
          <p className="text-gray-700 text-xs md:text-sm">{description}</p>
          <div className="border-[1px] border-[#7a7a7a72]"></div>
        </div>
        <div className="flex items-center justify-end mt-2">
          <img
            src={author.image}
            alt={author.name}
            className="w-6 h-6 rounded-full mr-2"
          />
          <span className="text-gray-700 text-sm">{author.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Card5;