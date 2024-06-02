import React from "react"
import image1 from '../../assets/images/CardWrapper3images/image1.jpeg';
import image2 from '../../assets/images/CardWrapper3images/image2.png';
import image3 from '../../assets/images/CardWrapper3images/image3.jpeg';
import image4 from '../../assets/images/CardWrapper3images/image4.png';
import image5 from '../../assets/images/CardWrapper3images/image5.png';
import Header from "../Header";
import CardWrapper3Container from "./CardWrapper3Container";

function CardWrapper3() {
  const images = [
    { src: image1, description: 'Bridal Lehenga' },
    { src: image2, description: 'Outfits' },
    { src: image3, description: 'Blouse Designs' },
    { src: image4, description: 'Wedding Sarees' },
    { src: image5, description: 'Mehndi Design' },
    { src: image5, description: 'Mehndi Design' },
    { src: image5, description: 'Mehndi Design' },
    { src: image5, description: 'Mehndi Design' },
    { src: image5, description: 'Mehndi Design' },
    { src: image5, description: 'Mehndi Design' },
  ];

  return (
    <div className="my-[50px]">
      <Header header="Gallery to Look for" />
      <CardWrapper3Container images={images} />
    </div>
  )
};

export default CardWrapper3;