/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { UserContext } from "../../../../context/UserContext";
import { useParams } from "react-router-dom";

const BASE_URL = import.meta.env.DEV
    // ? import.meta.env.VITE_API_BASE_URL_DEV
    ? "http://127.0.0.1:8000/api"
    : import.meta.env.VITE_API_BASE_URL_PROD;

const EditMenu = ({ handleNavigate }) => {
    const { user } = useContext(UserContext);

    const { id } = useParams();

    const token = localStorage.getItem("token");

    const [menuTitle, setMenuTitle] = useState("");
    const [menuType, setMenuType] = useState("");
    const [pricePerPlate, setPricePerPlate] = useState("");

    const [vegOptions, setVegOptions] = useState({
        starters: 0,
        mainCourse: 0,
        soupSalads: 0,
        desserts: 0,
    });
    const [nonVegOptions, setNonVegOptions] = useState({
        starters: 0,
        mainCourse: 0,
        soupSalads: 0,
        liveCounters: 0,
    });

    const [errors, setErrors] = useState({
        menuTitle: "",
        menuType: "",
        pricePerPlate: "",
    });

    const getMenu = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/get-menu?vendor_id=${user?._id}&menu_id=${id}`,
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
                setMenuTitle(jsonData.menu.menu_title);
                setPricePerPlate(jsonData.menu.price_per_plate);
                setMenuType(jsonData.menu.menu_type);
                setVegOptions({
                    starters: jsonData.menu.veg_starters,
                    mainCourse: jsonData.menu.veg_main_course,
                    soupSalads: jsonData.menu.veg_soup_salad,
                    desserts: jsonData.menu.deserts,
                });
                setNonVegOptions({
                    starters: jsonData.menu.nonveg_starters,
                    mainCourse: jsonData.menu.nonveg_main_course,
                    soupSalads: jsonData.menu.nonveg_soup_salad,
                    liveCounters: jsonData.menu.live_counters,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset errors
        setErrors({
            menuTitle: "",
            menuType: "",
            pricePerPlate: "",
        });

        // Validate fields
        let valid = true;
        let newErrors = {};

        if (!menuTitle) {
            newErrors.menuTitle = "Menu Title is required";
            valid = false;
        }
        if (!menuType) {
            newErrors.menuType = "Menu Type is required";
            valid = false;
        }
        if (!pricePerPlate) {
            newErrors.pricePerPlate = "Price Per Plate is required";
            valid = false;
        }

        if (!valid) {
            setErrors(newErrors);
            return;
        }

        e.preventDefault();

        const data = {
            menu_id: id,
            menu_title: menuTitle,
            menu_type: menuType,
            price_per_plate: pricePerPlate,
            veg_starters: vegOptions.starters,
            veg_main_course: vegOptions.mainCourse,
            veg_soup_salad: vegOptions.soupSalads,
            deserts: vegOptions.desserts,
            nonveg_starters: nonVegOptions.starters,
            nonveg_main_course: nonVegOptions.mainCourse,
            nonveg_soup_salad: nonVegOptions.soupSalads,
            live_counters: nonVegOptions.liveCounters,
        };

        try {
            const response = await fetch(
                `${BASE_URL}/vendor/update-menu/${user._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(data),
                }
            );
            const jsonData = await response.json();
            if (jsonData.success) {
                toast.success(jsonData.message);
                handleNavigate(-1);
            } else {
                toast.error(jsonData.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMenu();
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
                    Edit Menu
                </h2>
            </div>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-8 p-6"
                noValidate
            >
                <div className="flex flex-col gap-2 md:gap-5 w-full">
                    <p className="text-base md:text-xl">Menu Information</p>
                    <div className="p-[1px] bg-slate-200" />
                    <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-5 w-full">
                        <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                            <p className={`text-xs md:text-sm`}>Menu Title</p>
                            <input
                                type="text"
                                name="menu_title"
                                value={menuTitle}
                                onChange={(e) => {
                                    setMenuTitle(e.target.value);
                                    setErrors((prev) => ({
                                        ...prev,
                                        menuTitle: "",
                                    }));
                                }}
                                className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px] ${
                                    errors.menuTitle ? "border-red-500" : ""
                                }`}
                                placeholder="Enter Menu Title"
                            />
                            {errors.menuTitle && (
                                <p className="text-red-500 text-xs">
                                    {errors.menuTitle}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                            <p className={`text-xs md:text-sm`}>
                                Price Per Plate
                            </p>
                            <input
                                type="text"
                                name="price_per_plate"
                                value={pricePerPlate}
                                onChange={(e) => {
                                    const num = e.target.value.replace(
                                        /[^0-9]/g,
                                        ""
                                    );
                                    setErrors((prev) => ({
                                        ...prev,
                                        pricePerPlate: "",
                                    }));
                                    setPricePerPlate(num);
                                }}
                                className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px] ${
                                    errors.pricePerPlate ? "border-red-500" : ""
                                }`}
                                maxLength={5}
                                placeholder="Enter Price Per Plate"
                            />
                            {errors.pricePerPlate && (
                                <p className="text-red-500 text-xs">
                                    {errors.pricePerPlate}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                            <p className={`text-xs md:text-sm`}>Menu Type</p>
                            <select
                                name="menu_type"
                                value={menuType}
                                onChange={(e) => {
                                    setErrors((prev) => ({
                                        ...prev,
                                        menuType: "",
                                    }));
                                    setMenuType(e.target.value);
                                }}
                                className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff729ia] focus:border-[1.5px] ${
                                    errors.menuType ? "border-red-500" : ""
                                }`}
                            >
                                <option value="" disabled>
                                    Select Menu Type
                                </option>
                                <option value="Veg Standard">
                                    Veg Standard
                                </option>
                                <option value="Veg Premium">Veg Premium</option>
                                <option value="Non-Veg Standard">
                                    Non-Veg Standard
                                </option>
                                <option value="Non-Veg Premium">
                                    Non-Veg Premium
                                </option>
                            </select>
                            {errors.menuType && (
                                <p className="text-red-500 text-xs">
                                    {errors.menuType}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 md:gap-5 w-full">
                    <p className="text-base md:text-xl">Food Information</p>
                    <div className="p-[1px] bg-slate-200" />
                    <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-5 w-full">
                        <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                            <p className={`text-xs md:text-sm`}>Veg Starters</p>
                            <select
                                name="veg_starters"
                                value={vegOptions.starters}
                                onChange={(e) =>
                                    setVegOptions((prev) => ({
                                        ...prev,
                                        starters: e.target.value,
                                    }))
                                }
                                className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                            >
                                <option value="" disabled>
                                    Select Veg Starters
                                </option>
                                {Array.from({ length: 20 }, (_, i) => (
                                    <option key={i + 1} value={i}>
                                        {i}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                            <p className={`text-xs md:text-sm`}>
                                Veg Main Course
                            </p>
                            <select
                                name="veg_main_course"
                                value={vegOptions.mainCourse}
                                onChange={(e) =>
                                    setVegOptions((prev) => ({
                                        ...prev,
                                        mainCourse: e.target.value,
                                    }))
                                }
                                className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                            >
                                <option value="" disabled>
                                    Select Veg Main Course
                                </option>
                                {Array.from({ length: 20 }, (_, i) => (
                                    <option key={i + 1} value={i}>
                                        {i}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                            <p className={`text-xs md:text-sm`}>
                                Veg Soup / Salads
                            </p>
                            <select
                                name="veg_soup_salads"
                                value={vegOptions.soupSalads}
                                onChange={(e) =>
                                    setVegOptions((prev) => ({
                                        ...prev,
                                        soupSalads: e.target.value,
                                    }))
                                }
                                className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                            >
                                <option value="" disabled>
                                    Select Veg Soup / Salads
                                </option>
                                {Array.from({ length: 20 }, (_, i) => (
                                    <option key={i + 1} value={i}>
                                        {i}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                            <p className={`text-xs md:text-sm`}>Desserts</p>
                            <select
                                name="desserts"
                                value={vegOptions.desserts}
                                onChange={(e) =>
                                    setVegOptions((prev) => ({
                                        ...prev,
                                        desserts: e.target.value,
                                    }))
                                }
                                className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                            >
                                <option value="" disabled>
                                    Select Desserts
                                </option>
                                {Array.from({ length: 20 }, (_, i) => (
                                    <option key={i + 1} value={i}>
                                        {i}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {menuType.includes("Non-Veg") && (
                        <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-5 w-full">
                            <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                                <p className={`text-xs md:text-sm`}>
                                    Non Veg Starters
                                </p>
                                <select
                                    name="nonveg_starters"
                                    value={nonVegOptions.starters}
                                    onChange={(e) =>
                                        setNonVegOptions((prev) => ({
                                            ...prev,
                                            starters: e.target.value,
                                        }))
                                    }
                                    className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                                >
                                    <option value="" disabled>
                                        Select Non Veg Starters
                                    </option>
                                    {Array.from({ length: 20 }, (_, i) => (
                                        <option key={i + 1} value={i}>
                                            {i}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                                <p className={`text-xs md:text-sm`}>
                                    Non Veg Main Course
                                </p>
                                <select
                                    name="nonveg_main_course"
                                    value={nonVegOptions.mainCourse}
                                    onChange={(e) =>
                                        setNonVegOptions((prev) => ({
                                            ...prev,
                                            mainCourse: e.target.value,
                                        }))
                                    }
                                    className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                                >
                                    <option value="" disabled>
                                        Select Non Veg Main Course
                                    </option>
                                    {Array.from({ length: 20 }, (_, i) => (
                                        <option key={i + 1} value={i}>
                                            {i}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                                <p className={`text-xs md:text-sm`}>
                                    Non Veg Soup / Salads
                                </p>
                                <select
                                    name="nonveg_soup_salads"
                                    value={nonVegOptions.soupSalads}
                                    onChange={(e) =>
                                        setNonVegOptions((prev) => ({
                                            ...prev,
                                            soupSalads: e.target.value,
                                        }))
                                    }
                                    className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                                >
                                    <option value="" disabled>
                                        Select Non Veg Soup / Salads
                                    </option>
                                    {Array.from({ length: 20 }, (_, i) => (
                                        <option key={i + 1} value={i}>
                                            {i}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col gap-1 md:gap-1 flex-grow w-full">
                                <p className={`text-xs md:text-sm`}>
                                    Live Counters
                                </p>
                                <select
                                    name="live_counters"
                                    value={nonVegOptions.liveCounters}
                                    onChange={(e) =>
                                        setNonVegOptions((prev) => ({
                                            ...prev,
                                            liveCounters: e.target.value,
                                        }))
                                    }
                                    className={`bg-transparent rounded-xl text-xs md:text-sm border-[1px] border-[#FF8DA680] px-2 py-2 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                                >
                                    <option value="" disabled>
                                        Select Live Counters
                                    </option>
                                    {Array.from({ length: 20 }, (_, i) => (
                                        <option key={i + 1} value={i}>
                                            {i}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex justify-end">
                    <button
                        className="font-semibold text-xs md:text-lg bg-gradient-to-r from-[#FD070780] to-[#5C034080] text-white px-2 py-1 md:px-4 md:py-2 rounded-2xl cursor-pointer"
                        type="submit"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditMenu;
