/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { State, City } from "country-state-city";

const BASE_URL = "http://localhost:8000"; // Define your base URL for local images

const UpdateBanquetModal = ({
    onClose,
    handleUpdateBanquet,
    existingBanquetData,
    updationFormData,
    setUpdationFormData,
    errors,
    setErrors,
}) => {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        setStates(State.getStatesOfCountry("IN"));
        if (existingBanquetData.state) {
            setCities(City.getCitiesOfState("IN", existingBanquetData.state));
        }
    }, [existingBanquetData.state]);

    useEffect(() => {
        // Initialize updatedFormData with existing data when it changes
        setUpdationFormData({
            title: existingBanquetData.title,
            banquet_type: existingBanquetData.banquet_type,
            state: existingBanquetData.state,
            city: existingBanquetData.city,
            fixed_capacity: existingBanquetData.fixed_capacity.toString(), // Ensure it's a string
            max_capacity: existingBanquetData.max_capacity.toString(),
            existing_cover_photo: existingBanquetData.cover_photo,
            existing_additional_photos: existingBanquetData.additional_photos,
            updated_cover_photo: null,
            updated_additional_photos: [],
        });
    }, [existingBanquetData]);

    const handleStateChange = (e) => {
        const selectedState = e.target.value;
        setUpdationFormData({
            ...updationFormData,
            state: selectedState,
            city: "", // Reset city when state changes
        });
        setErrors({ ...errors, state: false, city: false });
        if (selectedState) {
            setCities(City.getCitiesOfState("IN", selectedState));
        } else {
            setCities([]);
        }
    };

    const handleCityChange = (e) => {
        const selectedCity = e.target.value;
        setUpdationFormData({ ...updationFormData, city: selectedCity });
        setErrors({ ...errors, city: false });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Handle capacity fields separately for validation
        if (name === "fixed_capacity" || name === "max_capacity") {
            if (!isNaN(value)) {
                setUpdationFormData({ ...updationFormData, [name]: value });
                setErrors({ ...errors, [name]: false });
            } else {
                setErrors({ ...errors, [name]: true });
            }
        } else {
            setUpdationFormData({ ...updationFormData, [name]: value });
            setErrors({ ...errors, [name]: false });
        }
    };

    const handlePhotoChange = (e) => {
        const files = Array.from(e.target.files);
        setUpdationFormData({
            ...updationFormData,
            updated_additional_photos: [
                ...updationFormData.updated_additional_photos,
                ...files,
            ],
        });
        setErrors({ ...errors, additional_photos: false });
    };

    const removePhoto = (type, index) => {
        if (type === "existing") {
            const updatedPhotos = [
                ...updationFormData.existing_additional_photos,
            ];
            updatedPhotos.splice(index, 1);
            setUpdationFormData({
                ...updationFormData,
                existing_additional_photos: updatedPhotos,
            });
        } else if (type === "updated") {
            const updatedPhotos = [
                ...updationFormData.updated_additional_photos,
            ];
            updatedPhotos.splice(index, 1);
            setUpdationFormData({
                ...updationFormData,
                updated_additional_photos: updatedPhotos,
            });
        }
    };

    const removeCoverPhoto = () => {
        setUpdationFormData({
            ...updationFormData,
            existing_cover_photo: "",
        });
        setErrors({ ...errors, cover_photo: false });
    };

    const handleCoverPhotoChange = (e) => {
        const file = e.target.files[0];
        // Remove existing cover photo if present
        setUpdationFormData({
            ...updationFormData,
            existing_cover_photo: "",
            updated_cover_photo: file,
        });
        setErrors({ ...errors, cover_photo: false });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            await handleUpdateBanquet();
            onClose();
            resetForm();
        }
    };

    const validateForm = () => {
        const newErrors = {
            title: updationFormData.title.trim() === "",
            banquet_type: updationFormData.banquet_type === "",
            state: updationFormData.state.trim() === "",
            city: updationFormData.city.trim() === "",
            fixed_capacity:
                isNaN(updationFormData.fixed_capacity) ||
                updationFormData.fixed_capacity.trim() === "",
            max_capacity:
                isNaN(updationFormData.max_capacity) ||
                updationFormData.max_capacity.trim() === "",
            cover_photo:
                !updationFormData.updated_cover_photo &&
                !updationFormData.existing_cover_photo,
            additional_photos:
                updationFormData.updated_additional_photos.length +
                    updationFormData.existing_additional_photos.length <
                2,
        };

        setErrors(newErrors);

        // Form is valid if there are no errors
        return Object.values(newErrors).every((error) => !error);
    };

    const resetForm = () => {
        setUpdationFormData({
            title: "",
            banquet_type: "",
            state: "",
            city: "",
            fixed_capacity: "",
            max_capacity: "",
            existing_cover_photo: "",
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

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-scroll">
            <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/3">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl">Update Banquet</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-gray-800"
                    >
                        <ImCross />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="flex justify-between gap-5">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700">
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={updationFormData.title}
                                onChange={handleChange}
                                className={`mt-1 p-2 border ${
                                    errors.title
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-md w-full`}
                                required
                            />
                            {errors.title && (
                                <p className="text-red-500 text-sm mt-1">
                                    Title is required
                                </p>
                            )}
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700">
                                Banquet Type
                            </label>
                            <select
                                name="banquet_type"
                                value={updationFormData.banquet_type}
                                onChange={handleChange}
                                className={`mt-1 p-2 border ${
                                    errors.banquet_type
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-md w-full`}
                                required
                            >
                                <option value="">Select Banquet Type</option>
                                <option value="marriage">Marriage</option>
                                <option value="party">Party</option>
                                <option value="conference">Conference</option>
                                <option value="others">Others</option>
                            </select>
                            {errors.banquet_type && (
                                <p className="text-red-500 text-sm mt-1">
                                    Banquet Type is required
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700">
                                State
                            </label>
                            <select
                                name="state"
                                value={updationFormData.state}
                                onChange={handleStateChange}
                                className={`mt-1 p-2 border ${
                                    errors.state
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-md w-full`}
                                required
                            >
                                <option value="">Select State</option>
                                {states.map((state) => (
                                    <option
                                        key={state.isoCode}
                                        value={state.isoCode}
                                    >
                                        {state.name}
                                    </option>
                                ))}
                            </select>
                            {errors.state && (
                                <p className="text-red-500 text-sm mt-1">
                                    State is required
                                </p>
                            )}
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700">
                                City
                            </label>
                            <select
                                name="city"
                                value={updationFormData.city}
                                onChange={handleCityChange}
                                className={`mt-1 p-2 border ${
                                    errors.city
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-md w-full`}
                                required
                            >
                                <option value="">Select City</option>
                                {cities.map((city) => (
                                    <option key={city.name} value={city.name}>
                                        {city.name}
                                    </option>
                                ))}
                            </select>
                            {errors.city && (
                                <p className="text-red-500 text-sm mt-1">
                                    City is required
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700">
                                Fixed Capacity
                            </label>
                            <input
                                type="text"
                                name="fixed_capacity"
                                value={updationFormData.fixed_capacity}
                                onChange={handleChange}
                                className={`mt-1 p-2 border ${
                                    errors.fixed_capacity
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-md w-full`}
                                required
                            />
                            {errors.fixed_capacity && (
                                <p className="text-red-500 text-sm mt-1">
                                    Fixed Capacity is required and must be a
                                    number
                                </p>
                            )}
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700">
                                Maximum Capacity
                            </label>
                            <input
                                type="text"
                                name="max_capacity"
                                value={updationFormData.max_capacity}
                                onChange={handleChange}
                                className={`mt-1 p-2 border ${
                                    errors.max_capacity
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-md w-full`}
                                required
                            />
                            {errors.max_capacity && (
                                <p className="text-red-500 text-sm mt-1">
                                    Maximum Capacity is required and must be a
                                    number
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">
                            Cover Photo
                        </label>
                        <div className="mt-1 flex items-center">
                            <input
                                type="file"
                                name="cover_photo"
                                accept="image/*"
                                onChange={handleCoverPhotoChange}
                                className="hidden"
                                id="cover_photo"
                            />
                            <label
                                htmlFor="cover_photo"
                                className={`p-2 border ${
                                    errors.cover_photo
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-md w-full flex justify-center cursor-pointer`}
                            >
                                Choose Cover Photo
                            </label>
                            {updationFormData.existing_cover_photo && (
                                <div className="ml-4 relative">
                                    <img
                                        src={`${BASE_URL}/${updationFormData.existing_cover_photo}`}
                                        alt="Cover"
                                        className="h-20 w-20 object-cover rounded-md"
                                    />
                                    <button
                                        type="button"
                                        className="text-xs absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                        onClick={removeCoverPhoto}
                                    >
                                        <ImCross />
                                    </button>
                                </div>
                            )}
                            {updationFormData.updated_cover_photo && (
                                <div className="ml-4 relative">
                                    <img
                                        src={URL.createObjectURL(
                                            updationFormData.updated_cover_photo
                                        )}
                                        alt="Cover"
                                        className="h-20 w-20 object-cover rounded-md"
                                    />
                                    <button
                                        type="button"
                                        className="text-xs absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                        onClick={removeCoverPhoto}
                                    >
                                        <ImCross />
                                    </button>
                                </div>
                            )}
                        </div>
                        {(errors.cover_photo ||
                            (!updationFormData.existing_cover_photo &&
                                !updationFormData.updated_cover_photo)) && (
                            <p className="text-red-500 text-sm mt-1">
                                Cover Photo is required
                            </p>
                        )}
                    </div>
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">
                            Additional Photos (at least 2)
                        </label>
                        <div className="mt-1 flex items-center">
                            <input
                                type="file"
                                name="additional_photos"
                                accept="image/*"
                                multiple
                                onChange={handlePhotoChange}
                                className="hidden"
                                id="additional_photos"
                            />
                            <label
                                htmlFor="additional_photos"
                                className={`p-2 border ${
                                    errors.additional_photos
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-md w-full flex justify-center cursor-pointer`}
                            >
                                Choose Additional Photos
                            </label>
                        </div>
                        <div className="mt-2 flex gap-2 flex-wrap">
                            {updationFormData.existing_additional_photos.map(
                                (photo, index) => (
                                    <div key={index} className="relative">
                                        <img
                                            src={`${BASE_URL}/${photo}`}
                                            alt={`Additional ${index}`}
                                            className="h-20 w-20 object-cover rounded-md"
                                        />
                                        <button
                                            type="button"
                                            className="text-xs absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                            onClick={() =>
                                                removePhoto("existing", index)
                                            }
                                        >
                                            <ImCross />
                                        </button>
                                    </div>
                                )
                            )}
                            {updationFormData.updated_additional_photos.map(
                                (photo, index) => (
                                    <div key={index} className="relative">
                                        <img
                                            src={URL.createObjectURL(photo)}
                                            alt={`Additional ${index}`}
                                            className="h-20 w-20 object-cover rounded-md"
                                        />
                                        <button
                                            type="button"
                                            className="text-xs absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                            onClick={() =>
                                                removePhoto("updated", index)
                                            }
                                        >
                                            <ImCross />
                                        </button>
                                    </div>
                                )
                            )}
                        </div>
                        {(errors.additional_photos ||
                            updationFormData.existing_additional_photos.length +
                                updationFormData.updated_additional_photos
                                    .length <
                                2) && (
                            <p className="text-red-500 text-sm mt-1">
                                At least 2 additional photos are required
                            </p>
                        )}
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded-md"
                        >
                            Update Banquet
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateBanquetModal;
