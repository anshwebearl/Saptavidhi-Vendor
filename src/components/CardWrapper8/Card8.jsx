import React from "react";

function Card8({ src, title, locations }) {
    return (
        <div className="flex-shrink-0 w-[300px] bg-white p-2 rounded-lg shadow-lg  flex flex-row items-center gap-2 border border-gray-300">
            <img
                src={src}
                alt={title}
                className="rounded-l-lg h-[100px] w-[100px]  object-cover"
            />
            <div className="p-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-[15px] font-semibold mb-2">{title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {locations.map((location, index) => (
                            <span
                                key={index}
                                className="border border-gray-300 px-1 py-1 rounded-sm text-[11px] text-gray-500"
                            >
                                {location}
                            </span>
                        ))}
                    </div>
                </div>
                <button className="px-2 py-1 bg-gradient-to-r from-[#FF8DA6] to-[#c2bfc1] text-white rounded-lg">
                    See All
                </button>
            </div>
        </div>
    );
}

export default Card8;
