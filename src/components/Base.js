import React, { useState } from "react";
import bgLeaf from "../assets/bg-leaf.png";
import Navbar from "./Navbar";
//TODO - ANIMATE BACKGROUND FROM GRAY TO IMAGE THEN ANIMATE {children}
const Base = ({ children }) => {
  const [loaded, setOnLoaded] = useState(false);
  return (
    <div>
      <div className={`w-full h-screen ${loaded ? "" : "hidden"}`}>
        <img
          src={bgLeaf}
          className="w-full h-screen -z-10 absolute inset-0"
          onLoadCapture={(d) => setOnLoaded(!loaded)}
        />
        <div className="fixed top-0 left-0 z-50 w-full lg:w-auto">
          <Navbar />
        </div>
        {children}
      </div>
      <div
        className={`w-full h-screen bg-gray-900 ${!loaded ? "" : "hidden"}`}
      ></div>
    </div>
  );
};

export default Base;
