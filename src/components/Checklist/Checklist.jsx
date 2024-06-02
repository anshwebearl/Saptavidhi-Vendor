import React from 'react';
import bgimage from '../../assets/images/checklist.png'; // Import the checklist image
import vector from '../../assets/images/Vector.png'; // Import the vector image

const Checklist = () => {
  return (
    <div className="relative mx-auto h-[400px] w-full overflow-hidden my-10 px-4 md:px-0"> {/* Center the container and adjust padding */}
      <img src={bgimage} alt="Checklist" className=""/>
      <div className="absolute right-4 md:right-8  bottom-2 md:bottom-8 bg-pink-600 border border-white rounded-lg px-2 py-1 md:px-3 md:py-2 flex items-center justify-center ">
        <img src={vector} alt="Vector" className="w-3 h-3 md:w-7 md:h-6 mr-2" />
        <p className="text-white font-poppins text-[8px] md:text-sm ">
          Change Cover
        </p>
      </div>
    </div>
  );
};

export default Checklist;
