import React from 'react';
import yellowStar from '../../../assets/images/ProductDetailsImages/star.png';
import grayStar from '../../../assets/images/ProductDetailsImages/gstar.png';

const ReviewCard = ({ src, name, reviewtime, star, title, description }) => {
    const stars = Array.from({ length: 5 }, (v, i) => i < star ? yellowStar : grayStar);

    return (
        <div className="p-2 md:p-4 border rounded-[15px] shadow-md md:mx-[10px] mx-[8px]">
            <div className='flex justify-between mb-4'>
                <div className="flex items-center">
                    <img src={src} alt={`${name}'s profile`} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                        <h3 className="text-[17px] font-semibold">{name}</h3>
                        <p className="text-[12px] text-gray-600">Reviewed {reviewtime} ago</p>
                    </div>
                </div>
                <div className="flex items-center mr-4 md:mr-2">
                    {stars.map((star, index) => (
                        <img key={index} src={star} alt="star" className="md:w-4 md:h-4 w-3 h-3 mr-1" />
                    ))}
                </div>
            </div>
            <div>
                <hr className="mb-2" />
                <h4 className="text-[18px] font-semibold mb-2">{title}</h4>
                <p className="text-gray-700 text-[14px]">{description}</p>
            </div>
        </div>
    );
};

export default ReviewCard;
