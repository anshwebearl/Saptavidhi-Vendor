import {
    Navigate,
    Route,
    Routes,
    useLocation,
    useNavigate,
} from "react-router-dom";

import VendorProjectVideos from "./VendorProjectVideos";
import VendorProjectPhotos from "./VendorProjectPhotos";
import VendorProjectAlbums from "./VendorProjectAlbums";
import VendorProjectViewAlbum from "./VendorProjectViewAlbum";

const VendorProjects = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className="relative flex flex-col gap-2 w-full border-[#00000033] border-[1px] p-5 md:px-5 md:py-8 rounded-3xl">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-md md:text-2xl font-semibold">Projects</h2>
            </div>
            <div>
                <div className="flex [&>*]:border-[1px] [&>*]:border-[#ff7291] [&>*]:px-4 md:[&>*]:px-8 [&>*]:py-1 text-xs md:text-base [&>*]:font-semibold [&>*]:bg-gray-100">
                    <p
                        onClick={() => navigate("photos")}
                        className={`rounded-s-full cursor-pointer ${
                            location.pathname.split("/")[3] === "photos" &&
                            "bg-gradient-to-r from-[#FD070780] to-[#5C034080] text-white"
                        }`}
                    >
                        Photos
                    </p>
                    <p
                        onClick={() => navigate("albums")}
                        className={`cursor-pointer ${
                            location.pathname.split("/")[3] === "albums" &&
                            "bg-gradient-to-r from-[#FD070780] to-[#5C034080] text-white"
                        }`}
                    >
                        Albums
                    </p>
                    <p
                        onClick={() => navigate("videos")}
                        className={`rounded-e-full  cursor-pointer ${
                            location.pathname.split("/")[3] === "videos" &&
                            "bg-gradient-to-r from-[#FD070780] to-[#5C034080] text-white"
                        }`}
                    >
                        Videos
                    </p>
                </div>
            </div>
            <hr className="mb-4" />
            <Routes>
                <Route path="photos" element={<VendorProjectPhotos />} />
                <Route path="albums" element={<VendorProjectAlbums />} />
                <Route path="videos" element={<VendorProjectVideos />} />
                <Route path="albums/:id" element={<VendorProjectViewAlbum />} />
                <Route path="/" element={<Navigate to="photos" />} />
            </Routes>
        </div>
    );
};

export default VendorProjects;
