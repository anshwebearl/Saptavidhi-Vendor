import { useState } from "react";
import Card5 from "./Card5";

const CardWrapper5Container = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numVisibleCards = window.screen.width>768 ? 2 : 1; // Number of visible cards at a time
  const cardWidth = window.screen.width>768 ? 310 : 200; // Width of each card
  const maxIndex = Math.ceil(images.length / numVisibleCards) - 1;

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const offset = -currentIndex * numVisibleCards * cardWidth;

  return (
    <div className="flex flex-col items-center p-3 md:p-5">
      <div className="overflow-hidden" style={{ width: `${numVisibleCards * cardWidth}px` }}>
        <div
          className="flex transition-transform duration-500 ease-in-out gap-3"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {images.map((image, index) => (
            <Card5 key={index} {...image} />
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={scrollLeft}
          className={`bg-white rounded-full p-2 shadow-md ${currentIndex === 0 && 'opacity-50 cursor-not-allowed'}`}
          disabled={currentIndex === 0}
        >
          ←
        </button>
        <button
          onClick={scrollRight}
          className={`bg-white rounded-full p-2 shadow-md ${currentIndex === maxIndex && 'opacity-50 cursor-not-allowed'}`}
          disabled={currentIndex === maxIndex}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default CardWrapper5Container;
