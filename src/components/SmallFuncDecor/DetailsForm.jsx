import React from 'react';
import Grid from './Grid';
import ReviewCardGroup from './ReviewCard';

const DetailsForm = () => {
  const reviewData = [
    {
      src: "johndoe.jpeg",
      name: "Saathi Rathod",
      date: "18 June, 2020",
      description: "We had booked for our House function decor and they had done a fantastic job. They were so understanding of our requirements and fulfilled all our expectations."
    },
    {
      src: "johndoe.jpeg",
      name: "Saathi Rathod",
      date: "18 June, 2020",
      description: "We had booked for our House function decor and they had done a fantastic job. They were so understanding of our requirements and fulfilled all our expectations."
    },
    {
      src: "johndoe.jpeg",
      name: "Saathi Rathod",
      date: "18 June, 2020",
      description: "We had booked for our House function decor and they had done a fantastic job. They were so understanding of our requirements and fulfilled all our expectations."
    },
    {
      src: "johndoe.jpeg",
      name: "Saathi Rathod",
      date: "18 June, 2020",
      description: "We had booked for our House function decor and they had done a fantastic job. They were so understanding of our requirements and fulfilled all our expectations."
    },
  ];

  return (
    <div className="relative h-auto w-full flex-wrap">
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[600px] w-full flex-wrap">
        <div className="absolute inset-0 bg-[url('/SmallFuncDecor.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative w-full h-full px-4 sm:px-8 md:px-16 lg:px-24 flex items-center z-10">
          <div className="flex flex-col md:flex-row justify-center md:justify-between w-full items-center gap-10">
            <div className="flex flex-col gap-6 text-white max-w-lg text-center md:text-left px-4 z-20">
              <p className="font-bold text-2xl sm:text-3xl md:text-4xl leading-snug">
                Decorate your intimate event with <span className='text-[#F97096]'>SaptaVidhi</span>
              </p>
              <p className="font-medium text-lg sm:text-xl leading-snug">
                Haldi, mehendi, or engagement decor for under 100 guests
              </p>
              <table className="w-full text-sm sm:text-base">
                <tbody>
                  <tr className="flex flex-col sm:flex-row">
                    <td className="flex items-center"><img src="/tick.png" alt="Point Image" className="h-6 w-6 mr-2" /></td>
                    <td className="mb-2 sm:mb-0">Decor starting at INR 30,000 only</td>
                    <td className="flex items-center mt-2 sm:mt-0"><img src="/tick.png" alt="Point Image" className="h-6 w-6 mr-2" /></td>
                    <td>Customizable Decor</td>
                  </tr>
                  <tr className="flex flex-col sm:flex-row mt-4 sm:mt-0">
                    <td className="flex items-center"><img src="/tick.png" alt="Point Image" className="h-6 w-6 mr-2" /></td>
                    <td className="mb-2 sm:mb-0">Hygiene and Safety Compliant Team</td>
                    <td className="flex items-center mt-2 sm:mt-0"><img src="/tick.png" alt="Point Image" className="h-6 w-6 mr-2" /></td>
                    <td>Hassle free decor at your doorstep</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="relative flex items-center justify-center w-full md:w-auto px-4 z-20 hidden md:block">
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md max-w-xs md:max-w-sm w-full font-poppins text-xs sm:text-sm">
                <h1 className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-4">Please Share Your Details</h1>
                <hr className="mb-6 border-gray-300" />

                <form>
                  <label className="block text-black mb-2 text-left">Full Name</label>
                  <input
                    type="text"
                    id='name'
                    placeholder="Enter Full Name"
                    className="w-full p-2 mb-4 border rounded-xl border-[#FF8DA6] focus:outline-none"
                  />

                  <label className="block text-black mb-2 text-left">Mobile No.</label>
                  <input
                    type="text"
                    id='mobileno'
                    placeholder="Enter Mobile No."
                    className="w-full p-2 mb-4 border rounded-xl border-[#FF8DA6] focus:outline-none"
                  />

                  <label className="block text-black mb-2 text-left">Email</label>
                  <input
                    type="email"
                    id='email'
                    placeholder="Enter Email"
                    className="w-full p-2 mb-4 border rounded-xl border-[#FF8DA6] focus:outline-none"
                  />

                  <label className="block text-black mb-2 text-left">Function Date</label>
                  <input
                    type="date"
                    id='date'
                    className="w-full p-2 mb-4 border rounded-xl border-[#FF8DA6] focus:outline-none"
                  />

                  <label className="block text-black mb-2 text-left">Choose Event</label>
                  <select
                    className="w-full p-2 mb-4 border rounded-xl border-[#FF8DA6] focus:outline-none"
                  >
                    <option>Event 1</option>
                    <option>Event 2</option>
                    <option>Event 3</option>
                  </select>

                  <button
                    type="submit"
                    className="w-full py-2 rounded-lg text-white bg-gradient-to-r from-[#FF8DA6] to-[#c2bfc1] focus:outline-none"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-0 mt-20 overflow-x-auto md:overflow-hidden">
        <Grid />
      </div>

      <ReviewCardGroup reviews={reviewData} />
    </div>
  );
};

export default DetailsForm;