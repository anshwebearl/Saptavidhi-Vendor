import React from "react";
import image1 from '../../assets/images/CardWrapper1images/image1.png';
import image2 from '../../assets/images/CardWrapper1images/image2.png';
import image3 from '../../assets/images/CardWrapper1images/image3.png';
import image4 from '../../assets/images/CardWrapper1images/image4.png';
import Header from '../Header';
import CardWrapper8Container from './CardWrapper8Container';

function CardWrapper8() {
  const cards = [
    { src: image1, title: '4 Star & Above', locations: ['Mumbai', 'Delhi', 'Agra', 'Goa', 'Shimla'] },
    { src: image2, title: '3 Star & Above', locations: ['Mumbai', 'Delhi', 'Agra', 'Goa', 'Shimla'] },
    { src: image3, title: 'Banquet Hall', locations: ['Mumbai', 'Delhi', 'Agra', 'Goa', 'Shimla'] },
    { src: image4, title: 'Resort', locations: ['Mumbai', 'Delhi', 'Agra', 'Goa', 'Shimla'] },
  ];

  return (
    <>
      <div className="my-[50px]">
        <Header header="Popular Venue Searches" />
        <CardWrapper8Container cards={cards} />
      </div>
    </>
  );
}

export default CardWrapper8;
