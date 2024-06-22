import React, { useState } from "react";
import upArrow from "../../../assets/images/ProductDetailsImages/uparrow.png"; // Adjust the path as needed
import downArrow from "../../../assets/images/ProductDetailsImages/downarrow.png"; // Adjust the path as needed

const FAQ = () => {
    const [open, setOpen] = useState([false, false, false, false, false]);

    const toggle = (index) => {
        setOpen((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const questions = [
        "Does Club Mahindra Kensville Golf Resort allow small size gatherings (<100)?",
        "What is Club Mahindra Kensville Golf Resort's policy on catering?",
        "What is Club Mahindra Kensville Golf Resort's policy on decor?",
        "Is outside alcohol permitted at Club Mahindra Kensville Golf Resort?",
        "What is Club Mahindra Kensville Golf Resort's policy on DJ?",
    ];

    const answers = [
        "Less than 50 Pax allowed",
        "Catering policy details...",
        "Decor policy details...",
        "Outside alcohol policy details...",
        "DJ policy details...",
    ];

    return (
        <div className="md:px-6 md:py-4 py-3 px-5 border-2 rounded-[20px] flex flex-col gap-2">
            <h2 className="text-lg md:text-xl font-bold">
                Frequently Asked Questions
            </h2>
            <hr className="border-gray-400" />
            <div className="flex flex-col gap-3 md:gap-4">
                {questions.map((question, index) => (
                    <div key={index} className="flex flex-col">
                        <div
                            className="flex justify-between cursor-pointer gap-3"
                            onClick={() => toggle(index)}
                        >
                            <p className="text-[12px] md:text-lg">{question}</p>
                            <img
                                src={open[index] ? upArrow : downArrow}
                                alt="Toggle icon"
                                className="md:w-7 w-5 h-5 md:h-7"
                            />
                        </div>
                        {open[index] && (
                            <p className="text-gray-700 text-xs md:text-base">
                                {answers[index]}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
