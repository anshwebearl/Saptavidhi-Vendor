import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";

const VendorNavigator = () => {
    return (
        <Routes>
            <Route path="venues/:id" element={<ProductDetails />} />
        </Routes>
    );
};

export default VendorNavigator;
