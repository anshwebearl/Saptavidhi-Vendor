/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { UserContext } from "../../../context/UserContext";
import { TbTrash, TbTrashOff } from "react-icons/tb";

const BASE_URL = import.meta.env.DEV
    ? import.meta.env.VITE_API_BASE_URL_DEV
    : import.meta.env.VITE_API_BASE_URL_PROD;

const formDataDetails = [
    {
        name: "candidPhotography",
        service: "Candid Photography",
        description:
            "What is the wedding day price for candid photography - (Assume 300 pax)",
        value: 0,
    },
    {
        name: "weddingFilms",
        service: "Wedding Films",
        description: "Price per day of Films/ Video - Assume 300 pax wedding",
        value: 0,
    },
    {
        name: "tradionalPhotography",
        service: "Tradional Photography",
        description: "Price per day of traditional photography",
        value: 0,
    },
    {
        name: "preWeddingShoots",
        service: "Pre-Wedding Shoots",
        description: "Price per day for pre-wedding shoots",
        value: 0,
    },
    {
        name: "albums",
        service: "Albums",
        description: "Starting price for Albums (assume 40 sheets, A3 size)?",
        value: 0,
    },
    {
        name: "maternityShoots",
        service: "Maternity Shoots",
        description: "Starting price Maternity Shoots?",
        value: 0,
    },
    {
        name: "fashionShoots",
        service: "Fashion Shoots",
        description: "Starting price Fashion Shoots?",
        value: 0,
    },
    {
        name: "preWeddingFilms",
        service: "Pre-Wedding Films",
        description: "Starting price Pre-Wedding Films?",
        value: 0,
    },
    {
        name: "tradionalVideography",
        service: "Tradional Videography",
        description: "Starting price Traditional Videography?",
        value: 0,
    },
];

const UpdateService = ({ handleNavigate }) => {
    const { user } = useContext(UserContext);

    const token = localStorage.getItem("token");

    const [formDetails, setFormDetails] = useState([]);

    const [formData, setFormData] = useState({
        candidPhotography: 0,
        weddingFilms: 0,
        tradionalPhotography: 0,
        preWeddingShoots: 0,
        albums: 0,
        maternityShoots: 0,
        fashionShoots: 0,
        preWeddingFilms: 0,
        tradionalVideography: 0,
    });

    const [inputValues, setInputValues] = useState({});

    const getAllServices = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/get-services?vendor_id=${user._id}`,
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
                setFormData({
                    candidPhotography: jsonData.services.candidPhotography,
                    weddingFilms: jsonData.services.weddingFilms,
                    tradionalPhotography:
                        jsonData.services.tradionalPhotography,
                    preWeddingShoots: jsonData.services.preWeddingShoots,
                    albums: jsonData.services.albums,
                    maternityShoots: jsonData.services.maternityShoots,
                    fashionShoots: jsonData.services.fashionShoots,
                    preWeddingFilms: jsonData.services.preWeddingFilms,
                    tradionalVideography:
                        jsonData.services.tradionalVideography,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (name, value) => {
        setInputValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleDelete = (name) => {
        setInputValues((prevState) => ({
            ...prevState,
            [name]: 0,
        }));
    };

    const handleCancel = (name, originalValue) => {
        setInputValues((prevState) => {
            const updatedValues = { ...prevState };
            delete updatedValues[name];
            return updatedValues;
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/add-services/${user._id}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(inputValues),
                }
            );
            const jsonData = await response.json();
            toast.success(jsonData.message);
            handleNavigate(-1);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        let filteredDetails = formDataDetails.filter(
            (item) => formData[item.name] !== 0
        );
        filteredDetails = filteredDetails.map((el) => ({
            ...el,
            value: formData[el.name],
        }));
        setFormDetails(filteredDetails);
    }, [formData]);

    useEffect(() => {
        getAllServices();
    }, []);

    return (
        <div className="bg-white rounded-3xl w-full border-[1px] border-gray-300">
            <div className="flex items-center rounded-t-3xl gap-2 md:gap-5 bg-[#CF166F1A] p-3 md:p-6">
                <IoChevronBackOutline
                    className="cursor-pointer"
                    size={window.screen.width > 768 ? 24 : 20}
                    color="#CF166F"
                    onClick={() => handleNavigate(-1)}
                />
                <h2 className="text-lg md:text-2xl font-semibold text-[#CF166F]">
                    Update Service
                </h2>
            </div>
            <div className=" flex flex-col gap-5 p-6">
                <div className="flex md:flex-row flex-col gap-5 flex-wrap">
                    {formDetails.map((detail) => (
                        <div
                            key={detail.name}
                            className="flex flex-col gap-1 md:gap-1 flex-grow"
                        >
                            <p
                                className={`text-xs md:text-base ${
                                    inputValues[detail.name] === 0
                                        ? "text-gray-400"
                                        : ""
                                }`}
                            >
                                {detail.service}
                            </p>
                            <div className="flex items-center gap-3">
                                <input
                                    type="text"
                                    name="parking_capacity"
                                    value={detail.value}
                                    onChange={(e) =>
                                        handleInputChange(
                                            detail.name,
                                            e.target.value
                                        )
                                    }
                                    className={`bg-transparent ${
                                        inputValues[detail.name] === 0
                                            ? "text-gray-400 border-gray-400"
                                            : ""
                                    } rounded-xl text-sm md:text-sm border-[1px] border-[#FF8DA680] px-3 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                                    placeholder="Parking Space"
                                />
                                {inputValues[detail.name] === 0 ? (
                                    <button
                                        onClick={() =>
                                            handleCancel(
                                                detail.name,
                                                detail.value
                                            )
                                        }
                                        className="text-gray-600 hover:text-gray-900"
                                    >
                                        <TbTrashOff size={24} />
                                    </button>
                                ) : (
                                    <button
                                        onClick={() =>
                                            handleDelete(detail.name)
                                        }
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        <TbTrash size={24} />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end">
                    <button
                        className="font-semibold text-xs md:text-lg bg-gradient-to-r from-[#FD070780] to-[#5C034080] text-white px-2 py-1 md:px-4 md:py-2 rounded-2xl cursor-pointer"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateService;
