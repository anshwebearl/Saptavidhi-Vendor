import React, { useState } from 'react';

const ReviewCard = ({ src, name, date, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const renderDescription = () => {
        if (description.length <= 100) {
            return description;
        }
        if (isExpanded) {
            return (
                <>
                    {description} <button onClick={toggleReadMore} className="text-black font-bold">Read less</button>
                </>
            );
        }
        return (
            <>
                {description.substring(0, 100)}... <button onClick={toggleReadMore} className="text-black font-bold">Read more</button>
            </>
        );
    };

    return (
        <div className="p-3 md:p-5 border-[1px] rounded-xl shadow-md mx-3 md:mx-5 my-2">
            <div className="flex justify-between mb-3 items-center">
                <div className="flex items-center">
                    <img src={src} alt={`${name}'s profile`} className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full mr-3" />
                    <div className="flex flex-col">
                        <h3 className="text-sm md:text-base lg:text-lg font-semibold">{name}</h3>
                    </div>
                </div>
                <div className="flex items-center">
                    <p className="text-xs md:text-sm lg:text-base text-gray-600">{date}</p>
                </div>
            </div>
            <div>
                <hr className="mb-2" />
                <p className="text-gray-700 text-xs md:text-sm lg:text-base">
                    {renderDescription()}
                </p>
            </div>
        </div>
    );
};

const ReviewCardGroup = ({ reviews = [] }) => {
    return (
        // <div className=" max-w-7xl border-2 border-gray-300 rounded-2xl p-5 md:p-8 lg:p-10 shadow-lg font-poppins">
        <div className="max-w-7xl mx-auto p-4 border-2 border-gray-300 rounded-2xl font-poppins shadow-lg my-10">
            <h2 className="text-xl font-semibold mb-4  p-4 -my-6 text-left md:mb-0">Reviews</h2>
            <hr className="mb-4 border-gray-300" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {reviews.map((review, index) => (
                    <ReviewCard
                        key={index}
                        src={review.src}
                        name={review.name}
                        date={review.date}
                        description={review.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default ReviewCardGroup;

