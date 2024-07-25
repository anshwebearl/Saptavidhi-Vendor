/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function About({ additional_details, startedDate, aboutRef }) {
    const [detailsData, setDetailsData] = useState({});

    const transformDetails = (details) => {
        const transformedData = details.reduce((acc, detail) => {
            const [key, value] = Object.entries(detail)[1];
            acc[key] = value;
            return acc;
        }, {});
        return transformedData;
    };

    function convertDateToString(date) {
        const inputDate = new Date(date);
        const currentDate = new Date();

        let years = currentDate.getFullYear() - inputDate.getFullYear();
        let months = currentDate.getMonth() - inputDate.getMonth();
        let days = currentDate.getDate() - inputDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                0
            ).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        if (years > 0 && months > 0) {
            return `${years} years and ${months} months`;
        } else if (years > 0) {
            return `${years} years`;
        } else if (months > 0) {
            return `${months} months`;
        } else {
            return `${days} days`;
        }
    }

    useEffect(() => {
        if (additional_details && additional_details.length > 0) {
            const data = transformDetails(additional_details);
            setDetailsData(data);
        }
    }, [additional_details]);

    return (
        <>
            <div
                ref={aboutRef}
                className="md:px-6 md:py-5 px-5 py-2 border-2 rounded-[20px] flex flex-col gap-2 md:gap-3"
            >
                <h2 className="text-lg md:text-lg font-bold">About</h2>
                <hr className="border border-gray-400" />
                <div className="flex gap-2">
                    <div className="flex-1 flex flex-col gap-3 md:gap-5">
                        <div className="">
                            <p className="text-gray-800 text-sm md:text-base">
                                Been on Saptavidhi
                            </p>
                            <p className="text-black font-semibold text-sm md:text-base">
                                {convertDateToString(startedDate)}
                            </p>
                        </div>
                        {detailsData.knownFor && (
                            <div className="">
                                <p className="text-gray-800 text-sm md:text-base">
                                    Known For
                                </p>
                                <p className="text-black font-semibold text-sm md:text-base">
                                    {detailsData.knownFor.map((el) => {
                                        return <span key={el}>{el}</span>;
                                    })}
                                </p>
                            </div>
                        )}
                        {detailsData.establishment && (
                            <div className="">
                                <p className="text-gray-800 text-sm md:text-base">
                                    Establishiment
                                </p>
                                <p className="text-black font-semibold text-sm md:text-base">
                                    {detailsData.establishment}
                                </p>
                            </div>
                        )}
                        {detailsData.alcoholPolicy && (
                            <div className="">
                                <p className="text-gray-800 text-sm md:text-lg">
                                    Outside Alcohol
                                </p>
                                <p className="text-black font-semibold text-sm md:text-lg">
                                    {detailsData.alcoholPolicy
                                        .split(",")
                                        .map((el) => {
                                            return <div key={el}>{el}</div>;
                                        })}
                                </p>
                            </div>
                        )}
                        {detailsData.allowSmallSizeGathering ===
                            ("" || "Yes") && (
                            <div className="">
                                <p className="text-gray-800 text-sm md:text-lg">
                                    Small Party Venue
                                </p>
                                <p className="text-black font-semibold text-sm md:text-lg">
                                    Less than 50 pax allowed
                                </p>
                            </div>
                        )}
                        {detailsData.roomsAvailable && (
                            <div className="">
                                <p className="text-gray-800 text-sm md:text-lg">
                                    Room Count
                                </p>
                                <p className="text-black font-semibold text-sm md:text-lg">
                                    {detailsData.roomsAvailable}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="flex-1 flex flex-col gap-3 md:gap-5">
                        {detailsData.parkingAvailable && (
                            <div className="">
                                <p className="text-gray-800 text-sm md:text-lg">
                                    Parking
                                </p>
                                <p className="text-black font-semibold text-sm md:text-lg">
                                    {detailsData.parkingAvailable}
                                </p>
                            </div>
                        )}
                        {detailsData.cateringPolicy && (
                            <div className="">
                                <p className="text-gray-800 text-sm md:text-lg">
                                    Catering policy
                                </p>
                                <p className="text-black font-semibold text-sm md:text-lg">
                                    {detailsData.cateringPolicy
                                        .split(",")
                                        .map((el) => {
                                            return <div key={el}>{el}</div>;
                                        })}
                                </p>
                            </div>
                        )}
                        {detailsData.startYear && (
                            <div className="">
                                <p className="text-gray-800 text-sm md:text-base">
                                    Start of Venue
                                </p>
                                <p className="text-black font-semibold text-sm md:text-base">
                                    {detailsData.startYear}
                                </p>
                            </div>
                        )}
                        {detailsData.timeForBridalPiece && (
                            <div className="">
                                <p className="text-gray-800 text-sm md:text-base">
                                    Time Taken For Bridal Piece
                                </p>
                                <p className="text-black font-semibold text-sm md:text-base">
                                    {detailsData.timeForBridalPiece}
                                </p>
                            </div>
                        )}
                        {detailsData.djPolicy && (
                            <div className="">
                                <p className="text-gray-800 text-sm md:text-lg">
                                    DJ Policy
                                </p>
                                <p className="text-black font-semibold text-sm md:text-lg">
                                    {detailsData.djPolicy
                                        .split(",")
                                        .map((el) => {
                                            return <div key={el}>{el}</div>;
                                        })}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
