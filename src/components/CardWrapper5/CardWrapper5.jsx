import React from "react";
import image1 from '../../assets/images/CardWrapper5images/image1.jpeg';
import image2 from '../../assets/images/CardWrapper5images/image2.png';
import image3 from '../../assets/images/CardWrapper5images/image3.jpeg';
import image4 from '../../assets/images/CardWrapper5images/image4.jpeg';
import Header from "../Header";
import CardWrapper5Container from "./CardWrapper5Container";

function CardWrapper5() {
    const images = [
        { src: image1, date: '02/03/2024', title: 'Isha and Anmol', description: 'We\'ve been a nearly strategic error sit voluptatem accusate laudantium totam aperiam', author: { name: 'Isha', image: 'author1.png' } },
        { src: image2, date: '03/03/2024', title: 'John and Doe', description: 'An amazing wedding story of John and Doe', author: { name: 'Doe', image: 'author2.png' } },
        { src: image3, date: '04/03/2024', title: 'Anna and Smith', description: 'A beautiful journey of Anna and Smith', author: { name: 'Anna', image: 'author3.png' } },
        { src: image4, date: '05/03/2024', title: 'Emma and Liam', description: 'The wonderful tale of Emma and Liam', author: { name: 'Emma', image: 'author4.png' } },
    ];

    return (
        <div className="my-[50px] bg-[#DC05FF0D]">
            <Header header="Latest Blogs" />
            <CardWrapper5Container images={images} />
        </div>
    );
}

export default CardWrapper5;