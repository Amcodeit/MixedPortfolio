import React from "react";
import photo from "../assets/photo.png"

export default function Intro() {
  return (
    <div className="info">
      <div className="intro">
        <h1>Kirtan Kumar</h1>
        <h3>
          And I'm a <span>Frontend Developer</span>
        </h3>
        <p>
          I'm professional web developer with strong skill in HTML, CSS,
          JavaScript, Tailwind, JQuery etc. I have working in this field almost
          3 years and all projects are complited successfully with 100% client
          satisfiction
        </p>
      </div>
      <img src={photo} alt="photo" />
    </div>
  );
}
