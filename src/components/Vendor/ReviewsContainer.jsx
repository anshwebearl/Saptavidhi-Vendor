import React from "react"
import ReviewCard from "./ReviewCard";
import image8 from '../../assets/images/image8.png';
import yellowStar from '../../assets/images/star.png';
import grayStar from '../../assets/images/gstar.png';



function ReviewsContainer() {
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
        },
        {
            src: image8,
            name: "Saathii",
            reviewtime: "5 years 3 months",
            star: 4,
            title: "Yummy and Healthy!",
            description: "I bought the Blueberry Bites and my dog loves it so much! Aside from being delicious it's also healthy! Great Buy!"
        },

    ];
    return (
        <>
            {/* <div className='w-[968px]'> */}

                
                <div className="border-[1px] border-[#00000033] rounded-3xl flex flex-col gap-3 md:gap-4 p-3 md:p-5">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-lg md:text-xl font-semibold ">Reviews</h1>
                        </div>
                    </div>
                    <hr className=" border-gray-300" />
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


            {/* </div> */}
        </>
    )
};

export default ReviewsContainer;
