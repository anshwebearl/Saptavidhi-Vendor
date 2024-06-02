const GoogleMyBusiness = () => {
  return (
    <div className="w-full space-y-4 border-[1px] rounded-3xl border-[#00000033] p-4 md:p-6">
      <h2 className="text-lgs md:text-xl font-semibold ">Google My Business</h2>
      <div className="p-4 md:p-6 border-[1px] border-[#FF6B85] rounded-lg flex flex-col gap-4 md:gap-6">
        <div className="text-center flex flex-col gap-3 md:gap-5">
          <div>
            <h3 className="text-xl text-[#FF6B85]">Garden</h3>
            <p className="text-[#FF6B85] text-xl">10000/Year</p>
          </div>
          <button className="px-3 py-1 md:text-lg text-base md:px-4 md:py-2 bg-[#FF6B85] w-fit self-center text-white rounded-3xl">
            Pay Now
          </button>
        </div>
        <ul className="text-center">
          {[
            "Google My Business and Google Maps Listing Creation",
            "Instant Google My Business & Google Maps Listing Verification",
            "WedMeGood Verified Listing",
            "Online Presence - Creation/Updation of Google Listing & Dashboard Access to Manage it",
            "Google Messaging Feature from WMG Dashboard",
            "Review and Post Management / Reply Software",
            "Training on Management of Google listing",
            "Support on Google My Business listing issues",
          ].map((item, index) => (
            <li
              key={index}
              className="text-[#565353] border-t-[#00000033] border-t-[1px] font-[500] text-sm md:text-lg py-3 md:py-4"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GoogleMyBusiness;
