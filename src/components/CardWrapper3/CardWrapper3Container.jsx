import React from "react";
import Card3 from "./Card3";

const CardWrapper3Container = ({ images }) => {

  return (
    <div className="flex flex-row space-x-4  overflow-x-scroll p-4 ">
      {images.map((image, index) => (
        <Card3 key={index} {...image} />
      ))}
    </div>
  );
};

export default CardWrapper3Container;