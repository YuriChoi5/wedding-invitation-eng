// import React, { useState } from 'react';
// import './Slider.css';

// import Main from '../page/Main';
// import Details from '../page/Details';
// import RSVP from '../page/RSVP';

// const Slider = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const handleWheel = (event) => {
//     if (event.deltaY > 0) {
//       // Scrolling down
//       setCurrentPage((prevPage) => (prevPage < 3 ? prevPage + 1 : 1));
//     } else {
//       // Scrolling up
//       setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 3));
//     }
//   };

//   const handleDotClick = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="slider" onWheel={handleWheel}>
//       <div className={`page page-${currentPage}`}>
//         {currentPage === 1 && <Main  zoomOut={true} />}
//         {currentPage === 2 && <Details />}
//         {currentPage === 3 && <RSVP />}
//       </div>
//       <div className="dots">
//         {[1, 2, 3].map((pageNumber) => (
//           <div
//             key={pageNumber}
//             className={`dot ${currentPage === pageNumber ? 'active' : ''}`}
//             onClick={() => handleDotClick(pageNumber)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;

const Slider = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [startY, setStartY] = useState(null);

  const handleTouchStart = (event) => {
    setStartY(event.touches[0].clientY);
  };

  const handleTouchMove = (event) => {
    if (startY !== null) {
      const deltaY = event.touches[0].clientY - startY;

      if (deltaY > 50) {
        // Swipe down
        handleSwipe('down');
      } else if (deltaY < -50) {
        // Swipe up
        handleSwipe('up');
      }

      setStartY(null);
    }
  };

  const handleSwipe = (direction) => {
    if (direction === 'down' && currentPage < 3) {
      // Swipe down to the next page
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (direction === 'up' && currentPage > 1) {
      // Swipe up to the previous page
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleDotClick = (pageNumber) => {
    // Handle dot click and update the current page
    setCurrentPage(pageNumber);
  };

  return (
    <div
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className={`page page-${currentPage}`}>
        {currentPage === 1 && <Main zoomOut={true} />}
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
