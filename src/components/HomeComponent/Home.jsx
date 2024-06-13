/* eslint-disable react/jsx-key */
import React, { useEffect, useRef, useState } from "react";
import Banner from "../Banner";
import CardWrapper1 from "../CardWrapper1/CardWrapper1";
import CardWrapper2 from "../CardWrapper2/CardWrapper2";
import CardWrapper3 from "../CardWrapper3/CardWrapper3";
import CardWrapper4 from "../CardWrapper4/CardWrapper4";
import CardWrapper5 from "../CardWrapper5/CardWrapper5";
import CardWrapper6 from "../CardWrapper6/CardWrapper6";
import CardWrapper7 from "../CardWrapper7/CardWrapper7";
import CardWrapper8 from "../CardWrapper8/CardWrapper8";
import "./home.css";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faCalendar } from "@fortawesome/free-solid-svg-icons";/

function Home() {
    const sliderRef = useRef(null);
    const [isSliderReady, setIsSliderReady] = useState(false);

    useEffect(() => {
        setIsSliderReady(true);
    }, []);

    const prevSlide = () => {
        if (isSliderReady && sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const nextSlide = () => {
        if (isSliderReady && sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const settings5 = {
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    return (
        <>
            <div className="font-poppins">
                <Banner></Banner>
                <div className="custom-container">
                    <CardWrapper8></CardWrapper8>
                </div>
                <div className="custom-container">
                    <CardWrapper1></CardWrapper1>
                </div>
                <div className="custom-container">
                    <CardWrapper6></CardWrapper6>
                </div>

                <div className="custom-container">
                    <CardWrapper7></CardWrapper7>
                </div>
                <div className="custom-container">
                    <CardWrapper2></CardWrapper2>
                </div>
                <div className="custom-container">
                    <CardWrapper3></CardWrapper3>
                </div>
                <div className="custom-container">
                    <CardWrapper4></CardWrapper4>
                </div>
                <div className="custom-container">
                    {/* <CardWrapper5></CardWrapper5> */}
                    <div className="container my-4">
                        <div className="wedding-latest-blog-header">
                            <h3 className="mb-3">Wedding Categories</h3>
                        </div>
                        <div className="wedding-latest-blog-content">
                            <div className="">
                                <div className="wedding-latest-blog-container">
                                    <Slider {...settings5} ref={sliderRef}>
                                        {Array(5).map((e, index) => (
                                            <WeddingBlog key={index} />
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className="wedding-blog-navigators">
                            <button onClick={prevSlide}>
                                {/* <FontAwesomeIcon icon={faArrowLeft} /> */}
                                prev
                            </button>
                            <button onClick={nextSlide}>
                                {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                                next
                            </button>
                        </div>
                    </div>
                </div>
                <style>{`
          .flex::-webkit-scrollbar {
            display: none;
          }
        `}</style>
            </div>
        </>
    );
}

export default Home;

const WeddingBlog = () => {
    return (
        <>
            <div className="">
                <div className="wedding-blog-grid-border">
                    <div>
                        <img src="./create_wedding.png" alt="" />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <h5> 02-03-2024</h5>
                        <h6>Isha And Anmol</h6>
                        <p>
                            We’ve been a nearly strategic error sit voluptatem
                            accuatie laudantie totam aperiam
                        </p>
                        <div className="wedding-blog-owner-name">
                            <img src="./create_wedding.png" alt="" />
                            <p>Isha</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
