import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext.jsx";

import BridalLehenga from "./components/BridalLehenga/BridalLehenga.jsx";
import BridalMakeup from "./components/BridalMakeup/BridalMakeupMain.jsx";
import MainChecklist from "./components/Checklist/MainChecklist.jsx";
import MainNavigation from "./components/Vendor/MainNavigation.jsx";
import ChangePassword from "./components/ChangePassword.jsx";
import Home from "./components/HomeComponent/Home.jsx";
import CreateWedding from "./components/CreateWedding.jsx";
import VendorLogin from "./components/VendorLogin/VendorLogin.jsx";
import VendorSignup from "./components/VendorSignup/VendorSignup.jsx";
import ForgotPassword from "./components/VendorForgotPassword/ForgotPassword.jsx";
import VendorOtp from "./components/VendorForgotPassword/VendorOtp.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import DetailsForm from "./components/SmallFuncDecor/DetailsForm";
import MainVenue from "./components/VendorBanquetHalls/MainVenue";
import RealWeddingDetails from "./components/RealWeddingDetails.jsx";
import ProductDetails from "./components/VenueDetails/ProductDetails.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import VendorNavigator from "./components/VendorNavigator/VendorNavigator.jsx";

function App() {
    return (
        <div className="flex flex-col min-h-screen ">
            <Router>
                <ToastContainer
                    position="bottom-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <UserProvider>
                    <header className="w-full custom-container">
                        <Navbar />
                    </header>
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<VendorLogin />} />
                            <Route
                                path="/vendorsignup"
                                element={<VendorSignup />}
                            />
                            <Route
                                path="/forgotpassword"
                                element={<ForgotPassword />}
                            />
                            <Route path="/vendorotp" element={<VendorOtp />} />
                            <Route
                                path="/photographers"
                                element={<DetailsForm />}
                            />
                            <Route path="/wear" element={<BridalLehenga />} />
                            <Route path="/makeup" element={<BridalMakeup />} />
                            <Route path="/decorators" element={<MainVenue />} />
                            <Route
                                path="/smalldecoration"
                                element={<DetailsForm />}
                            />
                            <Route path="/einvites" element={<DetailsForm />} />
                            <Route
                                path="/joinwedding"
                                element={<MainChecklist />}
                            />
                            <Route
                                path="/profile/*"
                                element={<MainNavigation />}
                            />
                            <Route path="/inbox" element={<MainNavigation />} />
                            <Route
                                path="/bookings"
                                element={<MainNavigation />}
                            />
                            <Route
                                path="/settings"
                                element={<MainNavigation />}
                            />
                            <Route
                                path="/downloadapp"
                                element={<MainNavigation />}
                            />
                            <Route
                                path="/changepassword"
                                element={<ChangePassword />}
                            />
                            <Route
                                path="/logout"
                                element={<MainNavigation />}
                            />
                            <Route
                                path="/createwedding"
                                element={<CreateWedding />}
                            />
                            <Route
                                path="/real-wedding-details"
                                element={<RealWeddingDetails />}
                            />
                            <Route
                                path="/product-details"
                                element={<ProductDetails />}
                            />
                            <Route
                                path="/vendors/*"
                                element={<VendorNavigator />}
                            />
                        </Routes>
                    </main>
                    <footer className="w-full bg-gradient-to-b from-[#FF8DA680] to-[#FD070780]">
                        <div className="custom-container">
                            <Footer />
                        </div>
                    </footer>
                </UserProvider>
            </Router>
        </div>
    );
}

export default App;
