/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import Sidebar1 from "./Sidebar1";
import VendorInfo1 from "./VendorInfo1";
import VendorInfo2 from "./VendorInfo2";
import ReviewsContainer from "./ReviewsContainer";
import GoogleMyBusiness from "./GoogleMyBusiness";
import VendorProjects from "./VendorProjects/VendorProjects";
import CardGrid from "./Cardgrid";
import Packages from "./Packages";
import { UserContext } from "../../context/UserContext";
import Menu from "../Vendor/Venues/Menu";
import { Route, Routes, Navigate } from "react-router-dom";
import BanquetNavigator from "./Venues/Banquet/BanquetNavigator";

const MainNavigation = () => {
    const { getUser } = useContext(UserContext);

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="custom-container mx-auto p-4 md:p-8 font-poppins flex md:flex-row flex-col gap-4">
            <Sidebar1 />
            <Routes>
                <Route path="personal-information" element={<VendorInfo1 />} />
                <Route path="additional-info" element={<VendorInfo2 />} />
                <Route
                    path="banquets/*"
                    element={<BanquetNavigator />}
                />
                <Route path="inquiries" element={<CardGrid />} />
                <Route path="projects/*" element={<VendorProjects />} />
                <Route path="membership-plans" element={<Packages />} />
                <Route path="reviews" element={<ReviewsContainer />} />
                <Route
                    path="google-my-business"
                    element={<GoogleMyBusiness />}
                />
                <Route path="menu" element={<Menu  />} />
                <Route
                    path="/"
                    element={<Navigate to="personal-information" />}
                />
            </Routes>
        </div>
    );
};

export default MainNavigation;
