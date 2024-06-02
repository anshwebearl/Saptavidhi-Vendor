import React from "react";
import Card8 from "./Card8";

function CardWrapper8Container({ cards }) {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {cards.map((card, index) => (
        <Card8
          key={index}
          src={card.src}
          title={card.title}
          locations={card.locations}
        />
      ))}
    </div>
  );
}

export default CardWrapper8Container;