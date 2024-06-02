import React, { useState, useEffect } from 'react';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const visiblePages = 7; // Number of pages to show in the pagination bar
  const [startPage, setStartPage] = useState(1);

  useEffect(() => {
    // Adjust startPage if currentPage goes out of visible range
    if (currentPage < startPage) {
      setStartPage(currentPage);
    } else if (currentPage >= startPage + visiblePages) {
      setStartPage(currentPage - visiblePages + 1);
    }
  }, [currentPage]);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      if (currentPage - 1 < startPage) {
        setStartPage(startPage - 1);
      }
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      if (currentPage + 1 >= startPage + visiblePages) {
        setStartPage(startPage + 1);
      }
    }
  };

  const pages = [...Array(visiblePages)].map((_, index) => startPage + index).filter(page => page <= totalPages);

  return (
    <div className="flex items-center justify-center space-x-1 p-2 rounded-full border border-red-200">
      <button 
        onClick={handlePrevClick} 
        className="text-red-400"
        disabled={currentPage === 1}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>
      {pages.map(page => (
        <button 
          key={page} 
          onClick={() => setCurrentPage(page)}
          className={`w-6 h-6 flex items-center justify-center rounded-full ${currentPage === page ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : 'text-gray-700'}`}
        >
          {page}
        </button>
      ))}
      <button 
        onClick={handleNextClick} 
        className="text-red-400"
        disabled={currentPage === totalPages}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
