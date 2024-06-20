import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Menu from "./Menu";
import AddMenu from "./AddMenu";
import EditMenu from "./EditMenu";

const MenuNavigator = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <Routes>
            <Route path="/" element={<Navigate to="all-menus" />} />
            <Route
                path="all-menus"
                element={<Menu handleNavigate={handleNavigate} />}
            />
            <Route
                path="add-menu"
                element={<AddMenu handleNavigate={handleNavigate} />}
            />
            <Route
                path="update-menu/:id"
                element={<EditMenu handleNavigate={handleNavigate} />}
            />
        </Routes>
    );
};

export default MenuNavigator;
