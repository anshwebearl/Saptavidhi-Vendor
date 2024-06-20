import { useContext, useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";

const BASE_IMAGE_URL = import.meta.env.DEV
    ? import.meta.env.VITE_IMAGE_URL_DEV
    : import.meta.env.VITE_IMAGE_URL_PROD;

const BASE_URL = import.meta.env.DEV
    ? import.meta.env.VITE_API_BASE_URL_DEV
    : import.meta.env.VITE_API_BASE_URL_PROD;

const VendorProjectAlbums = () => {
    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const [albums, setAlbums] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [selectedAlbums, setSelectedAlbums] = useState([]);
    const [isAddAlbumModalOpen, setIsAddAlbumModalOpen] = useState(false);
    const [albumTitle, setAlbumTitle] = useState("");
    const [additionalPhotos, setAdditionalPhotos] = useState([]);

    const getAllProjectAlbums = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/get-project-albums/${user._id}`,
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
                setAlbums(jsonData.albums);
            } else {
                setAlbums(null);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleCancelClick = () => {
        setEditMode(false);
        setSelectedAlbums([]);
    };

    const handleCrossClick = (event, albumId) => {
        event.stopPropagation();
        if (!selectedAlbums.includes(albumId)) {
            setSelectedAlbums([...selectedAlbums, albumId]);
        }
    };

    const handleAlbumClick = (albumId) => {
        if (selectedAlbums.includes(albumId)) {
            setSelectedAlbums(selectedAlbums.filter((id) => id !== albumId));
        }
    };

    const handleSaveClick = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/delete-project-album/${user._id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        items_to_delete: selectedAlbums,
                    }),
                }
            );
            const jsonData = await response.json();
            if (jsonData.success) {
                getAllProjectAlbums();
                toast.success(jsonData.message);
            }
        } catch (error) {
            console.log(error);
        }
        setEditMode(false);
        setSelectedAlbums([]);
    };

    const handleAddAlbumClick = () => {
        setIsAddAlbumModalOpen(true);
    };

    const handleAddAlbumModalClose = () => {
        setIsAddAlbumModalOpen(false);
        setAlbumTitle("");
        setAdditionalPhotos([]);
    };

    const handlePhotoChange = (e) => {
        setAdditionalPhotos(Array.from(e.target.files));
    };

    const handleAddAlbumSubmit = async () => {
        if (albumTitle.trim() === "" || additionalPhotos.length < 2) {
            toast.error(
                "Please enter a valid album title and select at least 2 photos."
            );
            return;
        }

        const formData = new FormData();
        formData.append("album_title", albumTitle);
        additionalPhotos.forEach((photo) => {
            formData.append("photos", photo);
        });
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/add-project-album/${user._id}`,
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
                getAllProjectAlbums();
                toast.success(jsonData.message);
                handleAddAlbumModalClose();
            } else {
                toast.error(jsonData.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllProjectAlbums();
    }, [user]);

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
                        onClick={handleAddAlbumClick}
                    >
                        Add Album
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
                    {albums && albums.length !== 0 && (
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
            {albums && albums.length ? (
                <div className="w-full">
                    <div className="flex gap-4 flex-wrap">
                        {albums.map((album) => (
                            <div
                                key={album._id}
                                className={`cursor-pointer relative overflow-hidden rounded-xl shadow-xl border ${
                                    selectedAlbums.includes(album._id)
                                        ? "border-red-600 lightened"
                                        : ""
                                }`}
                                onClick={
                                    editMode
                                        ? () => handleAlbumClick(album._id)
                                        : () => navigate(`${album._id}`)
                                }
                            >
                                {editMode && (
                                    <div
                                        className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-bl z-50 cursor-pointer"
                                        onClick={(event) =>
                                            handleCrossClick(event, album._id)
                                        }
                                    >
                                        <ImCross />
                                    </div>
                                )}
                                <div className="relative h-[150px] w-[250px] md:h-[250px] md:w-[350px] overflow-hidden">
                                    <img
                                        src={`${BASE_IMAGE_URL}/${album.photos[0]}`}
                                        alt="album cover"
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                                    <div className="absolute font-semibold bottom-0 left-0 p-2 text-white text-xs md:text-lg">
                                        {album.album_title}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {selectedAlbums.length > 0 && (
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
                    <p>No Albums</p>
                </div>
            )}
            {isAddAlbumModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                    onClick={handleAddAlbumModalClose}
                >
                    <div
                        className="bg-white p-4 rounded-lg max-w-md w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">Add Album</h2>
                            <ImCross
                                className="text-black cursor-pointer"
                                onClick={handleAddAlbumModalClose}
                            />
                        </div>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                            placeholder="Enter Album Title"
                            value={albumTitle}
                            onChange={(e) => setAlbumTitle(e.target.value)}
                        />
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Additional Photos
                            </label>
                            <input
                                type="file"
                                name="additional_photos"
                                multiple
                                onChange={handlePhotoChange}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                            <p className="text-gray-500 text-sm mt-1">
                                Select at least 2 photos
                            </p>
                        </div>
                        <button
                            className="w-full bg-blue-500 text-white py-2 rounded-lg"
                            onClick={handleAddAlbumSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VendorProjectAlbums;
