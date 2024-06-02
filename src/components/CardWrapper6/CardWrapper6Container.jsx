import React from "react";
import Card6 from "./Card6";

const CardWrapper6Container = ({ images }) => {
  return (
    <div className="flex flex-wrap justify-between p-2 md:p-4">
      {images.map((image, index) => (
        <Card6 key={index} {...image} />
      ))}
    </div>
  );
};

export default CardWrapper6Container;
