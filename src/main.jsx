import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DetailsForm from "./components/SmallFuncDecor/DetailsForm.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import PaymentGateway from "./components/PaymentGateway.jsx";
import OrderConfirmation from "./components/OrderConfirmation.jsx";
import GoogleMyBusiness from "./components/GoogleMyBusiness.jsx";
import Grid from "./components/SmallFuncDecor/Grid.jsx";
import VenueCard from "./components/VendorBanquetHalls/VenueCard.jsx";
import MainVenue from "./components/VendorBanquetHalls/MainVenue.jsx";
import HotelCard from "./components/VendorBanquetHalls/HotelCard.jsx";
import Pagination from "./components/VendorBanquetHalls/Pagination.jsx";
import ReviewCard from "./components/SmallFuncDecor/ReviewCard.jsx";
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

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// import './App.css'
// import { Route, Routes, Navigate } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Home from './Pages/Home' //madhuram home page
// import Package from './components/Package.jsx' // ansh package page
// import BridalMakeup from './components/'
// import Footer from './components/Footer'
// import DetailsForm from './components/SmallFuncDecor/DetailsForm'
// import PaymentGateway from './components/PaymentGateway.jsx'
// import MainVenue from './components/VendorBanquetHalls/MainVenue.jsx'
// import OrderConfirmation from './OrderCofirmation'
// import { CreateWedding } from './Pages/CreatWedding'
// import Checklist from './Pages/CheckList'
// import ChangePassword from './Pages/ChangePassword'
// import BridalLehenga from './Pages/BriadalLehenga'
// import ProductDetails from './Pages/ProductDetails'
// import ReviewsContainer from './Components/VendorReviews/ReviewsContainer'
// import MyCatalog from './Components/VendorMyCatalog/MyCatalog'
// function App() {
//   return (
//     <>
//       <div className="max-w-[1200px] mx-auto font-poppins">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* <Route path="/banquethalls" element={<BanquetHalls />} />
//         <Route path="/package" element={<Package />} />
//         <Route path="/bridalmakeup" element={<BridalMakeup />} /> */}
//           <Route path="/bridallehenga" element={<BridalLehenga />} />
//           {/* <Route path="/weddingcards" element={<WeddingCards />} /> */}
//           <Route path="/addtocart" element={<OrderConfirmation />} />
//           <Route path="/payment" element={<PaymentForm />} />
//           <Route path="/productdetails" element={<ProductDetails />} />
//           {/* <Route path="/smalldfunction" element={<SmallFunction />} />
//         <Route path="/realweddingdetails" element={<RealWeddingDetails />} /> */}
//           <Route path="/createwedding" element={<CreateWedding />} />
//           <Route path="/checklist" element={<Checklist />} />

//           {/* <Route path="/vendor" element={<ReviewsContainer />} /> */}
//           <Route path="/vendor" element={<MyCatalog />} />

//           <Route path="/changepassword" element={<ChangePassword />} />
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//         <Footer />
//       </div>
//     </>
//   )
// }

// export default App
