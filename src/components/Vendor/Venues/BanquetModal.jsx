/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { State, City } from "country-state-city";

const BanquetModal = ({
    onClose,
    handleAddBanquet,
    formData,
    setFormData,
    errors,
    setErrors,
}) => {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        setStates(State.getStatesOfCountry("IN"));
    }, []);

    const handleStateChange = (e) => {
        const selectedState = e.target.value;
        setFormData({ ...formData, state: selectedState, city: "" });
        setErrors({ ...errors, state: false, city: false });
        if (selectedState) {
            setCities(City.getCitiesOfState("IN", selectedState));
        } else {
            setCities([]);
        }
    };

    const handleCityChange = (e) => {
        const selectedCity = e.target.value;
        setFormData({ ...formData, city: selectedCity });
        setErrors({ ...errors, city: false });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "fixed_capacity" || name === "max_capacity") {
            if (!isNaN(value)) {
                setFormData({ ...formData, [name]: value });
                setErrors({ ...errors, [name]: false });
            } else {
                setErrors({ ...errors, [name]: true });
            }
        } else {
            setFormData({ ...formData, [name]: value });
            setErrors({ ...errors, [name]: false });
        }
    };

    const handlePhotoChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData({
            ...formData,
            additional_photos: [...formData.additional_photos, ...files],
        });
        setErrors({ ...errors, additional_photos: false });
    };

    const removePhoto = (index) => {
        const updatedPhotos = formData.additional_photos.filter(
            (_, i) => i !== index
        );
        setFormData({ ...formData, additional_photos: updatedPhotos });
    };

    const removeCoverPhoto = () => {
        setFormData({ ...formData, cover_photo: null });
        setErrors({ ...errors, cover_photo: false });
    };

    const handleCoverPhotoChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, cover_photo: file });
        setErrors({ ...errors, cover_photo: false });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            await handleAddBanquet();
            onClose();
            resetForm();
        }
    };

    const validateForm = () => {
        const newErrors = {
            title: formData.title.trim() === "",
            banquet_type: formData.banquet_type === "",
            state: formData.state.trim() === "",
            city: formData.city.trim() === "",
            fixed_capacity:
                isNaN(formData.fixed_capacity) ||
                formData.fixed_capacity.trim() === "",
            max_capacity:
                isNaN(formData.max_capacity) ||
                formData.max_capacity.trim() === "",
            cover_photo: !formData.cover_photo,
            additional_photos: formData.additional_photos.length < 2,
        };

        setErrors(newErrors);

        // Form is valid if there are no errors
        return Object.values(newErrors).every((error) => !error);
    };

    const resetForm = () => {
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

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-scroll">
            <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/3">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl">Add Banquet</h2>
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
                                value={formData.title}
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
                                value={formData.banquet_type}
                                onChange={handleChange}
                                className={`mt-1 p-2 border ${
                                    errors.banquet_type
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-md w-full`}
                                required
                            >
                                <option value="">Select type</option>
                                <option value="Indoor">Indoor</option>
                                <option value="Outdoor">Outdoor</option>
                                <option value="Poolside">Poolside</option>
                                <option value="Indoor & Outdoor">
                                    Indoor & Outdoor
                                </option>
                                <option value="Terrace">Terrace</option>
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
                                value={formData.state}
                                onChange={handleStateChange}
                                className={`mt-1 p-2 border ${
                                    errors.state
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-md w-full`}
                                required
                            >
                                <option value="">Select state</option>
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
                                value={formData.city}
                                onChange={handleCityChange}
                                className={`mt-1 p-2 border ${
                                    errors.city
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-md w-full`}
                                required
                                disabled={!formData.state}
                            >
                                <option value="">Select city</option>
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
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Fixed Capacity
                            </label>
                            <input
                                type="text"
                                name="fixed_capacity"
                                value={formData.fixed_capacity}
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
                                    Fixed Capacity must be a number
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Max Capacity
                            </label>
                            <input
                                type="text"
                                name="max_capacity"
                                value={formData.max_capacity}
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
                                    Max Capacity must be a number
                                </p>
                            )}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Cover Photo
                        </label>
                        <input
                            type="file"
                            name="cover_photo"
                            onChange={handleCoverPhotoChange}
                            className={`mt-1 p-2 border ${
                                errors.cover_photo
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } rounded-md w-full`}
                            required
                        />
                        {formData.cover_photo && (
                            <div className="relative w-20 h-20 mt-2 border border-gray-300 rounded-md overflow-hidden">
                                <img
                                    src={URL.createObjectURL(
                                        formData.cover_photo
                                    )}
                                    alt="Cover Photo"
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    type="button"
                                    onClick={removeCoverPhoto}
                                    className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-xs"
                                >
                                    <ImCross />
                                </button>
                            </div>
                        )}
                        {errors.cover_photo && (
                            <p className="text-red-500 text-sm mt-1">
                                Cover Photo is required
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Additional Photos
                        </label>
                        <input
                            type="file"
                            name="additional_photos"
                            multiple
                            onChange={handlePhotoChange}
                            className={`mt-1 p-2 border ${
                                errors.additional_photos
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } rounded-md w-full`}
                        />
                        {errors.additional_photos && (
                            <p className="text-red-500 text-sm mt-1">
                                At least 2 additional photos are required
                            </p>
                        )}
                    </div>
                    {formData.additional_photos.length > 0 && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Selected Photos
                            </label>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {formData.additional_photos.map(
                                    (photo, index) => (
                                        <div
                                            key={index}
                                            className="relative w-20 h-20 border border-gray-300 rounded-md overflow-hidden"
                                        >
                                            <img
                                                src={URL.createObjectURL(photo)}
                                                alt={`Photo ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removePhoto(index)
                                                }
                                                className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-xs"
                                            >
                                                <ImCross />
                                            </button>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    )}
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
                                Object.values(errors).some((error) => error)
                                    ? "cursor-not-allowed opacity-50"
                                    : ""
                            }`}
                            disabled={Object.values(errors).some(
                                (error) => error
                            )}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BanquetModal;
