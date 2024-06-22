import React, { useState } from 'react';
import image2 from '../../../assets/images/ProductDetailsImages/image2.jpeg'
import image3 from '../../../assets/images/ProductDetailsImages/image3.jpeg'
import image4 from '../../../assets/images/ProductDetailsImages/image4.jpeg'
import image5 from '../../../assets/images/ProductDetailsImages/image5.jpeg'
import image6 from '../../../assets/images/ProductDetailsImages/image6.jpeg'
import image7 from '../../../assets/images/ProductDetailsImages/image7.jpeg'


const Gallery = () => {
  const [activeTab, setActiveTab] = useState('Portfolios');

  return (
    <div className="relative min-h-[400px] my-[20px] mx-[10px] md:mx-[20px] px-4 pt-4 pb-[50px] border border-gray-400 rounded-[20px] ">
      <div className="flex  mb-4">
        <button 
          className={`px-4 py-2 ${activeTab === 'Portfolios' ? 'text-pink-500 border-b-2 border-pink-500' : ''}`}
          onClick={() => setActiveTab('Portfolios')}
        >
          Portfolios (78)
        </button>
        <button 
          className={`px-4 py-2 ${activeTab === 'Albums' ? 'text-pink-500 border-b-2 border-pink-500' : ''}`}
          onClick={() => setActiveTab('Albums')}
        >
          Albums (78)
        </button>
        <button 
          className={`px-4 py-2 ${activeTab === 'Videos' ? 'text-pink-500 border-b-2 border-pink-500' : ''}`}
          onClick={() => setActiveTab('Videos')}
        >
          Videos (55)
        </button>
      </div>
      
      {activeTab === 'Portfolios' && (
        <div className="flex flex-wrap justify-between">
          <img src={image2} alt="Portfolio 1" className="w-1/3 rounded-[20px] p-2" />
          <img src={image3} alt="Portfolio 2" className="w-1/3 rounded-[20px] p-2" />
          <img src={image4} alt="Portfolio 3" className="w-1/3 rounded-[20px] p-2" />
          <img src={image5} alt="Portfolio 4" className="w-1/3 rounded-[20px] p-2" />
          <img src={image6} alt="Portfolio 5" className="w-1/3 rounded-[20px] p-2" />
          <img src={image7} alt="Portfolio 6" className="w-1/3 rounded-[20px] p-2" />
        </div>
      )}

      {activeTab === 'Albums' && (
        <div className="text-center text-gray-500">
          No albums to display.
        </div>
      )}

      {activeTab === 'Videos' && (
        <div className="text-center text-gray-500">
          No videos to display.
        </div>
      )}

      <div className="absolute bottom-2 right-2 text-center mt-4">
        <button className="px-3 py-1 border border-[#fd070782] rounded-[10px] hover:bg-gray-200">
          View All
        </button>
      </div>
    </div>
  );
};

export default Gallery;
