import React from "react"
import image1 from '../../assets/images/CardWrapper2images/image1.png';
import image2 from '../../assets/images/CardWrapper2images/image2.jpeg';
import image3 from '../../assets/images/CardWrapper2images/image3.png';
import Header from "../Header";
import CardWrapper2Container from "./CardWrapper2Container";

function CardWrapper2() {

  const images = [
    { src: image1, tag: 'Wedding', name: 'Isha And Anmol', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { src: image2, tag: 'Wedding', name: 'Isha And Anmol', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { src: image3, tag: 'Wedding', name: 'Isha And Anmol', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { src: image1, tag: 'Wedding', name: 'Isha And Anmol', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { src: image1, tag: 'Wedding', name: 'Isha And Anmol', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
  ];
  return (
    <>
      <div className="my-[50px]">
        <Header header="Real Wedding Stories" />
        <CardWrapper2Container images={images} />
      </div>
    </>

  )
};

export default CardWrapper2;
