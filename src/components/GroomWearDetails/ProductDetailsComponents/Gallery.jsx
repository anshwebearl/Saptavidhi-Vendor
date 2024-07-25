/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
const BASE_IMAGE_URL = import.meta.env.DEV
    // ? import.meta.env.VITE_IMAGE_URL_DEV
    ? "http://127.0.0.1:8000"
    : import.meta.env.VITE_IMAGE_URL_PROD;

const Gallery = ({ vendorProject, galleryRef }) => {
    const [activeTab, setActiveTab] = useState("Portfolios");

    const [portfolio, setPortfolio] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [videos, setVideos] = useState([]);

    function YouTubeGetID(url) {
        url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        return url[2] !== undefined
            ? url[2].split(/[^0-9a-z_\\-]/i)[0]
            : url[0];
    }

    const handleSetStates = () => {
        if (vendorProject && vendorProject.albums) {
            // for portfolio
            let allPhotos = [];
            vendorProject.albums.forEach((album) => {
                allPhotos = allPhotos.concat(album.photos);
            });
            setPortfolio(allPhotos);

            // for albums
            setAlbums(vendorProject.albums);
        }

        // for videos
        if (vendorProject && vendorProject.videos) {
            setVideos(vendorProject.videos);
        }
    };

    useEffect(() => {
        handleSetStates();
    }, [vendorProject]);

    return (
        <div
            id="gallerySection"
            ref={window.screen.width > 768 ? galleryRef : null}
            className="scroll-mt-40 relatives w-full md:w-2/5 relative px-4 pt-4 h-[300px] md:max-h-full pb-[50px] border-2 rounded-[20px]"
        >
            <div className="flex mb-4 md:text-base text-xs">
                <button
                    className={`px-4 py-2 ${
                        activeTab === "Portfolios"
                            ? "text-pink-500 border-b-2 border-pink-500"
                            : ""
                    }`}
                    onClick={() => setActiveTab("Portfolios")}
                >
                    Portfolios ({portfolio.length})
                </button>
                <button
                    className={`px-4 py-2 ${
                        activeTab === "Albums"
                            ? "text-pink-500 border-b-2 border-pink-500"
                            : ""
                    }`}
                    onClick={() => setActiveTab("Albums")}
                >
                    Albums ({albums.length})
                </button>
                <button
                    className={`px-4 py-2 ${
                        activeTab === "Videos"
                            ? "text-pink-500 border-b-2 border-pink-500"
                            : ""
                    }`}
                    onClick={() => setActiveTab("Videos")}
                >
                    Videos ({videos.length})
                </button>
            </div>
            <div className="overflow-y-scroll h-[90%] md:h-[95%]  pb-5">
                {activeTab === "Portfolios" && (
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap gap-3 md:gap-5">
                            {portfolio.length === 0 ? (
                                <div className="text-center text-gray-500">
                                    No albums to display.
                                </div>
                            ) : (
                                portfolio?.map((item) => (
                                    <div
                                        key={item}
                                        className="relative h-[80px] w-[30%] md:h-[100px] md:w-[100px] overflow-hidden"
                                    >
                                        <img
                                            src={`${BASE_IMAGE_URL}/${item}`}
                                            alt="Portfolio image"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                )}
                {activeTab === "Albums" &&
                    (albums?.length === 0 ? (
                        <div className="text-center text-gray-500">
                            No albums to display.
                        </div>
                    ) : (
                        <div className="flex flex-col justify-between h-full gap-3">
                            <div className="flex flex-wrap justify-between">
                                {albums.map((album) => (
                                    <div
                                        key={album._id}
                                        className={`cursor-pointer relative overflow-hidden rounded-xl shadow-xl border`}
                                    >
                                        <div className="relative h-[100px] w-[120px] md:h-[120px] md:w-[150px] overflow-hidden">
                                            <img
                                                src={`${BASE_IMAGE_URL}/${album.photos[0]}`}
                                                alt="album cover"
                                                className="h-full w-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                                            <div className="absolute font-semibold bottom-0 left-0 p-2 text-white text-xs md:text-sm">
                                                {album.album_title}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                {activeTab === "Videos" &&
                    (videos.length === 0 ? (
                        <div className="text-center text-gray-500">
                            No videos to display.
                        </div>
                    ) : (
                        <div className="flex flex-wrap gap-3 md:gap-5 w-full">
                            {videos.map((item) => (
                                <div
                                    key={item}
                                    className={`relative overflow-hidden border flex-grow max-w-[150px] md:max-w-[150px] rounded-2xl`}
                                >
                                    <iframe
                                        className="aspect-video w-full"
                                        title="Youtube player"
                                        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
                                        src={`https://youtube.com/embed/${YouTubeGetID(
                                            item
                                        )}?autoplay=0`}
                                    ></iframe>
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
            <div className="absolute bottom-3 right-3 bg-white rounded-[10px]">
                <button className="px-3 py-1 md:text-base text-xs border w-fit self-end border-[#fd070782] rounded-xl font-semibold hover:bg-gray-200">
                    View All
                </button>
            </div>
        </div>
    );
};

export default Gallery;
