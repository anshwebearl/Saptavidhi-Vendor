import React, { useState } from 'react';

const images = [
  "image1.png", "image2.png", "image1.png", "image2.png",
  "image1.png", "image2.png", "image2.png", "image2.png",
  "image1.png", "image1.png", "image1.png", "image2.png",
  "image1.png", "image2.png", "image1.png", "image2.png",
  "image1.png", "image2.png"
];

const LatestWork = () => {
  const [activeTab, setActiveTab] = useState('Haldi & Mehendi');

  return (
    <div className="max-w-7xl mx-auto p-4 border-2 border-gray-300 rounded-2xl font-poppins shadow-lg my-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-left mb-2 md:mb-0">See our latest work</h2>
        <div className="flex space-x-4">
          <h2
            className={`cursor-pointer ${activeTab === 'Haldi & Mehendi' ? 'text-pink-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('Haldi & Mehendi')}
          >
            Haldi & Mehendi
          </h2>
          <h2
            className={`cursor-pointer ${activeTab === 'Rooka/Engagement' ? 'text-pink-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('Rooka/Engagement')}
          >
            Rooka/Engagement
          </h2>
        </div>
      </div>
      <hr className="border-t border-gray-300 mb-4" />
      <div className="overflow-x-auto">
        <div className="flex md:grid md:grid-cols-9 sm:grid-cols-1 gap-4">
          {images.map((src, index) => (
            <div key={index} className="flex-shrink-0 w-full md:w-auto relative overflow-hidden rounded-lg shadow-lg">
              <img src={src} alt={`Work ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="px-4 py-2 bg-white text-black border-2 border-gradient-to-r from-[#FF8DA6] to-[#c2bfc1] rounded-lg">View All</button>
      </div>
    </div>
  );
};

export default LatestWork;
