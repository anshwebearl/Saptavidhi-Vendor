import React from "react";
import { Route, Routes } from "react-router-dom";
import VenueNavigator from "./VenueNavigator/VenueNavigator";

const VendorNavigator = () => {
    return (
        <Routes>
            <Route path="venues/*" element={<VenueNavigator />} />
        </Routes>
    );
};

export default VendorNavigator;
