import { useContext, useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../../context/UserContext";

const BASE_IMAGE_URL = import.meta.env.DEV
    ? import.meta.env.VITE_IMAGE_URL_DEV
    : import.meta.env.VITE_IMAGE_URL_PROD;

const BASE_URL = import.meta.env.DEV
    ? import.meta.env.VITE_API_BASE_URL_DEV
    : import.meta.env.VITE_API_BASE_URL_PROD;

const VendorProjectVideos = () => {
    const { user } = useContext(UserContext);

    const token = localStorage.getItem("token");

    const [videos, setVideos] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [isAddVideoModalOpen, setIsAddVideoModalOpen] = useState(false);
    const [newVideoURL, setNewVideoURL] = useState("");

    function YouTubeGetID(url) {
        url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
    }

    const getAllProjectVideos = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/get-project-videos/${user._id}`,
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
                setVideos(jsonData.photos);
            } else {
                setVideos(null);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllProjectVideos();
    }, [user]);

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
        }
    };

    const handleSaveClick = async () => {
        try {
            console.log(selectedImages);
            const response = await fetch(
                `${BASE_URL}/vendor/delete-project-videos/${user._id}`,
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
                getAllProjectVideos();
                toast.success(jsonData.message);
            }
        } catch (error) {
            console.log(error);
        }
        setEditMode(false);
        setSelectedImages([]);
    };

    const handleAddVideoClick = () => {
        setIsAddVideoModalOpen(true);
    };

    const handleAddVideoModalClose = () => {
        setIsAddVideoModalOpen(false);
        setNewVideoURL("");
    };

    const handleAddVideoSubmit = async () => {
        if (newVideoURL.trim() === "") {
            toast.error("Please enter a valid YouTube URL");
            return;
        }

        try {
            const response = await fetch(
                `${BASE_URL}/vendor/add-project-video/${user._id}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        video_link: newVideoURL,
                    }),
                }
            );
            const jsonData = await response.json();
            if (jsonData.success) {
                getAllProjectVideos();
                toast.success(jsonData.message);
                handleAddVideoModalClose();
            } else {
                toast.error(jsonData.message);
            }
        } catch (error) {
            console.log(error);
        }
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
            <div className={`flex items-center mb-4 justify-between`}>
                <div>
                    <p
                        className={`inline-block font-semibold text-xs md:text-lg bg-gradient-to-r from-[#FD070780] to-[#5C034080] text-white px-2 py-1 md:px-4 md:py-2 rounded-2xl cursor-pointer ${
                            editMode && "opacity-50 cursor-not-allowed"
                        }`}
                        onClick={handleAddVideoClick}
                    >
                        Add Video
                    </p>
                </div>
                <div className="flex gap-2 mb-2">
                    {editMode && (
                        <div
                            onClick={handleCancelClick}
                            className="py-1 px-3 bg-red-600 text-white font-[500] text-xs md:text-base flex items-center rounded-full hover:bg-red-800 cursor-pointer"
                        >
                            Cancel
                        </div>
                    )}
                    {videos && videos.length !== 0 && (
                        <div
                            onClick={!editMode ? handleEditClick : null}
                            className={`p-1 border-[1px] border-green-600 text-green-600 text-lg md:text-2xl rounded-lg hover:border-green-800 hover:text-green-800 cursor-pointer ${
                                editMode && "opacity-50 cursor-not-allowed"
                            }`}
                        >
                            <MdEdit />
                        </div>
                    )}
                </div>
            </div>
            {videos && videos.length ? (
                <div className="w-full">
                    <div className="flex gap-4 flex-wrap">
                        {videos.map((item) => (
                            <div
                                key={item}
                                className={`relative overflow-hidden border ${
                                    selectedImages.includes(item)
                                        ? "border-red-600 lightened"
                                        : "border-gray-200"
                                }`}
                                onClick={
                                    editMode
                                        ? () => handleImageClick(item)
                                        : null
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
                                <iframe
                                    className="video"
                                    title="Youtube player"
                                    sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
                                    src={`https://youtube.com/embed/${YouTubeGetID(
                                        item
                                    )}?autoplay=0`}
                                ></iframe>
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
                    <p>No Videos</p>
                </div>
            )}
            {isAddVideoModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                    onClick={handleAddVideoModalClose}
                >
                    <div
                        className="bg-white p-4 rounded-lg max-w-md w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">Add Video</h2>
                            <ImCross
                                className="text-black cursor-pointer"
                                onClick={handleAddVideoModalClose}
                            />
                        </div>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                            placeholder="Enter YouTube URL"
                            value={newVideoURL}
                            onChange={(e) => setNewVideoURL(e.target.value)}
                        />
                        <button
                            className="w-full bg-blue-500 text-white py-2 rounded-lg"
                            onClick={handleAddVideoSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VendorProjectVideos;
