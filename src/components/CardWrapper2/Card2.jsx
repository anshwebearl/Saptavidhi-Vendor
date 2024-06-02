import React from "react";

const Card2 = ({ src, tag, name, description }) => {
  const truncateDescription = (text, length) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
  };

  return (
    <div className="shadow-md flex-shrink-0 w-[300px] h-auto  overflow-hidden rounded-3xl">
      <div className="relative overflow-hidden h-[150px] ">
        <img
          src={src}
          alt={name}
        />
        <span className="absolute top-2 right-2 bg-[#ffa8babb] rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {tag}
        </span>
      </div>
      <div className="p-4 bg-[#ff8da64a]">
        <h3 className="text-[13px] font-bold mb-2">{name}</h3>
        <p className="text-gray-700 text-[12px]">
          {truncateDescription(description, 100)} {/* Adjust length as needed */}
          <a href="#" className="text-[#fe819c] ">Read more</a>
        </p>
      </div>
    </div>
  );
};

export default Card2;
