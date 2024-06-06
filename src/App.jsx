import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext.jsx";

import BridalLehenga from "./components/BridalLehenga/BridalLehenga.jsx";
import BridalMakeup from "./components/BridalMakeup/BridalMakeupMain.jsx";
import MainChecklist from "./components/Checklist/MainChecklist.jsx";
import MainNavigation from "./components/Vendor/MainNavigation.jsx";
import ChangePassword from "./components/ChangePassword.jsx";
import Home from "./components/Home.jsx";
import CreateWedding from "./components/CreateWedding.jsx";
import VendorLogin from "./components/VendorLogin/VendorLogin.jsx";
import VendorSignup from "./components/VendorSignup/VendorSignup.jsx";
import ForgotPassword from "./components/VendorForgotPassword/ForgotPassword.jsx";
import VendorOtp from "./components/VendorForgotPassword/VendorOtp.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import DetailsForm from "./components/SmallFuncDecor/DetailsForm";
import MainVenue from "./components/VendorBanquetHalls/MainVenue";

function App() {
    return (
        <Router>
            <UserProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<VendorLogin />} />
                    <Route path="/vendorsignup" element={<VendorSignup />} />
                    <Route
                        path="/forgotpassword"
                        element={<ForgotPassword />}
                    />
                    <Route path="/vendorotp" element={<VendorOtp />} />
                    <Route path="/venues" element={<MainVenue />} />
                    <Route path="/photographers" element={<DetailsForm />} />
                    <Route path="/wear" element={<BridalLehenga />} />
                    <Route path="/makeup" element={<BridalMakeup />} />
                    <Route path="/decorators" element={<MainVenue />} />
                    <Route path="/smalldecoration" element={<DetailsForm />} />
                    <Route path="/einvites" element={<DetailsForm />} />
                    <Route path="/joinwedding" element={<MainChecklist />} />
                    <Route path="/profile" element={<MainNavigation />} />
                    <Route path="/inbox" element={<MainNavigation />} />
                    <Route path="/bookings" element={<MainNavigation />} />
                    <Route path="/settings" element={<MainNavigation />} />
                    <Route path="/downloadapp" element={<MainNavigation />} />
                    <Route
                        path="/changepassword"
                        element={<ChangePassword />}
                    />
                    <Route path="/logout" element={<MainNavigation />} />
                    <Route path="/createwedding" element={<CreateWedding />} />
                </Routes>
            </UserProvider>
            <Footer />
        </Router>
    );
}

export default App;
