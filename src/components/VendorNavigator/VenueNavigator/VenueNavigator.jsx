import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import ProductDetails from "../../VenueDetails/ProductDetails";
import MainVenue from "../../VendorBanquetHalls/MainVenue";

const VenueNavigator = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <Routes>
            <Route path="/*" element={<Navigate to="all-venues" />} />
            <Route
                path="all-venues"
                element={<MainVenue handleNavigation={handleNavigation} />}
            />
            <Route path="banquet/:id" element={<ProductDetails />} />
        </Routes>
    );
};

export default VenueNavigator;
