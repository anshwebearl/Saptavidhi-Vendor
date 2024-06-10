import { useEffect, useState } from "react";
import { FaMap, FaCalendarAlt } from "react-icons/fa";

const images = ["/realwedding.png", "/create_wedding.png", "/package_bg.jpg"];

const RealWeddingDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(autoplay);
    };
  }, [currentIndex]);

  return (
    <div className="max-w-[1200px] font-poppins px-3 md:px-10 mt-2 md:mt-5 mx-auto bg-[#f5f5f5] flex flex-col gap-5 md:gap-8">
      <div className="rounded-3xl border-[1.5px] border-[#7171716f]">
        <div className="relative h-[200px] w-full md:h-[500px] rounded-3xl">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-3xl duration-500"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 rounded-3xl"></div>
          <div className="absolute bottom-5 w-full flex justify-center">
            <div className="flex gap-2 w-[60px] md:w-[100px]">
              <div
                className={`flex-grow ${
                  currentIndex === 0
                    ? "bg-white flex-grow-[2]"
                    : "bg-[#d0d0d0bb]"
                } p-[3px] md:p-[4px] rounded-3xl cursor-pointer`}
                onClick={() => setCurrentIndex(0)}
              ></div>
              <div
                className={`flex-grow ${
                  currentIndex === 1
                    ? "bg-white flex-grow-[2]"
                    : "bg-[#d0d0d0bb]"
                } p-[3px] md:p-[4px] rounded-3xl cursor-pointer`}
                onClick={() => setCurrentIndex(1)}
              ></div>
              <div
                className={`flex-grow ${
                  currentIndex === 2
                    ? "bg-white flex-grow-[2]"
                    : "bg-[#d0d0d0bb]"
                } p-[3px] md:p-[4px] rounded-3xl cursor-pointer`}
                onClick={() => setCurrentIndex(2)}
              ></div>
            </div>
          </div>
        </div>
        <div className="md:p-6 p-4 flex flex-col gap-3 md:gap-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <div className="flex gap-2 w-fit items-center">
                <p className="font-[500] text-xl md:text-3xl">Niyati</p>
                <img src="/ring.png" className="w-fit h-6 md:h-8" alt="" />
                <p className="font-[500] text-xl md:text-3xl">Kunj</p>
              </div>
              <div className="text-sm md:text-lg text-[#00000099]">
                <p>
                  &apos;Minimal Yet Magical&apos; Ahmedabad Wedding With
                  Thematic Decor & Details...{" "}
                  <span className="text-black font-[500]">Read More</span>
                </p>
              </div>
            </div>
            <div className="w-fit bg-gradient-to-r text-center from-[#0C07FD80] to-[#5C034080] text-white text-sm py-2 px-2 md:p-3 cursor-pointer md:text-lg font-[500] rounded-2xl">
              View Tagged Vendors(9)
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-2 border-[1px] border-[#00000033] w-fit p-2 md:p-2 rounded-2xl items-center font-[400] text-xs md:text-lg">
              <FaMap />
              <p>Ahmedabad, Gujarat</p>
            </div>
            <div className="flex gap-2 border-[1px] border-[#00000033] w-fit p-2 md:p-2 rounded-2xl items-center font-[400] text-xs md:text-lg">
              <FaCalendarAlt />
              <p>30 Jan, 2024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-3xl border-[1.5px] border-[#7171716f] p-5 md:p-6">
        <div className="flex gap-2 w-full justify-between">
          <div className="flex gap-4 justify-around md:justify-start md:gap-12 md:items-center font-[500]">
            <div className="text-[#CF166F] border-b-[#CF166F]  md:text-xl text-base md:pb-4 border-b-2">
              Top Photos
            </div>
            <div className="md:text-xl text-base text-[#818181] md:pb-5">
              All Functions
            </div>
          </div>
          <div className="w-fit pl-2">
            <p className="text-sm md:text-lg cursor-pointer focus:border-[#707070] focus:border-b-2 hover:text-[#707070] border-b-2  border-black">
              View all
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 md:gap-10 mt-3 md:mt-5">
          <TopPhotosCard />
          <TopPhotosCard />
          <TopPhotosCard />
          <TopPhotosCard />
          <TopPhotosCard />
          <TopPhotosCard />
          <TopPhotosCard />
          <TopPhotosCard />
          <TopPhotosCard />
          <TopPhotosCard />
          <TopPhotosCard />
          <TopPhotosCard />
        </div>
      </div>
      <div className="rounded-3xl border-[1.5px] border-[#7171716f] p-5 md:p-6">
        <div className="flex gap-2 w-full justify-between">
          <div className="flex gap-6 justify-around md:justify-start md:gap-12 md:items-center font-[500]">
            <div className="md:text-2xl text-lg text-black md:pb-5">
              All Functions
            </div>
          </div>
          <div className="w-fit pl-2">
            <p className="text-sm md:text-lg cursor-pointer focus:border-[#707070] focus:border-b-2 hover:text-[#707070] border-b-2  border-black">
              View all
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 md:gap-10 mt-3 md:mt-5">
          <TaggedVendorsCard />
          <TaggedVendorsCard />
          <TaggedVendorsCard />
          <TaggedVendorsCard />
          <TaggedVendorsCard />
          <TaggedVendorsCard />
        </div>
      </div>
      <div className="rounded-3xl p-3 md:p-6">
        <div className="flex gap-2 w-full justify-between">
          <div className="flex gap-6 justify-around md:justify-start md:gap-12 md:items-center font-[500]">
            <div className="md:text-2xl text-lg text-black md:pb-5">
              Tagged Vendors
            </div>
          </div>
          <div className="w-fit pl-2">
            <p className="rounded-2xl cursor-pointer bg-gradient-to-r flex justify-center text-[#7e7e7e] font-[500] text-sm md:text-lg from-[#FD070780] to-[#5C034080] p-[1px]">
              <span className="flex w-full rounded-2xl bg-white px-2 py-1 md:px-3 md:py-1">
                View all
              </span>
            </p>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap justify-around mt-4">
          <SimilarWeddingsCard/>
          <SimilarWeddingsCard/>
          <SimilarWeddingsCard/>
          <SimilarWeddingsCard/>
          <SimilarWeddingsCard/>
          <SimilarWeddingsCard/>
        </div>
      </div>
    </div>
  );
};

export default RealWeddingDetails;

const TopPhotosCard = () => {
  return (
    <div className="overflow-hidden h-[120px] w-[120px] md:h-[150px] md:w-[150px] rounded-2xl shadow-lg flex flex-grow">
      <img
        src="/real_wedding_top.jpg"
        className="h-full w-full object-cover"
        alt="Customer Review"
      />
    </div>
  );
};

const TaggedVendorsCard = () => {
  return (
    <div className="flex gap-5 flex-grow">
      <img
        src="/tagged_vendor.png"
        className="w-16 h-16 md:h-24 md:w-24"
        alt=""
      />
      <div className="flex flex-col justify-between">
        <p className="font-[500] text-base md:text-lg">Elysiaan By Fuhaar</p>
        <p className="font-[400] text-sm md:text-base text-[#00000099]">
          Wedding Planners
        </p>
        <p className="font-[400] text-sm md:text-base text-[#CF166F] underline">
          Read Review
        </p>
      </div>
    </div>
  );
};

const SimilarWeddingsCard = () => {
    return(
        <div className="w-fit">
            <div className="flex gap-2 md:gap-3">
              <div className="relative h-[150px] w-[120px] lg:h-[180px] lg:w-[150px]">
                <div className="absolute inset-0 bg-cover bg-center rounded-3xl bg-[url('/similar_wedding.png')]"></div>
              </div>
              <div className="flex flex-col gap-2 md:gap-3">
                <div className="relative h-[70px] w-[120px] lg:h-[85px] lg:w-[150px]">
                  <div className="absolute inset-0 bg-cover bg-center rounded-3xl bg-[url('/similar_wedding2.png')]"></div>
                </div>
                <div className="relative h-[70px] w-[120px] lg:h-[85px] lg:w-[150px]">
                  <div className="absolute inset-0 bg-cover bg-center rounded-3xl bg-[url('/similar_wedding3.png')]"></div>
                  <div className="absolute w-full h-full bg-[#0000006b] rounded-3xl"></div>
                  <div className="absolute w-full h-full flex flex-col font-[700] text-white text-xs md:text-sm justify-center items-center">
                    <p>+</p>
                    <p>33 Photos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center p-1 md:p-3">
                <p className="font-[500] text-sm md:text-lg">Aashima & Parth</p>
                <div className="flex gap-2 items-center">
                    <FaMap size={10}/>
                    <p className="md:text-base text-xs">Ahmedabad, India</p>
                </div>
            </div>
          </div>
    )
};
