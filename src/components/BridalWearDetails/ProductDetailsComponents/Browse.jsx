import React from "react"
import BrowseCard from "./BrowseCard";
import image9 from '../../../assets/images/ProductDetailsImages/image9.jpeg';
import image10 from '../../../assets/images/ProductDetailsImages/image10.jpeg';
import image11 from '../../../assets/images/ProductDetailsImages/image11.jpeg';

function Browse() {
    const venues = [
        {
          src: image9,
          title: 'The Beginning',
          subtitle: 'Banquet halls, Lawns / Farm House',
          location: 'Vashi, Navi Mumbai',
          detailsArray: ['100-2000 Pax', '152 Rooms'],
          priceVeg: 2000,
          priceNonVeg: 2000,
        },
        {
          src: image10,
          title: 'Fairfield Mariotte',
          subtitle: 'Banquet halls, Lawns / Farm House',
          location: 'Ahmedabad, Gujarat',
          detailsArray: ['100-2000 Pax', '152 Rooms'],
          priceVeg: 2000,
          priceNonVeg: 2000,
        },
        {
          src: image11,
          title: 'Hotel German Palace',
          subtitle: 'Banquet halls, Lawns / Farm House',
          location: 'Ahmedabad, Gujarat',
          detailsArray: ['100-2000 Pax', '152 Rooms'],
          priceVeg: 2000,
          priceNonVeg: 2000,
        },
      ];
    
      return (
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Browse Similar Venues</h2>
            <button className="text-blue-600 hover:underline">View All</button>
          </div>
          <hr className="mb-4" />
          <div className="flex flex-wrap justify-start">
            {venues.map((venue, index) => (
              <BrowseCard key={index} {...venue} />
            ))}
          </div>
        </div>
      );
};

export default Browse;
