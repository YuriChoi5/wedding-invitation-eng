import React, { useState, useEffect } from "react";
import "./Details.css";

const Details = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prevLines) => prevLines + 1);
    }, 500);

    if (visibleLines === 4) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [visibleLines]);

  return (
    <div className="background2">
      <div className={visibleLines >= 1 ? "visible" : ""}>
        Join us to celebrate on
        <div className="visible vertical-line"></div>
      </div>

      <div className={visibleLines >= 2 ? "visible" : ""}>
        June 1, 2024
        <div className="visible vertical-line"></div>
      </div>

      <div className={visibleLines >= 3 ? "visible" : ""}>
        5:30 PM
        <div className="visible vertical-line"></div>
      </div>

      <div className={visibleLines >= 4 ? "visible address" : ""}>
        <div className="visible">grace hall(floor l)</div>

        <div className="visible">w.square convention</div>
        <br></br>
        <a href="https://map.naver.com/p/entry/place/36301790?c=15.00,0,0,0,dh" target="_blank" rel="noreferrer">
          naver map &#128077;
        </a>
        <a
          href="https://maps.app.goo.gl/ayB76kJzqAxLscZD6"
          target="_blank"
          rel="noreferrer"
        >
          google map &#128078;
        </a>

        <br></br>
        <div className="visible">
          경기 성남시 분당구 판교역로226번길 16,
          <br></br>W스퀘어컨벤션
        </div>
      </div>
    </div>
  );
};

export default Details;
