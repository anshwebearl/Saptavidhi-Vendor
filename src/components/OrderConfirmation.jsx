import React from 'react';

const OrderConfirmation = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md font-poppins my-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 border border-gray-300 rounded-lg p-4">
        <div className="lg:col-span-2 space-y-4 relative">
          <h2 className="text-lg text-left font-semibold mb-4">Confirm Order</h2>
          <hr />
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-semibold">Wedsta Silver Package</h3>
                <p className="text-pink-500 text-xs text-left">
                  ₹ 4,000/person <span className="line-through text-gray-500">₹ 4,000</span>
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-2 py-1 rounded bg-[#FF8DA6]">-</button>
                <span>1</span>
                <button className="px-2 py-1 bg-[#FF8DA6] rounded">+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-1 relative mb-10 lg:mb-0 mt-10 lg:mt-0">
          <h2 className="text-lg text-left font-semibold mb-4">Payment Summary</h2>
          <hr className="mb-6" />
          <div className="border rounded-lg space-y-4 mt-4 p-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2 text-[11px]">
                  <input type="radio" name="payment" className="form-radio text-pink-500" />
                  <label>Pay full amount and get 5% off</label>
                </div>
                <span className="text-green-500 text-[10px]">Save ₹350</span>
              </div>
              <span className="line-through text-gray-500 text-xs mx-2">₹ 35,000</span>
              <span className="text-[#FF6B85] text-xs">₹ 36,000</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-[11px]">
                <input type="radio" name="payment" className="form-radio text-pink-500" />
                <label>Pay 50% now and 50% later</label>
              </div>
              <span className="text-[#FF6B85] text-xs">₹ 36,000</span>
            </div>
            <button className="w-full py-3 mt-4 bg-[#FF6B85] text-white rounded-3xl hover:bg-pink-600 my-4">Proceed to Pay</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 border border-gray-300 rounded-lg p-4">
        <div className="lg:col-span-2 space-y-4 relative p-3">
          <h2 className="text-lg font-semibold text-left mb-4">Add Address Details</h2>
          <div className="absolute inset-y-0 right-0 w-px bg-gray-200"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Pincode", "City", "House No. Building Name", "Enter Road Name, Area, Colony",
              "Name", "Email", "Phone No.", "Secondary Phone No."
            ].map((placeholder, idx) => (
              <div key={idx} className="flex flex-col">
                <label className="text-left mb-1">{placeholder}</label>
                <input
                  type="text"
                  placeholder={placeholder}
                  className="mt-1 block w-full rounded-md border-[1px] p-3 border-[#FF8DA6] shadow-sm focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4 lg:col-span-1 mt-5">
          <h2 className="text-lg font-semibold mb-4">Select Slot</h2>
          <select className="mt-1 block w-full rounded-md border-[1px] p-3 border-[#FF8DA6] shadow-sm focus:border-[#FF8DA6] focus:ring focus:ring-pink-200 focus:ring-opacity-50">
            <option>Select Slot</option>
          </select>
          <h2 className="text-lg font-semibold mb-4">Please mention other requirements</h2>
          <textarea
            placeholder="Please mention other requirements"
            className="mt-1 block w-full border-[1px] p-3 rounded-md border-[#FF8DA6] shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
            rows="4"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
