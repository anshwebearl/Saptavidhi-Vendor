/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../context/UserContext";
import { MdEdit, MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const BASE_URL = import.meta.env.DEV
    // ? import.meta.env.VITE_API_BASE_URL_DEV
    ? "http://127.0.0.1:8000/api"
    : import.meta.env.VITE_API_BASE_URL_PROD;

const Menu = ({ handleNavigate }) => {
    const token = localStorage.getItem("token");

    const { user } = useContext(UserContext);

    const [menu, setMenu] = useState([]);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [menuId, setMenuId] = useState("");

    const getAllMenuItems = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/get-menus/${user._id}`,
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
            setMenuId("");
            getAllMenuItems();
            setIsDeleteModalOpen(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllMenuItems();
    }, [handleNavigate]);

    return (
        <div className="relative flex flex-col gap-5 w-full">
            <div
                className={`border-2 p-5 md:p-8 rounded-3xl flex flex-col gap-3 w-full `}
            >
                <div className="flex justify-between">
                    <p className="font-[600] text-md md:text-xl">My Menu</p>
                    <div
                        onClick={() => handleNavigate("add-menu")}
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
                                    className="px-2 md:px-6 md:py-3 text-left text-[10px] md:text-sm font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Title
                                </th>
                                <th
                                    scope="col"
                                    className="px-2 md:px-6 md:py-3 text-left text-[10px] md:text-sm font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Type
                                </th>
                                <th
                                    scope="col"
                                    className="px-2 md:px-6 md:py-3 text-left text-[10px] md:text-sm font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Price per Plate
                                </th>
                                <th
                                    scope="col"
                                    className="px-2 md:px-6 md:py-3 text-left text-[10px] md:text-sm font-medium text-gray-500 uppercase tracking-wider"
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
                                                handleNavigate(
                                                    `update-menu/${item._id}`
                                                )
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
                                        setMenuId("");
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
        </div>
    );
};

export default Menu;
