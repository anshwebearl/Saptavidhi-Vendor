import React from "react";
import image1 from '../../assets/images/CardWrapper1images/image1.png';
import image2 from '../../assets/images/CardWrapper1images/image2.png';
import image3 from '../../assets/images/CardWrapper1images/image3.png';
import image4 from '../../assets/images/CardWrapper1images/image4.png';
import Header from '../Header';
import CardWrapper1Container from './CardWrapper1Container';

function CardWrapper1() {
  const images = [
    { src: image1, description: 'Photographers in Ahmedabad' },
    { src: image2, description: 'Bridal Makeup in Ahmedabad' },
    { src: image3, description: 'Bridal Wear in Ahmedabad' },
    { src: image4, description: 'Groom Wear in Ahmedabad' },
    { src: image4, description: 'Groom Wear in Ahmedabad' },
    { src: image4, description: 'Groom Wear in Ahmedabad' },
    { src: image4, description: 'Groom Wear in Ahmedabad' },
    { src: image4, description: 'Groom Wear in Ahmedabad' },
  ];

  return (
    <>
      <div className="my-[50px]"> 
        <Header header="Popular Searches" />
        <CardWrapper1Container images={images} />
      </div>
    </>
  );
}

export default CardWrapper1;