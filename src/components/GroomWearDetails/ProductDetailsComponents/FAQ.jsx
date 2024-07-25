/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from "react";
import { FiArrowDownCircle } from "react-icons/fi";

const FAQ = ({ additional_details, brand_name }) => {
    const [detailsData, setDetailsData] = useState({});

    const transformDetails = (details) => {
        const transformedData = details.reduce((acc, detail) => {
            const [key, value] = Object.entries(detail)[1];
            acc[key] = value;
            return acc;
        }, {});
        return transformedData;
    };

    const [open, setOpen] = useState([false, false, false, false, false]);
    const contentRefs = useRef([]);

    const toggle = (index) => {
        setOpen((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    useEffect(() => {
        contentRefs.current.forEach((ref, index) => {
            if (ref) {
                ref.style.height = open[index]
                    ? `${ref.scrollHeight}px`
                    : "0px";
            }
        });
    }, [open]);

    useEffect(() => {
        if (additional_details && additional_details.length > 0) {
            const data = transformDetails(additional_details);
            setDetailsData(data);
        }
    }, [additional_details]);

    const questions = [
        `Does ${brand_name} provide customization?`,
        `Are outfits made by ${brand_name} sold off the racks or are they made to order?`,
        `Do ${brand_name} ship outfits to other cities/countries?`,
    ];

    const answers = [
        detailsData.provideCustomisation,
        detailsData.rackOrOrder,
        detailsData.shipToOtherLocation,
    ];

    return (
        <div className="md:px-6 md:py-4 py-3 px-5 border-2 rounded-[20px] flex flex-col gap-2">
            <h2 className="text-lg md:text-lg font-bold">
                Frequently Asked Questions
            </h2>
            <hr className="border-gray-400" />
            <div className="flex flex-col gap-3 md:gap-4">
                {questions.map((question, index) => (
                    <div key={index} className="flex flex-col">
                        <div
                            className="flex justify-between cursor-pointer gap-3 items-center"
                            onClick={() => toggle(index)}
                        >
                            <p className="text-[12px] md:text-base">
                                {question}
                            </p>
                            <div>
                                <FiArrowDownCircle
                                    size={20}
                                    className={`transition-transform duration-300 ${
                                        open[index] ? "rotate-180" : ""
                                    }`}
                                />
                            </div>
                        </div>
                        <div
                            ref={(el) => (contentRefs.current[index] = el)}
                            className={`overflow-hidden transition-all duration-300 ease-in-out`}
                            style={{ height: "0px" }}
                        >
                            <p className="text-gray-700 text-xs md:text-sm">
                                {answers[index]}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
