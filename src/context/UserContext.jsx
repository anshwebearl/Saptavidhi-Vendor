// src/contexts/UserContext.js
import React, { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const BASE_URL = import.meta.env.DEV
        ? import.meta.env.VITE_API_BASE_URL_DEV
        : import.meta.env.VITE_API_BASE_URL_PROD;

    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const getUser = async () => {
        // const token = document.cookie.split("=")[1];
        const token = localStorage.getItem("token");
        // if (!token) {
        //     navigate("/");
        // }
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/getvendors`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const data = await response.json();
            console.log(data);
            if (data.success) {
                setUser(data.vendor);
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
        <UserContext.Provider value={{ user, setUser, getUser }}>
            {children}
        </UserContext.Provider>
    );
};
