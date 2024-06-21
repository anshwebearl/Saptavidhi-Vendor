/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { UserContext } from "../../../context/UserContext";

const BASE_URL = import.meta.env.DEV
    ? import.meta.env.VITE_API_BASE_URL_DEV
    : import.meta.env.VITE_API_BASE_URL_PROD;

const formDataDetails = [
    {
        name: "candidPhotography",
        service: "Candid Photography",
        description:
            "What is the wedding day price for candid photography - (Assume 300 pax)",
    },
    {
        name: "weddingFilms",
        service: "Wedding Films",
        description: "Price per day of Films/ Video - Assume 300 pax wedding",
    },
    {
        name: "tradionalPhotography",
        service: "Tradional Photography",
        description: "Price per day of traditional photography",
    },
    {
        name: "preWeddingShoots",
        service: "Pre-Wedding Shoots",
        description: "Price per day for pre-wedding shoots",
    },
    {
        name: "albums",
        service: "Albums",
        description: "Starting price for Albums (assume 40 sheets, A3 size)?",
    },
    {
        name: "maternityShoots",
        service: "Maternity Shoots",
        description: "Starting price Maternity Shoots?",
    },
    {
        name: "fashionShoots",
        service: "Fashion Shoots",
        description: "Starting price Fashion Shoots?",
    },
    {
        name: "preWeddingFilms",
        service: "Pre-Wedding Films",
        description: "Starting price Pre-Wedding Films?",
    },
    {
        name: "tradionalVideography",
        service: "Tradional Videography",
        description: "Starting price Traditional Videography?",
    },
];

const AddService = ({ handleNavigate }) => {
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

    const [checkedInputs, setCheckedInputs] = useState({});

    const [inputValues, setInputValues] = useState([]);

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

    const handleCheckboxChange = (name) => {
        setCheckedInputs((prevState) => ({
            ...prevState,
            [name]: !prevState[name],
        }));
    };

    const handleInputChange = (name, value) => {
        setInputValues((prevState) => {
            const updatedValues = prevState.filter(
                (item) => item.name !== name
            );
            if (value) {
                updatedValues.push({ name, value });
            }
            return updatedValues;
        });
    };

    const handleSubmit = async () => {
        const inputValuesObject = inputValues.reduce((obj, item) => {
            obj[item.name] = item.value;
            return obj;
        }, {});
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/add-services/${user._id}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(inputValuesObject),
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
        const filteredDetails = formDataDetails.filter(
            (item) => formData[item.name] === 0
        );
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
                    Add Service
                </h2>
            </div>
            <div className="flex flex-col gap-5 p-6">
                {formDetails.map((detail) => (
                    <div key={detail.name} className="flex flex-col gap-2">
                        <label className="flex items-center gap-3 text-xl">
                            <input
                                type="checkbox"
                                className="accent-[#CF166F]"
                                checked={checkedInputs[detail.name] || false}
                                onChange={() =>
                                    handleCheckboxChange(detail.name)
                                }
                            />
                            {detail.service}
                        </label>
                        {checkedInputs[detail.name] && (
                            <div className="flex flex-col gap-1 ml-8">
                                <p className={`text-xs md:text-sm`}>
                                    {detail.description}
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
                                        className={`bg-transparent rounded-xl text-sm md:text-sm border-[1px] border-[#FF8DA680] px-3 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
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

export default AddService;
