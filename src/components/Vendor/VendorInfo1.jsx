import CircularProgress from "./CircularProgress";

const VendorInfo1 = () => {
  return (
    <div className="md:pl-6 flex flex-col gap-5">
      <div className="border-[#00000033] border-[1px] p-5 md:p-8 rounded-3xl flex flex-col gap-3">
        <p className="font-[500] text-lg md:text-2xl">Profile Analytics</p>
        <div className="border-[#00000033] border-b-[1px]"> </div>
        <div className="flex h-full items-center justify-between gap-5 flex-wrap">
          <CircularProgress percentage={10} />
          <div className="border-[#00000033] border-[1px] p-5 flex-grow  md:p-10 rounded-2xl flex flex-col h-full w-fit items-center max-w-[150px] md:max-w-[200px]">
            <p className="text-xl md:text-3xl">0</p>
            <p className="text-lg md:text-2xl">Count</p>
          </div>
          <div className="border-[#00000033] border-[1px] p-5 flex-grow md:p-10 rounded-2xl flex flex-col h-full w-fit items-center max-w-[150px] md:max-w-[200px]">
            <p className="text-xl md:text-3xl">0</p>
            <p className="text-lg md:text-2xl">Leads</p>
          </div>
          <div className="border-[#00000033] border-[1px] p-5 flex-grow md:p-10 rounded-2xl flex flex-col h-full w-fit items-center max-w-[150px] md:max-w-[200px]">
            <p className="text-xl md:text-3xl">0</p>
            <p className="text-lg md:text-2xl">Page View</p>
          </div>
        </div>
      </div>
      <div className="border-[#00000033] border-[1px] p-5 md:p-8 rounded-3xl flex flex-col gap-3">
        <p className="font-[500] text-lg md:text-2xl">Complete your profile by:</p>
        <div className="border-[#00000033] border-b-[1px]"> </div>
        <ul className="list-disc pl-3 md:pl-4 space-y-1 md:space-y-3">
          <li className="text-[#FF6B85]">
            <p className="text-black text-sm md:text-lg">Answering your FAQs</p>
          </li>
          <li className="text-[#FF6B85]">
            <p className="text-black text-sm md:text-lg">Linking your profile to your Facebook page/ website</p>
          </li>
          <li className="text-[#FF6B85]">
            <p className="text-black text-sm md:text-lg">Adding images to your portfolio</p>
          </li>
          <li className="text-[#FF6B85]">
            <p className="text-black text-sm md:text-lg">Get featured in a Real Wedding. Email your work to submissions@wedmegood.com</p>
          </li>
          <li className="text-[#FF6B85]">
            <p className="text-black text-sm md:text-lg">Upload your first album to get visibility on our inspiration gallery and social media handles</p>
          </li>
          <li className="text-[#FF6B85]">
            <p className="text-black text-sm md:text-lg">Invite clients to review your work</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VendorInfo1;
