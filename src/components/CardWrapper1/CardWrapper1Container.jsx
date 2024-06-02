import React from "react";
import Card1 from "./Card1";

function CardWrapper1Container({ images }) {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4 ">
      {images.map((image, index) => (
        <Card1 key={index} src={image.src} description={image.description} />
      ))}
    </div>
  );
}

export default CardWrapper1Container;
