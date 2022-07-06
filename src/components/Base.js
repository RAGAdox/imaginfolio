import React, { useState } from "react";
import bgLeaf from "../assets/bg-leaf.png";
import Navbar from "./Navbar";
const Base = ({ children }) => {
  const [loaded, setOnLoaded] = useState(false);
  return (
    <div>
      <div className={`w-full h-screen  ${loaded ? "" : "hidden"}`}>
        <img
          src={bgLeaf}
          className="w-full h-screen -z-10 absolute inset-0 object-cover object-center animate-bg-image-fade-in"
          onLoadCapture={(d) => setOnLoaded(!loaded)}
        />
        <div className="fixed top-0 left-0 z-50 w-full lg:w-auto">
          <Navbar />
        </div>
        <div className="w-full h-screen overflow-hidden	 backdrop-filter backdrop-blur-sm">
          {children}
        </div>
      </div>
      <div
        className={`w-full h-screen bg-gray-900 ${!loaded ? "" : "hidden"}`}
      ></div>
    </div>
  );
};

export default Base;
