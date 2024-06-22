import React, { useState } from 'react';
import upArrow from '../../../assets/images/ProductDetailsImages/uparrow.png' // Adjust the path as needed
import downArrow from '../../../assets/images/ProductDetailsImages/downarrow.png'// Adjust the path as needed

const FAQ = () => {
  const [open, setOpen] = useState([false, false, false, false, false]);

  const toggle = (index) => {
    setOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const questions = [
    "Does Club Mahindra Kensville Golf Resort allow small size gatherings (<100)?",
    "What is Club Mahindra Kensville Golf Resort's policy on catering?",
    "What is Club Mahindra Kensville Golf Resort's policy on decor?",
    "Is outside alcohol permitted at Club Mahindra Kensville Golf Resort?",
    "What is Club Mahindra Kensville Golf Resort's policy on DJ?"
  ];

  const answers = [
    "Less than 50 Pax allowed",
    "Catering policy details...",
    "Decor policy details...",
    "Outside alcohol policy details...",
    "DJ policy details..."
  ];

  return (
    <div className="p-4 mx-[10px] md:mx-[20px] border border-gray-400 rounded-[20px] my-[20px]">
      <h2 className="text-[18px] font-bold mb-4">Frequently Asked Questions</h2>
      <hr className="mb-4 border-gray-400"/>
      {questions.map((question, index) => (
        <div key={index} className="mb-7">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggle(index)}>
            <p className="text-lg">{question}</p>
            <img src={open[index] ? upArrow : downArrow} alt="Toggle icon" className="w-7 h-7"/>
          </div>
          {open[index] && <p className="mt-1 text-gray-700">{answers[index]}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
