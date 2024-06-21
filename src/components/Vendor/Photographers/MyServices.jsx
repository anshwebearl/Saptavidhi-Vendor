/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { MdEdit } from "react-icons/md";

const formDataDetails = [
    {
        name: "candidPhotography",
        service: "Candid Photography",
        value: 0,
    },
    {
        name: "weddingFilms",
        service: "Wedding Films",
        value: 0,
    },
    {
        name: "tradionalPhotography",
        service: "Tradional Photography",
        value: 0,
    },
    {
        name: "preWeddingShoots",
        service: "Pre-Wedding Shoots",
        value: 0,
    },
    {
        name: "albums",
        service: "Albums",
        value: 0,
    },
    {
        name: "maternityShoots",
        service: "Maternity Shoots",
        value: 0,
    },
    {
        name: "fashionShoots",
        service: "Fashion Shoots",
        value: 0,
    },
    {
        name: "preWeddingFilms",
        service: "Pre-Wedding Films",
        value: 0,
    },
    {
        name: "tradionalVideography",
        service: "Tradional Videography",
        value: 0,
    },
];

const BASE_URL = import.meta.env.DEV
    ? import.meta.env.VITE_API_BASE_URL_DEV
    : import.meta.env.VITE_API_BASE_URL_PROD;

const MyServices = ({ handleNavigate }) => {
    const { user } = useContext(UserContext);
    const token = localStorage.getItem("token");

    const [tableData, setTableData] = useState([]);

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

    useEffect(() => {
        getAllServices();
    }, [handleNavigate]);

    useEffect(() => {
        let filteredData = formDataDetails.filter(
            (item) => formData[item.name] !== 0
        );
        filteredData = filteredData.map((el) => ({
            ...el,
            value: formData[el.name],
        }));
        setTableData(filteredData);
    }, [formData]);

    return (
        <div className="relative flex flex-col gap-2 w-full border-2 p-5 md:px-5 md:py-8 rounded-3xl">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-md md:text-2xl font-semibold">
                    Photography Services
                </h2>
                <div
                    onClick={() => handleNavigate("add-service")}
                    className="font-semibold text-xs md:text-lg bg-gradient-to-r from-[#FD070780] to-[#5C034080] text-white px-2 py-1 md:px-4 md:py-2 rounded-2xl cursor-pointer"
                >
                    Add Service
                </div>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-end">
                <div onClick={()=>handleNavigate("update-service")} className="p-1 border-[1px] rounded-lg text-green-600 border-green-600 text-xl cursor-pointer">
                    <MdEdit />
                </div>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-2 md:px-6 md:py-3 text-left text-[10px] md:text-base font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Service
                            </th>
                            <th
                                scope="col"
                                className="px-2 md:px-6 md:py-3 text-left text-[10px] md:text-base font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {tableData.map((item) => (
                            <tr key={item.name}>
                                <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-base">
                                    {item.service}
                                </td>
                                <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-base">
                                    {item.value}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyServices;
