import React from "react";
import image1 from '../../assets/images/CardWrapper6images/image1.jpeg';
import image2 from '../../assets/images/CardWrapper6images/image2.jpeg';
import image3 from '../../assets/images/CardWrapper6images/image3.jpeg';
import image4 from '../../assets/images/CardWrapper6images/image4.jpeg';  
import Header from "../Header";
import CardWrapper6Container from "./CardWrapper6Container";

function CardWrapper6() {
    const images = [
        { src: image1, name: 'Venues' },
        { src: image2, name: 'Photographers' },
        { src: image3, name: 'Makeup' },
        { src: image4, name: 'Bridal Wear' },
    ];

    return (
        <>
            <div className="my-5 md:my-10">
                <Header header="Wedding Categories" />
                <CardWrapper6Container images={images} />
            </div>
        </>
    );
}

export default CardWrapper6;
