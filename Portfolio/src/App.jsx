import React from "react";
 // your header component
import "./App.css"; // ensure your CSS file is imported
import Header from "./components/Header";
import Intro from "./components/Intro";

export default function App() {
  return (
    <div>
      
      <div className="background"></div>
      <div className="main-content">
        <Header />
       <Intro />
        
      </div>
    </div>
  );
}
