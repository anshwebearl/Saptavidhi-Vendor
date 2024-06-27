import React, { useContext, useEffect, useRef, useState } from "react";
import ProductDetailsBanner from "./ProductDetailsComponents/ProductDetailsBanner.jsx";
import Charges from "./ProductDetailsComponents/Charges.jsx";
import ProductDetailsForm from "./ProductDetailsComponents/ProductDetailsForm.jsx";
import AvailableAreas from "./ProductDetailsComponents/AvailableAreas.jsx";
import About from "./ProductDetailsComponents/About.jsx";
import Gallery from "./ProductDetailsComponents/Gallery.jsx";
import Reviews from "./ProductDetailsComponents/Reviews.jsx";
import FAQ from "./ProductDetailsComponents/FAQ.jsx";
import Browse from "./ProductDetailsComponents/Browse.jsx";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext.jsx";

const BASE_URL = import.meta.env.DEV
    ? import.meta.env.VITE_API_BASE_URL_DEV
    : import.meta.env.VITE_API_BASE_URL_PROD;

function ProductDetails() {
    const { user } = useContext(UserContext);

    const token = localStorage.getItem("token");

    const [banquet, setBanquet] = useState({});
    const [vendor, setVendor] = useState({});
    const [vendorProject, setVendorProject] = useState({});

    const { id } = useParams();

    const getVendorById = async (vendor_id) => {
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/get-vendor?id=${vendor_id}`,
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
                setVendor(jsonData.vendor);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getVendorProjects = async (vendor_id) => {
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/get-project?vendor_id=${vendor_id}`,
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
                setVendorProject(jsonData.project);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getBanquetById = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/get-banquet?banquet_id=${id}`,
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
                await getVendorById(jsonData.banquet.vendor_id);
                await getVendorProjects(jsonData.banquet.vendor_id);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const formRef = useRef(null);
    const chargesRef = useRef(null);
    const [formHeight, setFormHeight] = useState(0);

    useEffect(() => {
        if (formRef.current) {
            setFormHeight(formRef.current.offsetHeight);
        }
    }, [formRef.current]);

    useEffect(() => {
        if (chargesRef.current) {
            chargesRef.current.style.height = `${formHeight}px`;
        }
    }, [formHeight]);

    const aboutRef = useRef(null);
    const galleryRef = useRef(null);
    const [aboutHeight, setAboutHeight] = useState(0);

    useEffect(() => {
        if (aboutRef.current) {
            setAboutHeight(aboutRef.current.offsetHeight);
        }
    }, [aboutRef.current]);

    useEffect(() => {
        if (galleryRef.current) {
            galleryRef.current.style.height = `${aboutHeight}px`;
        }
    }, [aboutHeight]);

    useEffect(() => {
        getBanquetById();
    }, [user]);

    return (
        <div className="custom-container md:p-0 px-4 flex flex-col gap-4 md:gap-10 font-poppins">
            <ProductDetailsBanner
                cover_photo={banquet?.cover_photo}
                property_name={banquet?.property_name}
                city={banquet?.city}
                state={banquet?.state}
                address={banquet?.address}
                email={vendor?.email}
                mobile_number={vendor?.mobile_number}
            />
            <div className="flex md:flex-row flex-col justify-center gap-6 items-center">
                <div
                    ref={window.screen.width > 768 ? chargesRef : null}
                    className="flex flex-col sm:flex-row-reverse lg:flex-col gap-6 w-full md:w-2/5"
                >
                    <Charges
                        veg_price={banquet?.veg_price}
                        nonveg_price={banquet?.nonveg_price}
                        price_per_room={banquet?.price_per_room}
                    />
                    <AvailableAreas
                        available_spaces={banquet?.available_spaces}
                    />
                </div>
                {/* <div className="w-full md:w-3/5"> */}
                <ProductDetailsForm formRef={formRef} />
                {/* </div> */}
            </div>
            <div className="flex md:flex-row flex-col gap-6">
                <div className="w-full md:w-3/5">
                    {vendor.additional_details && (
                        <About
                            aboutRef={aboutRef}
                            additional_details={vendor?.additional_details}
                            startedDate={vendor?.createdAt}
                        />
                    )}
                </div>
                {/* <div className="w-full md:w-2/5 overflow-y-scroll" ref={galleryRef}> */}
                {vendorProject && (
                    <Gallery
                        vendorProject={vendorProject}
                        galleryRef={galleryRef}
                    />
                )}
                {/* </div> */}
            </div>
            <div>
                <Reviews />
            </div>
            <div>
                {vendor.additional_details && (
                    <FAQ additional_details={vendor?.additional_details} />
                )}
            </div>
            <div>
                <Browse />
            </div>
        </div>
    );
}

export default ProductDetails;
