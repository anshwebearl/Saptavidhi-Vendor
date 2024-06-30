/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useRef, useState } from "react";
import Filter from "./Filter";
import BanquetCard from "./BanquetCard";

let limit = window.screen.width > 768 ? 12 : 6;

const BASE_URL = import.meta.env.DEV
    ? import.meta.env.VITE_API_BASE_URL_DEV
    : import.meta.env.VITE_API_BASE_URL_PROD;

const MainVenue = ({ handleNavigation }) => {
    const bottomRef = useRef(null);

    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(1);

    const [guestCount, setGuestCount] = useState("");
    const [roomCount, setRoomCount] = useState("");
    const [platePrice, setPlatePrice] = useState("");
    const [venueType, setVenueType] = useState("");
    const [space, setSpace] = useState("");

    const [loading, setLoading] = useState(false);
    const [paginationLoading, setPaginationLoading] = useState(false);
    const [isFirstPageLoaded, setIsFirstPageLoaded] = useState(false);

    const token = localStorage.getItem("token");

    const [banquets, setBanquets] = useState([]);

    const getBanquetsPagination = async () => {
        try {
            setPaginationLoading(true);
            const response = await fetch(
                `${BASE_URL}/vendor/banquets-pagination?page=${currentPage}&limit=${limit}&guest_count=${guestCount}&room_count=${roomCount}&plate_price=${platePrice}&venue_type=${venueType}&space=${space}`,
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
                    setBanquets(jsonData.data.banquets);
                    setIsFirstPageLoaded(true);
                } else {
                    setBanquets((prevBanquets) => [
                        ...prevBanquets,
                        ...jsonData.data.banquets,
                    ]);
                }
                setTotalPages(parseInt(jsonData.data.totalPages));
                setTotalCount(parseInt(jsonData.data.totalCount));
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
            banquets.length < totalCount
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
        getBanquetsPagination();
    }, [currentPage, guestCount, roomCount, platePrice, venueType, space]);

    useEffect(() => {
        setCurrentPage(1);
        setBanquets([]);
    }, [guestCount, roomCount, platePrice, venueType, space]);

    return (
        <div className="custom-container w-full flex flex-col font-poppins">
            <div className="w-full mx-auto">
                <Filter
                    roomCount={roomCount}
                    guestCount={guestCount}
                    platePrice={platePrice}
                    venueType={venueType}
                    setRoomCount={setRoomCount}
                    setGuestCount={setGuestCount}
                    setPlatePrice={setPlatePrice}
                    setVenueType={setVenueType}
                    space={space}
                    setSpace={setSpace}
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
                        {banquets.map((banquet, id) => (
                            <BanquetCard
                                key={banquet._id}
                                id={banquet._id}
                                src={banquet.cover_photo}
                                title={banquet.property_name.toUpperCase()}
                                location={`${banquet.city}, ${banquet.state}`}
                                banquet_type={banquet.banquet_type}
                                parking_capacity={banquet.parking_capacity}
                                guest_count={banquet.guest_count}
                                handleNavigation={handleNavigation}
                                veg_price={banquet.veg_price}
                                nonveg_price={banquet.nonveg_price}
                                room_count={banquet.room_count}
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

export default MainVenue;
