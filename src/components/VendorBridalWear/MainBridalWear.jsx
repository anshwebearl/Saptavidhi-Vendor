/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useRef, useState } from "react";
import Filter from "./Filter.jsx";
// import BanquetCard from "./BanquetCard";

let limit = window.screen.width > 768 ? 12 : 6;

const BASE_URL = import.meta.env.DEV
    // ? import.meta.env.VITE_API_BASE_URL_DEV
    ? "http://127.0.0.1:8000/api"
    : import.meta.env.VITE_API_BASE_URL_PROD;

const BASE_IMAGE_URL = import.meta.env.DEV
    // ? import.meta.env.VITE_IMAGE_URL_DEV
    ? "http://127.0.0.1:8000"
    : import.meta.env.VITE_IMAGE_URL_PROD;

const token = localStorage.getItem("token");

const MainBridalWear = ({ handleNavigation }) => {
    const bottomRef = useRef(null);

    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(1);
    const [vendors, setVendors] = useState([]);

    const [storeType, setStoreType] = useState("");
    const [budget, setBudget] = useState("");
    const [outfitType, setOutfitType] = useState("");

    const [loading, setLoading] = useState(false);
    const [paginationLoading, setPaginationLoading] = useState(false);
    const [isFirstPageLoaded, setIsFirstPageLoaded] = useState(false);

    const getBridalWearPagination = async () => {
        try {
            setPaginationLoading(true);
            const response = await fetch(
                `${BASE_URL}/vendor/vendor-pagination?page=${currentPage}&limit=${limit}&vendorType=Bridal Wear`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const jsonData = await response.json();
            if (jsonData.success) {
                if (currentPage === 1) {
                    setVendors(jsonData.data.vendors);
                    setIsFirstPageLoaded(true);
                } else {
                    setVendors((prev) => [...prev, ...jsonData.data.vendors]);
                }
                setTotalPages(parseInt(jsonData.data.totalPages));
                setTotalCount(parseInt(jsonData.data.totalCount));
                console.log(jsonData);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
            setPaginationLoading(false);
        }
    };

    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setCurrentPage((prev) => prev + 1);
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: "20px",
            threshold: 1.0,
        });
        if (
            bottomRef.current &&
            isFirstPageLoaded &&
            vendors.length < totalCount
        ) {
            observer.observe(bottomRef.current);
        }
        return () => {
            if (bottomRef.current) {
                observer.unobserve(bottomRef.current);
            }
        };
    }, [handleObserver, isFirstPageLoaded]);

    useEffect(() => {
        getBridalWearPagination();
    }, [currentPage, totalPages, budget, outfitType]);

    useEffect(() => {
        setCurrentPage(1);
        setVendors([]);
    }, [totalPages, budget, outfitType]);

    return (
        <div className="custom-container w-full flex flex-col font-poppins">
            <div className="w-full justify-start">
                <Filter
                    storeType={storeType}
                    budget={budget}
                    outfitType={outfitType}
                    setStoreType={setStoreType}
                    setBudget={setBudget}
                    setOutfitType={setOutfitType}
                    totalCount={totalCount}
                />
            </div>

            <div className="flex w-full justify-center mb-4 ml-4">
                {loading ? (
                    <div>
                        <div className="border-gray-300 h-10 w-10 md:h-16 md:w-16 animate-spin rounded-full border-2 md:border-8 border-t-[#CF166F]" />
                    </div>
                ) : (
                    <div className="flex flex-row flex-wrap mx-auto md:px-5 gap-5 w-[85%]">
                        {vendors.map((banquet, id) => (
                            <Card
                                key={banquet._id}
                                id={banquet._id}
                                src={banquet.cover_photo}
                                name={banquet.brand_name.toUpperCase()}
                                location={`${banquet.city}, ${banquet.state}`}
                                additional_details={banquet.additional_details}
                                handleNavigation={handleNavigation}
                            />
                        ))}
                    </div>
                )}
            </div>
            {paginationLoading && (
                <div className="my-10 flex justify-center">
                    <div className="border-gray-300 h-10 w-10 md:h-16 md:w-16 animate-spin rounded-full border-4 md:border-8 border-t-[#CF166F]" />
                </div>
            )}
            <div ref={bottomRef} />
        </div>
    );
};

export default MainBridalWear;

const Card = ({
    src,
    name,
    location,
    id,
    additional_details,
    handleNavigation,
}) => {
    const [detailsData, setDetailsData] = useState({});
    const [range, setRange] = useState({
        min: 0,
        max: 0,
    });

    const formattedSrc = src.replace(/\\/g, "/");

    const transformDetails = (details) => {
        const transformedData = details.reduce((acc, detail) => {
            const [key, value] = Object.entries(detail)[1];
            acc[key] = value;
            return acc;
        }, {});
        return transformedData;
    };

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

    useEffect(() => {
        if (additional_details && additional_details.length > 0) {
            const data = transformDetails(additional_details);
            setDetailsData(data);
            const { min, max } = findMinMax(data.outfitType);
            setRange({ min: min, max: max });
        }
    }, [additional_details]);

    return (
        <div
            onClick={() => handleNavigation(`bridal-wear/${id}`)}
            className="border-[0.5px] border-gray-300 cursor-pointer font-poppins flex-grow relative shadow-md flex-shrink-0 min-w-[150px] max-w-[150px] h-[300px] md:min-w-[220px] md:max-w-[220px] md:h-[380px] overflow-hidden rounded-3xl"
        >
            <div
                className="absolute inset-0 bg-cover bg-center bottom-1/4"
                style={{
                    backgroundImage: `url(${BASE_IMAGE_URL}/${formattedSrc})`,
                }}
            ></div>
            <div className="absolute bg-white w-full bottom-0 h-fit p-3 flex flex-col gap-1 md:gap-1 text-wrap">
                <p className="font-[400] text-xs md:text-[12px]">
                    {detailsData.mostOutfits}
                </p>
                <p className="font-[600] text-sm md:text-base leading-none">
                    {name}
                </p>
                <p className="font-[500] text-[#626262] text-xs md:text-[12px]">
                    {location}
                </p>
                <p className="font-[600] text-base md:text-base text-[#CF166F]">
                    &#8377; {range.min.toLocaleString("en-IN")} - &#8377;{" "}
                    {range.max.toLocaleString("en-IN")}
                </p>
            </div>
        </div>
    );
};
