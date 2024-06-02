import React from "react";
import image1 from '../../assets/images/BridalMakeup/cardimg1.png';
import image2 from '../../assets/images/BridalMakeup/cardimg2.png';
import image3 from '../../assets/images/BridalMakeup/cardimg4.png';
import image4 from '../../assets/images/BridalMakeup/cardimg3.png';
import Header from "./Header";

function CardWrapper() {
  const images = [
    { src: image1, description: 'Dress Guide' },
    { src: image2, description: 'Decor Guide' },
    { src: image3, description: 'Real Wedding' },
    { src: image4, description: 'Wedding Ideas' },
  ];

  return (
    <div className="max-w-[1200px] mx-auto my-8 p-8 font-poppins">
      <Header header="Browse Our Guides" />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center relative rounded-lg overflow-hidden border border-pink-500 w-full">
            <img src={image.src} alt={image.description} className="object-cover w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-t-xl" />
            <div className="bg-white text-black text-center p-2 rounded-b-lg">
              <p className="text-sm md:text-base">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardWrapper;