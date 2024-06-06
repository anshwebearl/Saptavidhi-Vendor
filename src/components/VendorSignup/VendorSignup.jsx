import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const VendorSignup = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [brandName, setBrandName] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [mobile, setMobile] = useState("");
    const [contactPersonName, setContactPersonName] = useState("");
    const [vendorType, setVendorType] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [address, setAddress] = useState("");

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            console.log("passwords dont match");
            return;
        }
        try {
            const response = await fetch(
                "http://localhost:8000/api/vendor/signup",
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
                document.cookie = `token=${data.token};max-age=86400`;
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
    }, [user]);

    return (
        <div className="font-poppins flex flex-col gap-5 md:mx-auto bg-[#f5f5f5]">
            <div className="px-5">
                <div className="flex flex-col items-center gap-9 md:mt-6 md:max-w-[800px] md:mx-auto">
                    <p className="font-[600] text-2xl md:text-3xl">
                        SignUp as Vendor
                    </p>
                    <div className="border-[#FD3E42] border-[1px] rounded-3xl px-6 py-5 sm:p-8 md:p-12 flex flex-col gap-6 sm:gap-8 md:gap-9 md:w-full sm:w-auto">
                        <div className="flex flex-col md:flex-row justify-between gap-12 flex-wrap">
                            <div className="flex flex-col gap-12 flex-grow">
                                <input
                                    type="text"
                                    className="border-b-[1px]  focus:outline-none border-[#FD3E42] text-sm md:text-base bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto"
                                    placeholder="Brand Name"
                                    value={brandName}
                                    onChange={(e) =>
                                        setBrandName(e.target.value)
                                    }
                                />
                                <input
                                    type="text"
                                    className="border-b-[1px]  focus:outline-none border-[#FD3E42] text-sm md:text-base bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto"
                                    placeholder="State"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="border-b-[1px]  focus:outline-none border-[#FD3E42] text-sm md:text-base bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto"
                                    placeholder="City"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                                {/* <select className="border-b-[1px] focus:outline-none border-[#FD3E42] text-sm md:text-base bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto">
                                    <option
                                        className="text-slate-400"
                                        disabled
                                        selected
                                    >
                                        State
                                    </option>
                                </select> */}
                                {/* <select className="border-b-[1px] focus:outline-none border-[#FD3E42] text-sm md:text-base bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto">
                                    <option
                                        className="text-slate-400"
                                        disabled
                                        selected
                                    >
                                        City
                                    </option>
                                </select> */}
                                <input
                                    type="text"
                                    className="border-b-[1px] focus:outline-none border-[#FD3E42] text-sm md:text-base bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto"
                                    placeholder="Pincode"
                                    value={pincode}
                                    onChange={(e) => setPincode(e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="border-b-[1px] focus:outline-none border-[#FD3E42] text-sm md:text-base bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto"
                                    placeholder="Mobile Number"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-12 flex-grow">
                                <input
                                    type="text"
                                    className="border-b-[1px] focus:outline-none border-[#FD3E42] text-sm md:text-base bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto"
                                    placeholder="Contact Person Name"
                                    value={contactPersonName}
                                    onChange={(e) =>
                                        setContactPersonName(e.target.value)
                                    }
                                />
                                <select
                                    value={vendorType}
                                    onChange={(e) =>
                                        setVendorType(e.target.value)
                                    }
                                    name="vendor_type"
                                    className="border-b-[1px] focus:outline-none border-[#FD3E42] text-sm md:text-base bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto"
                                >
                                    <option className="" disabled selected>
                                        Select Vendor Type
                                    </option>
                                    <option
                                        className=""
                                        id="vendor_type_1"
                                        value="vendor_type_1"
                                    >
                                        vendor type 1
                                    </option>
                                    <option
                                        className=""
                                        id="vendor_type_2"
                                        value="vendor_type_2"
                                    >
                                        vendor type 2
                                    </option>
                                </select>
                                <input
                                    type="email"
                                    className="border-b-[1px] focus:outline-none border-[#FD3E42] text-sm md:text-base bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="password"
                                    className="border-b-[1px] focus:outline-none border-[#FD3E42] text-sm md:text-base bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                <input
                                    type="password"
                                    className="border-b-[1px] focus:outline-none border-[#FD3E42] text-sm md:text-base bg-transparent pb-2 sm:pb-4 md:w-full sm:w-auto"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />
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
                        </div>
                        <div onClick={handleSignup} className="font-[700] text-sm sm:text-xl py-2 sm:py-3 px-4 w-fit self-center sm:px-8 rounded-full bg-gradient-to-r from-[#F97096] to-[#FD0707CC] text-white cursor-pointer">
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
