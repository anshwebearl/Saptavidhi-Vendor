import React from "react";

function Card1({ src, description }) {
  return (
    <div className="flex-shrink-0 w-[130px] md:w-[200px]">
      <img src={src} alt={description} className="rounded-[25px]" />
      <p className="mt-2 text-black font-semibold mx-2 text-[13px]">{description}</p>
    </div>
  );
}

export default Card1;
