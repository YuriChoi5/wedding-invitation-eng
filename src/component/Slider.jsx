import React, { useState } from 'react';
import './Slider.css';

import Main from '../page/Main';
import Details from '../page/Details';
import RSVP from '../page/RSVP';

const Slider = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      // Scrolling down
      setCurrentPage((prevPage) => (prevPage < 3 ? prevPage + 1 : 1));
    } else {
      // Scrolling up
      setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 3));
    }
  };

  const handleDotClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="slider" onWheel={handleWheel}>
      <div className={`page page-${currentPage}`}>
        {currentPage === 1 && <Main  zoomOut={true} />}
        {currentPage === 2 && <Details />}
        {currentPage === 3 && <RSVP />}
      </div>
      <div className="dots">
        {[1, 2, 3].map((pageNumber) => (
          <div
            key={pageNumber}
            className={`dot ${currentPage === pageNumber ? 'active' : ''}`}
            onClick={() => handleDotClick(pageNumber)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
