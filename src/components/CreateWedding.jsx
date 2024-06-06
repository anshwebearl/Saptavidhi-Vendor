import { useContext, useEffect, useState } from "react";
import createWedding from "../assets/images/create_wedding.png";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const CreateWedding = () => {
    return (
        <div className="font-poppins flex flex-col gap-5 mx-auto bg-[#f5f5f5]">
            <div className="relative h-[800px] w-full md:h-[600px]">
                <div
                    className={`absolute inset-0 bg-[url('/create_wedding.png')] bg-cover bg-center`}
                    style={{ backgroundImage: `url(${createWedding})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                <div className="absolute w-full h-full px-8 md:px-24 flex items-center">
                    <div className="flex justify-center w-full items-center flex-wrap md:justify-between gap-4 md:gap-10">
                        <div className="flex flex-col gap-3 md:gap-6">
                            <p className="text-white font-[600] text-3xl md:text-5xl">
                                Your Wedding, Your Way!
                            </p>
                            <p className="text-white font-[400] text:lg md:text-2xl max-w-[500px]">
                                Simplify and manage all your wedding planning
                                needs on Saptavidhi
                            </p>
                            <p className="text-white font-[600] text-2xl md:text-3xl">
                                Download Our Free App!
                            </p>
                            <img
                                src="/playstore_dark.png"
                                className="cursor-pointer w-32 h-14 md:w-52 md:h-20 p-0"
                                alt=""
                            />
                        </div>
                        <div className="bg-white rounded-3xl md:full max-w-[300px] p-5 flex flex-col gap-3 md:gap-5">
                            <p className="font-[500] text-lg md:text-xl">
                                I am the
                            </p>
                            <div className="flex gap-8">
                                <div className="flex gap-1">
                                    <input
                                        type="radio"
                                        id="groom"
                                        name="role"
                                        className="accent-[#CF166F]"
                                    />
                                    <label htmlFor="groom">Groom</label>
                                </div>
                                <div className="flex gap-1">
                                    <input
                                        type="radio"
                                        id="bride"
                                        name="role"
                                        className="accent-[#CF166F]"
                                    />
                                    <label htmlFor="bride">Bride</label>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <p>Wedding Title</p>
                                    <input
                                        type="text"
                                        className="rounded-xl border-[1px] border-[#FF8DA680] px-3 py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px] "
                                        placeholder="eg. Manu weds Tanu"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p>Location</p>
                                    <input
                                        type="text"
                                        className="rounded-xl border-[1px] border-[#FF8DA680] px-3 py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px] "
                                        placeholder="Select Location"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p>Function Date</p>
                                    <input
                                        type="text"
                                        className="rounded-xl border-[1px] border-[#FF8DA680] px-3 py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]"
                                        placeholder="Select Date"
                                    />
                                </div>
                                <div className="text-white rounded-2xl font-[500] text-lg md:text-xl text-center p-3 bg-gradient-to-r from-[#FD070780] to-[#5C034080] cursor-pointer">
                                    Create Wedding
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-8 flex justify-center">
                <div className="border-[1px] border-[#00000033] p-4 rounded-3xl w-fit flex flex-col gap-5">
                    <p className="font-[500] text-xl md:text-3xl text-center">
                        Why Should you sign up?
                    </p>
                    <div className="border-[1px] border-[#00000033]"></div>
                    <div className="flex flex-col w-full gap-5 px-4 md:px-8 md:flex-row md:justify-between md:items-start">
                        <div className="flex md:flex-col items-center gap-4">
                            <img
                                src="/mail.png"
                                className="w-10 h-fit md:w-12"
                                alt=""
                            />
                            <div className="md:flex flex-col items-center">
                                <p className="font-[500] md:text-lg">Inbox</p>
                                <p className="text-[#00000099] max-w-66 font-[400] text-xs md:text-sm md:text-center md:max-w-64">
                                    Send queries directly to vendors without
                                    sharing contact details
                                </p>
                            </div>
                        </div>
                        <div className="flex md:flex-col items-center gap-4">
                            <img
                                src="/collaborate.png"
                                className="w-10 h-fit md:w-10"
                                alt=""
                            />
                            <div className="md:flex flex-col items-center">
                                <p className="font-[500] md:text-lg">
                                    Collaborate
                                </p>
                                <p className="text-[#00000099] max-w-66 font-[400] text-xs md:text-sm md:text-center md:max-w-64">
                                    Bring your special someone and loved ones
                                    together to plan your wedding
                                </p>
                            </div>
                        </div>
                        <div className="flex md:flex-col items-center gap-4">
                            <img
                                src="/tick.png"
                                className="w-10 h-fit md:w-12"
                                alt=""
                            />
                            <div className="md:flex flex-col items-center">
                                <p className="font-[500] md:text-lg leading-1">
                                    Shortlist and Finalize Vendors
                                </p>
                                <p className="text-[#00000099] max-w-66 font-[400] text-xs md:text-sm md:text-center md:max-w-64">
                                    Keep track of vendors that have caught your
                                    eye
                                </p>
                            </div>
                        </div>
                        <div className="flex md:flex-col items-center gap-4">
                            <img
                                src="/checklist.png"
                                className="w-10 h-fit md:w-10"
                                alt=""
                            />
                            <div className="md:flex flex-col items-center">
                                <p className="font-[500] md:text-lg">
                                    Checklist
                                </p>
                                <p className="text-[#00000099] max-w-66 font-[400] text-xs md:text-sm md:text-center md:max-w-64">
                                    Stay on top of wedding planning with the
                                    help of an organized checklist
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CreateWedding;
