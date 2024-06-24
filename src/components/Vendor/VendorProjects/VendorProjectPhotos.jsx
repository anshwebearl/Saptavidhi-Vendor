import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../../context/UserContext";
import { ImCross } from "react-icons/im";

const BASE_IMAGE_URL = import.meta.env.DEV
    ? import.meta.env.VITE_IMAGE_URL_DEV
    : import.meta.env.VITE_IMAGE_URL_PROD;

const BASE_URL = import.meta.env.DEV
    ? import.meta.env.VITE_API_BASE_URL_DEV
    : import.meta.env.VITE_API_BASE_URL_PROD;

const VendorProjectPhotos = () => {
    const { user } = useContext(UserContext);

    const token = localStorage.getItem("token");

    const [projects, setProjects] = useState([]);
    const [modalImage, setModalImage] = useState(null); // State for the modal image

    const getAllProjectPhotos = async () => {
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
                setProjects(jsonData.albums);
            } else {
                setProjects(null);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllProjectPhotos();
    }, [user]);

    const handleImageClick = (item) => {
        setModalImage(item);
    };

    const handleModalClose = () => {
        setModalImage(null);
    };

    return (
        <div>
            {projects && projects.length ? (
                <div className="w-full flex flex-wrap gap-2">
                    {projects.map((el) =>
                        el.photos.map((item) => (
                            <div
                                key={item}
                                className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] overflow-hidden"
                                onClick={() => handleImageClick(item)} // Set the clicked image
                            >
                                <img
                                    src={`${BASE_IMAGE_URL}/${item}`}
                                    alt=""
                                    className="h-full w-full object-cover cursor-pointer"
                                />
                            </div>
                        ))
                    )}
                </div>
            ) : (
                <div>
                    <p>No Photos (Add Albums)</p>
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
                            className="absolute -top-8 -right-8 p-2 cursor-pointer border-[1px] border-white rounded-full"
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

export default VendorProjectPhotos;
