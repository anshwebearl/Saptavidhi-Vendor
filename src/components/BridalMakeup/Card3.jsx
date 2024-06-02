import React from 'react';
import Cards3 from '../../assets/images/BridalMakeup/Card3.png';

const Card3 = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full sm:w-[500px] mx-auto sm:mx-4 font-poppins my-4">
      <img src={Cards3} alt="Card3" className="w-full h-auto rounded-xl" />
      <div className="flex items-center justify-between mt-4">
        <span className="text-black text-sm">BY Sakshi | 10 May | 6 min read</span>
      </div>
      <h2 className="text-black text-[15px] font-bold mb-4 text-left">
        What To Buy For Your Makeup Trousseau - 2023 Edition
      </h2>
      <p className="text-black mb-4 text-[15px] text-left">
        Lehengas and suits aside, there is one part of your bridal trousseau that no bride should ever miss out on. Makeup! Whether you are a minimal gal or a bride who loves her makeup, everyone needs a basi...
      </p>
    </div>
  );
};

export default Card3;
