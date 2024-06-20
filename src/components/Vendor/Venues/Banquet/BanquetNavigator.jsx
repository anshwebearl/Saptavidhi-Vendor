import React, { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Banquet from "./Banquet";
import AddBanquet from "./AddBanquet";
import UpdateBanquet from "./UpdateBanquet";

const BanquetNavigator = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <Routes>
            <Route path="/" element={<Navigate to="all-banquets" />} />
            <Route
                path="all-banquets"
                element={<Banquet handleNavigate={handleNavigate} />}
            />
            <Route
                path="add-banquet"
                element={<AddBanquet handleNavigate={handleNavigate} />}
            />
            <Route
                path="update-banquet/:id"
                element={<UpdateBanquet handleNavigate={handleNavigate} />}
            />
        </Routes>
    );
};

export default BanquetNavigator;
