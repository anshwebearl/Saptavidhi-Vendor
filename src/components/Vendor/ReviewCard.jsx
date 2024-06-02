import React from 'react';
import yellowStar from '../../assets/images/star.png';
import grayStar from '../../assets/images/gstar.png';

const ReviewCard = ({ src, name, reviewtime, star, title, description }) => {
    const stars = Array.from({ length: 5 }, (v, i) => i < star ? yellowStar : grayStar);

    return (
        <div className="p-3 md:p-4 border rounded-[15px] shadow-md flex flex-col gap-1 md:gap-2">
            <div className='flex justify-between'>
                <div className="flex items-center">
                    <img src={src} alt={`${name}'s profile`} className="w-9 h-9 md:w-12  md:h-12 rounded-full mr-4" />
                    <div>
                        <h3 className="text-base md:text-lg font-semibold">{name}</h3>
                        <p className="text-[10px] md:text-xs text-gray-600">2 Apr, 2024</p>
                    </div>
                </div>
                <div className="flex items-center ">
                    {stars.map((star, index) => (
                        <img key={index} src={star} alt="star" className="md:w-4 md:h-4 w-3 h-3 mr-1" />
                    ))}
                </div>
            </div>
            <div className='border-gray-300 border-b-[1px]'></div>
            <div>
                <h4 className="text-base md:text-xl font-[500]">{title}</h4>
                <p className="text-gray-700 text-xs md:text-sm">{description}</p>
            </div>
        </div>
    );
};

export default ReviewCard;
