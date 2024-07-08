import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { State, City } from "country-state-city";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const VendorSignup = () => {
    const navigate = useNavigate();

    const BASE_URL = import.meta.env.DEV
        // ? import.meta.env.VITE_API_BASE_URL_DEV
        ? "http://127.0.0.1:8000/api"
        : import.meta.env.VITE_API_BASE_URL_PROD;

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

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const allStates = State.getStatesOfCountry("IN");
    const [allCities, setAllCities] = useState([]);

    const [vendorTypeData, setVendorTypeData] = useState([]);

    const handleStateChange = (e) => {
        const selectedState = e.target.value;
        setState(selectedState);
        setErrors((prevErrors) => ({ ...prevErrors, state: "" }));
        const stateCode = allStates.find(
            (s) => s.name === selectedState
        )?.isoCode;
        if (stateCode) {
            const cities = City.getCitiesOfState("IN", stateCode);
            setAllCities(cities);
        }
    };

    const handleMobileChange = (e) => {
        const value = e.target.value;
        if (value === "" || /^[0-9\b]+$/.test(value)) {
            setMobile(value);
            setErrors((prevErrors) => ({ ...prevErrors, mobile: "" }));
        }
    };

    const handlePincodeChange = (e) => {
        const value = e.target.value;
        if (value === "" || /^[0-9\b]+$/.test(value)) {
            setPincode(value);
            setErrors((prevErrors) => ({ ...prevErrors, pincode: "" }));
        }
    };

    const getAllCategories = async () => {
        try {
            const response = await fetch(`${BASE_URL}/vendor-category/getall`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const jsonData = await response.json();
            if (jsonData.success) {
                setVendorTypeData(jsonData.vendorCategories);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (setter, field) => (e) => {
        setter(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
    };

    const handleSignup = async () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!brandName) newErrors.brandName = "Brand Name is required";
        if (!state) newErrors.state = "State is required";
        if (!city) newErrors.city = "City is required";
        if (!pincode) newErrors.pincode = "Pincode is required";
        else if (pincode.length !== 6)
            newErrors.pincode = "Pincode must be 6 digits";
        if (!mobile) newErrors.mobile = "Mobile Number is required";
        else if (mobile.length !== 10)
            newErrors.mobile = "Mobile Number must be 10 digits";
        if (!contactPersonName)
            newErrors.contactPersonName = "Contact Person Name is required";
        if (vendorType === "Select Vendor Type")
            newErrors.vendorType = "Vendor Type is required";
        if (!email) newErrors.email = "Email is required";
        else if (!emailRegex.test(email))
            newErrors.email = "Enter a valid email";
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
            const response = await fetch(`${BASE_URL}/vendor/signup`, {
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
            });
            const data = await response.json();
            if (data.success) {
                localStorage.setItem("token", data.token);
                navigate("/", { replace: true });
                window.location.reload();
            } else {
                return toast.error(data.message);
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

    useEffect(() => {
        getAllCategories();
    }, []);

    return (
        <div className="font-poppins flex flex-col gap-5">
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="custom-container flex flex-col items-center mx-5 md:mx-auto gap-4 md:gap-9 mt-0 md:mt-6 max-w-[350px] md:max-w-[700px]">
                <p className="font-[600] text-lg md:text-2xl">
                    SignUp as Vendor
                </p>
                <div className="border-[#FD3E42] border-[1px] rounded-3xl px-6 py-5 md:p-6 flex flex-col justify-center items-center gap-5 md:gap-9 w-full sm:w-auto">
                    <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 w-full flex-wrap">
                        <div className="flex flex-col gap-4 md:gap-8 md:w-[48%]">
                            <div>
                                <input
                                    type="text"
                                    className="border-b-[1px] focus:outline-none border-[#FD3E42] text-xs md:text-sm bg-transparent pb-1 md:pb-2 w-full"
                                    placeholder="Brand Name"
                                    value={brandName}
                                    onChange={handleInputChange(
                                        setBrandName,
                                        "brandName"
                                    )}
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
                                    className="border-b-[1px] focus:outline-none border-[#FD3E42] text-xs md:text-sm bg-transparent pb-1 md:pb-2 w-full"
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
                                    onChange={(e) => {
                                        setCity(e.target.value);
                                        setErrors((prevErrors) => ({
                                            ...prevErrors,
                                            city: "",
                                        }));
                                    }}
                                    className="border-b-[1px] focus:outline-none border-[#FD3E42] text-xs md:text-sm bg-transparent pb-1 md:pb-2 w-full"
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
                                    className="border-b-[1px] focus:outline-none border-[#FD3E42] text-xs md:text-sm bg-transparent pb-1 md:pb-2 w-full"
                                    placeholder="Pincode"
                                    value={pincode}
                                    onChange={handlePincodeChange}
                                    maxLength={6}
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
                                    className="border-b-[1px] focus:outline-none border-[#FD3E42] text-xs md:text-sm bg-transparent pb-1 md:pb-2 w-full"
                                    placeholder="Mobile Number"
                                    value={mobile}
                                    onChange={handleMobileChange}
                                    maxLength={10}
                                />
                                {errors.mobile && (
                                    <p className="text-red-500 text-xs">
                                        {errors.mobile}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-8 md:w-[48%]">
                            <div>
                                <input
                                    type="text"
                                    className="border-b-[1px] focus:outline-none border-[#FD3E42] text-xs md:text-sm bg-transparent pb-1 md:pb-2 w-full"
                                    placeholder="Contact Person Name"
                                    value={contactPersonName}
                                    onChange={handleInputChange(
                                        setContactPersonName,
                                        "contactPersonName"
                                    )}
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
                                    onChange={(e) => {
                                        setVendorType(e.target.value);
                                        setErrors((prevErrors) => ({
                                            ...prevErrors,
                                            vendorType: "",
                                        }));
                                    }}
                                    name="vendor_type"
                                    className="border-b-[1px] focus:outline-none border-[#FD3E42] text-xs md:text-sm bg-transparent pb-1 md:pb-2 w-full"
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
                                        <option key={idx} value={vendor.name}>
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
                                    className="border-b-[1px] focus:outline-none border-[#FD3E42] text-xs md:text-sm bg-transparent pb-1 md:pb-2 w-full"
                                    placeholder="Email"
                                    value={email}
                                    onChange={handleInputChange(
                                        setEmail,
                                        "email"
                                    )}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="border-b-[1px] focus:outline-none border-[#FD3E42] text-xs md:text-sm bg-transparent pb-1 md:pb-2 w-full"
                                    placeholder="Password"
                                    value={password}
                                    onChange={handleInputChange(
                                        setPassword,
                                        "password"
                                    )}
                                />
                                <div
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    {showPassword ? (
                                        <IoEyeOff color="gray" size={20} />
                                    ) : (
                                        <IoEye color="gray" size={20} />
                                    )}
                                </div>
                                {errors.password && (
                                    <p className="text-red-500 text-xs">
                                        {errors.password}
                                    </p>
                                )}
                            </div>
                            <div className="relative">
                                <input
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    className="border-b-[1px] focus:outline-none border-[#FD3E42] text-xs md:text-sm bg-transparent pb-1 md:pb-2 w-full"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={handleInputChange(
                                        setConfirmPassword,
                                        "confirmPassword"
                                    )}
                                />
                                <div
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                >
                                    {showConfirmPassword ? (
                                        <IoEyeOff color="gray" size={20} />
                                    ) : (
                                        <IoEye color="gray" size={20} />
                                    )}
                                </div>
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
                    <div className="w-full">
                        <input
                            type="text"
                            className="border-b-[1px] focus:outline-none border-[#FD3E42] text-xs md:text-sm bg-transparent pb-1 md:pb-2 w-full"
                            placeholder="Address"
                            value={address}
                            onChange={handleInputChange(setAddress, "address")}
                        />
                        {errors.address && (
                            <p className="text-red-500 text-xs">
                                {errors.address}
                            </p>
                        )}
                    </div>
                    <div
                        onClick={handleSignup}
                        className="font-[700] text-sm sm:text-base py-2 sm:py-2 px-4 w-fit self-center sm:px-5 rounded-full bg-gradient-to-r from-[#F97096] to-[#FD0707CC] text-white cursor-pointer"
                    >
                        Register
                    </div>
                    <div className="font-[600] text-xs md:text-sm cursor-pointer w-fit self-center">
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

            <div className="bg-[#EDF4F8] p-6 sm:p-10 md:p-14">
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 custom-container">
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
