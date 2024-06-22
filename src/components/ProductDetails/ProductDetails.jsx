import React from "react";
import ProductDetailsBanner from "./ProductDetailsComponents/ProductDetailsBanner.jsx";
import Charges from "./ProductDetailsComponents/Charges";
import ProductDetailsForm from "./ProductDetailsComponents/ProductDetailsForm";
import AvailableAreas from "./ProductDetailsComponents/AvailableAreas";
import About from "./ProductDetailsComponents/About";
import Gallery from "./ProductDetailsComponents/Gallery";
import Reviews from "./ProductDetailsComponents/Reviews";
import FAQ from "./ProductDetailsComponents/FAQ";
import Browse from "./ProductDetailsComponents/Browse";

function ProductDetails() {
    return (
        <div className="custom-container md:p-0 px-4 flex flex-col gap-4 md:gap-10">
            <ProductDetailsBanner />
            <div className="flex md:flex-row flex-col justify-center gap-6 items-center">
                <div className="flex flex-col gap-6 w-full md:w-2/5">
                    <Charges />
                    <AvailableAreas />
                </div>
                <div className="w-full md:w-3/5">
                    <ProductDetailsForm />
                </div>
            </div>
            <div className="flex md:flex-row flex-col items-center gap-6">
                <div className="w-full md:w-3/5">
                    <About />
                </div>
                <div className="w-full md:w-2/5">
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
