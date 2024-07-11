import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Packages({ membership_category, price, features, id }) {
    const navigate = useNavigate();

    return (
        <div className="bg-white border border-pink-400 rounded-lg p-4 md:p-6 flex flex-col items-center gap-5 w-60 flex-grow">
            <div className="bg-[#FF6B85] rounded-t-lg py-3 md:py-4 px-20 flex justify-center items-center gap-2.5">
                <span className="text-white font-medium text-lg  md:text-2xl">
                    {membership_category}
                </span>
            </div>
            <div className="flex flex-col items-center gap-2.5">
                <span className="text-[#FF6B85] text-medium text-center">
                    ₹ {price} / Yearly +18% taxes extra
                </span>
                <div
                    className="bg-[#FF6B85] rounded-full py-1.25 px-5 flex items-center gap-4 hover:bg-[#ff5372] cursor-pointer"
                    onClick={() =>
                        navigate(`${id}`, {
                            state: {
                                id: id,
                            },
                        })
                    }
                >
                    <span className="text-white font-medium text-medium">
                        Select
                    </span>
                </div>
            </div>
            {features.map((el) => (
                <div key={el._id}>
                    <hr className="border-black/20 w-full" />
                    <div className="text-gray-500 text-sm md:text-base text-center">
                        {el.name}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Packages;
