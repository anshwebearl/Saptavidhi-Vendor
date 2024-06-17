/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import BanquetCard from "./BanquetCard";
import { UserContext } from "../../../context/UserContext";
import BanquetModal from "./BanquetModal";
import { ToastContainer, toast } from "react-toastify";
import UpdateBanquetModal from "./UpdateBanquetModal";

function Banquet() {
    const { user } = useContext(UserContext);

    const token = localStorage.getItem("token");

    const BASE_URL = import.meta.env.DEV
        ? import.meta.env.VITE_API_BASE_URL_DEV
        : import.meta.env.VITE_API_BASE_URL_PROD;

    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [selectedBanquet, setSelectedBanquet] = useState(null);

    const [banquets, setBanquets] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [banquetId, setBanquetId] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        banquet_type: "",
        state: "",
        city: "",
        fixed_capacity: "",
        max_capacity: "",
        cover_photo: null,
        additional_photos: [],
    });
    const [errors, setErrors] = useState({
        title: false,
        banquet_type: false,
        state: false,
        city: false,
        fixed_capacity: false,
        max_capacity: false,
        cover_photo: false,
        additional_photos: false,
    });

    const [updationFormData, setUpdationFormData] = useState({
        title: "",
        banquet_type: "",
        state: "",
        city: "",
        fixed_capacity: "",
        max_capacity: "",
        existing_cover_photo: null,
        existing_additional_photos: [],
        updated_cover_photo: null,
        updated_additional_photos: [],
    });

    const openUpdateModal = (id) => {
        const banquet = banquets.find((item) => item._id === id);
        if (banquet) {
            setSelectedBanquet(banquet);
            setUpdationFormData({
                title: banquet.title,
                banquet_type: banquet.banquet_type,
                state: banquet.state,
                city: banquet.city,
                fixed_capacity: banquet.fixed_capacity,
                max_capacity: banquet.max_capacity,
                existing_cover_photo: banquet.cover_photo,
                existing_additional_photos: banquet.additional_photos,
                updated_cover_photo: null,
                updated_additional_photos: [],
            });
            setIsUpdateModalOpen(true);
        }
    };

    const closeUpdateModal = () => {
        setIsUpdateModalOpen(false);
        setSelectedBanquet(null);
        setUpdationFormData({
            title: "",
            banquet_type: "",
            state: "",
            city: "",
            fixed_capacity: "",
            max_capacity: "",
            existing_cover_photo: null,
            existing_additional_photos: [],
            updated_cover_photo: null,
            updated_additional_photos: [],
        });
        setErrors({
            title: false,
            banquet_type: false,
            state: false,
            city: false,
            fixed_capacity: false,
            max_capacity: false,
            cover_photo: false,
            additional_photos: false,
        });
    };

    const handleUpdateBanquet = async () => {
        try {
            const token = localStorage.getItem("token");
            const vendorId = user._id; // Assuming user._id is accessible from your context
            const banquetid = selectedBanquet._id; // Assuming selectedBanquet is set correctly

            const formDataToSend = new FormData();
            formDataToSend.append("banquet_id", banquetid);
            formDataToSend.append("title", updationFormData.title);
            formDataToSend.append(
                "banquet_type",
                updationFormData.banquet_type
            );
            formDataToSend.append(
                "fixed_capacity",
                updationFormData.fixed_capacity
            );
            formDataToSend.append(
                "max_capacity",
                updationFormData.max_capacity
            );
            formDataToSend.append("state", updationFormData.state);
            formDataToSend.append("city", updationFormData.city);
            formDataToSend.append(
                "existing_cover_photo",
                updationFormData.existing_cover_photo
            );
            formDataToSend.append(
                "existing_additional_photos",
                updationFormData.existing_additional_photos
            );

            // Append cover_photo if it's a file object
            if (updationFormData.updated_cover_photo instanceof File) {
                formDataToSend.append(
                    "updated_cover_photo",
                    updationFormData.updated_cover_photo
                );
            }

            // Append additional_photos if there are files
            if (updationFormData.updated_additional_photos.length > 0) {
                updationFormData.updated_additional_photos.forEach((photo) => {
                    if (photo instanceof File) {
                        formDataToSend.append(
                            "updated_additional_photos",
                            photo
                        );
                    }
                });
            }

            if (!formDataToSend.has("updated_additional_photos")) {
                formDataToSend.append("updated_additional_photos", []);
            }
            if (!formDataToSend.has("updated_cover_photo")) {
                formDataToSend.append("updated_cover_photo", null);
            }

            console.log(formDataToSend);

            const response = await fetch(
                `${BASE_URL}/vendor/update-banquet/${vendorId}`,
                {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: formDataToSend,
                }
            );

            const jsonData = await response.json();
            if (jsonData.success) {
                toast.success(jsonData.message);
                getBanquets();
                closeUpdateModal();
            } else {
                toast.error(jsonData.message || "Failed to update banquet");
            }
        } catch (error) {
            console.error("Error updating banquet:", error);
            toast.error("Failed to update banquet. Please try again later.");
        }
    };

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
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleCloseModal = () => {
        setShowAddModal(false);
        setFormData({
            title: "",
            banquet_type: "",
            state: "",
            city: "",
            fixed_capacity: "",
            max_capacity: "",
            cover_photo: null,
            additional_photos: [],
        });
        setErrors({
            title: false,
            banquet_type: false,
            state: false,
            city: false,
            fixed_capacity: false,
            max_capacity: false,
            cover_photo: false,
            additional_photos: false,
        });
    };

    const handleAddBanquet = async () => {
        try {
            const formDataToSend = new FormData();
            formDataToSend.append("title", formData.title);
            formDataToSend.append("banquet_type", formData.banquet_type);
            formDataToSend.append("state", formData.state);
            formDataToSend.append("city", formData.city);
            formDataToSend.append("fixed_capacity", formData.fixed_capacity);
            formDataToSend.append("max_capacity", formData.max_capacity);
            formDataToSend.append("cover_photo", formData.cover_photo);
            formData.additional_photos.forEach((photo) => {
                formDataToSend.append("additional_photos", photo);
            });

            const response = await fetch(
                `${BASE_URL}/vendor/add-banquet/${user._id}`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: formDataToSend,
                }
            );
            const jsonData = await response.json();
            if (jsonData.success) {
                toast.success(jsonData.message);
                getBanquets();
                handleCloseModal(); // Close the add modal
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

    const handleAddClick = () => {
        setShowAddModal(true);
    };

    useEffect(() => {
        getBanquets();
    }, []);

    return (
        <div className="relative flex flex-col gap-2 w-full border-[#00000033] border-[1px] p-5 md:px-5 md:py-8 rounded-3xl">
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
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-md md:text-2xl font-semibold">Banquets</h2>
                <div
                    onClick={handleAddClick}
                    className="font-semibold text-xs md:text-lg bg-gradient-to-r from-[#FD070780] to-[#5C034080] text-white px-2 py-1 md:px-4 md:py-2 rounded-2xl cursor-pointer"
                >
                    Add Banquet
                </div>
            </div>
            <hr className="mb-4" />
            <div className="flex flex-wrap gap-4 md:justify-start justify-center md:gap-4 w-full">
                {banquets.length !== 0 &&
                    banquets.map((item) => (
                        <BanquetCard
                            key={item._id}
                            id={item._id}
                            src={item.cover_photo.split("\\")[1]}
                            title={item.title.toUpperCase()}
                            fixed_capacity={item.fixed_capacity}
                            max_capacity={item.max_capacity}
                            location={`${item.city}, ${item.state}`}
                            subtitle={item.banquet_type}
                            handleDeleteModal={handleDeleteModal}
                            handleEditModal={openUpdateModal}
                        />
                    ))}
            </div>
            {showAddModal && (
                <BanquetModal
                    onClose={handleCloseModal}
                    handleAddBanquet={handleAddBanquet}
                    formData={formData}
                    setFormData={setFormData}
                    errors={errors}
                    setErrors={setErrors}
                />
            )}
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
            {isUpdateModalOpen && (
                <UpdateBanquetModal
                    onClose={closeUpdateModal}
                    updationFormData={updationFormData}
                    setUpdationFormData={setUpdationFormData}
                    errors={errors}
                    setErrors={setErrors}
                    handleUpdateBanquet={handleUpdateBanquet} // Pass the handleSubmit function
                    existingBanquetData={selectedBanquet} // Pass the selected banquet data
                />
            )}
        </div>
    );
}

export default Banquet;
