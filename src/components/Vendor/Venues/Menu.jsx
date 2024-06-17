/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../../context/UserContext";
import { MdEdit, MdDelete } from "react-icons/md";

const Menu = () => {
    const token = localStorage.getItem("token");

    const { user } = useContext(UserContext);

    const [menu, setMenu] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [menuId, setMenuId] = useState("");
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

    const emptyMenuStates = () => {
        setMenuTitle("");
        setMenuType("");
        setPricePerPlate("");
        setVegOptions({
            starters: 0,
            mainCourse: 0,
            soupSalads: 0,
            desserts: 0,
        });
        setNonVegOptions({
            starters: 0,
            mainCourse: 0,
            soupSalads: 0,
            liveCounters: 0,
        });
        setMenuId("");
    };

    const setStates = (item) => {
        setMenuTitle(item.menu_title);
        setMenuType(item.menu_type);
        setPricePerPlate(item.price_per_plate);
        setVegOptions({
            starters: item.veg_starters,
            mainCourse: item.veg_main_course,
            soupSalads: item.veg_soup_salad,
            desserts: item.deserts,
        });
        setNonVegOptions({
            starters: item.nonveg_starters,
            mainCourse: item.nonveg_main_course,
            soupSalads: item.nonveg_soup_salad,
            liveCounters: item.live_counters,
        });
        setMenuId(item._id);
    };

    const BASE_URL = import.meta.env.DEV
        ? import.meta.env.VITE_API_BASE_URL_DEV
        : import.meta.env.VITE_API_BASE_URL_PROD;

    const getAllMenuItems = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/get-menu/${user._id}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const jsonData = await response.json();
            setMenu(jsonData.menu);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSelectChange = (e, setFunction) => {
        const { name, value } = e.target;
        setFunction((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddMenu = async (e) => {
        e.preventDefault();
        if (
            !menuType ||
            !e.target.menuTitle.value ||
            !e.target.pricePerPlate.value
        ) {
            toast.error("Please fill out all fields.");
            return;
        }

        const data = {
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
                `${BASE_URL}/vendor/add-menu/${user._id}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(data),
                }
            );
            const jsonData = await response.json();
            toast.success(jsonData.message);
            emptyMenuStates();
            getAllMenuItems();
        } catch (error) {
            console.log(error);
        }

        setIsModalOpen(false);
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/delete-menu/${user._id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        menu_id: menuId,
                    }),
                }
            );
            const jsonData = await response.json();
            toast.success(jsonData.message);
            emptyMenuStates();
            getAllMenuItems();
            setIsDeleteModalOpen(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditMenuModal = (item) => {
        setIsEditModalOpen(true);
        setStates(item);
    };

    const handleEditMenu = async (e) => {
        e.preventDefault();
        if (
            !menuType ||
            !e.target.menuTitle.value ||
            !e.target.pricePerPlate.value
        ) {
            toast.error("Please fill out all fields.");
            return;
        }

        const data = {
            menu_id: menuId,
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
                emptyMenuStates();
                getAllMenuItems();
                setIsEditModalOpen(false);
            } else {
                toast.error(jsonData.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllMenuItems();
    }, []);

    return (
        <div className="relative flex flex-col gap-5 w-full">
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
            <div
                className={`border-[#00000033] border-[1px] p-5 md:p-8 rounded-3xl flex flex-col gap-3 w-full `}
            >
                <div className="flex justify-between">
                    <p className="font-[500] text-md md:text-2xl">My Menu</p>
                    <div
                        onClick={() => setIsModalOpen(true)}
                        className={
                            "cursor-pointer bg-gradient-to-r from-[#FD070780] to-[#5C034080] text-white px-5 py-1 w-fit rounded-full font-semibold text-xs md:text-lg"
                        }
                    >
                        ADD
                    </div>
                </div>
                <div className="border-[#00000033] border-b-[1px]"></div>
                {/* Table Structure */}
                <div className="overflow-x-auto w-full">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-2 md:px-6 md:py-3 text-left text-[10px] md:text-base font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Title
                                </th>
                                <th
                                    scope="col"
                                    className="px-2 md:px-6 md:py-3 text-left text-[10px] md:text-base font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Type
                                </th>
                                <th
                                    scope="col"
                                    className="px-2 md:px-6 md:py-3 text-left text-[10px] md:text-base font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Price per Plate
                                </th>
                                <th
                                    scope="col"
                                    className="px-2 md:px-6 md:py-3 text-left text-[10px] md:text-base font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {menu.map((item) => (
                                <tr key={item._id}>
                                    <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-base">
                                        {item.menu_title}
                                    </td>
                                    <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-base">
                                        {item.menu_type}
                                    </td>
                                    <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-base">
                                        {item.price_per_plate}
                                    </td>
                                    <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-base">
                                        <button
                                            className="text-indigo-600 hover:text-indigo-900"
                                            onClick={() =>
                                                handleEditMenuModal(item)
                                            }
                                        >
                                            <MdEdit
                                                size={
                                                    window.screen.width > 768
                                                        ? 25
                                                        : 20
                                                }
                                            />
                                        </button>
                                        <button
                                            className="text-red-600 hover:text-red-900 ml-4"
                                            onClick={() => {
                                                setIsDeleteModalOpen(true);
                                                setMenuId(item._id);
                                            }}
                                        >
                                            <MdDelete
                                                size={
                                                    window.screen.width > 768
                                                        ? 25
                                                        : 20
                                                }
                                            />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Insert Menu Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="fixed inset-0 bg-black opacity-50"
                        onClick={(e) => e.stopPropagation()}
                    ></div>
                    <div
                        className="bg-white p-8 rounded-lg z-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl mb-4">Add Menu Item</h2>
                        <form onSubmit={handleAddMenu}>
                            <div className="mb-4">
                                <label
                                    htmlFor="menuTitle"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Menu Title
                                </label>
                                <input
                                    type="text"
                                    id="menuTitle"
                                    name="menuTitle"
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                    value={menuTitle}
                                    onChange={(e) =>
                                        setMenuTitle(e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex gap-2">
                                <div className="mb-4 flex-1">
                                    <label
                                        htmlFor="menuType"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Menu Type
                                    </label>
                                    <select
                                        id="menuType"
                                        name="menuType"
                                        value={menuType}
                                        onChange={(e) =>
                                            setMenuType(e.target.value)
                                        }
                                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                    >
                                        <option value="" disabled>
                                            Select Menu Type
                                        </option>
                                        <option value="Veg Standard">
                                            Veg Standard
                                        </option>
                                        <option value="Veg Premium">
                                            Veg Premium
                                        </option>
                                        <option value="Non-Veg Standard">
                                            Non-Veg Standard
                                        </option>
                                        <option value="Non-Veg Premium">
                                            Non-Veg Premium
                                        </option>
                                    </select>
                                </div>
                                <div className="mb-4 w-fit">
                                    <label
                                        htmlFor="pricePerPlate"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Price per Plate
                                    </label>
                                    <input
                                        value={pricePerPlate}
                                        onChange={(e) =>
                                            setPricePerPlate(e.target.value)
                                        }
                                        type="number"
                                        id="pricePerPlate"
                                        name="pricePerPlate"
                                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="selectInputs"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Veg Options
                                </label>
                                <div className="flex gap-2">
                                    <CustomInput
                                        name="starters"
                                        value={vegOptions.starters}
                                        onChange={(e) =>
                                            handleSelectChange(e, setVegOptions)
                                        }
                                        title="Veg Starters"
                                    />
                                    <CustomInput
                                        name="mainCourse"
                                        value={vegOptions.mainCourse}
                                        onChange={(e) =>
                                            handleSelectChange(e, setVegOptions)
                                        }
                                        title="Veg Main Course"
                                    />
                                    <CustomInput
                                        name="soupSalads"
                                        value={vegOptions.soupSalads}
                                        onChange={(e) =>
                                            handleSelectChange(e, setVegOptions)
                                        }
                                        title="Veg Soup/Salads"
                                    />
                                    <CustomInput
                                        name="desserts"
                                        value={vegOptions.desserts}
                                        onChange={(e) =>
                                            handleSelectChange(e, setVegOptions)
                                        }
                                        title="Desserts"
                                    />
                                </div>
                            </div>
                            {menuType.includes("Non-Veg") && (
                                <div className="mb-4">
                                    <label
                                        htmlFor="selectInputs"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Non-Veg Options
                                    </label>
                                    <div className="flex gap-2">
                                        <CustomInput
                                            name="starters"
                                            value={nonVegOptions.starters}
                                            onChange={(e) =>
                                                handleSelectChange(
                                                    e,
                                                    setNonVegOptions
                                                )
                                            }
                                            title="Non-Veg Starters"
                                        />
                                        <CustomInput
                                            name="mainCourse"
                                            value={nonVegOptions.mainCourse}
                                            onChange={(e) =>
                                                handleSelectChange(
                                                    e,
                                                    setNonVegOptions
                                                )
                                            }
                                            title="Non-Veg Main Course"
                                        />
                                        <CustomInput
                                            name="soupSalads"
                                            value={nonVegOptions.soupSalads}
                                            onChange={(e) =>
                                                handleSelectChange(
                                                    e,
                                                    setNonVegOptions
                                                )
                                            }
                                            title="Non-Veg Soup/Salads"
                                        />
                                        <CustomInput
                                            name="liveCounters"
                                            value={nonVegOptions.liveCounters}
                                            onChange={(e) =>
                                                handleSelectChange(
                                                    e,
                                                    setNonVegOptions
                                                )
                                            }
                                            title="Live Counters"
                                        />
                                    </div>
                                </div>
                            )}
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsModalOpen(false);
                                        emptyMenuStates();
                                    }}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-md"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Menu Modal */}
            {isDeleteModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50"
                    onClick={() => setIsDeleteModalOpen(false)}
                >
                    <div
                        className="fixed inset-0 bg-black opacity-50"
                        onClick={(e) => e.stopPropagation()}
                    ></div>
                    <div
                        className="bg-white p-8 rounded-lg z-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl mb-4">Confirm Delete?</h2>
                        <form onSubmit={handleDelete}>
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsDeleteModalOpen(false);
                                        emptyMenuStates();
                                    }}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-md"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                >
                                    OK
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Edit Menu Modal */}
            {isEditModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50"
                    onClick={() => setIsDeleteModalOpen(false)}
                >
                    <div
                        className="fixed inset-0 bg-black opacity-50"
                        onClick={(e) => e.stopPropagation()}
                    ></div>
                    <div
                        className="bg-white p-8 rounded-lg z-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl mb-4">Add Menu Item</h2>
                        <form onSubmit={handleEditMenu}>
                            <div className="mb-4">
                                <label
                                    htmlFor="menuTitle"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Menu Title
                                </label>
                                <input
                                    type="text"
                                    id="menuTitle"
                                    name="menuTitle"
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                    value={menuTitle}
                                    onChange={(e) =>
                                        setMenuTitle(e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex gap-2">
                                <div className="mb-4 flex-1">
                                    <label
                                        htmlFor="menuType"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Menu Type
                                    </label>
                                    <select
                                        id="menuType"
                                        name="menuType"
                                        value={menuType}
                                        onChange={(e) =>
                                            setMenuType(e.target.value)
                                        }
                                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                    >
                                        <option value="" disabled>
                                            Select Menu Type
                                        </option>
                                        <option value="Veg Standard">
                                            Veg Standard
                                        </option>
                                        <option value="Veg Premium">
                                            Veg Premium
                                        </option>
                                        <option value="Non-Veg Standard">
                                            Non-Veg Standard
                                        </option>
                                        <option value="Non-Veg Premium">
                                            Non-Veg Premium
                                        </option>
                                    </select>
                                </div>
                                <div className="mb-4 w-fit">
                                    <label
                                        htmlFor="pricePerPlate"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Price per Plate
                                    </label>
                                    <input
                                        value={pricePerPlate}
                                        onChange={(e) =>
                                            setPricePerPlate(e.target.value)
                                        }
                                        type="number"
                                        id="pricePerPlate"
                                        name="pricePerPlate"
                                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="selectInputs"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Veg Options
                                </label>
                                <div className="flex gap-2">
                                    <CustomInput
                                        name="starters"
                                        value={vegOptions.starters}
                                        onChange={(e) =>
                                            handleSelectChange(e, setVegOptions)
                                        }
                                        title="Veg Starters"
                                    />
                                    <CustomInput
                                        name="mainCourse"
                                        value={vegOptions.mainCourse}
                                        onChange={(e) =>
                                            handleSelectChange(e, setVegOptions)
                                        }
                                        title="Veg Main Course"
                                    />
                                    <CustomInput
                                        name="soupSalads"
                                        value={vegOptions.soupSalads}
                                        onChange={(e) =>
                                            handleSelectChange(e, setVegOptions)
                                        }
                                        title="Veg Soup/Salads"
                                    />
                                    <CustomInput
                                        name="desserts"
                                        value={vegOptions.desserts}
                                        onChange={(e) =>
                                            handleSelectChange(e, setVegOptions)
                                        }
                                        title="Desserts"
                                    />
                                </div>
                            </div>
                            {menuType.includes("Non-Veg") && (
                                <div className="mb-4">
                                    <label
                                        htmlFor="selectInputs"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Non-Veg Options
                                    </label>
                                    <div className="flex gap-2">
                                        <CustomInput
                                            name="starters"
                                            value={nonVegOptions.starters}
                                            onChange={(e) =>
                                                handleSelectChange(
                                                    e,
                                                    setNonVegOptions
                                                )
                                            }
                                            title="Non-Veg Starters"
                                        />
                                        <CustomInput
                                            name="mainCourse"
                                            value={nonVegOptions.mainCourse}
                                            onChange={(e) =>
                                                handleSelectChange(
                                                    e,
                                                    setNonVegOptions
                                                )
                                            }
                                            title="Non-Veg Main Course"
                                        />
                                        <CustomInput
                                            name="soupSalads"
                                            value={nonVegOptions.soupSalads}
                                            onChange={(e) =>
                                                handleSelectChange(
                                                    e,
                                                    setNonVegOptions
                                                )
                                            }
                                            title="Non-Veg Soup/Salads"
                                        />
                                        <CustomInput
                                            name="liveCounters"
                                            value={nonVegOptions.liveCounters}
                                            onChange={(e) =>
                                                handleSelectChange(
                                                    e,
                                                    setNonVegOptions
                                                )
                                            }
                                            title="Live Counters"
                                        />
                                    </div>
                                </div>
                            )}
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsEditModalOpen(false);
                                        emptyMenuStates();
                                    }}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-md"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Menu;

const CustomInput = ({ value, name, title, onChange }) => {
    return (
        <select
            name={name}
            value={value}
            onChange={onChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            // defaultValue={"dasds"}
        >
            <option value="0" disabled selected={true}>
                {title}
            </option>
            {Array.from({ length: 20 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                    {i + 1}
                </option>
            ))}
        </select>
    );
};
