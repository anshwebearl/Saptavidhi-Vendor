import { Route, Routes } from "react-router-dom";
import VenueNavigator from "./VenueNavigator/VenueNavigator";
import BridalWearNavigator from "./BridalWearNavigator/BridalWearNavigator";

const VendorNavigator = () => {
    return (
        <Routes>
            <Route path="venues/*" element={<VenueNavigator />} />
            <Route path="bridal-wears/*" element={<BridalWearNavigator />} />
        </Routes>
    );
};

export default VendorNavigator;
