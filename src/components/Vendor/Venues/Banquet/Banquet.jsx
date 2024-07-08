/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import BanquetCard from "./BanquetCard";
import { UserContext } from "../../../../context/UserContext";
import { toast } from "react-toastify";

function Banquet({ handleNavigate }) {
    const { user } = useContext(UserContext);

    const token = localStorage.getItem("token");

    const BASE_URL = import.meta.env.DEV
        // ? import.meta.env.VITE_API_BASE_URL_DEV
        ? "http://127.0.0.1:8000/api"
        : import.meta.env.VITE_API_BASE_URL_PROD;

    const [banquets, setBanquets] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [banquetId, setBanquetId] = useState("");

    const getBanquets = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/get-banquets/${user._id}`,
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
                setBanquets(jsonData.banquets);
                console.log(jsonData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteModal = (id) => {
        setBanquetId(id);
        setShowDeleteModal(true);
    };

    const handleDeleteBanquet = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/delete-banquet/${user._id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        banquet_id: banquetId,
                    }),
                }
            );
            const jsonData = await response.json();
            if (jsonData.success) {
                toast.success(jsonData.message);
                getBanquets();
                setShowDeleteModal(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBanquets();
    }, [handleNavigate]);

    return (
        <div className="relative flex flex-col gap-2 w-full border-2 p-5 md:p-8 rounded-3xl">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-md md:text-xl font-semibold">Banquets</h2>
                <div
                    onClick={() => handleNavigate("add-banquet")}
                    className="font-semibold text-xs md:text-sm bg-gradient-to-r from-[#FD070780] to-[#5C034080] text-white px-2 py-1 md:px-4 md:py-2 rounded-2xl cursor-pointer"
                >
                    Add Banquet
                </div>
            </div>
            <hr className="mb-4" />
            <div className="flex flex-col xs:flex-row flex-wrap md:px-5 gap-5 w-full">
                {banquets?.map((banquet) => (
                    <BanquetCard
                        handleDeleteModal={handleDeleteModal}
                        key={banquet._id}
                        id={banquet._id}
                        src={banquet.cover_photo}
                        title={banquet.property_name.toUpperCase()}
                        location={`${banquet.city}, ${banquet.state}`}
                        banquet_type={banquet.banquet_type}
                        parking_capacity={banquet.parking_capacity}
                        guest_count={banquet.guest_count}
                        handleNavigate={handleNavigate}
                        veg_price={banquet.veg_price}
                        nonveg_price={banquet.nonveg_price}
                        room_count={banquet.room_count}
                    />
                ))}
            </div>
            {showDeleteModal && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50"
                    onClick={() => setShowDeleteModal(false)}
                >
                    <div
                        className="fixed inset-0 bg-black opacity-50"
                        onClick={(e) => e.stopPropagation()}
                    ></div>
                    <div
                        className="bg-white p-8 rounded-lg z-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl mb-4">Confirm Delete?</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleDeleteBanquet();
                            }}
                        >
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setShowDeleteModal(false)}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-md"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                >
                                    OK
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Banquet;
