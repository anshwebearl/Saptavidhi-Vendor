import { useState } from "react";
import bannerImage from "../assets/images/banner-image.jpeg";
import { vendorTypeData } from "../data/vendorTypeData";
import { State, City } from "country-state-city";

const Banner = () => {
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [vendorType, setVendorType] = useState("");

    const allStates = State.getStatesOfCountry("IN");
    const [allCities, setAllCities] = useState([]);

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
            <div className="absolute w-full h-full px-8 md:px-24 flex items-center justify-center">
                <div className="text-white text-center">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                            Your <span className="font-satisfy">Wedding</span>,
                            Your <span className="font-satisfy">Way</span>
                        </h1>
                        <p className="text-sm md:text-xl mb-8 mx-3">
                            Find the best wedding vendors with thousands of
                            trusted reviews
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 p-2 bg-white/20 backdrop-blur-sm rounded-xl md:rounded-full w-fit mx-auto">
                        <select
                            onChange={(e) => setVendorType(e.target.value)}
                            className="md:px-4 px-3 py-2 bg-gradient-to-r from-[#FF8DA6] to-[#c2bfc1] rounded-full text-xs md:text-sm"
                        >
                            <option
                                value="Select Vendor Type"
                                disabled
                                selected
                            >
                                Select Vendor Type
                            </option>
                            {vendorTypeData.map((vendor, idx) => (
                                <option
                                    className="bg-white text-black"
                                    key={idx}
                                    value={vendor.name}
                                >
                                    {vendor.name}
                                </option>
                            ))}
                        </select>
                        <select
                            onChange={handleStateChange}
                            className="md:px-4 px-3 py-2 bg-gradient-to-r from-[#FF8DA6] to-[#c2bfc1] rounded-full max-w-[150px] text-xs md:text-sm"
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
                            className="md:px-4 px-3 py-2 bg-gradient-to-r from-[#FF8DA6] to-[#c2bfc1] rounded-full text-xs md:text-sm max-w-[150px]"
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
