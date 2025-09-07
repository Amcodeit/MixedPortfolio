import React from "react";
 // your header component
import "./App.css"; // ensure your CSS file is imported
import Header from "./components/Header";
import Intro from "./components/Intro";

import "./Css/About.css"
import "./Css/Skills.css"
import "./Css/Services.css"
import About from "./components/About";


export default function App() {
  return (
    <div>
      
      <div className="background"></div>
      <div className="main-content">
        <Header />
       <Intro />
        <About />
        
      </div>
    </div>
  );
}
