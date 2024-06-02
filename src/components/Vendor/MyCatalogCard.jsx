/* eslint-disable react/prop-types */
import locationicon from "../../assets/images/location.png";
import vegIcon from "../../assets/images/vegicon.png";
import nonVegIcon from "../../assets/images/nonvegicon.png";
import eye from "../../assets/images/eye.png";
import pen from "../../assets/images/pen.png";

const MyCatalogCard = ({
  src,
  title,
  subtitle,
  location,
  detailsArray,
  priceVeg,
  priceNonVeg,
}) => {
  return (
    <div className="bg-white rounded-3xl border-[#00000033] flex gap-2 md:gap-4 border-[1px] md:max-w-[400px] md:flex-grow overflow-hidden">
      <img
        className="object-cover w-[90px] md:w-[150px] h-full"
        src={src}
        alt="Venue"
      />
      <div className="pr-4 md:pr-5 w-full py-2 md:py-3 flex flex-col gap-2">
        <div className="flex">
          <div>
            <h2 className="text-sm md:text-lg font-semibold flex-grow">
              {title}
            </h2>
            <p className="text-gray-600 text-[10px] md:text-xs">{subtitle}</p>
          </div>
          <div className="flex gap-1">
            <img src={eye} alt="red" className="w-5 h-5 md:w-8 md:h-8" />
            <img src={pen} alt="red" className="w-5 h-5 md:w-8 md:h-8" />
          </div>
        </div>

        <p className="text-gray-600 flex items-center text-[10px] md:text-sm">
          <img src={locationicon} className="text-gray-600 mr-1 h-3 md:h-4" />{" "}
          {location}
        </p>
        <div className="border-b-[1px] border-gray-400" />
        <div className="flex justify-start items-center flex-wrap gap-1">
          <span className="border-[1px] border-gray-400 rounded text-gray-700 text-[8px] md:text-[10px] px-[4px] md:px-[6px] py-[2px] md:py-[3px]">
            100-2000 Pax
          </span>
          <span className="border-[1px] border-gray-400 rounded text-gray-700 text-[8px] md:text-[10px] px-[4px] md:px-[6px] py-[2px] md:py-[3px]">
            152 Rooms
          </span>
          <span className="border-[1px] border-gray-400 rounded text-gray-700 text-[8px] md:text-[10px] px-[4px] md:px-[6px] py-[2px] md:py-[3px] ">
            152 Rooms
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-1 items-center">
            <img src={nonVegIcon} alt="red" className="w-3 h-3 md:w-4 md:h-4" />
            <span className="text-black-500 font-semibold text-[12px] md:text-lg">
              ₹2,000
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <img src={vegIcon} alt="green" className="w-3 h-3 md:w-42md:h-4" />
            <span className="text-black-500 font-semibold text-[12px] md:text-lg">
              ₹2,000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCatalogCard;
