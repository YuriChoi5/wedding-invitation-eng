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

import React, { useState, useEffect, useRef } from "react";
import "./Slider.css";

import Main from "../page/Main";
import Details from "../page/Details";
import RSVP from "../page/RSVP";

const Slider = () => {
  const [currentPage, setCurrentPage] = useState(1);
  let touchStartY = useRef(0);
  console.log(touchStartY);

  useEffect(() => {
    const handleTouchStart = (event) => {
      console.log("handleTouchStart");

      touchStartY = event.touches[0].clientY;
      console.log(touchStartY);
    };

    const handleTouchMove = (event) => {
      const deltaY = event.touches[0].clientY - touchStartY;
      console.log("handleTouchMove");
      console.log(deltaY);

      if (deltaY > 50) {
        // Swipe down
        handleSwipe("down");
      } else if (deltaY < -50) {
        // Swipe up
        handleSwipe("up");
      }
    };

    const handleSwipe = (direction) => {
      console.log("handleSwipe direction:");
      console.log(direction);
      if (direction === "down") {
        setCurrentPage((prevPage) => (prevPage < 3 ? prevPage + 1 : 1));
      } else if (direction === "up") {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 3));
      }
    };

    const handleScroll = (event) => {
      console.log("handleScroll");

      // Uncomment the next line if you want to prevent the default scroll behavior
      // event.preventDefault();

      const scrollDelta = event.deltaY;
      console.log(scrollDelta);

      if (scrollDelta > 0) {
        // Scroll down
        handleSwipe("down");
      } else if (scrollDelta < 0) {
        // Scroll up
        handleSwipe("up");
      }
    };

    document.body.addEventListener("touchstart", handleTouchStart);
    document.body.addEventListener("touchmove", handleTouchMove);
    document.body.addEventListener("wheel", handleScroll);

    return () => {
      document.body.removeEventListener("touchstart", handleTouchStart);
      document.body.removeEventListener("touchmove", handleTouchMove);
      document.body.removeEventListener("wheel", handleScroll);
    };
  }, [currentPage]);

  const handleDotClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={`slider page-${currentPage}`}>
      <div className="page">
        {currentPage === 1 && <Main zoomOut={true} />}
        {currentPage === 2 && <Details />}
        {currentPage === 3 && <RSVP />}
      </div>
      <div className="dots">
        {[1, 2, 3].map((pageNumber) => (
          <div
            key={pageNumber}
            className={`dot ${currentPage === pageNumber ? "active" : ""}`}
            onClick={() => handleDotClick(pageNumber)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
