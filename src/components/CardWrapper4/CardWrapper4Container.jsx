import React from "react";
import Card4 from "./Card4";

const CardWrapper4Container = ({ images }) => {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4" >
      {images.map((image, index) => (
        <Card4 key={index} {...image} />
      ))}
    </div>
  );
};

export default CardWrapper4Container;
