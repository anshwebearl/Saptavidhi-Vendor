/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import Sidebar1 from "./Sidebar1";
import VendorInfo1 from "./VendorInfo1";
import VendorInfo2 from "./VendorInfo2";
import MyCatalog from "./MyCatalog";
import ReviewsContainer from "./ReviewsContainer";
import GoogleMyBusiness from "./GoogleMyBusiness";
import VendorProjects from "./VendorProjects";
import CardGrid from "./Cardgrid";
import Packages from "./Packages";
import VendorProfile from "../VendorProfile/VendorProfile";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const RenderComponent = ({ selectedItem }) => {
    switch (selectedItem) {
        case "Information":
            return (
                <>
                    <div className="md:ml-[250px] mt-4 md:mt-0">
                        <VendorInfo1 />
                    </div>
                    <VendorInfo2 />
                </>
            );
        case "My Catalog":
            return (
                <div className="relative md:ml-[280px]">
                    <MyCatalog />
                </div>
            );
        case "Inquiries":
            return (
                <div className="relative md:ml-[280px]">
                    <CardGrid />
                </div>
            );
        case "Projects":
            return (
                <div className="relative md:ml-[280px] md:mb-[300px]">
                    <VendorProjects />
                </div>
            );
        case "Membership Plans":
            return (
                <div className="relative md:ml-[280px]">
                    <Packages />
                </div>
            );
        case "Reviews":
            return (
                <div className="relative md:ml-[280px]">
                    <ReviewsContainer />
                </div>
            );
        case "Google My Business":
            return (
                <div className="relative md:ml-[280px]">
                    <GoogleMyBusiness />
                </div>
            );
        case "Profile":
            return (
                <div className="relative md:ml-[280px]">
                    <VendorProfile />
                </div>
            );
        default:
            return <div></div>;
    }
};

const MainNavigation = () => {
    const [selectedItem, setSelectedItem] = useState("Profile");

    return (
        <div className="relative mx-auto p-4 md:p-8 bg-gray-100 font-poppins">
            <div className="md:absolute md:top-8">
                <Sidebar1
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                />
            </div>
            <div>
                <RenderComponent selectedItem={selectedItem} />
            </div>
        </div>
    );
};

export default MainNavigation;
