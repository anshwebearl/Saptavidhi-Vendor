import React, {useState} from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import GridHeader from './GridHeader';
import Pagination from './GridFooter';

const GridContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 
  const totalVenueCards = 42; 
  const totalPages = Math.ceil(totalVenueCards / itemsPerPage);
  return (
    <div className="max-w-[1200px] mx-auto mt-10 w-full bg-purple-50 p-4">
      <GridHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        <div className="col-span-1">
          <Card1 />
        </div>
        <div className="col-span-1">
          <Card2 />
        </div>
        <div className="col-span-1">
          <Card3 />
        </div>
        <div className="col-span-1">
          <Card4 />
        </div>
      </div>
      <footer className="text-center mt-8">
        <Pagination totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}/>
      
      </footer>
    </div>
  );
};

export default GridContainer;
