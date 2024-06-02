import React from "react";
import Card2 from "./Card2";

const CardWrapper2Container = ({ images }) => {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4 ">
      {images.map((image, index) => (
        <Card2 key={index} {...image} />
      ))}
    </div>
  );
};

export default CardWrapper2Container;