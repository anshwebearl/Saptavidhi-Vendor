import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate();
    return (
        <div className="font-poppins flex flex-col gap-5 md:mx-auto bg-[#f5f5f5]">
            <div className="px-0">
                <img
                    src="/backbtn.png"
                    className="w-20 h-20 sm:w-16 sm:h-16 md:w-20 md:h-20 cursor-pointer"
                    alt="back button"
                    onClick={()=>navigate(-1)}
                />
                <div className="flex flex-col items-center gap-9 md:mt-6 md:max-w-[450px] md:mx-auto">
                    <p className="font-[600] text-2xl md:text-4xl">
                        Forgot Password
                    </p>
                    <div className="border-[#FD3E42] border-[1px] rounded-3xl px-6 py-5 sm:p-8 md:p-12 flex flex-col gap-6 sm:gap-8 md:gap-9 items-center md:w-full sm:w-auto">
                        <input
                            type="email"
                            className="border-b-[1px]  focus:outline-none border-[#FD3E42] text-sm md:text-lg bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto"
                            placeholder="Enter Email"
                        />

                        <div onClick={()=>navigate("/vendorotp")} className="font-[700] text-sm sm:text-xl py-2 sm:py-3 px-4 sm:px-8 rounded-full bg-gradient-to-r from-[#F97096] to-[#FD0707CC] text-white cursor-pointer">
                            Continue
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

export default ForgotPassword;
