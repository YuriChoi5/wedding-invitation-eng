import React from "react";
import "./RSVP.css";

const RSVP = () => {
  return (
    <div className="RSVP">
      <h2>we hope to see you on our special day</h2>
      <a
        href="https://forms.gle/7zXka5jUSnmkSdXv8"
        className="form-link"
        target="_blank"
        rel="noreferrer"
      >
        RSVP
      </a>
      <img src="./laughter.jpg" alt="RSVP" border="0"></img>
      <h3>Love, Dmitry & Yuri</h3>
    </div>
  );
};

export default RSVP;
