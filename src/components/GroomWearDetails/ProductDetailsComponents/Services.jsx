/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

const Services = ({ additional_details }) => {
    const [detailsData, setDetailsData] = useState({});

    const transformDetails = (details) => {
        const transformedData = details.reduce((acc, detail) => {
            const [key, value] = Object.entries(detail)[1];
            acc[key] = value;
            return acc;
        }, {});
        return transformedData;
    };

    useEffect(() => {
        if (additional_details && additional_details.length > 0) {
            const data = transformDetails(additional_details);
            setDetailsData(data);
        }
    }, [additional_details]);

    return (
        <div className="border-2  rounded-[20px] px-5 py-3 md:px-5 shadow-md md:py-5 flex flex-col gap-2 md:gap-3 flex-grow h-fit md:h-full">
            <h1 className="md:text-lg text-base font-semibold">
                Services Offered
            </h1>
            <hr className="border-gray-500 " />
            {detailsData && (
                <div className="flex flex-col w-full gap-2 md:gap-3 h-fit overflow-y-scroll custom-scrollbar">
                    {detailsData?.outfitType?.map((item, id) => (
                        <div
                            key={item.type}
                            className="flex flex-col items-center"
                        >
                            {id !== 0 && (
                                <hr className="md:mb-1 mb-2 border-gray-300 w-[95%]" />
                            )}
                            <div className="flex justify-between w-full">
                                <p className="text-sm md:text-base">
                                    {item.type}
                                </p>
                                <p className="text-[#CF166F] text-sm md:text-base font-semibold pr-5">
                                    &#8377; {item.min} - &#8377;{" "}
                                    {item.max.toLocaleString("en-IN")}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Services;
