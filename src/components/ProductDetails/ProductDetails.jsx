import React, { useContext, useEffect, useState } from "react";
import ProductDetailsBanner from "./ProductDetailsComponents/ProductDetailsBanner.jsx";
import Charges from "./ProductDetailsComponents/Charges";
import ProductDetailsForm from "./ProductDetailsComponents/ProductDetailsForm";
import AvailableAreas from "./ProductDetailsComponents/AvailableAreas";
import About from "./ProductDetailsComponents/About";
import Gallery from "./ProductDetailsComponents/Gallery";
import Reviews from "./ProductDetailsComponents/Reviews";
import FAQ from "./ProductDetailsComponents/FAQ";
import Browse from "./ProductDetailsComponents/Browse";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext.jsx";

const BASE_IMAGE_URL = import.meta.env.DEV
    ? import.meta.env.VITE_IMAGE_URL_DEV
    : import.meta.env.VITE_IMAGE_URL_PROD;

const BASE_URL = import.meta.env.DEV
    ? import.meta.env.VITE_API_BASE_URL_DEV
    : import.meta.env.VITE_API_BASE_URL_PROD;

function ProductDetails() {
    const { user } = useContext(UserContext);

    const token = localStorage.getItem("token");

    const [banquet, setBanquet] = useState({});

    const { id } = useParams();

    const getBanquetById = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/get-banquet?vendor_id=${user._id}&banquet_id=${id}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const jsonData = await response.json();
            if (jsonData.success) {
                setBanquet(jsonData.banquet);
                console.log(jsonData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    console.log(user.additional_details);

    useEffect(() => {
        getBanquetById();
        console.log(user);
    }, [user]);

    return (
        <div className="custom-container md:p-0 px-4 flex flex-col gap-4 md:gap-10">
            <ProductDetailsBanner
                cover_photo={banquet?.cover_photo}
                property_name={banquet?.property_name}
                city={banquet?.city}
                state={banquet?.state}
            />
            <div className="flex md:flex-row flex-col justify-center gap-6 items-center">
                <div className="flex flex-col sm:flex-row-reverse lg:flex-col gap-6 w-full md:w-2/5">
                    <Charges
                        veg_price={banquet?.veg_price}
                        nonveg_price={banquet?.nonveg_price}
                        price_per_room={banquet?.price_per_room}
                    />
                    <AvailableAreas
                        available_spaces={banquet?.available_spaces}
                    />
                </div>
                <div className="w-full md:w-3/5">
                    <ProductDetailsForm />
                </div>
            </div>
            <div className="flex md:flex-row flex-col items-center gap-6">
                <div className="w-full md:w-3/5" id="about-section">
                    <About additional_details={user?.additional_details} />
                </div>
                <div className="w-full md:w-2/5" id="gallery-section">
                    <Gallery />
                </div>
            </div>
            <div>
                <Reviews />
            </div>
            <div>
                <FAQ />
            </div>
            <div>
                <Browse />
            </div>
        </div>
    );
}

export default ProductDetails;
