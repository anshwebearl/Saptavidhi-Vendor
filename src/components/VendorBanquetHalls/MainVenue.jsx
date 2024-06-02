import React, { useState } from 'react';
import Filter from './Filter';
import VenueCard from './VenueCard';
import HotelCard from './HotelCard';
import Pagination from './Pagination';

const MainVenue = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 
  const totalVenueCards = 42; 
  const totalPages = Math.ceil(totalVenueCards / itemsPerPage);

  const venueData = [
    {
      src: "SmallFuncDecor.jpg",
      title: "The Beginning",
      subtitle: "Banquet halls, Lawns / Farm House",
      location: "Vashi, Navi Mumbai",
      detailsArray: ["100-2000 Pax", "152 Rooms", "152 Rooms"],
      priceVeg: 2000,
      priceNonVeg: 2000
    },
    {
      src: "SmallFuncDecor.jpg",
      title: "The Beginning",
      subtitle: "Banquet halls, Lawns / Farm House",
      location: "Vashi, Navi Mumbai",
      detailsArray: ["100-2000 Pax", "152 Rooms", "152 Rooms"],
      priceVeg: 2000,
      priceNonVeg: 2000
    },
        {
      src: "SmallFuncDecor.jpg",
      title: "The Beginning",
      subtitle: "Banquet halls, Lawns / Farm House",
      location: "Vashi, Navi Mumbai",
      detailsArray: ["100-2000 Pax", "152 Rooms", "152 Rooms"],
      priceVeg: 2000,
      priceNonVeg: 2000
    },
    {
      src: "SmallFuncDecor.jpg",
      title: "The Beginning",
      subtitle: "Banquet halls, Lawns / Farm House",
      location: "Vashi, Navi Mumbai",
      detailsArray: ["100-2000 Pax", "152 Rooms", "152 Rooms"],
      priceVeg: 2000,
      priceNonVeg: 2000
    },
    {
      src: "SmallFuncDecor.jpg",
      title: "The Beginning",
      subtitle: "Banquet halls, Lawns / Farm House",
      location: "Vashi, Navi Mumbai",
      detailsArray: ["100-2000 Pax", "152 Rooms", "152 Rooms"],
      priceVeg: 2000,
      priceNonVeg: 2000
    },
    {
      src: "SmallFuncDecor.jpg",
      title: "The Beginning",
      subtitle: "Banquet halls, Lawns / Farm House",
      location: "Vashi, Navi Mumbai",
      detailsArray: ["100-2000 Pax", "152 Rooms", "152 Rooms"],
      priceVeg: 2000,
      priceNonVeg: 2000
    },
    {
      src: "SmallFuncDecor.jpg",
      title: "The Beginning",
      subtitle: "Banquet halls, Lawns / Farm House",
      location: "Vashi, Navi Mumbai",
      detailsArray: ["100-2000 Pax", "152 Rooms", "152 Rooms"],
      priceVeg: 2000,
      priceNonVeg: 2000
    },
    {
      src: "SmallFuncDecor.jpg",
      title: "The Beginning",
      subtitle: "Banquet halls, Lawns / Farm House",
      location: "Vashi, Navi Mumbai",
      detailsArray: ["100-2000 Pax", "152 Rooms", "152 Rooms"],
      priceVeg: 2000,
      priceNonVeg: 2000
    },
    {
      src: "SmallFuncDecor.jpg",
      title: "The Beginning",
      subtitle: "Banquet halls, Lawns / Farm House",
      location: "Vashi, Navi Mumbai",
      detailsArray: ["100-2000 Pax", "152 Rooms", "152 Rooms"],
      priceVeg: 2000,
      priceNonVeg: 2000
    },
    {
      src: "SmallFuncDecor.jpg",
      title: "The Beginning",
      subtitle: "Banquet halls, Lawns / Farm House",
      location: "Vashi, Navi Mumbai",
      detailsArray: ["100-2000 Pax", "152 Rooms", "152 Rooms"],
      priceVeg: 2000,
      priceNonVeg: 2000
    },
    {
      src: "SmallFuncDecor.jpg",
      title: "The Beginning",
      subtitle: "Banquet halls, Lawns / Farm House",
      location: "Vashi, Navi Mumbai",
      detailsArray: ["100-2000 Pax", "152 Rooms", "152 Rooms"],
      priceVeg: 2000,
      priceNonVeg: 2000
    },
    {
      src: "hotel.jpeg",
      title: "The Beginning",
      subtitle: "Banquet halls, Lawns / Farm House",
      location: "Vashi, Navi Mumbai",
      detailsArray: ["100-2000 Pax", "152 Rooms", "152 Rooms"],
      priceVeg: 2000,
      priceNonVeg: 2000
    }
  ];

  const currentVenueCards = venueData
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    .map((venue, index) => (
      <VenueCard
        key={index + (currentPage - 1) * itemsPerPage}
        src={venue.src}
        title={venue.title}
        subtitle={venue.subtitle}
        location={venue.location}
        detailsArray={venue.detailsArray}
        priceVeg={venue.priceVeg}
        priceNonVeg={venue.priceNonVeg}
      />
    ));

  return (
    <div className="container mx-auto px-4">
      <div className="mb-4">
        <Filter />
      </div>

      <div className="flex flex-wrap ">
        {currentVenueCards}
      </div>

      <div className="mt-4 flex justify-center">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      {/* <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4'> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 mt-4'>
        {[...Array(4)].map((_, index) => (
          <HotelCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default MainVenue;









