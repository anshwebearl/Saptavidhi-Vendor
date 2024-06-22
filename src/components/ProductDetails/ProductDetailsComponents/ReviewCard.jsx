import React from "react";
import yellowStar from "../../../assets/images/ProductDetailsImages/star.png";
import grayStar from "../../../assets/images/ProductDetailsImages/gstar.png";

const ReviewCard = ({ src, name, reviewtime, star, title, description }) => {
    const stars = Array.from({ length: 5 }, (v, i) =>
        i < star ? yellowStar : grayStar
    );

    return (
        <div className="p-4 border rounded-[15px] shadow-md flex flex-col gap-4">
            <div className="flex justify-between gap-3">
                <div className="flex items-center gap-3">
                    <img
                        src={src}
                        alt={`${name}'s profile`}
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <h3 className=" text-base md:text-lg font-semibold">
                            {name}
                        </h3>
                        <p className="text-sm md:text-base leading-none text-gray-600">
                            Reviewed {reviewtime} ago
                        </p>
                    </div>
                </div>
                <div className="flex items-center">
                    {stars.map((star, index) => (
                        <img
                            key={index}
                            src={star}
                            alt="star"
                            className="md:w-4 md:h-4 w-3 h-3"
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <hr className="" />
                <h4 className="md:text-lg text-sm font-semibold">{title}</h4>
                <p className="text-gray-700 text-xs md:text-base">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ReviewCard;
