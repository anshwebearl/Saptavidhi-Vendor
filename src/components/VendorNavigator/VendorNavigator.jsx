import { Route, Routes } from "react-router-dom";
import VenueNavigator from "./VenueNavigator/VenueNavigator";
import BridalWearNavigator from "./BridalWearNavigator/BridalWearNavigator";
import GroomWearNavigator from "./GroomWearNavigator/GroomWearNavigator";

const VendorNavigator = () => {
    return (
        <Routes>
            <Route path="venues/*" element={<VenueNavigator />} />
            <Route path="bridal-wears/*" element={<BridalWearNavigator />} />
            <Route path="groom-wears/*" element={<GroomWearNavigator />} />
        </Routes>
    );
};

export default VendorNavigator;
