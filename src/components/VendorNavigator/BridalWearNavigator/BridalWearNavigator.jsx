import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import MainBridalWear from "../../VendorBridalWear/MainBridalWear";
import BridalWearDetails from "../../BridalWearDetails/BridalWearDetails";

const BridalWearNavigator = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <Routes>
            <Route path="/*" element={<Navigate to="all-bridal-wear" />} />
            <Route
                path="all-bridal-wear"
                element={<MainBridalWear handleNavigation={handleNavigation} />}
            />
            <Route path="bridal-wear/:id" element={<BridalWearDetails />} />
        </Routes>
    );
};

export default BridalWearNavigator;
