import React from 'react';

const GoogleMyBusiness = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-6 bg-white rounded-lg shadow-md font-poppins my-10 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-end">
        <div className="md:col-span-3 space-y-4 border-2 rounded-3xl border-gray-300 p-4">
          <h2 className="text-xl font-semibold mb-4 text-left my-2">Google My Business</h2>
          <div className="p-6 border-2 border-pink-300 rounded-lg mt-4">
            <div className="text-center mb-6">
              <h3 className="text-xl text-[#FF6B85]">Garden</h3>
              <p className="text-[#FF6B85]">10000/Year</p>
              <button className="mt-4 px-4 py-2 bg-[#FF6B85] text-white rounded-3xl">Pay Now</button>
            </div>
            <ul className="space-y-2">
              {[
                "Google My Business and Google Maps Listing Creation",
                "Instant Google My Business & Google Maps Listing Verification",
                "WedMeGood Verified Listing",
                "Online Presence - Creation/Updation of Google Listing & Dashboard Access to Manage it",
                "Google Messaging Feature from WMG Dashboard",
                "Review and Post Management / Reply Software",
                "Training on Management of Google listing",
                "Support on Google My Business listing issues"
              ].map((item, index) => (
                <li key={index} className="border-t pt-2">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMyBusiness;
