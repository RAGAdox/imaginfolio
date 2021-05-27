import React, { useState, useEffect } from "react";
import bgLeaf from "../assets/bg-leaf.png";
import Navbar from "./Navbar";
const Base = ({ children }) => {
  const [loaded, setOnLoaded] = useState(false);
  useEffect(() => {
    console.log("Remounted ");
  }, []);
  console.log("Base accessed");
  return (
    <div>
      <div className={`w-full h-screen ${loaded ? "" : "hidden"} select-none`}>
        <img
          src={bgLeaf}
          className="w-full h-screen -z-10 absolute inset-0 object-cover object-center animate-bg-image-fade-in"
          onLoadCapture={(d) => setOnLoaded(!loaded)}
        />
        <div className="fixed top-0 left-0 z-50 w-full lg:w-auto">
          <Navbar />
        </div>
        <div className="w-full h-screen backdrop-filter backdrop-blur-sm">
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
