import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { State, City } from "country-state-city";
import { vendorTypeData } from "../../data/vendorTypeData.js";

const VendorSignup = () => {
    const navigate = useNavigate();

    const { user } = useContext(UserContext);

    const [brandName, setBrandName] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [mobile, setMobile] = useState("");
    const [contactPersonName, setContactPersonName] = useState("");
    const [vendorType, setVendorType] = useState("Select Vendor Type");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState({});

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

    const handleSignup = async () => {
        const newErrors = {};

        if (!brandName) newErrors.brandName = "Brand Name is required";
        if (!state) newErrors.state = "State is required";
        if (!city) newErrors.city = "City is required";
        if (!pincode) newErrors.pincode = "Pincode is required";
        if (!mobile) newErrors.mobile = "Mobile Number is required";
        if (!contactPersonName)
            newErrors.contactPersonName = "Contact Person Name is required";
        if (vendorType === "Select Vendor Type")
            newErrors.vendorType = "Vendor Type is required";
        if (!email) newErrors.email = "Email is required";
        if (!password) newErrors.password = "Password is required";
        if (!confirmPassword)
            newErrors.confirmPassword = "Confirm Password is required";
        if (!address) newErrors.address = "Address is required";
        if (password !== confirmPassword)
            newErrors.passwordMatch = "Passwords do not match";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await fetch(
                "https://saptavidhi-vendor-api.onrender.com/api/vendor/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        brand_name: brandName,
                        contact_person_name: contactPersonName,
                        email: email,
                        pincode: pincode,
                        mobile_number: mobile,
                        address: address,
                        password: password,
                        state: state,
                        city: city,
                        vendor_type: vendorType,
                    }),
                }
            );
            const data = await response.json();
            if (data.success) {
                localStorage.setItem("token", data.token);
                navigate("/", { replace: true });
                window.location.reload();
            } else {
                console.log(data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <div className="font-poppins flex flex-col gap-5 md:mx-auto bg-[#f5f5f5]">
            <div className="px-5">
                <div className="flex flex-col items-center gap-9 md:mt-6 md:max-w-[800px] md:mx-auto">
                    <p className="font-[600] text-2xl md:text-3xl">
                        SignUp as Vendor
                    </p>
                    <div className="border-[#FD3E42] border-[1px] rounded-3xl px-6 py-5 sm:p-8 md:p-12 flex flex-col gap-6 sm:gap-8 md:gap-9 md:w-full sm:w-auto">
                        <div className="flex flex-col md:flex-row justify-between gap-12 flex-wrap">
                            <div className="flex flex-col gap-12 flex-grow md:max-w-[50%]">
                                <div>
                                    <input
                                        type="text"
                                        className="border-b-[1px] focus:outline-none border-[#FD3E42] text-sm md:text-base bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto"
                                        placeholder="Brand Name"
                                        value={brandName}
                                        onChange={(e) =>
                                            setBrandName(e.target.value)
                                        }
                                    />
                                    {errors.brandName && (
                                        <p className="text-red-500 text-xs">
                                            {errors.brandName}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <select
                                        onChange={handleStateChange}
                                        className="border-b-[1px] focus:outline-none border-[#FD3E42] text-sm md:text-base bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto"
                                    >
                                        <option
                                            className="text-slate-400"
                                            disabled
                                            selected
                                        >
                                            State
                                        </option>
                                        {allStates.map((state) => (
                                            <option
                                                key={state.isoCode}
                                                value={state.name}
                                            >
                                                {state.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.state && (
                                        <p className="text-red-500 text-xs">
                                            {errors.state}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <select
                                        disabled={!state}
                                        onChange={(e) =>
                                            setCity(e.target.value)
                                        }
                                        className="border-b-[1px] focus:outline-none border-[#FD3E42] text-sm md:text-base bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto"
                                    >
                                        <option
                                            className="text-slate-400"
                                            disabled
                                            selected
                                        >
                                            City
                                        </option>
                                        {allCities.map((city) => (
                                            <option
                                                key={city.name}
                                                value={city.name}
                                            >
                                                {city.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.city && (
                                        <p className="text-red-500 text-xs">
                                            {errors.city}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        className="border-b-[1px] focus:outline-none border-[#FD3E42] text-sm md:text-base bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto"
                                        placeholder="Pincode"
                                        value={pincode}
                                        onChange={(e) =>
                                            setPincode(e.target.value)
                                        }
                                    />
                                    {errors.pincode && (
                                        <p className="text-red-500 text-xs">
                                            {errors.pincode}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        className="border-b-[1px] focus:outline-none border-[#FD3E42] text-sm md:text-base bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto"
                                        placeholder="Mobile Number"
                                        value={mobile}
                                        onChange={(e) =>
                                            setMobile(e.target.value)
                                        }
                                    />
                                    {errors.mobile && (
                                        <p className="text-red-500 text-xs">
                                            {errors.mobile}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col gap-12 flex-grow md:max-w-[50%]">
                                <div>
                                    <input
                                        type="text"
                                        className="border-b-[1px] focus:outline-none border-[#FD3E42] text-sm md:text-base bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto"
                                        placeholder="Contact Person Name"
                                        value={contactPersonName}
                                        onChange={(e) =>
                                            setContactPersonName(e.target.value)
                                        }
                                    />
                                    {errors.contactPersonName && (
                                        <p className="text-red-500 text-xs">
                                            {errors.contactPersonName}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <select
                                        value={vendorType}
                                        onChange={(e) =>
                                            setVendorType(e.target.value)
                                        }
                                        name="vendor_type"
                                        className="border-b-[1px] focus:outline-none border-[#FD3E42] text-sm md:text-base bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto"
                                    >
                                        <option
                                            className=""
                                            disabled
                                            value="Select Vendor Type"
                                            selected
                                        >
                                            Select Vendor Type
                                        </option>
                                        {vendorTypeData.map((vendor, idx) => (
                                            <option
                                                key={idx}
                                                value={vendor.name}
                                            >
                                                {vendor.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.vendorType && (
                                        <p className="text-red-500 text-xs">
                                            {errors.vendorType}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        className="border-b-[1px] focus:outline-none border-[#FD3E42] text-sm md:text-base bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        className="border-b-[1px] focus:outline-none border-[#FD3E42] text-sm md:text-base bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    {errors.password && (
                                        <p className="text-red-500 text-xs">
                                            {errors.password}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        className="border-b-[1px] focus:outline-none border-[#FD3E42] text-sm md:text-base bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) =>
                                            setConfirmPassword(e.target.value)
                                        }
                                    />
                                    {errors.confirmPassword && (
                                        <p className="text-red-500 text-xs">
                                            {errors.confirmPassword}
                                        </p>
                                    )}
                                    {errors.passwordMatch && (
                                        <p className="text-red-500 text-xs">
                                            {errors.passwordMatch}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div>
                            <input
                                type="text"
                                className=" border-b-[1px] focus:outline-none border-[#FD3E42] text-sm md:text-base bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto"
                                placeholder="Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            {errors.address && (
                                <p className="text-red-500 text-xs">
                                    {errors.address}
                                </p>
                            )}
                        </div>
                        <div
                            onClick={handleSignup}
                            className="font-[700] text-sm sm:text-xl py-2 sm:py-3 px-4 w-fit self-center sm:px-8 rounded-full bg-gradient-to-r from-[#F97096] to-[#FD0707CC] text-white cursor-pointer"
                        >
                            Register
                        </div>
                        <div className="font-[600] text-xs md:text-base cursor-pointer w-fit self-center">
                            Already have an account?{" "}
                            <span
                                className="text-[#FD3E42] underline cursor-pointer"
                                onClick={() => navigate("/login")}
                            >
                                Login
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#EDF4F8] p-6 sm:p-10 md:p-14">
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
                    <p className="font-[600] text-xl sm:text-2xl">
                        In search of a life partner?
                    </p>
                    <div>
                        <span className="font-[600] text-2xl sm:text-4xl">
                            Download{" "}
                        </span>
                        <span className="font-[400] text-lg sm:text-2xl">
                            The
                            <br />
                        </span>
                        <p className="font-[600] text-2xl sm:text-4xl">
                            SaptaVidhi App
                        </p>
                    </div>
                    <div className="flex justify-between mt-4">
                        <img
                            src="/playstore.png"
                            className="w-24 h-8 sm:w-36 sm:h-12"
                            alt="Play Store"
                        />
                        <img
                            src="/appstore.png"
                            className="w-24 h-8 sm:w-36 sm:h-12"
                            alt="App Store"
                        />
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default VendorSignup;
