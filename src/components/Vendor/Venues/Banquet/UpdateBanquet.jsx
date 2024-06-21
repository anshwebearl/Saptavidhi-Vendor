/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import { ImCross } from "react-icons/im";
import { State, City } from "country-state-city";
import { IoChevronBackOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { UserContext } from "../../../../context/UserContext";
import { useParams } from "react-router-dom";

const BASE_IMAGE_URL = import.meta.env.DEV
    ? import.meta.env.VITE_IMAGE_URL_DEV
    : import.meta.env.VITE_IMAGE_URL_PROD;

const BASE_URL = import.meta.env.DEV
    ? import.meta.env.VITE_API_BASE_URL_DEV
    : import.meta.env.VITE_API_BASE_URL_PROD;

const UpdateBanquet = ({ handleNavigate }) => {
    const { id } = useParams();

    const [banquet, setBanquet] = useState({});

    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const { user } = useContext(UserContext);

    const token = localStorage.getItem("token");

    const [formErrors, setFormErrors] = useState({
        property_name: "",
        parking_capacity: "",
        catering_policy: "",
        decor_policy: "",
        dj_policy: "",
        banquet_type: "",
        fixed_capacity: "",
        max_capacity: "",
        price_per_room: "",
        space: "",
        veg_price: "",
        nonveg_price: "",
        state: "",
        city: "",
        pincode: "",
        address: "",
        cover_photo: "",
        additional_photos: "",
    });

    const [formData, setFormData] = useState({
        property_name: "",
        parking_capacity: "",
        catering_policy: "",
        decor_policy: "",
        dj_policy: "",
        banquet_type: "",
        fixed_capacity: "",
        max_capacity: "",
        price_per_room: "",
        space: "",
        veg_price: "",
        nonveg_price: "",
        state: "",
        city: "",
        pincode: "",
        address: "",
        cover_photo: null,
        updated_cover_photo: null,
        additional_photos: [],
        updated_additional_photos: [],
    });

    const numberRegex = /^[0-9]*$/;
    const pincodeRegex = /^[0-9]{6}$/;

    useEffect(() => {
        getBanquet();
        const indianStates = State.getStatesOfCountry("IN").map((state) => ({
            name: state.name,
            isoCode: state.isoCode,
        }));
        setStates(indianStates);
    }, []);

    useEffect(() => {
        if (banquet.state) {
            const selectedStateData = states.find(
                (state) => state.name === banquet.state
            );
            const stateCities = City.getCitiesOfState(
                "IN",
                selectedStateData?.isoCode
            ).map((city) => city.name);
            setCities(stateCities);
        }
        setFormData({
            property_name: banquet?.property_name,
            parking_capacity: banquet?.parking_capacity,
            catering_policy: banquet?.catering_policy,
            decor_policy: banquet?.decor_policy,
            dj_policy: banquet?.dj_policy,
            banquet_type: banquet?.banquet_type,
            fixed_capacity: banquet?.fixed_capacity,
            max_capacity: banquet?.max_capacity,
            price_per_room: banquet?.price_per_room,
            space: banquet?.space,
            veg_price: banquet?.veg_price,
            nonveg_price: banquet?.nonveg_price,
            state: banquet?.state,
            city: banquet?.city,
            pincode: banquet?.pincode,
            address: banquet?.address,
            cover_photo: banquet?.cover_photo,
            updated_cover_photo: null,
            additional_photos: banquet?.additional_photos,
            updated_additional_photos: [],
        });
    }, [banquet]);

    const getBanquet = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/get-banquet?vendor_id=${user._id}&banquet_id=${id}`,
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
                setBanquet(jsonData.banquet);
                console.log(jsonData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        let error = "";

        switch (name) {
            case "parking_capacity":
            case "fixed_capacity":
            case "max_capacity":
            case "price_per_room":
            case "space":
            case "veg_price":
            case "nonveg_price":
                if (!numberRegex.test(value)) {
                    error = "Please enter a valid number.";
                }
                break;
            case "pincode":
                if (!pincodeRegex.test(value)) {
                    error = "Please enter a valid 6-digit pincode.";
                }
                break;
            default:
                break;
        }

        setFormErrors({ ...formErrors, [name]: error });
        setFormData({ ...formData, [name]: value });
    };

    const handleStateChange = (e) => {
        const selectedState = e.target.value;
        const selectedStateData = states.find(
            (state) => state.name === selectedState
        );
        setFormData({ ...formData, state: selectedState, city: "" });
        const stateCities = City.getCitiesOfState(
            "IN",
            selectedStateData.isoCode
        ).map((city) => city.name);
        setCities(stateCities);
    };

    const handlePhotoChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData({
            ...formData,
            updated_additional_photos: [
                ...formData.updated_additional_photos,
                ...files,
            ],
        });
        setFormErrors({ ...formErrors, additional_photos: false });
    };

    const removePhoto = (type, index) => {
        if (type === "existing") {
            const updatedPhotos = [...formData.additional_photos];
            updatedPhotos.splice(index, 1);
            setFormData({
                ...formData,
                additional_photos: updatedPhotos,
            });
        } else if (type === "updated") {
            const updatedPhotos = [...formData.updated_additional_photos];
            updatedPhotos.splice(index, 1);
            setFormData({
                ...formData,
                updated_additional_photos: updatedPhotos,
            });
        }
    };

    const removeCoverPhoto = () => {
        setFormData({
            ...formData,
            cover_photo: "",
            updated_cover_photo: "",
        });
        setFormErrors({ ...formErrors, cover_photo: false });
    };

    const handleCoverPhotoChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            cover_photo: "",
            updated_cover_photo: file,
        });
        setFormErrors({ ...formErrors, cover_photo: false });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate required fields
        const requiredFields = [
            "property_name",
            "parking_capacity",
            "catering_policy",
            "decor_policy",
            "dj_policy",
            "banquet_type",
            "fixed_capacity",
            "max_capacity",
            "price_per_room",
            "space",
            "veg_price",
            "nonveg_price",
            "state",
            "city",
            "pincode",
            "address",
        ];
        let isValid = true;
        let newFormErrors = { ...formErrors };

        requiredFields.forEach((field) => {
            if (!formData[field]) {
                newFormErrors[field] = `Please fill in the ${field.replace(
                    "_",
                    " "
                )}.`;
                isValid = false;
            } else {
                newFormErrors[field] = "";
            }
        });

        // if (
        //     formData["additional_photos"].length === 0 &&
        //     formData["updated_additional_photos"].length === 0
        // ) {
        //     newFormErrors["additional_photos"] =
        //         "Please fill in the additional photos field";
        // }

        if (
            formData["cover_photo"].trim() === "" &&
            formData["updated_cover_photo"].trim() === ""
        ) {
            newFormErrors["cover_photo"] =
                "Please fill in the cover photos field";
        }

        if (formData.additional_photos.length < 2) {
            newFormErrors.additional_photos =
                "Please select at least 2 additional photos.";
            isValid = false;
        } else {
            newFormErrors.additional_photos = "";
        }

        setFormErrors(newFormErrors);

        if (isValid) {
            const data = new FormData();
            data.append("banquet_id", id);
            data.append("property_name", formData.property_name);
            data.append("parking_capacity", formData.parking_capacity);
            data.append("catering_policy", formData.catering_policy);
            data.append("decor_policy", formData.decor_policy);
            data.append("dj_policy", formData.dj_policy);
            data.append("banquet_type", formData.banquet_type);
            data.append("fixed_capacity", formData.fixed_capacity);
            data.append("max_capacity", formData.max_capacity);
            data.append("price_per_room", formData.price_per_room);
            data.append("space", formData.space);
            data.append("veg_price", formData.veg_price);
            data.append("nonveg_price", formData.nonveg_price);
            data.append("state", formData.state);
            data.append("city", formData.city);
            data.append("pincode", formData.pincode);
            data.append("address", formData.address);
            data.append("cover_photo", formData.cover_photo);
            formData.additional_photos.forEach((photo) => {
                data.append("additional_photos", photo);
            });
            if (formData.updated_additional_photos.length > 0) {
                formData.updated_additional_photos.forEach((photo) => {
                    if (photo instanceof File) {
                        data.append("updated_additional_photos", photo);
                    }
                });
            }

            if (!data.has("updated_additional_photos")) {
                data.append("updated_additional_photos", []);
            }
            if (!data.has("updated_cover_photo")) {
                data.append("updated_cover_photo", null);
            }

            console.log(data);
            try {
                const response = await fetch(
                    `${BASE_URL}/vendor/update-banquet/${user._id}`,
                    {
                        method: "PUT",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                        body: data,
                    }
                );
                const jsonData = await response.json();
                if (jsonData.success) {
                    toast.success(jsonData.message);
                    handleNavigate(-1);
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

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
                    Update Banquet
                </h2>
            </div>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-8 p-6"
                noValidate
            >
                <div className="flex flex-col gap-2 md:gap-5 w-full">
                    <p className="text-base md:text-xl">Banquet Information</p>
                    <div className="p-[1px] bg-slate-200" />
                    <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-5 w-full">
                        <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                            <p className={`text-xs md:text-sm`}>
                                Property Name
                            </p>
                            <input
                                type="text"
                                name="property_name"
                                value={formData.property_name}
                                onChange={handleChange}
                                className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                                placeholder="Property Name"
                            />
                            {formErrors.property_name && (
                                <span className="text-red-600 text-xs mt-1">
                                    {formErrors.property_name}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                            <p className={`text-xs md:text-sm`}>
                                Parking Capacity
                            </p>
                            <input
                                type="text"
                                name="parking_capacity"
                                value={formData.parking_capacity}
                                onChange={handleChange}
                                className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                                placeholder="Parking Space"
                            />
                            {formErrors.parking_capacity && (
                                <span className="text-red-600 text-xs mt-1">
                                    {formErrors.parking_capacity}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                            <p className={`text-xs md:text-sm`}>
                                Catering Policy
                            </p>
                            <select
                                name="catering_policy"
                                value={formData.catering_policy}
                                onChange={handleChange}
                                className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff729ia] focus:border-[1.5px]`}
                            >
                                <option value="" disabled>
                                    Catering Policy
                                </option>
                                <option value="Outside Catering">
                                    Outside Catering
                                </option>
                                <option value="Inside Catering">
                                    Inside Catering
                                </option>
                            </select>
                            {formErrors.catering_policy && (
                                <span className="text-red-600 text-xs mt-1">
                                    {formErrors.catering_policy}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-5 w-full">
                        <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                            <p className={`text-xs md:text-sm`}>Decor Policy</p>
                            <select
                                name="decor_policy"
                                value={formData.decor_policy}
                                onChange={handleChange}
                                className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                            >
                                <option value="" disabled>
                                    Select Decor Policy
                                </option>
                                <option value="Outside Decoration">
                                    Outside Decoration
                                </option>
                                <option value="Inside Decoration">
                                    Inside Decoration
                                </option>
                            </select>
                            {formErrors.decor_policy && (
                                <span className="text-red-600 text-xs mt-1">
                                    {formErrors.decor_policy}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                            <p className={`text-xs md:text-sm`}>DJ Policy</p>
                            <select
                                name="dj_policy"
                                value={formData.dj_policy}
                                onChange={handleChange}
                                className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                            >
                                <option value="" disabled>
                                    Select DJ Policy
                                </option>
                                <option value="Outside DJ">Outside DJ</option>
                                <option value="Inside DJ">Inside DJ</option>
                            </select>
                            {formErrors.dj_policy && (
                                <span className="text-red-600 text-xs mt-1">
                                    {formErrors.dj_policy}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                            <p className={`text-xs md:text-sm`}>Banquet Type</p>
                            <select
                                name="banquet_type"
                                value={formData.banquet_type}
                                onChange={handleChange}
                                className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                            >
                                <option value="" disabled>
                                    Select Banquet Type
                                </option>
                                <option value="Indoor">Indoor</option>
                                <option value="Outdoor">Outdoor</option>
                                <option value="Poolside">Poolside</option>
                                <option value="Indoor & Outdoor">
                                    Indoor & Outdoor
                                </option>
                                <option value="Terrace">Terrace</option>
                            </select>
                            {formErrors.banquet_type && (
                                <span className="text-red-600 text-xs mt-1">
                                    {formErrors.banquet_type}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-5 w-full">
                        <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                            <p className={`text-xs md:text-sm`}>
                                Fixed Capacity
                            </p>
                            <input
                                type="text"
                                name="fixed_capacity"
                                value={formData.fixed_capacity}
                                onChange={handleChange}
                                className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                                placeholder="Enter Fixed Capacity"
                            />
                            {formErrors.fixed_capacity && (
                                <span className="text-red-600 text-xs mt-1">
                                    {formErrors.fixed_capacity}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                            <p className={`text-xs md:text-sm`}>
                                Maximum Capacity
                            </p>
                            <input
                                type="text"
                                name="max_capacity"
                                value={formData.max_capacity}
                                onChange={handleChange}
                                className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                                placeholder="Maximum Capacity"
                            />
                            {formErrors.max_capacity && (
                                <span className="text-red-600 text-xs mt-1">
                                    {formErrors.max_capacity}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                            <p className={`text-xs md:text-sm`}>
                                Price Per Room
                            </p>
                            <input
                                type="text"
                                name="price_per_room"
                                value={formData.price_per_room}
                                onChange={handleChange}
                                className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                                placeholder="Enter Price Per Room"
                            />
                            {formErrors.price_per_room && (
                                <span className="text-red-600 text-xs mt-1">
                                    {formErrors.price_per_room}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-5 w-full">
                        <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                            <p className={`text-xs md:text-sm`}>
                                Space (Sqr Foot)
                            </p>
                            <input
                                type="text"
                                name="space"
                                value={formData.space}
                                onChange={handleChange}
                                className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                                placeholder="Enter Space"
                            />
                            {formErrors.space && (
                                <span className="text-red-600 text-xs mt-1">
                                    {formErrors.space}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                            <p className={`text-xs md:text-sm`}>
                                Veg Price (per plate)
                            </p>
                            <input
                                type="text"
                                name="veg_price"
                                value={formData.veg_price}
                                onChange={handleChange}
                                className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                                placeholder="Maximum Veg Price"
                            />
                            {formErrors.veg_price && (
                                <span className="text-red-600 text-xs mt-1">
                                    {formErrors.veg_price}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                            <p className={`text-xs md:text-sm`}>
                                Non-Veg Price (per plate)
                            </p>
                            <input
                                type="text"
                                name="nonveg_price"
                                value={formData.nonveg_price}
                                onChange={handleChange}
                                className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                                placeholder="Maximum Non-Veg Price"
                            />
                            {formErrors.nonveg_price && (
                                <span className="text-red-600 text-xs mt-1">
                                    {formErrors.nonveg_price}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 md:gap-5 w-full">
                    <p className="text-base md:text-xl">Address Information</p>
                    <div className="p-[1px] bg-slate-200" />
                    <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-5 w-full">
                        <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                            <p className={`text-xs md:text-sm`}>State</p>
                            <select
                                name="state"
                                value={formData.state}
                                onChange={handleStateChange}
                                className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                            >
                                <option value="" disabled>
                                    Select State
                                </option>
                                {states.map((state) => (
                                    <option
                                        key={state.isoCode}
                                        value={state.name}
                                    >
                                        {state.name}
                                    </option>
                                ))}
                            </select>
                            {formErrors.state && (
                                <span className="text-red-600 text-xs mt-1">
                                    {formErrors.state}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                            <p className={`text-xs md:text-sm`}>City</p>
                            <select
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                disabled={!formData.state}
                                className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                            >
                                <option value="" disabled>
                                    Select City
                                </option>
                                {cities.map((city) => (
                                    <option key={city} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                            {formErrors.city && (
                                <span className="text-red-600 text-xs mt-1">
                                    {formErrors.city}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                            <p className={`text-xs md:text-sm`}>Pincode</p>
                            <input
                                type="text"
                                name="pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                                placeholder="Enter Pincode"
                            />
                            {formErrors.pincode && (
                                <span className="text-red-600 text-xs mt-1">
                                    {formErrors.pincode}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-5 w-full">
                        <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                            <p className={`text-xs md:text-sm`}>Address</p>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                                placeholder="Enter Address"
                            />
                            {formErrors.address && (
                                <span className="text-red-600 text-xs mt-1">
                                    {formErrors.address}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 md:gap-5 w-full">
                    <p className="text-base md:text-xl">Upload Images</p>
                    <div className="p-[1px] bg-slate-200" />
                    <div className="flex flex-col gap-1 md:gap-1 w-fit">
                        <p className={`text-xs md:text-sm`}>Cover Photo</p>
                        <input
                            type="file"
                            name="cover_photo"
                            multiple={false}
                            onChange={handleCoverPhotoChange}
                            className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                        />
                        {formErrors.cover_photo && (
                            <span className="text-red-600 text-xs mt-1">
                                {formErrors.cover_photo}
                            </span>
                        )}
                        {formData.cover_photo && (
                            <div className="relative w-32 h-32 mt-2">
                                <img
                                    src={`${BASE_IMAGE_URL}/${formData.cover_photo}`}
                                    alt="Cover Preview"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                                <ImCross
                                    className="absolute top-1 right-1 cursor-pointer text-red-600"
                                    onClick={removeCoverPhoto}
                                />
                            </div>
                        )}
                        {formData.updated_cover_photo && (
                            <div className="relative w-32 h-32 mt-2">
                                <img
                                    src={URL.createObjectURL(
                                        formData.updated_cover_photo
                                    )}
                                    alt="Cover Preview"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                                <ImCross
                                    className="absolute top-1 right-1 cursor-pointer text-red-600"
                                    onClick={removeCoverPhoto}
                                />
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-1 md:gap-1 w-fit">
                        <p className={`text-xs md:text-sm`}>
                            Additional Photos
                        </p>
                        <input
                            type="file"
                            name="additional_photos"
                            multiple
                            onChange={handlePhotoChange}
                            className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                        />
                        {formErrors.additional_photos && (
                            <span className="text-red-600 text-xs mt-1">
                                {formErrors.additional_photos}
                            </span>
                        )}
                        <div className="flex gap-5 flex-wrap">
                            {formData.additional_photos?.length > 0 && (
                                <div className="flex gap-5 mt-2 flex-wrap">
                                    {formData.additional_photos.map(
                                        (photo, index) => (
                                            <div
                                                key={index}
                                                className="relative w-32 h-32"
                                            >
                                                <img
                                                    src={`${BASE_IMAGE_URL}/${photo}`}
                                                    alt={`Additional Preview ${
                                                        index + 1
                                                    }`}
                                                    className="w-full h-full object-cover rounded-xl"
                                                />
                                                <ImCross
                                                    className="absolute top-1 right-1 cursor-pointer text-red-600"
                                                    onClick={() =>
                                                        removePhoto(
                                                            "existing",
                                                            index
                                                        )
                                                    }
                                                />
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                            {formData.updated_additional_photos?.length > 0 && (
                                <div className="flex gap-5 mt-2 flex-wrap">
                                    {formData.updated_additional_photos.map(
                                        (photo, index) => (
                                            <div
                                                key={index}
                                                className="relative w-32 h-32"
                                            >
                                                <img
                                                    src={URL.createObjectURL(
                                                        photo
                                                    )}
                                                    alt={`Additional Preview ${
                                                        index + 1
                                                    }`}
                                                    className="w-full h-full object-cover rounded-xl"
                                                />
                                                <ImCross
                                                    className="absolute top-1 right-1 cursor-pointer text-red-600"
                                                    onClick={() =>
                                                        removePhoto(
                                                            "updated",
                                                            index
                                                        )
                                                    }
                                                />
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        className="font-semibold text-xs md:text-lg bg-gradient-to-r from-[#FD070780] to-[#5C034080] text-white px-2 py-1 md:px-4 md:py-2 rounded-2xl cursor-pointer"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateBanquet;
