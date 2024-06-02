import React from "react";
import Card from "./Card";

const CardWrapperContainer = ({ images }) => {

  return (
    <div className="flex flex-row space-x-4  p-4 ">
      {images.map((image, index) => (
        <Card key={index} {...image} />
      ))}
    </div>
  );
};

export default CardWrapperContainer;