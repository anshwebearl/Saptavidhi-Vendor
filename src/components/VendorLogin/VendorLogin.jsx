import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoEye, IoEyeOff } from "react-icons/io5";

const VendorLogin = () => {
    const BASE_URL = import.meta.env.DEV
        ? import.meta.env.VITE_API_BASE_URL_DEV
        : import.meta.env.VITE_API_BASE_URL_PROD;

    const navigate = useNavigate();
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const [showPassword, setShowPassword] = useState(false);

    const { user } = useContext(UserContext);

    const handleLogin = async () => {
        const newErrors = {};
        if (!mobile) newErrors.mobile = "Mobile Number is required";
        else if (mobile.length !== 10)
            newErrors.mobile = "Mobile Number must be 10 digits";
        if (!password) newErrors.password = "Password is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

        try {
            const response = await fetch(`${BASE_URL}/vendor/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    mobile_number: mobile,
                    password: password,
                }),
            });
            const data = await response.json();
            if (data.success) {
                localStorage.setItem("token", data.token);
                navigate("/", { replace: true });
                toast.success("Logged in Successgully");
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

    const handleMobileChange = (e) => {
        setErrors((prev) => ({ ...prev, mobile: "" }));
        const value = e.target.value;
        const re = /^[0-9]*$/; // Updated regex to allow empty string and digits only
        if (re.test(value)) {
            setMobile(value);
        }
    };

    return (
        <div className="font-poppins flex flex-col gap-5 md:mx-auto bg-[#f5f5f5]">
            <div className="px-0 custom-container">
                <div className="flex flex-col items-center gap-9 md:mt-6 md:max-w-[450px] md:mx-auto">
                    <p className="font-[600] text-2xl md:text-4xl">
                        Login to your account
                    </p>
                    <div className="border-[#FD3E42] border-[1px] rounded-3xl px-6 py-5 sm:p-8 md:p-12 flex flex-col gap-6 sm:gap-8 md:gap-9 items-center md:w-full sm:w-auto">
                        <div className="w-full">
                            <input
                                className="remove-arrow border-b-[1px] focus:outline-none border-[#FD3E42] text-sm md:text-lg bg-transparent pb-2 sm:pb-4 w-full"
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
                        <div className="w-full relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="border-b-[1px] focus:outline-none border-[#FD3E42] text-sm md:text-lg bg-transparent pb-2 sm:pb-4 w-full"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setErrors((prev) => ({
                                        ...prev,
                                        password: "",
                                    }));
                                }}
                            />
                            <div
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
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
                        <div
                            onClick={handleLogin}
                            className="font-[700] text-sm sm:text-xl py-2 sm:py-3 px-4 sm:px-8 rounded-full bg-gradient-to-r from-[#F97096] to-[#FD0707CC] text-white cursor-pointer"
                        >
                            Login
                        </div>
                        <div
                            className="font-[600] text-xs md:text-base cursor-pointer"
                            onClick={() => navigate("/forgotpassword")}
                        >
                            Forget Password?
                        </div>
                        <div className="font-[600] text-xs md:text-base cursor-pointer">
                            Don't have an account?{" "}
                            <span
                                className="text-[#FD3E42] underline cursor-pointer"
                                onClick={() => navigate("/vendorsignup")}
                            >
                                SignUp
                            </span>
                        </div>
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

export default VendorLogin;
