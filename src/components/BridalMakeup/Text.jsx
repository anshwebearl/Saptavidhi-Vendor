import React from 'react';
import Container from '../../assets/images/BridalMakeup/Container.png';

const Text = () => {
  return (
    <div className="bg-white max-w-[1200px] mx-auto flex flex-col lg:flex-row font-poppins my-8 px-0 lg:px-0 justify-between">
      <div className="w-full lg:w-1/2 p-4 text-left">
        <h1 className="text-[20px] font-medium mb-2">Bridal Makeup</h1>
        <hr className="border-red-700 mb-2" />
        <p className="mb-4 text-[16px] lg:w-[550px]">
          Your wedding look is incomplete without bridal makeup. Browse through our blogs for tons of ideas and inspirations for the perfect makeup look for your special day.
        </p>
        <div className="flex flex-col lg:flex-row -my-4 text-[16px] lg:w-[550px]">
          <ul className="w-full lg:w-1/2 list-disc list-outside p-4 text-[#FF6B85]">
            <li className="mb-2">Bridal Beauty Checklists and To-dos</li>
            <li className="mb-2">Bridal Beauty Checklists and To-dos</li>
            <li className="mb-2">Best Engagement Makeup Looks</li>
            <li className="mb-2">100+ Bridal makeup images</li>
          </ul>
          <ul className="w-full lg:w-1/2 list-disc list-outside p-4 text-[#FF6B85]">
            <li className="mb-2">South Indian Bridal Makeup Looks</li>
            <li className="mb-2">South Indian Bridal Makeup Looks</li>
            <li className="mb-2">Things to ask your makeup Artist</li>
            <li className="mb-2">Find Bridal Makeup Artists</li>
          </ul>
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-4 flex justify-center lg:justify-end mt-4 lg:mt-2 lg:ml-12">
        <img 
          src={Container} 
          alt="Example" 
          className="w-full lg:w-[500px] h-auto"
        />
      </div>
    </div>
  );
};

export default Text;
