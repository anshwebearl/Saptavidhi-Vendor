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
import { UserContext } from "../../context/UserContext";

const RenderComponent = ({ selectedItem }) => {
    switch (selectedItem) {
        case "Personal Information":
            return <VendorInfo1 />;
        case "Additional Info":
            return <VendorInfo2 />;
        case "My Catalog":
            return <MyCatalog />;
        case "Inquiries":
            return <CardGrid />;
        case "Projects":
            return <VendorProjects />;
        case "Membership Plans":
            return <Packages />;
        case "Reviews":
            return <ReviewsContainer />;
        case "Google My Business":
            return <GoogleMyBusiness />;
        default:
            return <div></div>;
    }
};

const MainNavigation = () => {
    const { getUser } = useContext(UserContext);
    const [selectedItem, setSelectedItem] = useState("Personal Information");

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="relative mx-auto p-4 md:p-8 bg-gray-100 font-poppins flex md:flex-row flex-col gap-4">
            {/* <div className="md:absolute md:top-8"> */}
            <Sidebar1
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
            />
            {/* </div> */}
            <div>
                <RenderComponent selectedItem={selectedItem} />
            </div>
        </div>
    );
};

export default MainNavigation;
