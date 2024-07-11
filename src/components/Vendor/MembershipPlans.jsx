import { useContext, useEffect, useState } from "react";
import Packages from "./Packages";
import { UserContext } from "../../context/UserContext";

const token = localStorage.getItem("token");

const BASE_URL = import.meta.env.DEV
    ? // ? import.meta.env.VITE_API_BASE_URL_DEV
      "http://127.0.0.1:8000/api"
    : import.meta.env.VITE_API_BASE_URL_PROD;

const MembershipPlans = () => {
    const [plans, setPlans] = useState([]);

    const [bookedPlan, setBookedPlan] = useState(null);

    const { user } = useContext(UserContext);

    const fetchMembershipPlans = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/membership-plans/get-all`,
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
                setPlans(jsonData.data);
                console.log(jsonData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getBookings = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/get-membership-details?vendor_id=${user._id}`,
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
                setBookedPlan(jsonData.data);
            } else {
                fetchMembershipPlans();
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user) {
            getBookings();
        }
    }, [user]);

    return (
        <div className="relative flex flex-col gap-2 w-full border-2 p-5 md:p-8 rounded-3xl">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-md md:text-xl font-semibold">
                    Membership Plans
                </h2>
            </div>
            <hr className="mb-4" />
            {bookedPlan ? (
                <div> {bookedPlan.days_remaining} </div>
            ) : (
                <div className="flex flex-row flex-wrap justify-around gap-5 md:gap-12 p-3 md:p-5">
                    {plans &&
                        plans.map((el) => (
                            <Packages
                                key={el._id}
                                membership_category={el.membership_category}
                                price={el.price}
                                features={el.features}
                                id={el._id}
                            />
                        ))}
                </div>
            )}
        </div>
    );
};

export default MembershipPlans;
