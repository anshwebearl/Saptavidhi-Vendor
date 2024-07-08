import { useEffect, useState } from "react";
import bannerImage from "../assets/images/banner-image.jpeg";
import { State, City } from "country-state-city";

const Banner = () => {
    const BASE_URL = import.meta.env.DEV
        // ? import.meta.env.VITE_API_BASE_URL_DEV
        ? "http://127.0.0.1:8000/api"
        : import.meta.env.VITE_API_BASE_URL_PROD;

    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [vendorType, setVendorType] = useState("");

    const allStates = State.getStatesOfCountry("IN");
    const [allCities, setAllCities] = useState([]);
    const [vendorTypeData, setVendorTypeData] = useState([]);

    const getAllVendorCategory = async () => {
        try {
            const response = await fetch(`${BASE_URL}/vendor-category/getall`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const jsonData = await response.json();
            if (jsonData.success) {
                setVendorTypeData(jsonData.vendorCategories);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllVendorCategory();
    }, []);

    const handleStateChange = (e) => {
        const selectedState = e.target.value;
        setState(selectedState);
        const stateCode = allStates.find(
            (s) => s.name === selectedState
        )?.isoCode;
        if (stateCode) {
            const cities = City.getCitiesOfState("IN", stateCode);
            setAllCities(cities);
        }
    };

    return (
        <div className="relative h-[400px] w-full md:h-[600px]">
            {/* <div className="banner-image-container">
                <img src={bannerImage} alt="Banner" className="banner-image object-cover h-full w-full" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            </div> */}
            <div
                className={`absolute inset-0 bg-cover bg-center`}
                style={{ backgroundImage: `url(${bannerImage})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute w-full px-5 flex items-end bottom-5 md:bottom-20 justify-center">
                <div className="text-white flex flex-col items-center gap-4">
                    <div className="flex flex-col flex-wrap items-center gap-2 md:gap-5 text-center">
                        <h1 className="text-2xl md:text-4xl font-bold text-center">
                            Your{" "}
                            <span className="font-satisfy font-[700]">
                                Wedding
                            </span>
                            , Your{" "}
                            <span className="font-satisfy font-[700]">Way</span>
                        </h1>
                        <p className="text-xs md:text-lg w-fit">
                            Find the best wedding vendors with thousands of
                            trusted reviews
                        </p>
                    </div>
                    <div className="flex gap-4 p-2 flex-col md:flex-row bg-white/10 backdrop-blur-sm rounded-xl md:rounded-full md:w-fit">
                        <select
                            onChange={(e) => setVendorType(e.target.value)}
                            className="md:px-4 px-2 py-1 bg-gradient-to-r from-[#FD070780] to-[#5C034080] max-w-[220px] rounded-full text-xs md:text-base"
                        >
                            <option
                                value="Select Vendor Type"
                                disabled
                                selected
                            >
                                Select Vendor Type
                            </option>
                            {vendorTypeData.map((vendor) => (
                                <option
                                    className="bg-white text-black"
                                    key={vendor._id}
                                    value={vendor.name}
                                >
                                    {vendor.name}
                                </option>
                            ))}
                        </select>
                        <select
                            onChange={handleStateChange}
                            className="md:px-4 px-2 py-1 bg-gradient-to-r from-[#FD070780] to-[#5C034080] rounded-full max-w-[150px] text-xs md:text-base"
                        >
                            <option value="Select State" disabled selected>
                                Select State
                            </option>
                            {allStates.map((state) => (
                                <option
                                    className="text-black bg-white"
                                    key={state.isoCode}
                                    value={state.name}
                                >
                                    {state.name}
                                </option>
                            ))}
                        </select>
                        <select
                            disabled={!state}
                            onChange={(e) => setCity(e.target.value)}
                            className="md:px-4 px-2 py-1 bg-gradient-to-r from-[#FD070780] to-[#5C034080] rounded-full max-w-[150px] text-xs md:text-base"
                        >
                            <option value="Select City" disabled selected>
                                Select City
                            </option>
                            {allCities.map((city) => (
                                <option
                                    className="text-black bg-white"
                                    key={city.name}
                                    value={city.name}
                                >
                                    {city.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
