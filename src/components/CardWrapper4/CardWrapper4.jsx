import React from "react";
import image1 from '../../assets/images/CardWrapper4images/image1.jpeg';
import image2 from '../../assets/images/CardWrapper4images/image2.png';
import image3 from '../../assets/images/CardWrapper4images/image3.png';
import image4 from '../../assets/images/CardWrapper4images/image4.png';  // Assume there's an image4.jpeg
import Header from "../Header";
import CardWrapper4Container from "./CardWrapper4Container";

function CardWrapper4() {
    const images = [
        { src: image1, name: 'VLCC', address: 'Wedding catering, sohana road', price: 'Rs. 1500 onwards', rating: 4.9 },
        { src: image2, name: 'Pristine Makeovers', address: 'Wedding catering, sohana road', price: 'Rs. 1500 onwards', rating: 4.9 },
        { src: image3, name: 'Wedmantram', address: 'Wedding catering, sohana road', price: 'Rs. 1500 onwards', rating: 4.9 },
        { src: image4, name: 'The Velvetbug', address: 'Wedding catering, sohana road', price: 'Rs. 1500 onwards', rating: 4.9 },
        { src: image4, name: 'The Velvetbug', address: 'Wedding catering, sohana road', price: 'Rs. 1500 onwards', rating: 4.9 },
        { src: image4, name: 'The Velvetbug', address: 'Wedding catering, sohana road', price: 'Rs. 1500 onwards', rating: 4.9 },
        { src: image4, name: 'The Velvetbug', address: 'Wedding catering, sohana road', price: 'Rs. 1500 onwards', rating: 4.9 },
    ];

    return (
        <>
            <div className="my-[50px]">
                <Header header="Featured Vendors" />
                <CardWrapper4Container images={images} />
            </div>
        </>
    );
}

export default CardWrapper4;
