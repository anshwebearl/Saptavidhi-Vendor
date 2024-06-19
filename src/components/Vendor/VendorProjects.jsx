import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { MdEdit } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BASE_IMAGE_URL = "http://localhost:8000";

const VendorProjects = () => {
    const { user } = useContext(UserContext);

    const token = localStorage.getItem("token");

    const BASE_URL = import.meta.env.DEV
        ? import.meta.env.VITE_API_BASE_URL_DEV
        : import.meta.env.VITE_API_BASE_URL_PROD;

    const [projects, setProjects] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [modalImage, setModalImage] = useState(null);
    const [newImages, setNewImages] = useState([]);

    const getAllProjectItems = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/get-projects/${user._id}`,
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
                setProjects(jsonData.project);
            } else {
                setProjects(null);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllProjectItems();
    }, []);

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleCancelClick = () => {
        setEditMode(false);
        setSelectedImages([]);
    };

    const handleCrossClick = (event, item) => {
        event.stopPropagation();
        if (!selectedImages.includes(item)) {
            setSelectedImages([...selectedImages, item]);
        }
    };

    const handleImageClick = (item) => {
        if (selectedImages.includes(item)) {
            setSelectedImages(selectedImages.filter((image) => image !== item));
        } else {
            setModalImage(item);
        }
    };

    const handleModalClose = () => {
        setModalImage(null);
    };

    const handleSaveClick = async () => {
        try {
            console.log(selectedImages);
            const response = await fetch(
                `${BASE_URL}/vendor/delete-project/${user._id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        items_to_delete: selectedImages,
                    }),
                }
            );
            const jsonData = await response.json();
            if (jsonData.success) {
                getAllProjectItems();
                toast.success(jsonData.message);
            }
        } catch (error) {
            console.log(error);
        }
        setEditMode(false);
        setSelectedImages([]);
    };

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setNewImages(files);
    };

    const handleFileSubmit = async () => {
        try {
            const formData = new FormData();
            newImages.forEach((image) => {
                formData.append("photos", image);
            });

            const response = await fetch(
                `${BASE_URL}/vendor/add-project/${user._id}`,
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
                getAllProjectItems();
                toast.success(jsonData.message);
            }
        } catch (error) {
            console.log(error);
        }
        setEditMode(false);
        setNewImages([]);
    };

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
                <h2 className="text-md md:text-2xl font-semibold">Projects</h2>
                <div>
                    <label
                        htmlFor="fileInput"
                        className={`inline-block font-semibold text-xs md:text-lg bg-gradient-to-r from-[#FD070780] to-[#5C034080] text-white px-2 py-1 md:px-4 md:py-2 rounded-2xl cursor-pointer ${
                            editMode && "opacity-50 cursor-not-allowed"
                        }`}
                    >
                        Add Projects
                        <input
                            type="file"
                            id="fileInput"
                            className="hidden"
                            multiple
                            accept="image/*"
                            onChange={!editMode ? handleFileChange : null}
                        />
                    </label>
                    {newImages.length > 0 && (
                        <button
                            onClick={handleFileSubmit}
                            className={"`ml-2 bg-green-500 text-white text-xs md:text-base px-4 py-2 rounded-full hover:bg-green-700"}
                        >
                            OK
                        </button>
                    )}
                </div>
            </div>

            <hr className="mb-4" />
            {projects && projects.photos?.length ? (
                <div className="w-full">
                    <div className="flex justify-end gap-2 mb-2">
                        {editMode && (
                            <div
                                onClick={handleCancelClick}
                                className="py-1 px-3 bg-red-600 text-white font-[500] text-xs md:text-base flex items-center rounded-full hover:bg-red-800 cursor-pointer"
                            >
                                Cancel
                            </div>
                        )}
                        <div
                            onClick={!editMode ? handleEditClick : null}
                            className={`p-1 border-[1px] border-green-600 text-green-600 text-lg md:text-2xl rounded-lg hover:border-green-800 hover:text-green-800 cursor-pointer ${
                                editMode && "opacity-50 cursor-not-allowed"
                            }`}
                        >
                            <MdEdit />
                        </div>
                    </div>
                    <div className="flex gap-4 flex-wrap">
                        {projects.photos?.map((item) => (
                            <div
                                key={item}
                                className={`relative h-[100px] w-[100px] md:h-[150px] md:w-[150px] overflow-hidden border ${
                                    selectedImages.includes(item)
                                        ? "border-red-600"
                                        : "border-gray-200"
                                }`}
                                onClick={
                                    editMode
                                        ? () => handleImageClick(item)
                                        : () => setModalImage(item)
                                }
                            >
                                {editMode && (
                                    <div
                                        className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-bl cursor-pointer"
                                        onClick={(event) =>
                                            handleCrossClick(event, item)
                                        }
                                    >
                                        <ImCross />
                                    </div>
                                )}
                                <img
                                    src={`${BASE_IMAGE_URL}/${item}`}
                                    alt=""
                                    className={`h-full w-full object-cover ${
                                        selectedImages.includes(item)
                                            ? "opacity-50"
                                            : ""
                                    }`}
                                />
                            </div>
                        ))}
                    </div>
                    {selectedImages.length > 0 && (
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={handleSaveClick}
                                className="bg-green-500 text-white text-xs md:text-base px-4 py-2 rounded-full hover:bg-green-700"
                            >
                                Save Changes
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    <p>No Projects</p>
                </div>
            )}
            {modalImage && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                    onClick={handleModalClose}
                >
                    <div className="relative max-w-[90vw] max-h-[90vh]">
                        <img
                            src={`${BASE_IMAGE_URL}/${modalImage}`}
                            alt=""
                            className="max-w-full max-h-full object-contain"
                        />
                        <div
                            className="absolute top-0 right-0 p-2 cursor-pointer border-[1px] border-white rounded-full"
                            onClick={handleModalClose}
                        >
                            <ImCross className="text-white text-sm md:text-xl" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VendorProjects;
