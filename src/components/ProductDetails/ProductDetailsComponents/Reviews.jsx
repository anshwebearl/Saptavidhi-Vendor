import React from "react";
import ReviewCard from "./ReviewCard";
import image8 from '../../../assets/images/ProductDetailsImages/image8.png';
import yellowStar from '../../../assets/images/ProductDetailsImages/star.png';
import grayStar from '../../../assets/images/ProductDetailsImages/gstar.png';

function Reviews() {
    const star = 4;
    const stars = Array.from({ length: 5 }, (v, i) => i < star ? yellowStar : grayStar);

    const reviews = [
        {
            src: image8,
            name: "Saathii",
            reviewtime: "5 years 3 months",
            star: 4,
            title: "Yummy and Healthy!",
            description: "I bought the Blueberry Bites and my dog loves it so much! Aside from being delicious it's also healthy! Great Buy!"
        },
        {
            src: image8,
            name: "Saathii",
            reviewtime: "5 years 3 months",
            star: 4,
            title: "Yummy and Healthy!",
            description: "I bought the Blueberry Bites and my dog loves it so much! Aside from being delicious it's also healthy! Great Buy!"
        },
        {
            src: image8,
            name: "Saathii",
            reviewtime: "5 years 3 months",
            star: 4,
            title: "Yummy and Healthy!",
            description: "I bought the Blueberry Bites and my dog loves it so much! Aside from being delicious it's also healthy! Great Buy!"
        },
        {
            src: image8,
            name: "Saathii",
            reviewtime: "5 years 3 months",
            star: 4,
            title: "Yummy and Healthy!",
            description: "I bought the Blueberry Bites and my dog loves it so much! Aside from being delicious it's also healthy! Great Buy!"
        }
    ];

    return (
        <div className="mx-[10px] md:mx-[20px] border border-gray-400 rounded-[20px] p-4">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h1 className="text-[18px] font-semibold ">Reviews</h1>
                </div>
                <div className="flex items-center font-semibold">
                    {stars.map((star, index) => (
                        <img key={index} src={star} alt="star" className="w-4 h-4 mr-1" />
                    ))}
                    4.5
                </div>
            </div>
            <hr className="mb-4 border-gray-300" />
            <div className="flex flex-col md:flex-row md:flex-wrap">
                {reviews.map((review, index) => (
                    <div key={index} className="p-2 md:w-1/2">
                        <ReviewCard
                            src={review.src}
                            name={review.name}
                            reviewtime={review.reviewtime}
                            star={review.star}
                            title={review.title}
                            description={review.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reviews;
