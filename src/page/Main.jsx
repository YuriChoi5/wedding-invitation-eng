
import { useState, useEffect } from 'react';
import React from 'react';
import './Main.css';

const Main = ({zoomOut}) => {
    const [isZoomedOut, setIsZoomedOut] = useState(false);
    const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    if (zoomOut) {
      setIsZoomedOut(true);
    } else {
      setIsZoomedOut(false);
    }

    const currentDate = new Date();
    const targetDate = new Date('2024-06-01T00:00:00+09:00');
    const timeDifference = targetDate.getTime() - currentDate.getTime();
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    setDaysRemaining(daysRemaining);
       

  }, [zoomOut]);

    return (
        <div className={`background ${isZoomedOut ? 'zoom-out' : ''}`}>
            <h1>Dmitry &times; Yuri</h1>
            <p>{daysRemaining} days until wedding</p>
        </div>
    );
}

export default Main;