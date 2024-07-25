import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import MainGroomWear from "../../VendorGroomWear/MainGroomWear";
import GroomWearDetails from "../../GroomWearDetails/GroomWearDetails";

const GroomWearNavigator = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <Routes>
            <Route path="/*" element={<Navigate to="all-groom-wear" />} />
            <Route
                path="all-groom-wear"
                element={<MainGroomWear handleNavigation={handleNavigation} />}
            />
            <Route path="groom-wear/:id" element={<GroomWearDetails />} />
        </Routes>
    );
};

export default GroomWearNavigator;
