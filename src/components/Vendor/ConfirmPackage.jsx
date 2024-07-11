import { useContext, useEffect, useState } from "react";
import Packages from "./Packages";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const token = localStorage.getItem("token");

const BASE_URL = import.meta.env.DEV
    ? // ? import.meta.env.VITE_API_BASE_URL_DEV
      "http://127.0.0.1:8000/api"
    : import.meta.env.VITE_API_BASE_URL_PROD;

const ConfirmPackage = () => {
    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    const locator = useLocation();

    const [plan, setPlan] = useState(null);
    const [paymentData, setPaymentData] = useState(null);

    const fetchMembershipPlan = async () => {
        const locatorArray = locator.pathname.split("/");
        try {
            const response = await fetch(
                `${BASE_URL}/membership-plans/get-membership?membership_id=${locatorArray[3]}`,
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
                setPlan(jsonData.data);
                console.log(jsonData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const fetchPaymentDetails = async () => {
        const locatorArray = locator.pathname.split("/");
        if (locatorArray.length > 4) {
            try {
                const response = await fetch(
                    `${BASE_URL}/payment/get-payment-status?merchantTransactionId=${locatorArray[4]}`,
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
                    setPaymentData(jsonData.data);
                    console.log(jsonData.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleMakePayment = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/payment/initiate-payment`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        amount: plan.price,
                        vendor_id: user._id,
                        membership_id: plan._id,
                        mobile: user.mobile_number,
                        link: locator.pathname,
                    }),
                }
            );
            const jsonData = await response.json();
            window.location.href = jsonData.data.url;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMembershipPlan();
    }, []);

    useEffect(() => {
        fetchPaymentDetails();
    }, [locator.pathname]);

    return (
        <div className="relative flex flex-col gap-2 w-full border-2 p-5 md:p-8 rounded-3xl">
            <div className="flex items-center mb-2">
                <img
                    onClick={() => navigate(-1)}
                    src="/backbtn.png"
                    className="w-20 h-20 sm:w-16 sm:h-16 md:w-14 md:h-14 cursor-pointer"
                    alt="back button"
                />
                <h2 className="text-md md:text-xl font-semibold">
                    {plan?.membership_category}
                </h2>
            </div>
            <hr className="mb-4" />
            <div className="flex w-full">
                <div className="flex flex-col gap-5 flex-grow">
                    <div>
                        <p>
                            Price :{" "}
                            <span className="text-[#CF166F] font-[500]">
                                ₹ {plan?.price?.toLocaleString("en-IN")}
                            </span>
                        </p>
                    </div>
                    <div>
                        <p>Features :</p>
                        <div className="ml-5 flex flex-col gap-1">
                            {plan?.features?.map((el) => (
                                <li
                                    key={el?._id}
                                    className="text-sm text-gray-600"
                                >
                                    {el?.name}
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
                {paymentData && (
                    <div className="flex flex-col gap-5 flex-grow">
                        <div>
                            <p className="text-base font-[500]">
                                Payment Details
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>
                                Status :{" "}
                                <span className="text-sm font-[600]">
                                    {paymentData?.code}
                                </span>
                            </p>
                            <p>
                                Amount :{" "}
                                <span className="text-[#CF166F] font-[600]">
                                    ₹{" "}
                                    {(
                                        paymentData?.data?.amount / 100
                                    )?.toLocaleString("en-IN")}
                                </span>
                            </p>
                            <p>
                                Transaction ID :{" "}
                                <span className="text-sm font-[600]">
                                    {paymentData?.data?.transactionId}
                                </span>
                            </p>
                            <p>
                                Payment Mode :{" "}
                                <span className="text-sm font-[600]">
                                    {paymentData?.data?.paymentInstrument?.type}
                                </span>
                            </p>
                            {paymentData?.data?.paymentInstrument
                                ?.pgTransactionId && (
                                <p>
                                    PG Transaction ID :{" "}
                                    <span className="text-sm font-[600]">
                                        {
                                            paymentData?.data?.paymentInstrument
                                                ?.pgTransactionId
                                        }
                                    </span>
                                </p>
                            )}
                            {paymentData?.data?.paymentInstrument
                                ?.bankTransactionId && (
                                <p>
                                    Bank Transaction ID :{" "}
                                    <span className="text-sm font-[600]">
                                        {
                                            paymentData?.data?.paymentInstrument
                                                ?.bankTransactionId
                                        }
                                    </span>
                                </p>
                            )}
                            {paymentData?.data?.paymentInstrument?.arn && (
                                <p>
                                    ARN :{" "}
                                    <span className="text-sm font-[600]">
                                        {
                                            paymentData?.data?.paymentInstrument
                                                ?.arn
                                        }
                                    </span>
                                </p>
                            )}
                            {paymentData?.data?.paymentInstrument
                                ?.pgServiceTransactionId && (
                                <p>
                                    PG Service Transaction ID :{" "}
                                    <span className="text-sm font-[600]">
                                        {
                                            paymentData?.data?.paymentInstrument
                                                ?.pgServiceTransactionId
                                        }
                                    </span>
                                </p>
                            )}
                            {paymentData?.data?.paymentInstrument?.bankId && (
                                <p>
                                    Bank ID :{" "}
                                    <span className="text-sm font-[600]">
                                        {
                                            paymentData?.data?.paymentInstrument
                                                ?.bankId
                                        }
                                    </span>
                                </p>
                            )}
                            {paymentData?.data?.paymentInstrument?.utr && (
                                <p>
                                    UTR :{" "}
                                    <span className="text-sm font-[600]">
                                        {
                                            paymentData?.data?.paymentInstrument
                                                ?.utr
                                        }
                                    </span>
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <div className="flex w-full justify-end">
                {paymentData ? (
                    <div
                        onClick={() =>
                            navigate("/profile/personal-information")
                        }
                        className={`cursor-pointer bg-gradient-to-r from-[#5C0340] to-[#CF166F] text-white md:px-3 md:py-1 w-fit rounded-full font-bold h-fit md:text-sm text-xs px-3 py-1`}
                    >
                        GO TO PROFILE
                    </div>
                ) : (
                    <div
                        onClick={handleMakePayment}
                        className={`cursor-pointer bg-gradient-to-r from-[#5C0340] to-[#CF166F] text-white md:px-3 md:py-1 w-fit rounded-full font-bold h-fit md:text-sm text-xs px-3 py-1`}
                    >
                        MAKE PAYMENT
                    </div>
                )}
            </div>
        </div>
    );
};

export default ConfirmPackage;
