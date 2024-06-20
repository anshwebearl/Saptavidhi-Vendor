import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdEdit, MdClose } from "react-icons/md";
import { ImCross } from "react-icons/im";

const BASE_IMAGE_URL = import.meta.env.DEV
    ? import.meta.env.VITE_IMAGE_URL_DEV
    : import.meta.env.VITE_IMAGE_URL_PROD;

const BASE_URL = import.meta.env.DEV
    ? import.meta.env.VITE_API_BASE_URL_DEV
    : import.meta.env.VITE_API_BASE_URL_PROD;

const VendorProjectViewAlbum = () => {
    const { id } = useParams();
    const { user } = useContext(UserContext);
    const token = localStorage.getItem("token");

    const [album, setAlbum] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [selectedPhotos, setSelectedPhotos] = useState(new Set());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const getAlbum = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/get-vendor-album?vendor_id=${user._id}&album_id=${id}`,
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
                setAlbum(jsonData.album);
            } else {
                setAlbum(null);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAlbum();
    }, []);

    const handleAddPhotos = async (event) => {
        const files = Array.from(event.target.files);
        const formData = new FormData();
        files.forEach((photo) => {
            formData.append("photos", photo);
        });
        formData.append("album_id", id);

        try {
            const response = await fetch(
                `${BASE_URL}/vendor/add-album-photos/${user._id}`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: formData,
                }
            );
            const jsonData = await response.json();
            if (jsonData.success) {
                getAlbum();
                toast.success(jsonData.message);
            } else {
                toast.error(jsonData.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setSelectedPhotos(new Set());
    };

    const handlePhotoClick = (photo) => {
        setSelectedPhotos((prev) => {
            const newSelectedPhotos = new Set(prev);
            if (newSelectedPhotos.has(photo)) {
                newSelectedPhotos.delete(photo);
            } else {
                newSelectedPhotos.add(photo);
            }
            return newSelectedPhotos;
        });
    };

    const handleSaveClick = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/delete-album-photos/${user._id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        album_id: id,
                        items_to_delete: Array.from(selectedPhotos),
                    }),
                }
            );
            const jsonData = await response.json();
            if (jsonData.success) {
                getAlbum();
                toast.success(jsonData.message);
            } else {
                toast.error(jsonData.message);
            }
            handleCancelClick();
        } catch (error) {
            console.log(error);
        }
    };

    const openModal = (photo) => {
        setCurrentImage(photo);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentImage(null);
    };

    return (
        <div>
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
            <div className="flex justify-between items-center">
                <p className="text-base md:text-lg font-bold md:mb-2">
                    {album?.album_title}
                </p>
                <div className="flex gap-3">
                    {isEditing ? (
                        <>
                            <button
                                onClick={handleCancelClick}
                                className="inline-block font-semibold text-xs md:text-sm bg-red-500 text-white px-2 py-1 md:px-4 md:py-2 rounded-2xl"
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <>
                            <label
                                className={`inline-block font-semibold text-xs md:text-sm bg-gradient-to-r from-[#FD070780] to-[#5C034080] text-white px-2 py-1 md:px-4 md:py-2 rounded-2xl cursor-pointer`}
                            >
                                Add Photos
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    onChange={handleAddPhotos}
                                    className="hidden"
                                />
                            </label>
                        </>
                    )}
                    <div
                        onClick={isEditing ? null : handleEditClick}
                        className={`p-1 border-[1px] text-lg md:text-2xl rounded-lg ${
                            isEditing
                                ? "cursor-not-allowed text-gray-500 border-gray-500"
                                : "cursor-pointer text-green-600 border-green-600 hover:border-green-800 hover:text-green-800"
                        }`}
                    >
                        <MdEdit />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-5">
                {album?.photos?.map((photo) => (
                    <div
                        key={photo}
                        className={`relative overflow-hidden shadow-xl w-fit ${
                            selectedPhotos.has(photo)
                                ? "opacity-50"
                                : "opacity-100"
                        }`}
                        onClick={() =>
                            isEditing
                                ? handlePhotoClick(photo)
                                : openModal(photo)
                        }
                    >
                        {isEditing && (
                            <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 z-20">
                                <ImCross />
                            </div>
                        )}
                        <div className="relative h-[100px] w-[100px] md:h-[150px] md:w-[150px] overflow-hidden">
                            <img
                                src={`${BASE_IMAGE_URL}/${photo}`}
                                alt="album cover"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
            {isEditing && selectedPhotos.size > 0 && (
                <div className="flex justify-end mt-4">
                    <button
                        onClick={handleSaveClick}
                        className="inline-block font-semibold text-xs md:text-sm bg-blue-500 text-white px-2 py-1 md:px-4 md:py-2 rounded-2xl"
                    >
                        Save
                    </button>
                </div>
            )}
            {isModalOpen && currentImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="relative">
                        <button
                            className="absolute top-0 right-0 text-white text-2xl"
                            onClick={closeModal}
                        >
                            <MdClose />
                        </button>
                        <img
                            src={`${BASE_IMAGE_URL}/${currentImage}`}
                            alt="full size"
                            className="max-h-screen max-w-screen"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default VendorProjectViewAlbum;
