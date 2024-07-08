/* eslint-disable react/prop-types */
// src/contexts/UserContext.js
import React, { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const BASE_URL = import.meta.env.DEV
        ? // ? import.meta.env.VITE_API_BASE_URL_DEV
          "http://127.0.0.1:8000/api"
        : import.meta.env.VITE_API_BASE_URL_PROD;

    const [user, setUser] = useState(null);
    const [vendorType, setVendorType] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const getUser = async () => {
        const token = localStorage.getItem("token");
        // if (!token) {
        //     navigate("/");
        // }
        try {
            const response = await fetch(`${BASE_URL}/vendor/getvendors`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            if (data.success) {
                setUser(data.vendor);
                setVendorType(data.category.name);
            } else {
                if (
                    ["/createwedding", "/profile"].includes(location.pathname)
                ) {
                    navigate("/login");
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUser();
    }, [navigate]);

    return (
        <UserContext.Provider value={{ user, setUser, getUser, vendorType }}>
            {children}
        </UserContext.Provider>
    );
};
