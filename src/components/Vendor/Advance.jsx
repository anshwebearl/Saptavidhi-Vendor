import React from 'react';

const Pro = () => {
  return (
    <div className="bg-white border border-pink-400 rounded-lg p-4 md:p-6 flex flex-col items-center gap-5 w-60 flex-grow">
      <div className="bg-[#6A39A5] rounded-t-lg py-3 md:py-4 px-16 flex justify-center items-center gap-2.5">
        <span className="text-white font-medium text-lg  md:text-2xl">Advance</span>
      </div>
      <div className="flex flex-col items-center gap-2.5">
        <span className="text-[#6A39A5] text-medium text-center">₹ 97000 / Yearly +18% taxes extra</span>
        <div className="bg-[#6A39A5] rounded-full py-1.25 px-5 flex items-center gap-4">
          <span className="text-white font-medium text-medium">Select</span>
        </div>
      </div>
      <hr className="border-black/20 w-full" />
      <div className="text-gray-500 text-sm md:text-base text-center">Estimated leads yearly 113-188</div>
      <hr className="border-black/20 w-full" />
      <div className="text-gray-500 text-sm md:text-base text-center">Get more visibility than free plan</div>
      <hr className="border-black/20 w-full" />
      <div className="text-gray-500 text-sm md:text-base text-center">No profile Management support</div>
      <hr className="border-black/20 w-full" />
      <div className="text-gray-500 text-sm md:text-base text-center">Email support only (No call)</div>
      <hr className="border-black/20 w-full" />
      <div className="text-gray-500 text-sm md:text-base text-center">Visible on first page</div>
      <hr className="border-black/20 w-full" />
      <div className="text-gray-500 text-sm md:text-base text-center">2 Relationship calls per year</div>
      <hr className="border-black/20 w-full" />
      <div className="text-gray-500 text-sm md:text-base text-center">Two reviews can be chosen to be pinned to top</div>
      <hr className="border-black/20 w-full" />
      <div className="text-gray-500 text-sm md:text-base text-center">Can be listed in multiple cities (Additional Charges apply)</div>
      <hr className="border-black/20 w-full" />
      <div className="text-gray-500 text-sm md:text-base text-center">Visible contact details of customers who call you</div>
      <hr className="border-black/20 w-full" />
      <div className="text-gray-500 text-sm md:text-base text-center">Unlimited photo uploads</div>
    </div>
  );
};

export default Pro;