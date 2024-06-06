import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import cardImage from "../../assets/images/cardimage.png";

export const BridalLehenga = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="py-5 px-10 font-poppins flex flex-col gap-5 mx-auto bg-[#f5f5f5] overflow-hidden">
      <div>
        <div className="p-5">
          <p className="font-[500] text-2xl md:text-3xl">Bridal Lehenga</p>
          <p className="font-[400] text-lg md:text-xl text-[#525252]">
            Showing <span className="font-[600]">23,126</span> results as per
            your search criteria
          </p>
        </div>
        <div className="w-full lg:px-2 flex">
          <div className="bg-gradient-to-r from-[#FD070780] to-[#5C034080] p-3 rounded-3xl mx-3 lg:px-2 lg:mx-2 w-fit lg:w-full">
            <div className="lg:hidden flex justify-between items-center">
              <button onClick={toggleMenu} className="text-white flex gap-2">
                {isOpen ? (
                  <>
                    <span className="font-[500]">Filter</span>
                    <FaCaretUp className="w-6 h-6" />
                  </>
                ) : (
                  <>
                    <span className="font-[500]">Filter</span>
                    <FaCaretDown className="w-6 h-6" />
                  </>
                )}
              </button>
            </div>
            <div
              className={`lg:flex flex-row flex-wrap gap-3 lg:justify-around ${
                isOpen ? "flex" : "hidden"
              } lg:block`}
            >
              <div className="mt-3 lg:mt-0">
                <select
                  name="type"
                  className="text-sm py-1 px-3 md:text-base md:py-2 md:px-5 rounded-xl text-[#797979]"
                >
                  <option value="" disabled selected>
                    Type
                  </option>
                  <option value="option 1">Type 1</option>
                  <option value="option 2">Type 2</option>
                  <option value="option 3">Type 3</option>
                </select>
              </div>
              <div className="mt-3 lg:mt-0">
                <select
                  name="Occasion"
                  className="text-sm py-1 px-3 md:text-base md:py-2 md:px-5 rounded-xl text-[#797979]"
                >
                  <option value="" disabled selected>
                    Occasion
                  </option>
                  <option value="option 1">Occasion 1</option>
                  <option value="option 2">Occasion 2</option>
                  <option value="option 3">Occasion 3</option>
                </select>
              </div>
              <div className="mt-3 lg:mt-0">
                <select
                  name="Price"
                  className="text-sm py-1 px-3 md:text-base md:py-2 md:px-5 rounded-xl text-[#797979]"
                >
                  <option value="" disabled selected>
                    Price
                  </option>
                  <option value="option 1">Price 1</option>
                  <option value="option 2">Price 2</option>
                  <option value="option 3">Price 3</option>
                </select>
              </div>
              <div className="mt-3 lg:mt-0">
                <select
                  name="city"
                  className="text-sm py-1 px-3 md:text-base md:py-2 md:px-5 rounded-xl text-[#797979]"
                >
                  <option value="" disabled selected>
                    City
                  </option>
                  <option value="option 1">City 1</option>
                  <option value="option 2">City 2</option>
                  <option value="option 3">City 3</option>
                </select>
              </div>
              <div className="mt-3 lg:mt-0">
                <select
                  name="brand"
                  className="text-sm py-1 px-3 md:text-base md:py-2 md:px-5 rounded-xl text-[#797979]"
                >
                  <option value="" disabled selected>
                    Brand
                  </option>
                  <option value="option 1">Brand 1</option>
                  <option value="option 2">Brand 2</option>
                  <option value="option 3">Brand 3</option>
                </select>
              </div>
              <div className="mt-3 lg:mt-0">
                <select
                  name="colors"
                  className="text-sm py-1 px-3 md:text-base md:py-2 md:px-5 rounded-xl text-[#797979]"
                >
                  <option value="" disabled selected>
                    Colors
                  </option>
                  <option value="option 1">Colors 1</option>
                  <option value="option 2">Colors 2</option>
                  <option value="option 3">Colors 3</option>
                </select>
              </div>
              <div className="mt-3 lg:mt-0">
                <select
                  name="fabric"
                  className="text-sm py-1 px-3 md:text-base md:py-2 md:px-5 rounded-xl text-[#797979]"
                >
                  <option value="" disabled selected>
                    Fabric
                  </option>
                  <option value="option 1">Fabric 1</option>
                  <option value="option 2">Fabric 2</option>
                  <option value="option 3">Fabric 3</option>
                </select>
              </div>
              <div className="mt-3 lg:mt-0">
                <select
                  name="style"
                  className="text-sm py-1 px-3 md:text-base md:py-2 md:px-5 rounded-xl text-[#797979]"
                >
                  <option value="" disabled selected>
                    Style
                  </option>
                  <option value="option 1">Style 1</option>
                  <option value="option 2">Style 2</option>
                  <option value="option 3">Style 3</option>
                </select>
              </div>
              <div className="mt-3 lg:mt-0">
                <select
                  name="brand_type"
                  className="text-sm py-1 px-3 md:text-base md:py-2 md:px-5 rounded-xl text-[#797979]"
                >
                  <option value="" disabled selected>
                    Brand Type
                  </option>
                  <option value="option 1">Brand Type 1</option>
                  <option value="option 2">Brand Type 2</option>
                  <option value="option 3">Brand Type 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="px-4 lg:py-2 justify-center lg:px-10 flex flex-wrap gap-5 w-fit lg:gap-10">
          <Card
            src={cardImage}
            price="38,000"
            name="Bhasin Brothers"
            type="Zarodhi Lehenga"
            location="Lucknow"
          />
          <Card
            src="/cardimage.png"
            price="38,000"
            name="Bhasin Brothers"
            type="Zarodhi Lehenga"
            location="Lucknow"
          />
          <Card
            src="/cardimage.png"
            price="38,000"
            name="Bhasin Brothers"
            type="Zarodhi Lehenga"
            location="Lucknow"
          />
          <Card
            src="/cardimage.png"
            price="38,000"
            name="Bhasin Brothers"
            type="Zarodhi Lehenga"
            location="Lucknow"
          />
          <Card
            src="/cardimage.png"
            price="38,000"
            name="Bhasin Brothers"
            type="Zarodhi Lehenga"
            location="Lucknow"
          />
          <Card
            src="/cardimage.png"
            price="38,000"
            name="Bhasin Brothers"
            type="Zarodhi Lehenga"
            location="Lucknow"
          />
          <Card
            src="/cardimage.png"
            price="38,000"
            name="Bhasin Brothers"
            type="Zarodhi Lehenga"
            location="Lucknow"
          />
          <Card
            src="/cardimage.png"
            price="38,000"
            name="Bhasin Brothers"
            type="Zarodhi Lehenga"
            location="Lucknow"
          />
          <Card
            src="/cardimage.png"
            price="38,000"
            name="Bhasin Brothers"
            type="Zarodhi Lehenga"
            location="Lucknow"
          />
          <Card
            src="/cardimage.png"
            price="38,000"
            name="Bhasin Brothers"
            type="Zarodhi Lehenga"
            location="Lucknow"
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ src, name, type, location, price }) => {
  return (
    <div className="font-poppins flex-grow relative shadow-md flex-shrink-0 min-w-[150px] max-w-[150px] h-[300px] md:min-w-[220px] md:max-w-[220px] md:h-[380px] overflow-hidden rounded-3xl">
      <div
        className="absolute inset-0 bg-cover bg-center bottom-1/4"
        style={{ backgroundImage: `url(${src})` }}
      ></div>
      <div className="absolute bg-white w-full bottom-0 h-fit p-3 flex flex-col gap-1 md:gap-2 text-wrap">
        <p className="font-[400] text-xs md:text-sm">{type}</p>
        <p className="font-[600] text-sm md:text-xl leading-none">{name}</p>
        <p className="font-[500] text-[#626262] text-xs md:text-sm">
          {location}
        </p>
        <p className="text-right font-[500] text-base md:text-lg text-[#CF166F]">
          ₹{price}
        </p>
      </div>
    </div>
  );
};

export default BridalLehenga;
