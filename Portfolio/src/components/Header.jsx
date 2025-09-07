import React from "react";
import logo from "../assets/logo.png"
export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
        <h1>Name</h1>
      </div>
      <div className="services">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Skills</a>
        <a href="#">Service</a>
        <a href="#">Contact</a>
      </div>
    </header>
  );
}
