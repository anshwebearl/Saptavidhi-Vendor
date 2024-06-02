import { FaCalendar, FaStar } from "react-icons/fa6";

export const Package = () => {
  return (
    <div className="max-w-[1200px] font-poppins flex flex-col gap-5 mx-auto bg-[#f5f5f5]">
      {/* top photo */}
      <div className="relative h-[350px] w-full md:h-[500px]">
        <div className="absolute inset-0 bg-[url('/package_bg.jpg')] bg-cover bg-center "></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/85"></div>
        <div className="absolute w-full h-full flex flex-col justify-end items-center gap-5 md:gap-10 py-6 md:p-12">
          <p className="text-white font-[600] leading-snug md:leading-snug text-3xl md:text-4xl text-center md:max-w-[700px]">
            Wedsta: Family Makeup service by WedMeGood
          </p>
          <div className="flex gap-7 md:gap-14 w-full justify-center px-2">
            <div className="flex items-center gap-2 md:gap-4 font-[400] text-white">
              <img
                src="/trained_artists.png"
                className="h-7 md:h-fit md:w-fit"
                alt=""
              />
              <div>
                <p className="font-[400] text-sm md:text-xl">Trained</p>
                <p className="font-[400] text-sm md:text-xl">Artists</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-4 font-[400] text-2xl text-white">
              <img
                src="/premium_prod.png"
                className="h-6 md:h-fit md:w-fit"
                alt=""
              />
              <div>
                <p className="font-[400] text-sm md:text-xl">Premium</p>
                <p className="font-[400] text-sm md:text-xl">Products</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-4 font-[400] text-2xl text-white">
              <img src="/home.png" className="h-7 md:h-fit md:w-fit" alt="" />
              <div>
                <p className="font-[400] text-sm md:text-xl">At Home</p>
                <p className="font-[400] text-sm md:text-xl">Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* select package */}
      <div className="p-6 md:px-16">
        <p className="font-[500] text-2xl md:text-3xl">Select Package</p>
        <p className="font-[400] text-base md:text-lg text-[#525252]">
          Discount available for bookings of 2 and more. No coupon required.
        </p>
        <div className="py-5 sm:py-10 flex flex-col sm:flex-wrap gap-10 sm:gap-15 items-center sm:flex-row sm:justify-around">
          <div className="max-w-[400px] min-w-[250px] relative flex flex-col gap-5 md:gap-8 border-[1px] border-[#FF6B85] bg-white py-8 px-6 md:py-10 md:px-5 rounded-3xl">
            <p className="font-[400] text-center md:text-base text-sm px-5 py-2 md:px-8 md:py-2 rounded-xl bg-[#FF6B851A]">
              Recommeded For friends of bride
            </p>
            <div className="text-center">
              <p className="md:text-3xl text-2xl font-[600] text-[#FF6B85]">
                <span className="font-[400] text-xl md:text-2xl text-[#ff607da9]">
                  ₹
                </span>
                4,500
              </p>
              <p className="font-[400] text-lg md:text-xl text-[#747474]">
                /person
              </p>
            </div>
            <div className="flex flex-col md:gap-2 text-[#565353]">
              <p className="font-[500] text-base md:text-lg">Services :</p>
              <div className="flex gap-2 items-center">
                <img
                  src="/tick_package.png"
                  className="h-4 w-4 md:w-5 md:h-5"
                  alt=""
                />
                <p className="font-[400] text-base md:text-lg">Makeup</p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="/tick_package.png"
                  className="h-4 w-4 md:w-5 md:h-5"
                  alt=""
                />
                <p className="font-[400] text-base md:text-lg">
                  Hair(Straightening/Curls/Blow...
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="/cross_package.png"
                  className="h-2 w-2 md:w-3 md:h-3"
                  alt=""
                />
                <p className="font-[400] text-base md:text-lg text-[#56535392]">
                  Draping
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="/cross_package.png"
                  className="md:w-3 md:h-3"
                  alt=""
                />
                <p className="font-[400] text-base md:text-lg text-[#56535392]">
                  Lashes
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="/cross_package.png"
                  className="md:w-3 md:h-3"
                  alt=""
                />
                <p className="font-[400] text-base md:text-lg text-[#56535392]">
                  Nail Polish
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-[#565353]">
              <p className="font-[500] text-base md:text-lg">
                Artist Experience :
              </p>
              <p className="md:text-lg text-base text-black">2 Yrs+</p>
            </div>
            <div className="flex flex-col gap-1 text-[#565353]">
              <p className="font-[500] text-base md:text-lg">Products :</p>
              <p className="md:text-lg text-base text-black">
                Mac, Kryolan and similar brands
              </p>
            </div>
            {/* TODO: gallery */}
            <div className="bg-[#FF6B85] py-2 px-3 md:py-3 md:px-5 w-fit rounded-full text-white font-[600] text-base md:text-xl absolute left-1/2 transform -translate-x-1/2 -bottom-5 md:-bottom-7">
              Add to Cart
            </div>
          </div>
          <div className="max-w-[400px] min-w-[250px] relative flex flex-col gap-5 md:gap-8 border-[1px] bg-[#EEE1FF] py-8 px-6 md:py-10 md:px-5 rounded-3xl">
            <p className="font-[400] text-center md:text-base text-sm px-5 py-2 md:px-8 md:py-2 rounded-xl bg-[#6A39A51A]">
              Recommeded For friends of bride
            </p>
            <div className="text-center">
              <p className="md:text-3xl text-2xl font-[600] text-[#6a39a5]">
                <span className="font-[400] text-xl md:text-2xl text-[#6a39a58e]">
                  ₹
                </span>
                4,500
              </p>
              <p className="font-[400] text-lg md:text-xl text-[#747474]">
                /person
              </p>
            </div>
            <div className="flex flex-col md:gap-2 text-[#565353]">
              <p className="font-[500] text-base md:text-lg">Services :</p>
              <div className="flex gap-2 items-center">
                <img
                  src="/tick_package.png"
                  className="h-4 w-4 md:w-5 md:h-5"
                  alt=""
                />
                <p className="font-[400] text-base md:text-lg">Makeup</p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="/tick_package.png"
                  className="h-4 w-4 md:w-5 md:h-5"
                  alt=""
                />
                <p className="font-[400] text-base md:text-lg">
                  Hair(Straightening/Curls/Blow...
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="/cross_package.png"
                  className="h-2 w-2 md:w-3 md:h-3"
                  alt=""
                />
                <p className="font-[400] text-base md:text-lg text-[#56535392]">
                  Draping
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="/cross_package.png"
                  className="md:w-3 md:h-3"
                  alt=""
                />
                <p className="font-[400] text-base md:text-lg text-[#56535392]">
                  Lashes
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="/cross_package.png"
                  className="md:w-3 md:h-3"
                  alt=""
                />
                <p className="font-[400] text-base md:text-lg text-[#56535392]">
                  Nail Polish
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-[#565353]">
              <p className="font-[500] text-base md:text-lg">
                Artist Experience :
              </p>
              <p className="md:text-lg text-base text-black">2 Yrs+</p>
            </div>
            <div className="flex flex-col gap-1 text-[#565353]">
              <p className="font-[500] text-base md:text-lg">Products :</p>
              <p className="md:text-lg text-base text-black">
                Mac, Kryolan and similar brands
              </p>
            </div>
            {/* TODO: gallery */}
            <div className="bg-[#6a39a5] py-2 px-3 md:py-3 md:px-5 w-fit rounded-full text-white font-[600] text-base md:text-xl absolute left-1/2 transform -translate-x-1/2 -bottom-5 md:-bottom-7">
              Add to Cart
            </div>
          </div>
          <div className="max-w-[400px] min-w-[250px] relative flex flex-col gap-5 md:gap-8 border-[1px] border-[#FF6B85] bg-white py-8 px-6 md:py-10 md:px-5 rounded-3xl">
            <p className="font-[400] text-center md:text-base text-sm px-5 py-2 md:px-8 md:py-2 rounded-xl bg-[#FF6B851A]">
              Recommeded For friends of bride
            </p>
            <div className="text-center">
              <p className="md:text-3xl text-2xl font-[600] text-[#FF6B85]">
                <span className="font-[400] text-xl md:text-2xl text-[#ff607da9]">
                  ₹
                </span>
                4,500
              </p>
              <p className="font-[400] text-lg md:text-xl text-[#747474]">
                /person
              </p>
            </div>
            <div className="flex flex-col md:gap-2 text-[#565353]">
              <p className="font-[500] text-base md:text-lg">Services :</p>
              <div className="flex gap-2 items-center">
                <img
                  src="/tick_package.png"
                  className="h-4 w-4 md:w-5 md:h-5"
                  alt=""
                />
                <p className="font-[400] text-base md:text-lg">Makeup</p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="/tick_package.png"
                  className="h-4 w-4 md:w-5 md:h-5"
                  alt=""
                />
                <p className="font-[400] text-base md:text-lg">
                  Hair(Straightening/Curls/Blow...
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="/cross_package.png"
                  className="h-2 w-2 md:w-3 md:h-3"
                  alt=""
                />
                <p className="font-[400] text-base md:text-lg text-[#56535392]">
                  Draping
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="/cross_package.png"
                  className="md:w-3 md:h-3"
                  alt=""
                />
                <p className="font-[400] text-base md:text-lg text-[#56535392]">
                  Lashes
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="/cross_package.png"
                  className="md:w-3 md:h-3"
                  alt=""
                />
                <p className="font-[400] text-base md:text-lg text-[#56535392]">
                  Nail Polish
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-[#565353]">
              <p className="font-[500] text-base md:text-lg">
                Artist Experience :
              </p>
              <p className="md:text-lg text-base text-black">2 Yrs+</p>
            </div>
            <div className="flex flex-col gap-1 text-[#565353]">
              <p className="font-[500] text-base md:text-lg">Products :</p>
              <p className="md:text-lg text-base text-black">
                Mac, Kryolan and similar brands
              </p>
            </div>
            {/* TODO: gallery */}
            <div className="bg-[#FF6B85] py-2 px-3 md:py-3 md:px-5 w-fit rounded-full text-white font-[600] text-base md:text-xl absolute left-1/2 transform -translate-x-1/2 -bottom-5 md:-bottom-7">
              Add to Cart
            </div>
          </div>
        </div>
      </div>

      {/* latest work */}
      <div className="p-6 md:px-16 bg-[#DC05FF0D] flex flex-col gap-5 md:gap-10 w-full">
        <p className="font-[500] text-2xl md:text-3xl">Our Latest Work</p>
        <div className="flex gap-6 justify-around md:justify-start md:gap-12 md:items-center">
          <div className="text-[#DC05FF] text-base md:text-xl md:pb-5 border-b-[#DC05FF] border-b-2 ">
            All Albums (124)
          </div>
          <div className="md:text-xl text-sm text-[#818181] md:pb-5">
            Silver (70)
          </div>
          <div className="md:text-xl text-sm text-[#818181] md:pb-5">
            Gold (12)
          </div>
          <div className="md:text-xl text-sm text-[#818181] md:pb-5">
            Diamond (24)
          </div>
        </div>
        <div className=" w-full grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-flow-row md:grid-cols-4 gap-y-5 place-items-center">
          <PackageLatestWorkCard />
          <PackageLatestWorkCard />
          <PackageLatestWorkCard />
          <PackageLatestWorkCard />
          <PackageLatestWorkCard />
          <PackageLatestWorkCard />
          <PackageLatestWorkCard />
          <PackageLatestWorkCard />
        </div>
        <div className="flex w-full justify-center">
          <p className="bg-gradient-to-r from-[#FD070780] to-[#5C034080] px-6 py-2 lg:px-11 lg:py-5 rounded-full text-white text-base lg:text-xl">
            View All
          </p>
        </div>
      </div>

      {/* customer reviews */}
      <div className="p-6 md:px-16 flex flex-col gap-5 md:gap-10 w-full">
        <div>
          <p className="font-[500] text-2xl md:text-3xl">
            Let them speak for us!
          </p>
          <p className="font-[400] text-base md:text-xl text-[#525252]">
            Some impressions from our customers
          </p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row w-full justify-between">
          <div className="flex gap-6 justify-around md:justify-start md:gap-12 md:items-center">
            <div className="text-base md:text-xl md:pb-5 ">All Albums</div>
            <div className="text-[#DC05FF] border-b-[#DC05FF]  md:text-xl text-sm md:pb-4 border-b-2">
              Silver
            </div>
            <div className="md:text-xl text-sm text-[#818181] md:pb-5">
              Gold
            </div>
            <div className="md:text-xl text-sm text-[#818181] md:pb-5">
              Diamond
            </div>
          </div>
          <div className="w-fit pl-2">
            <p className="text-sm md:text-xl cursor-pointer focus:border-[#707070] focus:border-b-2 hover:text-[#707070] border-b-2  border-black">
              View all
            </p>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 grid-flow-row">
          <CustomerReviewCard />
          <CustomerReviewCard />
          <CustomerReviewCard />
          <CustomerReviewCard />
        </div>
      </div>
    </div>
  );
};

const PackageLatestWorkCard = () => {
  return (
    <div className="font-poppins relative shadow-md flex-shrink-0 w-[150px] h-[200px] lg:w-[220px] lg:h-[280px] overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-[url('/package_gallery.png')] bg-cover bg-center bottom-1/4 rounded-3xl"></div>
      <div className="absolute bg-white w-full bottom-0 h-fit p-3 flex flex-col gap-1 md:gap-2 text-wrap">
        <p className="font-[500] text-sm lg:text-lg leading-none ">
          Lucknow ChicSplash
        </p>
        <p className="font-[400] text-xs lg:text-sm">
          Silver Package | Shot in Lucknow
        </p>
        <p className="flex items-center gap-2 font-[500] text-[#626262] text-xs lg:text-sm">
          <FaCalendar />
          <p>8 March 2024</p>
        </p>
      </div>
    </div>
  );
};

const CustomerReviewCard = () => {
  return (
    <div className="bg-white rounded-3xl max-h-[150px] flex md:h-[150px] md:w-full overflow-hidden border-[1.5px] border-[#7171716f]">
      <img
        src="/customer_review.jpg"
        className="h-full w-[100px] md:w-[200px] object-cover"
        alt="Customer Review"
      />
      <div className="px-3 py-3 md:px-5 md:py-6 w-full flex flex-col gap-2 overflow-scroll lg:overflow-hidden">
        <div className="flex justify-between w-full">
          <p className="text-[#00000099] font-[700] text-base md:text-xl lg:text-xl">
            Deepak Keshri
          </p>
          <div className="flex gap-1 items-center font-[500] text-sm md:text-base">
            <FaStar />
            4.9
          </div>
        </div>
        <div className="flex justify-between w-full">
          <p className="text-[#00000099] font-[500] text-[9px] md:text-sm lg:sm">
            Reviewed Wedsta Diamond Package
          </p>
          <div className="text-[#00000099] flex gap-1 items-center font-[500] text-[9px] md:text-sm">
            May 8, 2020
          </div>
        </div>
        <div className="w-full">
          <p className="text-[#00000099] font-[400] text-xs md:text-[12px]">
            It was a great experience guys ..everyone praised your work..your
            planning skills and good coordination was the only reason behind
            this successful event in Marriot ..a big thanks from keshri family
            😊
          </p>
        </div>
      </div>
    </div>
  );
};
