import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import MyServices from "./MyServices";
import AddService from "./AddService";
import UpdateService from "./UpdateService";

const PhotographerServiceNavigator = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <Routes>
            <Route path="/" element={<Navigate to="my-services" />} />
            <Route path="my-services" element={<MyServices handleNavigate={handleNavigate} />} />
            <Route path="add-service" element={<AddService handleNavigate={handleNavigate} />} />
            <Route path="update-service" element={<UpdateService handleNavigate={handleNavigate} />} />
        </Routes>
    );
};

export default PhotographerServiceNavigator;
