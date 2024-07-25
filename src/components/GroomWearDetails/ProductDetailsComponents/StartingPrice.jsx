/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const StartingPrice = ({ additional_details }) => {
    const [range, setRange] = useState({
        min: 0,
        max: 0,
    });

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
            const { min, max } = findMinMax(data.outfitType);
            setRange({ min: min, max: max });
        }
    }, [additional_details]);

    function findMinMax(arr) {
        let minValue = Infinity;
        let maxValue = -Infinity;

        arr.forEach((item) => {
            if (item.min < minValue) {
                minValue = item.min;
            }
            if (item.max > maxValue) {
                maxValue = item.max;
            }
        });

        return {
            min: minValue,
            max: maxValue,
        };
    }

    return (
        <div className="border-2  rounded-[20px] px-5 py-3 md:px-5 shadow-md md:py-5 flex flex-col gap-2 md:gap-3 flex-grow h-fit md:h-full">
            <h1 className="md:text-lg text-base font-semibold">
                Starting Price
            </h1>
            <hr className="border-gray-500 " />
            {range.max !== 0 && (
                <div className="h-full flex items-center">
                    <p className="text-[#CF166F] md:text-base font-semibold">
                        &#8377; {range.min} - &#8377; {range.max}
                    </p>
                </div>
            )}
        </div>
    );
};

export default StartingPrice;
