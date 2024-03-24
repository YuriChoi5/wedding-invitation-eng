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
        RSVP HERE
      </a>
      <a href="https://maps.app.goo.gl/J9pohsjFvQXXSX6w9" className="things-todo-link" target="_blank"
        rel="noreferrer"> <h2>Things to do in Korea</h2></a>
      <img src="./laughter.jpg" alt="RSVP" border="0"></img>
      <h3>Love, Dmitry & Yuri</h3>
    </div>
  );
};

export default RSVP;
